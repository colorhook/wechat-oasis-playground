'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var wechatAdapter = require('@oasis-engine/wechat-adapter');
var core = require('@oasis-engine/core');

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var DRACOWorker = /*#__PURE__*/function () {
  function DRACOWorker(workerSourceURL, decoderWASMBinary) {
    var _this = this;

    this._worker = void 0;
    this._costs = {};
    this._currentLoad = 0;
    this._callbacks = {};
    this._worker = new Worker(workerSourceURL);

    this._worker.onmessage = function (e) {
      var message = e.data;

      switch (message.type) {
        case "decode":
          _this._callbacks[message.id].resolve(message.geometry);

          break;

        case "error":
          _this._callbacks[message.id].reject(message);

          break;

        default:
          core.Logger.error('DRACOWorker: Unexpected message, "' + message.type + '"');
      }
    };

    if (decoderWASMBinary) {
      this._worker.postMessage({
        type: "init",
        decoderConfig: {
          wasmBinary: decoderWASMBinary
        }
      });
    } else {
      this._worker.postMessage({
        type: "init",
        decoderConfig: {}
      });
    }
  }

  var _proto = DRACOWorker.prototype;

  _proto.setCosts = function setCosts(taskId, cost) {
    this._costs[taskId] = cost;
  };

  _proto.addCurrentLoad = function addCurrentLoad(cost) {
    this._currentLoad += cost;
  };

  _proto.setCallback = function setCallback(taskId, resolve, reject) {
    this._callbacks[taskId] = {
      resolve: resolve,
      reject: reject
    };
  };

  _proto.decode = function decode(taskId, taskConfig, buffer) {
    this._worker.postMessage({
      type: "decode",
      id: taskId,
      taskConfig: taskConfig,
      buffer: buffer
    }, [buffer]);
  };

  _proto.releaseTask = function releaseTask(taskId) {
    this._currentLoad -= this._costs[taskId];
    delete this._callbacks[taskId];
    delete this._costs[taskId];
  };

  _createClass(DRACOWorker, [{
    key: "currentLoad",
    get: // Worker instance.
    // Record byteLength of each task.
    // The sum of bytelength that the worker is currently dealing with, in order to sort the workers.
    function get() {
      return this._currentLoad;
    }
  }]);

  return DRACOWorker;
}();

var workerString = "#define GLSLIFY 1\nlet decoderPending;let decoderConfig;onmessage=function(e){const message=e.data;switch(message.type){case \"init\":decoderConfig=message.decoderConfig;decoderPending=new Promise(function(resolve){decoderConfig.onModuleLoaded=function(draco){resolve({draco: draco});};DracoDecoderModule(decoderConfig);});break;case \"decode\":const buffer=message.buffer;const taskConfig=message.taskConfig;decoderPending.then(module=>{const draco=module.draco;const decoder=new draco.Decoder();const decoderBuffer=new draco.DecoderBuffer();decoderBuffer.Init(new Int8Array(buffer),buffer.byteLength);try{const geometry=decodeGeometry(draco,decoder,decoderBuffer,taskConfig);const buffers=geometry.attributes.map(attr=>attr.array.buffer);if(geometry.index)buffers.push(geometry.index.array.buffer);self.postMessage({type: \"decode\",id: message.id,geometry},buffers);}catch(error){console.error(error);self.postMessage({type: \"error\",id: message.id,error: error.message});}finally{draco.destroy(decoderBuffer);draco.destroy(decoder);}});break;}};function decodeGeometry(draco,decoder,decoderBuffer,taskConfig){const attributeIDs=taskConfig.attributeIDs;const attributeTypes=taskConfig.attributeTypes;let dracoGeometry;let decodingStatus;const geometryType=decoder.GetEncodedGeometryType(decoderBuffer);if(geometryType===draco.TRIANGULAR_MESH){dracoGeometry=new draco.Mesh();decodingStatus=decoder.DecodeBufferToMesh(decoderBuffer,dracoGeometry);}else{throw new Error(\"DRACODecoder worker: Unexpected geometry type.\");}if(!decodingStatus.ok()||dracoGeometry.ptr===0){throw new Error(\"DRACODecoder worker: Decoding failed: \"+decodingStatus.error_msg());}const geometry={index: null,attributes:[]};for(let attributeName in attributeIDs){const attributeType=self[attributeTypes[attributeName]];let attribute;let attributeID;if(taskConfig.useUniqueIDs){attributeID=attributeIDs[attributeName];attribute=decoder.GetAttributeByUniqueId(dracoGeometry,attributeID);}else{attributeID=decoder.GetAttributeId(dracoGeometry,draco[attributeIDs[attributeName]]);if(attributeID===-1)continue;attribute=decoder.GetAttribute(dracoGeometry,attributeID);}geometry.attributes.push(decodeAttribute(draco,decoder,dracoGeometry,attributeName,attributeType,attribute));}if(geometryType===draco.TRIANGULAR_MESH){const numFaces=dracoGeometry.num_faces();const numIndices=numFaces*3;let dataSize;let ptr;let index;const indexType=self[taskConfig.indexType];switch(indexType){case Uint16Array:dataSize=numIndices*2;ptr=draco._malloc(dataSize);decoder.GetTrianglesUInt16Array(dracoGeometry,dataSize,ptr);index=new Uint16Array(draco.HEAPU16.buffer,ptr,numIndices).slice();draco._free(ptr);break;case Uint32Array:dataSize=numIndices*4;ptr=draco._malloc(dataSize);decoder.GetTrianglesUInt32Array(dracoGeometry,dataSize,ptr);index=new Uint32Array(draco.HEAPU32.buffer,ptr,numIndices).slice();draco._free(ptr);default:throw new Error(\"DRACODecoder: Unexpected index type.\");}geometry.index={array: index,itemSize: 1};}draco.destroy(dracoGeometry);return geometry;}function decodeAttribute(draco,decoder,dracoGeometry,attributeName,attributeType,attribute){const numComponents=attribute.num_components();const numPoints=dracoGeometry.num_points();const numValues=numPoints*numComponents;let ptr;let array;let dataSize;switch(attributeType){case Float32Array:dataSize=numValues*4;ptr=draco._malloc(dataSize);decoder.GetAttributeDataArrayForAllPoints(dracoGeometry,attribute,draco.DT_FLOAT32,dataSize,ptr);array=new Float32Array(draco.HEAPF32.buffer,ptr,numValues).slice();draco._free(ptr);break;case Int8Array:ptr=draco._malloc(numValues);decoder.GetAttributeDataArrayForAllPoints(dracoGeometry,attribute,draco.DT_INT8,numValues,ptr);array=new Int8Array(draco.HEAP8.buffer,ptr,numValues).slice();draco._free(ptr);break;case Int16Array:dataSize=numValues*2;ptr=draco._malloc(dataSize);decoder.GetAttributeDataArrayForAllPoints(dracoGeometry,attribute,draco.DT_INT16,dataSize,ptr);array=new Int16Array(draco.HEAP16.buffer,ptr,numValues).slice();draco._free(ptr);break;case Int32Array:dataSize=numValues*4;ptr=draco._malloc(dataSize);decoder.GetAttributeDataArrayForAllPoints(dracoGeometry,attribute,draco.DT_INT32,dataSize,ptr);array=new Int32Array(draco.HEAP32.buffer,ptr,numValues).slice();draco._free(ptr);break;case Uint8Array:ptr=draco._malloc(numValues);decoder.GetAttributeDataArrayForAllPoints(dracoGeometry,attribute,draco.DT_UINT8,numValues,ptr);array=new Uint8Array(draco.HEAPU8.buffer,ptr,numValues).slice();draco._free(ptr);break;case Uint16Array:dataSize=numValues*2;ptr=draco._malloc(dataSize);decoder.GetAttributeDataArrayForAllPoints(dracoGeometry,attribute,draco.DT_UINT16,dataSize,ptr);array=new Uint16Array(draco.HEAPU16.buffer,ptr,numValues).slice();draco._free(ptr);break;case Uint32Array:dataSize=numValues*4;ptr=draco._malloc(dataSize);decoder.GetAttributeDataArrayForAllPoints(dracoGeometry,attribute,draco.DT_UINT32,dataSize,ptr);array=new Uint32Array(draco.HEAPU32.buffer,ptr,numValues).slice();draco._free(ptr);break;default:throw new Error(\"DRACODecoder: Unexpected attribute type.\");}return{name: attributeName,array: array,itemSize: numComponents};}"; // eslint-disable-line

var LIB_PATH = "https://gw.alipayobjects.com/os/lib/alipay/draco-javascript/1.3.6/lib/";
var JS_FILE = "draco_decoder_gltf.js";
var WASM_FILE = "draco_decoder_gltf.r3bin";
var WASM_WRAPPER_FILE = "draco_wasm_wrapper_gltf.js";
var DRACODecoder = /*#__PURE__*/function () {
  function DRACODecoder(config) {
    if (config === void 0) {
      config = {
        type: "wasm",
        workerLimit: 4
      };
    }

    this.pool = [];
    this.workerLimit = Math.min(wechatAdapter.navigator.hardwareConcurrency || 4, 4);
    this.useJS = void 0;
    this.currentTaskId = 1;
    this.taskCache = new WeakMap();
    this.loadLibPromise = void 0;

    if (config.workerLimit > this.workerLimit) {
      core.Logger.warn("DRACOWorkerPool: Can not initialize worker pool with limit:" + config.workerLimit);
    } else {
      var _config$workerLimit;

      this.workerLimit = (_config$workerLimit = config.workerLimit) != null ? _config$workerLimit : 4;
    }

    this.useJS = typeof WebAssembly !== "object" || config.type === "js";
    this.loadLibPromise = this.preloadLib();
  }

  var _proto = DRACODecoder.prototype;

  _proto.preloadLib = function preloadLib() {
    var _this = this;

    if (this.loadLibPromise) {
      return this.loadLibPromise;
    }

    return new Promise(function (resolve, reject) {
      if (_this.useJS) {
        core.request("" + LIB_PATH + JS_FILE, {
          type: "text"
        }).then(function (jsSource) {
          var body = [jsSource, workerString].join("\n");
          var workerSourceURL = URL.createObjectURL(new Blob([body]));
          resolve({
            workerSourceURL: workerSourceURL,
            decoderWASMBinary: null
          });
        }).catch(function (reason) {
          reject(reason);
        });
      } else {
        Promise.all([core.request("" + LIB_PATH + WASM_WRAPPER_FILE, {
          type: "text"
        }), core.request("" + LIB_PATH + WASM_FILE, {
          type: "arraybuffer"
        })]).then(function (resources) {
          var wrapperSource = resources[0],
              decoderWASMBinary = resources[1];
          var body = [wrapperSource, workerString].join("\n");
          var workerSourceURL = URL.createObjectURL(new Blob([body]));
          resolve({
            workerSourceURL: workerSourceURL,
            decoderWASMBinary: decoderWASMBinary
          });
        }).catch(function (reason) {
          reject(reason);
        });
      }
    });
  };

  _proto.getWorker = function getWorker() {
    var _this2 = this;

    return this.preloadLib().then(function (worderResources) {
      if (_this2.pool.length < _this2.workerLimit) {
        var dracoWorker = new DRACOWorker(worderResources.workerSourceURL, worderResources.decoderWASMBinary);

        _this2.pool.push(dracoWorker);
      } else {
        _this2.pool.sort(function (a, b) {
          return a.currentLoad > b.currentLoad ? -1 : 1;
        });
      }

      return _this2.pool[_this2.pool.length - 1];
    });
  };

  _proto.decode = function decode(buffer, taskConfig) {
    var _this3 = this;

    var taskKey = JSON.stringify(taskConfig); // Check for an existing task using this buffer. A transferred buffer cannot be transferred.
    // again from this thread.

    if (this.taskCache.has(buffer)) {
      var cachedTask = this.taskCache.get(buffer);

      if (cachedTask.key === taskKey) {
        return cachedTask.promise;
      } else if (buffer.byteLength === 0) {
        // After using transferable to transfer data, the data in the original environment will be cleared, so it is judged that byteLength is 0, which means it has been transferred.
        // Technically, it would be possible to wait for the previous task to complete,
        // transfer the buffer back, and decode again with the second configuration. That
        // is complex, and I don't know of any reason to decode a Draco buffer twice in
        // different ways, so this is left unimplemented.
        throw new Error("DRACODecoder: Unable to re-decode a buffer with different " + "settings. Buffer has already been transferred.");
      }
    }

    var taskId = this.currentTaskId++;
    var cost = buffer.byteLength;
    var taskWorker;
    var task = new Promise(function (resolve, reject) {
      _this3.getWorker().then(function (worker) {
        taskWorker = worker;
        worker.setCosts(taskId, cost);
        worker.addCurrentLoad(cost);
        worker.setCallback(taskId, resolve, reject);
        worker.decode(taskId, taskConfig, buffer);
      }).catch(function (e) {
        reject(e);
      });
    });
    task.finally(function () {
      if (taskWorker && taskId) {
        taskWorker.releaseTask(taskId);
      }
    });
    this.taskCache.set(buffer, {
      key: taskKey,
      promise: task
    });
    return task;
  };

  return DRACODecoder;
}();

exports.DRACODecoder = DRACODecoder;
