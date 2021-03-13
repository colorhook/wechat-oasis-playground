'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var wechatAdapter = require('@oasis-engine/wechat-adapter');
var math = require('@oasis-engine/math');

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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * Asset Promise Status
 */
exports.AssetPromiseStatus = void 0;
/**
 * Asset Loading Promise.
 */

(function (AssetPromiseStatus) {
  AssetPromiseStatus[AssetPromiseStatus["Success"] = 0] = "Success";
  AssetPromiseStatus[AssetPromiseStatus["Pending"] = 1] = "Pending";
  AssetPromiseStatus[AssetPromiseStatus["Failed"] = 2] = "Failed";
})(exports.AssetPromiseStatus || (exports.AssetPromiseStatus = {}));

var AssetPromise = /*#__PURE__*/function (_Promise) {
  _inheritsLoose(AssetPromise, _Promise);

  /**
   * Return a new resource Promise through the provided asset promise collection.
   * The resolved of the new AssetPromise will be triggered when all the Promises in the provided set are completed.
   * @param - AssetPromise Collection
   * @returns AssetPromise
   */
  AssetPromise.all = function all(promises) {
    return new AssetPromise(function (resolve, reject, setProgress) {
      if (!Array.isArray(promises)) {
        return resolve([promises]);
      }

      var completed = 0;
      var total = promises.length;
      var results = new Array(total);
      promises.forEach(function (value, index) {
        Promise.resolve(value).then(function (result) {
          results[index] = result;
          completed += 1;
          setProgress(completed / total);

          if (completed == total) {
            resolve(results);
          }
        }).catch(function (err) {
          return reject(err);
        });
      });
    });
  };

  var _proto = AssetPromise.prototype;

  /**
   * Progress callback.
   * @param callback - Progress callback
   * @returns Asset Promise
   */
  _proto.onProgress = function onProgress(callback) {
    this._listeners.add(callback);

    return this;
  }
  /**
   * Cancel promise request.
   * @returns Asset promise
   */
  ;

  _proto.cancel = function cancel() {
    if (this._status !== exports.AssetPromiseStatus.Pending) {
      return this;
    }

    this._reject("Promise Canceled");

    return this;
  }
  /**
   * Create an asset loading Promise.
   * @param executor - A callback used to initialize the promise. This callback is passed two arguments:
   * a resolve callback used to resolve the promise with a value or the result of another promise,
   * and a reject callback used to reject the promise with a provided reason or error.
   * and a setProgress callback used to set promise progress with a percent.
   */
  ;

  function AssetPromise(executor) {
    var _this;

    var newReject;

    var setProgress = function setProgress(progress) {
      if (progress <= _this._progress) {
        return;
      }

      _this._progress = progress;

      for (var _iterator = _createForOfIteratorHelperLoose(_this._listeners), _step; !(_step = _iterator()).done;) {
        var listener = _step.value;
        listener(progress);
      }
    };

    _this = _Promise.call(this, function (resolve, reject) {
      newReject = function newReject(reason) {
        // Add it to the micro task to avoid reporting an error when calling this directly.
        Promise.resolve().then(function () {
          _this._status = exports.AssetPromiseStatus.Failed;
          reject(reason);
        });
      };

      executor(function (value) {
        // Add it to the micro task to avoid reporting an error when calling this directly.
        Promise.resolve().then(function () {
          setProgress(1);
          _this._status = exports.AssetPromiseStatus.Success;
          resolve(value);
        });
      }, newReject, function (progress) {
        // Add it to the micro task to avoid reporting an error when calling this directly
        Promise.resolve().then(function () {
          setProgress(progress);
        });
      });
    }) || this;
    _this._status = void 0;
    _this._progress = void 0;
    _this._reject = void 0;
    _this._listeners = void 0;
    _this._reject = newReject;
    _this._listeners = new Set();
    _this._progress = 0;
    _this._status = exports.AssetPromiseStatus.Pending;
    return _this;
  }

  _createClass(AssetPromise, [{
    key: "status",
    get:
    /**
     * Current promise state.
     */
    function get() {
      return this._status;
    }
    /**
     * Loading progress.
     */

  }, {
    key: "progress",
    get: function get() {
      return this._progress;
    }
  }]);

  return AssetPromise;
}( /*#__PURE__*/_wrapNativeSuper(Promise));

var Util = {
  isArray: "isArray" in Array ? Array.isArray : function (value) {
    return toString.call(value) === "[object Array]";
  },
  isArrayLike: function isArrayLike(x) {
    return !!x && typeof x.length === "number" && typeof x !== "function";
  },
  clone: function clone(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    var rst;

    if (Util.isArrayLike(obj)) {
      rst = obj.slice();

      for (var i = 0, l = obj.length; i < l; i++) {
        rst[i] = Util.clone(obj[i]);
      }
    } else {
      rst = {};

      for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
          rst[k] = Util.clone(obj[k]);
        }
      }
    }

    return rst;
  },
  downloadBlob: function downloadBlob(blob, fileName) {
    if (fileName === void 0) {
      fileName = "";
    }

    if (wechatAdapter.navigator && wechatAdapter.navigator.msSaveBlob) {
      wechatAdapter.navigator.msSaveBlob(blob, fileName);
      return;
    }

    var url = wechatAdapter.window.URL.createObjectURL(blob);
    var a = wechatAdapter.document.createElement("a");
    wechatAdapter.document.body.appendChild(a);
    a.style.display = "none";
    a.href = url;
    a.download = fileName;
    a.addEventListener("click", function () {
      if (a.parentElement) {
        a.parentElement.removeChild(a);
      }
    });
    a.click();
    wechatAdapter.window.URL.revokeObjectURL(url);
  }
};
/**
 * Fastly remove an element from array.
 * @param array - Array
 * @param item - Element
 */

function removeFromArray(array, item) {
  var index = array.indexOf(item);

  if (index < 0) {
    return false;
  }

  var last = array.length - 1;

  if (index !== last) {
    var end = array[last];
    array[index] = end;
  }

  array.length--;
  return true;
}
function ObjectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}

/**
 * ResourceManager
 */

var ResourceManager = /*#__PURE__*/function () {
  /** Loader collection. */

  /**
   * @internal
   */
  ResourceManager._addLoader = function _addLoader(type, loader, extnames) {
    this._loaders[type] = loader;

    for (var i = 0, len = extnames.length; i < len; i++) {
      this._extTypeMapping[extnames[i]] = type;
    }
  };

  ResourceManager._getTypeByUrl = function _getTypeByUrl(url) {
    var path = url.split("?")[0];
    return this._extTypeMapping[path.substring(path.lastIndexOf(".") + 1)];
  }
  /** The number of retries after failing to load assets. */
  ;

  /**
   * Create a ResourceManager.
   * @param engine - Engine to which the current ResourceManager belongs
   */
  function ResourceManager(engine) {
    this.engine = engine;
    this.retryCount = 1;
    this.retryInterval = 0;
    this.timeout = 20000;
    this._assetPool = Object.create(null);
    this._assetUrlPool = Object.create(null);
    this._refObjectPool = Object.create(null);
    this._loadingPromises = {};
  }
  /**
   * Load asset asynchronously through the path.
   * @param path - Path
   * @returns Asset promise
   */


  var _proto = ResourceManager.prototype;

  _proto.load = function load(assetInfo) {
    var _this = this;

    // single item
    if (!Array.isArray(assetInfo)) {
      return this._loadSingleItem(assetInfo);
    } // multi items


    var promises = assetInfo.map(function (item) {
      return _this._loadSingleItem(item);
    });
    return AssetPromise.all(promises);
  }
  /**
   * Cancel all assets that have not finished loading.
   */
  ;

  _proto.cancelNotLoaded = function cancelNotLoaded(url) {
    var _this2 = this;

    if (!url) {
      ObjectValues(this._loadingPromises).forEach(function (promise) {
        promise.cancel();
      });
    } else if (typeof url === "string") {
      var _this$_loadingPromise;

      (_this$_loadingPromise = this._loadingPromises[url]) === null || _this$_loadingPromise === void 0 ? void 0 : _this$_loadingPromise.cancel();
    } else {
      url.forEach(function (p) {
        var _this2$_loadingPromis;

        (_this2$_loadingPromis = _this2._loadingPromises[p]) === null || _this2$_loadingPromis === void 0 ? void 0 : _this2$_loadingPromis.cancel();
      });
    }
  }
  /**
   * Garbage collection will release resource objects managed by reference counting.
   * @remarks The release principle is that it is not referenced by the components, including direct and indirect reference.
   */
  ;

  _proto.gc = function gc() {
    var objects = ObjectValues(this._refObjectPool);

    for (var i = 0, len = objects.length; i < len; i++) {
      if (!objects[i].isGCIgnored) {
        objects[i].destroy();
      }
    }
  }
  /**
   * Get asset url from instanceId.
   * @param instanceId - Engine instance id
   * @returns Asset url
   */
  ;

  _proto.getAssetPath = function getAssetPath(instanceId) {
    return this._assetPool[instanceId];
  }
  /**
   * @internal
   */
  ;

  _proto._addAsset = function _addAsset(path, asset) {
    this._assetPool[asset.instanceId] = path;
    this._assetUrlPool[path] = asset;
  }
  /**
   * @internal
   */
  ;

  _proto._deleteAsset = function _deleteAsset(asset) {
    var id = asset.instanceId;
    var path = this._assetPool[id];

    if (path) {
      delete this._assetPool[id];
      delete this._assetUrlPool[path];
    }
  }
  /**
   * @internal
   */
  ;

  _proto._addRefObject = function _addRefObject(id, asset) {
    this._refObjectPool[id] = asset;
  }
  /**
   * @internal
   */
  ;

  _proto._deleteRefObject = function _deleteRefObject(id) {
    delete this._refObjectPool[id];
  };

  _proto._assignDefaultOptions = function _assignDefaultOptions(assetInfo) {
    var _assetInfo$type, _assetInfo$retryCount, _assetInfo$timeout, _assetInfo$retryInter, _assetInfo$url;

    assetInfo.type = (_assetInfo$type = assetInfo.type) != null ? _assetInfo$type : ResourceManager._getTypeByUrl(assetInfo.url);

    if (assetInfo.type === undefined) {
      throw "asset type should be specified: " + assetInfo.url;
    }

    assetInfo.retryCount = (_assetInfo$retryCount = assetInfo.retryCount) != null ? _assetInfo$retryCount : this.retryCount;
    assetInfo.timeout = (_assetInfo$timeout = assetInfo.timeout) != null ? _assetInfo$timeout : this.timeout;
    assetInfo.retryInterval = (_assetInfo$retryInter = assetInfo.retryInterval) != null ? _assetInfo$retryInter : this.retryInterval;
    assetInfo.url = (_assetInfo$url = assetInfo.url) != null ? _assetInfo$url : assetInfo.urls.join(",");
    return assetInfo;
  };

  _proto._loadSingleItem = function _loadSingleItem(item) {
    var _this3 = this;

    var info = this._assignDefaultOptions(typeof item === "string" ? {
      url: item
    } : item);

    var url = info.url; // has cache

    if (this._assetUrlPool[url]) {
      return new AssetPromise(function (resolve) {
        resolve(_this3._assetUrlPool[url]);
      });
    } // loading


    if (this._loadingPromises[url]) {
      return this._loadingPromises[info.url];
    }

    var loader = ResourceManager._loaders[info.type];
    var promise = loader.load(info, this);
    this._loadingPromises[url] = promise;
    promise.then(function (res) {
      if (loader.useCache) _this3._addAsset(url, res);
      delete _this3._loadingPromises[url];
    }).catch(function () {});
    return promise;
  };

  return ResourceManager;
}();
/**
 * Declare ResourceLoader's decorator.
 * @param assetType - Type of asset
 * @param extnames - Name of file extension
 */

ResourceManager._loaders = {};
ResourceManager._extTypeMapping = {};
function resourceLoader(assetType, extnames, useCache) {
  if (useCache === void 0) {
    useCache = true;
  }

  return function (Target) {
    var loader = new Target(useCache);

    ResourceManager._addLoader(assetType, loader, extnames);
  };
}

/** Event Object. * @class */
var Event = /*#__PURE__*/function () {
  function Event(type, target, data, bubbles) {
    if (target === void 0) {
      target = null;
    }

    if (data === void 0) {
      data = {};
    }

    if (bubbles === void 0) {
      bubbles = true;
    }

    this.data = void 0;
    this._timeStamp = void 0;
    this._target = void 0;
    this._currentTarget = void 0;
    this._bubbles = void 0;
    this._propagationStopped = void 0;
    this._type = void 0;
    this._timeStamp = new Date().getTime();
    this._target = target;
    this.data = data;
    this._currentTarget = null;
    this._bubbles = bubbles;
    this._propagationStopped = false;
    this._type = type;
  }

  var _proto = Event.prototype;

  _proto.stopPropagation = function stopPropagation() {
    this._propagationStopped = true;
  };

  _createClass(Event, [{
    key: "propagationStopped",
    get: function get() {
      return this._propagationStopped;
    }
  }, {
    key: "target",
    get: function get() {
      return this._target;
    },
    set: function set(t) {
      this._target = t;
    }
  }, {
    key: "timeStamp",
    get: function get() {
      return this._timeStamp;
    }
  }, {
    key: "currentTarget",
    get: function get() {
      return this._currentTarget;
    },
    set: function set(t) {
      this._currentTarget = t;
    }
  }, {
    key: "bubbles",
    get: function get() {
      return this._bubbles;
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }]);

  return Event;
}();

/**
 * Clone mode.
 */
var CloneMode;

(function (CloneMode) {
  CloneMode[CloneMode["Ignore"] = 0] = "Ignore";
  CloneMode[CloneMode["Assignment"] = 1] = "Assignment";
  CloneMode[CloneMode["Shallow"] = 2] = "Shallow";
  CloneMode[CloneMode["Deep"] = 3] = "Deep";
})(CloneMode || (CloneMode = {}));

/**
 * Property decorator, ignore the property when cloning.
 */
function ignoreClone(target, propertyKey) {
  CloneManager.registerCloneMode(target, propertyKey, CloneMode.Ignore);
}
/**
 * Property decorator, assign value to the property when cloning.
 *
 * @remarks
 * If it's a primitive type, the value will be copied.
 * If it's a class type, the reference will be copied.
 */

function assignmentClone(target, propertyKey) {
  CloneManager.registerCloneMode(target, propertyKey, CloneMode.Assignment);
}
/**
 * Property decorator, shallow clone the property when cloning.
 * After cloning, it will keep its own reference independent, and use the method of assignment to clone all its internal properties.
 * if the internal property is a primitive type, the value will be copied, if the internal property is a reference type, its reference address will be copied.。
 *
 * @remarks
 * Applicable to Object, Array, TypedArray and Class types.
 */

function shallowClone(target, propertyKey) {
  CloneManager.registerCloneMode(target, propertyKey, CloneMode.Shallow);
}
/**
 * Property decorator, deep clone the property when cloning.
 * After cloning, it will maintain its own reference independence, and all its internal deep properties will remain completely independent.
 *
 * @remarks
 * Applicable to Object, Array, TypedArray and Class types.
 * If Class is encountered during the deep cloning process, the custom cloning function of the object will be called first. Custom cloning requires the object to implement the IClone interface.
 */

function deepClone(target, propertyKey) {
  CloneManager.registerCloneMode(target, propertyKey, CloneMode.Deep);
}
/**
 * @internal
 * Clone manager.
 */

var CloneManager = /*#__PURE__*/function () {
  function CloneManager() {}

  /** @internal */

  /** @internal */

  /**
   * Register clone mode.
   * @param target - Clone target
   * @param propertyKey - Clone property name
   * @param mode - Clone mode
   */
  CloneManager.registerCloneMode = function registerCloneMode(target, propertyKey, mode) {
    var targetMap = CloneManager._subCloneModeMap.get(target.constructor);

    if (!targetMap) {
      targetMap = Object.create(null);

      CloneManager._subCloneModeMap.set(target.constructor, targetMap);
    }

    targetMap[propertyKey] = mode;
  }
  /**
   * Get the clone mode according to the prototype chain.
   */
  ;

  CloneManager.getCloneMode = function getCloneMode(type) {
    var cloneModes = CloneManager._cloneModeMap.get(type);

    if (!cloneModes) {
      cloneModes = Object.create(null);

      CloneManager._cloneModeMap.set(type, cloneModes);

      var obejctType = CloneManager._obejctType;
      var cloneModeMap = CloneManager._subCloneModeMap;

      while (type !== obejctType) {
        var subCloneModes = cloneModeMap.get(type);

        if (subCloneModes) {
          _extends(cloneModes, subCloneModes);
        }

        type = Object.getPrototypeOf(type);
      }
    }

    return cloneModes;
  }
  /**
   * Deep clone the object.
   * @param source - Clone source
   * @param target - Clone target
   */
  ;

  CloneManager.deepCloneObject = function deepCloneObject(source, target) {
    var type = source.constructor;

    switch (type) {
      case Uint8Array:
      case Uint16Array:
      case Uint32Array:
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case Float32Array:
      case Float64Array:
        // Type array clone.
        target.set(source);
        break;

      case Array:
        // Array clone.
        for (var i = 0, n = source.length; i < n; i++) {
          CloneManager._deepCloneObjectItem(source, target, i);
        }

        break;

      default:
        var customSource = source;

        if (customSource.clone && customSource.cloneTo) {
          // Custom clone.
          customSource.cloneTo(target);
        } else {
          // Object or other class not implments custom clone.
          var keys = Object.keys(source);

          for (var _i = 0, _n = keys.length; _i < _n; _i++) {
            CloneManager._deepCloneObjectItem(source, target, keys[_i]);
          }
        }

    }
  };

  CloneManager._deepCloneObjectItem = function _deepCloneObjectItem(source, target, k) {
    var sourceItem = source[k];

    if (sourceItem instanceof Object) {
      var itemType = sourceItem.constructor;

      switch (itemType) {
        case Uint8Array:
        case Uint16Array:
        case Uint32Array:
        case Int8Array:
        case Int16Array:
        case Int32Array:
        case Float32Array:
        case Float64Array:
          // Type array clone.
          var sourceTypeArrayItem = sourceItem;
          var targetTypeArrayItem = target[k];

          if (targetTypeArrayItem == null) {
            target[k] = sourceTypeArrayItem.slice();
          } else {
            targetTypeArrayItem.set(sourceTypeArrayItem);
          }

          break;

        case Array:
          // Array clone.
          var sourceArryItem = sourceItem;
          var targetArrayItem = target[k];

          if (targetArrayItem == null) {
            target[k] = new Array(sourceArryItem.length);
          } else {
            targetArrayItem.length = sourceArryItem.length;
          }

          CloneManager.deepCloneObject(sourceArryItem, targetArrayItem);
          break;

        default:
          if (sourceItem.clone && sourceItem.cloneTo) {
            // Custom clone.
            var sourceCustomItem = sourceItem;
            var targetCustomItem = target[k];

            if (targetCustomItem) {
              sourceCustomItem.cloneTo(targetCustomItem);
            } else {
              target[k] = sourceCustomItem.clone();
            }
          } else {
            // Object or other class not implments custom clone.
            var targetItem = target[k];
            targetItem == null && (target[k] = targetItem = new sourceItem.constructor());
            CloneManager.deepCloneObject(sourceItem, targetItem);
            break;
          }

      }
    } else {
      // Null or undefine and primitive type.
      target[k] = sourceItem;
    }
  };

  return CloneManager;
}();
CloneManager._subCloneModeMap = new Map();
CloneManager._cloneModeMap = new Map();
CloneManager._obejctType = Object.getPrototypeOf(Object);

var _class$9, _descriptor$9, _descriptor2$8, _class2$4, _temp$9;

/**
 * EngineObject.
 */
var EngineObject = (_class$9 = (_temp$9 = _class2$4 =
/** Engine unique id. */

/** Engine to which the object belongs. */
function EngineObject(engine) {
  _initializerDefineProperty(this, "instanceId", _descriptor$9, this);

  _initializerDefineProperty(this, "_engine", _descriptor2$8, this);

  this._engine = engine;
}, _class2$4._instanceIdCounter = 0, _temp$9), (_descriptor$9 = _applyDecoratedDescriptor(_class$9.prototype, "instanceId", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return ++EngineObject._instanceIdCounter;
  }
}), _descriptor2$8 = _applyDecoratedDescriptor(_class$9.prototype, "_engine", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class$9);

var _class$8, _descriptor$8, _temp$8;
/**
 * EventDispatcher, which can be inherited as a base class.
 */

var EventDispatcher = (_class$8 = (_temp$8 = /*#__PURE__*/function (_EngineObject) {
  _inheritsLoose(EventDispatcher, _EngineObject);

  function EventDispatcher() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _EngineObject.call.apply(_EngineObject, [this].concat(args)) || this;

    _initializerDefineProperty(_this, "_evts", _descriptor$8, _assertThisInitialized(_this));

    _this._evtCount = 0;
    return _this;
  }

  var _proto = EventDispatcher.prototype;

  /**
   * Determine whether there is event listening.
   * @param event - Event name
   * @returns Returns whether there is a corresponding event
   */
  _proto.hasEvent = function hasEvent(event) {
    return this._evts[event] != null;
  }
  /**
   * Returns the names of all registered events.
   * @returns All event names
   */
  ;

  _proto.eventNames = function eventNames() {
    if (this._evtCount === 0) return [];
    return Object.keys(this._evts);
  }
  /**
   * Returns the number of listeners with the specified event name.
   * @param event - Event name
   * @returns The count of listeners
   */
  ;

  _proto.listenerCount = function listenerCount(event) {
    var listeners = this._evts[event];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
  }
  /**
   * Dispatch the event with the specified event name.
   * @param event - Event name
   * @param data - Data
   * @returns - Whether the dispatching is successful
   */
  ;

  _proto.dispatch = function dispatch(event, data) {
    if (!this._evts[event]) {
      return false;
    }

    var listeners = this._evts[event];

    if (listeners.fn) {
      if (listeners.once) this.removeEventListener(event, listeners.fn);
      listeners.fn(data);
    } else {
      var l = listeners.length;

      for (var i = 0; i < l; i++) {
        if (listeners[i].once) this.removeEventListener(event, listeners[i].fn);
        listeners[i].fn(data);
      }
    }

    return true;
  }
  /**
   * Add a listener/
   * @param event - Event name
   * @param fn - Function
   * @returns This
   */
  ;

  _proto.on = function on(event, fn) {
    return this.addEventListener(event, fn);
  }
  /**
   * Add a one-time listener.
   * @param event - Event name
   * @param fn - Function
   * @returns This
   */
  ;

  _proto.once = function once(event, fn) {
    return this.addEventListener(event, fn, true);
  }
  /**
   * @deprecated Use `on/once` instead.
   * Add a listener function with the specified event name.
   * @param event - Event name
   * @param fn - Function
   * @param once - Is it a one-time listener
   * @returns this
   */
  ;

  _proto.addEventListener = function addEventListener(event, fn, once) {
    var listener = {
      fn: fn,
      once: once
    };
    var events = this._evts;

    if (!events[event]) {
      events[event] = listener;
      this._evtCount++;
    } else if (!events[event].fn) {
      events[event].push(listener);
    } else {
      events[event] = [events[event], listener];
    }

    return this;
  }
  /**
   * Remove the event listener(s) of the specified event name.
   * @param event - Event name
   * @param fn - Function, If is undefined, delete all corresponding event listeners.
   */
  ;

  _proto.off = function off(event, fn) {
    if (!this._evts[event]) return this;

    if (!fn) {
      this._clearEvent(event);

      return this;
    }

    var listeners = this._evts[event];

    if (listeners.fn && listeners.fn === fn) {
      this._clearEvent(event);
    } else {
      var index = listeners.indexOf(fn);

      if (index > -1) {
        var temp = listeners[listeners.length - 1];
        listeners[index] = temp;
        listeners.length--;

        if (listeners.length === 1) {
          this._evts[event] = listeners[0];
        }
      }
    }

    return this;
  }
  /**
   * @deprecated Use `off` instead.
   * Remove the event listener(s) of the specified event name.
   * @param event - Event name
   * @param fn - Function, If is undefined, delete all corresponding event listeners.
   */
  ;

  _proto.removeEventListener = function removeEventListener(event, fn) {
    return this.off(event, fn);
  }
  /**
   * Remove all event listeners.
   * @param event - Event name, delete all events if not passed
   */
  ;

  _proto.removeAllEventListeners = function removeAllEventListeners(event) {
    if (event) {
      if (this._evts[event]) this._clearEvent(event);
    } else {
      this._evts = Object.create(null);
      this._evtCount = 0;
    }
  }
  /**
   * @deprecated Use `dispatch` instead.
   */
  ;

  _proto.trigger = function trigger(e) {
    this.dispatch(e.type, e.data);
  };

  _proto._clearEvent = function _clearEvent(event) {
    if (--this._evtCount === 0) {
      this._evts = Object.create(null);
    } else {
      delete this._evts[event];
    }
  };

  return EventDispatcher;
}(EngineObject), _temp$8), (_descriptor$8 = _applyDecoratedDescriptor(_class$8.prototype, "_evts", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return Object.create(null);
  }
})), _class$8);

/**
 * @class
 * @private
 */

/* tslint:disable */
var noop = function noop(message) {};

var debug = console.log.bind(console);
var info = console.info.bind(console);
var warn = console.warn.bind(console);
var error = console.error.bind(console);
var Logger = {
  debug: noop,
  info: noop,
  warn: noop,
  error: noop,
  isEnabled: false,

  /** Turn on log */
  enable: function enable() {
    this.debug = debug;
    this.info = info;
    this.warn = warn;
    this.error = error;
    this.isEnabled = true;
  },

  /** Turn off log */
  disable: function disable() {
    this.debug = noop;
    this.info = noop;
    this.warn = noop;
    this.error = noop;
    this.isEnabled = false;
  }
};

/**
 * Tools for calculating the time per frame.
 */
var Time = /*#__PURE__*/function () {
  /**
   * Constructor of the Time.
   */
  function Time() {
    this._clock = void 0;
    this._timeScale = void 0;
    this._deltaTime = void 0;
    this._startTime = void 0;
    this._lastTickTime = void 0;
    this._clock = wechatAdapter.performance ? wechatAdapter.performance : Date;
    this._timeScale = 1.0;
    this._deltaTime = 0.0001;

    var now = this._clock.now();

    this._startTime = now;
    this._lastTickTime = now;
  }

  var _proto = Time.prototype;

  _proto.reset = function reset() {
    this._lastTickTime = this._clock.now();
  }
  /**
   * Current Time
   * @readonly
   */
  ;

  /**
   * Call every frame, update delta time and other data.
   */
  _proto.tick = function tick() {
    var now = this.nowTime;
    this._deltaTime = (now - this._lastTickTime) * this._timeScale;
    this._lastTickTime = now;
  };

  _createClass(Time, [{
    key: "nowTime",
    get: function get() {
      return this._clock.now();
    }
    /**
     * Time between two ticks
     * @readonly
     */

  }, {
    key: "deltaTime",
    get: function get() {
      return this._deltaTime;
    }
    /**
     * Scaled delta time.
     */

  }, {
    key: "timeScale",
    get: function get() {
      return this._timeScale;
    },
    set: function set(s) {
      this._timeScale = s;
    }
    /**
     * Unscaled delta time.
     * @readonly
     */

  }, {
    key: "unscaledDeltaTime",
    get: function get() {
      return this._deltaTime / this._timeScale;
    }
    /**
     * The elapsed time, after the clock is initialized.
     */

  }, {
    key: "timeSinceStartup",
    get: function get() {
      return this.nowTime - this._startTime;
    }
  }]);

  return Time;
}();

/**
 * The type of resource, mainly used to deal with the recovery of GL objects associated with the resource object.
 */
exports.InternalAssetType = void 0;
/**
 * Camera's clear mode enumeration
 * @readonly
 */

(function (InternalAssetType) {
  InternalAssetType[InternalAssetType["Scene"] = 1] = "Scene";
  InternalAssetType[InternalAssetType["Cache"] = 2] = "Cache";
})(exports.InternalAssetType || (exports.InternalAssetType = {}));

exports.ClearMode = void 0;
/**
 * Material type enumeration
 * @readonly
 */

(function (ClearMode) {
  ClearMode[ClearMode["DONT_CLEAR"] = 0] = "DONT_CLEAR";
  ClearMode[ClearMode["SOLID_COLOR"] = 1] = "SOLID_COLOR";
  ClearMode[ClearMode["DEPTH_ONLY"] = 2] = "DEPTH_ONLY";
  ClearMode[ClearMode["COLOR_ONLY"] = 3] = "COLOR_ONLY";
  ClearMode[ClearMode["STENCIL_ONLY"] = 4] = "STENCIL_ONLY";
  ClearMode[ClearMode["ALL_CLEAR"] = 5] = "ALL_CLEAR";
})(exports.ClearMode || (exports.ClearMode = {}));

exports.MaterialType = void 0;
/**
 * Rendering state that can be turned on or off.
 * @readonly
 */

(function (MaterialType) {
  MaterialType[MaterialType["OPAQUE"] = 1000] = "OPAQUE";
  MaterialType[MaterialType["TRANSPARENT"] = 2000] = "TRANSPARENT";
})(exports.MaterialType || (exports.MaterialType = {}));

exports.RenderState = void 0;
/**
 * Face enumeration
 * @readonly
 */

(function (RenderState) {
  RenderState[RenderState["BLEND"] = 3042] = "BLEND";
  RenderState[RenderState["CULL_FACE"] = 2884] = "CULL_FACE";
  RenderState[RenderState["DEPTH_TEST"] = 2929] = "DEPTH_TEST";
  RenderState[RenderState["ALPHA_TEST"] = 3008] = "ALPHA_TEST";
  RenderState[RenderState["POLYGON_OFFSET_FILL"] = 32823] = "POLYGON_OFFSET_FILL";
  RenderState[RenderState["SAMPLE_ALPHA_TO_COVERAGE"] = 32926] = "SAMPLE_ALPHA_TO_COVERAGE";
  RenderState[RenderState["SCISSOR_TEST"] = 3089] = "SCISSOR_TEST";
})(exports.RenderState || (exports.RenderState = {}));

exports.FrontFace = void 0;
/**
 * Face culling enum
 * @readonly
 */

(function (FrontFace) {
  FrontFace[FrontFace["CW"] = 2304] = "CW";
  FrontFace[FrontFace["CCW"] = 2305] = "CCW";
})(exports.FrontFace || (exports.FrontFace = {}));

exports.CullFace = void 0;
/**
 * Display surface enumeration
 * @readonly
 * */

(function (CullFace) {
  CullFace[CullFace["FRONT"] = 1028] = "FRONT";
  CullFace[CullFace["BACK"] = 1029] = "BACK";
  CullFace[CullFace["FRONT_AND_BACK"] = 1032] = "FRONT_AND_BACK";
})(exports.CullFace || (exports.CullFace = {}));

exports.Side = void 0;
/**
 * Comparison function enum
 * @readonly
 */

(function (Side) {
  Side[Side["FRONT"] = 0] = "FRONT";
  Side[Side["BACK"] = 1] = "BACK";
  Side[Side["NONE"] = 2] = "NONE";
  Side[Side["DOUBLE"] = 3] = "DOUBLE";
})(exports.Side || (exports.Side = {}));

exports.CompFunc = void 0;
/**
 * Data type enumeration
 */

(function (CompFunc) {
  CompFunc[CompFunc["NEVER"] = 512] = "NEVER";
  CompFunc[CompFunc["LESS"] = 513] = "LESS";
  CompFunc[CompFunc["EQUAL"] = 514] = "EQUAL";
  CompFunc[CompFunc["LEQUAL"] = 515] = "LEQUAL";
  CompFunc[CompFunc["GREATER"] = 516] = "GREATER";
  CompFunc[CompFunc["NOTEQUAL"] = 517] = "NOTEQUAL";
  CompFunc[CompFunc["GEQUAL"] = 518] = "GEQUAL";
  CompFunc[CompFunc["ALWAYS"] = 519] = "ALWAYS";
})(exports.CompFunc || (exports.CompFunc = {}));

exports.DataType = void 0;
/**
 * Uniform Semantic and Oasis3D extension supported by glTF 1.0
 * @readonly
 */

(function (DataType) {
  DataType[DataType["FLOAT"] = 5126] = "FLOAT";
  DataType[DataType["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
  DataType[DataType["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
  DataType[DataType["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
  DataType[DataType["INT"] = 5124] = "INT";
  DataType[DataType["INT_VEC2"] = 35667] = "INT_VEC2";
  DataType[DataType["INT_VEC3"] = 35668] = "INT_VEC3";
  DataType[DataType["INT_VEC4"] = 35669] = "INT_VEC4";
  DataType[DataType["BOOL"] = 35670] = "BOOL";
  DataType[DataType["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
  DataType[DataType["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
  DataType[DataType["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
  DataType[DataType["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
  DataType[DataType["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
  DataType[DataType["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
  DataType[DataType["FLOAT_ARRAY"] = 35677] = "FLOAT_ARRAY";
  DataType[DataType["FLOAT_VEC2_ARRAY"] = 100000] = "FLOAT_VEC2_ARRAY";
  DataType[DataType["FLOAT_VEC3_ARRAY"] = 100001] = "FLOAT_VEC3_ARRAY";
  DataType[DataType["FLOAT_VEC4_ARRAY"] = 100002] = "FLOAT_VEC4_ARRAY";
  DataType[DataType["INT_ARRAY"] = 100003] = "INT_ARRAY";
  DataType[DataType["INT_VEC2_ARRAY"] = 100004] = "INT_VEC2_ARRAY";
  DataType[DataType["INT_VEC3_ARRAY"] = 100005] = "INT_VEC3_ARRAY";
  DataType[DataType["INT_VEC4_ARRAY"] = 100006] = "INT_VEC4_ARRAY";
  DataType[DataType["FLOAT_MAT2_ARRAY"] = 100007] = "FLOAT_MAT2_ARRAY";
  DataType[DataType["FLOAT_MAT3_ARRAY"] = 100008] = "FLOAT_MAT3_ARRAY";
  DataType[DataType["FLOAT_MAT4_ARRAY"] = 100009] = "FLOAT_MAT4_ARRAY";
  DataType[DataType["SAMPLER_2D_ARRAY"] = 100010] = "SAMPLER_2D_ARRAY";
  DataType[DataType["SAMPLER_CUBE_ARRAY"] = 100011] = "SAMPLER_CUBE_ARRAY";
  DataType[DataType["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
  DataType[DataType["SAMPLER_CUBE"] = 35680] = "SAMPLER_CUBE";
  DataType[DataType["BYTE"] = 5120] = "BYTE";
  DataType[DataType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
  DataType[DataType["SHORT"] = 5122] = "SHORT";
  DataType[DataType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
  DataType[DataType["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
})(exports.DataType || (exports.DataType = {}));

exports.UniformSemantic = void 0;
/**
 * Color blending method enumeration
 */

(function (UniformSemantic) {
  UniformSemantic[UniformSemantic["LOCAL"] = 1] = "LOCAL";
  UniformSemantic[UniformSemantic["MODEL"] = 2] = "MODEL";
  UniformSemantic[UniformSemantic["VIEW"] = 3] = "VIEW";
  UniformSemantic[UniformSemantic["PROJECTION"] = 4] = "PROJECTION";
  UniformSemantic[UniformSemantic["MODELVIEW"] = 5] = "MODELVIEW";
  UniformSemantic[UniformSemantic["VIEWPROJECTION"] = 21] = "VIEWPROJECTION";
  UniformSemantic[UniformSemantic["MODELVIEWPROJECTION"] = 6] = "MODELVIEWPROJECTION";
  UniformSemantic[UniformSemantic["MODELINVERSE"] = 7] = "MODELINVERSE";
  UniformSemantic[UniformSemantic["VIEWINVERSE"] = 8] = "VIEWINVERSE";
  UniformSemantic[UniformSemantic["PROJECTIONINVERSE"] = 9] = "PROJECTIONINVERSE";
  UniformSemantic[UniformSemantic["MODELVIEWINVERSE"] = 10] = "MODELVIEWINVERSE";
  UniformSemantic[UniformSemantic["MODELVIEWPROJECTIONINVERSE"] = 11] = "MODELVIEWPROJECTIONINVERSE";
  UniformSemantic[UniformSemantic["MODELINVERSETRANSPOSE"] = 12] = "MODELINVERSETRANSPOSE";
  UniformSemantic[UniformSemantic["MODELVIEWINVERSETRANSPOSE"] = 13] = "MODELVIEWINVERSETRANSPOSE";
  UniformSemantic[UniformSemantic["VIEWPORT"] = 14] = "VIEWPORT";
  UniformSemantic[UniformSemantic["JOINTMATRIX"] = 15] = "JOINTMATRIX";
  UniformSemantic[UniformSemantic["MORPHWEIGHTS"] = 16] = "MORPHWEIGHTS";
  UniformSemantic[UniformSemantic["EYEPOS"] = 17] = "EYEPOS";
  UniformSemantic[UniformSemantic["TIME"] = 18] = "TIME";
  UniformSemantic[UniformSemantic["JOINTTEXTURE"] = 19] = "JOINTTEXTURE";
  UniformSemantic[UniformSemantic["JOINTCOUNT"] = 20] = "JOINTCOUNT";
})(exports.UniformSemantic || (exports.UniformSemantic = {}));

exports.BlendFunc = void 0;
/**
 * Probe rendering rate.
 * */

(function (BlendFunc) {
  BlendFunc[BlendFunc["ZERO"] = 0] = "ZERO";
  BlendFunc[BlendFunc["ONE"] = 1] = "ONE";
  BlendFunc[BlendFunc["SRC_COLOR"] = 768] = "SRC_COLOR";
  BlendFunc[BlendFunc["ONE_MINUS_SRC_COLOR"] = 769] = "ONE_MINUS_SRC_COLOR";
  BlendFunc[BlendFunc["SRC_ALPHA"] = 770] = "SRC_ALPHA";
  BlendFunc[BlendFunc["ONE_MINUS_SRC_ALPHA"] = 771] = "ONE_MINUS_SRC_ALPHA";
  BlendFunc[BlendFunc["DST_ALPHA"] = 772] = "DST_ALPHA";
  BlendFunc[BlendFunc["ONE_MINUS_DST_ALPHA"] = 773] = "ONE_MINUS_DST_ALPHA";
  BlendFunc[BlendFunc["DST_COLOR"] = 774] = "DST_COLOR";
  BlendFunc[BlendFunc["ONE_MINUS_DST_COLOR"] = 775] = "ONE_MINUS_DST_COLOR";
  BlendFunc[BlendFunc["SRC_ALPHA_SATURATE"] = 776] = "SRC_ALPHA_SATURATE";
  BlendFunc[BlendFunc["enumANT_COLOR"] = 32769] = "enumANT_COLOR";
  BlendFunc[BlendFunc["ONE_MINUS_enumANT_COLOR"] = 32770] = "ONE_MINUS_enumANT_COLOR";
  BlendFunc[BlendFunc["enumANT_ALPHA"] = 32771] = "enumANT_ALPHA";
  BlendFunc[BlendFunc["ONE_MINUS_enumANT_ALPHA"] = 32772] = "ONE_MINUS_enumANT_ALPHA";
})(exports.BlendFunc || (exports.BlendFunc = {}));

exports.RefreshRate = void 0;
/**
 * GL Capabilities
 * Some capabilities can be smoothed out by extension, and some capabilities must use WebGL 2.0.
 * */

(function (RefreshRate) {
  RefreshRate[RefreshRate["ONCE"] = 1] = "ONCE";
  RefreshRate[RefreshRate["EVERYFRAME"] = 2] = "EVERYFRAME";
})(exports.RefreshRate || (exports.RefreshRate = {}));

exports.GLCapabilityType = void 0;

(function (GLCapabilityType) {
  GLCapabilityType["standardDerivatives"] = "OES_standard_derivatives";
  GLCapabilityType["shaderTextureLod"] = "EXT_shader_texture_lod";
  GLCapabilityType["elementIndexUint"] = "OES_element_index_uint";
  GLCapabilityType["depthTexture"] = "WEBGL_depth_texture";
  GLCapabilityType["drawBuffers"] = "WEBGL_draw_buffers";
  GLCapabilityType["vertexArrayObject"] = "OES_vertex_array_object";
  GLCapabilityType["instancedArrays"] = "ANGLE_instanced_arrays";
  GLCapabilityType["multipleSample"] = "multipleSampleOnlySupportedInWebGL2";
  GLCapabilityType["textureFloat"] = "OES_texture_float";
  GLCapabilityType["textureFloatLinear"] = "OES_texture_float_linear";
  GLCapabilityType["textureHalfFloat"] = "OES_texture_half_float";
  GLCapabilityType["textureHalfFloatLinear"] = "OES_texture_half_float_linear";
  GLCapabilityType["WEBGL_colorBufferFloat"] = "WEBGL_color_buffer_float";
  GLCapabilityType["colorBufferFloat"] = "EXT_color_buffer_float";
  GLCapabilityType["colorBufferHalfFloat"] = "EXT_color_buffer_half_float";
  GLCapabilityType["textureFilterAnisotropic"] = "EXT_texture_filter_anisotropic";
  GLCapabilityType["astc"] = "WEBGL_compressed_texture_astc";
  GLCapabilityType["astc_webkit"] = "WEBKIT_WEBGL_compressed_texture_astc";
  GLCapabilityType["etc"] = "WEBGL_compressed_texture_etc";
  GLCapabilityType["etc_webkit"] = "WEBKIT_WEBGL_compressed_texture_etc";
  GLCapabilityType["etc1"] = "WEBGL_compressed_texture_etc1";
  GLCapabilityType["etc1_webkit"] = "WEBKIT_WEBGL_compressed_texture_etc1";
  GLCapabilityType["pvrtc"] = "WEBGL_compressed_texture_pvrtc";
  GLCapabilityType["pvrtc_webkit"] = "WEBKIT_WEBGL_compressed_texture_pvrtc";
  GLCapabilityType["s3tc"] = "WEBGL_compressed_texture_s3tc";
  GLCapabilityType["s3tc_webkit"] = "WEBKIT_WEBGL_compressed_texture_s3tc";
})(exports.GLCapabilityType || (exports.GLCapabilityType = {}));

/**
 * High-performance unordered array, delete uses exchange method to improve performance, internal capacity only increases.
 */
var DisorderedArray = /*#__PURE__*/function () {
  function DisorderedArray(count) {
    if (count === void 0) {
      count = 0;
    }

    this._elements = void 0;
    this.length = 0;
    this._elements = new Array(count);
  }

  var _proto = DisorderedArray.prototype;

  _proto.add = function add(element) {
    if (this.length === this._elements.length) this._elements.push(element);else this._elements[this.length] = element;
    this.length++;
  };

  _proto.delete = function _delete(element) {
    //TODO: It can be optimized for custom binary search and other algorithms, currently this._elements>=this.length wastes performance.
    var index = this._elements.indexOf(element);

    this.deleteByIndex(index);
  }
  /**
   *
   * @param index
   * @returns The replaced item is used to reset its index.
   */
  ;

  _proto.deleteByIndex = function deleteByIndex(index) {
    var elements = this._elements;
    var end = null;
    var lastIndex = this.length - 1;

    if (index !== lastIndex) {
      end = elements[lastIndex];
      elements[index] = end;
    }

    this.length--;
    return end;
  };

  _proto.garbageCollection = function garbageCollection() {
    this._elements.length = this.length;
  };

  return DisorderedArray;
}();

/**
 * Shader macro collection.
 * @internal
 */
var ShaderMacroCollection = /*#__PURE__*/function () {
  function ShaderMacroCollection() {
    this._mask = [];
    this._length = 0;
  }

  /**
   * Union of two macro collection.
   * @param left - input macro collection
   * @param right - input macro collection
   * @param out - union output macro collection
   */
  ShaderMacroCollection.unionCollection = function unionCollection(left, right, out) {
    var outMask = out._mask;
    var minSize, maxSize;
    var minMask, maxMask;

    if (left._length < right._length) {
      minSize = left._length;
      maxSize = right._length;
      minMask = left._mask;
      maxMask = right._mask;
    } else {
      minSize = right._length;
      maxSize = left._length;
      minMask = right._mask;
      maxMask = left._mask;
    }

    var i = 0;
    outMask.length < maxSize && (outMask.length = maxSize);

    for (; i < minSize; i++) {
      outMask[i] = minMask[i] | maxMask[i];
    }

    for (; i < maxSize; i++) {
      outMask[i] = maxMask[i];
    }

    out._length = maxSize;
  }
  /** @internal */
  ;

  var _proto = ShaderMacroCollection.prototype;

  /**
   * Enable one macro in this macro collection.
   * @param macro - ShaderMacro
   */
  _proto.enable = function enable(macro) {
    var index = macro._index;
    var size = index + 1;
    var mask = this._mask;
    var maskStart = this._length; // must from this._length because this._length maybe less than mask.length and have dirty data should clear.

    if (maskStart < size) {
      mask.length < size && (mask.length = size); // mask.length maybe small than size,maybe not.

      for (; maskStart < index; maskStart++) {
        mask[maskStart] = 0;
      }

      mask[index] = macro._value;
      this._length = size;
    } else {
      mask[index] |= macro._value;
    }
  }
  /**
   * Disable one macro in this macro collection.
   * @param macro - ShaderMacro
   */
  ;

  _proto.disable = function disable(macro) {
    var index = macro._index;
    var mask = this._mask;
    var endIndex = this._length - 1;

    if (index > endIndex) {
      return;
    }

    var newValue = mask[index] & ~macro._value;

    if (index == endIndex && newValue === 0) {
      this._length--;
    } else {
      mask[index] = newValue;
    }
  }
  /**
   * Union of this and other macro collection.
   * @param macroCollection - macro collection
   */
  ;

  _proto.unionCollection = function unionCollection(macroCollection) {
    var addMask = macroCollection._mask;
    var addSize = macroCollection._length;
    var mask = this._mask;
    var maskSize = this._length;

    if (maskSize < addSize) {
      mask.length < addSize && (mask.length = addSize);
      var i = 0;

      for (; i < maskSize; i++) {
        mask[i] |= addMask[i];
      }

      for (; i < addSize; i++) {
        mask[i] = addMask[i];
      }

      this._length = addSize;
    } else {
      for (var _i = 0; _i < addSize; _i++) {
        mask[_i] |= addMask[_i];
      }
    }
  }
  /**
   * Complementarity of this and other macro collection.
   * @param macroCollection - macro collection
   */
  ;

  _proto.complementaryCollection = function complementaryCollection(macroCollection) {
    var removeMask = macroCollection._mask;
    var mask = this._mask;
    var endIndex = this._length - 1;
    var i = Math.min(macroCollection._length - 1, endIndex);

    for (; i >= 0; i--) {
      var newValue = mask[i] & ~removeMask[i];

      if (i == endIndex && newValue === 0) {
        endIndex--;
        this._length--;
      } else {
        mask[i] = newValue;
      }
    }
  }
  /**
   * Intersection of this and other macro collection.
   * @param macroCollection - macro collection
   */
  ;

  _proto.intersectionCollection = function intersectionCollection(macroCollection) {
    var unionMask = macroCollection._mask;
    var mask = this._mask;

    for (var i = this._length - 1; i >= 0; i--) {
      var value = mask[i] & unionMask[i];

      if (value == 0 && i == this._length - 1) {
        this._length--;
      } else {
        mask[i] = value;
      }
    }
  }
  /**
   * Whether macro is enabled in this macro collection.
   * @param macro - ShaderMacro
   */
  ;

  _proto.isEnable = function isEnable(macro) {
    var index = macro._index;

    if (index >= this._length) {
      return false;
    }

    return (this._mask[index] & macro._value) !== 0;
  }
  /**
   * Clear this macro collection.
   */
  ;

  _proto.clear = function clear() {
    this._length = 0;
  };

  return ShaderMacroCollection;
}();

/**
 * The manager of the components.
 */
var ComponentsManager = /*#__PURE__*/function () {
  function ComponentsManager() {
    this._onStartScripts = new DisorderedArray();
    this._onUpdateScripts = new DisorderedArray();
    this._onLateUpdateScripts = new DisorderedArray();
    this._destoryComponents = [];
    this._onUpdateAnimations = new DisorderedArray();
    this._renderers = new DisorderedArray();
    this._onUpdateRenderers = new DisorderedArray();
    this._componentsContainerPool = [];
  }

  var _proto = ComponentsManager.prototype;

  _proto.addRenderer = function addRenderer(renderer) {
    renderer._rendererIndex = this._renderers.length;

    this._renderers.add(renderer);
  };

  _proto.removeRenderer = function removeRenderer(renderer) {
    var replaced = this._renderers.deleteByIndex(renderer._rendererIndex);

    replaced && (replaced._rendererIndex = renderer._rendererIndex);
    renderer._rendererIndex = -1;
  };

  _proto.addOnStartScript = function addOnStartScript(script) {
    script._onStartIndex = this._onStartScripts.length;

    this._onStartScripts.add(script);
  };

  _proto.removeOnStartScript = function removeOnStartScript(script) {
    var replaced = this._onStartScripts.deleteByIndex(script._onStartIndex);

    replaced && (replaced._onStartIndex = script._onStartIndex);
    script._onStartIndex = -1;
  };

  _proto.addOnUpdateScript = function addOnUpdateScript(script) {
    script._onUpdateIndex = this._onUpdateScripts.length;

    this._onUpdateScripts.add(script);
  };

  _proto.removeOnUpdateScript = function removeOnUpdateScript(script) {
    var replaced = this._onUpdateScripts.deleteByIndex(script._onUpdateIndex);

    replaced && (replaced._onUpdateIndex = script._onUpdateIndex);
    script._onUpdateIndex = -1;
  };

  _proto.addOnLateUpdateScript = function addOnLateUpdateScript(script) {
    script._onLateUpdateIndex = this._onLateUpdateScripts.length;

    this._onLateUpdateScripts.add(script);
  };

  _proto.removeOnLateUpdateScript = function removeOnLateUpdateScript(script) {
    var replaced = this._onLateUpdateScripts.deleteByIndex(script._onLateUpdateIndex);

    replaced && (replaced._onLateUpdateIndex = script._onLateUpdateIndex);
    script._onLateUpdateIndex = -1;
  };

  _proto.addOnUpdateAnimations = function addOnUpdateAnimations(animation) {
    //@ts-ignore
    animation._onUpdateIndex = this._onUpdateAnimations.length;

    this._onUpdateAnimations.add(animation);
  };

  _proto.removeOnUpdateAnimations = function removeOnUpdateAnimations(animation) {
    //@ts-ignore
    var replaced = this._onUpdateAnimations.deleteByIndex(animation._onUpdateIndex); //@ts-ignore


    replaced && (replaced._onUpdateIndex = animation._onUpdateIndex); //@ts-ignore

    animation._onUpdateIndex = -1;
  };

  _proto.addOnUpdateRenderers = function addOnUpdateRenderers(renderer) {
    renderer._onUpdateIndex = this._onUpdateRenderers.length;

    this._onUpdateRenderers.add(renderer);
  };

  _proto.removeOnUpdateRenderers = function removeOnUpdateRenderers(renderer) {
    var replaced = this._onUpdateRenderers.deleteByIndex(renderer._onUpdateIndex);

    replaced && (replaced._onUpdateIndex = renderer._onUpdateIndex);
    renderer._onUpdateIndex = -1;
  };

  _proto.addDestoryComponent = function addDestoryComponent(component) {
    this._destoryComponents.push(component);
  };

  _proto.callScriptOnStart = function callScriptOnStart() {
    var onStartScripts = this._onStartScripts;

    if (onStartScripts.length > 0) {
      var elements = onStartScripts._elements; // The 'onStartScripts.length' maybe add if you add some Script with addComponent() in some Script's onStart()

      for (var i = 0; i < onStartScripts.length; i++) {
        var script = elements[i];
        script._started = true;
        script._onStartIndex = -1;
        script.onStart();
      }

      onStartScripts.length = 0;
    }
  };

  _proto.callScriptOnUpdate = function callScriptOnUpdate(deltaTime) {
    var elements = this._onUpdateScripts._elements;

    for (var i = this._onUpdateScripts.length - 1; i >= 0; --i) {
      var element = elements[i];

      if (element._started) {
        element.onUpdate(deltaTime);
      }
    }
  };

  _proto.callScriptOnLateUpdate = function callScriptOnLateUpdate(deltaTime) {
    var elements = this._onLateUpdateScripts._elements;

    for (var i = this._onLateUpdateScripts.length - 1; i >= 0; --i) {
      var element = elements[i];

      if (element._started) {
        element.onLateUpdate(deltaTime);
      }
    }
  };

  _proto.callAnimationUpdate = function callAnimationUpdate(deltaTime) {
    var elements = this._onUpdateAnimations._elements;

    for (var i = this._onUpdateAnimations.length - 1; i >= 0; --i) {
      //@ts-ignore
      elements[i].update(deltaTime);
    }
  };

  _proto.callRendererOnUpdate = function callRendererOnUpdate(deltaTime) {
    var elements = this._onUpdateRenderers._elements;

    for (var i = this._onUpdateRenderers.length - 1; i >= 0; --i) {
      elements[i].update(deltaTime);
    }
  };

  _proto.callRender = function callRender(context) {
    var camera = context._camera;
    var elements = this._renderers._elements;

    for (var i = this._renderers.length - 1; i >= 0; --i) {
      var element = elements[i]; // filter by camera culling mask.

      if (!(camera.cullingMask & element._entity.layer)) {
        continue;
      } // filter by camera frustm.


      if (camera.enableFrustumCulling) {
        element.isCulled = !camera._frustum.intersectsBox(element.bounds);

        if (element.isCulled) {
          continue;
        }
      }

      element._updateShaderData(context); // union camera global macro and renderer macro.


      ShaderMacroCollection.unionCollection(camera._globalShaderMacro, element.shaderData._macroCollection, element._globalShaderMacro);

      element._render(camera);
    }
  };

  _proto.callComponentDestory = function callComponentDestory() {
    var destoryComponents = this._destoryComponents;
    var length = destoryComponents.length;

    if (length > 0) {
      for (var i = length - 1; i >= 0; --i) {
        destoryComponents[i].onDestroy();
      }

      destoryComponents.length = 0;
    }
  };

  _proto.callCameraOnBeginRender = function callCameraOnBeginRender(camera) {
    var camComps = camera.entity._components;

    for (var i = camComps.length - 1; i >= 0; --i) {
      var camComp = camComps[i];
      camComp.onBeginRender && camComp.onBeginRender(camera);
    }
  };

  _proto.callCameraOnEndRender = function callCameraOnEndRender(camera) {
    var camComps = camera.entity._components;

    for (var i = camComps.length - 1; i >= 0; --i) {
      var camComp = camComps[i];
      camComp.onBeginRender && camComp.onEndRender(camera);
    }
  };

  _proto.getActiveChangedTempList = function getActiveChangedTempList() {
    return this._componentsContainerPool.length ? this._componentsContainerPool.pop() : [];
  };

  _proto.putActiveChangedTempList = function putActiveChangedTempList(componentContainer) {
    componentContainer.length = 0;

    this._componentsContainerPool.push(componentContainer);
  };

  return ComponentsManager;
}();

var ComponentCloner = /*#__PURE__*/function () {
  function ComponentCloner() {}

  /**
   * Clone component.
   * @param source - Clone source
   * @param target - Clone target
   */
  ComponentCloner.cloneComponent = function cloneComponent(source, target) {
    var cloneModes = CloneManager.getCloneMode(source.constructor);
    var keys = Object.keys(source);

    for (var i = 0, n = keys.length; i < n; i++) {
      var k = keys[i];
      var cloneMode = cloneModes[k];

      switch (cloneMode) {
        case undefined:
        case CloneMode.Assignment:
          target[k] = source[k];
          break;

        case CloneMode.Shallow:
          var sourcePropS = source[k];

          if (sourcePropS instanceof Object) {
            var tarProp = target[k];
            tarProp == null && (tarProp = target[k] = sourcePropS.constructor());

            _extends(tarProp, sourcePropS);
          } else {
            // Null or undefine and primitive type.
            target[k] = sourcePropS;
          }

          break;

        case CloneMode.Deep:
          var sourcePropD = source[k];

          if (sourcePropD instanceof Object) {
            var _tarProp = target[k];
            _tarProp == null && (_tarProp = target[k] = sourcePropD.constructor());
            CloneManager.deepCloneObject(sourcePropD, _tarProp);
          } else {
            // Null or undefine and primitive type.
            target[k] = sourcePropD;
          }

          break;
      }
    }
  };

  return ComponentCloner;
}();

/**
 * Used for component dependency registration.
 */
var ComponentsDependencies = /*#__PURE__*/function () {
  /**
   * @internal
   */

  /**
   * Register component dependencies.
   * @param currentComponent - The component you want to be register.
   * @param dependentComponent - The component's dependencies.
   */
  ComponentsDependencies.register = function register(currentComponent, dependentComponent) {
    this._addDependency(currentComponent, dependentComponent, this._dependenciesMap);

    this._addDependency(dependentComponent, currentComponent, this._invDependenciesMap);
  }
  /**
   * @internal
   */
  ;

  ComponentsDependencies._addCheck = function _addCheck(entity, type) {
    // Check if there are dependent components.
    var dependencies = ComponentsDependencies._dependenciesMap.get(type);

    if (dependencies) {
      for (var i = 0, len = dependencies.length; i < len; i++) {
        if (!entity.getComponent(dependencies[i])) {
          throw "you should add " + dependencies[i] + " before adding " + type;
        }
      }
    }
  }
  /**
   * @internal
   */
  ;

  ComponentsDependencies._removeCheck = function _removeCheck(entity, type) {
    var invDenpendencies = ComponentsDependencies._invDependenciesMap.get(type);

    if (invDenpendencies) {
      for (var i = 0, len = invDenpendencies.length; i < len; i++) {
        if (entity.getComponent(invDenpendencies[i])) {
          throw "you should remove " + invDenpendencies[i] + " before adding " + type;
        }
      }
    }
  };

  ComponentsDependencies._addDependency = function _addDependency(currentComponent, dependentComponent, map) {
    var components = map.get(currentComponent);

    if (!components) {
      components = [];
      map.set(currentComponent, components);
    }

    if (components.indexOf(dependentComponent) === -1) {
      components.push(dependentComponent);
    }
  };

  function ComponentsDependencies() {}

  return ComponentsDependencies;
}();
ComponentsDependencies._dependenciesMap = new Map();
ComponentsDependencies._invDependenciesMap = new Map();
function dependencies() {
  for (var _len = arguments.length, abilityClass = new Array(_len), _key = 0; _key < _len; _key++) {
    abilityClass[_key] = arguments[_key];
  }

  return function (target) {
    abilityClass.forEach(function (ability) {
      return ComponentsDependencies.register(target, ability);
    });
  };
}

/**
 * Layer, used for bit operations.
 */
exports.Layer = void 0;

(function (Layer) {
  Layer[Layer["Layer0"] = 1] = "Layer0";
  Layer[Layer["Layer1"] = 2] = "Layer1";
  Layer[Layer["Layer2"] = 4] = "Layer2";
  Layer[Layer["Layer3"] = 8] = "Layer3";
  Layer[Layer["Layer4"] = 16] = "Layer4";
  Layer[Layer["Layer5"] = 32] = "Layer5";
  Layer[Layer["Layer6"] = 64] = "Layer6";
  Layer[Layer["Layer7"] = 128] = "Layer7";
  Layer[Layer["Layer8"] = 256] = "Layer8";
  Layer[Layer["Layer9"] = 512] = "Layer9";
  Layer[Layer["Layer10"] = 1024] = "Layer10";
  Layer[Layer["Layer11"] = 2048] = "Layer11";
  Layer[Layer["Layer12"] = 4096] = "Layer12";
  Layer[Layer["Layer13"] = 8192] = "Layer13";
  Layer[Layer["Layer14"] = 16384] = "Layer14";
  Layer[Layer["Layer15"] = 32768] = "Layer15";
  Layer[Layer["Layer16"] = 65536] = "Layer16";
  Layer[Layer["Layer17"] = 131072] = "Layer17";
  Layer[Layer["Layer18"] = 262144] = "Layer18";
  Layer[Layer["Layer19"] = 524288] = "Layer19";
  Layer[Layer["Layer20"] = 1048576] = "Layer20";
  Layer[Layer["Layer21"] = 2097152] = "Layer21";
  Layer[Layer["Layer22"] = 4194304] = "Layer22";
  Layer[Layer["Layer23"] = 8388608] = "Layer23";
  Layer[Layer["Layer24"] = 16777216] = "Layer24";
  Layer[Layer["Layer25"] = 33554432] = "Layer25";
  Layer[Layer["Layer26"] = 67108864] = "Layer26";
  Layer[Layer["Layer27"] = 134217728] = "Layer27";
  Layer[Layer["Layer28"] = 268435456] = "Layer28";
  Layer[Layer["Layer29"] = 536870912] = "Layer29";
  Layer[Layer["Layer30"] = 1073741824] = "Layer30";
  Layer[Layer["Layer31"] = 2147483648] = "Layer31";
  Layer[Layer["Everything"] = 4294967295] = "Everything";
  Layer[Layer["Nothing"] = 0] = "Nothing";
})(exports.Layer || (exports.Layer = {}));

var _class$7, _descriptor$7, _descriptor2$7, _descriptor3$6, _descriptor4$6, _temp$7;

/**
 * The base class of the components.
 */
var Component = (_class$7 = (_temp$7 = /*#__PURE__*/function (_EngineObject) {
  _inheritsLoose(Component, _EngineObject);

  function Component(entity) {
    var _this;

    _this = _EngineObject.call(this, entity.engine) || this;

    _initializerDefineProperty(_this, "_entity", _descriptor$7, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_destroyed", _descriptor2$7, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_enabled", _descriptor3$6, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_awaked", _descriptor4$6, _assertThisInitialized(_this));

    _this._renderPriority = 0;
    _this._entity = entity;
    return _this;
  }
  /**
   * Destory this instance.
   */


  var _proto = Component.prototype;

  _proto.destroy = function destroy() {
    if (this._destroyed) {
      return;
    }

    this._entity._removeComponent(this);

    if (this._entity.isActiveInHierarchy) {
      this._enabled && this._onDisable();

      this._onInActive();
    }

    this._destroyed = true;

    this._onDestroy();
  }
  /**
   * @internal
   */
  ;

  _proto._onAwake = function _onAwake() {}
  /**
   * @internal
   */
  ;

  _proto._onEnable = function _onEnable() {}
  /**
   * @internal
   */
  ;

  _proto._onDisable = function _onDisable() {}
  /**
   * @internal
   */
  ;

  _proto._onDestroy = function _onDestroy() {}
  /**
   * @internal
   */
  ;

  _proto._onActive = function _onActive() {}
  /**
   * @internal
   */
  ;

  _proto._onInActive = function _onInActive() {}
  /**
   * @internal
   */
  ;

  _proto._setActive = function _setActive(value) {
    if (value) {
      if (!this._awaked) {
        this._awaked = true;

        this._onAwake();
      } // You can do isActive = false in onAwake function.


      if (this._entity._isActiveInHierarchy) {
        this._onActive();

        this._enabled && this._onEnable();
      }
    } else {
      this._enabled && this._onDisable();

      this._onInActive();
    }
  } //---------------------------------------------Deprecated-----------------------------------------------------------------
  ;

  _createClass(Component, [{
    key: "enabled",
    get:
    /** @internal */

    /** @internal */

    /**
     * Enabled getter, 'enabled' indicates whether the component is enabled.
     */
    function get() {
      return this._enabled;
    }
    /**
     * Enabled setter, indicates whether the component is enabled.
     */
    ,
    set: function set(value) {
      if (value === this._enabled) {
        return;
      }

      this._enabled = value;

      if (value) {
        this._entity.isActiveInHierarchy && this._onEnable();
      } else {
        this._entity.isActiveInHierarchy && this._onDisable();
      }
    }
    /**
     * Destroyed getter, 'destroyed' indicates whether the component is destroyed.
     */

  }, {
    key: "destroyed",
    get: function get() {
      return this._destroyed;
    }
    /**
     * The entitiy which the component belongs to.
     */

  }, {
    key: "entity",
    get: function get() {
      return this._entity;
    }
    /**
     * The scene which the component's entity belongs to.
     */

  }, {
    key: "scene",
    get: function get() {
      return this._entity.scene;
    }
    /**
     * The engine which the component's entity belongs to.
     */

  }, {
    key: "engine",
    get: function get() {
      return this._entity.engine;
    }
  }, {
    key: "renderPriority",
    get:
    /**
     * @deprecated
     * Rendering priority.
     */
    function get() {
      return this._renderPriority;
    },
    set: function set(val) {
      this._renderPriority = val;
    }
  }]);

  return Component;
}(EngineObject), _temp$7), (_descriptor$7 = _applyDecoratedDescriptor(_class$7.prototype, "_entity", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$7 = _applyDecoratedDescriptor(_class$7.prototype, "_destroyed", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3$6 = _applyDecoratedDescriptor(_class$7.prototype, "_enabled", [assignmentClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor4$6 = _applyDecoratedDescriptor(_class$7.prototype, "_awaked", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class$7);

/**
 * Used to update tags.
 */

var UpdateFlag = /*#__PURE__*/function () {
  /** Flag. */
  function UpdateFlag(_flags) {
    if (_flags === void 0) {
      _flags = [];
    }

    this._flags = _flags;
    this.flag = true;
  }
  /**
   * Destroy.
   */


  var _proto = UpdateFlag.prototype;

  _proto.destroy = function destroy() {
    var flags = this._flags;
    removeFromArray(flags, this);
    this._flags = null;
  };

  return UpdateFlag;
}();

var _class$6, _descriptor$6, _descriptor2$6, _descriptor3$5, _descriptor4$5, _descriptor5$5, _descriptor6$4, _descriptor7$3, _descriptor8$3, _descriptor9$2, _descriptor10$2, _descriptor11$2, _descriptor12$2, _descriptor13$1, _class2$3, _temp$6;
/**
 * Used to implement transformation related functions.
 */

var Transform = (_class$6 = (_temp$6 = _class2$3 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Transform, _Component);

  function Transform() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _initializerDefineProperty(_this, "_position", _descriptor$6, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_rotation", _descriptor2$6, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_rotationQuaternion", _descriptor3$5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_scale", _descriptor4$5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_worldPosition", _descriptor5$5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_worldRotation", _descriptor6$4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_worldRotationQuaternion", _descriptor7$3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_lossyWorldScale", _descriptor8$3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_localMatrix", _descriptor9$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_worldMatrix", _descriptor10$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_changeFlags", _descriptor11$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_isParentDirty", _descriptor12$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_parentTransformCache", _descriptor13$1, _assertThisInitialized(_this));

    _this._dirtyFlag = Transform._WM_WP_WE_WQ_WS_FLAGS;
    return _this;
  }

  var _proto = Transform.prototype;

  /**
   * Set local position by X, Y, Z value.
   * @param x - X coordinate
   * @param y - Y coordinate
   * @param z - Z coordinate
   */
  _proto.setPosition = function setPosition(x, y, z) {
    this._position.setValue(x, y, z);

    this.position = this._position;
  }
  /**
   * Set local rotaion by the X, Y, Z components of the euler angle, unit in degrees, Yaw/Pitch/Roll sequence.
   * @param x - The angle of rotation around the X axis
   * @param y - The angle of rotation around the Y axis
   * @param z - The angle of rotation around the Z axis
   */
  ;

  _proto.setRotation = function setRotation(x, y, z) {
    this._rotation.setValue(x, y, z);

    this.rotation = this._rotation;
  }
  /**
   * Set local rotaion by the X, Y, Z, and W components of the quaternion.
   * @param x - X component of quaternion
   * @param y - Y component of quaternion
   * @param z - Z component of quaternion
   * @param w - W component of quaternion
   */
  ;

  _proto.setRotationQuaternion = function setRotationQuaternion(x, y, z, w) {
    this._rotationQuaternion.setValue(x, y, z, w);

    this.rotationQuaternion = this._rotationQuaternion;
  }
  /**
   * Set local scaling by scaling values along X, Y, Z axis.
   * @param x - Scaling along X axis
   * @param y - Scaling along Y axis
   * @param z - Scaling along Z axis
   */
  ;

  _proto.setScale = function setScale(x, y, z) {
    this._scale.setValue(x, y, z);

    this.scale = this._scale;
  }
  /**
   * Set world position by X, Y, Z value.
   * @param x - X coordinate
   * @param y - Y coordinate
   * @param z - Z coordinate
   */
  ;

  _proto.setWorldPosition = function setWorldPosition(x, y, z) {
    this._worldPosition.setValue(x, y, z);

    this.worldPosition = this._worldPosition;
  }
  /**
   * Set world rotaion by the X, Y, Z components of the euler angle, unit in degrees, Yaw/Pitch/Roll sequence.
   * @param x - The angle of rotation around the X axis
   * @param y - The angle of rotation around the Y axis
   * @param z - The angle of rotation around the Z axis
   */
  ;

  _proto.setWorldRotation = function setWorldRotation(x, y, z) {
    this._worldRotation.setValue(x, y, z);

    this.worldRotation = this._worldRotation;
  }
  /**
   * Set local rotaion by the X, Y, Z, and W components of the quaternion.
   * @param x - X component of quaternion
   * @param y - Y component of quaternion
   * @param z - Z component of quaternion
   * @param w - W component of quaternion
   */
  ;

  _proto.setWorldRotationQuaternion = function setWorldRotationQuaternion(x, y, z, w) {
    this._worldRotationQuaternion.setValue(x, y, z, w);

    this.worldRotationQuaternion = this._worldRotationQuaternion;
  }
  /**
   * Get the forward direction in world space.
   * @param forward - Forward vector
   * @returns Forward vector
   */
  ;

  _proto.getWorldForward = function getWorldForward(forward) {
    var e = this.worldMatrix.elements;
    forward.setValue(-e[8], -e[9], -e[10]);
    return forward.normalize();
  }
  /**
   * Get the right direction in world space.
   * @param right - Right vector
   * @returns Right vector
   */
  ;

  _proto.getWorldRight = function getWorldRight(right) {
    var e = this.worldMatrix.elements;
    right.setValue(e[0], e[1], e[2]);
    return right.normalize();
  }
  /**
   * Get the up direction in world space.
   * @param up - Up vector
   * @returns Up vector
   */
  ;

  _proto.getWorldUp = function getWorldUp(up) {
    var e = this.worldMatrix.elements;
    up.setValue(e[4], e[5], e[6]);
    return up.normalize();
  }
  /**
   * Translate along the passed Vector3.
   * @param translation - Direction and distance of translation
   * @param relativeToLocal - Relative to local space
   */
  ;

  _proto.translate = function translate(translationOrX, relativeToLocalOrY, z, relativeToLocal) {
    if (typeof translationOrX === "number") {
      var _translate2 = Transform._tempVec3;

      _translate2.setValue(translationOrX, relativeToLocalOrY, z);

      this._translate(_translate2, relativeToLocal);
    } else {
      this._translate(translationOrX, relativeToLocalOrY);
    }
  }
  /**
   * Rotate around the passed Vector3.
   * @param rotation - Euler angle in degrees
   * @param relativeToLocal - Relative to local space
   */
  ;

  _proto.rotate = function rotate(rotationOrX, relativeToLocalOrY, z, relativeToLocal) {
    if (typeof rotationOrX === "number") {
      this._rotateXYZ(rotationOrX, relativeToLocalOrY, z, relativeToLocal);
    } else {
      this._rotateXYZ(rotationOrX.x, rotationOrX.y, rotationOrX.z, relativeToLocalOrY);
    }
  }
  /**
   * Rotate around the specified axis according to the specified angle.
   * @param axis - Rotate axis
   * @param angle - Rotate angle in degrees
   * @param relativeToLocal - Relative to local space
   */
  ;

  _proto.rotateByAxis = function rotateByAxis(axis, angle, relativeToLocal) {
    if (relativeToLocal === void 0) {
      relativeToLocal = true;
    }

    var rad = angle * math.MathUtil.degreeToRadFactor;
    math.Quaternion.rotationAxisAngle(axis, rad, Transform._tempQuat0);

    this._rotateByQuat(Transform._tempQuat0, relativeToLocal);
  }
  /**
   * Rotate and ensure that the world front vector points to the target world position.
   * @param worldPosition - Target world position
   * @param worldUp - Up direciton in world space, defalut is Vector3(0, 1, 0)
   */
  ;

  _proto.lookAt = function lookAt(worldPosition, worldUp) {
    var _worldUp;

    var position = this.worldPosition;
    var EPSILON = math.MathUtil.zeroTolerance;

    if (Math.abs(position.x - worldPosition.x) < EPSILON && Math.abs(position.y - worldPosition.y) < EPSILON && Math.abs(position.z - worldPosition.z) < EPSILON) {
      return;
    }

    var rotMat = Transform._tempMat43;
    var worldRotationQuaternion = this._worldRotationQuaternion;
    worldUp = (_worldUp = worldUp) != null ? _worldUp : Transform._tempVec3.setValue(0, 1, 0);
    math.Matrix.lookAt(position, worldPosition, worldUp, rotMat);
    rotMat.getRotation(worldRotationQuaternion).invert();
    this.worldRotationQuaternion = worldRotationQuaternion;
  }
  /**
   * Register world transform change flag.
   * @returns Change flag
   */
  ;

  _proto.registerWorldChangeFlag = function registerWorldChangeFlag() {
    var flag = new UpdateFlag(this._changeFlags);

    this._changeFlags.push(flag);

    return flag;
  }
  /**
   * @internal
   */
  ;

  _proto._parentChange = function _parentChange() {
    this._isParentDirty = true;

    this._updateAllWorldFlag();
  }
  /**
   * Get worldMatrix: Will trigger the worldMatrix update of itself and all parent entities.
   * Get worldPosition: Will trigger the worldMatrix, local position update of itself and the worldMatrix update of all parent entities.
   * In summary, any update of related variables will cause the dirty mark of one of the full process (worldMatrix or worldRotationQuaternion) to be false.
   */
  ;

  _proto._updateWorldPositionFlag = function _updateWorldPositionFlag() {
    if (!this._isContainDirtyFlags(Transform._WM_WP_FLAGS)) {
      this._worldAssociatedChange(Transform._WM_WP_FLAGS);

      var nodeChildren = this._entity._children;

      for (var i = 0, n = nodeChildren.length; i < n; i++) {
        var _nodeChildren$i$trans;

        (_nodeChildren$i$trans = nodeChildren[i].transform) === null || _nodeChildren$i$trans === void 0 ? void 0 : _nodeChildren$i$trans._updateWorldPositionFlag();
      }
    }
  }
  /**
   * Get worldMatrix: Will trigger the worldMatrix update of itself and all parent entities.
   * Get worldPosition: Will trigger the worldMatrix, local position update of itself and the worldMatrix update of all parent entities.
   * Get worldRotationQuaternion: Will trigger the world rotation (in quaternion) update of itself and all parent entities.
   * Get worldRotation: Will trigger the world rotation(in euler and quaternion) update of itself and world rotation(in quaternion) update of all parent entities.
   * In summary, any update of related variables will cause the dirty mark of one of the full process (worldMatrix or worldRotationQuaternion) to be false.
   */
  ;

  _proto._updateWorldRotationFlag = function _updateWorldRotationFlag() {
    if (!this._isContainDirtyFlags(Transform._WM_WE_WQ_FLAGS)) {
      this._worldAssociatedChange(Transform._WM_WE_WQ_FLAGS);

      var nodeChildren = this._entity._children;

      for (var i = 0, n = nodeChildren.length; i < n; i++) {
        var _nodeChildren$i$trans2;

        (_nodeChildren$i$trans2 = nodeChildren[i].transform) === null || _nodeChildren$i$trans2 === void 0 ? void 0 : _nodeChildren$i$trans2._updateWorldPositionAndRotationFlag(); // Rotation update of parent entity will trigger world position and rotation update of all child entity.
      }
    }
  }
  /**
   * Get worldMatrix: Will trigger the worldMatrix update of itself and all parent entities.
   * Get worldPosition: Will trigger the worldMatrix, local position update of itself and the worldMatrix update of all parent entities.
   * Get worldRotationQuaternion: Will trigger the world rotation (in quaternion) update of itself and all parent entities.
   * Get worldRotation: Will trigger the world rotation(in euler and quaternion) update of itself and world rotation(in quaternion) update of all parent entities.
   * In summary, any update of related variables will cause the dirty mark of one of the full process (worldMatrix or worldRotationQuaternion) to be false.
   */
  ;

  _proto._updateWorldPositionAndRotationFlag = function _updateWorldPositionAndRotationFlag() {
    if (!this._isContainDirtyFlags(Transform._WM_WP_WE_WQ_FLAGS)) {
      this._worldAssociatedChange(Transform._WM_WP_WE_WQ_FLAGS);

      var nodeChildren = this._entity._children;

      for (var i = 0, n = nodeChildren.length; i < n; i++) {
        var _nodeChildren$i$trans3;

        (_nodeChildren$i$trans3 = nodeChildren[i].transform) === null || _nodeChildren$i$trans3 === void 0 ? void 0 : _nodeChildren$i$trans3._updateWorldPositionAndRotationFlag();
      }
    }
  }
  /**
   * Get worldMatrix: Will trigger the worldMatrix update of itself and all parent entities.
   * Get worldPosition: Will trigger the worldMatrix, local position update of itself and the worldMatrix update of all parent entities.
   * Get worldScale: Will trigger the scaling update of itself and all parent entities.
   * In summary, any update of related variables will cause the dirty mark of one of the full process (worldMatrix) to be false.
   */
  ;

  _proto._updateWorldScaleFlag = function _updateWorldScaleFlag() {
    if (!this._isContainDirtyFlags(Transform._WM_WS_FLAGS)) {
      this._worldAssociatedChange(Transform._WM_WS_FLAGS);

      var nodeChildren = this._entity._children;

      for (var i = 0, n = nodeChildren.length; i < n; i++) {
        var _nodeChildren$i$trans4;

        (_nodeChildren$i$trans4 = nodeChildren[i].transform) === null || _nodeChildren$i$trans4 === void 0 ? void 0 : _nodeChildren$i$trans4._updateWorldPositionAndScaleFlag();
      }
    }
  }
  /**
   * Get worldMatrix: Will trigger the worldMatrix update of itself and all parent entities.
   * Get worldPosition: Will trigger the worldMatrix, local position update of itself and the worldMatrix update of all parent entities.
   * Get worldScale: Will trigger the scaling update of itself and all parent entities.
   * In summary, any update of related variables will cause the dirty mark of one of the full process (worldMatrix) to be false.
   */
  ;

  _proto._updateWorldPositionAndScaleFlag = function _updateWorldPositionAndScaleFlag() {
    if (!this._isContainDirtyFlags(Transform._WM_WP_WS_FLAGS)) {
      this._worldAssociatedChange(Transform._WM_WP_WS_FLAGS);

      var nodeChildren = this._entity._children;

      for (var i = 0, n = nodeChildren.length; i < n; i++) {
        var _nodeChildren$i$trans5;

        (_nodeChildren$i$trans5 = nodeChildren[i].transform) === null || _nodeChildren$i$trans5 === void 0 ? void 0 : _nodeChildren$i$trans5._updateWorldPositionAndScaleFlag();
      }
    }
  }
  /**
   * Update all world transform property dirty flag, the principle is the same as above.
   */
  ;

  _proto._updateAllWorldFlag = function _updateAllWorldFlag() {
    if (!this._isContainDirtyFlags(Transform._WM_WP_WE_WQ_WS_FLAGS)) {
      this._worldAssociatedChange(Transform._WM_WP_WE_WQ_WS_FLAGS);

      var nodeChildren = this._entity._children;

      for (var i = 0, n = nodeChildren.length; i < n; i++) {
        var _nodeChildren$i$trans6;

        (_nodeChildren$i$trans6 = nodeChildren[i].transform) === null || _nodeChildren$i$trans6 === void 0 ? void 0 : _nodeChildren$i$trans6._updateAllWorldFlag();
      }
    }
  };

  _proto._getParentTransform = function _getParentTransform() {
    if (!this._isParentDirty) {
      return this._parentTransformCache;
    }

    var parentCache = null;
    var parent = this._entity.parent;

    while (parent) {
      var transform = parent.transform;

      if (transform) {
        parentCache = transform;
        break;
      } else {
        parent = parent.parent;
      }
    }

    this._parentTransformCache = parentCache;
    this._isParentDirty = false;
    return parentCache;
  };

  _proto._getScaleMatrix = function _getScaleMatrix() {
    var invRotation = Transform._tempQuat0;
    var invRotationMat = Transform._tempMat30;
    var worldRotScaMat = Transform._tempMat31;
    var scaMat = Transform._tempMat32;
    worldRotScaMat.setValueByMatrix(this.worldMatrix);
    math.Quaternion.invert(this.worldRotationQuaternion, invRotation);
    math.Matrix3x3.rotationQuaternion(invRotation, invRotationMat);
    math.Matrix3x3.multiply(invRotationMat, worldRotScaMat, scaMat);
    return scaMat;
  };

  _proto._isContainDirtyFlags = function _isContainDirtyFlags(targetDirtyFlags) {
    return (this._dirtyFlag & targetDirtyFlags) === targetDirtyFlags;
  };

  _proto._isContainDirtyFlag = function _isContainDirtyFlag(type) {
    return (this._dirtyFlag & type) != 0;
  };

  _proto._setDirtyFlagTrue = function _setDirtyFlagTrue(type) {
    this._dirtyFlag |= type;
  };

  _proto._setDirtyFlagFalse = function _setDirtyFlagFalse(type) {
    this._dirtyFlag &= ~type;
  };

  _proto._worldAssociatedChange = function _worldAssociatedChange(type) {
    this._dirtyFlag |= type;
    var len = this._changeFlags.length;

    for (var i = len - 1; i >= 0; i--) {
      this._changeFlags[i].flag = true;
    }
  };

  _proto._rotateByQuat = function _rotateByQuat(rotateQuat, relativeToLocal) {
    if (relativeToLocal) {
      math.Quaternion.multiply(this.rotationQuaternion, rotateQuat, this._rotationQuaternion);
      this.rotationQuaternion = this._rotationQuaternion;
    } else {
      math.Quaternion.multiply(this.worldRotationQuaternion, rotateQuat, this._worldRotationQuaternion);
      this.worldRotationQuaternion = this._worldRotationQuaternion;
    }
  };

  _proto._translate = function _translate(translation, relativeToLocal) {
    if (relativeToLocal === void 0) {
      relativeToLocal = true;
    }

    if (relativeToLocal) {
      var rotationMat = Transform._tempMat40;
      math.Matrix.rotationQuaternion(this.rotationQuaternion, rotationMat);
      math.Vector3.transformCoordinate(translation, rotationMat, Transform._tempVec3);
      this.position = this._position.add(Transform._tempVec3);
    } else {
      this.worldPosition = this._worldPosition.add(translation);
    }
  };

  _proto._rotateXYZ = function _rotateXYZ(x, y, z, relativeToLocal) {
    if (relativeToLocal === void 0) {
      relativeToLocal = true;
    }

    var radFactor = math.MathUtil.degreeToRadFactor;
    var rotQuat = Transform._tempQuat0;
    math.Quaternion.rotationEuler(x * radFactor, y * radFactor, z * radFactor, rotQuat);

    this._rotateByQuat(rotQuat, relativeToLocal);
  }
  /**
   * @deprecated Please use translate() function instead.
   * Translate in the specified direction and distance.
   * @param x - The direction and distance of translation in x axis
   * @param y - The direction and distance of translation in y axis
   * @param z - The direction and distance of translation in z axis
   * @param relativeToLocal - Whether relative local space
   */
  ;

  _proto.translateXYZ = function translateXYZ(x, y, z, relativeToLocal) {
    if (relativeToLocal === void 0) {
      relativeToLocal = true;
    }

    this.translate(x, y, z, relativeToLocal);
  }
  /**
   * @deprecated please use rotate() function instead.
   * Rotate according to the specified Euler angle.
   * @param x - The angle that rotate around of x axis (uint: angle)
   * @param y - The angle that rotate around of y axis (uint: angle)
   * @param z - The angle that rotate around of z axis (uint: angle)
   * @param relativeToLocal - Whether relative local space
   */
  ;

  _proto.rotateXYZ = function rotateXYZ(x, y, z, relativeToLocal) {
    if (relativeToLocal === void 0) {
      relativeToLocal = true;
    }

    this.rotate(x, y, z, relativeToLocal);
  };

  _createClass(Transform, [{
    key: "position",
    get:
    /**
     * Local position.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */
    function get() {
      return this._position;
    },
    set: function set(value) {
      if (this._position !== value) {
        value.cloneTo(this._position);
      }

      this._setDirtyFlagTrue(Transform._LOCAL_MATRIX_FLAG);

      this._updateWorldPositionFlag();
    }
    /**
     * World position.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */

  }, {
    key: "worldPosition",
    get: function get() {
      if (this._isContainDirtyFlag(Transform._WORLD_POSITION_FLAG)) {
        if (this._getParentTransform()) {
          this.worldMatrix.getTranslation(this._worldPosition);
        } else {
          this._position.cloneTo(this._worldPosition);
        }

        this._setDirtyFlagFalse(Transform._WORLD_POSITION_FLAG);
      }

      return this._worldPosition;
    },
    set: function set(value) {
      if (this._worldPosition !== value) {
        value.cloneTo(this._worldPosition);
      }

      var parent = this._getParentTransform();

      if (parent) {
        math.Matrix.invert(parent.worldMatrix, Transform._tempMat41);
        math.Vector3.transformCoordinate(value, Transform._tempMat41, this._position);
      } else {
        value.cloneTo(this._position);
      }

      this.position = this._position;

      this._setDirtyFlagFalse(Transform._WORLD_POSITION_FLAG);
    }
    /**
     * Local rotation, defining the rotation value in degrees, Yaw/Pitch/Roll sequence.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */

  }, {
    key: "rotation",
    get: function get() {
      if (this._isContainDirtyFlag(Transform._LOCAL_EULER_FLAG)) {
        this._rotationQuaternion.toEuler(this._rotation);

        this._rotation.scale(math.MathUtil.radToDegreeFactor); // radians to degrees


        this._setDirtyFlagFalse(Transform._LOCAL_EULER_FLAG);
      }

      return this._rotation;
    },
    set: function set(value) {
      if (this._rotation !== value) {
        value.cloneTo(this._rotation);
      }

      this._setDirtyFlagTrue(Transform._LOCAL_MATRIX_FLAG | Transform._LOCAL_QUAT_FLAG);

      this._setDirtyFlagFalse(Transform._LOCAL_EULER_FLAG);

      this._updateWorldRotationFlag();
    }
    /**
     * World rotation, defining the rotation value in degrees, Yaw/Pitch/Roll sequence.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */

  }, {
    key: "worldRotation",
    get: function get() {
      if (this._isContainDirtyFlag(Transform._WORLD_EULER_FLAG)) {
        this.worldRotationQuaternion.toEuler(this._worldRotation);

        this._worldRotation.scale(math.MathUtil.radToDegreeFactor); // Radian to angle


        this._setDirtyFlagFalse(Transform._WORLD_EULER_FLAG);
      }

      return this._worldRotation;
    },
    set: function set(value) {
      if (this._worldRotation !== value) {
        value.cloneTo(this._worldRotation);
      }

      math.Quaternion.rotationEuler(math.MathUtil.degreeToRadian(value.x), math.MathUtil.degreeToRadian(value.y), math.MathUtil.degreeToRadian(value.z), this._worldRotationQuaternion);
      this.worldRotationQuaternion = this._worldRotationQuaternion;

      this._setDirtyFlagFalse(Transform._WORLD_EULER_FLAG);
    }
    /**
     * Local rotaion, defining the rotation by using a unit quaternion.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */

  }, {
    key: "rotationQuaternion",
    get: function get() {
      if (this._isContainDirtyFlag(Transform._LOCAL_QUAT_FLAG)) {
        math.Quaternion.rotationEuler(math.MathUtil.degreeToRadian(this._rotation.x), math.MathUtil.degreeToRadian(this._rotation.y), math.MathUtil.degreeToRadian(this._rotation.z), this._rotationQuaternion);

        this._setDirtyFlagFalse(Transform._LOCAL_QUAT_FLAG);
      }

      return this._rotationQuaternion;
    },
    set: function set(value) {
      if (this._rotationQuaternion !== value) {
        value.cloneTo(this._rotationQuaternion);
      }

      this._setDirtyFlagTrue(Transform._LOCAL_MATRIX_FLAG | Transform._LOCAL_EULER_FLAG);

      this._setDirtyFlagFalse(Transform._LOCAL_QUAT_FLAG);

      this._updateWorldRotationFlag();
    }
    /**
     * World rotaion, defining the rotation by using a unit quaternion.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */

  }, {
    key: "worldRotationQuaternion",
    get: function get() {
      if (this._isContainDirtyFlag(Transform._WORLD_QUAT_FLAG)) {
        var parent = this._getParentTransform();

        if (parent != null) {
          math.Quaternion.multiply(parent.worldRotationQuaternion, this.rotationQuaternion, this._worldRotationQuaternion);
        } else {
          this.rotationQuaternion.cloneTo(this._worldRotationQuaternion);
        }

        this._setDirtyFlagFalse(Transform._WORLD_QUAT_FLAG);
      }

      return this._worldRotationQuaternion;
    },
    set: function set(value) {
      if (this._worldRotationQuaternion !== value) {
        value.cloneTo(this._worldRotationQuaternion);
      }

      var parent = this._getParentTransform();

      if (parent) {
        math.Quaternion.invert(parent.worldRotationQuaternion, Transform._tempQuat0);
        math.Quaternion.multiply(value, Transform._tempQuat0, this._rotationQuaternion);
      } else {
        value.cloneTo(this._rotationQuaternion);
      }

      this.rotationQuaternion = this._rotationQuaternion;

      this._setDirtyFlagFalse(Transform._WORLD_QUAT_FLAG);
    }
    /**
     * Local scaling.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */

  }, {
    key: "scale",
    get: function get() {
      return this._scale;
    },
    set: function set(value) {
      if (this._scale !== value) {
        value.cloneTo(this._scale);
      }

      this._setDirtyFlagTrue(Transform._LOCAL_MATRIX_FLAG);

      this._updateWorldScaleFlag();
    }
    /**
     * Local lossy scaling.
     * @remarks The value obtained may not be correct under certain conditions(for example, the parent node has scaling, and the child node has a rotation), the scaling will be tilted. Vector3 cannot be used to correctly represent the scaling. Must use Matrix3x3.
     */

  }, {
    key: "lossyWorldScale",
    get: function get() {
      if (this._isContainDirtyFlag(Transform._WORLD_SCALE_FLAG)) {
        if (this._getParentTransform()) {
          var scaleMat = this._getScaleMatrix();

          var e = scaleMat.elements;

          this._lossyWorldScale.setValue(e[0], e[4], e[8]);
        } else {
          this._scale.cloneTo(this._lossyWorldScale);
        }

        this._setDirtyFlagFalse(Transform._WORLD_SCALE_FLAG);
      }

      return this._lossyWorldScale;
    }
    /**
     * Local matrix.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */

  }, {
    key: "localMatrix",
    get: function get() {
      if (this._isContainDirtyFlag(Transform._LOCAL_MATRIX_FLAG)) {
        math.Matrix.affineTransformation(this._scale, this.rotationQuaternion, this._position, this._localMatrix);

        this._setDirtyFlagFalse(Transform._LOCAL_MATRIX_FLAG);
      }

      return this._localMatrix;
    },
    set: function set(value) {
      if (this._localMatrix !== value) {
        value.cloneTo(this._localMatrix);
      }

      this._localMatrix.decompose(this._position, this._rotationQuaternion, this._scale);

      this._setDirtyFlagTrue(Transform._LOCAL_EULER_FLAG);

      this._setDirtyFlagFalse(Transform._LOCAL_MATRIX_FLAG);

      this._updateAllWorldFlag();
    }
    /**
     * World matrix.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */

  }, {
    key: "worldMatrix",
    get: function get() {
      if (this._isContainDirtyFlag(Transform._WORLD_MATRIX_FLAG)) {
        var parent = this._getParentTransform();

        if (parent) {
          math.Matrix.multiply(parent.worldMatrix, this.localMatrix, this._worldMatrix);
        } else {
          this.localMatrix.cloneTo(this._worldMatrix);
        }

        this._setDirtyFlagFalse(Transform._WORLD_MATRIX_FLAG);
      }

      return this._worldMatrix;
    },
    set: function set(value) {
      if (this._worldMatrix !== value) {
        value.cloneTo(this._worldMatrix);
      }

      var parent = this._getParentTransform();

      if (parent) {
        math.Matrix.invert(parent.worldMatrix, Transform._tempMat42);
        math.Matrix.multiply(value, Transform._tempMat42, this._localMatrix);
      } else {
        value.cloneTo(this._localMatrix);
      }

      this.localMatrix = this._localMatrix;

      this._setDirtyFlagFalse(Transform._WORLD_MATRIX_FLAG);
    }
  }]);

  return Transform;
}(Component), _class2$3._tempQuat0 = new math.Quaternion(), _class2$3._tempVec3 = new math.Vector3(), _class2$3._tempMat30 = new math.Matrix3x3(), _class2$3._tempMat31 = new math.Matrix3x3(), _class2$3._tempMat32 = new math.Matrix3x3(), _class2$3._tempMat40 = new math.Matrix(), _class2$3._tempMat41 = new math.Matrix(), _class2$3._tempMat42 = new math.Matrix(), _class2$3._tempMat43 = new math.Matrix(), _class2$3._LOCAL_EULER_FLAG = 0x1, _class2$3._LOCAL_QUAT_FLAG = 0x2, _class2$3._WORLD_POSITION_FLAG = 0x4, _class2$3._WORLD_EULER_FLAG = 0x8, _class2$3._WORLD_QUAT_FLAG = 0x10, _class2$3._WORLD_SCALE_FLAG = 0x20, _class2$3._LOCAL_MATRIX_FLAG = 0x40, _class2$3._WORLD_MATRIX_FLAG = 0x80, _class2$3._WM_WP_FLAGS = 0x84, _class2$3._WM_WE_WQ_FLAGS = 0x98, _class2$3._WM_WP_WE_WQ_FLAGS = 0x9c, _class2$3._WM_WS_FLAGS = 0xa0, _class2$3._WM_WP_WS_FLAGS = 0xa4, _class2$3._WM_WP_WE_WQ_WS_FLAGS = 0xbc, _temp$6), (_descriptor$6 = _applyDecoratedDescriptor(_class$6.prototype, "_position", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Vector3();
  }
}), _descriptor2$6 = _applyDecoratedDescriptor(_class$6.prototype, "_rotation", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Vector3();
  }
}), _descriptor3$5 = _applyDecoratedDescriptor(_class$6.prototype, "_rotationQuaternion", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Quaternion();
  }
}), _descriptor4$5 = _applyDecoratedDescriptor(_class$6.prototype, "_scale", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Vector3(1, 1, 1);
  }
}), _descriptor5$5 = _applyDecoratedDescriptor(_class$6.prototype, "_worldPosition", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Vector3();
  }
}), _descriptor6$4 = _applyDecoratedDescriptor(_class$6.prototype, "_worldRotation", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Vector3();
  }
}), _descriptor7$3 = _applyDecoratedDescriptor(_class$6.prototype, "_worldRotationQuaternion", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Quaternion();
  }
}), _descriptor8$3 = _applyDecoratedDescriptor(_class$6.prototype, "_lossyWorldScale", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Vector3(1, 1, 1);
  }
}), _descriptor9$2 = _applyDecoratedDescriptor(_class$6.prototype, "_localMatrix", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Matrix();
  }
}), _descriptor10$2 = _applyDecoratedDescriptor(_class$6.prototype, "_worldMatrix", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Matrix();
  }
}), _descriptor11$2 = _applyDecoratedDescriptor(_class$6.prototype, "_changeFlags", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor12$2 = _applyDecoratedDescriptor(_class$6.prototype, "_isParentDirty", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor13$1 = _applyDecoratedDescriptor(_class$6.prototype, "_parentTransformCache", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
})), _class$6);

/**
 * Entity, be used as components container.
 */
var Entity = /*#__PURE__*/function (_EngineObject) {
  _inheritsLoose(Entity, _EngineObject);

  /**
   * Find entity globally by name.
   * @param name - The name of the entity which want to be finded.
   * @returns The entity which be finded.
   */
  Entity.findByName = function findByName(name) {
    var entitys = Entity._entitys;
    var elements = entitys._elements;

    for (var i = entitys.length - 1; i >= 0; i--) {
      var _entity = elements[i];

      if (_entity.name === name) {
        return _entity;
      }
    }

    return null;
  }
  /**
   * Find entity globally by path, use the ‘/’ symbol as the path separator.
   * @deprecated Use scene find by path instead.
   * @param scene - The scene be finded in.
   * @param path - The path fo the entity eg: /root/entity.
   * @returns The entity which be finded.
   */
  ;

  Entity.findByPath = function findByPath(scene, path) {
    return scene.findEntityByPath(path);
  }
  /**
   * @internal
   */
  ;

  Entity._findChildByName = function _findChildByName(root, name) {
    var children = root._children;

    for (var i = children.length - 1; i >= 0; i--) {
      var child = children[i];

      if (child.name === name) {
        return child;
      }
    }

    return null;
  }
  /**
   * @internal
   */
  ;

  Entity._traverseSetOwnerScene = function _traverseSetOwnerScene(entity, scene) {
    entity._scene = scene;
    var children = entity._children;

    for (var i = entity.childCount - 1; i >= 0; i--) {
      this._traverseSetOwnerScene(children[i], scene);
    }
  };

  /**
   * Create a entity.
   * @param engine - The engine the entity belongs to.
   */
  function Entity(engine, name) {
    var _this;

    _this = _EngineObject.call(this, engine) || this;
    _this.name = void 0;
    _this.layer = exports.Layer.Layer0;
    _this.transform = void 0;
    _this._isActiveInHierarchy = false;
    _this._components = [];
    _this._children = [];
    _this._scene = void 0;
    _this._isRoot = false;
    _this._isActive = true;
    _this._parent = null;
    _this._activeChangedComponents = void 0;
    _this._invModelMatrix = new math.Matrix();
    _this._inverseWorldMatFlag = void 0;

    Entity._entitys.add(_assertThisInitialized(_this));

    _this.name = name;
    _this.transform = _this.addComponent(Transform);
    _this._inverseWorldMatFlag = _this.transform.registerWorldChangeFlag();
    return _this;
  }
  /**
   * Add component based on the component type.
   * @param type - The type of the component.
   * @returns	The component which has been added.
   */


  var _proto = Entity.prototype;

  _proto.addComponent = function addComponent(type) {
    ComponentsDependencies._addCheck(this, type);

    var component = new type(this);

    this._components.push(component);

    if (this._isActiveInHierarchy) {
      component._setActive(true);
    }

    return component;
  }
  /**
   * Get component which match the type.
   * @param type - The type of the component.
   * @returns	The first component which match type.
   */
  ;

  _proto.getComponent = function getComponent(type) {
    for (var i = this._components.length - 1; i >= 0; i--) {
      var component = this._components[i];

      if (component instanceof type) {
        return component;
      }
    }
  }
  /**
   * Get components which match the type.
   * @param type - The type of the component.
   * @param results - The components which match type.
   * @returns	The components which match type.
   */
  ;

  _proto.getComponents = function getComponents(type, results) {
    results.length = 0;

    for (var i = this._components.length - 1; i >= 0; i--) {
      var component = this._components[i];

      if (component instanceof type) {
        results.push(component);
      }
    }

    return results;
  }
  /**
   * Get the components which match the type of the entity and it's children.
   * @param type - The component type.
   * @param results - The components collection.
   * @returns	The components collection which match the type.
   */
  ;

  _proto.getComponentsIncludeChildren = function getComponentsIncludeChildren(type, results) {
    results.length = 0;

    this._getComponentsInChildren(type, results);

    return results;
  }
  /**
   * Add child entity.
   * @param child - The child entity which want to be added.
   */
  ;

  _proto.addChild = function addChild(child) {
    child.parent = this;
  }
  /**
   * Remove child entitiy.
   * @param child - The child entity which want to be removed.
   */
  ;

  _proto.removeChild = function removeChild(child) {
    child.parent = null;
  }
  /**
   * Find child entity by index.
   * @param index - The index of the child entity.
   * @returns	The component which be finded.
   */
  ;

  _proto.getChild = function getChild(index) {
    return this._children[index];
  }
  /**
   * Find child entity by name.
   * @param name - The name of the entity which want to be finded.
   * @returns The component which be finded.
   */
  ;

  _proto.findByName = function findByName(name) {
    var children = this._children;

    var child = Entity._findChildByName(this, name);

    if (child) return child;

    for (var i = children.length - 1; i >= 0; i--) {
      var _child = children[i];

      var grandson = _child.findByName(name);

      if (grandson) {
        return grandson;
      }
    }

    return null;
  }
  /**
   * Find the entity by path.
   * @param path - The path fo the entity eg: /entity.
   * @returns The component which be finded.
   */
  ;

  _proto.findByPath = function findByPath(path) {
    var splits = path.split("/");
    var entity = this;

    for (var i = 0, length = splits.length; i < length; ++i) {
      var split = splits[i];

      if (split) {
        entity = Entity._findChildByName(entity, split);

        if (!entity) {
          return null;
        }
      }
    }

    return entity;
  }
  /**
   * Create child entity.
   * @param name - The child entity's name.
   * @returns The child entity.
   */
  ;

  _proto.createChild = function createChild(name) {
    var child = new Entity(this.engine, name);
    child.layer = this.layer;
    child.parent = this;
    return child;
  }
  /**
   * Clear children entities.
   */
  ;

  _proto.clearChildren = function clearChildren() {
    var children = this._children;

    for (var i = children.length - 1; i >= 0; i--) {
      var child = children[i];
      child._parent = null;
      child._isActiveInHierarchy && child._processInActive();

      Entity._traverseSetOwnerScene(child, null); // Must after child._processInActive().

    }

    children.length = 0;
  }
  /**
   * Clone
   * @returns Cloned entity.
   */
  ;

  _proto.clone = function clone() {
    var cloneEntity = new Entity(this._engine, this.name);
    cloneEntity._isActive = this._isActive;
    cloneEntity.transform.localMatrix = this.transform.localMatrix;
    var children = this._children;

    for (var i = 0, len = this._children.length; i < len; i++) {
      var child = children[i];
      cloneEntity.addChild(child.clone());
    }

    var components = this._components;

    for (var _i = 0, n = components.length; _i < n; _i++) {
      var sourceComp = components[_i];

      if (!(sourceComp instanceof Transform)) {
        var targetComp = cloneEntity.addComponent(sourceComp.constructor);
        ComponentCloner.cloneComponent(sourceComp, targetComp);
      }
    }

    return cloneEntity;
  }
  /**
   * Destroy self.
   */
  ;

  _proto.destroy = function destroy() {
    var abilityArray = this._components;

    for (var i = abilityArray.length - 1; i >= 0; i--) {
      abilityArray[i].destroy();
    }

    this._components.length = 0;
    var children = this._children;

    for (var _i2 = children.length - 1; _i2 >= 0; _i2--) {
      children[_i2].destroy();
    }

    this._children.length = 0;

    if (this._parent != null) {
      var parentChildren = this._parent._children;
      parentChildren.splice(parentChildren.indexOf(this), 1);
    }

    this._parent = null;

    Entity._entitys.delete(this);
  }
  /**
   * @internal
   */
  ;

  _proto._removeComponent = function _removeComponent(component) {
    ComponentsDependencies._removeCheck(this, component.constructor);

    var components = this._components;
    components.splice(components.indexOf(component), 1);
  }
  /**
   * @internal
   */
  ;

  _proto._removeFromParent = function _removeFromParent() {
    var oldParent = this._parent;

    if (oldParent != null) {
      var oldParentChildren = oldParent._children;
      oldParentChildren.splice(oldParentChildren.indexOf(this), 1);
      this._parent = null;
    }

    return oldParent;
  }
  /**
   * @internal
   */
  ;

  _proto._processActive = function _processActive() {
    if (this._activeChangedComponents) {
      throw "Note: can't set the 'main inActive entity' active in hierarchy, if the operation is in main inActive entity or it's children script's onDisable Event.";
    }

    this._activeChangedComponents = this._engine._componentsManager.getActiveChangedTempList();

    this._setActiveInHierarchy(this._activeChangedComponents);

    this._setActiveComponents(true);
  }
  /**
   * @internal
   */
  ;

  _proto._processInActive = function _processInActive() {
    if (this._activeChangedComponents) {
      throw "Note: can't set the 'main active entity' inActive in hierarchy, if the operation is in main active entity or it's children script's onEnable Event.";
    }

    this._activeChangedComponents = this._engine._componentsManager.getActiveChangedTempList();

    this._setInActiveInHierarchy(this._activeChangedComponents);

    this._setActiveComponents(false);
  };

  _proto._getComponentsInChildren = function _getComponentsInChildren(type, results) {
    for (var i = this._components.length - 1; i >= 0; i--) {
      var component = this._components[i];

      if (component instanceof type) {
        results.push(component);
      }
    }

    for (var _i3 = this._children.length - 1; _i3 >= 0; _i3--) {
      this._children[_i3]._getComponentsInChildren(type, results);
    }
  };

  _proto._setActiveComponents = function _setActiveComponents(isActive) {
    var activeChangedComponents = this._activeChangedComponents;

    for (var i = 0, length = activeChangedComponents.length; i < length; ++i) {
      activeChangedComponents[i]._setActive(isActive);
    }

    this._engine._componentsManager.putActiveChangedTempList(activeChangedComponents);

    this._activeChangedComponents = null;
  };

  _proto._setActiveInHierarchy = function _setActiveInHierarchy(activeChangedComponents) {
    this._isActiveInHierarchy = true;
    var components = this._components;

    for (var i = components.length - 1; i >= 0; i--) {
      activeChangedComponents.push(components[i]);
    }

    var children = this._children;

    for (var _i4 = children.length - 1; _i4 >= 0; _i4--) {
      var child = children[_i4];
      child.isActive && child._setActiveInHierarchy(activeChangedComponents);
    }
  };

  _proto._setInActiveInHierarchy = function _setInActiveInHierarchy(activeChangedComponents) {
    this._isActiveInHierarchy = false;
    var components = this._components;

    for (var i = components.length - 1; i >= 0; i--) {
      activeChangedComponents.push(components[i]);
    }

    var children = this._children;

    for (var _i5 = children.length - 1; _i5 >= 0; _i5--) {
      var child = children[_i5];
      child.isActive && child._setInActiveInHierarchy(activeChangedComponents);
    }
  };

  _proto._setTransformDirty = function _setTransformDirty() {
    if (this.transform) {
      this.transform._parentChange();
    } else {
      for (var i = 0, len = this._children.length; i < len; i++) {
        this._children[i]._setTransformDirty();
      }
    }
  } //--------------------------------------------------------------deprecated----------------------------------------------------------------
  ;

  /**
   * @deprecated
   */
  _proto.getInvModelMatrix = function getInvModelMatrix() {
    if (this._inverseWorldMatFlag.flag) {
      math.Matrix.invert(this.transform.worldMatrix, this._invModelMatrix);
      this._inverseWorldMatFlag.flag = false;
    }

    return this._invModelMatrix;
  };

  _createClass(Entity, [{
    key: "isActive",
    get:
    /**
     * Whether to activate locally.
     */
    function get() {
      return this._isActive;
    },
    set: function set(value) {
      if (value !== this._isActive) {
        this._isActive = value;

        if (value) {
          var parent = this._parent;

          if (parent !== null && parent !== void 0 && parent._isActiveInHierarchy || this._isRoot && this._scene._isActiveInEngine) {
            this._processActive();
          }
        } else {
          if (this._isActiveInHierarchy) {
            this._processInActive();
          }
        }
      }
    }
    /**
     * Whether it is active in the hierarchy.
     */

  }, {
    key: "isActiveInHierarchy",
    get: function get() {
      return this._isActiveInHierarchy;
    }
    /**
     * The parent entity.
     */

  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    },
    set: function set(entity) {
      if (entity !== this._parent) {
        var oldParent = this._removeFromParent();

        var newParent = this._parent = entity;

        if (newParent) {
          newParent._children.push(this);

          var parentScene = newParent._scene;

          if (this._scene !== parentScene) {
            Entity._traverseSetOwnerScene(this, parentScene);
          }

          if (newParent._isActiveInHierarchy) {
            !this._isActiveInHierarchy && this._isActive && this._processActive();
          } else {
            this._isActiveInHierarchy && this._processInActive();
          }
        } else {
          this._isActiveInHierarchy && this._processInActive();

          if (oldParent) {
            Entity._traverseSetOwnerScene(this, null);
          }
        }

        this._setTransformDirty();
      }
    }
    /**
     * The children entities
     */

  }, {
    key: "children",
    get: function get() {
      return this._children;
    }
    /**
     * Number of the children entities
     */

  }, {
    key: "childCount",
    get: function get() {
      return this._children.length;
    }
    /**
     * The scene the entity belongs to.
     */

  }, {
    key: "scene",
    get: function get() {
      return this._scene;
    }
    /**
     * The engine the entity belongs to.
     */

  }, {
    key: "engine",
    get: function get() {
      return this._engine;
    }
  }, {
    key: "position",
    get:
    /**
     * @deprecated
     * Use transform.position instead.
     */
    function get() {
      return this.transform.position;
    },
    set: function set(val) {
      this.transform.position = val;
    }
    /**
     * @deprecated
     * Use transform.worldPosition instead.
     */

  }, {
    key: "worldPosition",
    get: function get() {
      return this.transform.worldPosition;
    },
    set: function set(val) {
      this.transform.worldPosition = val;
    }
    /**
     * @deprecated
     * Use transform.rotationQuaternion instead.
     */

  }, {
    key: "rotation",
    get: function get() {
      return this.transform.rotationQuaternion;
    },
    set: function set(val) {
      this.transform.rotationQuaternion = val;
    }
    /**
     * @deprecated
     * Use transform.scale instead.
     */

  }, {
    key: "scale",
    get: function get() {
      return this.transform.scale;
    },
    set: function set(val) {
      this.transform.scale = val;
    }
  }]);

  return Entity;
}(EngineObject);
Entity._entitys = new DisorderedArray();

/**
 * Manage a set of feature objects.
 */
var FeatureManager = /*#__PURE__*/function () {
  function FeatureManager() {
    this._features = [];
    this._objects = [];
  }

  var _proto = FeatureManager.prototype;

  /**
   * Register a feature.
   * @param {SceneFeature|EngineFeature} Feature
   */
  _proto.registerFeature = function registerFeature(IFeature) {
    var featureArray = this._features; // Search by type, avoid adding

    for (var i = 0, len = featureArray.length; i < len; i++) {
      if (featureArray[i] === IFeature) {
        return;
      }
    } // Add to global array


    featureArray.push(IFeature); // Add to existing scene

    var objectArray = this._objects;

    for (var _i = 0, _len = objectArray.length; _i < _len; _i++) {
      objectArray[_i].features.push(new IFeature());
    }
  }
  /**
   * Add an feature with functional characteristics.
   * @param {Scene|Engine} obj - Scene or engine
   */
  ;

  _proto.addObject = function addObject(obj) {
    obj.features = [];

    for (var i = 0, len = this._features.length; i < len; i++) {
      var _engine;

      obj.features.push(new this._features[i]((_engine = obj.engine) != null ? _engine : obj));
    }

    this._objects.push(obj);
  }
  /**
   * Call the specified method of the feature.
   * @param obj - Scene or engine
   * @param method - Method name
   * @param args - Function args
   */
  ;

  _proto.callFeatureMethod = function callFeatureMethod(obj, method, args) {
    var features = obj.features;
    var count = features.length;

    for (var i = 0; i < count; i++) {
      var feature = features[i];

      if (feature[method]) {
        feature[method].apply(feature, args);
      }
    }
  }
  /**
   * Find feature.
   * @param obj - Scene or engine
   * @param feature - plug-in
   */
  ;

  _proto.findFeature = function findFeature(obj, IFeature) {
    var features = obj.features;
    var count = features.length;

    for (var i = 0; i < count; i++) {
      var feature = features[i];

      if (feature.constructor === IFeature) {
        return feature;
      }
    }

    return undefined;
  };

  return FeatureManager;
}();

/**
 * Render element.
 */
var RenderElement = /*#__PURE__*/function () {
  function RenderElement() {
    this.component = void 0;
    this.primitive = void 0;
    this.subPrimitive = void 0;
    this.material = void 0;
  }

  /**
   * Get render element from pool.
   * @remark The return value is only valid for the current frame, and the next frame will be automatically recycled for reuse.
   */
  RenderElement.getFromPool = function getFromPool() {
    var index = RenderElement._elementPoolIndex,
        pool = RenderElement._elementPool;
    RenderElement._elementPoolIndex++;

    if (pool.length === index) {
      var element = new RenderElement();
      pool.push(element);
      return element;
    } else {
      return pool[index];
    }
  }
  /**
   * @internal
   */
  ;

  RenderElement._restPool = function _restPool() {
    RenderElement._elementPoolIndex = 0;
  }
  /** Render component. */
  ;

  var _proto = RenderElement.prototype;

  _proto.setValue = function setValue(component, primitive, subPrimitive, material) {
    this.component = component;
    this.primitive = primitive;
    this.subPrimitive = subPrimitive;
    this.material = material;
  };

  return RenderElement;
}();
RenderElement._elementPoolIndex = 0;
RenderElement._elementPool = [];

/**
 * Scene feature plug-in.
 * @deprecated
 */
var SceneFeature = /*#__PURE__*/function () {
  function SceneFeature() {}

  var _proto = SceneFeature.prototype;

  /**
   * Callback before every scene update.
   * @param scene - Scene
   */
  _proto.preUpdate = function preUpdate(scene) {}
  /**
   * Callback after every scene update.
   * @param scene - Scene
   */
  ;

  _proto.postUpdate = function postUpdate(scene) {}
  /**
   * Callback before scene rendering.
   * @param scene - Scene
   * @param camera - Camera
   */
  ;

  _proto.preRender = function preRender(scene, camera) {}
  /**
   * Callback after scene rendering.
   * @param scene - Scene
   * @param camera - Camera
   */
  ;

  _proto.postRender = function postRender(scene, camera) {}
  /**
   * Callback after the scene is destroyed.
   * @param scene - Scene
   */
  ;

  _proto.destroy = function destroy(scene) {};

  return SceneFeature;
}();

/**
 * Blend factor.
 * @remarks defines which function is used for blending pixel arithmetic
 */
exports.BlendFactor = void 0;

(function (BlendFactor) {
  BlendFactor[BlendFactor["Zero"] = 0] = "Zero";
  BlendFactor[BlendFactor["One"] = 1] = "One";
  BlendFactor[BlendFactor["SourceColor"] = 2] = "SourceColor";
  BlendFactor[BlendFactor["OneMinusSourceColor"] = 3] = "OneMinusSourceColor";
  BlendFactor[BlendFactor["DestinationColor"] = 4] = "DestinationColor";
  BlendFactor[BlendFactor["OneMinusDestinationColor"] = 5] = "OneMinusDestinationColor";
  BlendFactor[BlendFactor["SourceAlpha"] = 6] = "SourceAlpha";
  BlendFactor[BlendFactor["OneMinusSourceAlpha"] = 7] = "OneMinusSourceAlpha";
  BlendFactor[BlendFactor["DestinationAlpha"] = 8] = "DestinationAlpha";
  BlendFactor[BlendFactor["OneMinusDestinationAlpha"] = 9] = "OneMinusDestinationAlpha";
  BlendFactor[BlendFactor["SourceAlphaSaturate"] = 10] = "SourceAlphaSaturate";
  BlendFactor[BlendFactor["BlendColor"] = 11] = "BlendColor";
  BlendFactor[BlendFactor["OneMinusBlendColor"] = 12] = "OneMinusBlendColor";
})(exports.BlendFactor || (exports.BlendFactor = {}));

/**
 * Blend operation function.
 * @remarks defines how a new pixel is combined with a pixel.
 */
exports.BlendOperation = void 0;

(function (BlendOperation) {
  BlendOperation[BlendOperation["Add"] = 0] = "Add";
  BlendOperation[BlendOperation["Subtract"] = 1] = "Subtract";
  BlendOperation[BlendOperation["ReverseSubtract"] = 2] = "ReverseSubtract";
  BlendOperation[BlendOperation["Min"] = 3] = "Min";
  BlendOperation[BlendOperation["Max"] = 4] = "Max";
})(exports.BlendOperation || (exports.BlendOperation = {}));

/**
 * Set which color channels can be rendered to frame buffer.
 * @remarks enumeration can be combined using bit operations.
 */
exports.ColorWriteMask = void 0;

(function (ColorWriteMask) {
  ColorWriteMask[ColorWriteMask["None"] = 0] = "None";
  ColorWriteMask[ColorWriteMask["Red"] = 1] = "Red";
  ColorWriteMask[ColorWriteMask["Green"] = 2] = "Green";
  ColorWriteMask[ColorWriteMask["Blue"] = 4] = "Blue";
  ColorWriteMask[ColorWriteMask["Alpha"] = 8] = "Alpha";
  ColorWriteMask[ColorWriteMask["All"] = 15] = "All";
})(exports.ColorWriteMask || (exports.ColorWriteMask = {}));

/**
 * Depth/Stencil comparison function.
 * @remarks Specifies a function that compares incoming pixel depth/stencil to the current depth/stencil buffer value.
 */
exports.CompareFunction = void 0;

(function (CompareFunction) {
  CompareFunction[CompareFunction["Never"] = 0] = "Never";
  CompareFunction[CompareFunction["Less"] = 1] = "Less";
  CompareFunction[CompareFunction["Equal"] = 2] = "Equal";
  CompareFunction[CompareFunction["LessEqual"] = 3] = "LessEqual";
  CompareFunction[CompareFunction["Greater"] = 4] = "Greater";
  CompareFunction[CompareFunction["NotEqual"] = 5] = "NotEqual";
  CompareFunction[CompareFunction["GreaterEqual"] = 6] = "GreaterEqual";
  CompareFunction[CompareFunction["Always"] = 7] = "Always";
})(exports.CompareFunction || (exports.CompareFunction = {}));

/**
 * Culling mode.
 * @remarks specifies whether or not front- and/or back-facing polygons can be culled.
 */
exports.CullMode = void 0;

(function (CullMode) {
  CullMode[CullMode["Off"] = 0] = "Off";
  CullMode[CullMode["Front"] = 1] = "Front";
  CullMode[CullMode["Back"] = 2] = "Back";
})(exports.CullMode || (exports.CullMode = {}));

/**
 * Stencil operation mode.
 * @remarks sets the front and/or back-facing stencil test actions.
 */
exports.StencilOperation = void 0;

(function (StencilOperation) {
  StencilOperation[StencilOperation["Keep"] = 0] = "Keep";
  StencilOperation[StencilOperation["Zero"] = 1] = "Zero";
  StencilOperation[StencilOperation["Replace"] = 2] = "Replace";
  StencilOperation[StencilOperation["IncrementSaturate"] = 3] = "IncrementSaturate";
  StencilOperation[StencilOperation["DecrementSaturate"] = 4] = "DecrementSaturate";
  StencilOperation[StencilOperation["Invert"] = 5] = "Invert";
  StencilOperation[StencilOperation["IncrementWrap"] = 6] = "IncrementWrap";
  StencilOperation[StencilOperation["DecrementWrap"] = 7] = "DecrementWrap";
})(exports.StencilOperation || (exports.StencilOperation = {}));

/**
 * Render queue type.
 */
exports.RenderQueueType = void 0;

(function (RenderQueueType) {
  RenderQueueType[RenderQueueType["Opaque"] = 1000] = "Opaque";
  RenderQueueType[RenderQueueType["AlphaTest"] = 2000] = "AlphaTest";
  RenderQueueType[RenderQueueType["Transparent"] = 3000] = "Transparent";
})(exports.RenderQueueType || (exports.RenderQueueType = {}));

/**
 * Render collection.
 * @private
 */
var RenderQueue = /*#__PURE__*/function () {
  function RenderQueue() {
    this.items = [];
  }

  var _proto = RenderQueue.prototype;

  /**
   * Push a render element.
   */
  _proto.pushPrimitive = function pushPrimitive(element) {
    this.items.push(element);
  }
  /**
   * Sort the elements.
   */
  ;

  _proto.sort = function sort(cameraPosition) {
    var _this = this;

    this.items.sort(function (a, b) {
      var aIsPrimitive = _this._isPrimitive(a);

      var bIsPrimitive = _this._isPrimitive(b);

      if (aIsPrimitive && bIsPrimitive) {
        var aElement = a;
        var bElement = b;
        var aRenderQueue = aElement.material.renderQueueType;
        var bRenderQueue = bElement.material.renderQueueType;

        if (aRenderQueue > bRenderQueue) {
          return 1;
        }

        if (aRenderQueue < bRenderQueue) {
          return -1;
        } // sort transparent queue from back to front.


        if (aRenderQueue >= exports.RenderQueueType.Transparent && bRenderQueue >= exports.RenderQueueType.Transparent) {
          var aDistance = math.Vector3.distanceSquared(aElement.component.entity.transform.worldPosition, cameraPosition);
          var bDistance = math.Vector3.distanceSquared(bElement.component.entity.transform.worldPosition, cameraPosition);
          return bDistance - aDistance;
        } // reduce switching shaderProgram


        return aElement.material.shader.name.localeCompare(bElement.material.shader.name);
      } else if (aIsPrimitive && !bIsPrimitive) {
        return -1;
      } else if (!aIsPrimitive && bIsPrimitive) {
        return 1;
      }
    });
  };

  _proto.pushSprite = function pushSprite(component, positionQuad, uvRect, tintColor, texture, renderMode, camera) {
    var element = {
      // @ts-ignore
      component: component,
      positionQuad: positionQuad,
      uvRect: uvRect,
      tintColor: tintColor,
      texture: texture,
      renderMode: renderMode,
      camera: camera
    };
    this.items.push(element);
  };

  _proto.render = function render(camera, replaceMaterial, mask) {
    var items = this.items;

    if (items.length === 0) {
      return;
    }

    var spriteMaterial = camera._renderPipeline._defaultSpriteMaterial;
    var engine = camera.engine,
        scene = camera.scene;
    var renderCount = engine._renderCount;
    var rhi = engine._hardwareRenderer;
    var sceneData = scene.shaderData;
    var cameraData = camera.shaderData;

    for (var i = 0, n = items.length; i < n; i++) {
      var item = items[i];
      var renderPassFlag = item.component.entity.layer;

      if (!(renderPassFlag & mask)) {
        continue;
      }

      if (this._isPrimitive(item)) {
        rhi.flushSprite(engine, spriteMaterial);
        var compileMacros = RenderQueue.compileMacros;
        var element = item;
        var renderer = element.component;
        var material = replaceMaterial ? replaceMaterial : element.material;
        var rendererData = renderer.shaderData;
        var materialData = material.shaderData; // @todo: temporary solution

        material._preRender(element); // union render global macro and material self macro.


        ShaderMacroCollection.unionCollection(renderer._globalShaderMacro, materialData._macroCollection, compileMacros);
        compileMacros.unionCollection(element.primitive._macroCollection); //CM&SS: temporary

        var program = material.shader._getShaderProgram(engine, compileMacros);

        if (!program.isValid) {
          continue;
        }

        var switchProgram = program.bind();
        var switchRenderCount = renderCount !== program._uploadRenderCount;

        if (switchRenderCount) {
          program.groupingOtherUniformBlock();
          program.uploadAll(program.sceneUniformBlock, sceneData);
          program.uploadAll(program.cameraUniformBlock, cameraData);
          program.uploadAll(program.rendererUniformBlock, rendererData);
          program.uploadAll(program.materialUniformBlock, materialData);
          program._uploadCamera = camera;
          program._uploadRenderer = renderer;
          program._uploadMaterial = material;
          program._uploadRenderCount = renderCount;
        } else {
          if (program._uploadCamera !== camera) {
            program.uploadUniforms(program.cameraUniformBlock, cameraData);
            program._uploadCamera = camera;
          }

          if (program._uploadRenderer !== renderer) {
            program.uploadUniforms(program.rendererUniformBlock, rendererData);
            program._uploadRenderer = renderer;
          }

          if (program._uploadMaterial !== material) {
            program.uploadUniforms(program.materialUniformBlock, materialData);
            program._uploadMaterial = material;
          }

          if (switchProgram) {
            program.uploadTextures(program.sceneUniformBlock, sceneData);
            program.uploadTextures(program.cameraUniformBlock, cameraData);
            program.uploadTextures(program.rendererUniformBlock, rendererData);
            program.uploadTextures(program.materialUniformBlock, materialData);
          }
        }

        material.renderState._apply(camera.engine);

        rhi.drawPrimitive(element.primitive, element.subPrimitive, program);
      } else {
        var spirteElement = item;
        rhi.drawSprite(spriteMaterial, spirteElement.positionQuad, spirteElement.uvRect, spirteElement.tintColor, spirteElement.texture, spirteElement.renderMode, spirteElement.camera);
      }
    }

    rhi.flushSprite(engine, spriteMaterial);
  }
  /**
   * Clear collection.
   */
  ;

  _proto.clear = function clear() {
    this.items.length = 0;
  };

  _proto._isPrimitive = function _isPrimitive(item) {
    return !!item.primitive;
  };

  return RenderQueue;
}();
RenderQueue.compileMacros = new ShaderMacroCollection();

var common = "#define GLSLIFY 1\n#define PI 3.14159265359\n#define LOG2 1.442695\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n#include <noise_common>\n"; // eslint-disable-line

var common_vert = "#define GLSLIFY 1\nattribute vec3 POSITION;\n#ifdef O3_HAS_UV\nattribute vec2 TEXCOORD_0;\n#endif\n#ifdef O3_HAS_SKIN\nattribute vec4 JOINTS_0;attribute vec4 WEIGHTS_0;\n#ifdef O3_USE_JOINT_TEXTURE\nuniform sampler2D u_jointSampler;uniform float u_jointCount;mat4 getJointMatrix(sampler2D smp,float index){float base=index/u_jointCount;float hf=0.5/u_jointCount;float v=base+hf;vec4 m0=texture2D(smp,vec2(0.125,v));vec4 m1=texture2D(smp,vec2(0.375,v));vec4 m2=texture2D(smp,vec2(0.625,v));vec4 m3=texture2D(smp,vec2(0.875,v));return mat4(m0,m1,m2,m3);}\n#else\nuniform mat4 u_jointMatrix[O3_JOINTS_NUM];\n#endif\n#endif\n#ifdef O3_HAS_VERTEXCOLOR\nattribute vec4 COLOR_0;\n#endif\nuniform mat4 u_localMat;uniform mat4 u_modelMat;uniform mat4 u_viewMat;uniform mat4 u_projMat;uniform mat4 u_MVMat;uniform mat4 u_MVPMat;uniform mat4 u_normalMat;uniform vec3 u_cameraPos;\n#ifndef OMIT_NORMAL\n#ifdef O3_HAS_NORMAL\nattribute vec3 NORMAL;\n#endif\n#ifdef O3_HAS_TANGENT\nattribute vec4 TANGENT;\n#endif\n#endif\n"; // eslint-disable-line

var common_frag = "#define GLSLIFY 1\nuniform O3_VERTEX_PRECISION mat4 u_localMat;uniform O3_VERTEX_PRECISION mat4 u_modelMat;uniform O3_VERTEX_PRECISION mat4 u_viewMat;uniform O3_VERTEX_PRECISION mat4 u_projMat;uniform O3_VERTEX_PRECISION mat4 u_MVMat;uniform O3_VERTEX_PRECISION mat4 u_MVPMat;uniform O3_VERTEX_PRECISION mat4 u_normalMat;uniform O3_VERTEX_PRECISION vec3 u_cameraPos;"; // eslint-disable-line

var color_share = "#define GLSLIFY 1\n#ifdef O3_HAS_VERTEXCOLOR\nvarying vec4 v_color;\n#endif\n"; // eslint-disable-line

var normal_share = "#define GLSLIFY 1\n#ifdef O3_HAS_NORMAL\n#if defined( O3_HAS_TANGENT ) && defined( O3_HAS_NORMALMAP )\nvarying mat3 v_TBN;\n#else\nvarying vec3 v_normal;\n#endif\n#endif\n"; // eslint-disable-line

var uv_share = "#define GLSLIFY 1\nvarying vec2 v_uv;"; // eslint-disable-line

var worldpos_share = "#define GLSLIFY 1\n#if defined( O3_NEED_WORLDPOS ) || defined( O3_HAS_ENVMAP ) || defined( O3_HAS_LIGHTMAP ) || defined(O3_CLIPPLANE_NUM)\nvarying vec3 v_pos;\n#endif\n"; // eslint-disable-line

var shadow_share = "#define GLSLIFY 1\n#ifdef O3_GENERATE_SHADOW_MAP\nuniform mat4 u_viewMatFromLight;uniform mat4 u_projMatFromLight;\n#endif\n#ifdef O3_SHADOW_MAP_COUNT\nuniform mat4 u_viewMatFromLight[O3_SHADOW_MAP_COUNT];uniform mat4 u_projMatFromLight[O3_SHADOW_MAP_COUNT];varying vec4 v_PositionFromLight[O3_SHADOW_MAP_COUNT];\n#endif\n"; // eslint-disable-line

var fog_share = "#define GLSLIFY 1\n#ifdef O3_HAS_FOG\nvarying vec3 v_fogDepth;uniform O3_VERTEX_PRECISION vec3 u_fogColor;\n#ifdef O3_FOG_EXP2\nuniform O3_VERTEX_PRECISION float u_fogDensity;\n#else\nuniform O3_VERTEX_PRECISION float u_fogNear;uniform O3_VERTEX_PRECISION float u_fogFar;\n#endif\n#endif\n"; // eslint-disable-line

var begin_normal_vert = "#define GLSLIFY 1\n#ifdef O3_HAS_NORMAL\nvec3 normal=vec3(NORMAL);\n#if defined( O3_HAS_TANGENT ) && defined( O3_HAS_NORMALMAP )\nvec4 tangent=vec4(TANGENT);\n#endif\n#endif\n"; // eslint-disable-line

var begin_position_vert = "#define GLSLIFY 1\nvec4 position=vec4(POSITION,1.0);"; // eslint-disable-line

var morph_target_vert = "#define GLSLIFY 1\n#ifdef O3_HAS_MORPH\nuniform float u_morphWeights[O3_MORPH_NUM];\n#ifdef O3_MORPH_POSITION\nattribute vec3 a_position0;\n#endif\n#ifdef O3_MORPH_NORMAL\nattribute vec3 a_normal0;\n#endif\n#ifdef O3_MORPH_TANGENT\nattribute vec3 a_tangent0;\n#endif\n#if O3_MORPH_NUM > 1\n#ifdef O3_MORPH_POSITION\nattribute vec3 a_position1;\n#endif\n#ifdef O3_MORPH_NORMAL\nattribute vec3 a_normal1;\n#endif\n#ifdef O3_MORPH_TANGENT\nattribute vec3 a_tangent1;\n#endif\n#endif\n#if O3_MORPH_NUM > 2\n#ifdef O3_MORPH_POSITION\nattribute vec3 a_position2;\n#endif\n#ifdef O3_MORPH_NORMAL\nattribute vec3 a_normal2;\n#endif\n#ifdef O3_MORPH_TANGENT\nattribute vec3 a_tangent2;\n#endif\n#endif\n#if O3_MORPH_NUM > 3\n#ifdef O3_MORPH_POSITION\nattribute vec3 a_position3;\n#endif\n#ifdef O3_MORPH_NORMAL\nattribute vec3 a_normal3;\n#endif\n#ifdef O3_MORPH_TANGENT\nattribute vec3 a_tangent3;\n#endif\n#endif\n#if O3_MORPH_NUM > 4\n#ifdef O3_MORPH_POSITION\nattribute vec3 a_position4;\n#endif\n#ifdef O3_MORPH_NORMAL\nattribute vec3 a_normal4;\n#endif\n#ifdef O3_MORPH_TANGENT\nattribute vec3 a_tangent4;\n#endif\n#endif\n#if O3_MORPH_NUM > 5\n#ifdef O3_MORPH_POSITION\nattribute vec3 a_position5;\n#endif\n#ifdef O3_MORPH_NORMAL\nattribute vec3 a_normal5;\n#endif\n#ifdef O3_MORPH_TANGENT\nattribute vec3 a_tangent5;\n#endif\n#endif\n#if O3_MORPH_NUM > 6\n#ifdef O3_MORPH_POSITION\nattribute vec3 a_position6;\n#endif\n#ifdef O3_MORPH_NORMAL\nattribute vec3 a_normal6;\n#endif\n#ifdef O3_MORPH_TANGENT\nattribute vec3 a_tangent6;\n#endif\n#endif\n#if O3_MORPH_NUM > 7\n#ifdef O3_MORPH_POSITION\nattribute vec3 a_position7;\n#endif\n#ifdef O3_MORPH_NORMAL\nattribute vec3 a_normal7;\n#endif\n#ifdef O3_MORPH_TANGENT\nattribute vec3 a_tangent7;\n#endif\n#endif\n#endif\n"; // eslint-disable-line

var position_vert = "#define GLSLIFY 1\n#ifndef O3_GENERATE_SHADOW_MAP\ngl_Position=u_MVPMat*position;\n#endif\n"; // eslint-disable-line

var color_vert = "#define GLSLIFY 1\n#ifdef O3_HAS_VERTEXCOLOR\nv_color=COLOR_0;\n#endif\n"; // eslint-disable-line

var normal_vert = "#define GLSLIFY 1\n#ifdef O3_HAS_NORMAL\n#if defined( O3_HAS_TANGENT ) && defined( O3_HAS_NORMALMAP )\nvec3 normalW=normalize(mat3(u_normalMat)*normal.xyz);vec3 tangentW=normalize(mat3(u_normalMat)*tangent.xyz);vec3 bitangentW=cross(normalW,tangentW)*tangent.w;v_TBN=mat3(tangentW,bitangentW,normalW);\n#else\nv_normal=normalize(mat3(u_normalMat)*normal);\n#endif\n#endif\n"; // eslint-disable-line

var skinning_vert = "#define GLSLIFY 1\n#ifdef O3_HAS_SKIN\n#ifdef O3_USE_JOINT_TEXTURE\nmat4 skinMatrix=WEIGHTS_0.x*getJointMatrix(u_jointSampler,JOINTS_0.x)+WEIGHTS_0.y*getJointMatrix(u_jointSampler,JOINTS_0.y)+WEIGHTS_0.z*getJointMatrix(u_jointSampler,JOINTS_0.z)+WEIGHTS_0.w*getJointMatrix(u_jointSampler,JOINTS_0.w);\n#else\nmat4 skinMatrix=WEIGHTS_0.x*u_jointMatrix[int(JOINTS_0.x)]+WEIGHTS_0.y*u_jointMatrix[int(JOINTS_0.y)]+WEIGHTS_0.z*u_jointMatrix[int(JOINTS_0.z)]+WEIGHTS_0.w*u_jointMatrix[int(JOINTS_0.w)];\n#endif\nposition=skinMatrix*position;\n#if defined(O3_HAS_NORMAL) && !defined(OMIT_NORMAL)\nnormal=vec4(skinMatrix*vec4(normal,0.0)).xyz;\n#if defined( O3_HAS_TANGENT ) && defined( O3_HAS_NORMALMAP )\ntangent.xyz=vec4(skinMatrix*vec4(tangent.xyz,0.0)).xyz;\n#endif\n#endif\n#endif\n"; // eslint-disable-line

var uv_vert = "#define GLSLIFY 1\n#ifdef O3_HAS_UV\nv_uv=TEXCOORD_0;\n#else\nv_uv=vec2(0.,0.);\n#endif\n"; // eslint-disable-line

var worldpos_vert = "#define GLSLIFY 1\n#if defined( O3_NEED_WORLDPOS ) || defined( O3_HAS_ENVMAP ) || defined( O3_HAS_LIGHTMAP ) || defined(O3_CLIPPLANE_NUM)\nvec4 temp_pos=u_modelMat*position;v_pos=temp_pos.xyz/temp_pos.w;\n#endif\n"; // eslint-disable-line

var shadow_vert = "#define GLSLIFY 1\n#ifdef O3_GENERATE_SHADOW_MAP\ngl_Position=u_projMatFromLight*u_viewMatFromLight*u_modelMat*position;\n#endif\n#ifdef O3_SHADOW_MAP_COUNT\nfor(int i=0;i<O3_SHADOW_MAP_COUNT;i++){v_PositionFromLight[i]=u_projMatFromLight[i]*u_viewMatFromLight[i]*u_modelMat*vec4(POSITION,1.0);}\n#endif\n"; // eslint-disable-line

var morph_vert = "#define GLSLIFY 1\n#ifdef O3_HAS_MORPH\n#if defined( O3_MORPH_POSITION )\nposition.xyz+=u_morphWeights[0]*a_position0;\n#if O3_MORPH_NUM > 1\nposition.xyz+=u_morphWeights[1]*a_position1;\n#endif\n#if O3_MORPH_NUM > 2\nposition.xyz+=u_morphWeights[2]*a_position2;\n#endif\n#if O3_MORPH_NUM > 3\nposition.xyz+=u_morphWeights[3]*a_position3;\n#endif\n#if O3_MORPH_NUM > 4\nposition.xyz+=u_morphWeights[4]*a_position4;\n#endif\n#if O3_MORPH_NUM > 5\nposition.xyz+=u_morphWeights[5]*a_position5;\n#endif\n#if O3_MORPH_NUM > 6\nposition.xyz+=u_morphWeights[6]*a_position6;\n#endif\n#if O3_MORPH_NUM > 7\nposition.xyz+=u_morphWeights[7]*a_position7;\n#endif\n#endif\n#if defined( O3_HAS_NORMAL ) && defined( O3_MORPH_NORMAL )\nnormal.xyz+=u_morphWeights[0]*a_normal0;\n#if O3_MORPH_NUM > 1\nnormal.xyz+=u_morphWeights[1]*a_normal1;\n#endif\n#if O3_MORPH_NUM > 2\nnormal.xyz+=u_morphWeights[2]*a_normal2;\n#endif\n#if O3_MORPH_NUM > 3\nnormal.xyz+=u_morphWeights[3]*a_normal3;\n#endif\n#if O3_MORPH_NUM > 4\nnormal.xyz+=u_morphWeights[4]*a_normal4;\n#endif\n#if O3_MORPH_NUM > 5\nnormal.xyz+=u_morphWeights[5]*a_normal5;\n#endif\n#if O3_MORPH_NUM > 6\nnormal.xyz+=u_morphWeights[6]*a_normal6;\n#endif\n#if O3_MORPH_NUM > 7\nnormal.xyz+=u_morphWeights[7]*a_normal7;\n#endif\n#endif\n#if defined( O3_HAS_TANGENT ) && defined( O3_MORPH_TANGENT ) && defined( O3_HAS_NORMALMAP )\ntangent.xyz+=u_morphWeights[0]*a_tangent0;\n#if O3_MORPH_NUM > 1\ntangent.xyz+=u_morphWeights[1]*a_tangent1;\n#endif\n#if O3_MORPH_NUM > 2\ntangent.xyz+=u_morphWeights[2]*a_tangent2;\n#endif\n#if O3_MORPH_NUM > 3\ntangent.xyz+=u_morphWeights[3]*a_tangent3;\n#endif\n#if O3_MORPH_NUM > 4\ntangent.xyz+=u_morphWeights[4]*a_tangent4;\n#endif\n#if O3_MORPH_NUM > 5\ntangent.xyz+=u_morphWeights[5]*a_tangent5;\n#endif\n#if O3_MORPH_NUM > 6\ntangent.xyz+=u_morphWeights[6]*a_tangent6;\n#endif\n#if O3_MORPH_NUM > 7\ntangent.xyz+=u_morphWeights[7]*a_tangent7;\n#endif\n#endif\n#endif\n"; // eslint-disable-line

var fog_vert = "#define GLSLIFY 1\n#ifdef O3_HAS_FOG\nv_fogDepth=(u_MVMat*position).xyz;\n#endif\n"; // eslint-disable-line

var ambient_light_frag = "#define GLSLIFY 1\n#ifdef O3_HAS_AMBIENT_LIGHT\nuniform vec3 u_ambientLightColor;\n#endif\n"; // eslint-disable-line

var direct_light_frag = "#define GLSLIFY 1\n#ifdef O3_DIRECT_LIGHT_COUNT\nstruct DirectLight{vec3 color;vec3 direction;};uniform vec3 u_directLightColor[O3_DIRECT_LIGHT_COUNT];uniform vec3 u_directLightDirection[O3_DIRECT_LIGHT_COUNT];\n#endif\n"; // eslint-disable-line

var point_light_frag = "#define GLSLIFY 1\n#ifdef O3_POINT_LIGHT_COUNT\nstruct PointLight{vec3 color;vec3 position;float distance;float decay;};uniform vec3 u_pointLightColor[O3_POINT_LIGHT_COUNT];uniform vec3 u_pointLightPosition[O3_POINT_LIGHT_COUNT];uniform float u_pointLightDistance[O3_POINT_LIGHT_COUNT];uniform float u_pointLightDecay[O3_POINT_LIGHT_COUNT];\n#endif\n"; // eslint-disable-line

var spot_light_frag = "#define GLSLIFY 1\n#ifdef O3_SPOT_LIGHT_COUNT\nstruct SpotLight{vec3 color;vec3 position;vec3 direction;float distance;float decay;float angle;float penumbra;float penumbraCos;float coneCos;};uniform vec3 u_spotLightColor[O3_SPOT_LIGHT_COUNT];uniform vec3 u_spotLightPosition[O3_SPOT_LIGHT_COUNT];uniform vec3 u_spotLightDirection[O3_SPOT_LIGHT_COUNT];uniform float u_spotLightDistance[O3_SPOT_LIGHT_COUNT];uniform float u_spotLightDecay[O3_SPOT_LIGHT_COUNT];uniform float u_spotLightAngle[O3_SPOT_LIGHT_COUNT];uniform float u_spotLightPenumbra[O3_SPOT_LIGHT_COUNT];uniform float u_spotLightPenumbraCos[O3_SPOT_LIGHT_COUNT];uniform float u_spotLightConeCos[O3_SPOT_LIGHT_COUNT];\n#endif\n"; // eslint-disable-line

var mobile_material_frag = "#define GLSLIFY 1\nuniform vec4 u_emissiveColor;uniform vec4 u_diffuseColor;uniform vec4 u_specularColor;uniform float u_shininess;\n#ifdef O3_EMISSIVE_TEXTURE\nuniform sampler2D u_emissiveTexture;\n#endif\n#ifdef O3_DIFFUSE_TEXTURE\nuniform sampler2D u_diffuseTexture;\n#endif\n#ifdef O3_SPECULAR_TEXTURE\nuniform sampler2D u_specularTexture;\n#endif\n"; // eslint-disable-line

var fog_frag = "#define GLSLIFY 1\n#ifdef O3_HAS_FOG\nfloat fogDepth=length(v_fogDepth);\n#ifdef O3_FOG_EXP2\nfloat fogFactor=whiteCompliment(exp2(-u_fogDensity*u_fogDensity*fogDepth*fogDepth*LOG2));\n#else\nfloat fogFactor=smoothstep(u_fogNear,u_fogFar,fogDepth);\n#endif\ngl_FragColor.rgb=mix(gl_FragColor.rgb,u_fogColor,fogFactor);\n#endif\n"; // eslint-disable-line

var begin_mobile_frag = "#define GLSLIFY 1\nvec4 ambient=vec4(0.0);vec4 emission=u_emissiveColor;vec4 diffuse=u_diffuseColor;vec4 specular=u_specularColor;\n#ifdef O3_EMISSIVE_TEXTURE\nemission*=texture2D(u_emissiveTexture,v_uv);\n#endif\n#ifdef O3_DIFFUSE_TEXTURE\ndiffuse*=texture2D(u_diffuseTexture,v_uv);\n#endif\n#ifdef O3_SPECULAR_TEXTURE\nspecular*=texture2D(u_specularTexture,v_uv);\n#endif\n#ifdef O3_HAS_AMBIENT_LIGHT\nambient=vec4(u_ambientLightColor,1.0)*diffuse;\n#endif\n"; // eslint-disable-line

var begin_normal_frag = "#define GLSLIFY 1\n#ifdef O3_HAS_NORMAL\n#if defined( O3_HAS_TANGENT ) && defined( O3_HAS_NORMALMAP )\nvec3 N=normalize(v_TBN[2]);\n#else\nvec3 N=normalize(v_normal);\n#endif\n#endif\n"; // eslint-disable-line

var begin_viewdir_frag = "#define GLSLIFY 1\n#if defined( O3_NEED_WORLDPOS ) || defined( O3_HAS_ENVMAP ) || defined( O3_HAS_LIGHTMAP )\nvec3 V=normalize(u_cameraPos-v_pos);\n#endif\n"; // eslint-disable-line

var mobile_blinnphong_frag = "#define GLSLIFY 1\n#ifdef O3_HAS_NORMAL\nN*=float(gl_FrontFacing)*2.0-1.0;\n#else\nvec3 N=vec3(0,0,1);\n#endif\nvec3 lightDiffuse=vec3(0.0,0.0,0.0);vec3 lightSpecular=vec3(0.0,0.0,0.0);\n#ifdef O3_DIRECT_LIGHT_COUNT\nDirectLight lgt;for(int i=0;i<O3_DIRECT_LIGHT_COUNT;i++){lgt.color=u_directLightColor[i];lgt.direction=u_directLightDirection[i];float d=max(dot(N,-lgt.direction),0.0);lightDiffuse+=lgt.color*d;vec3 halfDir=normalize(V-lgt.direction);float s=pow(clamp(dot(N,halfDir),0.0,1.0),u_shininess);lightSpecular+=lgt.color*s;}\n#endif\n#ifdef O3_POINT_LIGHT_COUNT\nPointLight lgt;for(int i=0;i<O3_POINT_LIGHT_COUNT;i++){lgt.color=u_pointLightColor[i];lgt.position=u_pointLightPosition[i];lgt.distance=u_pointLightDistance[i];lgt.decay=u_pointLightDecay[i];vec3 direction=v_pos-lgt.position;float dist=length(direction);direction/=dist;float decay=pow(max(0.0,1.0-dist/lgt.distance),2.0);float d=max(dot(N,-direction),0.0)*decay;lightDiffuse+=lgt.color*d;vec3 halfDir=normalize(V-direction);float s=pow(clamp(dot(N,halfDir),0.0,1.0),u_shininess)*decay;lightSpecular+=lgt.color*s;}\n#endif\n#ifdef O3_SPOT_LIGHT_COUNT\nSpotLight lgt;for(int i=0;i<O3_SPOT_LIGHT_COUNT;i++){lgt.color=u_spotLightColor[i];lgt.position=u_spotLightPosition[i];lgt.direction=u_spotLightDirection[i];lgt.distance=u_spotLightDistance[i];lgt.decay=u_spotLightDecay[i];lgt.angle=u_spotLightAngle[i];lgt.penumbra=u_spotLightPenumbra[i];vec3 direction=v_pos-lgt.position;float angle=acos(dot(normalize(direction),normalize(lgt.direction)));float dist=length(direction);direction/=dist;float decay=pow(max(0.0,1.0-dist/lgt.distance),2.0);float hasLight=step(angle,lgt.angle);float hasPenumbra=step(lgt.angle,angle)*step(angle,lgt.angle*(1.0+lgt.penumbra));float penumbra=hasPenumbra*(1.0-(angle-lgt.angle)/(lgt.angle*lgt.penumbra));float d=max(dot(N,-direction),0.0)*decay*(penumbra+hasLight);lightDiffuse+=lgt.color*d;vec3 halfDir=normalize(V-direction);float s=pow(clamp(dot(N,halfDir),0.0,1.0),u_shininess)*decay*(penumbra+hasLight);lightSpecular+=lgt.color*s;}\n#endif\ndiffuse*=vec4(lightDiffuse,1.0);specular*=vec4(lightSpecular,1.0);"; // eslint-disable-line

var mobile_lambert_frag = "#define GLSLIFY 1\nvec3 totalLight=vec3(0.0,0.0,0.0);\n#ifdef O3_DIRECT_LIGHT_COUNT\nfor(int i=0;i<O3_DIRECT_LIGHT_COUNT;i++){vec3 lightColor=u_directLightColor[i];lightColor*=max(dot(N,-u_directLightDirection[i]),0.0);totalLight+=lightColor;}\n#endif\ndiffuse*=vec4(totalLight,1.0);"; // eslint-disable-line

var noise_common = "#define GLSLIFY 1\nvec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}float mod289(float x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod7(vec4 x){return x-floor(x*(1.0/7.0))*7.0;}vec3 mod7(vec3 x){return x-floor(x*(1.0/7.0))*7.0;}vec4 permute(vec4 x){return mod289((34.0*x+1.0)*x);}vec3 permute(vec3 x){return mod289((34.0*x+1.0)*x);}float permute(float x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float taylorInvSqrt(float r){return 1.79284291400159-0.85373472095314*r;}vec4 fade(vec4 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}vec2 fade(vec2 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}\n#define K 0.142857142857\n#define Ko 0.428571428571\n#define K2 0.020408163265306\n#define Kd2 0.0714285714285\n#define Kz 0.166666666667\n#define Kzo 0.416666666667\n#define jitter 1.0\n#define jitter1 0.8\n"; // eslint-disable-line

var noise_cellular_2D = "#define GLSLIFY 1\nvec2 cellular(vec2 P){vec2 Pi=mod289(floor(P));vec2 Pf=fract(P);vec3 oi=vec3(-1.0,0.0,1.0);vec3 of=vec3(-0.5,0.5,1.5);vec3 px=permute(Pi.x+oi);vec3 p=permute(px.x+Pi.y+oi);vec3 ox=fract(p*K)-Ko;vec3 oy=mod7(floor(p*K))*K-Ko;vec3 dx=Pf.x+0.5+jitter*ox;vec3 dy=Pf.y-of+jitter*oy;vec3 d1=dx*dx+dy*dy;p=permute(px.y+Pi.y+oi);ox=fract(p*K)-Ko;oy=mod7(floor(p*K))*K-Ko;dx=Pf.x-0.5+jitter*ox;dy=Pf.y-of+jitter*oy;vec3 d2=dx*dx+dy*dy;p=permute(px.z+Pi.y+oi);ox=fract(p*K)-Ko;oy=mod7(floor(p*K))*K-Ko;dx=Pf.x-1.5+jitter*ox;dy=Pf.y-of+jitter*oy;vec3 d3=dx*dx+dy*dy;vec3 d1a=min(d1,d2);d2=max(d1,d2);d2=min(d2,d3);d1=min(d1a,d2);d2=max(d1a,d2);d1.xy=(d1.x<d1.y)? d1.xy : d1.yx;d1.xz=(d1.x<d1.z)? d1.xz : d1.zx;d1.yz=min(d1.yz,d2.yz);d1.y=min(d1.y,d1.z);d1.y=min(d1.y,d2.x);return sqrt(d1.xy);}"; // eslint-disable-line

var noise_cellular_2x2 = "#define GLSLIFY 1\nvec2 cellular2x2(vec2 P){vec2 Pi=mod289(floor(P));vec2 Pf=fract(P);vec4 Pfx=Pf.x+vec4(-0.5,-1.5,-0.5,-1.5);vec4 Pfy=Pf.y+vec4(-0.5,-0.5,-1.5,-1.5);vec4 p=permute(Pi.x+vec4(0.0,1.0,0.0,1.0));p=permute(p+Pi.y+vec4(0.0,0.0,1.0,1.0));vec4 ox=mod7(p)*K+Kd2;vec4 oy=mod7(floor(p*K))*K+Kd2;vec4 dx=Pfx+jitter1*ox;vec4 dy=Pfy+jitter1*oy;vec4 d=dx*dx+dy*dy;d.xy=(d.x<d.y)? d.xy : d.yx;d.xz=(d.x<d.z)? d.xz : d.zx;d.xw=(d.x<d.w)? d.xw : d.wx;d.y=min(d.y,d.z);d.y=min(d.y,d.w);return sqrt(d.xy);}"; // eslint-disable-line

var noise_cellular_2x2x2 = "#define GLSLIFY 1\nvec2 cellular2x2x2(vec3 P){vec3 Pi=mod289(floor(P));vec3 Pf=fract(P);vec4 Pfx=Pf.x+vec4(0.0,-1.0,0.0,-1.0);vec4 Pfy=Pf.y+vec4(0.0,0.0,-1.0,-1.0);vec4 p=permute(Pi.x+vec4(0.0,1.0,0.0,1.0));p=permute(p+Pi.y+vec4(0.0,0.0,1.0,1.0));vec4 p1=permute(p+Pi.z);vec4 p2=permute(p+Pi.z+vec4(1.0));vec4 ox1=fract(p1*K)-Ko;vec4 oy1=mod7(floor(p1*K))*K-Ko;vec4 oz1=floor(p1*K2)*Kz-Kzo;vec4 ox2=fract(p2*K)-Ko;vec4 oy2=mod7(floor(p2*K))*K-Ko;vec4 oz2=floor(p2*K2)*Kz-Kzo;vec4 dx1=Pfx+jitter1*ox1;vec4 dy1=Pfy+jitter1*oy1;vec4 dz1=Pf.z+jitter1*oz1;vec4 dx2=Pfx+jitter1*ox2;vec4 dy2=Pfy+jitter1*oy2;vec4 dz2=Pf.z-1.0+jitter1*oz2;vec4 d1=dx1*dx1+dy1*dy1+dz1*dz1;vec4 d2=dx2*dx2+dy2*dy2+dz2*dz2;vec4 d=min(d1,d2);d2=max(d1,d2);d.xy=(d.x<d.y)? d.xy : d.yx;d.xz=(d.x<d.z)? d.xz : d.zx;d.xw=(d.x<d.w)? d.xw : d.wx;d.yzw=min(d.yzw,d2.yzw);d.y=min(d.y,d.z);d.y=min(d.y,d.w);d.y=min(d.y,d2.x);return sqrt(d.xy);}"; // eslint-disable-line

var noise_cellular_3D = "#define GLSLIFY 1\nvec2 cellular(vec3 P){vec3 Pi=mod289(floor(P));vec3 Pf=fract(P)-0.5;vec3 Pfx=Pf.x+vec3(1.0,0.0,-1.0);vec3 Pfy=Pf.y+vec3(1.0,0.0,-1.0);vec3 Pfz=Pf.z+vec3(1.0,0.0,-1.0);vec3 p=permute(Pi.x+vec3(-1.0,0.0,1.0));vec3 p1=permute(p+Pi.y-1.0);vec3 p2=permute(p+Pi.y);vec3 p3=permute(p+Pi.y+1.0);vec3 p11=permute(p1+Pi.z-1.0);vec3 p12=permute(p1+Pi.z);vec3 p13=permute(p1+Pi.z+1.0);vec3 p21=permute(p2+Pi.z-1.0);vec3 p22=permute(p2+Pi.z);vec3 p23=permute(p2+Pi.z+1.0);vec3 p31=permute(p3+Pi.z-1.0);vec3 p32=permute(p3+Pi.z);vec3 p33=permute(p3+Pi.z+1.0);vec3 ox11=fract(p11*K)-Ko;vec3 oy11=mod7(floor(p11*K))*K-Ko;vec3 oz11=floor(p11*K2)*Kz-Kzo;vec3 ox12=fract(p12*K)-Ko;vec3 oy12=mod7(floor(p12*K))*K-Ko;vec3 oz12=floor(p12*K2)*Kz-Kzo;vec3 ox13=fract(p13*K)-Ko;vec3 oy13=mod7(floor(p13*K))*K-Ko;vec3 oz13=floor(p13*K2)*Kz-Kzo;vec3 ox21=fract(p21*K)-Ko;vec3 oy21=mod7(floor(p21*K))*K-Ko;vec3 oz21=floor(p21*K2)*Kz-Kzo;vec3 ox22=fract(p22*K)-Ko;vec3 oy22=mod7(floor(p22*K))*K-Ko;vec3 oz22=floor(p22*K2)*Kz-Kzo;vec3 ox23=fract(p23*K)-Ko;vec3 oy23=mod7(floor(p23*K))*K-Ko;vec3 oz23=floor(p23*K2)*Kz-Kzo;vec3 ox31=fract(p31*K)-Ko;vec3 oy31=mod7(floor(p31*K))*K-Ko;vec3 oz31=floor(p31*K2)*Kz-Kzo;vec3 ox32=fract(p32*K)-Ko;vec3 oy32=mod7(floor(p32*K))*K-Ko;vec3 oz32=floor(p32*K2)*Kz-Kzo;vec3 ox33=fract(p33*K)-Ko;vec3 oy33=mod7(floor(p33*K))*K-Ko;vec3 oz33=floor(p33*K2)*Kz-Kzo;vec3 dx11=Pfx+jitter*ox11;vec3 dy11=Pfy.x+jitter*oy11;vec3 dz11=Pfz.x+jitter*oz11;vec3 dx12=Pfx+jitter*ox12;vec3 dy12=Pfy.x+jitter*oy12;vec3 dz12=Pfz.y+jitter*oz12;vec3 dx13=Pfx+jitter*ox13;vec3 dy13=Pfy.x+jitter*oy13;vec3 dz13=Pfz.z+jitter*oz13;vec3 dx21=Pfx+jitter*ox21;vec3 dy21=Pfy.y+jitter*oy21;vec3 dz21=Pfz.x+jitter*oz21;vec3 dx22=Pfx+jitter*ox22;vec3 dy22=Pfy.y+jitter*oy22;vec3 dz22=Pfz.y+jitter*oz22;vec3 dx23=Pfx+jitter*ox23;vec3 dy23=Pfy.y+jitter*oy23;vec3 dz23=Pfz.z+jitter*oz23;vec3 dx31=Pfx+jitter*ox31;vec3 dy31=Pfy.z+jitter*oy31;vec3 dz31=Pfz.x+jitter*oz31;vec3 dx32=Pfx+jitter*ox32;vec3 dy32=Pfy.z+jitter*oy32;vec3 dz32=Pfz.y+jitter*oz32;vec3 dx33=Pfx+jitter*ox33;vec3 dy33=Pfy.z+jitter*oy33;vec3 dz33=Pfz.z+jitter*oz33;vec3 d11=dx11*dx11+dy11*dy11+dz11*dz11;vec3 d12=dx12*dx12+dy12*dy12+dz12*dz12;vec3 d13=dx13*dx13+dy13*dy13+dz13*dz13;vec3 d21=dx21*dx21+dy21*dy21+dz21*dz21;vec3 d22=dx22*dx22+dy22*dy22+dz22*dz22;vec3 d23=dx23*dx23+dy23*dy23+dz23*dz23;vec3 d31=dx31*dx31+dy31*dy31+dz31*dz31;vec3 d32=dx32*dx32+dy32*dy32+dz32*dz32;vec3 d33=dx33*dx33+dy33*dy33+dz33*dz33;vec3 d1a=min(d11,d12);d12=max(d11,d12);d11=min(d1a,d13);d13=max(d1a,d13);d12=min(d12,d13);vec3 d2a=min(d21,d22);d22=max(d21,d22);d21=min(d2a,d23);d23=max(d2a,d23);d22=min(d22,d23);vec3 d3a=min(d31,d32);d32=max(d31,d32);d31=min(d3a,d33);d33=max(d3a,d33);d32=min(d32,d33);vec3 da=min(d11,d21);d21=max(d11,d21);d11=min(da,d31);d31=max(da,d31);d11.xy=(d11.x<d11.y)? d11.xy : d11.yx;d11.xz=(d11.x<d11.z)? d11.xz : d11.zx;d12=min(d12,d21);d12=min(d12,d22);d12=min(d12,d31);d12=min(d12,d32);d11.yz=min(d11.yz,d12.xy);d11.y=min(d11.y,d12.z);d11.y=min(d11.y,d11.z);return sqrt(d11.xy);}"; // eslint-disable-line

var noise_cellular = "#define GLSLIFY 1\n#include <noise_cellular_2D>\n#include <noise_cellular_3D>\n#include <noise_cellular_2x2>\n#include <noise_cellular_2x2x2>\n"; // eslint-disable-line

var noise_perlin_2D = "#define GLSLIFY 1\nfloat perlin(vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod289(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=fade(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}float perlin(vec2 P,vec2 rep){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod(Pi,rep.xyxy);Pi=mod289(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=fade(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}"; // eslint-disable-line

var noise_perlin_3D = "#define GLSLIFY 1\nfloat perlin(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}float perlin(vec3 P,vec3 rep){vec3 Pi0=mod(floor(P),rep);vec3 Pi1=mod(Pi0+vec3(1.0),rep);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}"; // eslint-disable-line

var noise_perlin_4D = "#define GLSLIFY 1\nfloat perlin(vec4 P){vec4 Pi0=floor(P);vec4 Pi1=Pi0+1.0;Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec4 Pf0=fract(P);vec4 Pf1=Pf0-1.0;vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=vec4(Pi0.zzzz);vec4 iz1=vec4(Pi1.zzzz);vec4 iw0=vec4(Pi0.wwww);vec4 iw1=vec4(Pi1.wwww);vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 ixy00=permute(ixy0+iw0);vec4 ixy01=permute(ixy0+iw1);vec4 ixy10=permute(ixy1+iw0);vec4 ixy11=permute(ixy1+iw1);vec4 gx00=ixy00*(1.0/7.0);vec4 gy00=floor(gx00)*(1.0/7.0);vec4 gz00=floor(gy00)*(1.0/6.0);gx00=fract(gx00)-0.5;gy00=fract(gy00)-0.5;gz00=fract(gz00)-0.5;vec4 gw00=vec4(0.75)-abs(gx00)-abs(gy00)-abs(gz00);vec4 sw00=step(gw00,vec4(0.0));gx00-=sw00*(step(0.0,gx00)-0.5);gy00-=sw00*(step(0.0,gy00)-0.5);vec4 gx01=ixy01*(1.0/7.0);vec4 gy01=floor(gx01)*(1.0/7.0);vec4 gz01=floor(gy01)*(1.0/6.0);gx01=fract(gx01)-0.5;gy01=fract(gy01)-0.5;gz01=fract(gz01)-0.5;vec4 gw01=vec4(0.75)-abs(gx01)-abs(gy01)-abs(gz01);vec4 sw01=step(gw01,vec4(0.0));gx01-=sw01*(step(0.0,gx01)-0.5);gy01-=sw01*(step(0.0,gy01)-0.5);vec4 gx10=ixy10*(1.0/7.0);vec4 gy10=floor(gx10)*(1.0/7.0);vec4 gz10=floor(gy10)*(1.0/6.0);gx10=fract(gx10)-0.5;gy10=fract(gy10)-0.5;gz10=fract(gz10)-0.5;vec4 gw10=vec4(0.75)-abs(gx10)-abs(gy10)-abs(gz10);vec4 sw10=step(gw10,vec4(0.0));gx10-=sw10*(step(0.0,gx10)-0.5);gy10-=sw10*(step(0.0,gy10)-0.5);vec4 gx11=ixy11*(1.0/7.0);vec4 gy11=floor(gx11)*(1.0/7.0);vec4 gz11=floor(gy11)*(1.0/6.0);gx11=fract(gx11)-0.5;gy11=fract(gy11)-0.5;gz11=fract(gz11)-0.5;vec4 gw11=vec4(0.75)-abs(gx11)-abs(gy11)-abs(gz11);vec4 sw11=step(gw11,vec4(0.0));gx11-=sw11*(step(0.0,gx11)-0.5);gy11-=sw11*(step(0.0,gy11)-0.5);vec4 g0000=vec4(gx00.x,gy00.x,gz00.x,gw00.x);vec4 g1000=vec4(gx00.y,gy00.y,gz00.y,gw00.y);vec4 g0100=vec4(gx00.z,gy00.z,gz00.z,gw00.z);vec4 g1100=vec4(gx00.w,gy00.w,gz00.w,gw00.w);vec4 g0010=vec4(gx10.x,gy10.x,gz10.x,gw10.x);vec4 g1010=vec4(gx10.y,gy10.y,gz10.y,gw10.y);vec4 g0110=vec4(gx10.z,gy10.z,gz10.z,gw10.z);vec4 g1110=vec4(gx10.w,gy10.w,gz10.w,gw10.w);vec4 g0001=vec4(gx01.x,gy01.x,gz01.x,gw01.x);vec4 g1001=vec4(gx01.y,gy01.y,gz01.y,gw01.y);vec4 g0101=vec4(gx01.z,gy01.z,gz01.z,gw01.z);vec4 g1101=vec4(gx01.w,gy01.w,gz01.w,gw01.w);vec4 g0011=vec4(gx11.x,gy11.x,gz11.x,gw11.x);vec4 g1011=vec4(gx11.y,gy11.y,gz11.y,gw11.y);vec4 g0111=vec4(gx11.z,gy11.z,gz11.z,gw11.z);vec4 g1111=vec4(gx11.w,gy11.w,gz11.w,gw11.w);vec4 norm00=taylorInvSqrt(vec4(dot(g0000,g0000),dot(g0100,g0100),dot(g1000,g1000),dot(g1100,g1100)));g0000*=norm00.x;g0100*=norm00.y;g1000*=norm00.z;g1100*=norm00.w;vec4 norm01=taylorInvSqrt(vec4(dot(g0001,g0001),dot(g0101,g0101),dot(g1001,g1001),dot(g1101,g1101)));g0001*=norm01.x;g0101*=norm01.y;g1001*=norm01.z;g1101*=norm01.w;vec4 norm10=taylorInvSqrt(vec4(dot(g0010,g0010),dot(g0110,g0110),dot(g1010,g1010),dot(g1110,g1110)));g0010*=norm10.x;g0110*=norm10.y;g1010*=norm10.z;g1110*=norm10.w;vec4 norm11=taylorInvSqrt(vec4(dot(g0011,g0011),dot(g0111,g0111),dot(g1011,g1011),dot(g1111,g1111)));g0011*=norm11.x;g0111*=norm11.y;g1011*=norm11.z;g1111*=norm11.w;float n0000=dot(g0000,Pf0);float n1000=dot(g1000,vec4(Pf1.x,Pf0.yzw));float n0100=dot(g0100,vec4(Pf0.x,Pf1.y,Pf0.zw));float n1100=dot(g1100,vec4(Pf1.xy,Pf0.zw));float n0010=dot(g0010,vec4(Pf0.xy,Pf1.z,Pf0.w));float n1010=dot(g1010,vec4(Pf1.x,Pf0.y,Pf1.z,Pf0.w));float n0110=dot(g0110,vec4(Pf0.x,Pf1.yz,Pf0.w));float n1110=dot(g1110,vec4(Pf1.xyz,Pf0.w));float n0001=dot(g0001,vec4(Pf0.xyz,Pf1.w));float n1001=dot(g1001,vec4(Pf1.x,Pf0.yz,Pf1.w));float n0101=dot(g0101,vec4(Pf0.x,Pf1.y,Pf0.z,Pf1.w));float n1101=dot(g1101,vec4(Pf1.xy,Pf0.z,Pf1.w));float n0011=dot(g0011,vec4(Pf0.xy,Pf1.zw));float n1011=dot(g1011,vec4(Pf1.x,Pf0.y,Pf1.zw));float n0111=dot(g0111,vec4(Pf0.x,Pf1.yzw));float n1111=dot(g1111,Pf1);vec4 fade_xyzw=fade(Pf0);vec4 n_0w=mix(vec4(n0000,n1000,n0100,n1100),vec4(n0001,n1001,n0101,n1101),fade_xyzw.w);vec4 n_1w=mix(vec4(n0010,n1010,n0110,n1110),vec4(n0011,n1011,n0111,n1111),fade_xyzw.w);vec4 n_zw=mix(n_0w,n_1w,fade_xyzw.z);vec2 n_yzw=mix(n_zw.xy,n_zw.zw,fade_xyzw.y);float n_xyzw=mix(n_yzw.x,n_yzw.y,fade_xyzw.x);return 2.2*n_xyzw;}float perlin(vec4 P,vec4 rep){vec4 Pi0=mod(floor(P),rep);vec4 Pi1=mod(Pi0+1.0,rep);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec4 Pf0=fract(P);vec4 Pf1=Pf0-1.0;vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=vec4(Pi0.zzzz);vec4 iz1=vec4(Pi1.zzzz);vec4 iw0=vec4(Pi0.wwww);vec4 iw1=vec4(Pi1.wwww);vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 ixy00=permute(ixy0+iw0);vec4 ixy01=permute(ixy0+iw1);vec4 ixy10=permute(ixy1+iw0);vec4 ixy11=permute(ixy1+iw1);vec4 gx00=ixy00*(1.0/7.0);vec4 gy00=floor(gx00)*(1.0/7.0);vec4 gz00=floor(gy00)*(1.0/6.0);gx00=fract(gx00)-0.5;gy00=fract(gy00)-0.5;gz00=fract(gz00)-0.5;vec4 gw00=vec4(0.75)-abs(gx00)-abs(gy00)-abs(gz00);vec4 sw00=step(gw00,vec4(0.0));gx00-=sw00*(step(0.0,gx00)-0.5);gy00-=sw00*(step(0.0,gy00)-0.5);vec4 gx01=ixy01*(1.0/7.0);vec4 gy01=floor(gx01)*(1.0/7.0);vec4 gz01=floor(gy01)*(1.0/6.0);gx01=fract(gx01)-0.5;gy01=fract(gy01)-0.5;gz01=fract(gz01)-0.5;vec4 gw01=vec4(0.75)-abs(gx01)-abs(gy01)-abs(gz01);vec4 sw01=step(gw01,vec4(0.0));gx01-=sw01*(step(0.0,gx01)-0.5);gy01-=sw01*(step(0.0,gy01)-0.5);vec4 gx10=ixy10*(1.0/7.0);vec4 gy10=floor(gx10)*(1.0/7.0);vec4 gz10=floor(gy10)*(1.0/6.0);gx10=fract(gx10)-0.5;gy10=fract(gy10)-0.5;gz10=fract(gz10)-0.5;vec4 gw10=vec4(0.75)-abs(gx10)-abs(gy10)-abs(gz10);vec4 sw10=step(gw10,vec4(0.0));gx10-=sw10*(step(0.0,gx10)-0.5);gy10-=sw10*(step(0.0,gy10)-0.5);vec4 gx11=ixy11*(1.0/7.0);vec4 gy11=floor(gx11)*(1.0/7.0);vec4 gz11=floor(gy11)*(1.0/6.0);gx11=fract(gx11)-0.5;gy11=fract(gy11)-0.5;gz11=fract(gz11)-0.5;vec4 gw11=vec4(0.75)-abs(gx11)-abs(gy11)-abs(gz11);vec4 sw11=step(gw11,vec4(0.0));gx11-=sw11*(step(0.0,gx11)-0.5);gy11-=sw11*(step(0.0,gy11)-0.5);vec4 g0000=vec4(gx00.x,gy00.x,gz00.x,gw00.x);vec4 g1000=vec4(gx00.y,gy00.y,gz00.y,gw00.y);vec4 g0100=vec4(gx00.z,gy00.z,gz00.z,gw00.z);vec4 g1100=vec4(gx00.w,gy00.w,gz00.w,gw00.w);vec4 g0010=vec4(gx10.x,gy10.x,gz10.x,gw10.x);vec4 g1010=vec4(gx10.y,gy10.y,gz10.y,gw10.y);vec4 g0110=vec4(gx10.z,gy10.z,gz10.z,gw10.z);vec4 g1110=vec4(gx10.w,gy10.w,gz10.w,gw10.w);vec4 g0001=vec4(gx01.x,gy01.x,gz01.x,gw01.x);vec4 g1001=vec4(gx01.y,gy01.y,gz01.y,gw01.y);vec4 g0101=vec4(gx01.z,gy01.z,gz01.z,gw01.z);vec4 g1101=vec4(gx01.w,gy01.w,gz01.w,gw01.w);vec4 g0011=vec4(gx11.x,gy11.x,gz11.x,gw11.x);vec4 g1011=vec4(gx11.y,gy11.y,gz11.y,gw11.y);vec4 g0111=vec4(gx11.z,gy11.z,gz11.z,gw11.z);vec4 g1111=vec4(gx11.w,gy11.w,gz11.w,gw11.w);vec4 norm00=taylorInvSqrt(vec4(dot(g0000,g0000),dot(g0100,g0100),dot(g1000,g1000),dot(g1100,g1100)));g0000*=norm00.x;g0100*=norm00.y;g1000*=norm00.z;g1100*=norm00.w;vec4 norm01=taylorInvSqrt(vec4(dot(g0001,g0001),dot(g0101,g0101),dot(g1001,g1001),dot(g1101,g1101)));g0001*=norm01.x;g0101*=norm01.y;g1001*=norm01.z;g1101*=norm01.w;vec4 norm10=taylorInvSqrt(vec4(dot(g0010,g0010),dot(g0110,g0110),dot(g1010,g1010),dot(g1110,g1110)));g0010*=norm10.x;g0110*=norm10.y;g1010*=norm10.z;g1110*=norm10.w;vec4 norm11=taylorInvSqrt(vec4(dot(g0011,g0011),dot(g0111,g0111),dot(g1011,g1011),dot(g1111,g1111)));g0011*=norm11.x;g0111*=norm11.y;g1011*=norm11.z;g1111*=norm11.w;float n0000=dot(g0000,Pf0);float n1000=dot(g1000,vec4(Pf1.x,Pf0.yzw));float n0100=dot(g0100,vec4(Pf0.x,Pf1.y,Pf0.zw));float n1100=dot(g1100,vec4(Pf1.xy,Pf0.zw));float n0010=dot(g0010,vec4(Pf0.xy,Pf1.z,Pf0.w));float n1010=dot(g1010,vec4(Pf1.x,Pf0.y,Pf1.z,Pf0.w));float n0110=dot(g0110,vec4(Pf0.x,Pf1.yz,Pf0.w));float n1110=dot(g1110,vec4(Pf1.xyz,Pf0.w));float n0001=dot(g0001,vec4(Pf0.xyz,Pf1.w));float n1001=dot(g1001,vec4(Pf1.x,Pf0.yz,Pf1.w));float n0101=dot(g0101,vec4(Pf0.x,Pf1.y,Pf0.z,Pf1.w));float n1101=dot(g1101,vec4(Pf1.xy,Pf0.z,Pf1.w));float n0011=dot(g0011,vec4(Pf0.xy,Pf1.zw));float n1011=dot(g1011,vec4(Pf1.x,Pf0.y,Pf1.zw));float n0111=dot(g0111,vec4(Pf0.x,Pf1.yzw));float n1111=dot(g1111,Pf1);vec4 fade_xyzw=fade(Pf0);vec4 n_0w=mix(vec4(n0000,n1000,n0100,n1100),vec4(n0001,n1001,n0101,n1101),fade_xyzw.w);vec4 n_1w=mix(vec4(n0010,n1010,n0110,n1110),vec4(n0011,n1011,n0111,n1111),fade_xyzw.w);vec4 n_zw=mix(n_0w,n_1w,fade_xyzw.z);vec2 n_yzw=mix(n_zw.xy,n_zw.zw,fade_xyzw.y);float n_xyzw=mix(n_yzw.x,n_yzw.y,fade_xyzw.x);return 2.2*n_xyzw;}"; // eslint-disable-line

var noise_perlin = "#define GLSLIFY 1\n#include <noise_perlin_2D>\n#include <noise_perlin_3D>\n#include <noise_perlin_4D>\n"; // eslint-disable-line

var noise_psrd_2D = "#define GLSLIFY 1\nvec2 rgrad2(vec2 p,float rot){float u=permute(permute(p.x)+p.y)*0.0243902439+rot;u=fract(u)*6.28318530718;return vec2(cos(u),sin(u));}vec3 psrdnoise(vec2 pos,vec2 per,float rot){pos.y+=0.01;vec2 uv=vec2(pos.x+pos.y*0.5,pos.y);vec2 i0=floor(uv);vec2 f0=fract(uv);vec2 i1=(f0.x>f0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec2 p0=vec2(i0.x-i0.y*0.5,i0.y);vec2 p1=vec2(p0.x+i1.x-i1.y*0.5,p0.y+i1.y);vec2 p2=vec2(p0.x+0.5,p0.y+1.0);i1=i0+i1;vec2 i2=i0+vec2(1.0,1.0);vec2 d0=pos-p0;vec2 d1=pos-p1;vec2 d2=pos-p2;vec3 xw=mod(vec3(p0.x,p1.x,p2.x),per.x);vec3 yw=mod(vec3(p0.y,p1.y,p2.y),per.y);vec3 iuw=xw+0.5*yw;vec3 ivw=yw;vec2 g0=rgrad2(vec2(iuw.x,ivw.x),rot);vec2 g1=rgrad2(vec2(iuw.y,ivw.y),rot);vec2 g2=rgrad2(vec2(iuw.z,ivw.z),rot);vec3 w=vec3(dot(g0,d0),dot(g1,d1),dot(g2,d2));vec3 t=0.8-vec3(dot(d0,d0),dot(d1,d1),dot(d2,d2));vec3 dtdx=-2.0*vec3(d0.x,d1.x,d2.x);vec3 dtdy=-2.0*vec3(d0.y,d1.y,d2.y);if(t.x<0.0){dtdx.x=0.0;dtdy.x=0.0;t.x=0.0;}if(t.y<0.0){dtdx.y=0.0;dtdy.y=0.0;t.y=0.0;}if(t.z<0.0){dtdx.z=0.0;dtdy.z=0.0;t.z=0.0;}vec3 t2=t*t;vec3 t4=t2*t2;vec3 t3=t2*t;float n=dot(t4,w);vec2 dt0=vec2(dtdx.x,dtdy.x)*4.0*t3.x;vec2 dn0=t4.x*g0+dt0*w.x;vec2 dt1=vec2(dtdx.y,dtdy.y)*4.0*t3.y;vec2 dn1=t4.y*g1+dt1*w.y;vec2 dt2=vec2(dtdx.z,dtdy.z)*4.0*t3.z;vec2 dn2=t4.z*g2+dt2*w.z;return 11.0*vec3(n,dn0+dn1+dn2);}vec3 psdnoise(vec2 pos,vec2 per){return psrdnoise(pos,per,0.0);}float psrnoise(vec2 pos,vec2 per,float rot){pos.y+=0.001;vec2 uv=vec2(pos.x+pos.y*0.5,pos.y);vec2 i0=floor(uv);vec2 f0=fract(uv);vec2 i1=(f0.x>f0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec2 p0=vec2(i0.x-i0.y*0.5,i0.y);vec2 p1=vec2(p0.x+i1.x-i1.y*0.5,p0.y+i1.y);vec2 p2=vec2(p0.x+0.5,p0.y+1.0);i1=i0+i1;vec2 i2=i0+vec2(1.0,1.0);vec2 d0=pos-p0;vec2 d1=pos-p1;vec2 d2=pos-p2;vec3 xw=mod(vec3(p0.x,p1.x,p2.x),per.x);vec3 yw=mod(vec3(p0.y,p1.y,p2.y),per.y);vec3 iuw=xw+0.5*yw;vec3 ivw=yw;vec2 g0=rgrad2(vec2(iuw.x,ivw.x),rot);vec2 g1=rgrad2(vec2(iuw.y,ivw.y),rot);vec2 g2=rgrad2(vec2(iuw.z,ivw.z),rot);vec3 w=vec3(dot(g0,d0),dot(g1,d1),dot(g2,d2));vec3 t=0.8-vec3(dot(d0,d0),dot(d1,d1),dot(d2,d2));t=max(t,0.0);vec3 t2=t*t;vec3 t4=t2*t2;float n=dot(t4,w);return 11.0*n;}float psnoise(vec2 pos,vec2 per){return psrnoise(pos,per,0.0);}vec3 srdnoise(vec2 pos,float rot){pos.y+=0.001;vec2 uv=vec2(pos.x+pos.y*0.5,pos.y);vec2 i0=floor(uv);vec2 f0=fract(uv);vec2 i1=(f0.x>f0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec2 p0=vec2(i0.x-i0.y*0.5,i0.y);vec2 p1=vec2(p0.x+i1.x-i1.y*0.5,p0.y+i1.y);vec2 p2=vec2(p0.x+0.5,p0.y+1.0);i1=i0+i1;vec2 i2=i0+vec2(1.0,1.0);vec2 d0=pos-p0;vec2 d1=pos-p1;vec2 d2=pos-p2;vec3 x=vec3(p0.x,p1.x,p2.x);vec3 y=vec3(p0.y,p1.y,p2.y);vec3 iuw=x+0.5*y;vec3 ivw=y;iuw=mod289(iuw);ivw=mod289(ivw);vec2 g0=rgrad2(vec2(iuw.x,ivw.x),rot);vec2 g1=rgrad2(vec2(iuw.y,ivw.y),rot);vec2 g2=rgrad2(vec2(iuw.z,ivw.z),rot);vec3 w=vec3(dot(g0,d0),dot(g1,d1),dot(g2,d2));vec3 t=0.8-vec3(dot(d0,d0),dot(d1,d1),dot(d2,d2));vec3 dtdx=-2.0*vec3(d0.x,d1.x,d2.x);vec3 dtdy=-2.0*vec3(d0.y,d1.y,d2.y);if(t.x<0.0){dtdx.x=0.0;dtdy.x=0.0;t.x=0.0;}if(t.y<0.0){dtdx.y=0.0;dtdy.y=0.0;t.y=0.0;}if(t.z<0.0){dtdx.z=0.0;dtdy.z=0.0;t.z=0.0;}vec3 t2=t*t;vec3 t4=t2*t2;vec3 t3=t2*t;float n=dot(t4,w);vec2 dt0=vec2(dtdx.x,dtdy.x)*4.0*t3.x;vec2 dn0=t4.x*g0+dt0*w.x;vec2 dt1=vec2(dtdx.y,dtdy.y)*4.0*t3.y;vec2 dn1=t4.y*g1+dt1*w.y;vec2 dt2=vec2(dtdx.z,dtdy.z)*4.0*t3.z;vec2 dn2=t4.z*g2+dt2*w.z;return 11.0*vec3(n,dn0+dn1+dn2);}vec3 sdnoise(vec2 pos){return srdnoise(pos,0.0);}float srnoise(vec2 pos,float rot){pos.y+=0.001;vec2 uv=vec2(pos.x+pos.y*0.5,pos.y);vec2 i0=floor(uv);vec2 f0=fract(uv);vec2 i1=(f0.x>f0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec2 p0=vec2(i0.x-i0.y*0.5,i0.y);vec2 p1=vec2(p0.x+i1.x-i1.y*0.5,p0.y+i1.y);vec2 p2=vec2(p0.x+0.5,p0.y+1.0);i1=i0+i1;vec2 i2=i0+vec2(1.0,1.0);vec2 d0=pos-p0;vec2 d1=pos-p1;vec2 d2=pos-p2;vec3 x=vec3(p0.x,p1.x,p2.x);vec3 y=vec3(p0.y,p1.y,p2.y);vec3 iuw=x+0.5*y;vec3 ivw=y;iuw=mod289(iuw);ivw=mod289(ivw);vec2 g0=rgrad2(vec2(iuw.x,ivw.x),rot);vec2 g1=rgrad2(vec2(iuw.y,ivw.y),rot);vec2 g2=rgrad2(vec2(iuw.z,ivw.z),rot);vec3 w=vec3(dot(g0,d0),dot(g1,d1),dot(g2,d2));vec3 t=0.8-vec3(dot(d0,d0),dot(d1,d1),dot(d2,d2));t=max(t,0.0);vec3 t2=t*t;vec3 t4=t2*t2;float n=dot(t4,w);return 11.0*n;}float snoise(vec2 pos){return srnoise(pos,0.0);}"; // eslint-disable-line

var noise_simplex_2D = "#define GLSLIFY 1\nfloat simplex(vec2 v){const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.0*dot(m,g);}"; // eslint-disable-line

var noise_simplex_3D_grad = "#define GLSLIFY 1\nfloat simplex(vec3 v,out vec3 gradient){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);vec4 m2=m*m;vec4 m4=m2*m2;vec4 pdotx=vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3));vec4 temp=m2*m*pdotx;gradient=-8.0*(temp.x*x0+temp.y*x1+temp.z*x2+temp.w*x3);gradient+=m4.x*p0+m4.y*p1+m4.z*p2+m4.w*p3;gradient*=42.0;return 42.0*dot(m4,pdotx);}"; // eslint-disable-line

var noise_simplex_3D = "#define GLSLIFY 1\nfloat simplex(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}"; // eslint-disable-line

var noise_simplex_4D = "#define GLSLIFY 1\nvec4 grad4(float j,vec4 ip){const vec4 ones=vec4(1.0,1.0,1.0,-1.0);vec4 p,s;p.xyz=floor(fract(vec3(j)*ip.xyz)*7.0)*ip.z-1.0;p.w=1.5-dot(abs(p.xyz),ones.xyz);s=vec4(lessThan(p,vec4(0.0)));p.xyz=p.xyz+(s.xyz*2.0-1.0)*s.www;return p;}\n#define F4 0.309016994374947451\nfloat simplex(vec4 v){const vec4 C=vec4(0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);vec4 i=floor(v+dot(v,vec4(F4)));vec4 x0=v-i+dot(i,C.xxxx);vec4 i0;vec3 isX=step(x0.yzw,x0.xxx);vec3 isYZ=step(x0.zww,x0.yyz);i0.x=isX.x+isX.y+isX.z;i0.yzw=1.0-isX;i0.y+=isYZ.x+isYZ.y;i0.zw+=1.0-isYZ.xy;i0.z+=isYZ.z;i0.w+=1.0-isYZ.z;vec4 i3=clamp(i0,0.0,1.0);vec4 i2=clamp(i0-1.0,0.0,1.0);vec4 i1=clamp(i0-2.0,0.0,1.0);vec4 x1=x0-i1+C.xxxx;vec4 x2=x0-i2+C.yyyy;vec4 x3=x0-i3+C.zzzz;vec4 x4=x0+C.wwww;i=mod289(i);float j0=permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);vec4 j1=permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));vec4 ip=vec4(1.0/294.0,1.0/49.0,1.0/7.0,0.0);vec4 p0=grad4(j0,ip);vec4 p1=grad4(j1.x,ip);vec4 p2=grad4(j1.y,ip);vec4 p3=grad4(j1.z,ip);vec4 p4=grad4(j1.w,ip);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;p4*=taylorInvSqrt(dot(p4,p4));vec3 m0=max(0.6-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);vec2 m1=max(0.6-vec2(dot(x3,x3),dot(x4,x4)),0.0);m0=m0*m0;m1=m1*m1;return 49.0*(dot(m0*m0,vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2)))+dot(m1*m1,vec2(dot(p3,x3),dot(p4,x4))));}"; // eslint-disable-line

var noise_simplex = "#define GLSLIFY 1\n#include <noise_simplex_2D>\n#include <noise_simplex_3D>\n#include <noise_simplex_3D_grad>\n#include <noise_simplex_4D>\n"; // eslint-disable-line

var perturbation_share = "#define GLSLIFY 1\n#ifdef HAS_PERTURBATIONMAP\nuniform sampler2D u_perturbationSampler;uniform float u_perturbationUOffset;uniform float u_perturbationVOffset;\n#endif\n"; // eslint-disable-line

var perturbation_frag = "#define GLSLIFY 1\n#ifdef HAS_PERTURBATIONMAP\nvec2 getScreenUv(){return gl_FragCoord.xy/u_resolution;}vec4 screenColor=texture2D(u_perturbationSampler,getScreenUv()+normalize(u_viewMat*vec4(normal,1.)).xy*vec2(u_perturbationUOffset,u_perturbationVOffset));gl_FragColor=mix(screenColor,gl_FragColor,gl_FragColor.a);\n#endif\n"; // eslint-disable-line

var refraction_share = "#define GLSLIFY 1\n#ifdef HAS_REFRACTIONMAP\nuniform sampler2D u_refractionSampler;uniform mat4 u_PTMMatrix;uniform float u_refractionDepth;\n#endif\n"; // eslint-disable-line

var refraction_frag = "#define GLSLIFY 1\n#ifdef HAS_REFRACTIONMAP\nvec4 refractionColor=vec4(0.);vec3 refractDir=normalize(refract(-geometry.viewDir,geometry.normal,u_refractionRatio));vec3 newPos=v_pos+refractDir*u_refractionDepth;vec4 projectionPos=u_PTMMatrix*u_projMat*u_viewMat*vec4(newPos,1.0);vec2 projectionUv=projectionPos.xy/projectionPos.w;refractionColor=texture2D(u_refractionSampler,projectionUv);gl_FragColor=mix(refractionColor,gl_FragColor,gl_FragColor.a);\n#endif\n"; // eslint-disable-line

var clipPlane_vert_define = "#define GLSLIFY 1\n#ifdef O3_CLIPPLANE_NUM\nuniform vec4 u_clipPlanes[O3_CLIPPLANE_NUM];varying float v_clipDistances[O3_CLIPPLANE_NUM];\n#endif\n"; // eslint-disable-line

var clipPlane_vert = "#define GLSLIFY 1\n#ifdef O3_CLIPPLANE_NUM\nfor(int i=0;i<O3_CLIPPLANE_NUM;i++){v_clipDistances[i]=dot(vec4(v_pos,1.0),u_clipPlanes[i]);}\n#endif\n"; // eslint-disable-line

var clipPlane_frag_define = "#define GLSLIFY 1\n#ifdef O3_CLIPPLANE_NUM\nvarying float v_clipDistances[O3_CLIPPLANE_NUM];\n#endif\n"; // eslint-disable-line

var clipPlane_frag = "#define GLSLIFY 1\n#ifdef O3_CLIPPLANE_NUM\nfor(int i=0;i<O3_CLIPPLANE_NUM;i++){if(v_clipDistances[i]<0.0){discard;}}\n#endif\n"; // eslint-disable-line

var gamma_frag = "#define GLSLIFY 1\n#ifdef GAMMA\nfloat gamma=2.2;gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(1.0/gamma));\n#endif\n"; // eslint-disable-line

var pbr_common_frag_define = "#define GLSLIFY 1\n#ifndef EPSILON\n#define EPSILON 1e-6\n#endif\n#ifndef RECIPROCAL_PI\n#define RECIPROCAL_PI 0.31830988618\n#endif\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\n#define RE_Direct RE_Direct_Physical\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular RE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material ) GGXRoughnessToBlinnExponent( material.specularRoughness )\n"; // eslint-disable-line

var pbr_util_frag_define = "#define GLSLIFY 1\nvec4 SRGBtoLINEAR(vec4 srgbIn){\n#ifdef MANUAL_SRGB\n#ifdef SRGB_FAST_APPROXIMATION\nvec3 linOut=pow(srgbIn.xyz,vec3(2.2));\n#else\nvec3 bLess=step(vec3(0.04045),srgbIn.xyz);vec3 linOut=mix(srgbIn.xyz/vec3(12.92),pow((srgbIn.xyz+vec3(0.055))/vec3(1.055),vec3(2.4)),bLess);\n#endif\nreturn vec4(linOut,srgbIn.w);;\n#else\nreturn srgbIn;\n#endif\n}float pow2(const in float x){return x*x;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}float punctualLightIntensityToIrradianceFactor(const in float lightDistance,const in float cutoffDistance,const in float decayExponent){if(decayExponent>0.0){\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\nfloat distanceFalloff=1.0/max(pow(lightDistance,decayExponent),0.01);float maxDistanceCutoffFactor=pow2(saturate(1.0-pow4(lightDistance/cutoffDistance)));return distanceFalloff*maxDistanceCutoffFactor;\n#else\nreturn pow(saturate(-lightDistance/cutoffDistance+1.0),decayExponent);\n#endif\n}return 1.0;}vec3 BRDF_Diffuse_Lambert(const in vec3 diffuseColor){return RECIPROCAL_PI*diffuseColor;}float GGXRoughnessToBlinnExponent(const in float ggxRoughness){return(2.0/pow2(ggxRoughness+0.0001)-2.0);}float computeSpecularOcclusion(const in float dotNV,const in float ambientOcclusion,const in float roughness){return saturate(pow(dotNV+ambientOcclusion,exp2(-16.0*roughness-1.0))-1.0+ambientOcclusion);}float getLuminance(vec3 color){return dot(color,vec3(0.2126,0.7152,0.0722));}"; // eslint-disable-line

var pbr_envmap_light_frag_define = "#define GLSLIFY 1\n#ifdef O3_HAS_ENVMAP_LIGHT\nstruct EnvMapLight{vec3 diffuse;vec3 specular;float mipMapLevel;float diffuseIntensity;float specularIntensity;mat4 transformMatrix;};uniform EnvMapLight u_envMapLight;\n#ifdef O3_USE_DIFFUSE_ENV\nuniform samplerCube u_env_diffuseSampler;\n#endif\n#ifdef O3_USE_SPECULAR_ENV\nuniform samplerCube u_env_specularSampler;\n#endif\n#endif\n"; // eslint-disable-line

var pbr_base_frag_define = "#define GLSLIFY 1\nuniform float u_alphaCutoff;uniform vec4 u_baseColorFactor;uniform float u_metal;uniform float u_roughness;uniform vec3 u_specularFactor;uniform float u_glossinessFactor;uniform float u_envMapIntensity;uniform float u_refractionRatio;uniform vec2 u_resolution;uniform float u_normalScale;uniform float u_occlusionStrength;"; // eslint-disable-line

var pbr_texture_frag_define = "#define GLSLIFY 1\n#ifdef HAS_BASECOLORMAP\nuniform sampler2D u_baseColorSampler;\n#endif\n#ifdef O3_HAS_NORMALMAP\nuniform sampler2D u_normalSampler;\n#endif\n#ifdef HAS_EMISSIVEMAP\nuniform sampler2D u_emissiveSampler;uniform vec3 u_emissiveFactor;\n#endif\n#ifdef HAS_METALMAP\nuniform sampler2D u_metallicSampler;\n#endif\n#ifdef HAS_ROUGHNESSMAP\nuniform sampler2D u_roughnessSampler;\n#endif\n#ifdef HAS_METALROUGHNESSMAP\nuniform sampler2D u_metallicRoughnessSampler;\n#endif\n#ifdef HAS_SPECULARGLOSSINESSMAP\nuniform sampler2D u_specularGlossinessSampler;\n#endif\n#ifdef HAS_OCCLUSIONMAP\nuniform sampler2D u_occlusionSampler;\n#endif\n#ifdef HAS_OPACITYMAP\nuniform sampler2D u_opacitySampler;\n#endif\n#ifdef HAS_REFLECTIONMAP\nuniform samplerCube u_reflectionSampler;\n#endif\n"; // eslint-disable-line

var pbr_runtime_frag_define = "#define GLSLIFY 1\nstruct IncidentLight{vec3 color;vec3 direction;bool visible;};struct ReflectedLight{vec3 directDiffuse;vec3 directSpecular;vec3 indirectDiffuse;vec3 indirectSpecular;};struct GeometricContext{vec3 position;vec3 normal;vec3 viewDir;};struct PhysicalMaterial{vec3 diffuseColor;float specularRoughness;vec3 specularColor;};"; // eslint-disable-line

var pbr_normal_frag_define = "#define GLSLIFY 1\nvec3 getNormal(){\n#ifdef O3_HAS_NORMALMAP\n#ifndef O3_HAS_TANGENT\n#ifdef HAS_DERIVATIVES\nvec3 pos_dx=dFdx(v_pos);vec3 pos_dy=dFdy(v_pos);vec3 tex_dx=dFdx(vec3(v_uv,0.0));vec3 tex_dy=dFdy(vec3(v_uv,0.0));vec3 t=(tex_dy.t*pos_dx-tex_dx.t*pos_dy)/(tex_dx.s*tex_dy.t-tex_dy.s*tex_dx.t);\n#ifdef O3_HAS_NORMAL\nvec3 ng=normalize(v_normal);\n#else\nvec3 ng=normalize(cross(pos_dx,pos_dy));\n#endif\nt=normalize(t-ng*dot(ng,t));vec3 b=normalize(cross(ng,t));mat3 tbn=mat3(t,b,ng);\n#else\n#ifdef O3_HAS_NORMAL\nvec3 ng=normalize(v_normal);\n#else\nvec3 ng=vec3(0.0,0.0,1.0);\n#endif\nmat3 tbn=mat3(vec3(0.0),vec3(0.0),ng);\n#endif\n#else\nmat3 tbn=v_TBN;\n#endif\nvec3 n=texture2D(u_normalSampler,v_uv).rgb;n=normalize(tbn*((2.0*n-1.0)*vec3(u_normalScale,u_normalScale,1.0)));\n#else\n#ifdef O3_HAS_NORMAL\nvec3 n=normalize(v_normal);\n#elif defined(HAS_DERIVATIVES)\nvec3 pos_dx=dFdx(v_pos);vec3 pos_dy=dFdy(v_pos);vec3 n=normalize(cross(pos_dx,pos_dy));\n#else\nvec3 n=vec3(0.0,0.0,1.0);\n#endif\n#endif\nn*=float(gl_FrontFacing)*2.0-1.0;return n;}"; // eslint-disable-line

var pbr_brdf_cook_torrance_frag_define = "#define GLSLIFY 1\nvec3 F_Schlick(const in vec3 specularColor,const in float dotLH){float fresnel=exp2((-5.55473*dotLH-6.98316)*dotLH);return(1.0-specularColor)*fresnel+specularColor;}float G_GGX_SmithCorrelated(const in float alpha,const in float dotNL,const in float dotNV){float a2=pow2(alpha);float gv=dotNL*sqrt(a2+(1.0-a2)*pow2(dotNV));float gl=dotNV*sqrt(a2+(1.0-a2)*pow2(dotNL));return 0.5/max(gv+gl,EPSILON);}float D_GGX(const in float alpha,const in float dotNH){float a2=pow2(alpha);float denom=pow2(dotNH)*(a2-1.0)+1.0;return RECIPROCAL_PI*a2/pow2(denom);}vec3 BRDF_Specular_GGX(const in IncidentLight incidentLight,const in GeometricContext geometry,const in vec3 specularColor,const in float roughness){float alpha=pow2(roughness);vec3 halfDir=normalize(incidentLight.direction+geometry.viewDir);float dotNL=saturate(dot(geometry.normal,incidentLight.direction));float dotNV=saturate(dot(geometry.normal,geometry.viewDir));float dotNH=saturate(dot(geometry.normal,halfDir));float dotLH=saturate(dot(incidentLight.direction,halfDir));vec3 F=F_Schlick(specularColor,dotLH);float G=G_GGX_SmithCorrelated(alpha,dotNL,dotNV);float D=D_GGX(alpha,dotNH);return F*(G*D);}"; // eslint-disable-line

var pbr_direct_irradiance_frag_define = "#define GLSLIFY 1\nvoid RE_Direct_Physical(const in IncidentLight directLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;\n#ifndef PHYSICALLY_CORRECT_LIGHTS\nirradiance*=PI;\n#endif\nreflectedLight.directSpecular+=irradiance*BRDF_Specular_GGX(directLight,geometry,material.specularColor,material.specularRoughness);reflectedLight.directDiffuse+=irradiance*BRDF_Diffuse_Lambert(material.diffuseColor);}\n#ifdef O3_DIRECT_LIGHT_COUNT\nvoid getDirectionalDirectLightIrradiance(const in DirectLight directionalLight,const in GeometricContext geometry,out IncidentLight directLight){directLight.color=directionalLight.color;directLight.direction=-directionalLight.direction;directLight.visible=true;}\n#endif\n#ifdef O3_POINT_LIGHT_COUNT\nvoid getPointDirectLightIrradiance(const in PointLight pointLight,const in GeometricContext geometry,out IncidentLight directLight){vec3 lVector=pointLight.position-geometry.position;directLight.direction=normalize(lVector);float lightDistance=length(lVector);directLight.color=pointLight.color;directLight.color*=punctualLightIntensityToIrradianceFactor(lightDistance,pointLight.distance,pointLight.decay);directLight.visible=(directLight.color!=vec3(0.0));}\n#endif\n#ifdef O3_SPOT_LIGHT_COUNT\nvoid getSpotDirectLightIrradiance(const in SpotLight spotLight,const in GeometricContext geometry,out IncidentLight directLight){vec3 lVector=spotLight.position-geometry.position;directLight.direction=normalize(lVector);float lightDistance=length(lVector);float angleCos=dot(directLight.direction,-spotLight.direction);if(angleCos>spotLight.coneCos){float spotEffect=smoothstep(spotLight.coneCos,spotLight.penumbraCos,angleCos);directLight.color=spotLight.color;directLight.color*=spotEffect*punctualLightIntensityToIrradianceFactor(lightDistance,spotLight.distance,spotLight.decay);directLight.visible=true;}else{directLight.color=vec3(0.0);directLight.visible=false;}}\n#endif\n"; // eslint-disable-line

var pbr_ibl_specular_frag_define = "#define GLSLIFY 1\nvec3 BRDF_Specular_GGX_Environment(const in GeometricContext geometry,const in vec3 specularColor,const in float roughness){float dotNV=saturate(dot(geometry.normal,geometry.viewDir));const vec4 c0=vec4(-1,-0.0275,-0.572,0.022);const vec4 c1=vec4(1,0.0425,1.04,-0.04);vec4 r=roughness*c0+c1;float a004=min(r.x*r.x,exp2(-9.28*dotNV))*r.x+r.y;vec2 AB=vec2(-1.04,1.04)*a004+r.zw;return specularColor*AB.x+AB.y;}float getSpecularMIPLevel(const in float blinnShininessExponent,const in int maxMIPLevel){float maxMIPLevelScalar=float(maxMIPLevel);float desiredMIPLevel=maxMIPLevelScalar+0.79248-0.5*log2(pow2(blinnShininessExponent)+1.0);return clamp(desiredMIPLevel,0.0,maxMIPLevelScalar);}\n#ifdef O3_HAS_ENVMAP_LIGHT\nvec3 getLightProbeIndirectRadiance(const in GeometricContext geometry,const in float blinnShininessExponent,const in int maxMIPLevel){\n#if !defined(O3_USE_SPECULAR_ENV) && !defined(HAS_REFLECTIONMAP)\nreturn u_envMapLight.specular*u_envMapLight.specularIntensity*u_envMapIntensity;\n#else\n#ifdef ENVMAPMODE_REFRACT\nvec3 reflectVec=refract(-geometry.viewDir,geometry.normal,u_refractionRatio);\n#else\nvec3 reflectVec=reflect(-geometry.viewDir,geometry.normal);\n#endif\nreflectVec=mat3(u_envMapLight.transformMatrix)*reflectVec;float specularMIPLevel=getSpecularMIPLevel(blinnShininessExponent,maxMIPLevel);\n#ifdef HAS_TEX_LOD\n#ifdef HAS_REFLECTIONMAP\nvec4 envMapColor=textureCubeLodEXT(u_reflectionSampler,reflectVec,specularMIPLevel);\n#else\nvec4 envMapColor=textureCubeLodEXT(u_env_specularSampler,reflectVec,specularMIPLevel);\n#endif\n#else\n#ifdef HAS_REFLECTIONMAP\nvec4 envMapColor=textureCube(u_reflectionSampler,reflectVec,specularMIPLevel);\n#else\nvec4 envMapColor=textureCube(u_env_specularSampler,reflectVec,specularMIPLevel);\n#endif\n#endif\nenvMapColor.rgb=SRGBtoLINEAR(envMapColor*u_envMapLight.specularIntensity*u_envMapIntensity).rgb;return envMapColor.rgb;\n#endif\n}\n#endif\nvoid RE_IndirectSpecular_Physical(const in vec3 radiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){float dotNV=saturate(dot(geometry.normal,geometry.viewDir));float dotNL=dotNV;reflectedLight.indirectSpecular+=radiance*BRDF_Specular_GGX_Environment(geometry,material.specularColor,material.specularRoughness);}"; // eslint-disable-line

var pbr_ibl_diffuse_frag_define = "#define GLSLIFY 1\nvoid RE_IndirectDiffuse_Physical(const in vec3 irradiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Diffuse_Lambert(material.diffuseColor);}\n#ifdef O3_HAS_AMBIENT_LIGHT\nvec3 getAmbientLightIrradiance(const in vec3 ambientLightColor){vec3 irradiance=ambientLightColor;\n#ifndef PHYSICALLY_CORRECT_LIGHTS\nirradiance*=PI;\n#endif\nreturn irradiance;}\n#endif\n"; // eslint-disable-line

var pbr_begin_frag = "#define GLSLIFY 1\nvec3 normal=getNormal();vec4 diffuseColor=u_baseColorFactor;vec3 totalEmissiveRadiance=vec3(0.0);float metalnessFactor=u_metal;float roughnessFactor=u_roughness;vec3 specularFactor=u_specularFactor;float glossinessFactor=u_glossinessFactor;ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));PhysicalMaterial material;GeometricContext geometry;IncidentLight directLight;\n#ifdef HAS_BASECOLORMAP\nvec4 baseMapColor=texture2D(u_baseColorSampler,v_uv);baseMapColor=SRGBtoLINEAR(baseMapColor);diffuseColor*=baseMapColor;\n#endif\n#ifdef O3_HAS_VERTEXCOLOR\ndiffuseColor.rgb*=v_color.rgb;\n#ifdef O3_HAS_VERTEXALPHA\ndiffuseColor.a*=v_color.a;\n#endif\n#endif\n#ifdef ALPHA_CUTOFF\nif(diffuseColor.a<u_alphaCutoff){discard;}\n#endif\n#if defined(ALPHA_BLEND) && defined(HAS_OPACITYMAP)\n#ifdef GETOPACITYFROMRGB\ndiffuseColor.a*=getLuminance(texture2D(u_opacitySampler,v_uv).rgb);\n#else\ndiffuseColor.a*=texture2D(u_opacitySampler,v_uv).a;\n#endif\n#endif\n#ifdef HAS_METALROUGHNESSMAP\nvec4 metalRoughMapColor=texture2D(u_metallicRoughnessSampler,v_uv);metalnessFactor*=metalRoughMapColor.b;roughnessFactor*=metalRoughMapColor.g;\n#else\n#ifdef HAS_METALMAP\nvec4 metalMapColor=texture2D(u_metallicSampler,v_uv);metalnessFactor*=metalMapColor.b;\n#endif\n#ifdef HAS_ROUGHNESSMAP\nvec4 roughMapColor=texture2D(u_roughnessSampler,v_uv);roughnessFactor*=roughMapColor.g;\n#endif\n#endif\n#ifdef HAS_SPECULARGLOSSINESSMAP\nvec4 specularGlossinessColor=texture2D(u_specularGlossinessSampler,v_uv);specularFactor*=specularGlossinessColor.rgb;glossinessFactor*=specularGlossinessColor.a;\n#endif\n#ifdef IS_METALLIC_WORKFLOW\nmaterial.diffuseColor=diffuseColor.rgb*(1.0-metalnessFactor);material.specularRoughness=clamp(roughnessFactor,0.04,1.0);material.specularColor=mix(vec3(MAXIMUM_SPECULAR_COEFFICIENT),diffuseColor.rgb,metalnessFactor);\n#else\nfloat specularStrength=max(max(specularFactor.r,specularFactor.g),specularFactor.b);material.diffuseColor=diffuseColor.rgb*(1.0-specularStrength);material.specularRoughness=clamp(1.0-glossinessFactor,0.04,1.0);material.specularColor=specularFactor;\n#endif\ngeometry.position=v_pos;geometry.normal=normal;geometry.viewDir=normalize(u_cameraPos-v_pos);"; // eslint-disable-line

var pbr_direct_irradiance_frag = "#define GLSLIFY 1\n#if defined( O3_DIRECT_LIGHT_COUNT ) && defined( RE_Direct )\nDirectLight directionalLight;for(int i=0;i<O3_DIRECT_LIGHT_COUNT;i++){directionalLight.color=u_directLightColor[i];directionalLight.direction=u_directLightDirection[i];getDirectionalDirectLightIrradiance(directionalLight,geometry,directLight);RE_Direct(directLight,geometry,material,reflectedLight);}\n#endif\n#if defined( O3_POINT_LIGHT_COUNT ) && defined( RE_Direct )\nPointLight pointLight;for(int i=0;i<O3_POINT_LIGHT_COUNT;i++){pointLight.color=u_pointLightColor[i];pointLight.position=u_pointLightPosition[i];pointLight.distance=u_pointLightDistance[i];pointLight.decay=u_pointLightDecay[i];getPointDirectLightIrradiance(pointLight,geometry,directLight);RE_Direct(directLight,geometry,material,reflectedLight);}\n#endif\n#if defined( O3_SPOT_LIGHT_COUNT ) && defined( RE_Direct )\nSpotLight spotLight;for(int i=0;i<O3_SPOT_LIGHT_COUNT;i++){spotLight.color=u_spotLightColor[i];spotLight.position=u_spotLightPosition[i];spotLight.direction=u_spotLightDirection[i];spotLight.distance=u_spotLightDistance[i];spotLight.decay=u_spotLightDecay[i];spotLight.angle=u_spotLightAngle[i];spotLight.penumbra=u_spotLightPenumbra[i];spotLight.penumbraCos=u_spotLightPenumbraCos[i];spotLight.coneCos=u_spotLightConeCos[i];getSpotDirectLightIrradiance(spotLight,geometry,directLight);RE_Direct(directLight,geometry,material,reflectedLight);}\n#endif\n"; // eslint-disable-line

var pbr_ibl_diffuse_frag = "#define GLSLIFY 1\n#if defined(RE_IndirectDiffuse)\nvec3 irradiance=vec3(0);\n#if defined(O3_HAS_AMBIENT_LIGHT)\nirradiance+=getAmbientLightIrradiance(u_ambientLightColor);\n#endif\n#if defined(O3_HAS_ENVMAP_LIGHT)\n#ifdef O3_USE_DIFFUSE_ENV\nvec3 lightMapIrradiance=textureCube(u_env_diffuseSampler,geometry.normal).rgb*u_envMapLight.diffuseIntensity;\n#else\nvec3 lightMapIrradiance=u_envMapLight.diffuse*u_envMapLight.diffuseIntensity;\n#endif\n#ifndef PHYSICALLY_CORRECT_LIGHTS\nlightMapIrradiance*=PI;\n#endif\nirradiance+=lightMapIrradiance;\n#endif\nRE_IndirectDiffuse(irradiance,geometry,material,reflectedLight);\n#endif\n"; // eslint-disable-line

var pbr_ibl_specular_frag = "#define GLSLIFY 1\n#if defined( RE_IndirectSpecular )\nvec3 radiance=vec3(0.0);\n#endif\n#if defined( O3_HAS_ENVMAP_LIGHT ) && defined( RE_IndirectSpecular )\nradiance+=getLightProbeIndirectRadiance(geometry,Material_BlinnShininessExponent(material),int(u_envMapLight.mipMapLevel));\n#endif\n#if defined( RE_IndirectSpecular )\nRE_IndirectSpecular(radiance,geometry,material,reflectedLight);\n#endif\n"; // eslint-disable-line

var pbr_end_frag = "#define GLSLIFY 1\n#ifdef HAS_OCCLUSIONMAP\nfloat ambientOcclusion=(texture2D(u_occlusionSampler,v_uv).r-1.0)*u_occlusionStrength+1.0;reflectedLight.indirectDiffuse*=ambientOcclusion;\n#if defined(O3_USE_SPECULAR_ENV)\nfloat dotNV=saturate(dot(geometry.normal,geometry.viewDir));reflectedLight.indirectSpecular*=computeSpecularOcclusion(dotNV,ambientOcclusion,material.specularRoughness);\n#endif\n#endif\n#ifdef HAS_EMISSIVEMAP\nvec4 emissiveMapColor=texture2D(u_emissiveSampler,v_uv);emissiveMapColor=SRGBtoLINEAR(emissiveMapColor);totalEmissiveRadiance+=u_emissiveFactor*emissiveMapColor.rgb;\n#endif\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular+totalEmissiveRadiance;gl_FragColor=vec4(outgoingLight,diffuseColor.a);"; // eslint-disable-line

var PBRShaderLib = {
  pbr_common_frag_define: pbr_common_frag_define,
  pbr_util_frag_define: pbr_util_frag_define,
  pbr_envmap_light_frag_define: pbr_envmap_light_frag_define,
  pbr_base_frag_define: pbr_base_frag_define,
  pbr_texture_frag_define: pbr_texture_frag_define,
  pbr_runtime_frag_define: pbr_runtime_frag_define,
  pbr_normal_frag_define: pbr_normal_frag_define,
  pbr_brdf_cook_torrance_frag_define: pbr_brdf_cook_torrance_frag_define,
  pbr_direct_irradiance_frag_define: pbr_direct_irradiance_frag_define,
  pbr_ibl_specular_frag_define: pbr_ibl_specular_frag_define,
  pbr_ibl_diffuse_frag_define: pbr_ibl_diffuse_frag_define,
  pbr_begin_frag: pbr_begin_frag,
  pbr_direct_irradiance_frag: pbr_direct_irradiance_frag,
  pbr_ibl_diffuse_frag: pbr_ibl_diffuse_frag,
  pbr_ibl_specular_frag: pbr_ibl_specular_frag,
  pbr_end_frag: pbr_end_frag
};

var oit_frag = "#define GLSLIFY 1\n#if defined(ALPHA_BLEND) && defined(OIT_ENABLE)\nif(gl_FragCoord.z>texture2D(u_depthSampler,gl_FragCoord.xy/u_resolution).r){discard;}vec4 oitColor=gl_FragColor;gl_FragData[0]=vec4(oitColor.rgb*oitColor.a,oitColor.a);gl_FragData[1]=vec4(1)/255.0;\n#endif\n"; // eslint-disable-line

var oit_frag_define = "#define GLSLIFY 1\n#if defined(ALPHA_BLEND) && defined(OIT_ENABLE)\nuniform sampler2D u_depthSampler;float weight(float z,float a){return a*clamp(3e3*pow(1.0-z,3.0),1e-2,3e3);}\n#endif\n"; // eslint-disable-line

var ShaderLib = _objectSpread2({
  common: common,
  common_vert: common_vert,
  common_frag: common_frag,
  color_share: color_share,
  normal_share: normal_share,
  uv_share: uv_share,
  worldpos_share: worldpos_share,
  shadow_share: shadow_share,
  fog_share: fog_share,
  begin_normal_vert: begin_normal_vert,
  begin_position_vert: begin_position_vert,
  morph_target_vert: morph_target_vert,
  position_vert: position_vert,
  color_vert: color_vert,
  normal_vert: normal_vert,
  skinning_vert: skinning_vert,
  uv_vert: uv_vert,
  worldpos_vert: worldpos_vert,
  shadow_vert: shadow_vert,
  morph_vert: morph_vert,
  fog_vert: fog_vert,
  ambient_light_frag: ambient_light_frag,
  direct_light_frag: direct_light_frag,
  point_light_frag: point_light_frag,
  spot_light_frag: spot_light_frag,
  mobile_material_frag: mobile_material_frag,
  fog_frag: fog_frag,
  begin_mobile_frag: begin_mobile_frag,
  begin_normal_frag: begin_normal_frag,
  begin_viewdir_frag: begin_viewdir_frag,
  mobile_blinnphong_frag: mobile_blinnphong_frag,
  mobile_lambert_frag: mobile_lambert_frag,
  noise_common: noise_common,
  noise_cellular_2D: noise_cellular_2D,
  noise_cellular_2x2: noise_cellular_2x2,
  noise_cellular_2x2x2: noise_cellular_2x2x2,
  noise_cellular_3D: noise_cellular_3D,
  noise_cellular: noise_cellular,
  noise_perlin_2D: noise_perlin_2D,
  noise_perlin_3D: noise_perlin_3D,
  noise_perlin_4D: noise_perlin_4D,
  noise_perlin: noise_perlin,
  noise_psrd_2D: noise_psrd_2D,
  noise_simplex_2D: noise_simplex_2D,
  noise_simplex_3D_grad: noise_simplex_3D_grad,
  noise_simplex_3D: noise_simplex_3D,
  noise_simplex_4D: noise_simplex_4D,
  noise_simplex: noise_simplex,
  perturbation_share: perturbation_share,
  perturbation_frag: perturbation_frag,
  refraction_share: refraction_share,
  refraction_frag: refraction_frag,
  clipPlane_vert_define: clipPlane_vert_define,
  clipPlane_vert: clipPlane_vert,
  clipPlane_frag_define: clipPlane_frag_define,
  clipPlane_frag: clipPlane_frag,
  gamma_frag: gamma_frag,
  oit_frag: oit_frag,
  oit_frag_define: oit_frag_define
}, PBRShaderLib);
function InjectShaderSlices(obj) {
  _extends(ShaderLib, obj);
}

var ShaderFactory = /*#__PURE__*/function () {
  function ShaderFactory() {}

  /**
   * GLSL version.
   * @param {string} version - "100" | "300 es"
   * */
  ShaderFactory.parseVersion = function parseVersion(version) {
    if (version === void 0) {
      version = "100";
    }

    return "#version " + version + "\n";
  };

  ShaderFactory.parsePrecision = function parsePrecision(vertP, fragP, compileVert) {
    var downgrade = "mediump";
    return "\n        #ifdef GL_FRAGMENT_PRECISION_HIGH\n          precision " + (compileVert ? vertP : fragP) + " float;\n          precision " + (compileVert ? vertP : fragP) + " int;\n\n          #define O3_VERTEX_PRECISION " + vertP + "\n          #define O3_FRAGMENT_PRECISION " + fragP + "\n        #else\n          precision " + downgrade + " float;\n          precision " + downgrade + " int;\n\n          #define O3_VERTEX_PRECISION " + downgrade + "\n          #define O3_FRAGMENT_PRECISION " + downgrade + "\n        #endif\n      ";
  };

  ShaderFactory.parseShaderName = function parseShaderName(name) {
    return "#define O3_SHADER_NAME " + name + "\n";
  };

  ShaderFactory.parseAttributeMacros = function parseAttributeMacros(macros) {
    return "#define O3_ATTRIBUTE_MACROS_START\n" + macros.map(function (m) {
      return "#define " + m + "\n";
    }).join("") + "#define O3_ATTRIBUTE_MACROS_END\n";
  };

  ShaderFactory.parseCustomMacros = function parseCustomMacros(macros) {
    return "#define O3_CUSTOM_MACROS_START\n" + macros.map(function (m) {
      return "#define " + m + "\n";
    }).join("") + "#define O3_CUSTOM_MACROS_END\n";
  };

  ShaderFactory.parseShader = function parseShader(src) {
    return ShaderFactory.parseIncludes(src);
  };

  ShaderFactory.parseIncludes = function parseIncludes(src) {
    var regex = /^[ \t]*#include +<([\w\d.]+)>/gm;

    function replace(match, slice) {
      var replace = ShaderLib[slice];

      if (replace === undefined) {
        Logger.error("Shader slice \"" + match.trim() + "\" not founded.");
        return "";
      }

      return ShaderFactory.parseIncludes(replace);
    }

    return src.replace(regex, replace);
  };

  ShaderFactory.InjectShaderSlices = function InjectShaderSlices$1(slices) {
    InjectShaderSlices(slices);
  }
  /**
   * GLSL extension.
   * @param {string[]} extensions - such as ["GL_EXT_shader_texture_lod"]
   * */
  ;

  ShaderFactory.parseExtension = function parseExtension(extensions) {
    return "#define O3_EXTENSION_START\n" + extensions.map(function (e) {
      return "#extension " + e + " : enable\n";
    }).join("") + "#define O3_EXTENSION_END\n";
  }
  /**
   * Convert lower GLSL version to GLSL 300 es.
   * @param shader - code
   * @param isFrag - Whether it is a fragment shader.
   * */
  ;

  ShaderFactory.convertTo300 = function convertTo300(shader, isFrag) {
    /** replace attribute and in */
    shader = shader.replace(/\battribute\b/g, "in");
    shader = shader.replace(/\bvarying\b/g, isFrag ? "in" : "out");
    /** replace api */

    shader = shader.replace(/\btexture(2D|Cube)\s*\(/g, "texture(");
    shader = shader.replace(/\btexture(2D|Cube)LodEXT\s*\(/g, "textureLod(");

    if (isFrag) {
      var isMRT = /\bgl_FragData\[.+?\]/g.test(shader);

      if (isMRT) {
        shader = shader.replace(/\bgl_FragColor\b/g, "gl_FragData[0]");
        var result = shader.match(/\bgl_FragData\[.+?\]/g);
        shader = this.replaceMRTShader(shader, result);
      } else {
        shader = shader.replace(/void\s+?main\s*\(/g, "out vec4 glFragColor;\nvoid main(");
        shader = shader.replace(/\bgl_FragColor\b/g, "glFragColor");
      }
    }

    return shader;
  }
  /**
   * Returns the length of the draw buffer in the corresponding shaderCode.
   * @param shader - shader code
   */
  ;

  ShaderFactory.getMaxDrawBuffers = function getMaxDrawBuffers(shader) {
    var mrtIndexSet = new Set();
    var result = shader.match(/\bgl_FragData\[.+?\]/g) || [];

    for (var i = 0; i < result.length; i++) {
      var res = result[i].match(/\bgl_FragData\[(.+?)\]/);
      mrtIndexSet.add(res[1]);
    }

    return mrtIndexSet.size;
  }
  /**
   * Compatible with gl_FragColor and gl_FragData simultaneous errors.
   * */
  ;

  ShaderFactory.compatible = function compatible(fragmentShader) {
    var hasFragData = /\bgl_FragData\[.+?\]/g.test(fragmentShader);

    if (hasFragData) {
      fragmentShader = fragmentShader.replace(/\bgl_FragColor\b/g, "gl_FragData[0]");
    }

    return fragmentShader;
  };

  ShaderFactory.replaceMRTShader = function replaceMRTShader(shader, result) {
    var declaration = "";
    var mrtIndexSet = new Set();

    for (var i = 0; i < result.length; i++) {
      var res = result[i].match(/\bgl_FragData\[(.+?)\]/);
      mrtIndexSet.add(res[1]);
    }

    mrtIndexSet.forEach(function (index) {
      declaration += "layout(location=" + index + ") out vec4 fragOutColor" + index + ";\n";
    });
    declaration += "void main(";
    shader = shader.replace(/\bgl_FragData\[(.+?)\]/g, "fragOutColor$1");
    shader = shader.replace(/void\s+?main\s*\(/g, declaration);
    return shader;
  };

  return ShaderFactory;
}();

/**
 * Shader macro。
 */
var ShaderMacro =
/** name */

/** @internal */

/** @internal */

/**
 * @internal
 */
function ShaderMacro(name, index, value) {
  this.name = void 0;
  this._index = void 0;
  this._value = void 0;
  this.name = name;
  this._index = index;
  this._value = value;
};

/**
 * Shader data grouping.
 */
var ShaderDataGroup;

(function (ShaderDataGroup) {
  ShaderDataGroup[ShaderDataGroup["Scene"] = 0] = "Scene";
  ShaderDataGroup[ShaderDataGroup["Camera"] = 1] = "Camera";
  ShaderDataGroup[ShaderDataGroup["Renderer"] = 2] = "Renderer";
  ShaderDataGroup[ShaderDataGroup["Material"] = 3] = "Material";
})(ShaderDataGroup || (ShaderDataGroup = {}));

/**
 * Shader uniform。
 * @internal
 */
var ShaderUniform = /*#__PURE__*/function () {
  function ShaderUniform(engine) {
    this.name = void 0;
    this.propertyId = void 0;
    this.location = void 0;
    this.textureIndex = void 0;
    this.applyFunc = void 0;
    this.cacheValue = void 0;
    this._rhi = void 0;
    this._gl = void 0;
    var rhi = engine._hardwareRenderer;
    this._rhi = rhi;
    this._gl = rhi.gl;
  }

  var _proto = ShaderUniform.prototype;

  _proto.upload1f = function upload1f(shaderUniform, value) {
    if (this.cacheValue !== value) {
      this._gl.uniform1f(shaderUniform.location, value);

      this.cacheValue = value;
    }
  };

  _proto.upload1fv = function upload1fv(shaderUniform, value) {
    this._gl.uniform1fv(shaderUniform.location, value);
  };

  _proto.upload2f = function upload2f(shaderUniform, value) {
    var cacheVaue = this.cacheValue;

    if (value.r !== undefined) {
      if (cacheVaue.x !== value.r || cacheVaue.y !== value.g) {
        this._gl.uniform2f(shaderUniform.location, value.r, value.g);

        cacheVaue.x = value.r;
        cacheVaue.y = value.g;
      }
    } else {
      if (cacheVaue.x !== value.x || cacheVaue.y !== value.y) {
        this._gl.uniform2f(shaderUniform.location, value.x, value.y);

        cacheVaue.x = value.x;
        cacheVaue.y = value.y;
      }
    }
  };

  _proto.upload2fv = function upload2fv(shaderUniform, value) {
    this._gl.uniform2fv(shaderUniform.location, value);
  };

  _proto.upload3f = function upload3f(shaderUniform, value) {
    var cacheVaue = this.cacheValue;

    if (value.r !== undefined) {
      if (cacheVaue.x !== value.r || cacheVaue.y !== value.g || cacheVaue.z !== value.b) {
        this._gl.uniform3f(shaderUniform.location, value.r, value.g, value.b);

        cacheVaue.x = value.r;
        cacheVaue.y = value.g;
        cacheVaue.z = value.b;
      }
    } else {
      if (cacheVaue.x !== value.x || cacheVaue.y !== value.y || cacheVaue.z !== value.z) {
        this._gl.uniform3f(shaderUniform.location, value.x, value.y, value.z);

        cacheVaue.x = value.x;
        cacheVaue.y = value.y;
        cacheVaue.z = value.z;
      }
    }
  };

  _proto.upload3fv = function upload3fv(shaderUniform, value) {
    this._gl.uniform3fv(shaderUniform.location, value);
  };

  _proto.upload4f = function upload4f(shaderUniform, value) {
    var cacheVaue = this.cacheValue;

    if (value.r !== undefined) {
      if (cacheVaue.x !== value.r || cacheVaue.y !== value.g || cacheVaue.z !== value.b || cacheVaue.w !== value.a) {
        this._gl.uniform4f(shaderUniform.location, value.r, value.g, value.b, value.a);

        cacheVaue.x = value.r;
        cacheVaue.y = value.g;
        cacheVaue.z = value.b;
        cacheVaue.w = value.a;
      }
    } else {
      if (cacheVaue.x !== value.x || cacheVaue.y !== value.y || cacheVaue.z !== value.z || cacheVaue.w !== value.w) {
        this._gl.uniform4f(shaderUniform.location, value.x, value.y, value.z, value.w);

        cacheVaue.x = value.x;
        cacheVaue.y = value.y;
        cacheVaue.z = value.z;
        cacheVaue.w = value.w;
      }
    }
  };

  _proto.upload4fv = function upload4fv(shaderUniform, value) {
    this._gl.uniform4fv(shaderUniform.location, value);
  };

  _proto.upload1i = function upload1i(shaderUniform, value) {
    if (this.cacheValue !== value) {
      this._gl.uniform1i(shaderUniform.location, value);

      this.cacheValue = value;
    }
  };

  _proto.upload1iv = function upload1iv(shaderUniform, value) {
    this._gl.uniform1iv(shaderUniform.location, value);
  };

  _proto.upload2i = function upload2i(shaderUniform, value) {
    var cacheVaue = this.cacheValue;

    if (value.r !== undefined) {
      if (cacheVaue.x !== value.r || cacheVaue.y !== value.g) {
        this._gl.uniform2i(shaderUniform.location, value.r, value.g);

        cacheVaue.x = value.r;
        cacheVaue.y = value.g;
      }
    } else {
      if (cacheVaue.x !== value.x || cacheVaue.y !== value.y) {
        this._gl.uniform2i(shaderUniform.location, value.x, value.y);

        cacheVaue.x = value.x;
        cacheVaue.y = value.y;
      }
    }
  };

  _proto.upload2iv = function upload2iv(shaderUniform, value) {
    this._gl.uniform2iv(shaderUniform.location, value);
  };

  _proto.upload3i = function upload3i(shaderUniform, value) {
    var cacheVaue = this.cacheValue;

    if (value.r !== undefined) {
      if (cacheVaue.x !== value.r || cacheVaue.y !== value.g || cacheVaue.z !== value.b) {
        this._gl.uniform3i(shaderUniform.location, value.r, value.g, value.b);

        cacheVaue.x = value.r;
        cacheVaue.y = value.g;
        cacheVaue.z = value.b;
      }
    } else {
      if (cacheVaue.x !== value.x || cacheVaue.y !== value.y || cacheVaue.z !== value.z) {
        this._gl.uniform3i(shaderUniform.location, value.x, value.y, value.z);

        cacheVaue.x = value.x;
        cacheVaue.y = value.y;
        cacheVaue.z = value.z;
      }
    }
  };

  _proto.upload3iv = function upload3iv(shaderUniform, value) {
    this._gl.uniform3iv(shaderUniform.location, value);
  };

  _proto.upload4i = function upload4i(shaderUniform, value) {
    var cacheVaue = this.cacheValue;

    if (value.r !== undefined) {
      if (cacheVaue.x !== value.r || cacheVaue.y !== value.g || cacheVaue.z !== value.b || cacheVaue.w !== value.a) {
        this._gl.uniform4i(shaderUniform.location, value.r, value.g, value.b, value.a);

        cacheVaue.x = value.r;
        cacheVaue.y = value.g;
        cacheVaue.z = value.b;
        cacheVaue.w = value.a;
      }
    } else {
      if (cacheVaue.x !== value.x || cacheVaue.y !== value.y || cacheVaue.z !== value.z || cacheVaue.w !== value.w) {
        this._gl.uniform4i(shaderUniform.location, value.x, value.y, value.z, value.w);

        cacheVaue.x = value.x;
        cacheVaue.y = value.y;
        cacheVaue.z = value.z;
        cacheVaue.w = value.w;
      }
    }
  };

  _proto.upload4iv = function upload4iv(shaderUniform, value) {
    this._gl.uniform4iv(shaderUniform.location, value);
  };

  _proto.uploadMat4 = function uploadMat4(shaderUniform, value) {
    this._gl.uniformMatrix4fv(shaderUniform.location, false, value.elements);
  };

  _proto.uploadMat4v = function uploadMat4v(shaderUniform, value) {
    this._gl.uniformMatrix4fv(shaderUniform.location, false, value);
  };

  _proto.uploadTexture = function uploadTexture(shaderUniform, value) {
    var rhi = this._rhi;
    rhi.activeTexture(shaderUniform.textureIndex);
    rhi.bindTexture(value._target, value._glTexture);
  };

  _proto.uploadTextureArray = function uploadTextureArray(shaderUniform, value) {
    var rhi = this._rhi;
    var textureIndices = shaderUniform.textureIndex;

    for (var i = 0; i < value.length; i++) {
      var texture = value[i];
      rhi.activeTexture(textureIndices[i]);
      rhi.bindTexture(texture._target, texture._glTexture);
    }
  };

  return ShaderUniform;
}();

/**
 * Shader uniform block.
 * @internal
 */
var ShaderUniformBlock = function ShaderUniformBlock() {
  this.constUniforms = [];
  this.textureUniforms = [];
};

/**
 * Shader program, corresponding to the GPU shader program.
 * @internal
 */

var ShaderProgram = /*#__PURE__*/function () {
  ShaderProgram._addLineNum = function _addLineNum(str) {
    var lines = str.split("\n");
    var limitLength = (lines.length + 1).toString().length + 6;
    var prefix;
    return lines.map(function (line, index) {
      prefix = "0:" + (index + 1);
      if (prefix.length >= limitLength) return prefix.substring(0, limitLength) + line;

      for (var i = 0; i < limitLength - prefix.length; i++) {
        prefix += " ";
      }

      return prefix + line;
    }).join("\n");
  };

  function ShaderProgram(engine, vertexSource, fragmentSource) {
    this.id = void 0;
    this.sceneUniformBlock = new ShaderUniformBlock();
    this.cameraUniformBlock = new ShaderUniformBlock();
    this.rendererUniformBlock = new ShaderUniformBlock();
    this.materialUniformBlock = new ShaderUniformBlock();
    this.otherUniformBlock = new ShaderUniformBlock();
    this._uploadRenderCount = -1;
    this._uploadCamera = void 0;
    this._uploadRenderer = void 0;
    this._uploadMaterial = void 0;
    this.attributeLocation = Object.create(null);
    this._isValid = void 0;
    this._engine = void 0;
    this._gl = void 0;
    this._vertexShader = void 0;
    this._fragmentShader = void 0;
    this._glProgram = void 0;
    this._activeTextureUint = 0;
    this._engine = engine;
    this._gl = engine._hardwareRenderer.gl;
    this._glProgram = this._createProgram(vertexSource, fragmentSource);

    if (this._glProgram) {
      this._isValid = true;

      this._recordLocation();
    } else {
      this._isValid = false;
    }

    this.id = ShaderProgram._counter++;
  }
  /**
   * Upload all shader data in shader uniform block.
   * @param uniformBlock - shader Uniform block
   * @param shaderData - shader data
   */


  var _proto = ShaderProgram.prototype;

  _proto.uploadAll = function uploadAll(uniformBlock, shaderData) {
    this.uploadUniforms(uniformBlock, shaderData);
    this.uploadTextures(uniformBlock, shaderData);
  }
  /**
   * Upload constant shader data in shader uniform block.
   * @param uniformBlock - shader Uniform block
   * @param shaderData - shader data
   */
  ;

  _proto.uploadUniforms = function uploadUniforms(uniformBlock, shaderData) {
    var properties = shaderData._properties;
    var constUniforms = uniformBlock.constUniforms;

    for (var i = 0, n = constUniforms.length; i < n; i++) {
      var uniform = constUniforms[i];
      var data = properties[uniform.propertyId];
      data != null && uniform.applyFunc(uniform, data);
    }
  }
  /**
   * Upload texture shader data in shader uniform block.
   * @param uniformBlock - shader Uniform block
   * @param shaderData - shader data
   */
  ;

  _proto.uploadTextures = function uploadTextures(uniformBlock, shaderData) {
    var properties = shaderData._properties;
    var textureUniforms = uniformBlock.textureUniforms; // textureUniforms property maybe null if ShaderUniformBlock not contain any texture.

    if (textureUniforms) {
      for (var i = 0, n = textureUniforms.length; i < n; i++) {
        var uniform = textureUniforms[i];
        uniform.applyFunc(uniform, properties[uniform.propertyId]);
      }
    }
  }
  /**
   * Groupping other data.
   */
  ;

  _proto.groupingOtherUniformBlock = function groupingOtherUniformBlock() {
    var _this$otherUniformBlo = this.otherUniformBlock,
        constUniforms = _this$otherUniformBlo.constUniforms,
        textureUniforms = _this$otherUniformBlo.textureUniforms;
    constUniforms.length > 0 && this._groupingSubOtherUniforms(constUniforms, false);
    textureUniforms.length > 0 && this._groupingSubOtherUniforms(textureUniforms, true);
  }
  /**
   * Bind this shader program.
   * @returns Whether the shader program is switched.
   */
  ;

  _proto.bind = function bind() {
    var rhi = this._engine._hardwareRenderer;

    if (rhi._currentBind !== this) {
      this._gl.useProgram(this._glProgram);

      rhi._currentBind = this;
      return true;
    } else {
      return false;
    }
  }
  /**
   * Destroy this shader program.
   */
  ;

  _proto.destroy = function destroy() {
    var gl = this._gl;
    this._vertexShader && gl.deleteShader(this._vertexShader);
    this._fragmentShader && gl.deleteShader(this._fragmentShader);
    this._glProgram && gl.deleteProgram(this._glProgram);
  };

  _proto._groupingSubOtherUniforms = function _groupingSubOtherUniforms(unifroms, isTexture) {
    for (var i = unifroms.length - 1; i >= 0; i--) {
      var uniform = unifroms[i];

      var group = Shader._getShaderPropertyGroup(uniform.name);

      if (group !== undefined) {
        unifroms.splice(unifroms.indexOf(uniform), 1);

        this._groupingUniform(uniform, group, isTexture);
      }
    }
  };

  _proto._groupingUniform = function _groupingUniform(uniform, group, isTexture) {
    switch (group) {
      case ShaderDataGroup.Scene:
        if (isTexture) {
          this.sceneUniformBlock.textureUniforms.push(uniform);
        } else {
          this.sceneUniformBlock.constUniforms.push(uniform);
        }

        break;

      case ShaderDataGroup.Camera:
        if (isTexture) {
          this.cameraUniformBlock.textureUniforms.push(uniform);
        } else {
          this.cameraUniformBlock.constUniforms.push(uniform);
        }

        break;

      case ShaderDataGroup.Renderer:
        if (isTexture) {
          this.rendererUniformBlock.textureUniforms.push(uniform);
        } else {
          this.rendererUniformBlock.constUniforms.push(uniform);
        }

        break;

      case ShaderDataGroup.Material:
        if (isTexture) {
          this.materialUniformBlock.textureUniforms.push(uniform);
        } else {
          this.materialUniformBlock.constUniforms.push(uniform);
        }

        break;

      default:
        if (isTexture) {
          this.otherUniformBlock.textureUniforms.push(uniform);
        } else {
          this.otherUniformBlock.constUniforms.push(uniform);
        }

    }
  }
  /**
   * init and link program with shader.
   */
  ;

  _proto._createProgram = function _createProgram(vertexSource, fragmentSource) {
    var gl = this._gl; // create and compile shader

    var vertexShader = this._createShader(gl.VERTEX_SHADER, vertexSource);

    if (!vertexShader) {
      return null;
    }

    var fragmentShader = this._createShader(gl.FRAGMENT_SHADER, fragmentSource);

    if (!fragmentShader) {
      return null;
    } // link program and shader


    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.validateProgram(program);

    if (gl.isContextLost()) {
      Logger.error("Contex lost while linking program.");
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return null;
    }

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      Logger.error("Could not link WebGL program. \n" + gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }

    this._vertexShader = vertexShader;
    this._fragmentShader = fragmentShader;
    return program;
  };

  _proto._createShader = function _createShader(shaderType, shaderSource) {
    var gl = this._gl;
    var shader = gl.createShader(shaderType);

    if (!shader) {
      Logger.error("Context lost while create shader.");
      return null;
    }

    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    if (gl.isContextLost()) {
      Logger.error("Context lost while compiling shader.");
      gl.deleteShader(shader);
      return null;
    }

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      Logger.error("Could not compile WebGL shader.\n" + gl.getShaderInfoLog(shader), ShaderProgram._addLineNum(shaderSource));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }
  /**
   * record the location of uniform/attribute.
   */
  ;

  _proto._recordLocation = function _recordLocation() {
    var _this = this;

    var gl = this._gl;
    var program = this._glProgram;

    var uniformInfos = this._getUniformInfos();

    var attributeInfos = this._getAttributeInfos();

    uniformInfos.forEach(function (_ref) {
      var name = _ref.name,
          size = _ref.size,
          type = _ref.type;
      var shaderUniform = new ShaderUniform(_this._engine);
      var isArray = false;
      var isTexture = false;

      if (name.indexOf("[0]") > 0) {
        name = name.substr(0, name.length - 3);
        isArray = true;
      }

      var group = Shader._getShaderPropertyGroup(name);

      var location = gl.getUniformLocation(program, name);
      shaderUniform.name = name;
      shaderUniform.propertyId = Shader.getPropertyByName(name)._uniqueId;
      shaderUniform.location = location;

      switch (type) {
        case gl.FLOAT:
          if (isArray) {
            shaderUniform.applyFunc = shaderUniform.upload1fv;
          } else {
            shaderUniform.applyFunc = shaderUniform.upload1f;
            shaderUniform.cacheValue = 0;
          }

          break;

        case gl.FLOAT_VEC2:
          if (isArray) {
            shaderUniform.applyFunc = shaderUniform.upload2fv;
          } else {
            shaderUniform.applyFunc = shaderUniform.upload2f;
            shaderUniform.cacheValue = new math.Vector2(0, 0);
          }

          break;

        case gl.FLOAT_VEC3:
          if (isArray) {
            shaderUniform.applyFunc = shaderUniform.upload3fv;
          } else {
            shaderUniform.applyFunc = shaderUniform.upload3f;
            shaderUniform.cacheValue = new math.Vector3(0, 0, 0);
          }

          break;

        case gl.FLOAT_VEC4:
          if (isArray) {
            shaderUniform.applyFunc = shaderUniform.upload4fv;
          } else {
            shaderUniform.applyFunc = shaderUniform.upload4f;
            shaderUniform.cacheValue = new math.Vector4(0, 0, 0, 0);
          }

          break;

        case gl.BOOL:
        case gl.INT:
          if (isArray) {
            shaderUniform.applyFunc = shaderUniform.upload1iv;
          } else {
            shaderUniform.applyFunc = shaderUniform.upload1i;
            shaderUniform.cacheValue = 0;
          }

          break;

        case gl.BOOL_VEC2:
        case gl.INT_VEC2:
          if (isArray) {
            shaderUniform.applyFunc = shaderUniform.upload2iv;
          } else {
            shaderUniform.applyFunc = shaderUniform.upload2i;
            shaderUniform.cacheValue = new math.Vector2(0, 0);
          }

          break;

        case gl.BOOL_VEC3:
        case gl.INT_VEC3:

          shaderUniform.applyFunc = isArray ? shaderUniform.upload3iv : shaderUniform.upload3i;
          shaderUniform.cacheValue = new math.Vector3(0, 0, 0);
          break;

        case gl.BOOL_VEC4:
        case gl.INT_VEC4:
          if (isArray) {
            shaderUniform.applyFunc = shaderUniform.upload4iv;
          } else {
            shaderUniform.applyFunc = shaderUniform.upload4i;
            shaderUniform.cacheValue = new math.Vector4(0, 0, 0);
          }

          break;

        case gl.FLOAT_MAT4:
          shaderUniform.applyFunc = isArray ? shaderUniform.uploadMat4v : shaderUniform.uploadMat4;
          break;

        case gl.SAMPLER_2D:
        case gl.SAMPLER_CUBE:
          isTexture = true;

          if (isArray) {
            var textureIndices = new Int32Array(size);
            var glTextureIndices = new Array(size);

            for (var i = 0; i < size; i++) {
              textureIndices[i] = _this._activeTextureUint;
              glTextureIndices[i] = gl.TEXTURE0 + _this._activeTextureUint++;
            }

            shaderUniform.textureIndex = glTextureIndices;
            shaderUniform.applyFunc = shaderUniform.uploadTextureArray;

            _this.bind();

            gl.uniform1iv(location, textureIndices);
          } else {
            var textureIndex = gl.TEXTURE0 + _this._activeTextureUint;
            shaderUniform.textureIndex = textureIndex;
            shaderUniform.applyFunc = shaderUniform.uploadTexture;

            _this.bind();

            gl.uniform1i(location, _this._activeTextureUint++);
          }

          break;
      }

      _this._groupingUniform(shaderUniform, group, isTexture);
    });
    attributeInfos.forEach(function (_ref2) {
      var name = _ref2.name;
      _this.attributeLocation[name] = gl.getAttribLocation(program, name);
    });
  };

  _proto._getUniformInfos = function _getUniformInfos() {
    var gl = this._gl;
    var program = this._glProgram;
    var uniformInfos = [];
    var uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

    for (var i = 0; i < uniformCount; ++i) {
      var info = gl.getActiveUniform(program, i);
      uniformInfos[i] = info;
    }

    return uniformInfos;
  };

  _proto._getAttributeInfos = function _getAttributeInfos() {
    var gl = this._gl;
    var program = this._glProgram;
    var attributeInfos = [];
    var attributeCount = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

    for (var i = 0; i < attributeCount; ++i) {
      var info = gl.getActiveAttrib(program, i);
      attributeInfos[i] = info;
    }

    return attributeInfos;
  };

  _createClass(ShaderProgram, [{
    key: "isValid",
    get:
    /**
     * Whether this shader program is valid.
     * @readonly
     */
    function get() {
      return this._isValid;
    }
  }]);

  return ShaderProgram;
}();
ShaderProgram._counter = 0;

/**
 * Shader property.
 */
var ShaderProperty =
/** @internal */

/** @internal */

/**
 * @internal
 */
function ShaderProperty() {
  this._uniqueId = void 0;
  this._group = void 0;
  this._uniqueId = ShaderProperty._propertyNameCounter++;
};
ShaderProperty._propertyNameCounter = 0;

/**
 * Shader containing vertex and fragment source.
 */

var Shader = /*#__PURE__*/function () {
  /**
   * Create a shader.
   * @param name - Name of the shader
   * @param vertexSource - Vertex source code
   * @param fragmentSource - Fragment source code
   */
  Shader.create = function create(name, vertexSource, fragmentSource) {
    var shaderMap = Shader._shaderMap;

    if (shaderMap[name]) {
      throw "Shader named \"" + name + "\" already exists.";
    }

    return shaderMap[name] = new Shader(name, vertexSource, fragmentSource);
  }
  /**
   * Find a shader by name.
   * @param name - Name of the shader
   */
  ;

  Shader.find = function find(name) {
    return Shader._shaderMap[name];
  }
  /**
   * Get shader macro by name.
   * @param name - Name of the shader macro
   * @returns Shader macro
   */
  ;

  Shader.getMacroByName = function getMacroByName(name) {
    var macro = Shader._macroMap[name];

    if (!macro) {
      var maskMap = Shader._macroMaskMap;
      var counter = Shader._macroCounter;
      var index = Math.floor(counter / 32);
      var bit = counter % 32;
      macro = new ShaderMacro(name, index, 1 << bit);
      Shader._macroMap[name] = macro;

      if (index == maskMap.length) {
        maskMap.length++;
        maskMap[index] = new Array(32);
      }

      maskMap[index][bit] = name;
      Shader._macroCounter++;
    }

    return macro;
  }
  /**
   * Get shader property by name.
   * @param name - Name of the shader property
   * @returns Shader property
   */
  ;

  Shader.getPropertyByName = function getPropertyByName(name) {
    var propertyNameMap = Shader._propertyNameMap;

    if (propertyNameMap[name] != null) {
      return propertyNameMap[name];
    } else {
      var property = new ShaderProperty();
      propertyNameMap[name] = property;
      return property;
    }
  }
  /**
   * @internal
   */
  ;

  Shader._getShaderPropertyGroup = function _getShaderPropertyGroup(propertyName) {
    var shaderProperty = Shader._propertyNameMap[propertyName];
    return shaderProperty === null || shaderProperty === void 0 ? void 0 : shaderProperty._group;
  };

  Shader._getNamesByMacros = function _getNamesByMacros(macros, out) {
    var maskMap = Shader._macroMaskMap;
    var mask = macros._mask;
    out.length = 0;

    for (var i = 0, n = macros._length; i < n; i++) {
      var subMaskMap = maskMap[i];
      var subMask = mask[i];

      var _n = subMask < 0 ? 32 : Math.floor(Math.log2(subMask)) + 1; // if is negative must contation 1 << 31.


      for (var j = 0; j < _n; j++) {
        if (subMask & 1 << j) {
          out.push(subMaskMap[j]);
        }
      }
    }
  }
  /** The name of shader. */
  ;

  function Shader(name, vertexSource, fragmentSource) {
    this.name = void 0;
    this._shaderId = 0;
    this._vertexSource = void 0;
    this._fragmentSource = void 0;
    this._shaderId = Shader._shaderCounter++;
    this.name = name;
    this._vertexSource = vertexSource;
    this._fragmentSource = fragmentSource;
  }
  /**
   * Compile shader variant by macro name list.
   *
   * @remarks
   * Usually a shader contains some macros,any combination of macros is called shader variant.
   *
   * @param engine - Engine to which the shader variant belongs
   * @param macros - Macro name list
   */


  var _proto = Shader.prototype;

  _proto.compileVariant = function compileVariant(engine, macros) {
    var compileMacros = RenderQueue.compileMacros;
    compileMacros.clear();

    for (var i = 0, n = macros.length; i < n; i++) {
      compileMacros.enable(Shader.getMacroByName(macros[i]));
    }

    this._getShaderProgram(engine, compileMacros);
  }
  /**
   * @internal
   */
  ;

  _proto._getShaderProgram = function _getShaderProgram(engine, macroCollection) {
    var shaderProgramPool = engine._getShaderProgramPool(this);

    var shaderProgram = shaderProgramPool.get(macroCollection);

    if (shaderProgram) {
      return shaderProgram;
    }

    var isWebGL2 = engine._hardwareRenderer.isWebGL2;
    var macroNameList = [];

    Shader._getNamesByMacros(macroCollection, macroNameList);

    var macroNameStr = ShaderFactory.parseCustomMacros(macroNameList);
    var shaderNameStr = ShaderFactory.parseShaderName(this.name || "VOID");
    var versionStr = isWebGL2 ? "#version 300 es" : "#version 100";
    var precisionStr = "\n    #ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      precision highp int;\n      #define O3_VERTEX_PRECISION highp\n      #define O3_FRAGMENT_PRECISION highp\n    #else\n      precision mediump float;\n      precision mediump int;\n      #define O3_VERTEX_PRECISION mediump\n      #define O3_FRAGMENT_PRECISION mediump\n    #endif\n    ";
    var vertexSource = ShaderFactory.parseShader(" " + versionStr + "\n        " + shaderNameStr + "\n        " + precisionStr + "\n        " + macroNameStr + "\n        " + this._vertexSource);
    var fragmentSource = ShaderFactory.parseShader(" " + versionStr + "\n        " + shaderNameStr + "\n        " + (isWebGL2 ? "" : ShaderFactory.parseExtension(Shader._shaderExtension)) + "\n        " + precisionStr + "\n        " + macroNameStr + "\n      " + this._fragmentSource);

    if (isWebGL2) {
      vertexSource = ShaderFactory.convertTo300(vertexSource);
      fragmentSource = ShaderFactory.convertTo300(fragmentSource, true);
    }

    shaderProgram = new ShaderProgram(engine, vertexSource, fragmentSource);
    shaderProgramPool.cache(shaderProgram);
    return shaderProgram;
  };

  return Shader;
}();
Shader._shaderCounter = 0;
Shader._shaderMap = Object.create(null);
Shader._propertyNameMap = Object.create(null);
Shader._macroMaskMap = [];
Shader._macroCounter = 0;
Shader._macroMap = Object.create(null);
Shader._shaderExtension = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives", "GL_EXT_draw_buffers"];

/**
 * Light base class.
 */

var Light = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Light, _Component);

  function Light() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this._viewMat = void 0;
    _this._inverseViewMat = void 0;
    return _this;
  }

  var _proto = Light.prototype;

  /**
   * Mount to the current Scene.
   * @internal
   * @override
   */
  _proto._onEnable = function _onEnable() {
    this.scene.findFeature(LightFeature).attachRenderLight(this);
  }
  /**
   * Unmount from the current Scene.
   * @internal
   * @override
   */
  ;

  _proto._onDisable = function _onDisable() {
    this.scene.findFeature(LightFeature).detachRenderLight(this);
  }
  /**
   * View matrix.
   * @readonly
   */
  ;

  _createClass(Light, [{
    key: "viewMatrix",
    get: function get() {
      if (!this._viewMat) this._viewMat = new math.Matrix();
      math.Matrix.invert(this.entity.transform.worldMatrix, this._viewMat);
      return this._viewMat;
    }
    /**
     * Inverse view matrix.
     * @readonly
     */

  }, {
    key: "inverseViewMatrix",
    get: function get() {
      if (!this._inverseViewMat) this._inverseViewMat = new math.Matrix();
      math.Matrix.invert(this.viewMatrix, this._inverseViewMat);
      return this._inverseViewMat;
    }
  }]);

  return Light;
}(Component);
Light._maxLight = 10;

/**
 * Ambient light.
 */

var AmbientLight = /*#__PURE__*/function (_Light) {
  _inheritsLoose(AmbientLight, _Light);

  function AmbientLight(entity) {
    var _this;

    _this = _Light.call(this, entity) || this;
    _this._color = new math.Color(1, 1, 1, 1);
    _this._intensity = 1;
    _this._lightColor = new math.Color(1, 1, 1, 1);
    _this.color = _this._color;
    return _this;
  }

  _createClass(AmbientLight, [{
    key: "color",
    get:
    /**
     * Ambient light color.
     */
    function get() {
      return this._color;
    },
    set: function set(value) {
      this._color = value;
      this.scene.shaderData.setColor(AmbientLight._colorProperty, this.lightColor);
    }
    /**
     * Ambient light intensity.
     */

  }, {
    key: "intensity",
    get: function get() {
      return this._intensity;
    },
    set: function set(value) {
      this._intensity = value;
      this.scene.shaderData.setColor(AmbientLight._colorProperty, this.lightColor);
    }
    /**
     * Get the final light color.
     * @readonly
     */

  }, {
    key: "lightColor",
    get: function get() {
      this._lightColor.r = this._color.r * this._intensity;
      this._lightColor.g = this._color.g * this._intensity;
      this._lightColor.b = this._color.b * this._intensity;
      this._lightColor.a = this._color.a * this._intensity;
      return this._lightColor;
    }
  }]);

  return AmbientLight;
}(Light);
AmbientLight._colorProperty = Shader.getPropertyByName("u_ambientLightColor");

/**
 * Directional light.
 */

var DirectLight = /*#__PURE__*/function (_Light) {
  _inheritsLoose(DirectLight, _Light);

  function DirectLight() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Light.call.apply(_Light, [this].concat(args)) || this;
    _this.color = new math.Color(1, 1, 1, 1);
    _this.intensity = 1;
    _this._forward = new math.Vector3();
    _this._lightColor = new math.Color(1, 1, 1, 1);
    _this._reverseDirection = new math.Vector3();
    return _this;
  }

  /**
   * @internal
   */
  DirectLight._updateShaderData = function _updateShaderData(shaderData) {
    var data = DirectLight._combinedData;
    shaderData.setFloatArray(DirectLight._colorProperty, data.color);
    shaderData.setFloatArray(DirectLight._directionProperty, data.direction);
  };

  var _proto = DirectLight.prototype;

  /**
   * @internal
   */
  _proto._appendData = function _appendData(lightIndex) {
    var colorStart = lightIndex * 3;
    var directionStart = lightIndex * 3;
    var lightColor = this.lightColor;
    var direction = this.direction;
    var data = DirectLight._combinedData;
    data.color[colorStart] = lightColor.r;
    data.color[colorStart + 1] = lightColor.g;
    data.color[colorStart + 2] = lightColor.b;
    data.direction[directionStart] = direction.x;
    data.direction[directionStart + 1] = direction.y;
    data.direction[directionStart + 2] = direction.z;
  };

  _createClass(DirectLight, [{
    key: "direction",
    get:
    /**
     * Get direction.
     * @readonly
     */
    function get() {
      this.entity.transform.getWorldForward(this._forward);
      return this._forward;
    }
    /**
     * Get the final light color.
     * @readonly
     */

  }, {
    key: "lightColor",
    get: function get() {
      this._lightColor.r = this.color.r * this.intensity;
      this._lightColor.g = this.color.g * this.intensity;
      this._lightColor.b = this.color.b * this.intensity;
      this._lightColor.a = this.color.a * this.intensity;
      return this._lightColor;
    }
    /**
     * Get the opposite direction of the directional light direction.
     * @readonly
     */

  }, {
    key: "reverseDirection",
    get: function get() {
      math.Vector3.scale(this.direction, -1, this._reverseDirection);
      return this._reverseDirection;
    }
  }]);

  return DirectLight;
}(Light);
DirectLight._colorProperty = Shader.getPropertyByName("u_directLightColor");
DirectLight._directionProperty = Shader.getPropertyByName("u_directLightDirection");
DirectLight._combinedData = {
  color: new Float32Array(3 * Light._maxLight),
  direction: new Float32Array(3 * Light._maxLight)
};

/**
 * Environment light.
 */

var EnvironmentMapLight = /*#__PURE__*/function (_Light) {
  _inheritsLoose(EnvironmentMapLight, _Light);

  /**
   * @internal
   */
  EnvironmentMapLight._updateShaderData = function _updateShaderData(shaderData, light) {
    // support rotation
    var transformMatrix = light.entity.transform.worldMatrix;
    shaderData.setMatrix(EnvironmentMapLight._transformMatrixProperty, transformMatrix);
  }
  /**
   * Diffuse cube texture.
   */
  ;

  function EnvironmentMapLight(entity) {
    var _this;

    _this = _Light.call(this, entity) || this;
    _this._diffuseTexture = void 0;
    _this._specularTexture = void 0;
    _this._diffuseColor = new math.Color(0.3, 0.3, 0.3, 1);
    _this._specularColor = new math.Color(0.5, 0.5, 0.5, 1);
    _this._diffuseIntensity = 1;
    _this._specularIntensity = 1;
    _this.diffuseColor = _this._diffuseColor;
    _this.specularColor = _this._specularColor;
    _this.diffuseIntensity = _this._diffuseIntensity;
    _this.specularIntensity = _this._specularIntensity;
    return _this;
  }

  _createClass(EnvironmentMapLight, [{
    key: "diffuseTexture",
    get: function get() {
      return this._diffuseTexture;
    },
    set: function set(value) {
      this._diffuseTexture = value;
      var shaderData = this.scene.shaderData;

      if (value) {
        shaderData.setTexture(EnvironmentMapLight._diffuseTextureProperty, value);
        shaderData.enableMacro(EnvironmentMapLight._diffuseMacro);
      } else {
        shaderData.disableMacro(EnvironmentMapLight._diffuseMacro);
      }
    }
    /**
     * Specular cube texture.
     */

  }, {
    key: "specularTexture",
    get: function get() {
      return this._specularTexture;
    },
    set: function set(value) {
      this._specularTexture = value;
      var shaderData = this.scene.shaderData;

      if (value) {
        shaderData.setTexture(EnvironmentMapLight._specularTextureProperty, value);
        shaderData.setFloat(EnvironmentMapLight._mipLevelProperty, this.specularTexture.mipmapCount);
        shaderData.enableMacro(EnvironmentMapLight._specularMacro);
      } else {
        shaderData.disableMacro(EnvironmentMapLight._specularMacro);
      }
    }
    /**
     * Diffuse color.
     */

  }, {
    key: "diffuseColor",
    get: function get() {
      return this._diffuseColor;
    },
    set: function set(value) {
      this._diffuseColor = value;
      this.scene.shaderData.setColor(EnvironmentMapLight._diffuseColorProperty, value);
    }
    /**
     * Specular color.
     */

  }, {
    key: "specularColor",
    get: function get() {
      return this._specularColor;
    },
    set: function set(value) {
      this._specularColor = value;
      this.scene.shaderData.setColor(EnvironmentMapLight._specularColorProperty, value);
    }
    /**
     * Diffuse intensity.
     */

  }, {
    key: "diffuseIntensity",
    get: function get() {
      return this._diffuseIntensity;
    },
    set: function set(value) {
      this._diffuseIntensity = value;
      this.scene.shaderData.setFloat(EnvironmentMapLight._diffuseIntensityProperty, value);
    }
    /**
     * Specular intensity.
     */

  }, {
    key: "specularIntensity",
    get: function get() {
      return this._specularIntensity;
    },
    set: function set(value) {
      this._specularIntensity = value;
      this.scene.shaderData.setFloat(EnvironmentMapLight._specularIntensityProperty, value);
    }
  }]);

  return EnvironmentMapLight;
}(Light);
EnvironmentMapLight._diffuseMacro = Shader.getMacroByName("O3_USE_DIFFUSE_ENV");
EnvironmentMapLight._specularMacro = Shader.getMacroByName("O3_USE_SPECULAR_ENV");
EnvironmentMapLight._diffuseTextureProperty = Shader.getPropertyByName("u_env_diffuseSampler");
EnvironmentMapLight._specularTextureProperty = Shader.getPropertyByName("u_env_specularSampler");
EnvironmentMapLight._mipLevelProperty = Shader.getPropertyByName("u_envMapLight.mipMapLevel");
EnvironmentMapLight._diffuseColorProperty = Shader.getPropertyByName("u_envMapLight.diffuse");
EnvironmentMapLight._specularColorProperty = Shader.getPropertyByName("u_envMapLight.specular");
EnvironmentMapLight._diffuseIntensityProperty = Shader.getPropertyByName("u_envMapLight.diffuseIntensity");
EnvironmentMapLight._specularIntensityProperty = Shader.getPropertyByName("u_envMapLight.specularIntensity");
EnvironmentMapLight._transformMatrixProperty = Shader.getPropertyByName("u_envMapLight.transformMatrix");

/**
 * Point light.
 */

var PointLight = /*#__PURE__*/function (_Light) {
  _inheritsLoose(PointLight, _Light);

  function PointLight() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Light.call.apply(_Light, [this].concat(args)) || this;
    _this.color = new math.Color(1, 1, 1, 1);
    _this.intensity = 1.0;
    _this.distance = 100;
    _this.decay = 0;
    _this._lightColor = new math.Color(1, 1, 1, 1);
    return _this;
  }

  /**
   * @internal
   */
  PointLight._updateShaderData = function _updateShaderData(shaderData) {
    var data = PointLight._combinedData;
    shaderData.setFloatArray(PointLight._colorProperty, data.color);
    shaderData.setFloatArray(PointLight._positionProperty, data.position);
    shaderData.setFloatArray(PointLight._distanceProperty, data.distance);
    shaderData.setFloatArray(PointLight._decayProperty, data.decay);
  };

  var _proto = PointLight.prototype;

  /**
   * @internal
   */
  _proto._appendData = function _appendData(lightIndex) {
    var colorStart = lightIndex * 3;
    var positionStart = lightIndex * 3;
    var distanceStart = lightIndex;
    var decayStart = lightIndex;
    var lightColor = this.lightColor;
    var lightPosition = this.position;
    var data = PointLight._combinedData;
    data.color[colorStart] = lightColor.r;
    data.color[colorStart + 1] = lightColor.g;
    data.color[colorStart + 2] = lightColor.b;
    data.position[positionStart] = lightPosition.x;
    data.position[positionStart + 1] = lightPosition.y;
    data.position[positionStart + 2] = lightPosition.z;
    data.distance[distanceStart] = this.distance;
    data.decay[decayStart] = this.decay;
  };

  _createClass(PointLight, [{
    key: "position",
    get:
    /**
     * Get light position.
     * @readonly
     */
    function get() {
      return this.entity.transform.worldPosition;
    }
    /**
     * Get the final light color.
     * @readonly
     */

  }, {
    key: "lightColor",
    get: function get() {
      this._lightColor.r = this.color.r * this.intensity;
      this._lightColor.g = this.color.g * this.intensity;
      this._lightColor.b = this.color.b * this.intensity;
      this._lightColor.a = this.color.a * this.intensity;
      return this._lightColor;
    }
  }]);

  return PointLight;
}(Light);
PointLight._colorProperty = Shader.getPropertyByName("u_pointLightColor");
PointLight._positionProperty = Shader.getPropertyByName("u_pointLightPosition");
PointLight._distanceProperty = Shader.getPropertyByName("u_pointLightDistance");
PointLight._decayProperty = Shader.getPropertyByName("u_pointLightDecay");
PointLight._combinedData = {
  color: new Float32Array(3 * Light._maxLight),
  position: new Float32Array(3 * Light._maxLight),
  distance: new Float32Array(Light._maxLight),
  decay: new Float32Array(Light._maxLight)
};

/**
 * Spot light.
 */

var SpotLight = /*#__PURE__*/function (_Light) {
  _inheritsLoose(SpotLight, _Light);

  function SpotLight() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Light.call.apply(_Light, [this].concat(args)) || this;
    _this.color = new math.Color(1, 1, 1, 1);
    _this.penumbra = 0.2;
    _this.distance = 100;
    _this.intensity = 1.0;
    _this.decay = 0;
    _this.angle = Math.PI / 6;
    _this._forward = new math.Vector3();
    _this._lightColor = new math.Color(1, 1, 1, 1);
    _this._inverseDirection = new math.Vector3();
    return _this;
  }

  /**
   * @internal
   */
  SpotLight._updateShaderData = function _updateShaderData(shaderData) {
    var data = SpotLight._combinedData;
    shaderData.setFloatArray(SpotLight._colorProperty, data.color);
    shaderData.setFloatArray(SpotLight._positionProperty, data.position);
    shaderData.setFloatArray(SpotLight._directionProperty, data.direction);
    shaderData.setFloatArray(SpotLight._distanceProperty, data.distance);
    shaderData.setFloatArray(SpotLight._decayProperty, data.decay);
    shaderData.setFloatArray(SpotLight._angleProperty, data.angle);
    shaderData.setFloatArray(SpotLight._penumbraProperty, data.penumbra);
    shaderData.setFloatArray(SpotLight._penumbraCosProperty, data.penumbraCos);
    shaderData.setFloatArray(SpotLight._coneCosProperty, data.coneCos);
  };

  var _proto = SpotLight.prototype;

  /**
   * @internal
   */
  _proto._appendData = function _appendData(lightIndex) {
    var colorStart = lightIndex * 3;
    var positionStart = lightIndex * 3;
    var directionStart = lightIndex * 3;
    var distanceStart = lightIndex;
    var decayStart = lightIndex;
    var angleStart = lightIndex;
    var penumbraStart = lightIndex;
    var penumbraCosStart = lightIndex;
    var coneCosStart = lightIndex;
    var color = this.lightColor;
    var position = this.position;
    var direction = this.direction;
    var data = SpotLight._combinedData;
    data.color[colorStart] = color.r;
    data.color[colorStart + 1] = color.g;
    data.color[colorStart + 2] = color.b;
    data.position[positionStart] = position.x;
    data.position[positionStart + 1] = position.y;
    data.position[positionStart + 2] = position.z;
    data.direction[directionStart] = direction.x;
    data.direction[directionStart + 1] = direction.y;
    data.direction[directionStart + 2] = direction.z;
    data.distance[distanceStart] = this.distance;
    data.decay[decayStart] = this.decay;
    data.angle[angleStart] = this.angle;
    data.penumbra[penumbraStart] = this.penumbra;
    data.penumbraCos[penumbraCosStart] = Math.cos(this.angle * (1 - this.penumbra));
    data.coneCos[coneCosStart] = Math.cos(this.angle);
  };

  _createClass(SpotLight, [{
    key: "position",
    get:
    /**
     * Get light position.
     * @readonly
     */
    function get() {
      return this.entity.transform.worldPosition;
    }
    /**
     * Get light direction.
     * @readonly
     */

  }, {
    key: "direction",
    get: function get() {
      this.entity.transform.getWorldForward(this._forward);
      return this._forward;
    }
    /**
     * Get the opposite direction of the spotlight.
     * @readonly
     */

  }, {
    key: "reverseDirection",
    get: function get() {
      math.Vector3.scale(this.direction, -1, this._inverseDirection);
      return this._inverseDirection;
    }
    /**
     * Get the final light color.
     * @readonly
     */

  }, {
    key: "lightColor",
    get: function get() {
      this._lightColor.r = this.color.r * this.intensity;
      this._lightColor.g = this.color.g * this.intensity;
      this._lightColor.b = this.color.b * this.intensity;
      this._lightColor.a = this.color.a * this.intensity;
      return this._lightColor;
    }
  }]);

  return SpotLight;
}(Light);
SpotLight._colorProperty = Shader.getPropertyByName("u_spotLightColor");
SpotLight._positionProperty = Shader.getPropertyByName("u_spotLightPosition");
SpotLight._directionProperty = Shader.getPropertyByName("u_spotLightDirection");
SpotLight._distanceProperty = Shader.getPropertyByName("u_spotLightDistance");
SpotLight._decayProperty = Shader.getPropertyByName("u_spotLightDecay");
SpotLight._angleProperty = Shader.getPropertyByName("u_spotLightAngle");
SpotLight._penumbraProperty = Shader.getPropertyByName("u_spotLightPenumbra");
SpotLight._penumbraCosProperty = Shader.getPropertyByName("u_spotLightPenumbraCos");
SpotLight._coneCosProperty = Shader.getPropertyByName("u_spotLightConeCos");
SpotLight._combinedData = {
  color: new Float32Array(3 * Light._maxLight),
  position: new Float32Array(3 * Light._maxLight),
  direction: new Float32Array(3 * Light._maxLight),
  distance: new Float32Array(Light._maxLight),
  decay: new Float32Array(Light._maxLight),
  angle: new Float32Array(Light._maxLight),
  penumbra: new Float32Array(Light._maxLight),
  penumbraCos: new Float32Array(Light._maxLight),
  coneCos: new Float32Array(Light._maxLight)
};

/**
 * Determine whether there are lights in the scene.
 * @returns Has light
 */

function hasLight() {
  return this.findFeature(LightFeature).visibleLights.length > 0;
}
/**
 * Light plug-in.
 */

var LightFeature = /*#__PURE__*/function (_SceneFeature) {
  _inheritsLoose(LightFeature, _SceneFeature);

  function LightFeature() {
    var _this;

    _this = _SceneFeature.call(this) || this;
    _this.visibleLights = void 0;
    _this.visibleLights = [];
    return _this;
  }
  /**
   * Register a light object to the current scene.
   * @param light
   */


  var _proto = LightFeature.prototype;

  _proto.attachRenderLight = function attachRenderLight(light) {
    var index = this.visibleLights.indexOf(light);

    if (index == -1) {
      this.visibleLights.push(light);
    } else {
      Logger.warn("Light already attached.");
    }
  }
  /**
   * Remove a light object from the current scene.
   * @param light
   */
  ;

  _proto.detachRenderLight = function detachRenderLight(light) {
    var index = this.visibleLights.indexOf(light);

    if (index != -1) {
      this.visibleLights.splice(index, 1);
    }
  }
  /**
   * @internal
   */
  ;

  _proto._updateShaderData = function _updateShaderData(shaderData) {
    /**
     * ambientLight and envMapLight only use the last one in the scene
     * */
    var ambientLightCount = 0;
    var envMapLightCount = 0;
    var directLightCount = 0;
    var pointLightCount = 0;
    var spotLightCount = 0;
    var lights = this.visibleLights;

    for (var i = 0, len = lights.length; i < len; i++) {
      var light = lights[i];

      if (light instanceof AmbientLight) {
        ambientLightCount++;
      } else if (light instanceof EnvironmentMapLight) {
        EnvironmentMapLight._updateShaderData(shaderData, light);

        envMapLightCount++;
      } else if (light instanceof DirectLight) {
        light._appendData(directLightCount++);
      } else if (light instanceof PointLight) {
        light._appendData(pointLightCount++);
      } else if (light instanceof SpotLight) {
        light._appendData(spotLightCount++);
      }
    }

    if (ambientLightCount) {
      shaderData.enableMacro(LightFeature._ambientMacro);
    } else {
      shaderData.disableMacro(LightFeature._ambientMacro);
    }

    if (envMapLightCount) {
      shaderData.enableMacro(LightFeature._envMacro);
    } else {
      shaderData.disableMacro(LightFeature._envMacro);
    }

    if (directLightCount) {
      DirectLight._updateShaderData(shaderData);

      shaderData.enableMacro("O3_DIRECT_LIGHT_COUNT", directLightCount.toString());
    } else {
      shaderData.disableMacro("O3_DIRECT_LIGHT_COUNT");
    }

    if (pointLightCount) {
      PointLight._updateShaderData(shaderData);

      shaderData.enableMacro("O3_POINT_LIGHT_COUNT", pointLightCount.toString());
    } else {
      shaderData.disableMacro("O3_POINT_LIGHT_COUNT");
    }

    if (spotLightCount) {
      SpotLight._updateShaderData(shaderData);

      shaderData.enableMacro("O3_SPOT_LIGHT_COUNT", spotLightCount.toString());
    } else {
      shaderData.disableMacro("O3_SPOT_LIGHT_COUNT");
    }
  };

  return LightFeature;
}(SceneFeature);
LightFeature._ambientMacro = Shader.getMacroByName("O3_HAS_AMBIENT_LIGHT");
LightFeature._envMacro = Shader.getMacroByName("O3_HAS_ENVMAP_LIGHT");

/**
 * The base class of assets, with reference counting capability.
 */
var RefObject = /*#__PURE__*/function (_EngineObject) {
  _inheritsLoose(RefObject, _EngineObject);

  function RefObject(engine) {
    var _this;

    _this = _EngineObject.call(this, engine) || this;
    _this.isGCIgnored = false;
    _this._refCount = 0;
    _this._destroyed = false;

    engine.resourceManager._addRefObject(_this.instanceId, _assertThisInitialized(_this));

    return _this;
  }
  /**
   * Destroy self.
   * @param force - Whether to force the destruction, if it is fasle, refCount = 0 can be released successfully.
   * @returns Whether the release was successful.
   */


  var _proto = RefObject.prototype;

  _proto.destroy = function destroy(force) {
    if (force === void 0) {
      force = false;
    }

    if (this._destroyed) return true;
    if (!force && this._refCount !== 0) return false;
    var resourceManager = this._engine.resourceManager; // resourceManager maybe null,because engine has destroyed.
    // TODO:the right way to fix this is to ensure destroy all when call engine.destroy,thus don't need to add this project.

    if (resourceManager) {
      resourceManager._deleteAsset(this);

      resourceManager._deleteRefObject(this.instanceId);
    }

    var refCount = this._getRefCount();

    if (refCount > 0) {
      this._addRefCount(-refCount);
    }

    this._engine = null;

    this._onDestroy();

    this._destroyed = true;
    return true;
  }
  /**
   * @internal
   */
  ;

  _proto._getRefCount = function _getRefCount() {
    return this._refCount;
  }
  /**
   * @internal
   * Add reference resource.
   */
  ;

  _proto._addRefCount = function _addRefCount(value) {
    this._refCount += value;
  }
  /**
   * @internal
   * Remove reference resource.
   */
  ;

  _proto._addToResourceManager = function _addToResourceManager(path) {
    this._engine.resourceManager._addAsset(path, this);
  }
  /**
   * Called when the resource is destroyed.
   * Subclasses can override this function.
   */
  ;

  _createClass(RefObject, [{
    key: "refCount",
    get:
    /** Whether to ignore the garbage collection check, if it is true, it will not be affected by ResourceManager.gc(). */

    /**
     * Counted by valid references.
     */
    function get() {
      return this._refCount;
    }
    /**
     * Whether it has been destroyed.
     */

  }, {
    key: "destroyed",
    get: function get() {
      return this._destroyed;
    }
  }]);

  return RefObject;
}(EngineObject);

/**
 * @deprecated
 */
exports.GLCompressedTextureInternalFormat = void 0;

(function (GLCompressedTextureInternalFormat) {
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_4X4_KHR"] = 37808] = "RGBA_ASTC_4X4_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_5X4_KHR"] = 37809] = "RGBA_ASTC_5X4_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_5X5_KHR"] = 37810] = "RGBA_ASTC_5X5_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_6X5_KHR"] = 37811] = "RGBA_ASTC_6X5_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_6X6_KHR"] = 37812] = "RGBA_ASTC_6X6_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_8X5_KHR"] = 37813] = "RGBA_ASTC_8X5_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_8X6_KHR"] = 37814] = "RGBA_ASTC_8X6_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_8X8_KHR"] = 37815] = "RGBA_ASTC_8X8_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_10X5_KHR"] = 37816] = "RGBA_ASTC_10X5_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_10X6_KHR"] = 37817] = "RGBA_ASTC_10X6_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_10X8_KHR"] = 37818] = "RGBA_ASTC_10X8_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_10X10_KHR"] = 37819] = "RGBA_ASTC_10X10_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_12X10_KHR"] = 37820] = "RGBA_ASTC_12X10_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_ASTC_12X12_KHR"] = 37821] = "RGBA_ASTC_12X12_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_4X4_KHR"] = 37840] = "SRGB8_ALPHA8_ASTC_4X4_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_5X4_KHR"] = 37841] = "SRGB8_ALPHA8_ASTC_5X4_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_5X5_KHR"] = 37842] = "SRGB8_ALPHA8_ASTC_5X5_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_6X5_KHR"] = 37843] = "SRGB8_ALPHA8_ASTC_6X5_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_6X6_KHR"] = 37844] = "SRGB8_ALPHA8_ASTC_6X6_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_8X5_KHR"] = 37845] = "SRGB8_ALPHA8_ASTC_8X5_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_8X6_KHR"] = 37846] = "SRGB8_ALPHA8_ASTC_8X6_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_8X8_KHR"] = 37847] = "SRGB8_ALPHA8_ASTC_8X8_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_10X5_KHR"] = 37848] = "SRGB8_ALPHA8_ASTC_10X5_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_10X6_KHR"] = 37849] = "SRGB8_ALPHA8_ASTC_10X6_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_10X8_KHR"] = 37850] = "SRGB8_ALPHA8_ASTC_10X8_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_10X10_KHR"] = 37851] = "SRGB8_ALPHA8_ASTC_10X10_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_12X10_KHR"] = 37852] = "SRGB8_ALPHA8_ASTC_12X10_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ASTC_12X12_KHR"] = 37853] = "SRGB8_ALPHA8_ASTC_12X12_KHR";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGB_ETC1_WEBGL"] = 36196] = "RGB_ETC1_WEBGL";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["R11_EAC"] = 37488] = "R11_EAC";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SIGNED_R11_EAC"] = 37489] = "SIGNED_R11_EAC";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RG11_EAC"] = 37490] = "RG11_EAC";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SIGNED_RG11_EAC"] = 37491] = "SIGNED_RG11_EAC";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGB8_ETC2"] = 37492] = "RGB8_ETC2";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ETC2"] = 37493] = "SRGB8_ETC2";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37494] = "RGB8_PUNCHTHROUGH_ALPHA1_ETC2";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37495] = "SRGB8_PUNCHTHROUGH_ALPHA1_ETC2";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA8_ETC2_EAC"] = 37496] = "RGBA8_ETC2_EAC";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["SRGB8_ALPHA8_ETC2_EAC"] = 37497] = "SRGB8_ALPHA8_ETC2_EAC";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGB_PVRTC_4BPPV1_IMG"] = 35840] = "RGB_PVRTC_4BPPV1_IMG";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGB_PVRTC_2BPPV1_IMG"] = 35841] = "RGB_PVRTC_2BPPV1_IMG";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_PVRTC_4BPPV1_IMG"] = 35842] = "RGBA_PVRTC_4BPPV1_IMG";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_PVRTC_2BPPV1_IMG"] = 35843] = "RGBA_PVRTC_2BPPV1_IMG";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGB_S3TC_DXT1_EXT"] = 33776] = "RGB_S3TC_DXT1_EXT";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_S3TC_DXT1_EXT"] = 33777] = "RGBA_S3TC_DXT1_EXT";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_S3TC_DXT3_EXT"] = 33778] = "RGBA_S3TC_DXT3_EXT";
  GLCompressedTextureInternalFormat[GLCompressedTextureInternalFormat["RGBA_S3TC_DXT5_EXT"] = 33779] = "RGBA_S3TC_DXT5_EXT";
})(exports.GLCompressedTextureInternalFormat || (exports.GLCompressedTextureInternalFormat = {}));

/**
 * The rendering buffer color format enumeration.
 */
exports.RenderBufferColorFormat = void 0;

(function (RenderBufferColorFormat) {
  RenderBufferColorFormat[RenderBufferColorFormat["R8G8B8"] = 0] = "R8G8B8";
  RenderBufferColorFormat[RenderBufferColorFormat["R8G8B8A8"] = 1] = "R8G8B8A8";
  RenderBufferColorFormat[RenderBufferColorFormat["R4G4B4A4"] = 2] = "R4G4B4A4";
  RenderBufferColorFormat[RenderBufferColorFormat["R5G5B5A1"] = 3] = "R5G5B5A1";
  RenderBufferColorFormat[RenderBufferColorFormat["R5G6B5"] = 4] = "R5G6B5";
  RenderBufferColorFormat[RenderBufferColorFormat["Alpha8"] = 5] = "Alpha8";
  RenderBufferColorFormat[RenderBufferColorFormat["R16G16B16A16"] = 6] = "R16G16B16A16";
  RenderBufferColorFormat[RenderBufferColorFormat["R32G32B32A32"] = 7] = "R32G32B32A32";
})(exports.RenderBufferColorFormat || (exports.RenderBufferColorFormat = {}));

/**
 * Render buffer depth format enumeration.
 */
exports.RenderBufferDepthFormat = void 0;

(function (RenderBufferDepthFormat) {
  RenderBufferDepthFormat[RenderBufferDepthFormat["Depth"] = 0] = "Depth";
  RenderBufferDepthFormat[RenderBufferDepthFormat["DepthStencil"] = 1] = "DepthStencil";
  RenderBufferDepthFormat[RenderBufferDepthFormat["Stencil"] = 2] = "Stencil";
  RenderBufferDepthFormat[RenderBufferDepthFormat["Depth16"] = 3] = "Depth16";
  RenderBufferDepthFormat[RenderBufferDepthFormat["Depth24"] = 4] = "Depth24";
  RenderBufferDepthFormat[RenderBufferDepthFormat["Depth32"] = 5] = "Depth32";
  RenderBufferDepthFormat[RenderBufferDepthFormat["Depth24Stencil8"] = 6] = "Depth24Stencil8";
  RenderBufferDepthFormat[RenderBufferDepthFormat["Depth32Stencil8"] = 7] = "Depth32Stencil8";
})(exports.RenderBufferDepthFormat || (exports.RenderBufferDepthFormat = {}));

/**
 * The filter mode of the texture.
 */
exports.TextureFilterMode = void 0;

(function (TextureFilterMode) {
  TextureFilterMode[TextureFilterMode["Point"] = 0] = "Point";
  TextureFilterMode[TextureFilterMode["Bilinear"] = 1] = "Bilinear";
  TextureFilterMode[TextureFilterMode["Trilinear"] = 2] = "Trilinear";
})(exports.TextureFilterMode || (exports.TextureFilterMode = {}));

/**
 * Texture format enumeration.
 */
exports.TextureFormat = void 0;

(function (TextureFormat) {
  TextureFormat[TextureFormat["R8G8B8"] = 0] = "R8G8B8";
  TextureFormat[TextureFormat["R8G8B8A8"] = 1] = "R8G8B8A8";
  TextureFormat[TextureFormat["R4G4B4A4"] = 2] = "R4G4B4A4";
  TextureFormat[TextureFormat["R5G5B5A1"] = 3] = "R5G5B5A1";
  TextureFormat[TextureFormat["R5G6B5"] = 4] = "R5G6B5";
  TextureFormat[TextureFormat["Alpha8"] = 5] = "Alpha8";
  TextureFormat[TextureFormat["R32G32B32A32"] = 6] = "R32G32B32A32";
  TextureFormat[TextureFormat["DXT1"] = 7] = "DXT1";
  TextureFormat[TextureFormat["DXT5"] = 8] = "DXT5";
  TextureFormat[TextureFormat["ETC1_RGB"] = 9] = "ETC1_RGB";
  TextureFormat[TextureFormat["ETC2_RGB"] = 10] = "ETC2_RGB";
  TextureFormat[TextureFormat["ETC2_RGBA5"] = 11] = "ETC2_RGBA5";
  TextureFormat[TextureFormat["ETC2_RGBA8"] = 12] = "ETC2_RGBA8";
  TextureFormat[TextureFormat["PVRTC_RGB2"] = 13] = "PVRTC_RGB2";
  TextureFormat[TextureFormat["PVRTC_RGBA2"] = 14] = "PVRTC_RGBA2";
  TextureFormat[TextureFormat["PVRTC_RGB4"] = 15] = "PVRTC_RGB4";
  TextureFormat[TextureFormat["PVRTC_RGBA4"] = 16] = "PVRTC_RGBA4";
  TextureFormat[TextureFormat["ASTC_4x4"] = 17] = "ASTC_4x4";
  TextureFormat[TextureFormat["ASTC_5x5"] = 18] = "ASTC_5x5";
  TextureFormat[TextureFormat["ASTC_6x6"] = 19] = "ASTC_6x6";
  TextureFormat[TextureFormat["ASTC_8x8"] = 20] = "ASTC_8x8";
  TextureFormat[TextureFormat["ASTC_10x10"] = 21] = "ASTC_10x10";
  TextureFormat[TextureFormat["ASTC_12x12"] = 22] = "ASTC_12x12";
})(exports.TextureFormat || (exports.TextureFormat = {}));

/**
 * Wrapping mode of the texture.
 */
exports.TextureWrapMode = void 0;

(function (TextureWrapMode) {
  TextureWrapMode[TextureWrapMode["Clamp"] = 0] = "Clamp";
  TextureWrapMode[TextureWrapMode["Repeat"] = 1] = "Repeat";
  TextureWrapMode[TextureWrapMode["Mirror"] = 2] = "Mirror";
})(exports.TextureWrapMode || (exports.TextureWrapMode = {}));

/**
 * The base class of texture, contains some common functions of texture-related classes.
 */

var Texture = /*#__PURE__*/function (_RefObject) {
  _inheritsLoose(Texture, _RefObject);

  function Texture() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _RefObject.call.apply(_RefObject, [this].concat(args)) || this;
    _this.name = void 0;
    _this._glTexture = void 0;
    _this._target = void 0;
    _this._formatDetail = void 0;
    _this._width = void 0;
    _this._height = void 0;
    _this._rhi = void 0;
    _this._mipmap = void 0;
    _this._mipmapCount = void 0;
    _this._wrapModeU = void 0;
    _this._wrapModeV = void 0;
    _this._filterMode = void 0;
    _this._anisoLevel = 1;
    return _this;
  }

  /** @internal */
  Texture._isPowerOf2 = function _isPowerOf2(v) {
    return (v & v - 1) === 0;
  }
  /**
   * Get more texture info from TextureFormat.
   * @internal
   */
  ;

  Texture._getFormatDetail = function _getFormatDetail(format, gl, isWebGL2) {
    switch (format) {
      case exports.TextureFormat.R8G8B8:
        return {
          internalFormat: isWebGL2 ? gl.RGB8 : gl.RGB,
          baseFormat: gl.RGB,
          dataType: gl.UNSIGNED_BYTE,
          isCompressed: false
        };

      case exports.TextureFormat.R8G8B8A8:
        return {
          internalFormat: isWebGL2 ? gl.RGBA8 : gl.RGBA,
          baseFormat: gl.RGBA,
          dataType: gl.UNSIGNED_BYTE,
          isCompressed: false
        };

      case exports.TextureFormat.R4G4B4A4:
        return {
          internalFormat: isWebGL2 ? gl.RGBA4 : gl.RGBA,
          baseFormat: gl.RGBA,
          dataType: gl.UNSIGNED_SHORT_4_4_4_4,
          isCompressed: false
        };

      case exports.TextureFormat.R5G5B5A1:
        return {
          internalFormat: isWebGL2 ? gl.RGB5_A1 : gl.RGBA,
          baseFormat: gl.RGBA,
          dataType: gl.UNSIGNED_SHORT_5_5_5_1,
          isCompressed: false
        };

      case exports.TextureFormat.R5G6B5:
        return {
          internalFormat: isWebGL2 ? gl.RGB565 : gl.RGB,
          baseFormat: gl.RGB,
          dataType: gl.UNSIGNED_SHORT_5_6_5,
          isCompressed: false
        };

      case exports.TextureFormat.Alpha8:
        return {
          internalFormat: gl.ALPHA,
          baseFormat: gl.ALPHA,
          dataType: gl.UNSIGNED_BYTE,
          isCompressed: false
        };

      case exports.TextureFormat.R32G32B32A32:
        return {
          internalFormat: gl.RGBA32F,
          baseFormat: gl.RGBA,
          dataType: gl.FLOAT,
          isCompressed: false
        };

      case exports.TextureFormat.DXT1:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGB_S3TC_DXT1_EXT,
          isCompressed: true
        };

      case exports.TextureFormat.DXT5:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGBA_S3TC_DXT5_EXT,
          isCompressed: true
        };

      case exports.TextureFormat.ETC1_RGB:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGB_ETC1_WEBGL,
          isCompressed: true
        };

      case exports.TextureFormat.ETC2_RGB:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGB8_ETC2,
          isCompressed: true
        };

      case exports.TextureFormat.ETC2_RGBA5:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGB8_PUNCHTHROUGH_ALPHA1_ETC2,
          isCompressed: true
        };

      case exports.TextureFormat.ETC2_RGBA8:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGBA8_ETC2_EAC,
          isCompressed: true
        };

      case exports.TextureFormat.PVRTC_RGB2:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGB_PVRTC_2BPPV1_IMG,
          isCompressed: true
        };

      case exports.TextureFormat.PVRTC_RGBA2:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGBA_PVRTC_2BPPV1_IMG,
          isCompressed: true
        };

      case exports.TextureFormat.PVRTC_RGB4:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGB_PVRTC_4BPPV1_IMG,
          isCompressed: true
        };

      case exports.TextureFormat.PVRTC_RGBA4:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGBA_PVRTC_4BPPV1_IMG,
          isCompressed: true
        };

      case exports.TextureFormat.ASTC_4x4:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGBA_ASTC_4X4_KHR,
          isCompressed: true
        };

      case exports.TextureFormat.ASTC_5x5:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGBA_ASTC_5X5_KHR,
          isCompressed: true
        };

      case exports.TextureFormat.ASTC_6x6:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGBA_ASTC_6X6_KHR,
          isCompressed: true
        };

      case exports.TextureFormat.ASTC_8x8:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGBA_ASTC_8X8_KHR,
          isCompressed: true
        };

      case exports.TextureFormat.ASTC_10x10:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGBA_ASTC_10X10_KHR,
          isCompressed: true
        };

      case exports.TextureFormat.ASTC_12x12:
        return {
          internalFormat: exports.GLCompressedTextureInternalFormat.RGBA_ASTC_12X12_KHR,
          isCompressed: true
        };

      default:
        throw new Error("this TextureFormat is not supported in Oasis Engine: " + format);
    }
  }
  /**
   * @internal
   */
  ;

  Texture._getRenderBufferColorFormatDetail = function _getRenderBufferColorFormatDetail(format, gl, isWebGL2) {
    switch (format) {
      case exports.RenderBufferColorFormat.R8G8B8:
        return {
          internalFormat: isWebGL2 ? gl.RGB8 : gl.RGB,
          baseFormat: gl.RGB,
          dataType: gl.UNSIGNED_BYTE,
          isCompressed: false
        };

      case exports.RenderBufferColorFormat.R8G8B8A8:
        return {
          internalFormat: isWebGL2 ? gl.RGBA8 : gl.RGBA,
          baseFormat: gl.RGBA,
          dataType: gl.UNSIGNED_BYTE,
          isCompressed: false
        };

      case exports.RenderBufferColorFormat.R4G4B4A4:
        return {
          internalFormat: isWebGL2 ? gl.RGBA4 : gl.RGBA,
          baseFormat: gl.RGBA,
          dataType: gl.UNSIGNED_SHORT_4_4_4_4,
          isCompressed: false
        };

      case exports.RenderBufferColorFormat.R5G5B5A1:
        return {
          internalFormat: isWebGL2 ? gl.RGB5_A1 : gl.RGBA,
          baseFormat: gl.RGBA,
          dataType: gl.UNSIGNED_SHORT_5_5_5_1,
          isCompressed: false
        };

      case exports.RenderBufferColorFormat.R5G6B5:
        return {
          internalFormat: isWebGL2 ? gl.RGB565 : gl.RGB,
          baseFormat: gl.RGB,
          dataType: gl.UNSIGNED_SHORT_5_6_5,
          isCompressed: false
        };

      case exports.RenderBufferColorFormat.Alpha8:
        return {
          internalFormat: gl.ALPHA,
          baseFormat: gl.ALPHA,
          dataType: gl.UNSIGNED_BYTE,
          isCompressed: false
        };

      case exports.RenderBufferColorFormat.R16G16B16A16:
        return {
          internalFormat: gl.RGBA16F,
          baseFormat: gl.RGBA,
          dataType: gl.HALF_FLOAT,
          isCompressed: false
        };

      case exports.RenderBufferColorFormat.R32G32B32A32:
        return {
          internalFormat: gl.RGBA32F,
          baseFormat: gl.RGBA,
          dataType: gl.FLOAT,
          isCompressed: false
        };

      default:
        throw new Error("this RenderBufferColorFormat is not supported in Oasis Engine: " + format);
    }
  }
  /**
   * @internal
   * @remarks In WebGL 1, internalformat must be the same as baseFormat when call texImage2D.
   */
  ;

  Texture._getRenderBufferDepthFormatDetail = function _getRenderBufferDepthFormatDetail(format, gl, isWebGL2) {
    switch (format) {
      case exports.RenderBufferDepthFormat.Depth:
        return {
          internalFormat: isWebGL2 ? gl.DEPTH_COMPONENT32F : gl.DEPTH_COMPONENT16,
          baseFormat: gl.DEPTH_COMPONENT,
          dataType: isWebGL2 ? gl.FLOAT : gl.UNSIGNED_INT,
          isCompressed: false,
          attachment: gl.DEPTH_ATTACHMENT
        };

      case exports.RenderBufferDepthFormat.DepthStencil:
        return {
          internalFormat: isWebGL2 ? gl.DEPTH24_STENCIL8 : gl.DEPTH_STENCIL,
          baseFormat: gl.DEPTH_STENCIL,
          dataType: gl.UNSIGNED_INT_24_8,
          isCompressed: false,
          attachment: gl.DEPTH_STENCIL_ATTACHMENT
        };

      case exports.RenderBufferDepthFormat.Stencil:
        return {
          internalFormat: gl.STENCIL_INDEX8,
          baseFormat: gl.STENCIL_ATTACHMENT,
          dataType: gl.UNSIGNED_BYTE,
          isCompressed: false,
          attachment: gl.STENCIL_ATTACHMENT
        };

      case exports.RenderBufferDepthFormat.Depth16:
        return {
          internalFormat: isWebGL2 ? gl.DEPTH_COMPONENT16 : gl.DEPTH_COMPONENT16,
          baseFormat: gl.DEPTH_COMPONENT,
          dataType: gl.UNSIGNED_INT,
          isCompressed: false,
          attachment: gl.DEPTH_ATTACHMENT
        };

      case exports.RenderBufferDepthFormat.Depth24:
        return {
          internalFormat: gl.DEPTH_COMPONENT24,
          baseFormat: gl.DEPTH_COMPONENT,
          dataType: gl.UNSIGNED_INT,
          isCompressed: false,
          attachment: gl.DEPTH_ATTACHMENT
        };

      case exports.RenderBufferDepthFormat.Depth32:
        return {
          internalFormat: gl.DEPTH_COMPONENT32F,
          baseFormat: gl.DEPTH_COMPONENT,
          dataType: gl.FLOAT,
          isCompressed: false,
          attachment: gl.DEPTH_ATTACHMENT
        };

      case exports.RenderBufferDepthFormat.Depth24Stencil8:
        return {
          internalFormat: isWebGL2 ? gl.DEPTH24_STENCIL8 : gl.DEPTH_STENCIL,
          baseFormat: gl.DEPTH_STENCIL,
          dataType: gl.UNSIGNED_INT_24_8,
          isCompressed: false,
          attachment: gl.DEPTH_STENCIL_ATTACHMENT
        };

      case exports.RenderBufferDepthFormat.Depth32Stencil8:
        return {
          internalFormat: gl.DEPTH32F_STENCIL8,
          baseFormat: gl.DEPTH_STENCIL,
          dataType: gl.FLOAT_32_UNSIGNED_INT_24_8_REV,
          isCompressed: false,
          attachment: gl.DEPTH_STENCIL_ATTACHMENT
        };

      default:
        throw new Error("this RenderBufferDepthFormat is not supported in Oasis Engine: " + format);
    }
  }
  /**
   * Check whether the corresponding texture format is supported.
   * @internal
   */
  ;

  Texture._supportTextureFormat = function _supportTextureFormat(format, rhi) {
    var isSupported = true;

    switch (format) {
      case exports.TextureFormat.R32G32B32A32:
        {
          if (!rhi.canIUse(exports.GLCapabilityType.textureFloat)) {
            isSupported = false;
          }
        }
        break;
    }

    return isSupported;
  }
  /**
   * @internal
   */
  ;

  Texture._supportRenderBufferColorFormat = function _supportRenderBufferColorFormat(format, rhi) {
    var isSupported = true;

    switch (format) {
      case exports.RenderBufferColorFormat.R32G32B32A32:
        {
          if (!rhi.canIUse(exports.GLCapabilityType.colorBufferFloat) || !rhi.canIUse(exports.GLCapabilityType.textureFloat)) {
            isSupported = false;
          }
        }
        break;

      case exports.RenderBufferColorFormat.R16G16B16A16:
        {
          if (!rhi.canIUse(exports.GLCapabilityType.colorBufferHalfFloat) || !rhi.canIUse(exports.GLCapabilityType.textureHalfFloat)) {
            isSupported = false;
          }
        }
        break;
    }

    return isSupported;
  }
  /**
   * @internal
   */
  ;

  Texture._supportRenderBufferDepthFormat = function _supportRenderBufferDepthFormat(format, rhi, isTexture) {
    var isWebGL2 = rhi.isWebGL2;
    var isSupported = true;

    if (isTexture && !rhi.canIUse(exports.GLCapabilityType.depthTexture)) {
      return false;
    }

    switch (format) {
      case exports.RenderBufferDepthFormat.Stencil:
        {
          isSupported = false;
        }
        break;

      case exports.RenderBufferDepthFormat.Depth24:
      case exports.RenderBufferDepthFormat.Depth32:
      case exports.RenderBufferDepthFormat.Depth32Stencil8:
        {
          if (!isWebGL2) {
            isSupported = false;
          }
        }
        break;
    }

    return isSupported;
  };

  var _proto = Texture.prototype;

  /**
   * Generate multi-level textures based on the 0th level data.
   */
  _proto.generateMipmaps = function generateMipmaps() {
    if (!this._mipmap) return;
    var gl = this._rhi.gl;

    this._bind();

    gl.generateMipmap(this._target);

    this._unbind();
  }
  /**
   * @override
   */
  ;

  _proto._onDestroy = function _onDestroy() {
    var gl = this._rhi.gl;
    gl.deleteTexture(this._glTexture);
    this._glTexture = null;
    this._formatDetail = null; // TODO: delete

    this._rhi = null;
  }
  /** @internal */
  ;

  _proto._bind = function _bind() {
    this._rhi.bindTexture(this._target, this._glTexture);
  }
  /** @internal */
  ;

  _proto._unbind = function _unbind() {
    this._rhi.bindTexture(this._target, null);
  }
  /**
   * Get the pixel color buffer according to the specified area.
   * @internal
   * @param face - If it is a cube texture, you can choose which surface to read
   * @param x - X coordinate of area start
   * @param y - Y coordinate of area start
   * @param width - Area width
   * @param height - Area height
   * @param out - Color buffer
   */
  ;

  _proto._getPixelBuffer = function _getPixelBuffer(face, x, y, width, height, out) {
    var gl = this._rhi.gl;
    var _this$_formatDetail = this._formatDetail,
        baseFormat = _this$_formatDetail.baseFormat,
        dataType = _this$_formatDetail.dataType;

    if (!Texture._readFrameBuffer) {
      Texture._readFrameBuffer = gl.createFramebuffer();
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, Texture._readFrameBuffer);

    if (face != null) {
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_CUBE_MAP_POSITIVE_X + face, this._glTexture, 0);
    } else {
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._glTexture, 0);
    }

    gl.readPixels(x, y, width, height, baseFormat, dataType, out);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  /**
   * Pre-development mipmapping GPU memory.
   * @internal
   */
  ;

  _proto._initMipmap = function _initMipmap(isCube) {
    var gl = this._rhi.gl;
    var isWebGL2 = this._rhi.isWebGL2;
    var _this$_formatDetail2 = this._formatDetail,
        internalFormat = _this$_formatDetail2.internalFormat,
        baseFormat = _this$_formatDetail2.baseFormat,
        dataType = _this$_formatDetail2.dataType;

    this._bind();

    if (isWebGL2) {
      gl.texStorage2D(this._target, this._mipmapCount, internalFormat, this._width, this._height);
    } else {
      // In WebGL 1, internalformat must be the same as baseFormat
      if (baseFormat !== internalFormat) {
        internalFormat = baseFormat;
      }

      if (!isCube) {
        for (var i = 0; i < this._mipmapCount; i++) {
          var width = Math.max(1, this._width >> i);
          var height = Math.max(1, this._height >> i);
          gl.texImage2D(this._target, i, internalFormat, width, height, 0, baseFormat, dataType, null);
        }
      } else {
        for (var _i = 0; _i < this._mipmapCount; _i++) {
          var size = Math.max(1, this._width >> _i);

          for (var faceIndex = 0; faceIndex < 6; faceIndex++) {
            gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex, _i, internalFormat, size, size, 0, baseFormat, dataType, null);
          }
        }
      }
    }

    this._unbind();
  }
  /**
   * Get the maximum mip level of the corresponding size:rounding down
   * @remarks http://download.nvidia.com/developer/Papers/2005/NP2_Mipmapping/NP2_Mipmap_Creation.pdf
   * @internal
   */
  ;

  _proto._getMaxMiplevel = function _getMaxMiplevel(size) {
    return Math.floor(Math.log2(size));
  }
  /**
   * @internal
   */
  ;

  _proto._getMipmapCount = function _getMipmapCount() {
    return this._mipmap ? Math.floor(Math.log2(Math.max(this._width, this._height))) + 1 : 1;
  }
  /**
   * @internal
   */
  ;

  _proto._setWrapMode = function _setWrapMode(value, pname) {
    var gl = this._rhi.gl;
    var isWebGL2 = this._rhi.isWebGL2;

    if (!isWebGL2 && value !== exports.TextureWrapMode.Clamp && (!Texture._isPowerOf2(this._width) || !Texture._isPowerOf2(this._height))) {
      Logger.warn("non-power-2 texture is not supported for REPEAT or MIRRORED_REPEAT in WebGL1,and has automatically downgraded to CLAMP_TO_EDGE");
      value = exports.TextureWrapMode.Clamp;
    }

    switch (value) {
      case exports.TextureWrapMode.Clamp:
        gl.texParameteri(this._target, pname, gl.CLAMP_TO_EDGE);
        break;

      case exports.TextureWrapMode.Repeat:
        gl.texParameteri(this._target, pname, gl.REPEAT);
        break;

      case exports.TextureWrapMode.Mirror:
        gl.texParameteri(this._target, pname, gl.MIRRORED_REPEAT);
        break;
    }
  };

  _createClass(Texture, [{
    key: "width",
    get:
    /**
     * The width of the texture.
     */
    function get() {
      return this._width;
    }
    /**
     * The height of the texture.
     */

  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
    /**
     * Wrapping mode for texture coordinate S.
     */

  }, {
    key: "wrapModeU",
    get: function get() {
      return this._wrapModeU;
    },
    set: function set(value) {
      if (value === this._wrapModeU) return;
      var gl = this._rhi.gl;
      this._wrapModeU = value;

      this._bind();

      this._setWrapMode(value, gl.TEXTURE_WRAP_S);

      this._unbind();
    }
    /**
     * Wrapping mode for texture coordinate T.
     */

  }, {
    key: "wrapModeV",
    get: function get() {
      return this._wrapModeV;
    },
    set: function set(value) {
      if (value === this._wrapModeV) return;
      var gl = this._rhi.gl;
      this._wrapModeV = value;

      this._bind();

      this._setWrapMode(value, gl.TEXTURE_WRAP_T);

      this._unbind();
    }
    /**
     * Texture mipmapping count.
     */

  }, {
    key: "mipmapCount",
    get: function get() {
      return this._mipmapCount;
    }
    /**
     * Filter mode for texture.
     */

  }, {
    key: "filterMode",
    get: function get() {
      return this._filterMode;
    },
    set: function set(value) {
      if (value === this._filterMode) return;
      var gl = this._rhi.gl;
      this._filterMode = value;

      this._bind();

      switch (value) {
        case exports.TextureFilterMode.Point:
          gl.texParameteri(this._target, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
          gl.texParameteri(this._target, gl.TEXTURE_MIN_FILTER, this._mipmap ? gl.NEAREST_MIPMAP_NEAREST : gl.NEAREST);
          break;

        case exports.TextureFilterMode.Bilinear:
          gl.texParameteri(this._target, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(this._target, gl.TEXTURE_MIN_FILTER, this._mipmap ? gl.LINEAR_MIPMAP_NEAREST : gl.LINEAR);
          break;

        case exports.TextureFilterMode.Trilinear:
          gl.texParameteri(this._target, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(this._target, gl.TEXTURE_MIN_FILTER, this._mipmap ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR);
          break;
      }

      this._unbind();
    }
    /**
     * Anisotropic level for texture.
     */

  }, {
    key: "anisoLevel",
    get: function get() {
      return this._anisoLevel;
    },
    set: function set(value) {
      var max = this._rhi.capability.maxAnisoLevel;

      if (value > max) {
        Logger.warn("anisoLevel:" + value + ", exceeds the limit and is automatically downgraded to:" + max);
        value = max;
      }

      if (value < 1) {
        Logger.warn("anisoLevel:" + value + ", must be greater than 0, and is automatically downgraded to 1");
        value = 1;
      }

      if (value === this._anisoLevel) return;
      var gl = this._rhi.gl;
      this._anisoLevel = value;

      this._bind();

      gl.texParameterf(this._target, gl.TEXTURE_MAX_ANISOTROPY_EXT, value);

      this._unbind();
    }
  }]);

  return Texture;
}(RefObject);
Texture._readFrameBuffer = null;

/**
 * Shader data collection,Correspondence includes shader properties data and macros data.
 */
var ShaderData = /*#__PURE__*/function () {
  /** @internal */

  /** @internal */

  /** @internal */

  /**
   * @internal
   */
  function ShaderData(group) {
    this._group = void 0;
    this._properties = Object.create(null);
    this._macroCollection = new ShaderMacroCollection();
    this._variableMacros = Object.create(null);
    this._refCount = 0;
    this._group = group;
  }
  /**
   * Get float by shader property name.
   * @param propertyName - Shader property name
   * @returns Float
   */


  var _proto = ShaderData.prototype;

  _proto.getFloat = function getFloat(property) {
    return this._getData(property);
  }
  /**
   * Set float by shader property name.
   * @remarks Corresponding float shader property type.
   * @param propertyName - Shader property name
   * @param value - Float
   */
  ;

  _proto.setFloat = function setFloat(property, value) {
    this._setData(property, value);
  }
  /**
   * Get int by shader property name.
   * @param propertyName - Shader property name
   * @returns Int
   */
  ;

  _proto.getInt = function getInt(property) {
    return this._getData(property);
  }
  /**
   * Set int by shader property name.
   * @remarks Correspondence includes int and bool shader property type.
   * @param propertyName - Shader property name
   * @param value - Int
   */
  ;

  _proto.setInt = function setInt(property, value) {
    this._setData(property, value);
  }
  /**
   * Get float array by shader property name.
   * @param propertyName - Shader property name
   * @returns Float array
   */
  ;

  _proto.getFloatArray = function getFloatArray(property) {
    return this._getData(property);
  }
  /**
   * Set float array by shader property name.
   * @remarks Correspondence includes float array、vec2 array、vec3 array、vec4 array and matrix array shader property type.
   * @param propertyName - Shader property name
   * @param value - Float array
   */
  ;

  _proto.setFloatArray = function setFloatArray(property, value) {
    this._setData(property, value);
  }
  /**
   * Get int array by shader property name.
   * @param propertyName - Shader property name
   * @returns Int Array
   */
  ;

  _proto.getIntArray = function getIntArray(property) {
    return this._getData(property);
  }
  /**
   * Set int array by shader property name.
   * @remarks Correspondence includes bool array、int array、bvec2 array、bvec3 array、bvec4 array、ivec2 array、ivec3 array and ivec4 array shader property type.
   * @param propertyName - Shader property name
   * @param value - Int Array
   */
  ;

  _proto.setIntArray = function setIntArray(property, value) {
    this._setData(property, value);
  }
  /**
   * Get two-dimensional from shader property name.
   * @param propertyName - Shader property name
   * @returns Two-dimensional vector
   */
  ;

  _proto.getVector2 = function getVector2(property) {
    return this._getData(property);
  }
  /**
   * Set two-dimensional vector from shader property name.
   * @remarks Correspondence includes vec2、ivec2 and bvec2 shader property type.
   * @param propertyName - Shader property name
   * @param value - Two-dimensional vector
   */
  ;

  _proto.setVector2 = function setVector2(property, value) {
    this._setData(property, value);
  }
  /**
   * Get vector3 by shader property name.
   * @param propertyName - Shader property name
   * @returns Three-dimensional vector
   */
  ;

  _proto.getVector3 = function getVector3(property) {
    return this._getData(property);
  }
  /**
   * Set three dimensional vector by shader property name.
   * @remarks Correspondence includes vec3、ivec3 and bvec3 shader property type.
   * @param propertyName - Shader property name
   * @param value - Three-dimensional vector
   */
  ;

  _proto.setVector3 = function setVector3(property, value) {
    this._setData(property, value);
  }
  /**
   * Get vector4 by shader property name.
   * @param propertyName - Shader property name
   * @returns Four-dimensional vector
   */
  ;

  _proto.getVector4 = function getVector4(property) {
    return this._getData(property);
  }
  /**
   * Set four-dimensional vector by shader property name.
   * @remarks Correspondence includes vec4、ivec4 and bvec4 shader property type.
   * @param propertyName - Shader property name
   * @param value - Four-dimensional vector
   */
  ;

  _proto.setVector4 = function setVector4(property, value) {
    this._setData(property, value);
  }
  /**
   * Get matrix by shader property name.
   * @param propertyName - Shader property name
   * @returns Matrix
   */
  ;

  _proto.getMatrix = function getMatrix(property) {
    return this._getData(property);
  }
  /**
   * Set matrix by shader property name.
   * @remarks Correspondence includes matrix shader property type.
   * @param propertyName - Shader property name
   * @param value - Matrix
   */
  ;

  _proto.setMatrix = function setMatrix(property, value) {
    this._setData(property, value);
  }
  /**
   * Get color by shader property name.
   * @param propertyName - Shader property name
   * @returns Color
   */
  ;

  _proto.getColor = function getColor(property) {
    return this._getData(property);
  }
  /**
   * Set color by shader property name.
   * @remarks Correspondence includes vec4 shader property type.
   * @param propertyName - Shader property name
   * @param value - Color
   */
  ;

  _proto.setColor = function setColor(property, value) {
    this._setData(property, value);
  }
  /**
   * Get texture by shader property name.
   * @param propertyName - Shader property name
   * @returns Texture
   */
  ;

  _proto.getTexture = function getTexture(property) {
    return this._getData(property);
  }
  /**
   * Set texture by shader property name.
   * @param propertyName - Shader property name
   * @param value - Texture
   */
  ;

  _proto.setTexture = function setTexture(property, value) {
    if (this._getRefCount() > 0) {
      var lastValue = this._getData(property);

      lastValue && lastValue._addRefCount(-1);
      value && value._addRefCount(1);
    }

    this._setData(property, value);
  }
  /**
   * Get texture array by shader property name.
   * @param propertyName - Shader property name
   * @returns Texture array
   */
  ;

  _proto.getTextureArray = function getTextureArray(property) {
    return this._getData(property);
  }
  /**
   * Set texture array by shader property name.
   * @param propertyName - Shader property name
   * @param value - Texture array
   */
  ;

  _proto.setTextureArray = function setTextureArray(property, value) {
    if (this._getRefCount() > 0) {
      var lastValue = this._getData(property);

      if (lastValue) {
        for (var i = 0, n = lastValue.length; i < n; i++) {
          lastValue[i]._addRefCount(-1);
        }
      }

      if (value) {
        for (var _i = 0, _n = value.length; _i < _n; _i++) {
          value[_i]._addRefCount(1);
        }
      }
    }

    this._setData(property, value);
  }
  /**
   * Enable macro.
   * @param macroName - Macro name
   */
  ;

  _proto.enableMacro = function enableMacro(macro, value) {
    if (value === void 0) {
      value = null;
    }

    if (value) {
      this._enableVariableMacro(macro, value);
    } else {
      if (typeof macro === "string") {
        macro = Shader.getMacroByName(macro);
      }

      this._macroCollection.enable(macro);
    }
  }
  /**
   * Disable macro
   * @param macroName - Macro name
   */
  ;

  _proto.disableMacro = function disableMacro(macro) {
    if (typeof macro === "string") {
      // @todo: should optimization variable macros disable performance
      var variableValue = this._variableMacros[macro];

      if (variableValue) {
        this._disableVariableMacro(macro, variableValue);
      } else {
        macro = Shader.getMacroByName(macro);

        this._macroCollection.disable(macro);
      }
    } else {
      this._macroCollection.disable(macro);
    }
  };

  _proto.clone = function clone() {
    var shaderData = new ShaderData(this._group);
    this.cloneTo(shaderData);
    return shaderData;
  };

  _proto.cloneTo = function cloneTo(target) {
    CloneManager.deepCloneObject(this._macroCollection, target._macroCollection);

    _extends(target._variableMacros, this._variableMacros);

    var properties = this._properties;
    var targetProperties = target._properties;
    var keys = Object.keys(properties);

    for (var i = 0, n = keys.length; i < n; i++) {
      var k = keys[i];
      var _property = properties[k];

      if (_property != null) {
        if (typeof _property === "number") {
          targetProperties[k] = _property;
        } else if (_property instanceof Texture) {
          targetProperties[k] = _property;
        } else if (_property instanceof Array || _property instanceof Float32Array || _property instanceof Int32Array) {
          targetProperties[k] = _property.slice();
        } else {
          targetProperties[k] = _property.clone();
        }
      } else {
        targetProperties[k] = _property;
      }
    }
  }
  /**
   * @internal
   */
  ;

  _proto._getData = function _getData(property) {
    if (typeof property === "string") {
      property = Shader.getPropertyByName(property);
    }

    return this._properties[property._uniqueId];
  }
  /**
   * @internal
   */
  ;

  _proto._setData = function _setData(property, value) {
    if (typeof property === "string") {
      property = Shader.getPropertyByName(property);
    }

    if (property._group !== this._group) {
      if (property._group === undefined) {
        property._group = this._group;
      } else {
        throw "This property has been used as " + ShaderDataGroup[property._group] + " property.";
      }
    }

    this._properties[property._uniqueId] = value;
  }
  /**
   * @internal
   */
  ;

  _proto._getRefCount = function _getRefCount() {
    return this._refCount;
  }
  /**
   * @internal
   */
  ;

  _proto._addRefCount = function _addRefCount(value) {
    this._refCount += value;
    var properties = this._properties;

    for (var k in properties) {
      var _property2 = properties[k]; // @todo: Seperate array to speed performace.

      if (_property2 && _property2 instanceof Texture) {
        _property2._addRefCount(value);
      }
    }
  };

  _proto._enableVariableMacro = function _enableVariableMacro(name, value) {
    var variableMacro = this._variableMacros;
    var variableValue = variableMacro[name];

    if (variableValue !== value) {
      variableValue && this._disableVariableMacro(name, variableValue);

      var _macro = Shader.getMacroByName(name + " " + value);

      this._macroCollection.enable(_macro);

      variableMacro[name] = value;
    }
  };

  _proto._disableVariableMacro = function _disableVariableMacro(name, value) {
    var oldMacro = Shader.getMacroByName(name + " " + value);

    this._macroCollection.disable(oldMacro);

    delete this._variableMacros[name];
  };

  return ShaderData;
}();

/**
 * Scene.
 */

var Scene = /*#__PURE__*/function (_EngineObject) {
  _inheritsLoose(Scene, _EngineObject);

  /**
   * Create scene.
   * @param engine - Engine
   * @param name - Name
   */
  function Scene(engine, name) {
    var _this;

    _this = _EngineObject.call(this, engine) || this;
    _this.shaderData = new ShaderData(ShaderDataGroup.Scene);
    _this.name = void 0;
    _this.clipPlanes = [];
    _this._activeCameras = [];
    _this._isActiveInEngine = false;
    _this._destroyed = false;
    _this._rootEntities = [];
    _this._resolution = new math.Vector2();
    _this.features = [];
    _this.name = name || "";
    var shaderData = _this.shaderData;
    Scene.sceneFeatureManager.addObject(_assertThisInitialized(_this));

    shaderData._addRefCount(1); // @todo: this is deviec macro,should add when compile shader.


    if (_this._engine._hardwareRenderer.canIUse(exports.GLCapabilityType.shaderTextureLod)) {
      shaderData.enableMacro("HAS_TEX_LOD");
    }

    if (_this._engine._hardwareRenderer.canIUse(exports.GLCapabilityType.standardDerivatives)) {
      shaderData.enableMacro("HAS_DERIVATIVES");
    }

    return _this;
  }
  /**
   * Create root entity.
   * @param name - Entity name
   * @returns Entity
   */


  var _proto = Scene.prototype;

  _proto.createRootEntity = function createRootEntity(name) {
    var entity = new Entity(this._engine, name);
    this.addRootEntity(entity);
    return entity;
  }
  /**
   * Append an entity.
   * @param entity - The root entity to add
   */
  ;

  _proto.addRootEntity = function addRootEntity(entity) {
    var isRoot = entity._isRoot; // let entity become root

    if (!isRoot) {
      entity._isRoot = true;

      entity._removeFromParent();
    } // add or remove from scene's rootEntities


    var oldScene = entity._scene;

    if (oldScene !== this) {
      if (oldScene && isRoot) {
        oldScene._removeEntity(entity);
      }

      this._rootEntities.push(entity);

      Entity._traverseSetOwnerScene(entity, this);
    } else if (!isRoot) {
      this._rootEntities.push(entity);
    } // process entity active/inActive


    if (this._isActiveInEngine) {
      !entity._isActiveInHierarchy && entity._isActive && entity._processActive();
    } else {
      entity._isActiveInHierarchy && entity._processInActive();
    }
  }
  /**
   * Remove an entity.
   * @param entity - The root entity to remove
   */
  ;

  _proto.removeRootEntity = function removeRootEntity(entity) {
    if (entity._isRoot && entity._scene == this) {
      this._removeEntity(entity);

      this._isActiveInEngine && entity._processInActive();

      Entity._traverseSetOwnerScene(entity, null);
    }
  }
  /**
   * Get root entity from index.
   * @param index - Index
   * @returns Entity
   */
  ;

  _proto.getRootEntity = function getRootEntity(index) {
    if (index === void 0) {
      index = 0;
    }

    return this._rootEntities[index];
  }
  /**
   * Find entity globally by name.
   * @param name - Entity name
   * @returns Entity
   */
  ;

  _proto.findEntityByName = function findEntityByName(name) {
    var children = this._rootEntities;

    for (var i = children.length - 1; i >= 0; i--) {
      var child = children[i];

      if (child.name === name) {
        return child;
      }
    }

    for (var _i = children.length - 1; _i >= 0; _i--) {
      var _child = children[_i];

      var entity = _child.findByName(name);

      if (entity) {
        return entity;
      }
    }

    return null;
  }
  /**
   * Find entity globally by name,use ‘/’ symbol as a path separator.
   * @param path - Entity's path
   * @returns Entity
   */
  ;

  _proto.findEntityByPath = function findEntityByPath(path) {
    var splits = path.split("/").filter(Boolean);

    for (var i = 0, n = this.rootEntitiesCount; i < n; i++) {
      var findEntity = this.getRootEntity(i);
      if (findEntity.name != splits[0]) continue;

      for (var j = 1, m = splits.length; j < m; ++j) {
        findEntity = Entity._findChildByName(findEntity, splits[j]);
        if (!findEntity) break;
      }

      return findEntity;
    }

    return null;
  }
  /**
   * Destroy this scene.
   */
  ;

  _proto.destroy = function destroy() {
    if (this._destroyed) {
      return;
    }

    this._isActiveInEngine && (this._engine.sceneManager.activeScene = null);
    Scene.sceneFeatureManager.callFeatureMethod(this, "destroy", [this]);

    for (var i = 0, n = this.rootEntitiesCount; i < n; i++) {
      this._rootEntities[i].destroy();
    }

    this._rootEntities.length = 0;
    this._activeCameras.length = 0;
    Scene.sceneFeatureManager._objects = [];

    this.shaderData._addRefCount(-1);

    this._destroyed = true;
  }
  /**
   * Append a camera to this scene.
   * @param camera  - Camera
   */
  ;

  _proto.attachRenderCamera = function attachRenderCamera(camera) {
    var index = this._activeCameras.indexOf(camera);

    if (index === -1) {
      this._activeCameras.push(camera);
    } else {
      Logger.warn("Camera already attached.");
    }
  }
  /**
   * Remove a camera from this scene.
   * @param camera - Camera
   */
  ;

  _proto.detachRenderCamera = function detachRenderCamera(camera) {
    var index = this._activeCameras.indexOf(camera);

    if (index !== -1) {
      this._activeCameras.splice(index, 1);
    }
  }
  /**
   * @internal
   */
  ;

  _proto._processActive = function _processActive(active) {
    this._isActiveInEngine = active;
    var rootEntities = this._rootEntities;

    for (var i = rootEntities.length - 1; i >= 0; i--) {
      var entity = rootEntities[i];

      if (entity._isActive) {
        active ? entity._processActive() : entity._processInActive();
      }
    }
  }
  /**
   * @internal
   */
  ;

  _proto._updateShaderData = function _updateShaderData() {
    var lightMgr = this.findFeature(LightFeature);
    var shaderData = this.shaderData;
    var canvas = this.engine.canvas;
    var resolution = this._resolution;

    lightMgr._updateShaderData(shaderData);

    resolution.setValue(canvas.width, canvas.height);
    shaderData.setVector2(Scene._resolutionProperty, resolution);
  };

  _proto._removeEntity = function _removeEntity(entity) {
    var oldRootEntities = this._rootEntities;
    oldRootEntities.splice(oldRootEntities.indexOf(entity), 1);
  } //-----------------------------------------@deprecated-----------------------------------
  ;

  Scene.registerFeature = function registerFeature(Feature) {
    Scene.sceneFeatureManager.registerFeature(Feature);
  };

  _proto.findFeature = function findFeature(Feature) {
    return Scene.sceneFeatureManager.findFeature(this, Feature);
  };

  /**
   * Raycast.
   * @deprecated
   * @param ray
   */
  _proto.raycast = function raycast(ray, outPos, tag) {};

  _createClass(Scene, [{
    key: "engine",
    get:
    /** scene-related shaderdata  */

    /** scene name */

    /**
     * @private
     * @deprecated
     * @todo: Migrate to camera
     * Clipping surface, plane equations. The fragments below the clipping plane will be discard.
     * @example
     * ```ts
     * scene.clipPlanes = [[0,1,0,0]];
     * ```
     * */

    /**
     * Get the scene's engine.
     * @readonly
     */
    function get() {
      return this._engine;
    }
    /**
     * Count of root entities.
     * @readonly
     */

  }, {
    key: "rootEntitiesCount",
    get: function get() {
      return this._rootEntities.length;
    }
    /**
     * Root entity collection.
     * @readonly
     */

  }, {
    key: "rootEntities",
    get: function get() {
      return this._rootEntities;
    }
    /**
     * Whether it's destroyed.
     * @readonly
     */

  }, {
    key: "destroyed",
    get: function get() {
      return this._destroyed;
    }
  }]);

  return Scene;
}(EngineObject);
Scene._resolutionProperty = Shader.getPropertyByName("u_resolution");
Scene.sceneFeatureManager = new FeatureManager();

/**
 * Scene manager.
 */
var SceneManager = /*#__PURE__*/function () {
  /**
   * @internal
   */
  function SceneManager(engine) {
    this.engine = engine;
    this._activeScene = void 0;
  }
  /**
   * Load and activate scene.
   * @param url - the path of the scene
   * @param destroyOldScene - whether to destroy old scene information
   * @returns scene promise
   */


  var _proto = SceneManager.prototype;

  _proto.loadScene = function loadScene(url, destroyOldScene) {
    var _this = this;

    if (destroyOldScene === void 0) {
      destroyOldScene = true;
    }

    var scenePromise = this.engine.resourceManager.load(url);
    scenePromise.then(function (scene) {
      var oldScene = _this._activeScene;
      _this.activeScene = scene;

      if (oldScene && destroyOldScene) {
        oldScene.destroy();
      }
    });
    return scenePromise;
  }
  /**
   * Merge the source scene into the target scene.
   * @remarks the global information of destScene will be used after the merge, and the lightingMap information will be merged.
   * @param sourceScene - source scene
   * @param destScene - target scene
   */
  ;

  _proto.mergeScenes = function mergeScenes(sourceScene, destScene) {
    var oldRootEntities = sourceScene.rootEntities;

    for (var i = 0, n = oldRootEntities.length; i < n; i++) {
      destScene.addRootEntity(oldRootEntities[i]);
    }
  };

  _createClass(SceneManager, [{
    key: "activeScene",
    get:
    /**
     * Get the activated scene.
     */
    function get() {
      return this._activeScene;
    },
    set: function set(scene) {
      var oldScene = this._activeScene;

      if (oldScene !== scene) {
        oldScene && oldScene._processActive(false);
        scene && scene._processActive(true);
        this._activeScene = scene;
      }
    }
  }]);

  return SceneManager;
}();

var blinnPhongFs = "#define GLSLIFY 1\n#include <common>\n#include <common_frag>\n#include <uv_share>\n#include <normal_share>\n#include <worldpos_share>\n#include <ambient_light_frag>\n#include <direct_light_frag>\n#include <point_light_frag>\n#include <spot_light_frag>\n#include <mobile_material_frag>\n#include <fog_share>\nvoid main(){\n#include <begin_mobile_frag>\n#include <begin_normal_frag>\n#include <begin_viewdir_frag>\n#include <mobile_blinnphong_frag>\ngl_FragColor=emission+ambient+diffuse+specular;gl_FragColor.a=diffuse.a;\n#include <fog_frag>\n}"; // eslint-disable-line

var blinnPhongVs = "#define GLSLIFY 1\n#include <common>\n#include <common_vert>\n#include <uv_share>\n#include <normal_share>\n#include <worldpos_share>\n#include <shadow_share>\n#include <morph_target_vert>\n#include <fog_share>\nvoid main(){\n#include <begin_position_vert>\n#include <begin_normal_vert>\n#include <morph_vert>\n#include <skinning_vert>\n#include <uv_vert>\n#include <normal_vert>\n#include <worldpos_vert>\n#include <shadow_vert>\n#include <position_vert>\n#include <fog_vert>\n}"; // eslint-disable-line

var particleFs = "#define GLSLIFY 1\nvarying vec4 v_color;varying float v_lifeLeft;varying vec2 v_uv;uniform sampler2D u_texture;void main(){float alphaFactor=1.0;\n#ifdef fadeIn\nfloat fadeInFactor=step(0.5,v_lifeLeft);alphaFactor=2.0*fadeInFactor*(1.0-v_lifeLeft)+(1.0-fadeInFactor);\n#endif\n#ifdef fadeOut\nfloat fadeOutFactor=step(0.5,v_lifeLeft);alphaFactor=alphaFactor*2.0*(1.0-fadeOutFactor)*v_lifeLeft+alphaFactor*fadeOutFactor;\n#endif\n#ifdef particleTexture\nvec4 tex=texture2D(u_texture,v_uv);\n#ifdef useOriginColor\ngl_FragColor=vec4(tex.rgb,alphaFactor*tex.a*v_color.w);\n#else\ngl_FragColor=vec4(v_color.xyz*tex.rgb,alphaFactor*tex.a*v_color.w);\n#endif\n#else\ngl_FragColor=vec4(v_color.xyz,alphaFactor*v_color.w);\n#endif\n}"; // eslint-disable-line

var particleVs = "#define GLSLIFY 1\nattribute vec3 a_position;attribute vec3 a_velocity;attribute vec3 a_acceleration;attribute vec4 a_color;attribute vec4 a_lifeAndSize;attribute vec2 a_rotation;attribute vec3 a_uv;attribute vec2 a_normalizedUv;uniform float u_time;uniform bool u_once;uniform bool u_active;uniform mat4 u_MVPMat;varying vec4 v_color;varying float v_lifeLeft;varying vec2 v_uv;\n#ifdef is2d\nuniform mat4 u_viewInvMat;uniform mat4 u_projMat;uniform mat4 u_viewMat;uniform mat4 u_modelMat;\n#endif\nmat2 rotation2d(float angle){float s=sin(angle);float c=cos(angle);return mat2(c,-s,s,c);}void main(){v_color=a_color;v_uv=a_uv.xy;float life=a_lifeAndSize.y+a_lifeAndSize.x;float deltaTime=max(mod(u_time,life)-a_lifeAndSize.x,0.0);bool isDying=false;if(u_once||!u_active){isDying=true;}if((isDying&&u_time>life)){deltaTime=life;}if(deltaTime==0.0){deltaTime=life;}v_lifeLeft=1.0-deltaTime/a_lifeAndSize.y;float scale=a_lifeAndSize.z;vec3 position=a_position+(a_velocity+a_acceleration*deltaTime*0.5)*deltaTime;\n#ifdef isScaleByLifetime\nscale*=v_lifeLeft;\n#else\nscale*=pow(a_lifeAndSize.w,deltaTime);\n#endif\n#ifdef rotateToVelocity\nvec3 v=a_velocity+a_acceleration*deltaTime;float angle=atan(v.z,v.x)*2.0;\n#else\nfloat deltaAngle=deltaTime*a_rotation.y;float angle=a_rotation.x+deltaAngle;\n#endif\n#ifdef is2d\nvec2 rotatedPoint=rotation2d(angle)*vec2(a_normalizedUv.x,a_normalizedUv.y*a_uv.z);vec3 basisX=u_viewInvMat[0].xyz;vec3 basisZ=u_viewInvMat[1].xyz;vec3 localPosition=vec3(basisX*rotatedPoint.x+basisZ*rotatedPoint.y)*scale+position;gl_Position=u_projMat*u_viewMat*vec4(localPosition+u_modelMat[3].xyz,1.);\n#else\n#ifdef rotateToVelocity\nfloat s=sin(angle);float c=cos(angle);\n#else\nfloat s=sin(angle);float c=cos(angle);\n#endif\nvec4 rotatedPoint=vec4((a_normalizedUv.x*c+a_normalizedUv.y*a_uv.z*s)*scale,0.,(a_normalizedUv.x*s-a_normalizedUv.y*a_uv.z*c)*scale,1.);vec4 orientation=vec4(0,0,0,1);vec4 q2=orientation+orientation;vec4 qx=orientation.xxxw*q2.xyzx;vec4 qy=orientation.xyyw*q2.xyzy;vec4 qz=orientation.xxzw*q2.xxzz;mat4 localMatrix=mat4((1.0-qy.y)-qz.z,qx.y+qz.w,qx.z-qy.w,0,qx.y-qz.w,(1.0-qx.x)-qz.z,qy.z+qx.w,0,qx.z+qy.w,qy.z-qx.w,(1.0-qx.x)-qy.y,0,position.x,position.y,position.z,1);rotatedPoint=localMatrix*rotatedPoint;gl_Position=u_MVPMat*rotatedPoint;\n#endif\n}"; // eslint-disable-line

var pbrFs = "#define GLSLIFY 1\n#include <common>\n#include <common_frag>\n#include <pbr_common_frag_define>\n#include <pbr_util_frag_define>\n#include <fog_share>\n#include <uv_share>\n#include <normal_share>\n#include <color_share>\n#include <worldpos_share>\n#include <refraction_share>\n#include <perturbation_share>\n#include <clipPlane_frag_define>\n#include <ambient_light_frag>\n#include <direct_light_frag>\n#include <point_light_frag>\n#include <spot_light_frag>\n#include <pbr_envmap_light_frag_define>\n#include <pbr_base_frag_define>\n#include <pbr_texture_frag_define>\n#include <pbr_runtime_frag_define>\n#include <pbr_normal_frag_define>\n#include <pbr_brdf_cook_torrance_frag_define>\n#include <pbr_direct_irradiance_frag_define>\n#include <pbr_ibl_diffuse_frag_define>\n#include <pbr_ibl_specular_frag_define>\n#include <oit_frag_define>\nvoid main(){\n#include <clipPlane_frag>\n#include <pbr_begin_frag>\n#include <pbr_direct_irradiance_frag>\n#include <pbr_ibl_diffuse_frag>\n#include <pbr_ibl_specular_frag>\n#include <pbr_end_frag>\n#include <gamma_frag>\n#include <refraction_frag>\n#include <perturbation_frag>\n#include <fog_frag>\n#include <oit_frag>\n}"; // eslint-disable-line

var pbrVs = "#define GLSLIFY 1\n#include <common>\n#include <common_vert>\n#include <uv_share>\n#include <color_share>\n#include <normal_share>\n#include <worldpos_share>\n#include <shadow_share>\n#include <clipPlane_vert_define>\n#include <morph_target_vert>\n#include <fog_share>\nvoid main(){\n#include <begin_position_vert>\n#include <begin_normal_vert>\n#include <morph_vert>\n#include <skinning_vert>\n#include <uv_vert>\n#include <color_vert>\n#include <normal_vert>\n#include <worldpos_vert>\n#include <shadow_vert>\n#include <clipPlane_vert>\n#include <position_vert>\n#include <fog_vert>\n}"; // eslint-disable-line

var shadowMapFs = "#define GLSLIFY 1\n/***Decompose and save depth value.*/vec4 pack(float depth){const vec4 bitShift=vec4(1.0,256.0,256.0*256.0,256.0*256.0*256.0);const vec4 bitMask=vec4(1.0/256.0,1.0/256.0,1.0/256.0,0.0);vec4 rgbaDepth=fract(depth*bitShift);rgbaDepth-=rgbaDepth.gbaa*bitMask;return rgbaDepth;}void main(){gl_FragColor=pack(gl_FragCoord.z);}"; // eslint-disable-line

var shadowMapVs = "#define GLSLIFY 1\n#include <common_vert>\n#include <normal_share>\n#include <shadow_share>\nvoid main(){\n#include <begin_position_vert>\n#include <begin_normal_vert>\n#include <skinning_vert>\n#include <shadow_vert>\n#include <position_vert>\n}"; // eslint-disable-line

var shadowFs = "#define GLSLIFY 1\n#ifdef O3_SHADOW_MAP_COUNT\nuniform float u_shadowBias[O3_SHADOW_MAP_COUNT];uniform float u_shadowIntensity[O3_SHADOW_MAP_COUNT];uniform float u_shadowRadius[O3_SHADOW_MAP_COUNT];uniform vec2 u_shadowMapSize[O3_SHADOW_MAP_COUNT];uniform sampler2D u_shadowMaps[O3_SHADOW_MAP_COUNT];varying vec4 v_PositionFromLight[O3_SHADOW_MAP_COUNT];const vec4 bitShift=vec4(1.0,1.0/256.0,1.0/(256.0*256.0),1.0/(256.0*256.0*256.0));/***Unpack depth value.*/float unpack(const in vec4 rgbaDepth){return dot(rgbaDepth,bitShift);}/***Degree of shadow.*/float getVisibility(vec4 positionFromLight,const in sampler2D shadowMap,vec2 mapSize,float intensity,float bias,float radius){vec3 shadowCoord=(positionFromLight.xyz/positionFromLight.w)/2.0+0.5;float filterX=step(0.0,shadowCoord.x)*(1.0-step(1.0,shadowCoord.x));float filterY=step(0.0,shadowCoord.y)*(1.0-step(1.0,shadowCoord.y));shadowCoord.z-=bias;vec2 texelSize=vec2(1.0)/mapSize;float visibility=0.0;for(float y=-1.0;y<=1.0;y+=1.0){for(float x=-1.0;x<=1.0;x+=1.0){vec2 uv=shadowCoord.xy+texelSize*vec2(x,y)*radius;vec4 rgbaDepth=texture2D(shadowMap,uv);float depth=unpack(rgbaDepth);visibility+=step(depth,shadowCoord.z)*intensity;}}visibility*=(1.0/9.0);return visibility*filterX*filterY;}\n#endif\nvoid main(){vec4 shadowColor=vec4(1.0,1.0,1.0,1.0);\n#ifdef O3_SHADOW_MAP_COUNT\nfloat visibility=1.0;\n#if (O3_SHADOW_MAP_COUNT == 1)\nvisibility-=getVisibility(v_PositionFromLight[0],u_shadowMaps[0],u_shadowMapSize[0],u_shadowIntensity[0],u_shadowBias[0],u_shadowRadius[0]);\n#elif (O3_SHADOW_MAP_COUNT == 2)\nvisibility-=getVisibility(v_PositionFromLight[0],u_shadowMaps[0],u_shadowMapSize[0],u_shadowIntensity[0],u_shadowBias[0],u_shadowRadius[0]);visibility-=getVisibility(v_PositionFromLight[1],u_shadowMaps[1],u_shadowMapSize[1],u_shadowIntensity[1],u_shadowBias[1],u_shadowRadius[1]);\n#elif (O3_SHADOW_MAP_COUNT == 3)\nvisibility-=getVisibility(v_PositionFromLight[0],u_shadowMaps[0],u_shadowMapSize[0],u_shadowIntensity[0],u_shadowBias[0],u_shadowRadius[0]);visibility-=getVisibility(v_PositionFromLight[1],u_shadowMaps[1],u_shadowMapSize[1],u_shadowIntensity[1],u_shadowBias[1],u_shadowRadius[1]);visibility-=getVisibility(v_PositionFromLight[2],u_shadowMaps[2],u_shadowMapSize[2],u_shadowIntensity[2],u_shadowBias[2],u_shadowRadius[2]);\n#endif\nvisibility=clamp(visibility,0.0,1.0);shadowColor=vec4(visibility,visibility,visibility,1.0);\n#endif\ngl_FragColor=shadowColor;}"; // eslint-disable-line

var skyboxFs = "#define GLSLIFY 1\nuniform samplerCube u_cube;varying vec3 v_cubeUV;void main(){gl_FragColor=textureCube(u_cube,v_cubeUV);}"; // eslint-disable-line

var skyboxVs = "#define GLSLIFY 1\n#include <common_vert>\nuniform mat4 u_mvpNoscale;varying vec3 v_cubeUV;void main(){v_cubeUV=POSITION.xyz;gl_Position=u_mvpNoscale*vec4(POSITION,1.0);gl_Position.z=gl_Position.w;}"; // eslint-disable-line

var unlitFs = "#define GLSLIFY 1\n#include <uv_share>\n#include <fog_share>\nuniform vec4 u_baseColor;\n#ifdef O3_BASECOLOR_TEXTURE\nuniform sampler2D u_baseColorTexture;\n#endif\nvoid main(){vec4 baseColor=u_baseColor;\n#ifdef O3_BASECOLOR_TEXTURE\nbaseColor*=texture2D(u_baseColorTexture,v_uv);\n#endif\ngl_FragColor=baseColor;\n#include <fog_frag>\n}"; // eslint-disable-line

var unlitVs = "#define GLSLIFY 1\n#include <common_vert>\n#include <uv_share>\n#include <fog_share>\nvoid main(){\n#include <begin_position_vert>\n#include <skinning_vert>\n#include <uv_vert>\n#include <position_vert>\n#include <fog_vert>\n}"; // eslint-disable-line

/**
 * Internal shader pool.
 * @internal
 */

var ShaderPool = /*#__PURE__*/function () {
  function ShaderPool() {}

  ShaderPool.init = function init() {
    Shader.create("blinn-phong", blinnPhongVs, blinnPhongFs);
    Shader.create("pbr", pbrVs, pbrFs);
    Shader.create("unlit", unlitVs, unlitFs);
    Shader.create("shadow-map", shadowMapVs, shadowMapFs);
    Shader.create("shadow", shadowMapVs, shadowFs);
    Shader.create("skybox", skyboxVs, skyboxFs);
    Shader.create("particle-shader", particleVs, particleFs);
  };

  return ShaderPool;
}();

/**
 * Shader program pool.
 * @internal
 */
var ShaderProgramPool = /*#__PURE__*/function () {
  function ShaderProgramPool() {
    this._cacheHierarchy = 1;
    this._cacheMap = Object.create(null);
    this._lastQueryMap = void 0;
    this._lastQueryKey = void 0;
  }

  var _proto = ShaderProgramPool.prototype;

  /**
   * Get shader program by macro collection.
   * @param macros - macro collection
   * @returns shader program
   */
  _proto.get = function get(macros) {
    var cacheMap = this._cacheMap;
    var maskLength = macros._length;

    if (maskLength > this._cacheHierarchy) {
      this._resizeCacheMapHierarchy(cacheMap, 0, maskLength);
    }

    var mask = macros._mask;
    var endIndex = macros._length - 1;
    var maxEndIndex = this._cacheHierarchy - 1;

    for (var i = 0; i < maxEndIndex; i++) {
      var subMask = endIndex < i ? 0 : mask[i];
      var subCacheShaders = cacheMap[subMask];
      subCacheShaders || (cacheMap[subMask] = subCacheShaders = Object.create(null));
      cacheMap = subCacheShaders;
    }

    var cacheKey = endIndex < maxEndIndex ? 0 : mask[maxEndIndex];
    var shader = cacheMap[cacheKey];

    if (!shader) {
      this._lastQueryKey = cacheKey;
      this._lastQueryMap = cacheMap;
    }

    return shader;
  }
  /**
   * Cache the shader program.
   *
   * @remarks
   * The method must return an empty value after calling get() to run normally.
   *
   * @param shaderProgram - shader program
   */
  ;

  _proto.cache = function cache(shaderProgram) {
    this._lastQueryMap[this._lastQueryKey] = shaderProgram;
  };

  _proto._resizeCacheMapHierarchy = function _resizeCacheMapHierarchy(cacheMap, hierarchy, resizeLength) {
    // only expand but not shrink.
    var end = this._cacheHierarchy - 1;

    if (hierarchy == end) {
      for (var k in cacheMap) {
        var shader = cacheMap[k];

        for (var i = 0, n = resizeLength - end; i < n; i++) {
          if (i == n - 1) {
            cacheMap[0] = shader;
          } else {
            cacheMap = cacheMap[i == 0 ? k : 0] = Object.create(null);
          }
        }
      }

      this._cacheHierarchy = resizeLength;
    } else {
      for (var _k in cacheMap) {
        this._resizeCacheMapHierarchy(cacheMap[_k], ++hierarchy, resizeLength);
      }
    }
  };

  return ShaderProgramPool;
}();

/**
 * The blend state of the render target.
 */

var RenderTargetBlendState = function RenderTargetBlendState() {
  this.colorBlendOperation = exports.BlendOperation.Add;
  this.alphaBlendOperation = exports.BlendOperation.Add;
  this.sourceColorBlendFactor = exports.BlendFactor.One;
  this.sourceAlphaBlendFactor = exports.BlendFactor.One;
  this.destinationColorBlendFactor = exports.BlendFactor.Zero;
  this.destinationAlphaBlendFactor = exports.BlendFactor.Zero;
  this.colorWriteMask = exports.ColorWriteMask.All;
  this._blendEnable = false;
};

/**
 * Blend state.
 */

var BlendState = /*#__PURE__*/function () {
  function BlendState() {
    this.targetBlendState = new RenderTargetBlendState();
    this.blendColor = new math.Color(0, 0, 0, 0);
    this.alphaToCoverage = false;
  }

  BlendState._getGLBlendFactor = function _getGLBlendFactor(blendFactor) {
    switch (blendFactor) {
      case exports.BlendFactor.Zero:
        return wechatAdapter.WebGLRenderingContext.ZERO;

      case exports.BlendFactor.One:
        return wechatAdapter.WebGLRenderingContext.ONE;

      case exports.BlendFactor.SourceColor:
        return wechatAdapter.WebGLRenderingContext.SRC_COLOR;

      case exports.BlendFactor.OneMinusSourceColor:
        return wechatAdapter.WebGLRenderingContext.ONE_MINUS_SRC_COLOR;

      case exports.BlendFactor.DestinationColor:
        return wechatAdapter.WebGLRenderingContext.DST_COLOR;

      case exports.BlendFactor.OneMinusDestinationColor:
        return wechatAdapter.WebGLRenderingContext.ONE_MINUS_DST_COLOR;

      case exports.BlendFactor.SourceAlpha:
        return wechatAdapter.WebGLRenderingContext.SRC_ALPHA;

      case exports.BlendFactor.OneMinusSourceAlpha:
        return wechatAdapter.WebGLRenderingContext.ONE_MINUS_SRC_ALPHA;

      case exports.BlendFactor.DestinationAlpha:
        return wechatAdapter.WebGLRenderingContext.DST_ALPHA;

      case exports.BlendFactor.OneMinusDestinationAlpha:
        return wechatAdapter.WebGLRenderingContext.ONE_MINUS_DST_ALPHA;

      case exports.BlendFactor.SourceAlphaSaturate:
        return wechatAdapter.WebGLRenderingContext.SRC_ALPHA_SATURATE;

      case exports.BlendFactor.BlendColor:
        return wechatAdapter.WebGLRenderingContext.CONSTANT_COLOR;

      case exports.BlendFactor.OneMinusBlendColor:
        return wechatAdapter.WebGLRenderingContext.ONE_MINUS_CONSTANT_COLOR;
    }
  };

  BlendState._getGLBlendOperation = function _getGLBlendOperation(blendOperation) {
    switch (blendOperation) {
      case exports.BlendOperation.Add:
        return wechatAdapter.WebGLRenderingContext.FUNC_ADD;

      case exports.BlendOperation.Subtract:
        return wechatAdapter.WebGLRenderingContext.FUNC_SUBTRACT;

      case exports.BlendOperation.ReverseSubtract:
        return wechatAdapter.WebGLRenderingContext.FUNC_REVERSE_SUBTRACT;

      case exports.BlendOperation.Min:
        return wechatAdapter.WebGL2RenderingContext.MIN;
      // in webgl1.0 is an extension

      case exports.BlendOperation.Max:
        return wechatAdapter.WebGL2RenderingContext.MAX;
      // in webgl1.0 is an extension
    }
  }
  /** The blend state of the render target. */
  ;

  var _proto = BlendState.prototype;

  /**
   * @internal
   * Apply the current blend state by comparing with the last blend state.
   */
  _proto._apply = function _apply(hardwareRenderer, lastRenderState) {
    this._platformApply(hardwareRenderer, lastRenderState.blendState);
  };

  _proto._platformApply = function _platformApply(rhi, lastState) {
    var gl = rhi.gl;
    var lastTargetBlendState = lastState.targetBlendState;
    var _this$targetBlendStat = this.targetBlendState,
        colorBlendOperation = _this$targetBlendStat.colorBlendOperation,
        alphaBlendOperation = _this$targetBlendStat.alphaBlendOperation,
        sourceColorBlendFactor = _this$targetBlendStat.sourceColorBlendFactor,
        destinationColorBlendFactor = _this$targetBlendStat.destinationColorBlendFactor,
        sourceAlphaBlendFactor = _this$targetBlendStat.sourceAlphaBlendFactor,
        destinationAlphaBlendFactor = _this$targetBlendStat.destinationAlphaBlendFactor,
        colorWriteMask = _this$targetBlendStat.colorWriteMask;
    var blendEnable = !(sourceColorBlendFactor === exports.BlendFactor.One && destinationColorBlendFactor === exports.BlendFactor.Zero && sourceAlphaBlendFactor === exports.BlendFactor.One && destinationAlphaBlendFactor === exports.BlendFactor.Zero && (colorBlendOperation === exports.BlendOperation.Add || colorBlendOperation === exports.BlendOperation.Subtract) && (alphaBlendOperation === exports.BlendOperation.Add || alphaBlendOperation === exports.BlendOperation.Subtract));

    if (blendEnable !== lastTargetBlendState._blendEnable) {
      if (blendEnable) {
        gl.enable(gl.BLEND);
      } else {
        gl.disable(gl.BLEND);
      }

      lastTargetBlendState._blendEnable = blendEnable;
    }

    if (blendEnable) {
      // apply blend factor.
      if (sourceColorBlendFactor !== lastTargetBlendState.sourceColorBlendFactor || destinationColorBlendFactor !== lastTargetBlendState.destinationColorBlendFactor || sourceAlphaBlendFactor !== lastTargetBlendState.sourceAlphaBlendFactor || destinationAlphaBlendFactor !== lastTargetBlendState.destinationAlphaBlendFactor) {
        gl.blendFuncSeparate(BlendState._getGLBlendFactor(sourceColorBlendFactor), BlendState._getGLBlendFactor(destinationColorBlendFactor), BlendState._getGLBlendFactor(sourceAlphaBlendFactor), BlendState._getGLBlendFactor(destinationAlphaBlendFactor));
        lastTargetBlendState.sourceColorBlendFactor = sourceColorBlendFactor;
        lastTargetBlendState.destinationColorBlendFactor = destinationColorBlendFactor;
        lastTargetBlendState.sourceAlphaBlendFactor = sourceAlphaBlendFactor;
        lastTargetBlendState.destinationAlphaBlendFactor = destinationAlphaBlendFactor;
      } // apply blend operation.


      if (colorBlendOperation !== lastTargetBlendState.colorBlendOperation || alphaBlendOperation !== lastTargetBlendState.alphaBlendOperation) {
        gl.blendEquationSeparate(BlendState._getGLBlendOperation(colorBlendOperation), BlendState._getGLBlendOperation(alphaBlendOperation));
        lastTargetBlendState.colorBlendOperation = colorBlendOperation;
        lastTargetBlendState.alphaBlendOperation = alphaBlendOperation;
      } // apply blend color.


      var blendColor = this.blendColor;

      if (!math.Color.equals(lastState.blendColor, blendColor)) {
        gl.blendColor(blendColor.r, blendColor.g, blendColor.b, blendColor.a);
        blendColor.cloneTo(lastState.blendColor);
      }
    } // apply color mask.


    if (colorWriteMask !== lastTargetBlendState.colorWriteMask) {
      gl.colorMask((colorWriteMask & exports.ColorWriteMask.Red) !== 0, (colorWriteMask & exports.ColorWriteMask.Green) !== 0, (colorWriteMask & exports.ColorWriteMask.Blue) !== 0, (colorWriteMask & exports.ColorWriteMask.Alpha) !== 0);
      lastTargetBlendState.colorWriteMask = colorWriteMask;
    } // apply alpha to coverage.


    var alphaToCoverage = this.alphaToCoverage;

    if (alphaToCoverage !== lastState.alphaToCoverage) {
      if (alphaToCoverage) {
        gl.enable(gl.SAMPLE_ALPHA_TO_COVERAGE);
      } else {
        gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
      }

      lastState.alphaToCoverage = alphaToCoverage;
    }
  };

  return BlendState;
}();

/**
 * Depth state.
 */
var DepthState = /*#__PURE__*/function () {
  function DepthState() {
    this.enabled = true;
    this.writeEnabled = true;
    this.compareFunction = exports.CompareFunction.Less;
  }

  DepthState._getGLCompareFunction = function _getGLCompareFunction(compareFunction) {
    switch (compareFunction) {
      case exports.CompareFunction.Never:
        return wechatAdapter.WebGLRenderingContext.NEVER;

      case exports.CompareFunction.Less:
        return wechatAdapter.WebGLRenderingContext.LESS;

      case exports.CompareFunction.Equal:
        return wechatAdapter.WebGLRenderingContext.EQUAL;

      case exports.CompareFunction.LessEqual:
        return wechatAdapter.WebGL2RenderingContext.LEQUAL;

      case exports.CompareFunction.Greater:
        return wechatAdapter.WebGL2RenderingContext.GREATER;

      case exports.CompareFunction.NotEqual:
        return wechatAdapter.WebGL2RenderingContext.NOTEQUAL;

      case exports.CompareFunction.GreaterEqual:
        return wechatAdapter.WebGL2RenderingContext.GEQUAL;

      case exports.CompareFunction.Always:
        return wechatAdapter.WebGL2RenderingContext.ALWAYS;
    }
  }
  /** Whether to enable the depth test. */
  ;

  var _proto = DepthState.prototype;

  /**
   * @internal
   * Apply the current depth state by comparing with the last depth state.
   */
  _proto._apply = function _apply(hardwareRenderer, lastRenderState) {
    this._platformApply(hardwareRenderer, lastRenderState.depthState);
  };

  _proto._platformApply = function _platformApply(rhi, lastState) {
    var gl = rhi.gl;
    var enabled = this.enabled,
        compareFunction = this.compareFunction,
        writeEnabled = this.writeEnabled;

    if (enabled != lastState.enabled) {
      if (enabled) {
        gl.enable(gl.DEPTH_TEST);
      } else {
        gl.disable(gl.DEPTH_TEST);
      }

      lastState.enabled = enabled;
    }

    if (enabled) {
      // apply compare func.
      if (compareFunction != lastState.compareFunction) {
        gl.depthFunc(DepthState._getGLCompareFunction(compareFunction));
        lastState.compareFunction = compareFunction;
      } // apply write enabled.


      if (writeEnabled != lastState.writeEnabled) {
        gl.depthMask(writeEnabled);
        lastState.writeEnabled = writeEnabled;
      }
    }
  };

  return DepthState;
}();

/**
 * Raster state.
 */
var RasterState = /*#__PURE__*/function () {
  function RasterState() {
    this.cullMode = exports.CullMode.Back;
    this.depthBias = 0;
    this.slopeScaledDepthBias = 0;
    this._cullFaceEnable = true;
  }

  var _proto = RasterState.prototype;

  /**
   * @internal
   */
  _proto._apply = function _apply(hardwareRenderer, lastRenderState) {
    this._platformApply(hardwareRenderer, lastRenderState.rasterState);
  };

  _proto._platformApply = function _platformApply(rhi, lastState) {
    var gl = rhi.gl;
    var cullMode = this.cullMode,
        depthBias = this.depthBias,
        slopeScaledDepthBias = this.slopeScaledDepthBias;
    var cullFaceEnable = cullMode !== exports.CullMode.Off;

    if (cullFaceEnable !== lastState._cullFaceEnable) {
      if (cullFaceEnable) {
        gl.enable(gl.CULL_FACE);
      } else {
        gl.disable(gl.CULL_FACE);
      }

      lastState._cullFaceEnable = cullFaceEnable;
    } // apply front face.


    if (cullFaceEnable) {
      if (cullMode !== lastState.cullMode) {
        if (cullMode == exports.CullMode.Back) {
          gl.cullFace(gl.BACK);
        } else {
          gl.cullFace(gl.FRONT);
        }

        lastState.cullMode = cullMode;
      }
    } // apply polygonOffset.


    if (depthBias !== lastState.depthBias || slopeScaledDepthBias !== lastState.slopeScaledDepthBias) {
      if (depthBias !== 0 || slopeScaledDepthBias !== 0) {
        gl.enable(gl.POLYGON_OFFSET_FILL);
        gl.polygonOffset(slopeScaledDepthBias, depthBias);
      } else {
        gl.disable(gl.POLYGON_OFFSET_FILL);
      }

      lastState.depthBias = depthBias;
      lastState.slopeScaledDepthBias = slopeScaledDepthBias;
    }
  };

  return RasterState;
}();

/**
 * Stencil state.
 */
var StencilState = /*#__PURE__*/function () {
  function StencilState() {
    this.enabled = false;
    this.referenceValue = 0;
    this.mask = 0xff;
    this.writeMask = 0xff;
    this.compareFunctionFront = exports.CompareFunction.Always;
    this.compareFunctionBack = exports.CompareFunction.Always;
    this.passOperationFront = exports.StencilOperation.Keep;
    this.passOperationBack = exports.StencilOperation.Keep;
    this.failOperationFront = exports.StencilOperation.Keep;
    this.failOperationBack = exports.StencilOperation.Keep;
    this.zFailOperationFront = exports.StencilOperation.Keep;
    this.zFailOperationBack = exports.StencilOperation.Keep;
  }

  StencilState._getGLCompareFunction = function _getGLCompareFunction(compareFunction) {
    switch (compareFunction) {
      case exports.CompareFunction.Never:
        return wechatAdapter.WebGLRenderingContext.NEVER;

      case exports.CompareFunction.Less:
        return wechatAdapter.WebGLRenderingContext.LESS;

      case exports.CompareFunction.Equal:
        return wechatAdapter.WebGLRenderingContext.EQUAL;

      case exports.CompareFunction.LessEqual:
        return wechatAdapter.WebGLRenderingContext.LEQUAL;

      case exports.CompareFunction.Greater:
        return wechatAdapter.WebGLRenderingContext.GREATER;

      case exports.CompareFunction.NotEqual:
        return wechatAdapter.WebGLRenderingContext.NOTEQUAL;

      case exports.CompareFunction.GreaterEqual:
        return wechatAdapter.WebGLRenderingContext.GEQUAL;

      case exports.CompareFunction.Always:
        return wechatAdapter.WebGLRenderingContext.ALWAYS;
    }
  };

  StencilState._getGLStencilOperation = function _getGLStencilOperation(compareFunction) {
    switch (compareFunction) {
      case exports.StencilOperation.Keep:
        return wechatAdapter.WebGLRenderingContext.KEEP;

      case exports.StencilOperation.Zero:
        return wechatAdapter.WebGLRenderingContext.ZERO;

      case exports.StencilOperation.Replace:
        return wechatAdapter.WebGLRenderingContext.REPLACE;

      case exports.StencilOperation.IncrementSaturate:
        return wechatAdapter.WebGLRenderingContext.INCR;

      case exports.StencilOperation.DecrementSaturate:
        return wechatAdapter.WebGLRenderingContext.DECR;

      case exports.StencilOperation.Invert:
        return wechatAdapter.WebGLRenderingContext.INVERT;

      case exports.StencilOperation.IncrementWrap:
        return wechatAdapter.WebGLRenderingContext.INCR_WRAP;

      case exports.StencilOperation.DecrementWrap:
        return wechatAdapter.WebGLRenderingContext.DECR_WRAP;
    }
  }
  /** Whether to enable stencil test. */
  ;

  var _proto = StencilState.prototype;

  /**
   * @internal
   */
  _proto._apply = function _apply(hardwareRenderer, lastRenderState) {
    this._platformApply(hardwareRenderer, lastRenderState.stencilState);
  };

  _proto._platformApply = function _platformApply(rhi, lastState) {
    var gl = rhi.gl;
    var enabled = this.enabled,
        referenceValue = this.referenceValue,
        mask = this.mask,
        compareFunctionFront = this.compareFunctionFront,
        compareFunctionBack = this.compareFunctionBack,
        failOperationFront = this.failOperationFront,
        zFailOperationFront = this.zFailOperationFront,
        passOperationFront = this.passOperationFront,
        failOperationBack = this.failOperationBack,
        zFailOperationBack = this.zFailOperationBack,
        passOperationBack = this.passOperationBack,
        writeMask = this.writeMask;

    if (enabled != lastState.enabled) {
      if (enabled) {
        gl.enable(gl.STENCIL_TEST);
      } else {
        gl.disable(wechatAdapter.WebGLRenderingContext.STENCIL_TEST);
      }

      lastState.enabled = enabled;
    }

    if (enabled) {
      // apply stencil func.
      var referenceOrMaskChange = referenceValue !== lastState.referenceValue || mask !== lastState.mask;

      if (referenceOrMaskChange || compareFunctionFront !== lastState.compareFunctionFront) {
        gl.stencilFuncSeparate(gl.FRONT, StencilState._getGLCompareFunction(compareFunctionFront), referenceValue, mask);
        lastState.compareFunctionFront = compareFunctionFront;
      }

      if (referenceOrMaskChange || compareFunctionBack !== lastState.compareFunctionBack) {
        gl.stencilFuncSeparate(gl.BACK, StencilState._getGLCompareFunction(compareFunctionBack), referenceValue, mask);
        lastState.compareFunctionBack = this.compareFunctionBack;
      }

      if (referenceOrMaskChange) {
        lastState.referenceValue = this.referenceValue;
        lastState.mask = this.mask;
      } // apply stencil operation.


      if (failOperationFront !== lastState.failOperationFront || zFailOperationFront !== lastState.zFailOperationFront || passOperationFront !== lastState.passOperationFront) {
        gl.stencilOpSeparate(gl.FRONT, StencilState._getGLStencilOperation(failOperationFront), StencilState._getGLStencilOperation(zFailOperationFront), StencilState._getGLStencilOperation(passOperationFront));
        lastState.failOperationFront = failOperationFront;
        lastState.zFailOperationFront = zFailOperationFront;
        lastState.passOperationFront = passOperationFront;
      }

      if (failOperationBack !== lastState.failOperationBack || zFailOperationBack !== lastState.zFailOperationBack || passOperationBack !== lastState.passOperationBack) {
        gl.stencilOpSeparate(gl.BACK, StencilState._getGLStencilOperation(failOperationBack), StencilState._getGLStencilOperation(zFailOperationBack), StencilState._getGLStencilOperation(passOperationBack));
        lastState.failOperationBack = failOperationBack;
        lastState.zFailOperationBack = zFailOperationBack;
        lastState.passOperationBack = passOperationBack;
      } // apply write mask.


      if (writeMask !== lastState.writeMask) {
        gl.stencilMask(writeMask);
        lastState.writeMask = writeMask;
      }
    }
  };

  return StencilState;
}();

/**
 * Render state.
 */

var RenderState = /*#__PURE__*/function () {
  function RenderState() {
    this.blendState = new BlendState();
    this.depthState = new DepthState();
    this.stencilState = new StencilState();
    this.rasterState = new RasterState();
  }

  var _proto = RenderState.prototype;

  /** @internal */
  _proto._apply = function _apply(engine) {
    var hardwareRenderer = engine._hardwareRenderer;
    var lastRenderState = engine._lastRenderState;

    this.blendState._apply(hardwareRenderer, lastRenderState);

    this.depthState._apply(hardwareRenderer, lastRenderState);

    this.stencilState._apply(hardwareRenderer, lastRenderState);

    this.rasterState._apply(hardwareRenderer, lastRenderState);
  };

  return RenderState;
}();

/** TODO: delete */

var engineFeatureManager = new FeatureManager();
ShaderPool.init();
/**
 * Engine.
 */

var Engine = /*#__PURE__*/function (_EventDispatcher) {
  _inheritsLoose(Engine, _EventDispatcher);

  /**
   * Create engine.
   * @param canvas - The canvas to use for rendering
   * @param hardwareRenderer - Graphics API renderer
   */
  function Engine(canvas, hardwareRenderer) {
    var _this;

    _this = _EventDispatcher.call(this, null) || this;
    _this._componentsManager = new ComponentsManager();
    _this._hardwareRenderer = void 0;
    _this._lastRenderState = new RenderState();
    _this._renderCount = 0;
    _this._shaderProgramPools = [];
    _this._canvas = void 0;
    _this._resourceManager = new ResourceManager(_assertThisInitialized(_this));
    _this._sceneManager = new SceneManager(_assertThisInitialized(_this));
    _this._vSyncCount = 1;
    _this._targetFrameRate = 60;
    _this._time = new Time();
    _this._isPaused = true;
    _this._requestId = void 0;
    _this._timeoutId = void 0;
    _this._vSyncCounter = 1;
    _this._targetFrameInterval = 1000 / 60;

    _this._animate = function () {
      if (_this._vSyncCount) {
        _this._requestId = wechatAdapter.requestAnimationFrame(_this._animate);

        if (_this._vSyncCounter++ % _this._vSyncCount === 0) {
          _this.update();

          _this._vSyncCounter = 1;
        }
      } else {
        _this._timeoutId = wechatAdapter.window.setTimeout(_this._animate, _this._targetFrameInterval);

        _this.update();
      }
    };

    _this.features = [];
    _this._hardwareRenderer = hardwareRenderer;

    _this._hardwareRenderer.init(canvas);

    _this._canvas = canvas; // @todo delete

    engineFeatureManager.addObject(_assertThisInitialized(_this));
    _this._sceneManager.activeScene = new Scene(_assertThisInitialized(_this), "DefaultScene");
    return _this;
  }
  /**
   * Create an entity.
   * @param name - The name of the entity
   * @returns Entity
   */


  var _proto = Engine.prototype;

  _proto.createEntity = function createEntity(name) {
    return new Entity(this, name);
  }
  /**
   * Pause the engine.
   */
  ;

  _proto.pause = function pause() {
    this._isPaused = true;
    wechatAdapter.cancelAnimationFrame(this._requestId);
    clearTimeout(this._timeoutId);
  }
  /**
   * Resume the engine.
   */
  ;

  _proto.resume = function resume() {
    if (!this._isPaused) return;
    this._isPaused = false;
    this.time.reset();
    wechatAdapter.requestAnimationFrame(this._animate);
  }
  /**
   * Update the engine loop manually. If you call engine.run(), you generally don't need to call this function.
   */
  ;

  _proto.update = function update() {
    var time = this._time;
    var deltaTime = time.deltaTime;
    time.tick();

    RenderElement._restPool();

    engineFeatureManager.callFeatureMethod(this, "preTick", [this, this._sceneManager._activeScene]);
    var scene = this._sceneManager._activeScene;
    var componentsManager = this._componentsManager;

    if (scene) {
      componentsManager.callScriptOnStart();
      componentsManager.callScriptOnUpdate(deltaTime);
      componentsManager.callAnimationUpdate(deltaTime);
      componentsManager.callScriptOnLateUpdate(deltaTime);

      this._render(scene);
    }

    this._componentsManager.callComponentDestory();

    engineFeatureManager.callFeatureMethod(this, "postTick", [this, this._sceneManager._activeScene]);
  }
  /**
   * Execution engine loop.
   */
  ;

  _proto.run = function run() {
    // @todo: delete
    engineFeatureManager.callFeatureMethod(this, "preLoad", [this]);
    this.resume();
    this.trigger(new Event("run", this));
  }
  /**
   * Destroy engine.
   */
  ;

  _proto.destroy = function destroy() {
    if (this._sceneManager) {
      // -- event
      this.trigger(new Event("shutdown", this));
      engineFeatureManager.callFeatureMethod(this, "shutdown", [this]); // -- cancel animation

      this.pause();
      this._animate = null;

      this._sceneManager._activeScene.destroy();

      this._sceneManager = null;

      this._resourceManager.gc();

      this._resourceManager = null;
      this._canvas = null;
      this.features = [];
      this._time = null; // todo: delete

      engineFeatureManager._objects = [];
    }
  }
  /**
   * @internal
   */
  ;

  _proto._getShaderProgramPool = function _getShaderProgramPool(shader) {
    var index = shader._shaderId;
    var shaderProgramPools = this._shaderProgramPools;
    var pool = shaderProgramPools[index];

    if (!pool) {
      var length = index + 1;

      if (length < shaderProgramPools.length) {
        shaderProgramPools.length = length;
      }

      shaderProgramPools[index] = pool = new ShaderProgramPool();
    }

    return pool;
  };

  _proto._render = function _render(scene) {
    var cameras = scene._activeCameras;
    var componentsManager = this._componentsManager;
    var deltaTime = this.time.deltaTime;
    componentsManager.callRendererOnUpdate(deltaTime);

    scene._updateShaderData();

    if (cameras.length > 0) {
      // Sort on priority
      //@ts-ignore
      cameras.sort(function (camera1, camera2) {
        return camera1.priority - camera2.priority;
      });

      for (var i = 0, l = cameras.length; i < l; i++) {
        var camera = cameras[i];
        var cameraEntity = camera.entity;

        if (camera.enabled && cameraEntity.isActiveInHierarchy) {
          componentsManager.callCameraOnBeginRender(camera);
          Scene.sceneFeatureManager.callFeatureMethod(scene, "preRender", [scene, camera]); //TODO: will be removed

          camera.render();
          Scene.sceneFeatureManager.callFeatureMethod(scene, "postRender", [scene, camera]); //TODO: will be removed

          componentsManager.callCameraOnEndRender(camera);
        }
      }
    } else {
      Logger.debug("NO active camera.");
    }
  } //-----------------------------------------@deprecated-----------------------------------
  ;

  _proto.findFeature = function findFeature(Feature) {
    return engineFeatureManager.findFeature(this, Feature);
  };

  Engine.registerFeature = function registerFeature(Feature) {
    engineFeatureManager.registerFeature(Feature);
  };

  _createClass(Engine, [{
    key: "canvas",
    get:
    /* @internal */

    /* @internal */

    /**
     * The canvas to use for rendering.
     * @readonly
     */
    function get() {
      return this._canvas;
    }
    /**
     * Get the resource manager.
     * @readonly
     */

  }, {
    key: "resourceManager",
    get: function get() {
      return this._resourceManager;
    }
    /**
     * Get the scene manager.
     * @readonly
     */

  }, {
    key: "sceneManager",
    get: function get() {
      return this._sceneManager;
    }
    /**
     * Get the Time class.
     * @readonly
     */

  }, {
    key: "time",
    get: function get() {
      return this._time;
    }
    /**
     * Whether the engine is paused.
     * @readonly
     */

  }, {
    key: "isPaused",
    get: function get() {
      return this._isPaused;
    }
    /**
     * The number of vertical synchronization means the number of vertical blanking for one frame.
     * @remarks 0 means that the vertical synchronization is turned off.
     */

  }, {
    key: "vSyncCount",
    get: function get() {
      return this._vSyncCount;
    },
    set: function set(value) {
      this._vSyncCount = Math.max(0, Math.floor(value));
    }
    /**
     * Set the target frame rate you want to achieve.
     * @remarks
     * It only takes effect when vSyncCount = 0 (ie, vertical synchronization is turned off).
     * The larger the value, the higher the target frame rate, Number.POSITIVE_INFINIT represents the infinite target frame rate.
     */

  }, {
    key: "targetFrameRate",
    get: function get() {
      return this._targetFrameRate;
    },
    set: function set(value) {
      value = Math.max(0.000001, value);
      this._targetFrameRate = value;
      this._targetFrameInterval = 1000 / value;
    }
    /**
     * Graphics API renderer.
     * @deprecated
     */

  }, {
    key: "renderhardware",
    get: function get() {
      return this._hardwareRenderer;
    }
  }]);

  return Engine;
}(EventDispatcher);

/**
 * System info.
 */
var SystemInfo = /*#__PURE__*/function () {
  function SystemInfo() {}

  _createClass(SystemInfo, null, [{
    key: "devicePixelRatio",
    get:
    /**
     * The pixel ratio of the device.
     */
    function get() {
      return wechatAdapter.window.devicePixelRatio;
    }
  }]);

  return SystemInfo;
}();

/**
 * Engine feature plug-in.
 * @deprecated
 */
var EngineFeature = /*#__PURE__*/function () {
  function EngineFeature() {}

  var _proto = EngineFeature.prototype;

  /**
   * Callback before the engine main loop runs,used to load resource.
   * @param engine - Engine
   */
  _proto.preLoad = function preLoad(engine) {}
  /**
   * Callback before every engine tick.
   * @param engine - Engine
   * @param currentScene - Scene
   */
  ;

  _proto.preTick = function preTick(engine, currentScene) {}
  /**
   * Callback after every engine tick.
   * @param  engine - Engine
   */
  ;

  _proto.postTick = function postTick(engine, currentScene) {}
  /**
   * Callback after the engine is destroyed.
   * @param engine - Engine
   */
  ;

  _proto.shutdown = function shutdown(engine) {};

  return EngineFeature;
}();

var _class$5, _descriptor$5, _descriptor2$5, _descriptor3$4, _descriptor4$4, _descriptor5$4, _descriptor6$3, _temp$5;
/**
 * Script class, used for logic writing.
 */

var Script = (_class$5 = (_temp$5 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Script, _Component);

  function Script() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _initializerDefineProperty(_this, "_started", _descriptor$5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_onStartIndex", _descriptor2$5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_onUpdateIndex", _descriptor3$4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_onLateUpdateIndex", _descriptor4$4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_onPreRenderIndex", _descriptor5$4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_onPostRenderIndex", _descriptor6$3, _assertThisInitialized(_this));

    return _this;
  }

  var _proto = Script.prototype;

  /**
   * Called when be enabled first time, only once.
   */
  _proto.onAwake = function onAwake() {}
  /**
   * Called when be enabled.
   */
  ;

  _proto.onEnable = function onEnable() {}
  /**
   * Called before the frame-level loop start for the first time, only once.
   */
  ;

  _proto.onStart = function onStart() {}
  /**
   * The main loop, called frame by frame.
   * @param deltaTime - The deltaTime when the script update.
   */
  ;

  _proto.onUpdate = function onUpdate(deltaTime) {}
  /**
   * Called after the onUpdate finished, called frame by frame.
   * @param deltaTime - The deltaTime when the script update.
   */
  ;

  _proto.onLateUpdate = function onLateUpdate(deltaTime) {}
  /**
   * Called before camera rendering, called per camera.
   * @param camera - Current camera.
   */
  ;

  _proto.onBeginRender = function onBeginRender(camera) {}
  /**
   * Called after camera rendering, called per camera.
   * @param camera - Current camera.
   */
  ;

  _proto.onEndRender = function onEndRender(camera) {}
  /**
   * Called when be diabled.
   */
  ;

  _proto.onDisable = function onDisable() {}
  /**
   * Called at the end of the destroyed frame.
   */
  ;

  _proto.onDestroy = function onDestroy() {}
  /**
   * @internal
   * @inheritDoc
   * @override
   */
  ;

  _proto._onAwake = function _onAwake() {
    this.onAwake();
  }
  /**
   * @internal
   * @inheritDoc
   * @override
   */
  ;

  _proto._onEnable = function _onEnable() {
    var componentsManager = this.engine._componentsManager;
    var prototype = Script.prototype;

    if (!this._started) {
      componentsManager.addOnStartScript(this);
    }

    if (this.onUpdate !== prototype.onUpdate) {
      componentsManager.addOnUpdateScript(this);
    }

    if (this.onLateUpdate !== prototype.onLateUpdate) {
      componentsManager.addOnLateUpdateScript(this);
    }

    this.onEnable();
  }
  /**
   * @internal
   * @inheritDoc
   * @override
   */
  ;

  _proto._onDisable = function _onDisable() {
    var componentsManager = this.engine._componentsManager; // Use "xxIndex" is more safe.
    // When call onDisable it maybe it still not in script queue,for example write "entity.isActive = false" in onWake().

    if (this._onStartIndex !== -1) {
      componentsManager.removeOnStartScript(this);
    }

    if (this._onUpdateIndex !== -1) {
      componentsManager.removeOnUpdateScript(this);
    }

    if (this._onLateUpdateIndex !== -1) {
      componentsManager.removeOnLateUpdateScript(this);
    }

    this.onDisable();
  }
  /**
   * @internal
   * @inheritDoc
   * @override
   */
  ;

  _proto._onDestroy = function _onDestroy() {
    this.engine._componentsManager.addDestoryComponent(this);
  };

  return Script;
}(Component), _temp$5), (_descriptor$5 = _applyDecoratedDescriptor(_class$5.prototype, "_started", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2$5 = _applyDecoratedDescriptor(_class$5.prototype, "_onStartIndex", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor3$4 = _applyDecoratedDescriptor(_class$5.prototype, "_onUpdateIndex", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor4$4 = _applyDecoratedDescriptor(_class$5.prototype, "_onLateUpdateIndex", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor5$4 = _applyDecoratedDescriptor(_class$5.prototype, "_onPreRenderIndex", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor6$3 = _applyDecoratedDescriptor(_class$5.prototype, "_onPostRenderIndex", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return -1;
  }
})), _class$5);

var _class$4, _descriptor$4, _descriptor2$4, _descriptor3$3, _descriptor4$3, _descriptor5$3, _descriptor6$2, _descriptor7$2, _descriptor8$2, _descriptor9$1, _descriptor10$1, _descriptor11$1, _descriptor12$1, _class2$2, _temp$4;

/**
 * Renderable components.
 */
var Renderer = (_class$4 = (_temp$4 = _class2$2 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Renderer, _Component);

  /**
   * @internal
   */
  function Renderer(entity) {
    var _this;

    _this = _Component.call(this, entity) || this;

    _initializerDefineProperty(_this, "shaderData", _descriptor$4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "isCulled", _descriptor2$4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_onUpdateIndex", _descriptor3$3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_rendererIndex", _descriptor4$3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_globalShaderMacro", _descriptor5$3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_overrideUpdate", _descriptor6$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_transformChangeFlag", _descriptor7$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_bounds", _descriptor8$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_mvMatrix", _descriptor9$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_mvpMatrix", _descriptor10$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_mvInvMatrix", _descriptor11$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_normalMatrix", _descriptor12$1, _assertThisInitialized(_this));

    var prototype = Renderer.prototype;
    _this._overrideUpdate = _this.update !== prototype.update;
    _this._transformChangeFlag = _this.entity.transform.registerWorldChangeFlag();

    _this.shaderData._addRefCount(1);

    return _this;
  }
  /**
   * @internal
   */


  var _proto = Renderer.prototype;

  _proto._updateShaderData = function _updateShaderData(context) {
    var shaderData = this.shaderData;
    var worldMatrix = this.entity.transform.worldMatrix;
    var mvMatrix = this._mvMatrix;
    var mvpMatrix = this._mvpMatrix;
    var mvInvMatrix = this._mvInvMatrix;
    var normalMatrix = this._normalMatrix;
    math.Matrix.multiply(context._camera.viewMatrix, worldMatrix, mvMatrix);
    math.Matrix.multiply(context._viewProjectMatrix, worldMatrix, mvpMatrix);
    math.Matrix.invert(mvMatrix, mvInvMatrix);
    math.Matrix.invert(worldMatrix, normalMatrix);
    normalMatrix.transpose();
    shaderData.setMatrix(Renderer._localMatrixProperty, this.entity.transform.localMatrix);
    shaderData.setMatrix(Renderer._worldMatrixProperty, worldMatrix);
    shaderData.setMatrix(Renderer._mvMatrixProperty, mvMatrix);
    shaderData.setMatrix(Renderer._mvpMatrixProperty, mvpMatrix);
    shaderData.setMatrix(Renderer._mvInvMatrixProperty, mvInvMatrix);
    shaderData.setMatrix(Renderer._normalMatrixProperty, normalMatrix);
  }
  /**
   * @internal
   */
  ;

  _proto._onDestroy = function _onDestroy() {
    var flag = this._transformChangeFlag;

    if (flag) {
      flag.destroy();
      this._transformChangeFlag = null;
    }

    this.shaderData._addRefCount(-1);
  };

  _proto.update = function update(deltaTime) {};

  _proto._updateBounds = function _updateBounds(worldBounds) {};

  _proto._onEnable = function _onEnable() {
    var componentsManager = this.engine._componentsManager;

    if (this._overrideUpdate) {
      componentsManager.addOnUpdateRenderers(this);
    }

    componentsManager.addRenderer(this);
  };

  _proto._onDisable = function _onDisable() {
    var componentsManager = this.engine._componentsManager;

    if (this._overrideUpdate) {
      componentsManager.removeOnUpdateRenderers(this);
    }

    componentsManager.removeRenderer(this);
  };

  _proto._render = function _render(camera) {
    this.render(camera);
  };

  _createClass(Renderer, [{
    key: "bounds",
    get:
    /** ShaderData related to renderer. */

    /** Whether it is clipped by the frustum, needs to be turned on camera.enableFrustumCulling。 */

    /** @internal */

    /** @internal */

    /** @internal */

    /**
     * The bounding volume of the renderer.
     */
    function get() {
      var changeFlag = this._transformChangeFlag;

      if (changeFlag.flag) {
        this._updateBounds(this._bounds);

        changeFlag.flag = false;
      }

      return this._bounds;
    }
  }]);

  return Renderer;
}(Component), _class2$2._localMatrixProperty = Shader.getPropertyByName("u_localMat"), _class2$2._worldMatrixProperty = Shader.getPropertyByName("u_modelMat"), _class2$2._mvMatrixProperty = Shader.getPropertyByName("u_MVMat"), _class2$2._mvpMatrixProperty = Shader.getPropertyByName("u_MVPMat"), _class2$2._mvInvMatrixProperty = Shader.getPropertyByName("u_MVInvMat"), _class2$2._normalMatrixProperty = Shader.getPropertyByName("u_normalMat"), _temp$4), (_descriptor$4 = _applyDecoratedDescriptor(_class$4.prototype, "shaderData", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new ShaderData(ShaderDataGroup.Renderer);
  }
}), _descriptor2$4 = _applyDecoratedDescriptor(_class$4.prototype, "isCulled", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3$3 = _applyDecoratedDescriptor(_class$4.prototype, "_onUpdateIndex", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor4$3 = _applyDecoratedDescriptor(_class$4.prototype, "_rendererIndex", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor5$3 = _applyDecoratedDescriptor(_class$4.prototype, "_globalShaderMacro", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new ShaderMacroCollection();
  }
}), _descriptor6$2 = _applyDecoratedDescriptor(_class$4.prototype, "_overrideUpdate", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor7$2 = _applyDecoratedDescriptor(_class$4.prototype, "_transformChangeFlag", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8$2 = _applyDecoratedDescriptor(_class$4.prototype, "_bounds", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.BoundingBox(new math.Vector3(), new math.Vector3());
  }
}), _descriptor9$1 = _applyDecoratedDescriptor(_class$4.prototype, "_mvMatrix", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Matrix();
  }
}), _descriptor10$1 = _applyDecoratedDescriptor(_class$4.prototype, "_mvpMatrix", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Matrix();
  }
}), _descriptor11$1 = _applyDecoratedDescriptor(_class$4.prototype, "_mvInvMatrix", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Matrix();
  }
}), _descriptor12$1 = _applyDecoratedDescriptor(_class$4.prototype, "_normalMatrix", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Matrix();
  }
})), _class$4);

/**
 * Transparent mode.
 */
exports.AlphaMode = void 0;

(function (AlphaMode) {
  AlphaMode[AlphaMode["Opaque"] = 0] = "Opaque";
  AlphaMode[AlphaMode["Blend"] = 1] = "Blend";
  AlphaMode[AlphaMode["CutOff"] = 2] = "CutOff";
})(exports.AlphaMode || (exports.AlphaMode = {}));

/**
 * Material.
 */

var Material = /*#__PURE__*/function (_RefObject) {
  _inheritsLoose(Material, _RefObject);

  /** Shader used by the material. */

  /** Render queue type. */

  /** Shader data. */

  /** Render state. */
  // todo: later will as a part of shaderData when shader effect frame is OK, that is more powerful and flexible.

  /**
   * Create a material instance.
   * @param engine - Engine to which the material belongs
   * @param shader - Shader used by the material
   */
  function Material(engine, shader) {
    var _this;

    _this = _RefObject.call(this, engine) || this;
    _this.shader = void 0;
    _this.renderQueueType = exports.RenderQueueType.Opaque;
    _this.shaderData = new ShaderData(ShaderDataGroup.Material);
    _this.renderState = new RenderState();
    _this.shader = shader;
    return _this;
  }
  /**
   * Clone and return the instance.
   */


  var _proto = Material.prototype;

  _proto.clone = function clone() {
    var dest = new Material(this._engine, this.shader);
    this.cloneTo(dest);
    return dest;
  }
  /**
   * Clone to the target material.
   * @param target - target material
   */
  ;

  _proto.cloneTo = function cloneTo(target) {
    target.shader = this.shader;
    target.renderQueueType = this.renderQueueType;
    this.shaderData.cloneTo(target.shaderData);
    CloneManager.deepCloneObject(this.renderState, target.renderState);
  }
  /**
   * @override
   */
  ;

  _proto._addRefCount = function _addRefCount(value) {
    _RefObject.prototype._addRefCount.call(this, value);

    this.shaderData._addRefCount(value);
  }
  /**
   * @internal
   * @todo:temporary solution
   */
  ;

  _proto._preRender = function _preRender(renderElement) {}
  /**
   * @override
   */
  ;

  _proto._onDestroy = function _onDestroy() {};

  return Material;
}(RefObject);

/**
 * Blinn-phong Material.
 */

var BlinnPhongMaterial = /*#__PURE__*/function (_Material) {
  _inheritsLoose(BlinnPhongMaterial, _Material);

  function BlinnPhongMaterial(engine) {
    var _this;

    _this = _Material.call(this, engine, Shader.find("blinn-phong")) || this;
    _this._emissiveColor = new math.Color(0, 0, 0, 1);
    _this._diffuseColor = new math.Color(1, 1, 1, 1);
    _this._specularColor = new math.Color(1, 1, 1, 1);
    _this._emissiveTexture = void 0;
    _this._diffuseTexture = void 0;
    _this._specularTexture = void 0;
    _this._shininess = 16;
    _this._alphaMode = exports.AlphaMode.Opaque;
    _this._doubleSided = false;

    _this.shaderData.enableMacro("O3_NEED_WORLDPOS");

    _this.emissiveColor = _this._emissiveColor;
    _this.diffuseColor = _this._diffuseColor;
    _this.specularColor = _this._specularColor;
    _this.shininess = _this._shininess;
    return _this;
  }
  /**
   * @override
   */


  var _proto = BlinnPhongMaterial.prototype;

  _proto.clone = function clone() {
    var dest = new BlinnPhongMaterial(this._engine);
    this.cloneTo(dest);
    return dest;
  };

  _createClass(BlinnPhongMaterial, [{
    key: "emissiveColor",
    get:
    /**
     * Emissive color.
     */
    function get() {
      return this._emissiveColor;
    },
    set: function set(value) {
      this._emissiveColor = value;
      this.shaderData.setColor("u_emissiveColor", value);
    }
    /**
     * Emissive texture.
     */

  }, {
    key: "emissiveTexture",
    get: function get() {
      return this._emissiveTexture;
    },
    set: function set(value) {
      this._emissiveTexture = value;

      if (value) {
        this.shaderData.enableMacro("O3_EMISSIVE_TEXTURE");
        this.shaderData.setTexture("u_emissiveTexture", value);
      } else {
        this.shaderData.disableMacro("O3_EMISSIVE_TEXTURE");
      }
    }
    /**
     * Diffuse color.
     */

  }, {
    key: "diffuseColor",
    get: function get() {
      return this._diffuseColor;
    },
    set: function set(value) {
      this._diffuseColor = value;
      this.shaderData.setColor("u_diffuseColor", value);
    }
    /**
     * Diffuse texture.
     */

  }, {
    key: "diffuseTexture",
    get: function get() {
      return this._diffuseTexture;
    },
    set: function set(value) {
      this._diffuseTexture = value;

      if (value) {
        this.shaderData.enableMacro("O3_DIFFUSE_TEXTURE");
        this.shaderData.setTexture("u_diffuseTexture", value);
      } else {
        this.shaderData.disableMacro("O3_DIFFUSE_TEXTURE");
      }
    }
    /**
     * Specular color.
     */

  }, {
    key: "specularColor",
    get: function get() {
      return this._specularColor;
    },
    set: function set(value) {
      this._specularColor = value;
      this.shaderData.setColor("u_specularColor", value);
    }
    /**
     * Specular texture.
     */

  }, {
    key: "specularTexture",
    get: function get() {
      return this._specularTexture;
    },
    set: function set(value) {
      this._specularTexture = value;

      if (value) {
        this.shaderData.enableMacro("O3_SPECULAR_TEXTURE");
        this.shaderData.setTexture("u_specularTexture", value);
      } else {
        this.shaderData.disableMacro("O3_SPECULAR_TEXTURE");
      }
    }
    /**
     * Set the specular reflection coefficient, the larger the value, the more convergent the specular reflection effect.
     */

  }, {
    key: "shininess",
    get: function get() {
      return this._shininess;
    },
    set: function set(value) {
      this._shininess = value;
      this.shaderData.setFloat("u_shininess", value);
    }
    /**
     * Transparent mode.
     */

  }, {
    key: "alphaMode",
    get: function get() {
      return this._alphaMode;
    },
    set: function set(v) {
      var target = this.renderState.blendState.targetBlendState;
      var depthState = this.renderState.depthState;

      switch (v) {
        case exports.AlphaMode.Opaque:
        case exports.AlphaMode.CutOff:
          {
            target.sourceColorBlendFactor = target.sourceAlphaBlendFactor = exports.BlendFactor.One;
            target.destinationColorBlendFactor = target.destinationAlphaBlendFactor = exports.BlendFactor.Zero;
            target.colorBlendOperation = target.alphaBlendOperation = exports.BlendOperation.Add;
            depthState.writeEnabled = true;
            this.renderQueueType = exports.RenderQueueType.Opaque;
          }
          break;

        case exports.AlphaMode.Blend:
          {
            target.sourceColorBlendFactor = target.sourceAlphaBlendFactor = exports.BlendFactor.SourceAlpha;
            target.destinationColorBlendFactor = target.destinationAlphaBlendFactor = exports.BlendFactor.OneMinusSourceAlpha;
            target.colorBlendOperation = target.alphaBlendOperation = exports.BlendOperation.Add;
            depthState.writeEnabled = false;
            this.renderQueueType = exports.RenderQueueType.Transparent;
          }
          break;
      }
    }
    /**
     * Whether to render both sides.
     * @remarks Only the front side is rendered by default
     */

  }, {
    key: "doubleSided",
    get: function get() {
      return this._doubleSided;
    },
    set: function set(v) {
      if (v) {
        this.renderState.rasterState.cullMode = exports.CullMode.Off;
      } else {
        this.renderState.rasterState.cullMode = exports.CullMode.Back;
      }
    }
  }]);

  return BlinnPhongMaterial;
}(Material);

/**
 * PBR (Physically-Based Rendering) Material.
 */

var PBRBaseMaterial = /*#__PURE__*/function (_Material) {
  _inheritsLoose(PBRBaseMaterial, _Material);

  /**
   * Create a pbr base material instance.
   * @param engine - Engine to which the material belongs
   */
  function PBRBaseMaterial(engine) {
    var _this;

    _this = _Material.call(this, engine, Shader.find("pbr")) || this;
    _this._baseColor = new math.Color(1, 1, 1, 1);
    _this._normalScale = 1;
    _this._emissiveColor = new math.Color(0, 0, 0, 1);
    _this._occlusionStrength = 1;
    _this._alphaCutoff = 0.5;
    _this._envMapIntensity = 1;
    _this._refractionRatio = 1 / 1.33;
    _this._refractionDepth = 1;
    _this._perturbationUOffset = 0;
    _this._perturbationVOffset = 0;
    _this._PTMMatrix = new math.Matrix(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0);
    _this._baseColorTexture = void 0;
    _this._opacityTexture = void 0;
    _this._normalTexture = void 0;
    _this._emissiveTexture = void 0;
    _this._occlusionTexture = void 0;
    _this._reflectionTexture = void 0;
    _this._refractionTexture = void 0;
    _this._perturbationTexture = void 0;
    _this._srgb = false;
    _this._srgbFast = false;
    _this._gamma = false;
    _this._getOpacityFromRGB = false;
    _this._envMapModeRefract = false;
    _this._alphaMode = exports.AlphaMode.Opaque;
    _this._doubleSided = false;

    _this.shaderData.enableMacro("O3_NEED_WORLDPOS");

    _this.baseColor = _this._baseColor;
    _this.normalScale = _this._normalScale;
    _this.emissiveColor = _this._emissiveColor;
    _this.occlusionStrength = _this._occlusionStrength;
    _this.alphaCutoff = _this._alphaCutoff;
    _this.envMapIntensity = _this._envMapIntensity;
    _this.refractionRatio = _this._refractionRatio;
    _this.refractionDepth = _this._refractionDepth;
    _this.perturbationUOffset = _this._perturbationUOffset;
    _this.perturbationVOffset = _this._perturbationVOffset;
    _this.srgb = _this._srgb;
    _this.srgbFast = _this._srgbFast;
    _this.gamma = _this._gamma;
    _this.getOpacityFromRGB = _this._getOpacityFromRGB;
    _this.envMapModeRefract = _this._envMapModeRefract;
    _this.alphaMode = _this._alphaMode;
    return _this;
  }

  _createClass(PBRBaseMaterial, [{
    key: "baseColor",
    get:
    /**
     * Base color.
     */
    function get() {
      return this._baseColor;
    },
    set: function set(v) {
      this._baseColor = v;
      this.shaderData.setColor("u_baseColorFactor", v);
    }
    /**
     * Base color texture.
     */

  }, {
    key: "baseColorTexture",
    get: function get() {
      return this._baseColorTexture;
    },
    set: function set(v) {
      this._baseColorTexture = v;

      if (v) {
        this.shaderData.enableMacro("HAS_BASECOLORMAP");
        this.shaderData.setTexture("u_baseColorSampler", v);
      } else {
        this.shaderData.disableMacro("HAS_BASECOLORMAP");
      }
    }
    /**
     * Transparent coefficient.
     */

  }, {
    key: "opacity",
    get: function get() {
      return this.baseColor.a;
    },
    set: function set(val) {
      this.baseColor.a = val;
    }
    /**
     * Transparent texture.
     * */

  }, {
    key: "opacityTexture",
    get: function get() {
      return this._opacityTexture;
    },
    set: function set(v) {
      this._opacityTexture = v;

      if (v) {
        this.shaderData.enableMacro("HAS_OPACITYMAP");
        this.shaderData.setTexture("u_opacitySampler", v);
      } else {
        this.shaderData.disableMacro("HAS_OPACITYMAP");
      }
    }
    /**
     * Normal texture.
     */

  }, {
    key: "normalTexture",
    get: function get() {
      return this._normalTexture;
    },
    set: function set(v) {
      this._normalTexture = v;

      if (v) {
        this.shaderData.enableMacro("O3_HAS_NORMALMAP");
        this.shaderData.setTexture("u_normalSampler", v);
      } else {
        this.shaderData.disableMacro("O3_HAS_NORMALMAP");
      }
    }
    /**
     * Normal scale factor.
     */

  }, {
    key: "normalScale",
    get: function get() {
      return this._normalScale;
    },
    set: function set(v) {
      this._normalScale = v;
      this.shaderData.setFloat("u_normalScale", v);
    }
    /**
     * Emissive texture.
     */

  }, {
    key: "emissiveTexture",
    get: function get() {
      return this._emissiveTexture;
    },
    set: function set(v) {
      this._emissiveTexture = v;

      if (v) {
        this.shaderData.enableMacro("HAS_EMISSIVEMAP");
        this.shaderData.setTexture("u_emissiveSampler", v);
      } else {
        this.shaderData.disableMacro("HAS_EMISSIVEMAP");
      }
    }
    /**
     * Emissive color.
     */

  }, {
    key: "emissiveColor",
    get: function get() {
      return this._emissiveColor;
    },
    set: function set(v) {
      this._emissiveColor = v;
      this.shaderData.setColor("u_emissiveFactor", v);
    }
    /**
     * Occlusive texture.
     */

  }, {
    key: "occlusionTexture",
    get: function get() {
      return this._occlusionTexture;
    },
    set: function set(v) {
      this._occlusionTexture = v;

      if (v) {
        this.shaderData.enableMacro("HAS_OCCLUSIONMAP");
        this.shaderData.setTexture("u_occlusionSampler", v);
      } else {
        this.shaderData.disableMacro("HAS_OCCLUSIONMAP");
      }
    }
    /**
     * Occlusive intensity.
     */

  }, {
    key: "occlusionStrength",
    get: function get() {
      return this._occlusionStrength;
    },
    set: function set(v) {
      this._occlusionStrength = v;
      this.shaderData.setFloat("u_occlusionStrength", v);
    }
    /**
     * Alpha cutoff value.
     * @remarks fragments with alpha channel lower than cutoff value will be discarded.
     */

  }, {
    key: "alphaCutoff",
    get: function get() {
      return this._alphaCutoff;
    },
    set: function set(v) {
      this._alphaCutoff = v;
      this.shaderData.setFloat("u_alphaCutoff", v);
    }
    /**
     * Reflection texture.
     * @remarks if this texture is not set, the global environmentMapLight's specularTexture will be used.
     */

  }, {
    key: "reflectionTexture",
    get: function get() {
      return this._reflectionTexture;
    },
    set: function set(v) {
      this._reflectionTexture = v;

      if (v) {
        this.shaderData.enableMacro("HAS_REFLECTIONMAP");
        this.shaderData.setTexture("u_reflectionSampler", v);
      } else {
        this.shaderData.disableMacro("HAS_REFLECTIONMAP");
      }
    }
    /**
     * Reflection intensity.
     */

  }, {
    key: "envMapIntensity",
    get: function get() {
      return this._envMapIntensity;
    },
    set: function set(v) {
      this._envMapIntensity = v;
      this.shaderData.setFloat("u_envMapIntensity", v);
    }
    /**
     * The ratio of IOR(index of refraction) from air to medium.eg. 1 / 1.33 from air to water.
     */

  }, {
    key: "refractionRatio",
    get: function get() {
      return this._refractionRatio;
    },
    set: function set(v) {
      this._refractionRatio = v;
      this.shaderData.setFloat("u_refractionRatio", v);
    }
    /**
     * The depth value of the local refraction texture, used to simulate the refraction distance.
     */

  }, {
    key: "refractionDepth",
    get: function get() {
      return this._refractionDepth;
    },
    set: function set(v) {
      this._refractionDepth = v;
      this.shaderData.setFloat("u_refractionDepth", v);
    }
    /**
     * Local refraction texture.
     */

  }, {
    key: "refractionTexture",
    get: function get() {
      return this._refractionTexture;
    },
    set: function set(v) {
      this._refractionTexture = v;

      if (v) {
        this.shaderData.enableMacro("HAS_REFRACTIONMAP");
        this.shaderData.setTexture("u_refractionSampler", v);
        this.shaderData.setMatrix("u_PTMMatrix", this._PTMMatrix);
      } else {
        this.shaderData.disableMacro("HAS_REFRACTIONMAP");
      }
    }
    /**
     * Perturbation texture.
     */

  }, {
    key: "perturbationTexture",
    get: function get() {
      return this._perturbationTexture;
    },
    set: function set(v) {
      this._perturbationTexture = v;

      if (v) {
        this.shaderData.enableMacro("HAS_PERTURBATIONMAP");
        this.shaderData.setTexture("u_perturbationSampler", v);
      } else {
        this.shaderData.disableMacro("HAS_PERTURBATIONMAP");
      }
    }
    /**
     * Offset of the perturbation texture coordinate on S.
     */

  }, {
    key: "perturbationUOffset",
    get: function get() {
      return this._perturbationUOffset;
    },
    set: function set(v) {
      this._perturbationUOffset = v;
      this.shaderData.setFloat("u_perturbationUOffset", v);
    }
    /**
     * Offset of the perturbation texture coordinate on T.
     */

  }, {
    key: "perturbationVOffset",
    get: function get() {
      return this._perturbationVOffset;
    },
    set: function set(v) {
      this._perturbationVOffset = v;
      this.shaderData.setFloat("u_perturbationVOffset", v);
    }
    /**
     * Whether to use SRGB color space.
     */

  }, {
    key: "srgb",
    get: function get() {
      return this._srgb;
    },
    set: function set(v) {
      this._srgb = v;

      if (v) {
        this.shaderData.enableMacro("MANUAL_SRGB");
      } else {
        this.shaderData.disableMacro("MANUAL_SRGB");
      }
    }
    /**
     * Whether sRGB linear correction uses approximate fast algorithm.
     * */

  }, {
    key: "srgbFast",
    get: function get() {
      return this._srgbFast;
    },
    set: function set(v) {
      this._srgbFast = v;

      if (v) {
        this.shaderData.enableMacro("SRGB_FAST_APPROXIMATION");
      } else {
        this.shaderData.disableMacro("SRGB_FAST_APPROXIMATION");
      }
    }
    /**
     * Whether to use Gamma correction.
     */

  }, {
    key: "gamma",
    get: function get() {
      return this._gamma;
    },
    set: function set(v) {
      this._gamma = v;

      if (v) {
        this.shaderData.enableMacro("GAMMA");
      } else {
        this.shaderData.disableMacro("GAMMA");
      }
    }
    /**
     * Whether to take the brightness value of the opacityTexture as the transparency.
     */

  }, {
    key: "getOpacityFromRGB",
    get: function get() {
      return this._getOpacityFromRGB;
    },
    set: function set(v) {
      this._getOpacityFromRGB = v;

      if (v) {
        this.shaderData.enableMacro("GETOPACITYFROMRGB");
      } else {
        this.shaderData.disableMacro("GETOPACITYFROMRGB");
      }
    }
    /**
     * Whether to refract global environmentMapLight, default reflection.
     * */

  }, {
    key: "envMapModeRefract",
    get: function get() {
      return this._envMapModeRefract;
    },
    set: function set(v) {
      this._envMapModeRefract = v;

      if (v) {
        this.shaderData.enableMacro("ENVMAPMODE_REFRACT");
      } else {
        this.shaderData.disableMacro("ENVMAPMODE_REFRACT");
      }
    }
    /**
     * Transparent mode.
     */

  }, {
    key: "alphaMode",
    get: function get() {
      return this._alphaMode;
    },
    set: function set(v) {
      var target = this.renderState.blendState.targetBlendState;
      var depthState = this.renderState.depthState;
      this.shaderData.disableMacro("ALPHA_CUTOFF");
      this.shaderData.disableMacro("ALPHA_BLEND");

      switch (v) {
        case exports.AlphaMode.Opaque:
          {
            target.sourceColorBlendFactor = target.sourceAlphaBlendFactor = exports.BlendFactor.One;
            target.destinationColorBlendFactor = target.destinationAlphaBlendFactor = exports.BlendFactor.Zero;
            target.colorBlendOperation = target.alphaBlendOperation = exports.BlendOperation.Add;
            depthState.writeEnabled = true;
            this.renderQueueType = exports.RenderQueueType.Opaque;
          }
          break;

        case exports.AlphaMode.Blend:
          {
            this.shaderData.enableMacro("ALPHA_BLEND");
            target.sourceColorBlendFactor = target.sourceAlphaBlendFactor = exports.BlendFactor.SourceAlpha;
            target.destinationColorBlendFactor = target.destinationAlphaBlendFactor = exports.BlendFactor.OneMinusSourceAlpha;
            target.colorBlendOperation = target.alphaBlendOperation = exports.BlendOperation.Add;
            depthState.writeEnabled = false;
            this.renderQueueType = exports.RenderQueueType.Transparent;
          }
          break;

        case exports.AlphaMode.CutOff:
          {
            this.shaderData.enableMacro("ALPHA_CUTOFF");
            target.sourceColorBlendFactor = target.sourceAlphaBlendFactor = exports.BlendFactor.One;
            target.destinationColorBlendFactor = target.destinationAlphaBlendFactor = exports.BlendFactor.Zero;
            target.colorBlendOperation = target.alphaBlendOperation = exports.BlendOperation.Add;
            depthState.writeEnabled = true;
            this.renderQueueType = exports.RenderQueueType.AlphaTest;
          }
          break;
      }
    }
    /**
     * Whether to render both sides.
     * @remarks Only the front side is rendered by default
     */

  }, {
    key: "doubleSided",
    get: function get() {
      return this._doubleSided;
    },
    set: function set(v) {
      if (v) {
        this.renderState.rasterState.cullMode = exports.CullMode.Off;
      } else {
        this.renderState.rasterState.cullMode = exports.CullMode.Back;
      }
    }
  }]);

  return PBRBaseMaterial;
}(Material);

/**
 * PBR (Metallic-Roughness Workflow) Material.
 */

var PBRMaterial = /*#__PURE__*/function (_PBRBaseMaterial) {
  _inheritsLoose(PBRMaterial, _PBRBaseMaterial);

  /**
   * Create a pbr metallic-roughness workflow material instance.
   * @param engine - Engine to which the material belongs
   */
  function PBRMaterial(engine) {
    var _this;

    _this = _PBRBaseMaterial.call(this, engine) || this;
    _this._metallicFactor = 1;
    _this._roughnessFactor = 1;
    _this._metallicTexture = void 0;
    _this._roughnessTexture = void 0;
    _this._metallicRoughnessTexture = void 0;

    _this.shaderData.enableMacro("IS_METALLIC_WORKFLOW");

    _this.metallicFactor = _this._metallicFactor;
    _this.roughnessFactor = _this._roughnessFactor;
    return _this;
  }
  /**
   * @override
   */


  var _proto = PBRMaterial.prototype;

  _proto.clone = function clone() {
    var dest = new PBRMaterial(this._engine);
    this.cloneTo(dest);
    return dest;
  };

  _createClass(PBRMaterial, [{
    key: "metallicFactor",
    get:
    /**
     * Metallic factor.
     */
    function get() {
      return this._metallicFactor;
    },
    set: function set(v) {
      this._metallicFactor = v;
      this.shaderData.setFloat("u_metal", v);
    }
    /**
     * Rough factor.
     */

  }, {
    key: "roughnessFactor",
    get: function get() {
      return this._roughnessFactor;
    },
    set: function set(v) {
      this._roughnessFactor = v;
      this.shaderData.setFloat("u_roughness", v);
    }
    /**
     * Metallic texture.
     */

  }, {
    key: "metallicTexture",
    get: function get() {
      return this._metallicTexture;
    },
    set: function set(v) {
      this._metallicTexture = v;

      if (v) {
        this.shaderData.enableMacro("HAS_METALMAP");
        this.shaderData.setTexture("u_metallicSampler", v);
      } else {
        this.shaderData.disableMacro("HAS_METALMAP");
      }
    }
    /**
     * Rough texture.
     */

  }, {
    key: "roughnessTexture",
    get: function get() {
      return this._roughnessTexture;
    },
    set: function set(v) {
      this._roughnessTexture = v;

      if (v) {
        this.shaderData.enableMacro("HAS_ROUGHNESSMAP");
        this.shaderData.setTexture("u_roughnessSampler", v);
      } else {
        this.shaderData.disableMacro("HAS_ROUGHNESSMAP");
      }
    }
    /**
     * Metallic rough texture.
     */

  }, {
    key: "metallicRoughnessTexture",
    get: function get() {
      return this._metallicRoughnessTexture;
    },
    set: function set(v) {
      this._metallicRoughnessTexture = v;

      if (v) {
        this.shaderData.enableMacro("HAS_METALROUGHNESSMAP");
        this.shaderData.setTexture("u_metallicRoughnessSampler", v);
      } else {
        this.shaderData.disableMacro("HAS_METALROUGHNESSMAP");
      }
    }
  }]);

  return PBRMaterial;
}(PBRBaseMaterial);

/**
 * PBR (Specular-Glossiness Workflow) Material.
 */

var PBRSpecularMaterial = /*#__PURE__*/function (_PBRBaseMaterial) {
  _inheritsLoose(PBRSpecularMaterial, _PBRBaseMaterial);

  /**
   * Create a pbr specular-glossiness workflow material instance.
   * @param engine - Engine to which the material belongs
   */
  function PBRSpecularMaterial(engine) {
    var _this;

    _this = _PBRBaseMaterial.call(this, engine) || this;
    _this._specularColor = new math.Color(1, 1, 1, 1);
    _this._glossinessFactor = 1;
    _this._specularGlossinessTexture = void 0;
    _this.specularColor = _this._specularColor;
    _this.glossinessFactor = _this._glossinessFactor;
    return _this;
  }
  /**
   * @override
   */


  var _proto = PBRSpecularMaterial.prototype;

  _proto.clone = function clone() {
    var dest = new PBRSpecularMaterial(this._engine);
    this.cloneTo(dest);
    return dest;
  };

  _createClass(PBRSpecularMaterial, [{
    key: "specularColor",
    get:
    /**
     * Specular color.
     */
    function get() {
      return this._specularColor;
    },
    set: function set(v) {
      this._specularColor = v;
      this.shaderData.setColor("u_specularFactor", v);
    }
    /**
     * Glossiness factor.
     */

  }, {
    key: "glossinessFactor",
    get: function get() {
      return this._glossinessFactor;
    },
    set: function set(v) {
      this._glossinessFactor = v;
      this.shaderData.setFloat("u_glossinessFactor", v);
    }
    /**
     * Specular and glossiness texture.
     */

  }, {
    key: "specularGlossinessTexture",
    get: function get() {
      return this._specularGlossinessTexture;
    },
    set: function set(v) {
      this._specularGlossinessTexture = v;

      if (v) {
        this.shaderData.enableMacro("HAS_SPECULARGLOSSINESSMAP");
        this.shaderData.setTexture("u_specularGlossinessSampler", v);
      } else {
        this.shaderData.disableMacro("HAS_SPECULARGLOSSINESSMAP");
      }
    }
  }]);

  return PBRSpecularMaterial;
}(PBRBaseMaterial);

/**
 * Unlit Material.
 */

var UnlitMaterial = /*#__PURE__*/function (_Material) {
  _inheritsLoose(UnlitMaterial, _Material);

  /**
   * Create a unlit material instance.
   * @param engine - Engine to which the material belongs
   */
  function UnlitMaterial(engine) {
    var _this;

    _this = _Material.call(this, engine, Shader.find("unlit")) || this;
    _this._baseColor = new math.Color(1, 1, 1, 1);
    _this._baseColorTexture = void 0;
    _this._alphaMode = exports.AlphaMode.Opaque;
    _this._doubleSided = false;

    _this.shaderData.enableMacro("OMIT_NORMAL");

    _this.baseColor = _this._baseColor;
    return _this;
  }
  /**
   * @override
   */


  var _proto = UnlitMaterial.prototype;

  _proto.clone = function clone() {
    var dest = new UnlitMaterial(this._engine);
    this.cloneTo(dest);
    return dest;
  };

  _createClass(UnlitMaterial, [{
    key: "baseColor",
    get:
    /**
     * Base color.
     */
    function get() {
      return this._baseColor;
    },
    set: function set(value) {
      this._baseColor = value;
      this.shaderData.setColor("u_baseColor", value);
    }
    /**
     * Base color texture.
     */

  }, {
    key: "baseColorTexture",
    get: function get() {
      return this._baseColorTexture;
    },
    set: function set(value) {
      this._baseColorTexture = value;

      if (value) {
        this.shaderData.enableMacro("O3_BASECOLOR_TEXTURE");
        this.shaderData.setTexture("u_baseColorTexture", value);
      } else {
        this.shaderData.disableMacro("O3_BASECOLOR_TEXTURE");
      }
    }
    /**
     * Transparent mode.
     */

  }, {
    key: "alphaMode",
    get: function get() {
      return this._alphaMode;
    },
    set: function set(v) {
      var target = this.renderState.blendState.targetBlendState;
      var depthState = this.renderState.depthState;

      switch (v) {
        case exports.AlphaMode.Opaque:
        case exports.AlphaMode.CutOff:
          {
            target.sourceColorBlendFactor = target.sourceAlphaBlendFactor = exports.BlendFactor.One;
            target.destinationColorBlendFactor = target.destinationAlphaBlendFactor = exports.BlendFactor.Zero;
            target.colorBlendOperation = target.alphaBlendOperation = exports.BlendOperation.Add;
            depthState.writeEnabled = true;
            this.renderQueueType = exports.RenderQueueType.Opaque;
          }
          break;

        case exports.AlphaMode.Blend:
          {
            target.sourceColorBlendFactor = target.sourceAlphaBlendFactor = exports.BlendFactor.SourceAlpha;
            target.destinationColorBlendFactor = target.destinationAlphaBlendFactor = exports.BlendFactor.OneMinusSourceAlpha;
            target.colorBlendOperation = target.alphaBlendOperation = exports.BlendOperation.Add;
            depthState.writeEnabled = false;
            this.renderQueueType = exports.RenderQueueType.Transparent;
          }
          break;
      }
    }
    /**
     * Whether to render both sides.
     * @remarks Only the front side is rendered by default
     */

  }, {
    key: "doubleSided",
    get: function get() {
      return this._doubleSided;
    },
    set: function set(v) {
      if (v) {
        this.renderState.rasterState.cullMode = exports.CullMode.Off;
      } else {
        this.renderState.rasterState.cullMode = exports.CullMode.Back;
      }
    }
  }]);

  return UnlitMaterial;
}(Material);

var passNum = 0;
/**
 * RednerPass.
 */

var RenderPass = /*#__PURE__*/function () {
  /**
   * Create a RenderPass.
   * @param name - Pass name
   * @param priority - Priority, less than 0 before the default pass, greater than 0 after the default pass
   * @param renderTarget - The specified Render Target
   * @param replaceMaterial -  Replaced material
   * @param mask - Perform bit and operations with Entity.Layer to filter the objects that this Pass needs to render
   * @param clearParam - Clear the background color of renderTarget
   */
  function RenderPass(name, priority, renderTarget, replaceMaterial, mask, clearParam) {
    if (name === void 0) {
      name = "RENDER_PASS" + passNum++;
    }

    if (priority === void 0) {
      priority = 0;
    }

    if (renderTarget === void 0) {
      renderTarget = null;
    }

    if (replaceMaterial === void 0) {
      replaceMaterial = null;
    }

    if (mask === void 0) {
      mask = null;
    }

    if (clearParam === void 0) {
      clearParam = new math.Vector4(0, 0, 0, 0);
    }

    this.name = void 0;
    this.enabled = void 0;
    this.priority = void 0;
    this.renderTarget = void 0;
    this.replaceMaterial = void 0;
    this.mask = void 0;
    this.renderOverride = void 0;
    this.clearMode = void 0;
    this._clearParam = void 0;
    this.name = name;
    this.enabled = true;
    this.priority = priority;
    this.renderTarget = renderTarget;
    this.replaceMaterial = replaceMaterial;
    this.mask = mask || exports.Layer.Everything;
    this.renderOverride = false; // If renderOverride is set to true, you need to implement the render method

    this.clearMode = exports.ClearMode.SOLID_COLOR;
    this._clearParam = clearParam; // PASS use render target's clearParam
  }
  /**
   * Canvas clear parameters, the default is to use the clearColor of RenderTarget.
   */


  var _proto = RenderPass.prototype;

  /**
   * Rendering callback, will be executed if renderOverride is set to true.
   * @param camera - Camera
   * @param queue - RenderQueue
   */
  _proto.render = function render(camera, queue) {}
  /**
   * Post rendering callback.
   * @param camera - Camera
   * @param queue - RenderQueue
   */
  ;

  _proto.preRender = function preRender(camera, queue) {}
  /**
   * Post rendering callback.
   * @param camera - Camera
   * @param queue - RenderQueue
   */
  ;

  _proto.postRender = function postRender(camera, queue) {};

  _createClass(RenderPass, [{
    key: "clearParam",
    get: function get() {
      return this._clearParam;
    },
    set: function set(v) {
      this._clearParam = v;
    }
  }]);

  return RenderPass;
}();

/**
 * @private
 */

var SeparateSpritePass = /*#__PURE__*/function (_RenderPass) {
  _inheritsLoose(SeparateSpritePass, _RenderPass);

  function SeparateSpritePass(name, priority) {
    var _this;

    if (name === void 0) {
      name = "SeparateSprite";
    }

    if (priority === void 0) {
      priority = 10;
    }

    _this = _RenderPass.call(this, name, priority) || this;
    _this._spriteItems = void 0;
    _this.clearMode = exports.ClearMode.DONT_CLEAR;
    _this.renderOverride = true;
    _this._spriteItems = [];
    return _this;
  }

  var _proto = SeparateSpritePass.prototype;

  _proto.preRender = function preRender() {
    this.enabled = this.isUsed;
  };

  _proto.render = function render(camera) {
    var rhi = camera.renderHardware;

    this._sortByDistance(camera.eyePos);

    var items = this._spriteItems;
    var material = camera._renderPipeline._defaultSpriteMaterial;

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      rhi.drawSprite(material, item.positionQuad, item.uvRect, item.tintColor, item.texture, item.renderMode, item.camera);
    }

    items.length = 0;
  };

  _proto.postRender = function postRender(camera) {
    if (this.enabled) {
      camera.renderHardware.flushSprite(camera.engine, camera._hardwareRenderer._defaultSpriteMaterial);
    }
  };

  _proto._sortByDistance = function _sortByDistance(eyePos) {
    if (this._spriteItems.length > 1) {
      this._spriteItems = this._spriteItems.sort(function (item1, item2) {
        if (item1.component.renderPriority === item2.component.renderPriority) {
          var pos1 = item1.component.node.worldPosition;
          var pos2 = item2.component.node.worldPosition;
          var dis = math.Vector3.distanceSquared(pos2, eyePos) - math.Vector3.distanceSquared(pos1, eyePos);
          return dis;
        } else {
          return item1.component.renderPriority - item2.component.renderPriority;
        }
      });
    }
  };

  _proto.pushSprite = function pushSprite(component, positionQuad, uvRect, tintColor, texture, renderMode, camera) {
    this._spriteItems.push({
      component: component,
      positionQuad: positionQuad,
      uvRect: uvRect,
      tintColor: tintColor,
      texture: texture,
      renderMode: renderMode,
      camera: camera
    });
  };

  _createClass(SeparateSpritePass, [{
    key: "isUsed",
    get: function get() {
      return this._spriteItems.length > 0;
    }
  }]);

  return SeparateSpritePass;
}(RenderPass);

/**
 * Basic render pipeline.
 */

var BasicRenderPipeline = /*#__PURE__*/function () {
  /**
   * Create a basic render pipeline.
   * @param camera - Camera
   */
  function BasicRenderPipeline(camera) {
    this._defaultSpriteMaterial = void 0;
    this._camera = void 0;
    this._queue = void 0;
    this._defaultPass = void 0;
    this._renderPassArray = void 0;
    this._canvasDepthPass = void 0;
    this._separateSpritePass = void 0;
    this._camera = camera;
    this._queue = new RenderQueue();
    this._renderPassArray = [];
    this._defaultPass = new RenderPass("default", 0, null, null, 0);
    this.addRenderPass(this._defaultPass); // TODO: remove in next version.

    var material = this._defaultSpriteMaterial = new Material(camera.engine, Shader.find("Sprite"));
    var target = material.renderState.blendState.targetBlendState;
    target.sourceColorBlendFactor = target.sourceAlphaBlendFactor = exports.BlendFactor.SourceAlpha;
    target.destinationColorBlendFactor = target.destinationAlphaBlendFactor = exports.BlendFactor.OneMinusSourceAlpha;
    target.colorBlendOperation = target.alphaBlendOperation = exports.BlendOperation.Add;
    material.renderState.depthState.writeEnabled = false;
    material.renderQueueType = exports.RenderQueueType.Transparent;
    material.renderState.rasterState.cullMode = exports.CullMode.Off;
  }
  /**
   * Default render pass.
   */


  var _proto = BasicRenderPipeline.prototype;

  /**
   * Add render pass.
   * @param nameOrPass - The name of this Pass or RenderPass object. When it is a name, the following parameters need to be provided
   * @param priority - Priority, less than 0 before the default pass, greater than 0 after the default pass
   * @param renderTarget - The specified Render Target
   * @param replaceMaterial -  Replaced material
   * @param mask - Perform bit and operations with Entity.Layer to filter the objects that this Pass needs to render
   * @param clearParam - Clear the background color of renderTarget
   */
  _proto.addRenderPass = function addRenderPass(nameOrPass, priority, renderTarget, replaceMaterial, mask, clearParam) {
    if (priority === void 0) {
      priority = null;
    }

    if (renderTarget === void 0) {
      renderTarget = null;
    }

    if (replaceMaterial === void 0) {
      replaceMaterial = null;
    }

    if (mask === void 0) {
      mask = null;
    }

    if (clearParam === void 0) {
      clearParam = new math.Vector4(0, 0, 0, 0);
    }

    if (typeof nameOrPass === "string") {
      var renderPass = new RenderPass(nameOrPass, priority, renderTarget, replaceMaterial, mask, clearParam);

      this._renderPassArray.push(renderPass);
    } else if (nameOrPass instanceof RenderPass) {
      this._renderPassArray.push(nameOrPass);
    }

    this._renderPassArray.sort(function (p1, p2) {
      return p1.priority - p2.priority;
    });
  }
  /**
   * Remove render pass by name or render pass object.
   * @param nameOrPass - Render pass name or render pass object
   */
  ;

  _proto.removeRenderPass = function removeRenderPass(nameOrPass) {
    var pass;
    if (typeof nameOrPass === "string") pass = this.getRenderPass(nameOrPass);else if (nameOrPass instanceof RenderPass) pass = nameOrPass;

    if (pass) {
      var idx = this._renderPassArray.indexOf(pass);

      this._renderPassArray.splice(idx, 1);
    }
  }
  /**
   * Get render pass by name.
   * @param  name - Render pass name
   */
  ;

  _proto.getRenderPass = function getRenderPass(name) {
    for (var i = 0, len = this._renderPassArray.length; i < len; i++) {
      var pass = this._renderPassArray[i];
      if (pass.name === name) return pass;
    }

    return null;
  }
  /**
   * Render queue.
   */
  ;

  /**
   * Destroy internal resources.
   */
  _proto.destroy = function destroy() {}
  /**
   * Perform scene rendering.
   * @param context - Render context
   * @param cubeFace - Render surface of cube texture
   */
  ;

  _proto.render = function render(context, cubeFace) {
    var camera = this._camera;
    var queue = this._queue;
    queue.clear();

    camera.engine._componentsManager.callRender(context);

    queue.sort(camera.entity.transform.worldPosition);
    if (this._canvasDepthPass) this._canvasDepthPass.enabled = false;

    if (this._separateSpritePass && this._separateSpritePass.isUsed) {
      // If the default rendertarget is not canvas, you need to draw on the canvas again to ensure that there is depth information
      if (this._defaultPass.renderTarget) {
        if (!this._canvasDepthPass) {
          this._canvasDepthPass = new RenderPass("CanvasDepthRenderPass", 0, null, null, 0);
          this._canvasDepthPass.clearMode = exports.ClearMode.DONT_CLEAR;
          this.addRenderPass(this._canvasDepthPass);
        }

        this._canvasDepthPass.enabled = true;
      }
    }

    for (var i = 0, len = this._renderPassArray.length; i < len; i++) {
      this._drawRenderPass(this._renderPassArray[i], camera, cubeFace);
    }
  };

  _proto._drawRenderPass = function _drawRenderPass(pass, camera, cubeFace) {
    pass.preRender(camera, this.queue);

    if (pass.enabled) {
      var rhi = camera.scene.engine._hardwareRenderer;
      var renderTarget = camera.renderTarget || pass.renderTarget;
      rhi.activeRenderTarget(renderTarget, camera);
      rhi.setRenderTargetFace(renderTarget, cubeFace);
      rhi.clearRenderTarget(camera.engine, pass.clearMode, pass.clearParam);

      if (pass.renderOverride) {
        pass.render(camera, this.queue);
      } else {
        this.queue.render(camera, pass.replaceMaterial, pass.mask);
      }

      rhi.blitRenderTarget(renderTarget);
    }

    pass.postRender(camera, this.queue);
  }
  /**
   * Push a render element to the render queue.
   * @param element - Render element
   */
  ;

  _proto.pushPrimitive = function pushPrimitive(element) {
    this._queue.pushPrimitive(element);
  };

  _proto.pushSprite = function pushSprite(component, positionQuad, uvRect, tintColor, texture, renderMode, camera) {
    if (component.separateDraw) {
      if (!this._separateSpritePass) {
        this._separateSpritePass = new SeparateSpritePass();
        this.addRenderPass(this._separateSpritePass);
      }

      this._separateSpritePass.pushSprite(component, positionQuad, uvRect, tintColor, texture, renderMode, camera);

      return;
    }

    this.queue.pushSprite(component, positionQuad, uvRect, tintColor, texture, renderMode, camera);
  };

  _createClass(BasicRenderPipeline, [{
    key: "defaultRenderPass",
    get: function get() {
      return this._defaultPass;
    }
  }, {
    key: "queue",
    get: function get() {
      return this._queue;
    }
  }]);

  return BasicRenderPipeline;
}();

/**
 * Rendering context.
 */
var RenderContext = /*#__PURE__*/function () {
  function RenderContext() {
    this._camera = void 0;
    this._viewProjectMatrix = new math.Matrix();
  }

  /**
   * @internal
   */
  RenderContext._getRenderContext = function _getRenderContext(camera) {
    var context = RenderContext._renderContext;
    context._camera = camera;
    math.Matrix.multiply(camera.projectionMatrix, camera.viewMatrix, context._viewProjectMatrix);
    return context;
  }
  /** @internal */
  ;

  return RenderContext;
}();
RenderContext._renderContext = new RenderContext();

var _dec, _class$3, _class2$1, _descriptor$3, _descriptor2$3, _descriptor3$2, _descriptor4$2, _descriptor5$2, _descriptor6$1, _descriptor7$1, _descriptor8$1, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _class3, _temp$3;

var MathTemp = function MathTemp() {};
/**
 * ClearFlag, which controls camera's background.
 */


MathTemp.tempMat4 = new math.Matrix();
MathTemp.tempVec4 = new math.Vector4();
MathTemp.tempVec3 = new math.Vector3();
var ClearFlags;
/**
 * Camera component, as the entrance to the three-dimensional world.
 */

(function (ClearFlags) {
  ClearFlags[ClearFlags["DepthSky"] = 0] = "DepthSky";
  ClearFlags[ClearFlags["DepthColor"] = 1] = "DepthColor";
  ClearFlags[ClearFlags["Depth"] = 2] = "Depth";
  ClearFlags[ClearFlags["None"] = 3] = "None";
})(ClearFlags || (ClearFlags = {}));

var Camera = (_dec = dependencies(Transform), _dec(_class$3 = (_class2$1 = (_temp$3 = _class3 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Camera, _Component);

  /**
   * Create the Camera component.
   * @param entity - Entity
   */
  function Camera(entity) {
    var _this;

    _this = _Component.call(this, entity) || this;
    _this.priority = 0;
    _this.enableFrustumCulling = true;
    _this.cullingMask = exports.Layer.Everything;
    _this.shaderData = new ShaderData(ShaderDataGroup.Camera);
    _this._globalShaderMacro = new ShaderMacroCollection();

    _initializerDefineProperty(_this, "_frustum", _descriptor$3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_renderPipeline", _descriptor2$3, _assertThisInitialized(_this));

    _this._isOrthographic = false;
    _this._isProjMatSetting = false;
    _this._clearMode = exports.ClearMode.SOLID_COLOR;
    _this._nearClipPlane = 0.1;
    _this._farClipPlane = 100;
    _this._fieldOfView = 45;
    _this._orthographicSize = 10;
    _this._isProjectionDirty = true;
    _this._isInvProjMatDirty = true;
    _this._isFrustumProjectDirty = true;
    _this._customAspectRatio = undefined;
    _this._renderTarget = null;

    _initializerDefineProperty(_this, "_frustumViewChangeFlag", _descriptor3$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_transform", _descriptor4$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_isViewMatrixDirty", _descriptor5$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_isInvViewProjDirty", _descriptor6$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_projectionMatrix", _descriptor7$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_viewMatrix", _descriptor8$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_backgroundColor", _descriptor9, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_viewport", _descriptor10, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_inverseProjectionMatrix", _descriptor11, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_inverseViewMatrix", _descriptor12, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_lastAspectSize", _descriptor13, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_invViewProjMat", _descriptor14, _assertThisInitialized(_this));

    var transform = _this.entity.transform;
    _this._transform = transform;
    _this._isViewMatrixDirty = transform.registerWorldChangeFlag();
    _this._isInvViewProjDirty = transform.registerWorldChangeFlag();
    _this._frustumViewChangeFlag = transform.registerWorldChangeFlag();
    _this._renderPipeline = new BasicRenderPipeline(_assertThisInitialized(_this));

    _this.shaderData._addRefCount(1);

    _this.setClearMode();

    return _this;
  }
  /**
   * Restore the automatic calculation of projection matrix through fieldOfView, nearClipPlane and farClipPlane.
   */


  var _proto = Camera.prototype;

  _proto.resetProjectionMatrix = function resetProjectionMatrix() {
    this._isProjMatSetting = false;

    this._projMatChange();
  }
  /**
   * Restore the automatic calculation of the aspect ratio through the viewport aspect ratio.
   */
  ;

  _proto.resetAspectRatio = function resetAspectRatio() {
    this._customAspectRatio = undefined;

    this._projMatChange();
  }
  /**
   * Transform a point from world space to viewport space.
   * @param point - Point in world space
   * @param out - A point in the viewport space, X and Y are the viewport space coordinates, Z is the viewport depth, the near clipping plane is 0, the far clipping plane is 1, and W is the world unit distance from the camera
   * @returns Point in viewport space
   */
  ;

  _proto.worldToViewportPoint = function worldToViewportPoint(point, out) {
    math.Matrix.multiply(this.projectionMatrix, this.viewMatrix, MathTemp.tempMat4);
    MathTemp.tempVec4.setValue(point.x, point.y, point.z, 1.0);
    math.Vector4.transform(MathTemp.tempVec4, MathTemp.tempMat4, MathTemp.tempVec4);
    var w = MathTemp.tempVec4.w;
    var nx = MathTemp.tempVec4.x / w;
    var ny = MathTemp.tempVec4.y / w;
    var nz = MathTemp.tempVec4.z / w; // Transform of coordinate axis.

    out.x = (nx + 1.0) * 0.5;
    out.y = (1.0 - ny) * 0.5;
    out.z = nz;
    out.w = w;
    return out;
  }
  /**
   * Transform a point from viewport space to world space.
   * @param point - Point in viewport. X and Y are the viewport space coordinates, Z is the viewport depth. The near clipping plane is 0, and the far clipping plane is 1.
   * @param out - Point in world space
   * @returns Point in world space
   */
  ;

  _proto.viewportToWorldPoint = function viewportToWorldPoint(point, out) {
    var invViewProjMat = this.invViewProjMat;
    return this._innerViewportToWorldPoint(point, invViewProjMat, out);
  }
  /**
   * Generate a ray by a point in viewport.
   * @param point Point in viewport point.
   * @param out - Ray
   * @returns Ray
   */
  ;

  _proto.viewportPointToRay = function viewportPointToRay(point, out) {
    var clipPoint = MathTemp.tempVec3; // Use the intersection of the near clipping plane as the origin point.

    clipPoint.setValue(point.x, point.y, 0);
    var origin = this.viewportToWorldPoint(clipPoint, out.origin); // Use the intersection of the far clipping plane as the origin point.

    clipPoint.z = 1.0;

    var farPoint = this._innerViewportToWorldPoint(clipPoint, this._invViewProjMat, clipPoint);

    math.Vector3.subtract(farPoint, origin, out.direction);
    out.direction.normalize();
    return out;
  }
  /**
   * Transform the X and Y coordinates of a point from screen space to viewport space
   * @param point - Point in screen space
   * @param out - Point in viewport space
   * @returns Point in viewport space
   */
  ;

  _proto.screenToViewportPoint = function screenToViewportPoint(point, out) {
    var canvas = this.engine.canvas;
    var viewport = this.viewport;
    out.x = (point.x / canvas.width - viewport.x) / viewport.z;
    out.y = (point.y / canvas.height - viewport.y) / viewport.w;
    return out;
  }
  /**
   * Transform the X and Y coordinates of a point from viewport space to screen space.
   * @param point - Point in viewport space
   * @param out - Point in screen space
   * @returns Point in screen space
   */
  ;

  _proto.viewportToScreenPoint = function viewportToScreenPoint(point, out) {
    var canvas = this.engine.canvas;
    var viewport = this.viewport;
    out.x = (viewport.x + point.x * viewport.z) * canvas.width;
    out.y = (viewport.y + point.y * viewport.w) * canvas.height;
    return out;
  }
  /**
   * Transform a point from world space to screen space.
   * @param point - Point in world space
   * @param out - Point of screen space
   * @returns Point of screen space
   */
  ;

  _proto.worldToScreenPoint = function worldToScreenPoint(point, out) {
    this.worldToViewportPoint(point, out);
    return this.viewportToScreenPoint(out, out);
  }
  /**
   * Transform a point from screen space to world space.
   * @param point - Screen space point
   * @param out - Point in world space
   * @returns Point in world space
   */
  ;

  _proto.screenToWorldPoint = function screenToWorldPoint(point, out) {
    this.screenToViewportPoint(point, out);
    return this.viewportToWorldPoint(out, out);
  }
  /**
   * Manually call the rendering of the camera.
   * @param cubeFace - Cube rendering surface collection
   */
  ;

  _proto.render = function render(cubeFace) {
    // compute cull frustm.
    var context = RenderContext._getRenderContext(this);

    if (this.enableFrustumCulling && (this._frustumViewChangeFlag.flag || this._isFrustumProjectDirty)) {
      this._frustum.calculateFromMatrix(context._viewProjectMatrix);

      this._frustumViewChangeFlag.flag = false;
      this._isFrustumProjectDirty = false;
    }

    this._updateShaderData(context); // union scene and camera macro.


    ShaderMacroCollection.unionCollection(this.scene.shaderData._macroCollection, this.shaderData._macroCollection, this._globalShaderMacro);

    this._renderPipeline.render(context, cubeFace);

    this._engine._renderCount++;
  }
  /**
   * @override
   * @inheritdoc
   */
  ;

  _proto._onActive = function _onActive() {
    this.entity.scene.attachRenderCamera(this);
  }
  /**
   * @override
   * @inheritdoc
   */
  ;

  _proto._onInActive = function _onInActive() {
    this.entity.scene.detachRenderCamera(this);
  }
  /**
   * @override
   * @inheritdoc
   */
  ;

  _proto._onDestroy = function _onDestroy() {
    var _this$_renderPipeline;

    (_this$_renderPipeline = this._renderPipeline) === null || _this$_renderPipeline === void 0 ? void 0 : _this$_renderPipeline.destroy();

    this._isInvViewProjDirty.destroy();

    this._isViewMatrixDirty.destroy();

    this.shaderData._addRefCount(-1);
  };

  _proto._projMatChange = function _projMatChange() {
    this._isFrustumProjectDirty = true;
    this._isProjectionDirty = true;
    this._isInvProjMatDirty = true;
    this._isInvViewProjDirty.flag = true;
  };

  _proto._innerViewportToWorldPoint = function _innerViewportToWorldPoint(point, invViewProjMat, out) {
    // Depth is a normalized value, 0 is nearPlane, 1 is farClipPlane.
    var depth = point.z * 2 - 1; // Transform to clipping space matrix

    var clipPoint = MathTemp.tempVec4;
    clipPoint.setValue(point.x * 2 - 1, 1 - point.y * 2, depth, 1);
    math.Vector4.transform(clipPoint, invViewProjMat, clipPoint);
    var invW = 1.0 / clipPoint.w;
    out.x = clipPoint.x * invW;
    out.y = clipPoint.y * invW;
    out.z = clipPoint.z * invW;
    return out;
  };

  _proto._updateShaderData = function _updateShaderData(context) {
    var shaderData = this.shaderData;
    shaderData.setMatrix(Camera._viewMatrixProperty, this.viewMatrix);
    shaderData.setMatrix(Camera._projectionMatrixProperty, this.projectionMatrix);
    shaderData.setMatrix(Camera._vpMatrixProperty, context._viewProjectMatrix);
    shaderData.setMatrix(Camera._inverseViewMatrixProperty, this.inverseViewMatrix);
    shaderData.setMatrix(Camera._inverseProjectionMatrixProperty, this.inverseProjectionMatrix);
    shaderData.setVector3(Camera._cameraPositionProperty, this._transform.worldPosition);
  }
  /**
   * @private
   * The inverse matrix of view projection matrix.
   */
  ;

  /**
   * @deprecated
   * @todo Involving the rendering pipeline to modify the rhi.clearRenderTarget method.
   * @param clearMode
   * @param backgroundColor
   */
  _proto.setClearMode = function setClearMode(clearMode, backgroundColor) {
    if (clearMode === void 0) {
      clearMode = exports.ClearMode.SOLID_COLOR;
    }

    if (backgroundColor === void 0) {
      backgroundColor = new math.Vector4(0.25, 0.25, 0.25, 1);
    }

    this._clearMode = clearMode;
    this._backgroundColor = backgroundColor;
    this._renderPipeline.defaultRenderPass.clearParam = backgroundColor;
    this._renderPipeline.defaultRenderPass.clearMode = clearMode;
  };

  _createClass(Camera, [{
    key: "nearClipPlane",
    get:
    /** Rendering priority - A Camera with higher priority will be rendererd on top of a camera with lower priority. */

    /** Whether to enable frustum culling, it is enabled by default. */

    /**
     * Culling mask - which layers the camera renders.
     * @remarks Support bit manipulation, conresponding to Entity's layer.
     */

    /** Shader data. */

    /** @internal */

    /** @internal */

    /** @internal */

    /**
     * Near clip plane - the cloest point to the camera when rendering occurs.
     */
    function get() {
      return this._nearClipPlane;
    },
    set: function set(value) {
      this._nearClipPlane = value;

      this._projMatChange();
    }
    /**
     * Far clip plane - the furthest point to the camera when rendering occurs.
     */

  }, {
    key: "farClipPlane",
    get: function get() {
      return this._farClipPlane;
    },
    set: function set(value) {
      this._farClipPlane = value;

      this._projMatChange();
    }
    /**
     * The camera's view angle. activing when camera use perspective projection.
     */

  }, {
    key: "fieldOfView",
    get: function get() {
      return this._fieldOfView;
    },
    set: function set(value) {
      this._fieldOfView = value;

      this._projMatChange();
    }
    /**
     * Aspect ratio. The default is automatically calculated by the viewport's aspect ratio. If it is manually set, the manual value will be kept. Call resetAspectRatio() to restore it.
     */

  }, {
    key: "aspectRatio",
    get: function get() {
      var _this$_customAspectRa;

      var canvas = this._entity.engine.canvas;
      return (_this$_customAspectRa = this._customAspectRatio) != null ? _this$_customAspectRa : canvas.width * this._viewport.z / (canvas.height * this._viewport.w);
    },
    set: function set(value) {
      this._customAspectRatio = value;

      this._projMatChange();
    }
    /**
     * Viewport, normalized expression, the upper left corner is (0, 0), and the lower right corner is (1, 1).
     * @remarks Re-assignment is required after modification to ensure that the modification takes effect.
     */

  }, {
    key: "viewport",
    get: function get() {
      return this._viewport;
    },
    set: function set(value) {
      if (value !== this._viewport) {
        value.cloneTo(this._viewport);
      }

      this._projMatChange();
    }
    /**
     * Whether it is orthogonal, the default is false. True will use orthographic projection, false will use perspective projection.
     */

  }, {
    key: "isOrthographic",
    get: function get() {
      return this._isOrthographic;
    },
    set: function set(value) {
      this._isOrthographic = value;

      this._projMatChange();
    }
    /**
     * Half the size of the camera in orthographic mode.
     */

  }, {
    key: "orthographicSize",
    get: function get() {
      return this._orthographicSize;
    },
    set: function set(value) {
      this._orthographicSize = value;

      this._projMatChange();
    }
    /**
     * Clear background flags.
     */

  }, {
    key: "clearFlags",
    get: function get() {
      throw "not implemented";
    }
    /**
     * @todo Skybox refactor
     */
    ,
    set: function set(value) {
      throw "not implemented";
    }
    /**
     * Clear the background color of the viewport, which takes effect when clearFlags is DepthColor.
     */

  }, {
    key: "backgroundColor",
    get: function get() {
      return this._backgroundColor;
    },
    set: function set(value) {
      this.setClearMode(this._clearMode, value);
    }
    /**
     * Clear the background sky of the viewport, active when clearFlags is DepthSky.
     * @todo Render pipeline modification
     */

  }, {
    key: "backgroundSky",
    get: function get() {
      throw new Error("not implemented");
    }
    /**
     * View matrix.
     */

  }, {
    key: "viewMatrix",
    get: function get() {
      // Remove scale
      if (this._isViewMatrixDirty.flag) {
        this._isViewMatrixDirty.flag = false;
        math.Matrix.invert(this._transform.worldMatrix, this._viewMatrix);
      }

      return this._viewMatrix;
    }
    /**
     * The projection matrix is ​​calculated by the relevant parameters of the camera by default. If it is manually set, the manual value will be maintained. Call resetProjectionMatrix() to restore it.
     */

  }, {
    key: "projectionMatrix",
    get: function get() {
      var canvas = this._entity.engine.canvas;

      if ((!this._isProjectionDirty || this._isProjMatSetting) && this._lastAspectSize.x === canvas.width && this._lastAspectSize.y === canvas.height) {
        return this._projectionMatrix;
      }

      this._isProjectionDirty = false;
      this._lastAspectSize.x = canvas.width;
      this._lastAspectSize.y = canvas.height;
      var aspectRatio = this.aspectRatio;

      if (!this._isOrthographic) {
        math.Matrix.perspective(math.MathUtil.degreeToRadian(this._fieldOfView), aspectRatio, this._nearClipPlane, this._farClipPlane, this._projectionMatrix);
      } else {
        var width = this._orthographicSize * aspectRatio;
        var height = this._orthographicSize;
        math.Matrix.ortho(-width, width, -height, height, this._nearClipPlane, this._farClipPlane, this._projectionMatrix);
      }

      return this._projectionMatrix;
    }
    /**
     * Whether to enable HDR.
     * @todo When render pipeline modification
     */
    ,
    set: function set(value) {
      this._projectionMatrix = value;
      this._isProjMatSetting = true;

      this._projMatChange();
    }
  }, {
    key: "enableHDR",
    get: function get() {
      console.log("not implemention");
      return false;
    },
    set: function set(value) {
      console.log("not implemention");
    }
    /**
     * RenderTarget. After setting, it will be rendered to the renderTarget. If it is empty, it will be rendered to the main canvas.
     */

  }, {
    key: "renderTarget",
    get: function get() {
      return this._renderTarget;
    },
    set: function set(value) {
      this._renderTarget = value;
    }
  }, {
    key: "invViewProjMat",
    get: function get() {
      if (this._isInvViewProjDirty.flag) {
        this._isInvViewProjDirty.flag = false;
        math.Matrix.multiply(this.inverseViewMatrix, this.inverseProjectionMatrix, this._invViewProjMat);
      }

      return this._invViewProjMat;
    }
    /**
     * @private
     * The inverse of the projection matrix.
     */

  }, {
    key: "inverseProjectionMatrix",
    get: function get() {
      if (this._isInvProjMatDirty) {
        this._isInvProjMatDirty = false;
        math.Matrix.invert(this.projectionMatrix, this._inverseProjectionMatrix);
      }

      return this._inverseProjectionMatrix;
    } //-------------------------------------------------deprecated---------------------------------------------------

    /**
     * @deprecated
     * View matrix inverse matrix.
     */

  }, {
    key: "inverseViewMatrix",
    get: function get() {
      this._transform.worldMatrix.cloneTo(this._inverseViewMatrix);

      return this._inverseViewMatrix;
    }
  }]);

  return Camera;
}(Component), _class3._viewMatrixProperty = Shader.getPropertyByName("u_viewMat"), _class3._projectionMatrixProperty = Shader.getPropertyByName("u_projMat"), _class3._vpMatrixProperty = Shader.getPropertyByName("u_VPMat"), _class3._inverseViewMatrixProperty = Shader.getPropertyByName("u_viewInvMat"), _class3._inverseProjectionMatrixProperty = Shader.getPropertyByName("u_projInvMat"), _class3._cameraPositionProperty = Shader.getPropertyByName("u_cameraPos"), _temp$3), (_descriptor$3 = _applyDecoratedDescriptor(_class2$1.prototype, "_frustum", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.BoundingFrustum();
  }
}), _descriptor2$3 = _applyDecoratedDescriptor(_class2$1.prototype, "_renderPipeline", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3$2 = _applyDecoratedDescriptor(_class2$1.prototype, "_frustumViewChangeFlag", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4$2 = _applyDecoratedDescriptor(_class2$1.prototype, "_transform", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5$2 = _applyDecoratedDescriptor(_class2$1.prototype, "_isViewMatrixDirty", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_isInvViewProjDirty", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_projectionMatrix", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Matrix();
  }
}), _descriptor8$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_viewMatrix", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Matrix();
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2$1.prototype, "_backgroundColor", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Vector4();
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2$1.prototype, "_viewport", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Vector4(0, 0, 1, 1);
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2$1.prototype, "_inverseProjectionMatrix", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Matrix();
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2$1.prototype, "_inverseViewMatrix", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Matrix();
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2$1.prototype, "_lastAspectSize", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Vector2(0, 0);
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class2$1.prototype, "_invViewProjMat", [deepClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new math.Matrix();
  }
})), _class2$1)) || _class$3);

var mimeType = {
  json: "json",
  gltf: "json",
  mtl: "json",
  prefab: "json",
  txt: "text",
  bin: "arraybuffer",
  png: "image",
  webp: "image",
  jpg: "image"
};
var defaultRetryCount = 4;
var defaultTimeout = 15000;
var defaultInterval = 500;

/**
 * Web request.
 * @param url - The link
 * @param config - Load configuration
 */
function request(url, config) {
  if (config === void 0) {
    config = {};
  }

  return new AssetPromise(function (resolve, reject, setProgress) {
    var _config$retryCount, _config$retryInterval, _config$timeout, _config$type;

    var retryCount = (_config$retryCount = config.retryCount) != null ? _config$retryCount : defaultRetryCount;
    var retryInterval = (_config$retryInterval = config.retryInterval) != null ? _config$retryInterval : defaultInterval;
    config.timeout = (_config$timeout = config.timeout) != null ? _config$timeout : defaultTimeout;
    config.type = (_config$type = config.type) != null ? _config$type : getMimeTypeFromUrl(url);
    var realRequest = config.type === "image" ? requestImage : requestRes;
    var lastError;
    var executor = new MultiExecutor(function () {
      return realRequest(url, config).onProgress(setProgress).then(function (res) {
        resolve(res);
        executor.stop();
      }).catch(function (err) {
        return lastError = err;
      });
    }, retryCount, retryInterval);
    executor.start(function () {
      reject(lastError);
    });
  });
}

function requestImage(url, config) {
  return new AssetPromise(function (resolve, reject) {
    var timeout = config.timeout;
    var img = new wechatAdapter.Image();

    var onerror = function onerror() {
      reject(new Error("request " + url + " fail"));
    };

    img.onerror = onerror;
    img.onabort = onerror;
    var timeoutId = setTimeout(function () {
      reject(new Error("request " + url + " timeout"));
    }, timeout);

    img.onload = function (timeoutId) {
      return function () {
        // Call requestAnimationFrame to avoid iOS's bug.
        wechatAdapter.requestAnimationFrame(function () {
          //@ts-ignore
          resolve(img);
        });
        clearTimeout(timeoutId);
      };
    }(timeoutId);

    img.crossOrigin = "anonymous";
    img.src = url;
  });
}

function requestRes(url, config) {
  {
    return new AssetPromise(function (resolve, reject, setProgress) {
      var _config$method;

      wechatAdapter.window.request({
        url: url,
        method: (_config$method = config.method) != null ? _config$method : "get",
        timeout: config.timeout,
        header: config.headers,
        dataType: config.type === 'json' ? 'json' : undefined,
        responseType: config.type === 'arraybuffer' ? config.type : 'text',
        data: config.body,
        success: function success(res) {
          resolve(res.data);
        },
        fail: function fail(e) {
          reject(new Error("request failed from: " + url));
        }
      });
    });
  }
}

function getMimeTypeFromUrl(url) {
  var extname = url.substring(url.lastIndexOf(".") + 1);
  return mimeType[extname];
}

var MultiExecutor = /*#__PURE__*/function () {
  function MultiExecutor(execFunc, totalCount, interval) {
    this.execFunc = execFunc;
    this.totalCount = totalCount;
    this.interval = interval;
    this._timeoutId = -100;
    this._currentCount = 0;
    this.done = void 0;
    this.exec = this.exec.bind(this);
  }

  var _proto = MultiExecutor.prototype;

  _proto.start = function start(done) {
    this.done = done;
    this.exec();
  };

  _proto.stop = function stop() {
    clearTimeout(this._timeoutId);
  };

  _proto.exec = function exec() {
    var _this = this;

    if (this._currentCount >= this.totalCount) {
      this.done && this.done();
      return;
    }

    this._currentCount++;
    this.execFunc(this._currentCount).then(function () {
      //@ts-ignore
      _this._timeoutId = setTimeout(_this.exec, _this.interval);
    });
  };

  return MultiExecutor;
}();

/**
 * Loader abstract class.
 */
var Loader = function Loader(useCache) {
  this.useCache = useCache;
  this.request = request;
};

/**
 * Asset Type.
 */
exports.AssetType = void 0;

(function (AssetType) {
  AssetType[AssetType["Text"] = 0] = "Text";
  AssetType[AssetType["JSON"] = 1] = "JSON";
  AssetType[AssetType["Buffer"] = 2] = "Buffer";
  AssetType[AssetType["Texture2D"] = 3] = "Texture2D";
  AssetType[AssetType["TextureCube"] = 4] = "TextureCube";
  AssetType[AssetType["Material"] = 5] = "Material";
  AssetType[AssetType["Mesh"] = 6] = "Mesh";
  AssetType[AssetType["AnimationClip"] = 7] = "AnimationClip";
  AssetType[AssetType["Perfab"] = 8] = "Perfab";
  AssetType[AssetType["KTX"] = 9] = "KTX";
  AssetType[AssetType["KTXCube"] = 10] = "KTXCube";
})(exports.AssetType || (exports.AssetType = {}));

var ColliderFeature = /*#__PURE__*/function (_SceneFeature) {
  _inheritsLoose(ColliderFeature, _SceneFeature);

  function ColliderFeature() {
    var _this;

    _this = _SceneFeature.call(this) || this;
    _this.colliders = void 0;
    _this.colliders = [];
    return _this;
  }
  /**
   * Add a collider component.
   * @param collider - The collider component to add
   */


  var _proto = ColliderFeature.prototype;

  _proto.attachCollider = function attachCollider(collider) {
    this.colliders.push(collider);
  }
  /**
   * Remove a collider component.
   * @param collider - The collider component to remove
   */
  ;

  _proto.detachCollider = function detachCollider(collider) {
    var index = this.colliders.indexOf(collider);

    if (index != -1) {
      this.colliders.splice(index, 1);
    }
  };

  return ColliderFeature;
}(SceneFeature);

/**
 * Define collider data.
 */

var Collider = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Collider, _Component);

  /**
   * @param {Entity} entity
   */
  function Collider(entity) {
    return _Component.call(this, entity) || this;
  }

  var _proto = Collider.prototype;

  _proto._onEnable = function _onEnable() {
    this.scene.findFeature(ColliderFeature).attachCollider(this);
  };

  _proto._onDisable = function _onDisable() {
    this.scene.findFeature(ColliderFeature).detachCollider(this);
  };

  return Collider;
}(Component);

/**
 * Axis Aligned Bound Box (AABB).
 * @extends Collider
 */

var ABoxCollider = /*#__PURE__*/function (_Collider) {
  _inheritsLoose(ABoxCollider, _Collider);

  /**
   * Constructor of ABoxCollider.
   * @param entity - Entity which the box belongs to
   */
  function ABoxCollider(entity) {
    var _this;

    _this = _Collider.call(this, entity) || this;
    _this.boxMin = void 0;
    _this.boxMax = void 0;
    _this._corners = [];
    _this._cornerFlag = false;
    _this.boxMin = new math.Vector3(-0.5, -0.5, -0.5);
    _this.boxMax = new math.Vector3(0.5, 0.5, 0.5);
    return _this;
  }
  /**
   * Set box from the minimum point of the box and the maximum point of the box.
   * @param min - The minimum point of the box
   * @param max - The maximum point of the box
   */


  var _proto = ABoxCollider.prototype;

  _proto.setBoxMinMax = function setBoxMinMax(min, max) {
    this.boxMin = min;
    this.boxMax = max;
    this._cornerFlag = true;
  }
  /**
   * Set box from the center point and the size of the bounding box.
   * @param center - The center point
   * @param size - The size of the bounding box
   */
  ;

  _proto.setBoxCenterSize = function setBoxCenterSize(center, size) {
    var halfSize = ABoxCollider._tempVec3;
    math.Vector3.scale(size, 0.5, halfSize);
    math.Vector3.add(center, halfSize, this.boxMax);
    math.Vector3.subtract(center, halfSize, this.boxMin);
    this._cornerFlag = true;
  }
  /**
   * Get the eight corners of this bounding box.
   */
  ;

  _proto.getCorners = function getCorners() {
    if (this._cornerFlag) {
      var minX = this.boxMin.x;
      var minY = this.boxMin.y;
      var minZ = this.boxMin.z;
      var w = this.boxMax.x - minX;
      var h = this.boxMax.y - minY;
      var d = this.boxMax.z - minZ;

      if (this._corners.length === 0) {
        for (var i = 0; i < 8; ++i) {
          this._corners.push(new math.Vector3());
        }
      }

      this._corners[0].setValue(minX + w, minY + h, minZ + d);

      this._corners[1].setValue(minX, minY + h, minZ + d);

      this._corners[2].setValue(minX, minY, minZ + d);

      this._corners[3].setValue(minX + w, minY, minZ + d);

      this._corners[4].setValue(minX + w, minY + h, minZ);

      this._corners[5].setValue(minX, minY + h, minZ);

      this._corners[6].setValue(minX, minY, minZ);

      this._corners[7].setValue(minX + w, minY, minZ);

      this._cornerFlag = false;
    }

    return this._corners; // if (this._corners.length === 0) {
    //   const minX = this.boxMin.x;
    //   const minY = this.boxMin.y;
    //   const minZ = this.boxMin.z;
    //   const w = this.boxMax.x - minX;
    //   const h = this.boxMax.y - minY;
    //   const d = this.boxMax.z - minZ;
    //   this._corners = [
    //     new Vector3(minX + w, minY + h, minZ + d),
    //     new Vector3(minX, minY + h, minZ + d),
    //     new Vector3(minX, minY, minZ + d),
    //     new Vector3(minX + w, minY, minZ + d),
    //     new Vector3(minX + w, minY + h, minZ),
    //     new Vector3(minX, minY + h, minZ),
    //     new Vector3(minX, minY, minZ),
    //     new Vector3(minX + w, minY, minZ)
    //   ];
    // }
    // return this._corners;
  };

  return ABoxCollider;
}(Collider);
ABoxCollider._tempVec3 = new math.Vector3();

/**
 * A bounding sphere.
 */
var ASphereCollider = /*#__PURE__*/function (_Collider) {
  _inheritsLoose(ASphereCollider, _Collider);

  /**
   * Constructor of ASphereCollider.
   * @param  entity - Entity which the sphere belongs to
   */
  function ASphereCollider(entity) {
    var _this;

    _this = _Collider.call(this, entity) || this;
    /** The center point of the sphere. */

    _this.center = void 0;
    _this.radius = void 0;
    _this.center = new math.Vector3();
    /** The radius of the sphere. */

    _this.radius = 1;
    return _this;
  }
  /**
   * Set the center and radius of the sphere.
   * @param center - The center point of the sphere
   * @param radius - The radius of the sphere
   */


  var _proto = ASphereCollider.prototype;

  _proto.setSphere = function setSphere(center, radius) {
    this.center = center;
    this.radius = radius;
  };

  return ASphereCollider;
}(Collider);

/**
 * Represents a plane in three dimensional space.
 */
var PlaneCollider = /*#__PURE__*/function (_Collider) {
  _inheritsLoose(PlaneCollider, _Collider);

  /**
   * Constructor of PlaneCollider.
   * @param entity - Entity which the plane belongs to
   */
  function PlaneCollider(entity) {
    var _this;

    _this = _Collider.call(this, entity) || this;
    /** The point through the plane. */

    _this.planePoint = void 0;
    _this.normal = void 0;
    _this.planePoint = new math.Vector3();
    /** The normal direction of the plane. */

    _this.normal = new math.Vector3(0, 1, 0);
    return _this;
  }
  /**
   * Set a plane from point and normal.
   * @param  point - The point through the plane
   * @param  normal - The normal direction of the plane
   */


  var _proto = PlaneCollider.prototype;

  _proto.setPlane = function setPlane(point, normal) {
    this.planePoint = point;
    this.normal = normal;
  };

  return PlaneCollider;
}(Collider);

/**
 * The result of raycast test.
 */
var RaycastHit =
/**
 * Constructor of RaycastHit.
 */
function RaycastHit() {
  this.distance = void 0;
  this.collider = void 0;
  this.point = void 0;

  /** The distance from the collider point to the origin of the ray. */
  this.distance = Number.MAX_VALUE;
  /** The collider that has been intersecting. */

  this.collider = null;
  /** The point where the ray intersects.  */

  this.point = null;
};

/** @internal */

var _tempVec3 = new math.Vector3();
/** @internal */


var _tempPlane = new math.Plane();
/** @internal */


var _tepmBox = new math.BoundingBox();
/** @internal */


var _tempShpere = new math.BoundingSphere();
/**
 * Perform ray detection on all Colliders in the scene and return to the one closest to the beginning of the ray.
 * @param _ray - The ray to perform
 * @param _outPos - The point where the ray intersects
 * @return The collider that has been intersecting
 */


Scene.prototype.raycast = function (ray, _outPos, tag) {
  if (tag === void 0) {
    tag = exports.Layer.Everything;
  }

  var cf = this.findFeature(ColliderFeature);
  var colliders = cf.colliders;
  var nearestHit = new RaycastHit();

  for (var i = 0, len = colliders.length; i < len; i++) {
    var collider = colliders[i];

    if (!collider.entity.isActiveInHierarchy) {
      continue;
    }

    if (!(collider.entity.layer & tag)) {
      continue;
    }

    var hit = new RaycastHit();

    if (collider.raycast(ray, hit)) {
      if (hit.distance < nearestHit.distance) {
        nearestHit = hit;
      }
    }
  } // end of for


  if (_outPos && nearestHit.collider) {
    nearestHit.point.cloneTo(_outPos);
  }

  return nearestHit.collider;
};
/**
 * Perform ray cast.
 * @param ray - The ray
 * @param hit - The raycasthit
 */


ABoxCollider.prototype.raycast = function (ray, hit) {
  var localRay = _getLocalRay(this, ray); // TODO


  this.boxMin.cloneTo(_tepmBox.min);
  this.boxMax.cloneTo(_tepmBox.max);
  var intersect = localRay.intersectBox(_tepmBox);

  if (intersect !== -1) {
    _updateHitResult(this, localRay, intersect, hit, ray.origin);

    return true;
  } else {
    return false;
  } // end of else

};

ASphereCollider.prototype.raycast = function (ray, hit) {
  var localRay = _getLocalRay(this, ray); // TODO


  this.center.cloneTo(_tempShpere.center);
  _tempShpere.radius = this.radio;
  var intersect = localRay.intersectSphere(_tempShpere);

  if (intersect !== -1) {
    _updateHitResult(this, localRay, intersect, hit, ray.origin);

    return true;
  } else {
    return false;
  } // end of else

};

PlaneCollider.prototype.raycast = function (ray, hit) {
  var localRay = _getLocalRay(this, ray); // TODO


  this.normal.cloneTo(_tempPlane.normal);
  _tempPlane.distance = -math.Vector3.dot(this.planePoint, _tempPlane.normal);
  var intersect = localRay.intersectPlane(_tempPlane);

  if (intersect !== -1) {
    _updateHitResult(this, localRay, intersect, hit, ray.origin);

    return true;
  } else {
    return false;
  } // end of else

};
/**
 * Calculate the raycasthit in world space.
 * @param ray - The ray
 * @param distance - The distance
 * @param outHit - The raycasthit
 */


function _updateHitResult(collider, ray, distance, outHit, origin) {
  var hitPos = _tempVec3;
  ray.getPoint(distance, hitPos);
  math.Vector3.transformCoordinate(hitPos, collider.entity.transform.worldMatrix, hitPos);
  outHit.distance = math.Vector3.distance(origin, hitPos);
  outHit.collider = collider;
  outHit.point = hitPos;
}
/**
 * transform ray to local space
 * @param {Ray} ray
 * @private
 */


function _getLocalRay(collider, ray) {
  var worldToLocal = collider.entity.getInvModelMatrix(); // o = worldToLocal * vec4(ray.origin, 1)

  var o = new math.Vector3();
  math.Vector3.transformCoordinate(ray.origin, worldToLocal, o); // d = worldToLocal * vec4(ray.direction, 0)

  var d = new math.Vector3();

  _transformDirection(d, ray.direction, worldToLocal);

  return new math.Ray(o, d);
} // a: vec3
// m: mat4
// return m * vec3(a, 0)


function _transformDirection(out, a, m) {
  var x = a.x;
  var y = a.y;
  var z = a.z;
  var e = m.elements;
  out.x = x * e[0] + y * e[4] + z * e[8];
  out.y = x * e[1] + y * e[5] + z * e[9];
  out.z = x * e[2] + y * e[6] + z * e[10];
  return out;
}

/**
 * Mesh Asset Object
 */
var Mesh = /*#__PURE__*/function (_EngineObject) {
  _inheritsLoose(Mesh, _EngineObject);

  /**
   * Contructor of mesh
   * @param name - Name
   */
  function Mesh(engine, name) {
    var _this;

    _this = _EngineObject.call(this, engine) || this;
    _this.name = void 0;
    _this.primitives = [];
    _this.groups = [];
    _this.weights = void 0;
    _this.bounds = new math.BoundingBox(new math.Vector3(), new math.Vector3());
    _this.name = name;
    return _this;
  }

  var _proto = Mesh.prototype;

  _proto.updatePrimitiveWeightsIndices = function updatePrimitiveWeightsIndices(weightsIndices) {// this.primitives.forEach((primitive) => {
    //   primitive.updateWeightsIndices(weightsIndices);
    // });
  };

  _proto.destroy = function destroy() {
    this.primitives = null;
  };

  return Mesh;
}(EngineObject);

/**
 * Mesh skin data, equal glTF skins define
 */

var Skin = /*#__PURE__*/function (_EngineObject) {
  _inheritsLoose(Skin, _EngineObject);

  /**
   * Contructor of skin
   * @param name - name
   */
  function Skin(name) {
    var _this;

    _this = _EngineObject.call(this, null) || this;
    _this.inverseBindMatrices = void 0;
    _this.joints = void 0;
    _this.skeleton = void 0;
    _this.inverseBindMatrices = []; // inverse bind matrix array, element type: gl-matrix.mat4

    _this.joints = []; // joints name array, element type: string

    _this.skeleton = "none"; // root bone name

    return _this;
  }

  return Skin;
}(EngineObject);

var _class$2, _descriptor$2, _descriptor2$2, _temp$2;

function addPrimitivesRefCount(mesh, refCount) {
  var primitives = mesh.primitives;

  for (var i = 0, l = primitives.length; i < l; i++) {
    primitives[i]._addRefCount(refCount);
  }
}
/**
 * MeshRenderer Component
 */


var MeshRenderer = (_class$2 = (_temp$2 = /*#__PURE__*/function (_Renderer) {
  _inheritsLoose(MeshRenderer, _Renderer);

  function MeshRenderer(entity) {
    var _this;

    _this = _Renderer.call(this, entity) || this;
    _this._mesh = void 0;

    _initializerDefineProperty(_this, "_instanceMaterials", _descriptor$2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_sharedMaterials", _descriptor2$2, _assertThisInitialized(_this));

    _this._mesh = null; // Mesh Asset Object

    return _this;
  }
  /**
   * Current mesh object.
   */


  var _proto = MeshRenderer.prototype;

  /**
   * Specify a material that will be used by a primitive and the material could be shared.
   * @param primitiveIndex - Primitive's index
   * @param material - Material.
   */
  _proto.setSharedMaterial = function setSharedMaterial(primitiveIndex, material) {
    if (this._sharedMaterials[primitiveIndex]) {
      this._sharedMaterials[primitiveIndex]._addRefCount(-1);
    }

    material._addRefCount(1);

    this._sharedMaterials[primitiveIndex] = material;
  }
  /**
   * Specify a material that will be used by a primitive.
   * @param primitiveIndex - Primitive's index
   * @param material - Material
   */
  ;

  _proto.setMaterial = function setMaterial(primitiveIndex, material) {
    if (this._instanceMaterials[primitiveIndex]) {
      this._instanceMaterials[primitiveIndex]._addRefCount(-1);
    }

    material._addRefCount(1);

    this._instanceMaterials[primitiveIndex] = material;
  }
  /**
   * Get the material object exclusive to this component
   * @param primitiveIndex - Primitive's index
   * @return Material
   */
  ;

  _proto.getInstanceMaterial = function getInstanceMaterial(primitiveIndex) {
    return this._instanceMaterials[primitiveIndex];
  }
  /**
   * Get the shared primitive material object
   * @param primitiveIndex Primitive's index
   * @return Material
   */
  ;

  _proto.getSharedMaterial = function getSharedMaterial(primitiveIndex) {
    return this._sharedMaterials[primitiveIndex];
  }
  /**
   * Execute render
   * @param camera
   */
  ;

  _proto.render = function render(camera) {
    var mesh = this._mesh;

    if (!mesh) {
      return;
    }

    var renderPipeline = camera._renderPipeline;
    var primitives = mesh.primitives,
        groups = mesh.groups; //-- render every primitive

    for (var i = 0, len = primitives.length; i < len; i++) {
      var primitive = primitives[i];
      var material = this._instanceMaterials[i] || this._sharedMaterials[i];

      if (material) {
        var element = RenderElement.getFromPool();
        element.setValue(this, primitive, groups[i], material);
        renderPipeline.pushPrimitive(element);
      } else {
        Logger.error("Primitive has no material: " + primitive.name);
      }
    } // end of for

  }
  /**
   * Destroy the component.
   */
  ;

  _proto.destroy = function destroy() {
    _Renderer.prototype.destroy.call(this); //-- release mesh


    this._mesh = null; //-- materials

    this._instanceMaterials = [];
    this._sharedMaterials = []; // delete reference count

    for (var i = 0; i < this._instanceMaterials.length; i++) {
      this._instanceMaterials[i]._addRefCount(-1);
    } // delete reference count


    for (var _i = 0; _i < this._sharedMaterials.length; _i++) {
      this._sharedMaterials[_i]._addRefCount(-1);
    }

    if (this._mesh) {
      addPrimitivesRefCount(this._mesh, -1);
    }
  }
  /**
   * @override
   */
  ;

  _proto._updateBounds = function _updateBounds(worldBounds) {
    var localBounds = this.mesh.bounds;
    var worldMatrix = this._entity.transform.worldMatrix;
    math.BoundingBox.transform(localBounds, worldMatrix, worldBounds);
  };

  _createClass(MeshRenderer, [{
    key: "mesh",
    get: function get() {
      return this._mesh;
    }
    /**
     * Specify mesh which will be used to render.
     * @param mesh - Mesh Object
     */
    ,
    set: function set(mesh) {
      if (this._mesh) {
        addPrimitivesRefCount(this._mesh, -1);
      }

      addPrimitivesRefCount(mesh, 1);
      this._mesh = mesh;
      this._sharedMaterials = [];
      this._instanceMaterials = [];
    }
  }]);

  return MeshRenderer;
}(Renderer), _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class$2.prototype, "_instanceMaterials", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2$2 = _applyDecoratedDescriptor(_class$2.prototype, "_sharedMaterials", [shallowClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class$2);

/**
 * Two-dimensional texture.
 */

var Texture2D = /*#__PURE__*/function (_Texture) {
  _inheritsLoose(Texture2D, _Texture);

  /**
   * Create Texture2D.
   * @param engine - Define the engine to use to render this texture
   * @param width - Texture width
   * @param height - Texture height
   * @param format - Texture format. default  `TextureFormat.R8G8B8A8`
   * @param mipmap - Whether to use multi-level texture
   */
  function Texture2D(engine, width, height, format, mipmap) {
    var _this;

    if (format === void 0) {
      format = exports.TextureFormat.R8G8B8A8;
    }

    if (mipmap === void 0) {
      mipmap = true;
    }

    _this = _Texture.call(this, engine) || this;
    _this._format = void 0;
    _this._compressedMipFilled = 0;
    var rhi = engine._hardwareRenderer;
    var gl = rhi.gl;
    var isWebGL2 = rhi.isWebGL2;

    if (!Texture._supportTextureFormat(format, rhi)) {
      throw new Error("Texture format is not supported:" + exports.TextureFormat[format]);
    }

    if (mipmap && !isWebGL2 && (!Texture._isPowerOf2(width) || !Texture._isPowerOf2(height))) {
      Logger.warn("non-power-2 texture is not supported for mipmap in WebGL1,and has automatically downgraded to non-mipmap");
      mipmap = false;
    }

    var formatDetail = Texture._getFormatDetail(format, gl, isWebGL2);

    _this._glTexture = gl.createTexture();
    _this._formatDetail = formatDetail;
    _this._rhi = rhi;
    _this._target = gl.TEXTURE_2D;
    _this._mipmap = mipmap;
    _this._width = width;
    _this._height = height;
    _this._format = format;
    _this._mipmapCount = _this._getMipmapCount();
    formatDetail.isCompressed && !isWebGL2 || _this._initMipmap(false);
    _this.filterMode = exports.TextureFilterMode.Bilinear;
    _this.wrapModeU = _this.wrapModeV = exports.TextureWrapMode.Repeat;
    return _this;
  }
  /**
   * Setting pixels data through color buffer data, designated area and texture mipmapping level,it's also applicable to compressed formats.
   * @remarks If it is the WebGL1.0 platform and the texture format is compressed, the first upload must be filled with textures.
   * @param colorBuffer - Color buffer data
   * @param mipLevel - Texture mipmapping level
   * @param x - X coordinate of area start
   * @param y - Y coordinate of area start
   * @param width - Data width. if it's empty, width is the width corresponding to mipLevel minus x , width corresponding to mipLevel is Math.max(1, this.width >> mipLevel)
   * @param height - Data height. if it's empty, height is the height corresponding to mipLevel minus y , height corresponding to mipLevel is Math.max(1, this.height >> mipLevel)
   */


  var _proto = Texture2D.prototype;

  _proto.setPixelBuffer = function setPixelBuffer(colorBuffer, mipLevel, x, y, width, height) {
    if (mipLevel === void 0) {
      mipLevel = 0;
    }

    var gl = this._rhi.gl;
    var isWebGL2 = this._rhi.isWebGL2;
    var _this$_formatDetail = this._formatDetail,
        internalFormat = _this$_formatDetail.internalFormat,
        baseFormat = _this$_formatDetail.baseFormat,
        dataType = _this$_formatDetail.dataType,
        isCompressed = _this$_formatDetail.isCompressed;
    var mipWidth = Math.max(1, this._width >> mipLevel);
    var mipHeight = Math.max(1, this._height >> mipLevel);
    x = x || 0;
    y = y || 0;
    width = width || mipWidth - x;
    height = height || mipHeight - y;

    this._bind();

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);

    if (isCompressed) {
      var mipBit = 1 << mipLevel;

      if (isWebGL2 || this._compressedMipFilled & mipBit) {
        gl.compressedTexSubImage2D(this._target, mipLevel, x, y, width, height, internalFormat, colorBuffer);
      } else {
        gl.compressedTexImage2D(this._target, mipLevel, internalFormat, width, height, 0, colorBuffer);
        this._compressedMipFilled |= mipBit;
      }
    } else {
      gl.texSubImage2D(this._target, mipLevel, x, y, width, height, baseFormat, dataType, colorBuffer);
    }

    this._unbind();
  }
  /**
   * Setting pixels data through TexImageSource, designated area and texture mipmapping level.
   * @param imageSource - The source of texture
   * @param mipLevel - Texture mipmapping level
   * @param flipY - Whether to flip the Y axis
   * @param premultiplyAlpha - Whether to premultiply the transparent channel
   * @param x - X coordinate of area start
   * @param y - Y coordinate of area start
   */
  ;

  _proto.setImageSource = function setImageSource(imageSource, mipLevel, flipY, premultiplyAlpha, x, y) {
    if (mipLevel === void 0) {
      mipLevel = 0;
    }

    if (flipY === void 0) {
      flipY = false;
    }

    if (premultiplyAlpha === void 0) {
      premultiplyAlpha = false;
    }

    var gl = this._rhi.gl;
    var _this$_formatDetail2 = this._formatDetail,
        baseFormat = _this$_formatDetail2.baseFormat,
        dataType = _this$_formatDetail2.dataType;

    this._bind();

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, +flipY);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, +premultiplyAlpha);
    gl.texSubImage2D(this._target, mipLevel, x || 0, y || 0, baseFormat, dataType, imageSource);

    this._unbind();
  }
  /**
   * Get the pixel color buffer according to the specified area.
   * @param x - X coordinate of area start
   * @param y - Y coordinate of area start
   * @param width - Area width
   * @param height - Area height
   * @param out - Color buffer
   */
  ;

  _proto.getPixelBuffer = function getPixelBuffer(x, y, width, height, out) {
    if (this._formatDetail.isCompressed) {
      throw new Error("Unable to read compressed texture");
    }

    _Texture.prototype._getPixelBuffer.call(this, null, x, y, width, height, out);
  };

  _createClass(Texture2D, [{
    key: "format",
    get:
    /** Backward compatible with WebGL1.0. */

    /**
     * Texture format.
     * @readonly
     */
    function get() {
      return this._format;
    }
  }]);

  return Texture2D;
}(Texture);

var _class$1, _descriptor$1, _descriptor2$1, _descriptor3$1, _descriptor4$1, _descriptor5$1, _descriptor6, _descriptor7, _descriptor8, _class2, _temp$1;

/**
 * SkinnedMeshRenderer
 */
var SkinnedMeshRenderer = (_class$1 = (_temp$1 = _class2 = /*#__PURE__*/function (_MeshRenderer) {
  _inheritsLoose(SkinnedMeshRenderer, _MeshRenderer);

  /**
   * Constructor of SkinnedMeshRenderer
   * @param entity - Entity
   */
  function SkinnedMeshRenderer(entity) {
    var _this;

    _this = _MeshRenderer.call(this, entity) || this;

    _initializerDefineProperty(_this, "matrixPalette", _descriptor$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "jointNodes", _descriptor2$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "jointTexture", _descriptor3$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_hasInitJoints", _descriptor4$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_mat", _descriptor5$1, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_weights", _descriptor6, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "weightsIndices", _descriptor7, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_useJointTexture", _descriptor8, _assertThisInitialized(_this));

    _this._skin = void 0;
    _this._mat = new math.Matrix();
    _this._weights = null;
    _this._skin = null;
    return _this;
  }
  /**
   * @internal
   */


  var _proto = SkinnedMeshRenderer.prototype;

  _proto._updateShaderData = function _updateShaderData(context) {
    _MeshRenderer.prototype._updateShaderData.call(this, context);

    if (!this._useJointTexture && this.matrixPalette) {
      this.shaderData.setFloatArray(SkinnedMeshRenderer._jointMatrixProperty, this.matrixPalette);
    }
  }
  /**
   * Set morph target weights
   * @param weights - Weights
   */
  ;

  _proto.setWeights = function setWeights(weights) {
    this._weights = weights;

    if (!weights) {
      return;
    }

    var len = weights.length;

    for (var i = 0; i < len; i++) {
      this.weightsIndices[i] = i;
    }

    var weightsIndices = this.weightsIndices;

    for (var _i = 0; _i < len - 1; _i++) {
      for (var j = _i + 1; j < len; j++) {
        if (weights[j] > weights[_i]) {
          var t = weights[_i];
          weights[_i] = weights[j];
          weights[j] = t;
          t = weightsIndices[_i];
          weightsIndices[_i] = weightsIndices[j];
          weightsIndices[j] = t;
        }
      }
    }

    this.mesh.updatePrimitiveWeightsIndices(weightsIndices);
  }
  /**
   * Skin Object.
   */
  ;

  _proto._initJoints = function _initJoints() {
    var _this$jointNodes;

    if (!this._skin) return;
    var skin = this._skin;
    var joints = skin.joints;
    var jointNodes = [];

    for (var i = joints.length - 1; i >= 0; i--) {
      jointNodes[i] = this.findByNodeName(this.entity, joints[i]);
    } // end of for


    this.matrixPalette = new Float32Array(jointNodes.length * 16);
    this.jointNodes = jointNodes;
    /** Whether to use a skeleton texture */

    var rhi = this.entity.engine._hardwareRenderer;
    if (!rhi) return;
    var maxAttribUniformVec4 = rhi.renderStates.getParameter(rhi.gl.MAX_VERTEX_UNIFORM_VECTORS);
    var maxJoints = Math.floor((maxAttribUniformVec4 - 20) / 4);
    var shaderData = this.shaderData;
    var jointCount = (_this$jointNodes = this.jointNodes) === null || _this$jointNodes === void 0 ? void 0 : _this$jointNodes.length;

    if (jointCount) {
      shaderData.enableMacro("O3_HAS_SKIN");
      shaderData.setInt(SkinnedMeshRenderer._jointCountProperty, jointCount);

      if (joints.length > maxJoints) {
        if (rhi.canIUseMoreJoints) {
          this._useJointTexture = true;
        } else {
          Logger.error("component's joints count(" + joints + ") greater than device's MAX_VERTEX_UNIFORM_VECTORS number " + maxAttribUniformVec4 + ", and don't support jointTexture in this device. suggest joint count less than " + maxJoints + ".", this);
        }
      } else {
        var _maxJoints = Math.max(SkinnedMeshRenderer._maxJoints, joints.length);

        SkinnedMeshRenderer._maxJoints = _maxJoints;
        shaderData.disableMacro("O3_USE_JOINT_TEXTURE");
        shaderData.enableMacro("O3_JOINTS_NUM", _maxJoints.toString());
      }
    } else {
      shaderData.disableMacro("O3_HAS_SKIN");
    }
  };

  _proto.findByNodeName = function findByNodeName(entity, nodeName) {
    if (!entity) return null;
    var n = entity.findByName(nodeName);
    if (n) return n;
    return this.findByNodeName(entity.parent, nodeName);
  };

  _proto._findParent = function _findParent(entity, nodeName) {
    if (entity) {
      var parent = entity.parent;
      if (!parent) return null;
      if (parent.name === nodeName) return parent;
      var brother = parent.findByName(nodeName);
      if (brother) return brother;
      return this._findParent(parent, nodeName);
    }

    return null;
  }
  /**
   * @internal
   */
  ;

  _proto.update = function update() {
    if (!this._hasInitJoints) {
      this._initJoints();

      this._hasInitJoints = true;
    }

    if (this._skin) {
      var joints = this.jointNodes;
      var ibms = this._skin.inverseBindMatrices;
      var matrixPalette = this.matrixPalette;
      var worldToLocal = this.entity.getInvModelMatrix();
      var mat = this._mat;

      for (var i = joints.length - 1; i >= 0; i--) {
        mat.identity();

        if (joints[i]) {
          math.Matrix.multiply(joints[i].transform.worldMatrix, ibms[i], mat);
        } else {
          ibms[i].cloneTo(mat);
        }

        math.Matrix.multiply(worldToLocal, mat, mat);
        matrixPalette.set(mat.elements, i * 16);
      } // end of for


      if (this._useJointTexture) {
        this.createJointTexture();
      }
    }
  }
  /**
   * Generate joint texture.
   * Format: (4 * RGBA) * jointCont
   */
  ;

  _proto.createJointTexture = function createJointTexture() {
    if (!this.jointTexture) {
      var engine = this.engine;
      var rhi = engine._hardwareRenderer;
      if (!rhi) return;
      this.jointTexture = new Texture2D(engine, 4, this.jointNodes.length, exports.TextureFormat.R32G32B32A32, false);
      this.jointTexture.filterMode = exports.TextureFilterMode.Point;
      this.shaderData.enableMacro("O3_USE_JOINT_TEXTURE");
      this.shaderData.setTexture(SkinnedMeshRenderer._jointSamplerProperty, this.jointTexture);
    }

    this.jointTexture.setPixelBuffer(this.matrixPalette);
  };

  _createClass(SkinnedMeshRenderer, [{
    key: "skin",
    get: function get() {
      return this._skin;
    },
    set: function set(skin) {
      this._skin = skin;
    }
  }, {
    key: "weights",
    get: function get() {
      return this._weights;
    }
  }]);

  return SkinnedMeshRenderer;
}(MeshRenderer), _class2._jointCountProperty = Shader.getPropertyByName("u_jointCount"), _class2._jointSamplerProperty = Shader.getPropertyByName("u_jointSampler"), _class2._jointMatrixProperty = Shader.getPropertyByName("u_jointMatrix"), _class2._maxJoints = 0, _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class$1.prototype, "matrixPalette", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2$1 = _applyDecoratedDescriptor(_class$1.prototype, "jointNodes", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3$1 = _applyDecoratedDescriptor(_class$1.prototype, "jointTexture", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4$1 = _applyDecoratedDescriptor(_class$1.prototype, "_hasInitJoints", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5$1 = _applyDecoratedDescriptor(_class$1.prototype, "_mat", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class$1.prototype, "_weights", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class$1.prototype, "weightsIndices", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class$1.prototype, "_useJointTexture", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class$1);

/**
 * LOD rendering group
 */

var LODGroup = /*#__PURE__*/function (_Renderer) {
  _inheritsLoose(LODGroup, _Renderer);

  function LODGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Renderer.call.apply(_Renderer, [this].concat(args)) || this;
    _this._lods = [];
    return _this;
  }

  var _proto = LODGroup.prototype;

  /**
   * Add a LOD level.
   * @param distance - Distance between current entity and the camera.
   * @param renderer - Renderer, when LOD level enabled, use this renderer to render.
   */
  _proto.addLod = function addLod(distance, renderer) {
    // Disable component render function.
    renderer.enabled = false;

    this._lods.push({
      distance: distance,
      rendererAbility: renderer
    });

    this._lods.sort(function (a, b) {
      return b.distance - a.distance;
    });
  }
  /**
   * @private
   */
  ;

  _proto.render = function render(camera) {
    if (this._lods.length <= 0) return;
    var dist = math.Vector3.distance(camera.entity.transform.worldPosition, this.entity.transform.worldPosition);
    var lods = this._lods;
    var activeLevel = 0;

    for (var i = lods.length - 1; i >= 0; i--) {
      var _lod = lods[i];

      if (dist < _lod.distance) {
        activeLevel = i;
        break;
      }
    } // end of for


    var lod = lods[activeLevel];
    lod.rendererAbility.render(camera);
  };

  return LODGroup;
}(Renderer);

/**
 * Define the face of the cube texture.
 */
exports.TextureCubeFace = void 0;

(function (TextureCubeFace) {
  TextureCubeFace[TextureCubeFace["PositiveX"] = 0] = "PositiveX";
  TextureCubeFace[TextureCubeFace["NegativeX"] = 1] = "NegativeX";
  TextureCubeFace[TextureCubeFace["PositiveY"] = 2] = "PositiveY";
  TextureCubeFace[TextureCubeFace["NegativeY"] = 3] = "NegativeY";
  TextureCubeFace[TextureCubeFace["PositiveZ"] = 4] = "PositiveZ";
  TextureCubeFace[TextureCubeFace["NegativeZ"] = 5] = "NegativeZ";
})(exports.TextureCubeFace || (exports.TextureCubeFace = {}));

/**
 * Cube texture.
 */

var TextureCubeMap = /*#__PURE__*/function (_Texture) {
  _inheritsLoose(TextureCubeMap, _Texture);

  /**
   * Create TextureCube.
   * @param engine - Define the engine to use to render this texture
   * @param size - Texture size. texture width must be equal to height in cube texture
   * @param format - Texture format,default TextureFormat.R8G8B8A8
   * @param mipmap - Whether to use multi-level texture
   */
  function TextureCubeMap(engine, size, format, mipmap) {
    var _this;

    if (format === void 0) {
      format = exports.TextureFormat.R8G8B8A8;
    }

    if (mipmap === void 0) {
      mipmap = true;
    }

    _this = _Texture.call(this, engine) || this;
    _this._format = void 0;
    _this._compressedFaceFilled = [0, 0, 0, 0, 0, 0];
    var rhi = engine._hardwareRenderer;
    var gl = rhi.gl;
    var isWebGL2 = rhi.isWebGL2;

    if (!Texture._supportTextureFormat(format, rhi)) {
      throw new Error("Texture format is not supported:" + exports.TextureFormat[format]);
    }

    if (mipmap && !isWebGL2 && !Texture._isPowerOf2(size)) {
      Logger.warn("non-power-2 texture is not supported for mipmap in WebGL1,and has automatically downgraded to non-mipmap");
      mipmap = false;
    }

    var formatDetail = Texture._getFormatDetail(format, gl, isWebGL2);

    _this._glTexture = gl.createTexture();
    _this._formatDetail = formatDetail;
    _this._rhi = rhi;
    _this._target = gl.TEXTURE_CUBE_MAP;
    _this._mipmap = mipmap;
    _this._width = size;
    _this._height = size;
    _this._format = format;
    _this._mipmapCount = _this._getMipmapCount();
    formatDetail.isCompressed && !isWebGL2 || _this._initMipmap(true);
    _this.filterMode = exports.TextureFilterMode.Bilinear;
    _this.wrapModeU = _this.wrapModeV = exports.TextureWrapMode.Clamp;
    return _this;
  }
  /**
   * Setting pixels data through cube face,color buffer data, designated area and texture mipmapping level,it's also applicable to compressed formats.
   * @remarks When compressed texture is in WebGL1, the texture must be filled first before writing the sub-region
   * @param face - Cube face
   * @param colorBuffer - Color buffer data
   * @param mipLevel - Texture mipmapping level
   * @param x - X coordinate of area start
   * @param y -  Y coordinate of area start
   * @param width - Data width.if it's empty, width is the width corresponding to mipLevel minus x , width corresponding to mipLevel is Math.max(1, this.width >> mipLevel)
   * @param height - Data height.if it's empty, height is the height corresponding to mipLevel minus y , height corresponding to mipLevel is Math.max(1, this.height >> mipLevel)
   */


  var _proto = TextureCubeMap.prototype;

  _proto.setPixelBuffer = function setPixelBuffer(face, colorBuffer, mipLevel, x, y, width, height) {
    if (mipLevel === void 0) {
      mipLevel = 0;
    }

    var gl = this._rhi.gl;
    var isWebGL2 = this._rhi.isWebGL2;
    var _this$_formatDetail = this._formatDetail,
        internalFormat = _this$_formatDetail.internalFormat,
        baseFormat = _this$_formatDetail.baseFormat,
        dataType = _this$_formatDetail.dataType,
        isCompressed = _this$_formatDetail.isCompressed;
    var mipSize = Math.max(1, this._width >> mipLevel);
    x = x || 0;
    y = y || 0;
    width = width || mipSize - x;
    height = height || mipSize - y;

    this._bind();

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);

    if (isCompressed) {
      var mipBit = 1 << mipLevel;

      if (isWebGL2 || this._compressedFaceFilled[face] & mipBit) {
        gl.compressedTexSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + face, mipLevel, x, y, width, height, internalFormat, colorBuffer);
      } else {
        gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + face, mipLevel, internalFormat, width, height, 0, colorBuffer);
        this._compressedFaceFilled[face] |= mipBit;
      }
    } else {
      gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + face, mipLevel, x, y, width, height, baseFormat, dataType, colorBuffer);
    }

    this._unbind();
  }
  /**
   * Setting pixels data through cube face, TexImageSource, designated area and texture mipmapping level.
   * @param face - Cube face
   * @param imageSource - The source of texture
   * @param mipLevel - Texture mipmapping level
   * @param flipY - Whether to flip the Y axis
   * @param premultipltAlpha - Whether to premultiply the transparent channel
   * @param x - X coordinate of area start
   * @param y - Y coordinate of area start
   */
  ;

  _proto.setImageSource = function setImageSource(face, imageSource, mipLevel, flipY, premultiplyAlpha, x, y) {
    if (mipLevel === void 0) {
      mipLevel = 0;
    }

    if (flipY === void 0) {
      flipY = false;
    }

    if (premultiplyAlpha === void 0) {
      premultiplyAlpha = false;
    }

    var gl = this._rhi.gl;
    var _this$_formatDetail2 = this._formatDetail,
        baseFormat = _this$_formatDetail2.baseFormat,
        dataType = _this$_formatDetail2.dataType;

    this._bind();

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, +flipY);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, +premultiplyAlpha);
    gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + face, mipLevel, x || 0, y || 0, baseFormat, dataType, imageSource);

    this._unbind();
  }
  /**
   * Get the pixel color buffer according to the specified cube face and area.
   * @param face - You can choose which cube face to read
   * @param x - X coordinate of area start
   * @param y - Y coordinate of area start
   * @param width - Area width
   * @param height - Area height
   * @param out - Color buffer
   */
  ;

  _proto.getPixelBuffer = function getPixelBuffer(face, x, y, width, height, out) {
    if (this._formatDetail.isCompressed) {
      throw new Error("Unable to read compressed texture");
    }

    _Texture.prototype._getPixelBuffer.call(this, face, x, y, width, height, out);
  };

  _createClass(TextureCubeMap, [{
    key: "format",
    get:
    /** Backward compatible with WebGL1.0. */

    /**
     * Texture format.
     */
    function get() {
      return this._format;
    }
  }]);

  return TextureCubeMap;
}(Texture);

/**
 * The texture is used for the output of depth information in off-screen rendering.
 */

var RenderDepthTexture = /*#__PURE__*/function (_Texture) {
  _inheritsLoose(RenderDepthTexture, _Texture);

  /**
   * Create RenderDepthTexture.
   * @param engine - Define the engine to use to render this depth texture
   * @param width - Texture width
   * @param height - Texture height
   * @param format - Texture format. default RenderBufferDepthFormat.Depth, engine will automatically select the supported precision
   * @param mipmap - Whether to use multi-level texture
   * @param isCube - Whether it's cube texture
   */
  function RenderDepthTexture(engine, width, height, format, mipmap, isCube) {
    var _this;

    if (format === void 0) {
      format = exports.RenderBufferDepthFormat.Depth;
    }

    if (mipmap === void 0) {
      mipmap = false;
    }

    if (isCube === void 0) {
      isCube = false;
    }

    _this = _Texture.call(this, engine) || this;
    _this._isCube = false;
    _this._format = void 0;
    _this._autoMipmap = false;
    var rhi = engine._hardwareRenderer;
    var gl = rhi.gl;
    var isWebGL2 = rhi.isWebGL2;

    if (!Texture._supportRenderBufferDepthFormat(format, rhi, true)) {
      throw new Error("RenderBufferDepthFormat is not supported:" + exports.RenderBufferDepthFormat[format]);
    }

    if (isCube && width !== height) {
      throw new Error("The cube texture must have the same width and height");
    }

    if (mipmap && !isWebGL2 && (!Texture._isPowerOf2(width) || !Texture._isPowerOf2(height))) {
      Logger.warn("non-power-2 texture is not supported for mipmap in WebGL1,and has automatically downgraded to non-mipmap");
      mipmap = false;
    }

    _this._glTexture = gl.createTexture();
    _this._formatDetail = Texture._getRenderBufferDepthFormatDetail(format, gl, isWebGL2);
    _this._isCube = isCube;
    _this._rhi = rhi;
    _this._target = isCube ? gl.TEXTURE_CUBE_MAP : gl.TEXTURE_2D;
    _this._mipmap = mipmap;
    _this._width = width;
    _this._height = height;
    _this._format = format;
    _this._mipmapCount = _this._getMipmapCount();

    _this._initMipmap(isCube);

    _this.filterMode = exports.TextureFilterMode.Bilinear;
    _this.wrapModeU = _this.wrapModeV = exports.TextureWrapMode.Clamp;
    return _this;
  }

  _createClass(RenderDepthTexture, [{
    key: "format",
    get:
    /** @internal */

    /**
     * Render depth texture format.
     */
    function get() {
      return this._format;
    }
    /**
     * Whether to automatically generate multi-level textures.
     */

  }, {
    key: "autoGenerateMipmaps",
    get: function get() {
      return this._autoMipmap;
    },
    set: function set(value) {
      this._autoMipmap = value;
    }
  }]);

  return RenderDepthTexture;
}(Texture);

/**
 * The render target used for off-screen rendering.
 */

var RenderTarget = /*#__PURE__*/function (_EngineObject) {
  _inheritsLoose(RenderTarget, _EngineObject);

  /**
   * @internal
   */
  function RenderTarget(engine, width, height, renderTexture, depth, antiAliasing) {
    var _this;

    if (depth === void 0) {
      depth = exports.RenderBufferDepthFormat.Depth;
    }

    if (antiAliasing === void 0) {
      antiAliasing = 1;
    }

    _this = _EngineObject.call(this, engine) || this;
    _this._frameBuffer = void 0;
    _this._MSAAFrameBuffer = void 0;
    _this._rhi = void 0;
    _this._width = void 0;
    _this._height = void 0;
    _this._antiAliasing = void 0;
    _this._colorTextures = void 0;
    _this._depthTexture = void 0;
    _this._depthRenderBuffer = void 0;
    _this._MSAAColorRenderBuffers = [];
    _this._MSAADepthRenderBuffer = void 0;
    _this._oriDrawBuffers = void 0;
    _this._blitDrawBuffers = void 0;
    var rhi = engine._hardwareRenderer;
    /** @TODO
     * MRT + Cube + [,MSAA]
     * MRT + MSAA
     */

    var gl = rhi.gl;

    if (!(depth instanceof RenderDepthTexture) && !Texture._supportRenderBufferDepthFormat(depth, rhi, false)) {
      throw new Error("RenderBufferDepthFormat is not supported:" + exports.RenderBufferDepthFormat[depth]);
    }

    if ((renderTexture === null || renderTexture === void 0 ? void 0 : renderTexture.length) > 1 && !rhi.canIUse(exports.GLCapabilityType.drawBuffers)) {
      throw new Error("MRT is not supported");
    } // Handle this._colorTextures


    if (renderTexture) {
      _this._colorTextures = renderTexture instanceof Array ? renderTexture.slice() : [renderTexture];
    } else {
      _this._colorTextures = [];
    }

    if (_this._colorTextures.some(function (v) {
      return v.width !== width || v.height !== height;
    })) {
      throw new Error("RenderColorTexture's size must as same as RenderTarget");
    }

    if (depth instanceof RenderDepthTexture && (depth.width !== width || depth.height !== height)) {
      throw new Error("RenderDepthTexture's size must as same as RenderTarget");
    } // TODO: necessary to support MRT + Cube + [,MSAA] ?


    if (_this._colorTextures.length > 1 && _this._colorTextures.some(function (v) {
      return v._isCube;
    })) {
      throw new Error("MRT+Cube+[,MSAA] is not supported");
    }

    var maxAntiAliasing = rhi.capability.maxAntiAliasing;

    if (antiAliasing > maxAntiAliasing) {
      Logger.warn("MSAA antiAliasing exceeds the limit and is automatically downgraded to:" + maxAntiAliasing);
      antiAliasing = maxAntiAliasing;
    }

    _this._rhi = rhi;
    _this._width = width;
    _this._height = height;
    _this._frameBuffer = gl.createFramebuffer();
    _this._antiAliasing = antiAliasing;

    if (depth instanceof RenderDepthTexture) {
      _this._depthTexture = depth;
    } // Bind main FBO


    _this._bindMainFBO(depth); // Bind MSAA FBO


    if (antiAliasing > 1) {
      _this._MSAAFrameBuffer = gl.createFramebuffer();

      _this._bindMSAAFBO(depth);
    }

    return _this;
  }
  /**
   * Get the render color texture by index.
   * @param index
   */


  var _proto = RenderTarget.prototype;

  _proto.getColorTexture = function getColorTexture(index) {
    if (index === void 0) {
      index = 0;
    }

    return this._colorTextures[index];
  }
  /**
   * Destroy render target.
   */
  ;

  _proto.destroy = function destroy() {
    var gl = this._rhi.gl;
    gl.deleteFramebuffer(this._frameBuffer);
    this._depthRenderBuffer && gl.deleteRenderbuffer(this._depthRenderBuffer);
    this._MSAAFrameBuffer && gl.deleteFramebuffer(this._MSAAFrameBuffer);
    this._MSAADepthRenderBuffer && gl.deleteRenderbuffer(this._MSAADepthRenderBuffer);

    for (var i = 0; i < this._colorTextures.length; i++) {
      this._colorTextures[i].destroy();
    }

    for (var _i = 0; _i < this._MSAAColorRenderBuffers.length; _i++) {
      gl.deleteRenderbuffer(this._MSAAColorRenderBuffers[_i]);
    }

    this._depthTexture && this._depthTexture.destroy();
    this._frameBuffer = null;
    this._colorTextures.length = 0;
    this._depthTexture = null;
    this._depthRenderBuffer = null;
    this._MSAAFrameBuffer = null;
    this._MSAAColorRenderBuffers.length = 0;
    this._MSAADepthRenderBuffer = null;
  }
  /**
   * Activate this RenderTarget.
   * @remarks
   * If MSAA is turned on, MSAA FBO is activated, and then this._blitRenderTarget() is performed to exchange FBO.
   * If MSAA is not turned on, activate the main FBO.
   */
  ;

  _proto._activeRenderTarget = function _activeRenderTarget() {
    var gl = this._rhi.gl;

    if (this._MSAAFrameBuffer) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, this._MSAAFrameBuffer);
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, this._frameBuffer);
    }
  }
  /**
   * Set which face of the cube texture to render to.
   * @param faceIndex - Cube texture face
   */
  ;

  _proto._setRenderTargetFace = function _setRenderTargetFace(faceIndex) {
    if (faceIndex === void 0) {
      faceIndex = exports.TextureCubeFace.PositiveX;
    }

    var gl = this._rhi.gl;
    var colorTexture = this._colorTextures[0];
    var depthTexture = this._depthTexture;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._frameBuffer); // Bind render color texture

    if (colorTexture !== null && colorTexture !== void 0 && colorTexture._isCube) {
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex, colorTexture._glTexture, 0);
    } // Bind depth texture


    if (depthTexture !== null && depthTexture !== void 0 && depthTexture._isCube) {
      gl.framebufferTexture2D(gl.FRAMEBUFFER, depthTexture._formatDetail.attachment, gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex, depthTexture._glTexture, 0);
    } // Revert current activated render target


    this._activeRenderTarget();
  }
  /**
   * Blit FBO.
   */
  ;

  _proto._blitRenderTarget = function _blitRenderTarget() {
    var gl = this._rhi.gl;
    var mask = gl.COLOR_BUFFER_BIT | (this._depthTexture ? gl.DEPTH_BUFFER_BIT : 0);
    var colorTextureLength = this._colorTextures.length;
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, this._MSAAFrameBuffer);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, this._frameBuffer);

    for (var textureIndex = 0; textureIndex < colorTextureLength; textureIndex++) {
      var attachment = gl.COLOR_ATTACHMENT0 + textureIndex;
      this._blitDrawBuffers[textureIndex] = attachment;
      gl.readBuffer(attachment);
      gl.drawBuffers(this._blitDrawBuffers);
      gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, mask, gl.NEAREST);
      this._blitDrawBuffers[textureIndex] = gl.NONE;
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  /**
   * Bind main FBO.
   */
  ;

  _proto._bindMainFBO = function _bindMainFBO(renderDepth) {
    var gl = this._rhi.gl;
    var isWebGL2 = this._rhi.isWebGL2;
    var colorTextureLength = this._colorTextures.length;
    var drawBuffers = new Array(colorTextureLength);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._frameBuffer);
    /** Color render buffer */

    for (var i = 0; i < colorTextureLength; i++) {
      var _colorTexture = this._colorTextures[i];
      var attachment = gl.COLOR_ATTACHMENT0 + i;
      drawBuffers[i] = attachment; // Cube texture please call _setRenderTargetFace()

      if (!_colorTexture._isCube) {
        gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, _colorTexture._glTexture, 0);
      }
    }

    if (colorTextureLength > 1) {
      gl.drawBuffers(drawBuffers);
    }

    this._oriDrawBuffers = drawBuffers;
    /** Depth render buffer */

    if (renderDepth !== null) {
      if (renderDepth instanceof RenderDepthTexture) {
        // Cube texture _setRenderTargetFace()
        if (!renderDepth._isCube) {
          gl.framebufferTexture2D(gl.FRAMEBUFFER, renderDepth._formatDetail.attachment, gl.TEXTURE_2D, renderDepth._glTexture, 0);
        }
      } else if (this._antiAliasing <= 1) {
        var _Texture$_getRenderBu = Texture._getRenderBufferDepthFormatDetail(renderDepth, gl, isWebGL2),
            internalFormat = _Texture$_getRenderBu.internalFormat,
            _attachment = _Texture$_getRenderBu.attachment;

        var depthRenderBuffer = gl.createRenderbuffer();
        this._depthRenderBuffer = depthRenderBuffer;
        gl.bindRenderbuffer(gl.RENDERBUFFER, depthRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, internalFormat, this._width, this._height);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, _attachment, gl.RENDERBUFFER, depthRenderBuffer);
      }
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
  }
  /**
   * Bind MSAA FBO.
   */
  ;

  _proto._bindMSAAFBO = function _bindMSAAFBO(renderDepth) {
    var gl = this._rhi.gl;
    var isWebGL2 = this._rhi.isWebGL2;
    var MSAADepthRenderBuffer = gl.createRenderbuffer();
    var colorTextureLength = this._colorTextures.length;
    this._blitDrawBuffers = new Array(colorTextureLength);
    this._MSAADepthRenderBuffer = MSAADepthRenderBuffer;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._MSAAFrameBuffer); // Prepare MRT+MSAA color RBOs

    for (var i = 0; i < colorTextureLength; i++) {
      var MSAAColorRenderBuffer = gl.createRenderbuffer();
      this._MSAAColorRenderBuffers[i] = MSAAColorRenderBuffer;
      this._blitDrawBuffers[i] = gl.NONE;
      gl.bindRenderbuffer(gl.RENDERBUFFER, MSAAColorRenderBuffer);
      gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this._antiAliasing, this._colorTextures[i]._formatDetail.internalFormat, this._width, this._height);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gl.RENDERBUFFER, MSAAColorRenderBuffer);
    }

    gl.drawBuffers(this._oriDrawBuffers); // Prepare MSAA depth RBO

    if (renderDepth !== null) {
      var _ref = renderDepth instanceof RenderDepthTexture ? renderDepth._formatDetail : Texture._getRenderBufferDepthFormatDetail(renderDepth, gl, isWebGL2),
          internalFormat = _ref.internalFormat,
          attachment = _ref.attachment;

      gl.bindRenderbuffer(gl.RENDERBUFFER, MSAADepthRenderBuffer);
      gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this._antiAliasing, internalFormat, this._width, this._height);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, attachment, gl.RENDERBUFFER, MSAADepthRenderBuffer);
    }

    this._checkFrameBuffer();

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
  }
  /**
   * Check FBO.
   */
  ;

  _proto._checkFrameBuffer = function _checkFrameBuffer() {
    var gl = this._rhi.gl;
    var isWebGL2 = this._rhi.isWebGL2;
    var e = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

    switch (e) {
      case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
        throw new Error("The attachment types are mismatched or not all framebuffer attachment points are framebuffer attachment complete");

      case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
        throw new Error("There is no attachment");

      case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
        throw new Error(" Height and width of the attachment are not the same.");

      case gl.FRAMEBUFFER_UNSUPPORTED:
        throw new Error("The format of the attachment is not supported or if depth and stencil attachments are not the same renderbuffer");
    }

    if (isWebGL2 && e === gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE) {
      throw new Error("The values of gl.RENDERBUFFER_SAMPLES are different among attached renderbuffers, or are non-zero if the attached images are a mix of renderbuffers and textures.");
    }
  };

  _createClass(RenderTarget, [{
    key: "width",
    get:
    /**
     * Render target width.
     * @readonly
     */
    function get() {
      return this._width;
    }
    /**
     * Render target height.
     * @readonly
     */

  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
    /**
     * Render color texture count.
     * @readonly
     */

  }, {
    key: "colorTextureCount",
    get: function get() {
      return this._colorTextures.length;
    }
    /**
     * Depth texture.
     * @readonly
     */

  }, {
    key: "depthTexture",
    get: function get() {
      return this._depthTexture;
    }
    /**
     * Anti-aliasing level.
     * @remarks If the anti-aliasing level set is greater than the maximum level supported by the hardware, the maximum level of the hardware will be used.
     * @readonly
     */

  }, {
    key: "antiAliasing",
    get: function get() {
      return this._antiAliasing;
    }
    /**
     * Create a render target through color texture and depth format.
     * @param engine - Define the engine to use for this off-screen rendering
     * @param width - Render target width
     * @param height - Render target height
     * @param colorTexture - Render color texture
     * @param depthFormat - Depth format. default RenderBufferDepthFormat.Depth, engine will automatically select the supported precision
     * @param antiAliasing - Anti-aliasing level, default is 1
     */

  }]);

  return RenderTarget;
}(EngineObject);

/**
 * The texture is used for the output of color information in off-screen rendering.
 */

var RenderColorTexture = /*#__PURE__*/function (_Texture) {
  _inheritsLoose(RenderColorTexture, _Texture);

  /**
   * Create RenderColorTexture.
   * @param engine - Define the engine to use to render this color texture
   * @param width - Texture width
   * @param height - Texture height
   * @param format - Texture format. default RenderBufferColorFormat.R8G8B8A8
   * @param mipmap - Whether to use multi-level texture
   * @param isCube - Whether it's cube texture
   */
  function RenderColorTexture(engine, width, height, format, mipmap, isCube) {
    var _this;

    if (format === void 0) {
      format = exports.RenderBufferColorFormat.R8G8B8A8;
    }

    if (mipmap === void 0) {
      mipmap = false;
    }

    if (isCube === void 0) {
      isCube = false;
    }

    _this = _Texture.call(this, engine) || this;
    _this._isCube = false;
    _this._format = void 0;
    _this._autoMipmap = false;
    var rhi = engine._hardwareRenderer;
    var gl = rhi.gl;
    var isWebGL2 = rhi.isWebGL2;

    if (!Texture._supportRenderBufferColorFormat(format, rhi)) {
      throw new Error("RenderBufferColorFormat is not supported:" + exports.RenderBufferColorFormat[format]);
    }

    if (isCube && width !== height) {
      throw new Error("The cube texture must have the same width and height");
    }

    if (mipmap && !isWebGL2 && (!Texture._isPowerOf2(width) || !Texture._isPowerOf2(height))) {
      Logger.warn("non-power-2 texture is not supported for mipmap in WebGL1,and has automatically downgraded to non-mipmap");
      mipmap = false;
    }

    _this._glTexture = gl.createTexture();
    _this._formatDetail = Texture._getRenderBufferColorFormatDetail(format, gl, isWebGL2);
    _this._isCube = isCube;
    _this._rhi = rhi;
    _this._target = isCube ? gl.TEXTURE_CUBE_MAP : gl.TEXTURE_2D;
    _this._mipmap = mipmap;
    _this._width = width;
    _this._height = height;
    _this._format = format;
    _this._mipmapCount = _this._getMipmapCount();

    _this._initMipmap(isCube);

    _this.filterMode = exports.TextureFilterMode.Bilinear;
    _this.wrapModeU = _this.wrapModeV = exports.TextureWrapMode.Clamp;
    return _this;
  }
  /**
   * Get the pixel color buffer according to the specified cube face and area.
   * @param face - You can choose which cube face to read if it's cube texture
   * @param x - X coordinate of area start
   * @param y - Y coordinate of area start
   * @param width - Area width
   * @param height - Area height
   * @param out - Color buffer
   */


  var _proto = RenderColorTexture.prototype;

  _proto.getPixelBuffer = function getPixelBuffer(face, x, y, width, height, out) {
    _Texture.prototype._getPixelBuffer.call(this, face, x, y, width, height, out);
  };

  _createClass(RenderColorTexture, [{
    key: "format",
    get:
    /** @internal */

    /**
     * Render color texture format.
     * @readonly
     */
    function get() {
      return this._format;
    }
    /**
     * Whether to automatically generate multi-level textures.
     */

  }, {
    key: "autoGenerateMipmaps",
    get: function get() {
      return this._autoMipmap;
    },
    set: function set(value) {
      this._autoMipmap = value;
    }
  }]);

  return RenderColorTexture;
}(Texture);

/**
 * Buffer usage.
 */
exports.BufferUsage = void 0;

(function (BufferUsage) {
  BufferUsage[BufferUsage["Static"] = 0] = "Static";
  BufferUsage[BufferUsage["Dynamic"] = 1] = "Dynamic";
  BufferUsage[BufferUsage["Stream"] = 2] = "Stream";
})(exports.BufferUsage || (exports.BufferUsage = {}));

/**
 * Vertex element format.
 */
exports.VertexElementFormat = void 0;

(function (VertexElementFormat) {
  VertexElementFormat[VertexElementFormat["Float"] = 0] = "Float";
  VertexElementFormat[VertexElementFormat["Vector2"] = 1] = "Vector2";
  VertexElementFormat[VertexElementFormat["Vector3"] = 2] = "Vector3";
  VertexElementFormat[VertexElementFormat["Vector4"] = 3] = "Vector4";
  VertexElementFormat[VertexElementFormat["Byte4"] = 4] = "Byte4";
  VertexElementFormat[VertexElementFormat["UByte4"] = 5] = "UByte4";
  VertexElementFormat[VertexElementFormat["NormalizedByte4"] = 6] = "NormalizedByte4";
  VertexElementFormat[VertexElementFormat["NormalizedUByte4"] = 7] = "NormalizedUByte4";
  VertexElementFormat[VertexElementFormat["Short2"] = 8] = "Short2";
  VertexElementFormat[VertexElementFormat["UShort2"] = 9] = "UShort2";
  VertexElementFormat[VertexElementFormat["NormalizedShort2"] = 10] = "NormalizedShort2";
  VertexElementFormat[VertexElementFormat["NormalizedUShort2"] = 11] = "NormalizedUShort2";
  VertexElementFormat[VertexElementFormat["Short4"] = 12] = "Short4";
  VertexElementFormat[VertexElementFormat["UShort4"] = 13] = "UShort4";
  VertexElementFormat[VertexElementFormat["NormalizedShort4"] = 14] = "NormalizedShort4";
  VertexElementFormat[VertexElementFormat["NormalizedUShort4"] = 15] = "NormalizedUShort4";
})(exports.VertexElementFormat || (exports.VertexElementFormat = {}));

/**
 * Index format.
 */
exports.IndexFormat = void 0;

(function (IndexFormat) {
  IndexFormat[IndexFormat["UInt8"] = 0] = "UInt8";
  IndexFormat[IndexFormat["UInt16"] = 1] = "UInt16";
  IndexFormat[IndexFormat["UInt32"] = 2] = "UInt32";
})(exports.IndexFormat || (exports.IndexFormat = {}));

var BufferUtil = /*#__PURE__*/function () {
  function BufferUtil() {}

  /**
   * @internal
   */
  BufferUtil._getGLBufferUsage = function _getGLBufferUsage(gl, bufferUsage) {
    switch (bufferUsage) {
      case exports.BufferUsage.Static:
        return gl.STATIC_DRAW;

      case exports.BufferUsage.Dynamic:
        return gl.DYNAMIC_DRAW;

      case exports.BufferUsage.Stream:
        return gl.STREAM_DRAW;
    }
  };

  BufferUtil._getGLIndexType = function _getGLIndexType(indexFormat) {
    switch (indexFormat) {
      case exports.IndexFormat.UInt8:
        return exports.DataType.UNSIGNED_BYTE;

      case exports.IndexFormat.UInt16:
        return exports.DataType.UNSIGNED_SHORT;

      case exports.IndexFormat.UInt32:
        return exports.DataType.UNSIGNED_INT;
    }
  }
  /**
   * @internal
   */
  ;

  BufferUtil._getElementInfo = function _getElementInfo(format) {
    var size;
    var type;

    switch (format) {
      case exports.VertexElementFormat.Float:
        size = 1;
        type = exports.DataType.FLOAT;
        break;

      case exports.VertexElementFormat.Vector2:
        size = 2;
        type = exports.DataType.FLOAT;
        break;

      case exports.VertexElementFormat.Vector3:
        size = 3;
        type = exports.DataType.FLOAT;
        break;

      case exports.VertexElementFormat.Vector4:
        size = 4;
        type = exports.DataType.FLOAT;
        break;

      case exports.VertexElementFormat.Byte4:
        size = 4;
        type = exports.DataType.UNSIGNED_BYTE;
        break;

      case exports.VertexElementFormat.Short2:
        size = 2;
        type = exports.DataType.SHORT;
        break;

      case exports.VertexElementFormat.Short4:
        size = 4;
        type = exports.DataType.SHORT;
        break;

      case exports.VertexElementFormat.UShort2:
        size = 2;
        type = exports.DataType.UNSIGNED_SHORT;
        break;

      case exports.VertexElementFormat.UShort4:
        size = 4;
        type = exports.DataType.UNSIGNED_SHORT;
        break;
    }

    return {
      size: size,
      type: type
    };
  };

  return BufferUtil;
}();

/**
 * Buffer binding flag.
 */
exports.BufferBindFlag = void 0;

(function (BufferBindFlag) {
  BufferBindFlag[BufferBindFlag["VertexBuffer"] = 0] = "VertexBuffer";
  BufferBindFlag[BufferBindFlag["IndexBuffer"] = 1] = "IndexBuffer";
})(exports.BufferBindFlag || (exports.BufferBindFlag = {}));

/**
 * Define update strategy when call bufferData/bufferSubData func.
 */
exports.SetDataOptions = void 0;

(function (SetDataOptions) {
  SetDataOptions[SetDataOptions["None"] = 0] = "None";
  SetDataOptions[SetDataOptions["Discard"] = 1] = "Discard";
})(exports.SetDataOptions || (exports.SetDataOptions = {}));

/**
 * Buffer.
 */

var Buffer = /*#__PURE__*/function (_RefObject) {
  _inheritsLoose(Buffer, _RefObject);

  function Buffer(engine, type, byteLengthOrData, bufferUsage) {
    var _this;

    if (bufferUsage === void 0) {
      bufferUsage = exports.BufferUsage.Static;
    }

    _this = _RefObject.call(this, engine) || this;
    _this._glBindTarget = void 0;
    _this._glBufferUsage = void 0;
    _this._nativeBuffer = void 0;
    _this._hardwareRenderer = void 0;
    _this._type = void 0;
    _this._byteLength = void 0;
    _this._bufferUsage = void 0;
    _this._engine = engine;
    _this._type = type;
    _this._bufferUsage = bufferUsage;
    var hardwareRenderer = engine._hardwareRenderer;
    var gl = hardwareRenderer.gl;

    var glBufferUsage = BufferUtil._getGLBufferUsage(gl, bufferUsage);

    var glBindTarget = type === exports.BufferBindFlag.VertexBuffer ? gl.ARRAY_BUFFER : gl.ELEMENT_ARRAY_BUFFER;
    _this._nativeBuffer = gl.createBuffer();
    _this._hardwareRenderer = hardwareRenderer;
    _this._glBufferUsage = glBufferUsage;
    _this._glBindTarget = glBindTarget;

    _this.bind();

    if (typeof byteLengthOrData === "number") {
      _this._byteLength = byteLengthOrData;
      gl.bufferData(glBindTarget, byteLengthOrData, glBufferUsage);
    } else {
      _this._byteLength = byteLengthOrData.byteLength;
      gl.bufferData(glBindTarget, byteLengthOrData, glBufferUsage);
    }

    gl.bindBuffer(glBindTarget, null);
    return _this;
  }
  /**
   * Bind buffer.
   */


  var _proto = Buffer.prototype;

  _proto.bind = function bind() {
    var gl = this._hardwareRenderer.gl;
    gl.bindBuffer(this._glBindTarget, this._nativeBuffer);
  }
  /**
   * Set buffer data.
   * @param data - Input buffer data
   */
  ;

  _proto.setData = function setData(data, bufferByteOffset, dataOffset, dataLength, options) {
    if (bufferByteOffset === void 0) {
      bufferByteOffset = 0;
    }

    if (dataOffset === void 0) {
      dataOffset = 0;
    }

    if (options === void 0) {
      options = exports.SetDataOptions.None;
    }

    var gl = this._hardwareRenderer.gl;
    var isWebGL2 = this._hardwareRenderer.isWebGL2;
    var glBindTarget = this._glBindTarget;
    this.bind();

    if (options === exports.SetDataOptions.Discard) {
      gl.bufferData(glBindTarget, this._byteLength, this._glBufferUsage);
    } // TypeArray is BYTES_PER_ELEMENT, unTypeArray is 1


    var byteSize = data.BYTES_PER_ELEMENT || 1;
    var dataByteLength = dataLength ? byteSize * dataLength : data.byteLength;

    if (dataOffset !== 0 || dataByteLength < data.byteLength) {
      var isArrayBufferView = data.byteOffset !== undefined;

      if (isWebGL2 && isArrayBufferView) {
        gl.bufferSubData(glBindTarget, bufferByteOffset, data, dataOffset, dataByteLength / byteSize);
      } else {
        var subData = new Uint8Array(isArrayBufferView ? data.buffer : data, dataOffset * byteSize, dataByteLength);
        gl.bufferSubData(glBindTarget, bufferByteOffset, subData);
      }
    } else {
      gl.bufferSubData(glBindTarget, bufferByteOffset, data);
    }

    gl.bindBuffer(glBindTarget, null);
  }
  /**
   * Get buffer data.
   * @param data - Output buffer data
   */
  ;

  _proto.getData = function getData(data, bufferByteOffset, dataOffset, dataLength) {
    if (bufferByteOffset === void 0) {
      bufferByteOffset = 0;
    }

    if (dataOffset === void 0) {
      dataOffset = 0;
    }

    var isWebGL2 = this._hardwareRenderer.isWebGL2;

    if (isWebGL2) {
      var gl = this._hardwareRenderer.gl;
      this.bind();
      gl.getBufferSubData(this._glBindTarget, bufferByteOffset, data, dataOffset, dataLength);
    } else {
      throw "Buffer is write-only on WebGL1.0 platforms.";
    }
  }
  /**
   * @override
   * Destroy.
   */
  ;

  _proto._onDestroy = function _onDestroy() {
    var gl = this._hardwareRenderer.gl;
    gl.deleteBuffer(this._nativeBuffer);
    this._nativeBuffer = null;
    this._hardwareRenderer = null;
  }
  /**
   * @deprecated
   */
  ;

  _proto.resize = function resize(dataLength) {
    this.bind();
    var gl = this._hardwareRenderer.gl;
    gl.bufferData(this._glBindTarget, dataLength, this._glBufferUsage);
    this._byteLength = dataLength;
  };

  _createClass(Buffer, [{
    key: "engine",
    get:
    /**
     * Engine.
     */
    function get() {
      return this._engine;
    }
    /**
     * Buffer binding flag.
     */

  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
    /**
     * Byte length.
     */

  }, {
    key: "byteLength",
    get: function get() {
      return this._byteLength;
    }
    /**
     * Buffer usage.
     */

  }, {
    key: "bufferUsage",
    get: function get() {
      return this._bufferUsage;
    }
    /**
     * Create Buffer.
     * @param engine - Engine
     * @param type - Buffer binding flag
     * @param byteLength - Byte length
     * @param bufferUsage - Buffer usage
     */

  }]);

  return Buffer;
}(RefObject);

/**
 * Primitive topology.
 */
exports.PrimitiveTopology = void 0;

(function (PrimitiveTopology) {
  PrimitiveTopology[PrimitiveTopology["Points"] = 0] = "Points";
  PrimitiveTopology[PrimitiveTopology["Lines"] = 1] = "Lines";
  PrimitiveTopology[PrimitiveTopology["LineLoop"] = 2] = "LineLoop";
  PrimitiveTopology[PrimitiveTopology["LineStrip"] = 3] = "LineStrip";
  PrimitiveTopology[PrimitiveTopology["Triangles"] = 4] = "Triangles";
  PrimitiveTopology[PrimitiveTopology["TriangleStrip"] = 5] = "TriangleStrip";
  PrimitiveTopology[PrimitiveTopology["TriangleFan"] = 6] = "TriangleFan";
})(exports.PrimitiveTopology || (exports.PrimitiveTopology = {}));

/**
 * Index buffer binding.
 */
var IndexBufferBinding = /*#__PURE__*/function () {
  /**
   * Create index buffer binding.
   * @param buffer - Index buffer
   * @param format - Index buffer format
   */
  function IndexBufferBinding(buffer, format) {
    this._buffer = void 0;
    this._format = void 0;
    this._buffer = buffer;
    this._format = format;
  }

  _createClass(IndexBufferBinding, [{
    key: "buffer",
    get:
    /** @internal */

    /** @internal */

    /**
     * Index buffer.
     */
    function get() {
      return this._buffer;
    }
    /**
     * Index buffer format.
     */

  }, {
    key: "format",
    get: function get() {
      return this._format;
    }
  }]);

  return IndexBufferBinding;
}();

/**
 * Vertex buffer binding.
 */
var VertexBufferBinding = /*#__PURE__*/function () {
  /**
   * Create vertex buffer.
   * @param buffer - Vertex buffer
   * @param stride - Vertex buffer stride
   */
  function VertexBufferBinding(buffer, stride) {
    this._buffer = void 0;
    this._stride = void 0;
    this._buffer = buffer;
    this._stride = stride;
  }

  _createClass(VertexBufferBinding, [{
    key: "buffer",
    get:
    /** @internal */

    /** @internal */

    /**
     * Vertex buffer.
     */
    function get() {
      return this._buffer;
    }
    /**
     * Vertex buffer stride.
     */

  }, {
    key: "stride",
    get: function get() {
      return this._stride;
    }
  }]);

  return VertexBufferBinding;
}();

/**
 * @private
 */
var Primitive = /*#__PURE__*/function (_RefObject) {
  _inheritsLoose(Primitive, _RefObject);

  function Primitive(engine, name) {
    var _this;

    _this = _RefObject.call(this, engine) || this;
    _this.name = void 0;
    _this.instanceCount = 0;
    _this._macroCollection = new ShaderMacroCollection();
    _this._vertexElementMap = {};
    _this._glIndexType = void 0;
    _this._platformPrimitive = void 0;
    _this._vertexBufferBindings = [];
    _this._indexBufferBinding = null;
    _this._vertexElements = [];
    _this.targets = [];
    _this.name = name;
    _this._platformPrimitive = _this._engine._hardwareRenderer.createPlatformPrimitive(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Set vertex buffer binding.
   * @param vertexBuffer - Vertex buffer
   * @param stride - Vertex buffer stride
   * @param firstIndex - Vertex buffer binding index, default is 0
   */


  var _proto = Primitive.prototype;

  _proto.setVertexBufferBinding = function setVertexBufferBinding(bufferOrBinding, strideOrFirstIndex, firstIndex) {
    if (strideOrFirstIndex === void 0) {
      strideOrFirstIndex = 0;
    }

    if (firstIndex === void 0) {
      firstIndex = 0;
    }

    var binding = bufferOrBinding;
    var isBinding = binding.buffer !== undefined;
    isBinding || (binding = new VertexBufferBinding(bufferOrBinding, strideOrFirstIndex));
    var bindings = this._vertexBufferBindings;
    bindings.length <= firstIndex && (bindings.length = firstIndex + 1);

    this._setVertexBufferBinding(isBinding ? strideOrFirstIndex : firstIndex, binding);
  }
  /**
   * Set vertex buffer binding.
   * @param bufferBindings - Vertex buffer binding collection
   * @param firstIndex - First buffer binding index
   */
  ;

  _proto.setVertexBufferBindings = function setVertexBufferBindings(bufferBindings, firstIndex) {
    if (firstIndex === void 0) {
      firstIndex = 0;
    }

    var bindings = this._vertexBufferBindings;
    var count = bufferBindings.length;
    var needLength = firstIndex + count;
    bindings.length < needLength && (bindings.length = needLength);

    for (var i = 0; i < count; i++) {
      this._setVertexBufferBinding(firstIndex + i, bufferBindings[i]);
    }
  }
  /**
   * Set index buffer.
   * @param buffer - Index buffer
   * @param format - Index buffer format
   */
  ;

  _proto.setIndexBufferBinding = function setIndexBufferBinding(bufferOrBinding, format) {
    var binding = bufferOrBinding;
    var isBinding = binding.buffer !== undefined;
    isBinding || (binding = new IndexBufferBinding(bufferOrBinding, format));
    this._indexBufferBinding = binding;
    this._glIndexType = BufferUtil._getGLIndexType(binding.format);
  }
  /**
   * Set vertex elements.
   * @param elements - Vertex element collection
   */
  ;

  _proto.setVertexElements = function setVertexElements(elements) {
    this._clearVertexElements();

    for (var i = 0, n = elements.length; i < n; i++) {
      this._addVertexElement(elements[i]);
    }
  }
  /**
   * @internal
   */
  ;

  _proto._draw = function _draw(shaderProgram, subPrimitive) {
    this._platformPrimitive.draw(shaderProgram, subPrimitive);
  }
  /**
   * @override
   */
  ;

  _proto._addRefCount = function _addRefCount(value) {
    _RefObject.prototype._addRefCount.call(this, value);

    var vertexBufferBindings = this._vertexBufferBindings;

    for (var i = 0, n = vertexBufferBindings.length; i < n; i++) {
      vertexBufferBindings[i]._buffer._addRefCount(value);
    }
  }
  /**
   * @override
   * Destroy.
   */
  ;

  _proto._onDestroy = function _onDestroy() {
    this._vertexBufferBindings = null;
    this._indexBufferBinding = null;
    this._vertexElements = null;
    this._vertexElementMap = null;

    this._platformPrimitive.destroy();
  };

  _proto._clearVertexElements = function _clearVertexElements() {
    this._vertexElements.length = 0;
    var vertexElementMap = this._vertexElementMap;

    for (var k in vertexElementMap) {
      delete vertexElementMap[k];
    }

    this._macroCollection.disable(Primitive._uvMacro);

    this._macroCollection.disable(Primitive._normalMacro);

    this._macroCollection.disable(Primitive._tangentMacro);

    this._macroCollection.disable(Primitive._vertexColorMacro);

    this._macroCollection.disable(Primitive._vertexAlphaMacro);
  };

  _proto._addVertexElement = function _addVertexElement(element) {
    var semantic = element.semantic,
        format = element.format;
    this._vertexElementMap[semantic] = element;

    this._vertexElements.push(element); // init primitive shaderData


    switch (semantic) {
      case "TEXCOORD_0":
        this._macroCollection.enable(Primitive._uvMacro);

        break;

      case "NORMAL":
        this._macroCollection.enable(Primitive._normalMacro);

        break;

      case "TANGENT":
        this._macroCollection.enable(Primitive._tangentMacro);

        break;

      case "COLOR_0":
        this._macroCollection.enable(Primitive._vertexColorMacro);

        if (format === exports.VertexElementFormat.Vector4) this._macroCollection.enable(Primitive._vertexAlphaMacro);
        break;
    }
  };

  _proto._setVertexBufferBinding = function _setVertexBufferBinding(index, binding) {
    if (this._getRefCount() > 0) {
      var lastBinding = this._vertexBufferBindings[index];
      lastBinding && lastBinding._buffer._addRefCount(-1);

      binding._buffer._addRefCount(1);
    }

    this._vertexBufferBindings[index] = binding;
  };

  _createClass(Primitive, [{
    key: "vertexBufferBindings",
    get:
    /** Primitive name */

    /** Instanced count, disable instanced drawing when set zero */

    /** @internal */
    // CM&SS:temp

    /**
     *
     */
    function get() {
      return this._vertexBufferBindings;
    }
    /**
     * Vertex element collection.
     */

  }, {
    key: "vertexElements",
    get: function get() {
      return this._vertexElements;
    }
    /**
     * Index buffer binding.
     */

  }, {
    key: "indexBufferBinding",
    get: function get() {
      return this._indexBufferBinding;
    }
  }]);

  return Primitive;
}(RefObject);
Primitive._uvMacro = Shader.getMacroByName("O3_HAS_UV");
Primitive._normalMacro = Shader.getMacroByName("O3_HAS_NORMAL");
Primitive._tangentMacro = Shader.getMacroByName("O3_HAS_TANGENT");
Primitive._vertexColorMacro = Shader.getMacroByName("O3_HAS_VERTEXCOLOR");
Primitive._vertexAlphaMacro = Shader.getMacroByName("O3_HAS_VERTEXALPHA");

/**
 * Vertex element.
 */

var VertexElement = /*#__PURE__*/function () {
  /**
   * Create vertex element.
   * @param semantic - Input vertex semantic
   * @param offset - Vertex data byte offset
   * @param format - Vertex data format
   * @param bindingIndex - Vertex buffer binding index
   * @param instanceStepRate - Instance cadence, the number of instances drawn for each vertex in the buffer, non-instance elements must be 0.
   */
  function VertexElement(semantic, offset, format, bindingIndex, instanceStepRate) {
    if (instanceStepRate === void 0) {
      instanceStepRate = 0;
    }

    this.normalized = false;
    this._glElementInfo = void 0;
    this._semantic = void 0;
    this._offset = void 0;
    this._format = void 0;
    this._bindingIndex = void 0;
    this._instanceStepRate = void 0;
    this._semantic = semantic;
    this._offset = offset;
    this._format = format;
    this._bindingIndex = bindingIndex;
    this._glElementInfo = BufferUtil._getElementInfo(this.format);
    this._instanceStepRate = Math.floor(instanceStepRate);
  }
  /**
   * @deprecated
   */


  _createClass(VertexElement, [{
    key: "semantic",
    get:
    /**
     * Vertex semantic.
     */
    function get() {
      return this._semantic;
    }
    /**
     * Vertex data byte offset.
     */

  }, {
    key: "offset",
    get: function get() {
      return this._offset;
    }
    /**
     * Vertex data format.
     */

  }, {
    key: "format",
    get: function get() {
      return this._format;
    }
    /**
     * Vertex buffer binding index.
     */

  }, {
    key: "bindingIndex",
    get: function get() {
      return this._bindingIndex;
    }
    /**
     * Instance cadence, the number of instances drawn for each vertex in the buffer, non-instance elements must be 0.
     */

  }, {
    key: "instanceStepRate",
    get: function get() {
      return this._instanceStepRate;
    }
  }, {
    key: "elementInfo",
    get: function get() {
      return this._glElementInfo;
    }
  }]);

  return VertexElement;
}();

/**
 * Sub primitive.
 */

var SubPrimitive =
/** Start drawing offset */

/** Drawing count */

/** Drawing topology */

/**
 * Create sub primitive.
 * @param start - Start drawing offset
 * @param count - Drawing count
 * @param topology - Drawing topology
 */
function SubPrimitive(start, count, topology) {
  if (start === void 0) {
    start = 0;
  }

  if (count === void 0) {
    count = 0;
  }

  if (topology === void 0) {
    topology = exports.PrimitiveTopology.Triangles;
  }

  this.start = void 0;
  this.count = void 0;
  this.topology = void 0;
  this.start = start;
  this.count = count;
  this.topology = topology;
};

/**
 * Sprite renderer.
 * @class
 */
var SpriteRenderer = /*#__PURE__*/function (_Renderer) {
  _inheritsLoose(SpriteRenderer, _Renderer);

  /**
   * Render mode: 2D or 3D, default is 2D.
   */

  /**
   * Rendering color for the Sprite graphic.
   */

  /**
   * Constructor of SpriteRenderer.
   * @param {Entity} entity
   */
  function SpriteRenderer(entity) {
    var _this;

    _this = _Renderer.call(this, entity) || this;
    _this._uvRect = void 0;
    _this._worldSize = [];
    _this._positionQuad = void 0;
    _this._rotationAngle = 0;
    _this._anchor = void 0;
    _this._texture = void 0;
    _this._rect = void 0;
    _this._worldSizeFactor = void 0;
    _this.renderMode = "2D";
    _this.tintColor = new math.Vector4(1, 1, 1, 1);
    _this.transformMatrix = void 0;
    _this._worldSizeFactor = 100;

    _this.setTexture(undefined);

    _this.setRect(undefined);

    _this.setAnchor(undefined);

    _this.setUvRect();

    _this.setWorldSize();

    _this._positionQuad = {
      leftTop: new math.Vector3(),
      leftBottom: new math.Vector3(),
      rightTop: new math.Vector3(),
      rightBottom: new math.Vector3()
    };
    return _this;
  }

  var _proto = SpriteRenderer.prototype;

  _proto.setTexture = function setTexture(texture) {
    // TODO: compatible resource
    if (texture && texture.asset) {
      texture = texture.asset;
    }

    this._texture = texture;
  }
  /**
   * Angle of rotation.
   * @member {Vector4}
   */
  ;

  _proto.setRect = function setRect(rect) {
    var _this$_texture$width, _this$_texture, _this$_texture$height, _this$_texture2;

    var rectObject;

    try {
      if (rect) {
        rectObject = JSON.parse(rect);
      }
    } catch (error) {
      Logger.warn("Rect is not valid JSON format");
    }

    this._rect = rect || {
      x: 0,
      y: 0,
      width: (_this$_texture$width = (_this$_texture = this._texture) === null || _this$_texture === void 0 ? void 0 : _this$_texture.width) != null ? _this$_texture$width : 0,
      height: (_this$_texture$height = (_this$_texture2 = this._texture) === null || _this$_texture2 === void 0 ? void 0 : _this$_texture2.height) != null ? _this$_texture$height : 0
    };
  };

  _proto.setAnchor = function setAnchor(anchor) {
    this._anchor = anchor || [0.5, 0.5];
  };

  _proto.setWorldSize = function setWorldSize() {
    var _worldSizeFactor = this._worldSizeFactor;
    this._worldSize = [this._rect.width / _worldSizeFactor, this._rect.height / _worldSizeFactor];
  };

  _proto.setUvRect = function setUvRect() {
    var w, h;

    if (this._texture) {
      w = this._texture.width;
      h = this._texture.height;
    } else {
      w = this._rect.width;
      h = this._rect.height;
    }

    this._uvRect = {
      u: this._rect.x / w,
      v: this._rect.y / h,
      width: this._rect.width / w,
      height: this._rect.height / h
    };
  }
  /**
   * Refresh render data and push to pipeline.
   * @param {Camera} camera
   */
  ;

  _proto.render = function render(camera) {
    this._updatePositionQuad(camera);

    this._transformByMatrix();

    camera._renderPipeline.pushSprite(this, this._positionQuad, this._uvRect, this.tintColor, this.texture, this.renderMode, camera);
  };

  _proto._transformByMatrix = function _transformByMatrix() {
    if (!this.transformMatrix) return;
    var matrix = this.transformMatrix;
    var temp = this._positionQuad.leftTop;
    var leftTop = SpriteRenderer._tempVec40;
    leftTop.setValue(temp.x, temp.y, temp.z, 1);
    temp = this._positionQuad.leftBottom;
    var leftBottom = SpriteRenderer._tempVec41;
    leftBottom.setValue(temp.x, temp.y, temp.z, 1);
    temp = this._positionQuad.rightTop;
    var rightTop = SpriteRenderer._tempVec42;
    rightTop.setValue(temp.x, temp.y, temp.z, 1);
    temp = this._positionQuad.rightBottom;
    var rightBottom = SpriteRenderer._tempVec43;
    rightBottom.setValue(temp.x, temp.y, temp.z, 1);
    math.Vector4.transform(leftTop, matrix, leftTop);
    math.Vector4.transform(leftBottom, matrix, leftBottom);
    math.Vector4.transform(rightTop, matrix, rightTop);
    math.Vector4.transform(rightBottom, matrix, rightBottom);

    this._positionQuad.leftTop.setValue(leftTop.x, leftTop.y, leftTop.z);

    this._positionQuad.leftBottom.setValue(leftBottom.x, leftBottom.y, leftBottom.z);

    this._positionQuad.rightTop.setValue(rightTop.x, rightTop.y, rightTop.z);

    this._positionQuad.rightBottom.setValue(rightBottom.x, rightBottom.y, rightBottom.z);
  }
  /**
   * Update position.
   * @param {Camera} camera
   * @private
   */
  ;

  _proto._updatePositionQuad = function _updatePositionQuad(camera) {
    if (this.renderMode === "2D") {
      var m = camera.viewMatrix.elements;
      var vx = new math.Vector3(m[0], m[4], m[8]);
      var vy = new math.Vector3(m[1], m[5], m[9]); //-- center pos

      var c = this.entity.worldPosition.clone();
      var s = this._worldSize;
      var ns = this.entity.scale;
      vx.scale(s[0] * ns.x);
      vy.scale(s[1] * ns.y);

      if (this._rotationAngle !== 0) {
        var vz = new math.Vector3(m[2], m[6], m[10]);
        var rotation = new math.Quaternion();
        math.Quaternion.rotationAxisAngle(vz, this._rotationAngle, rotation);
        math.Vector3.transformByQuat(vx, rotation, vx);
        math.Vector3.transformByQuat(vy, rotation, vy);
      }

      var cx = new math.Vector3();
      var cy = new math.Vector3();
      math.Vector3.scale(vx, (this.anchor[0] - 0.5) * 2, cx);
      math.Vector3.scale(vy, (this.anchor[1] - 0.5) * 2, cy);
      c.subtract(cx).add(cy); //-- quad pos

      var leftTop = this._positionQuad.leftTop;
      math.Vector3.subtract(c, vx, leftTop);
      leftTop.add(vy);
      var leftBottom = this._positionQuad.leftBottom;
      math.Vector3.subtract(c, vx, leftBottom);
      leftBottom.subtract(vy);
      var rightBottom = this._positionQuad.rightBottom;
      math.Vector3.add(c, vx, rightBottom);
      rightBottom.subtract(vy);
      var rightTop = this._positionQuad.rightTop;
      math.Vector3.add(c, vx, rightTop);
      rightTop.add(vy);
    }
  };

  _createClass(SpriteRenderer, [{
    key: "texture",
    get: function get() {
      return this._texture;
    },
    set: function set(v) {
      this.setTexture(v);
      this.setRect();
      this.setUvRect();
      this.setWorldSize();
    }
  }, {
    key: "anchor",
    get: function get() {
      return this._anchor;
    },
    set: function set(v) {
      this._anchor = v || [0.5, 0.5];
    }
  }, {
    key: "rect",
    get: function get() {
      return this._rect;
    },
    set: function set(v) {
      this.setRect(v);
      this.setUvRect();
      this.setWorldSize();
    }
  }, {
    key: "rotationAngle",
    get: function get() {
      return this._rotationAngle;
    },
    set: function set(v) {
      this._rotationAngle = v;
    }
  }]);

  return SpriteRenderer;
}(Renderer);
SpriteRenderer._tempVec40 = new math.Vector4();
SpriteRenderer._tempVec41 = new math.Vector4();
SpriteRenderer._tempVec42 = new math.Vector4();
SpriteRenderer._tempVec43 = new math.Vector4();

/**
 * Animation wrap mode.
 * @readonly
 */
exports.WrapMode = void 0;
/**
 * Animation event type.
 * @readonly
 */

(function (WrapMode) {
  WrapMode[WrapMode["ONCE"] = 0] = "ONCE";
  WrapMode[WrapMode["LOOP"] = 1] = "LOOP";
})(exports.WrapMode || (exports.WrapMode = {}));

exports.AnimationEvent = void 0;
/**
 * Animation interpolation method.
 * @readonly
 */

(function (AnimationEventType) {
  AnimationEventType[AnimationEventType["FINISHED"] = 0] = "FINISHED";
  AnimationEventType[AnimationEventType["LOOP_END"] = 1] = "LOOP_END";
  AnimationEventType[AnimationEventType["FRAME_EVENT"] = 2] = "FRAME_EVENT";
})(exports.AnimationEvent || (exports.AnimationEvent = {}));

exports.InterpolationType = void 0;

(function (InterpolationType) {
  InterpolationType[InterpolationType["LINEAR"] = 0] = "LINEAR";
  InterpolationType[InterpolationType["CUBICSPLINE"] = 1] = "CUBICSPLINE";
  InterpolationType[InterpolationType["STEP"] = 2] = "STEP";
})(exports.InterpolationType || (exports.InterpolationType = {}));

var TagetType;
/**
 * Data for an animation, set of Samples and Channels.
 * @extends AssetObject
 */

(function (TagetType) {
  TagetType[TagetType["position"] = 0] = "position";
  TagetType[TagetType["rotation"] = 1] = "rotation";
  TagetType[TagetType["scale"] = 2] = "scale";
  TagetType[TagetType["other"] = 3] = "other";
})(TagetType || (TagetType = {}));

var AnimationClip = /*#__PURE__*/function (_EngineObject) {
  _inheritsLoose(AnimationClip, _EngineObject);

  /**
   * @constructor
   * @param name - The AnimationClip's name.
   */
  function AnimationClip(name) {
    var _this;

    _this = _EngineObject.call(this, null) || this;
    _this.name = name;
    _this.duration = void 0;
    _this.durationIndex = void 0;
    _this.samplers = void 0;
    _this.channels = void 0;
    _this.samplers = [];
    _this.channels = [];
    return _this;
  }
  /**
   * Add sampler to samplers of the AnimationClip.
   * @param _input - The index of an accessor containing keyframe input values.
   * @param _output - The index of an accessor containing keyframe output values.
   * @param _outputSize - The length of the output values.
   * @param _interpolation - Interpolation algorithm.	
   */


  var _proto = AnimationClip.prototype;

  _proto.addSampler = function addSampler(_input, _output, _outputSize, _interpolation) {
    if (_interpolation === void 0) {
      _interpolation = exports.InterpolationType.LINEAR;
    }

    // FIXME - adapt old error animation export file
    if (_interpolation === exports.InterpolationType.CUBICSPLINE) {
      if (_outputSize <= 4) {
        _interpolation = exports.InterpolationType.LINEAR;
      } else {
        _outputSize /= 3;
      }
    } // The sampler object, defines an curve


    var sampler = {
      input: _input,
      output: _output,
      outputSize: _outputSize,
      interpolation: _interpolation
    };
    this.samplers.push(sampler);
  }
  /**
   * Add channel to channels of the AnimationClip.
   * @param samplerIndex - The sampler's index in channel's sampler property.
   * @param targetID - Entity name.
   * @param targetPath - Transform property name: position, rotation, scale.
   */
  ;

  _proto.addChannel = function addChannel(samplerIndex, targetID, targetPath) {
    var bindSampler = this.samplers[samplerIndex];
    var tagetType = AnimationClip._tagetTypeMap[targetPath]; // The channel object, bind a Sample to an Object property.

    var channel = {
      sampler: bindSampler,
      target: {
        id: targetID,
        path: targetPath,
        pathType: tagetType != null ? tagetType : TagetType.other
      }
    };
    this.channels.push(channel);
  }
  /**
   * Get length of the channel.
   * @return {number} Number of channels.
   */
  ;

  _proto.getChannelCount = function getChannelCount() {
    return this.channels.length;
  }
  /**
   * Get the object which the channel acting on.
   * @return Channel objects.
   * @param channelIndex - The channel's index in AnimationClip's channels property.
   */
  ;

  _proto.getChannelObject = function getChannelObject(channelIndex) {
    return this.channels[channelIndex];
  }
  /**
   * Get frame count of the channel.
   * @return Channel frame count.
   * @param channelIndex - The channel's index in AnimationClip's channels property.
   */
  ;

  _proto.getFrameCount = function getFrameCount(channelIndex) {
    var sampler = this.channels[channelIndex].sampler;
    return sampler.input.length;
  }
  /**
   * Get frame time of the channel by channelIndex and frameIndex.
   * @return channel frame time
   * @param channelIndex - The channel's index in AnimationClip's channels property.
   * @param frameIndex - The keyframe's index in sampler.input.
   */
  ;

  _proto.getFrameTime = function getFrameTime(channelIndex, frameIndex) {
    var sampler = this.channels[channelIndex].sampler;
    return sampler.input[frameIndex];
  }
  /**
   * Get length of the channel.
   * @return channel time length
   * @param channelIndex - The channel's index in AnimationClip's channels property.
   */
  ;

  _proto.getChannelTimeLength = function getChannelTimeLength(channelIndex) {
    var sampler = this.channels[channelIndex].sampler;
    var frameCount = sampler.input.length;
    return sampler.input[frameCount - 1];
  }
  /**
   * Get the channel value.
   * @return channel value
   * @param channelIndex - The channel's index in AnimationClip's channels property.
   */
  ;

  _proto.createChannelValue = function createChannelValue(channelIndex) {
    var sampler = this.channels[channelIndex].sampler;
    return new Float32Array(sampler.outputSize);
  }
  /**
   * @private
   * @param outValue - The output value after interpolation.
   * @param channelIndex - The channel's index in AnimationClip's channels property.
   * @param frameIndex - The keyframe's index in sampler.input.
   * @param nextFrameIndex - The next keyframe's index in sampler.input.
   * @param alpha - The weight of the next keyframe in interpolation algorithm.
   */
  ;

  _proto.evaluate = function evaluate(outValue, channelIndex, frameIndex, nextFrameIndex, alpha) {
    var channel = this.channels[channelIndex];
    var output = channel.sampler.output;
    var outputSize = channel.sampler.outputSize;

    switch (channel.sampler.interpolation) {
      case exports.InterpolationType.CUBICSPLINE:
        this.evaluateCubicSpline(outValue, output, outputSize, frameIndex, nextFrameIndex, alpha);
        break;

      case exports.InterpolationType.LINEAR:
        this.evaluateLinear(outValue, output, outputSize, frameIndex, nextFrameIndex, alpha);
        break;
    }

    return outValue;
  };

  _proto.evaluateCubicSpline = function evaluateCubicSpline(outValue, output, outputSize, frameIndex, nextFrameIndex, alpha) {
    var squared = alpha * alpha;
    var cubed = alpha * squared;
    var part1 = 2.0 * cubed - 3.0 * squared + 1.0;
    var part2 = -2.0 * cubed + 3.0 * squared;
    var part3 = cubed - 2.0 * squared + alpha;
    var part4 = cubed - squared;

    for (var i = outputSize; i >= 0; i--) {
      var t1 = output[frameIndex * outputSize * 3 + i];
      var v1 = output[frameIndex * outputSize * 3 + outputSize + i];
      var t2 = output[frameIndex * outputSize * 3 + outputSize * 2 + i];
      var v2 = output[nextFrameIndex * outputSize * 3 + outputSize + i];
      outValue[i] = v1 * part1 + v2 * part2 + t1 * part3 + t2 * part4;
    }
  };

  _proto.evaluateLinear = function evaluateLinear(outValue, output, outputSize, frameIndex, nextFrameIndex, alpha) {
    switch (outputSize) {
      case 1:
        outValue[0] = output[frameIndex] * (1 - alpha) + output[nextFrameIndex] * alpha;
        break;

      case 4:
        // const start = new Quaternion(
        //   output[frameIndex * outputSize],
        //   output[frameIndex * outputSize + 1],
        //   output[frameIndex * outputSize + 2],
        //   output[frameIndex * outputSize + 3]
        // );
        // const end = new Quaternion(
        //   output[nextFrameIndex * outputSize],
        //   output[nextFrameIndex * outputSize + 1],
        //   output[nextFrameIndex * outputSize + 2],
        //   output[nextFrameIndex * outputSize + 3]
        // );
        // Quaternion.slerp(start, end, alpha, <Quaternion>outValue);
        this._quaSlerp(outValue, output, frameIndex * outputSize, output, nextFrameIndex * outputSize, alpha);

        break;

      default:
        for (var i = outputSize; i >= 0; i--) {
          outValue[i] = output[frameIndex * outputSize + i] * (1 - alpha) + output[nextFrameIndex * outputSize + i] * alpha;
        }

        break;
    } // End of switch

  };

  _proto._quaSlerp = function _quaSlerp(out, a, aIndex, b, bIndex, t) {
    // Benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations
    var ax = a[0 + aIndex],
        ay = a[1 + aIndex],
        az = a[2 + aIndex],
        aw = a[3 + aIndex];
    var bx = b[0 + bIndex],
        by = b[1 + bIndex],
        bz = b[2 + bIndex],
        bw = b[3 + bIndex];
    var omega, cosom, sinom, scale0, scale1; // Calc cosine.

    cosom = ax * bx + ay * by + az * bz + aw * bw; // Adjust signs (if necessary).

    if (cosom < 0.0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    } // Calculate coefficients.


    if (1.0 - cosom > 0.000001) {
      // Standard case (slerp)
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      scale0 = Math.sin((1.0 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      // The "from" quaternions and the "to" quaternions are very close, so we can do a linear interpolation.
      scale0 = 1.0 - t;
      scale1 = t;
    } // Calculate final values.


    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
  };

  return AnimationClip;
}(EngineObject);
AnimationClip._tagetTypeMap = {
  position: TagetType.position,
  rotation: TagetType.rotation,
  scale: TagetType.scale
};

/**
 * AnimationClip playback.
 * @extends EventDispatcher
 * @see class AnimationClip
 * @private
 */
var AnimationLayer = /*#__PURE__*/function (_EventDispatcher) {
  _inheritsLoose(AnimationLayer, _EventDispatcher);

  /**
   * @constructor
   */
  function AnimationLayer() {
    var _this;

    _this = _EventDispatcher.call(this, null) || this;
    _this.layerWeight = void 0;
    _this.mixTagetLayer = void 0;
    _this.isFading = void 0;
    _this.fadeDeltaTime = void 0;
    _this.crossFadeDuration = void 0;
    _this.fadeDuration = void 0;
    _this.crossFadeDeltaTime = void 0;
    _this.isMixLayer = void 0;
    _this.hasMixLayer = void 0;
    _this.mixEntity = void 0;
    _this._activedEvents = void 0;
    _this._animClip = void 0;
    _this._isPlaying = void 0;
    _this._wrapMode = void 0;
    _this._channelStates = void 0;
    _this._animClipLength = void 0;
    _this._frameEvents = void 0;
    _this.layerWeight = 1.0;
    _this._activedEvents = [];
    return _this;
  }
  /**
   * @param nextAnimClip - anim clip to playback next.
   * @param rootEntity - The root entity of the skeleton animation.
   * @return Whether can mix with current AnimationClip.
   */


  var _proto = AnimationLayer.prototype;

  _proto.canMix = function canMix(nextAnimClip, rootEntity) {
    if (!this._animClip || !this._isPlaying || this.isMixLayer || this.isFading) {
      return false;
    }

    if (this._animClip.getChannelCount() !== nextAnimClip.getChannelCount()) {
      return false;
    }

    var count = this._animClip.getChannelCount();

    for (var i = count - 1; i >= 0; i--) {
      var curChannel = this._animClip.getChannelObject(i);

      var curTargetObject = this._findChannelTarget(rootEntity, curChannel.target);

      var nextChannel = nextAnimClip.getChannelObject(i);

      var nextTargetObject = this._findChannelTarget(rootEntity, nextChannel.target);

      if (curTargetObject !== nextTargetObject) {
        return false;
      }
    }

    return true;
  }
  /**
   * Mix animClip with target animationLayer.
   * @param animClip - AnimationClip to be mixed.
   * @param targetLayer - Target animationLayer.
   * @param rootEntity - The root entity of the skeleton animation.
   * @param mixEntity - The entiity to be mixed.
   * @param options - The play options when playing AnimationClip.
   */
  ;

  _proto.mix = function mix(animClip, targetLayer, rootEntity, mixEntity, options) {
    if (options === void 0) {
      options = {};
    }

    this._isPlaying = targetLayer.isPlaying;
    this._animClip = animClip;
    this._wrapMode = typeof options.wrapMode !== "undefined" ? options.wrapMode : targetLayer._wrapMode;

    this._addEvents(options);

    this._channelStates = [];
    this._animClipLength = 0; // -- Create new state object.

    if (this._isPlaying) {
      var targetChannelStates = targetLayer._channelStates;

      var count = this._animClip.getChannelCount();

      for (var i = count - 1; i >= 0; i--) {
        var channel = this._animClip.getChannelObject(i);

        var targetObject = this._findChannelTarget(mixEntity, channel.target);

        this._channelStates[i] = {
          frameTime: 0.0,
          currentFrame: 0,
          currentValue: this._animClip.createChannelValue(i),
          mixWeight: targetObject ? 1 : 0
        };
        targetChannelStates[i].mixWeight = targetChannelStates[i].mixWeight === undefined ? 1 : targetChannelStates[i].mixWeight;

        if (targetChannelStates[i].mixWeight === 1) {
          targetChannelStates[i].mixWeight = targetObject ? 0 : 1;
        }

        var channelTimeLength = this._animClip.getChannelTimeLength(i);

        this._animClipLength = this._animClipLength > channelTimeLength ? this._animClipLength : channelTimeLength;
      } // End of for.


      return true;
    }

    return false;
  };

  _proto.removeMixWeight = function removeMixWeight() {
    var count = this._channelStates.length;

    for (var i = count - 1; i >= 0; i--) {
      if (this._channelStates[i].mixWeight === 1) {
        this.mixTagetLayer._channelStates[i].mixWeight = 1;
      }
    }
  }
  /**
   * Play the specify AnimationClip.
   * @param animClip - The AnimationClip to be played.
   * @param rootEntity - The root entity of the skeleton animation.
   * @param options - The play options when playing AnimationClip.
   */
  ;

  _proto.play = function play(animClip, rootEntity, options) {
    if (options === void 0) {
      options = {
        wrapMode: exports.WrapMode.LOOP
      };
    }

    this._isPlaying = !!animClip;
    this._animClip = animClip;
    this._wrapMode = typeof options.wrapMode !== "undefined" ? options.wrapMode : exports.WrapMode.LOOP;

    this._addEvents(options);

    this._channelStates = [];
    this._animClipLength = 0; // Create new state object.

    if (this._isPlaying) {
      var count = this._animClip.getChannelCount();

      var channelTargets = [];

      for (var i = count - 1; i >= 0; i--) {
        var channel = this._animClip.getChannelObject(i);

        var targetObject = this._findChannelTarget(rootEntity, channel.target);

        if (!targetObject) {
          Logger.warn("Can not find channel target:" + channel.target.id);
        }

        this._channelStates[i] = {
          frameTime: 0.0,
          currentFrame: 0,
          currentValue: this._animClip.createChannelValue(i)
        };
        channelTargets[i] = {
          targetObject: targetObject,
          path: channel.target.path,
          pathType: channel.target.pathType,
          outputSize: channel.sampler.outputSize
        };

        var channelTimeLength = this._animClip.getChannelTimeLength(i);

        this._animClipLength = this._animClipLength > channelTimeLength ? this._animClipLength : channelTimeLength;
      } // End of for.


      return channelTargets;
    }

    return false;
  }
  /**
   * Stop play AnimationClip.
   * @param rightnow - Stop it immediately, or it will stop at the end of the clip.
   */
  ;

  _proto.stop = function stop(rightnow) {
    if (!this._animClip || !this._isPlaying) {
      return;
    }

    if (rightnow) {
      this._isPlaying = false;
    } else {
      this._wrapMode = exports.WrapMode.ONCE;
    }
  }
  /**
   * Update animation states only.
   * @param deltaTime - The deltaTime when the animation update.
   */
  ;

  _proto.updateState = function updateState(deltaTime) {
    if (!this._animClip || !this._isPlaying) {
      return;
    } // Update the weight of the Animation Layer.


    if (this.isFading) {
      this.fadeDeltaTime += deltaTime;
      this.layerWeight = 1.0 - this.fadeDeltaTime / this.fadeDuration;

      if (this.layerWeight <= 0) {
        this._isPlaying = false;
      }
    } else if (this.crossFadeDuration) {
      this.crossFadeDeltaTime += deltaTime;
      this.layerWeight = this.crossFadeDeltaTime / this.crossFadeDuration;

      if (this.layerWeight >= 1.0) {
        this.layerWeight = 1.0;
        delete this.crossFadeDuration;
      }
    }

    deltaTime = deltaTime / 1000;

    this._activeEvents(deltaTime); // Update channelStates.


    var count = this._animClip.getChannelCount();

    var playingCount = 0;

    for (var i = count - 1; i >= 0; i--) {
      if (this._updateChannelState(deltaTime, i)) {
        playingCount++;
      }
    }

    if (playingCount === 0) {
      this._isPlaying = false;

      if (this.isMixLayer) {
        this.removeMixWeight();
      }
    }
  }
  /**
   * Get the weight of the Animation Layer.
   * @return Channel layer weight.
   * @param channelIndex - The channel's index in AnimationClip's channels property.
   */
  ;

  _proto.getChannelLayerWeight = function getChannelLayerWeight(channelIndex) {
    if ((this.hasMixLayer || this.isMixLayer) && channelIndex < this._channelStates.length) {
      var mixWeight = this._channelStates[channelIndex].mixWeight;
      var layerWeight = this.isMixLayer ? this.mixTagetLayer.layerWeight : this.layerWeight;
      return mixWeight * layerWeight;
    }

    return this.layerWeight;
  }
  /**
   * @return Channel value.
   * @param channelIndexchannelIndex - The channel's index in AnimationClip's channels property.
   */
  ;

  _proto.getChannelValue = function getChannelValue(channelIndex) {
    return this._channelStates[channelIndex].currentValue;
  }
  /**
   * Trigger the animation events.
   */
  ;

  _proto.triggerEvents = function triggerEvents() {
    var _this2 = this;

    this._activedEvents && this._activedEvents.forEach(function (event) {
      _this2.trigger(event);
    });
    this._activedEvents.length = 0;
  }
  /**
   * Jump to a frame of the AnimationClip, take effect immediately.
   * @param frameTime - The time which the animation will jump to.
   */
  ;

  _proto.jumpToFrame = function jumpToFrame(frameTime) {
    var count = this._animClip.getChannelCount();

    for (var i = count - 1; i >= 0; i--) {
      // 1. Clear pre frameTime.
      var channelState = this._channelStates[i];
      channelState.frameTime = 0; // 2. Update new frameTime.

      this._updateChannelState(frameTime, i);
    }
  }
  /**
   * Update state and value of channel.
   * @param deltaTime - The deltaTime when the animation update.
   * @param channelIndex - The channel's index in AnimationClip's channels property.
   * @private
   */
  ;

  _proto._updateChannelState = function _updateChannelState(deltaTime, channelIndex) {
    var animClip = this._animClip;
    var channelState = this._channelStates[channelIndex];
    var animClipLength = animClip.getChannelTimeLength(channelIndex);
    channelState.frameTime += deltaTime;

    if (channelState.frameTime > animClipLength) {
      switch (this._wrapMode) {
        case exports.WrapMode.ONCE:
          channelState.frameTime = animClipLength;
          break;

        case exports.WrapMode.LOOP:
          channelState.frameTime = channelState.frameTime % this._animClipLength;
          break;

        default:
          Logger.error("Unknown Anim wrap Mode: " + this._wrapMode);
      }
    } // End of if.


    if (channelState.mixWeight && channelState.mixWeight === 0) {
      return true;
    }

    var frameTime = Math.min(channelState.frameTime, animClipLength);

    var lerpState = this._getKeyAndAlpha(animClip.getChannelObject(channelIndex), frameTime);

    channelState.currentValue = animClip.evaluate(channelState.currentValue, channelIndex, lerpState.currentKey, lerpState.nextKey, lerpState.alpha);

    if (this._wrapMode === exports.WrapMode.ONCE && channelState.frameTime >= animClipLength) {
      return false;
    }

    return true;
  } // -- private ----------------------------------------------------------

  /**
   * @param options - The AnimationEvent's option.
   * @private
   */
  ;

  _proto._addEvents = function _addEvents(options) {
    var _this3 = this;

    this.removeAllEventListeners();
    this._frameEvents = [];

    if (options.events) {
      var frameEventIndex = 0;

      var _loop = function _loop(i) {
        var event = options.events[i];
        var eventType = event.type;

        if (event.type === exports.AnimationEvent.FRAME_EVENT) {
          eventType = "frameEvent" + frameEventIndex;
          frameEventIndex++;

          _this3._frameEvents.push({
            eventType: eventType,
            triggerTime: event.triggerTime,
            triggered: false
          });
        }

        _this3.addEventListener(eventType, function (e) {
          event.callback();
        });
      };

      for (var i = options.events.length - 1; i >= 0; i--) {
        _loop(i);
      } // End of for.

    } // End of if.

  }
  /**
   * Activate the AnimationEvent.
   * @param deltaTime - The deltaTime when the animation update.
   * @private
   */
  ;

  _proto._activeEvents = function _activeEvents(deltaTime) {
    // Trigger Frame Event.
    var index = this._animClip.durationIndex;

    if (this._frameEvents.length > 0 && this._channelStates.length > 0) {
      var curFrameTime = this._channelStates[index].frameTime + deltaTime;

      for (var i = this._frameEvents.length - 1; i >= 0; i--) {
        var frameEvent = this._frameEvents[i];

        if (!frameEvent.triggered && curFrameTime > frameEvent.triggerTime) {
          this._activedEvents.push(new Event(frameEvent.eventType, this));

          frameEvent.triggered = true;
        }
      }
    }

    if (this._channelStates.length > 0 && this._channelStates[index].frameTime + deltaTime >= this._animClip.duration) {
      if (this._wrapMode === exports.WrapMode.LOOP) {
        // Reset Frame Event status.
        if (this._frameEvents.length > 0) {
          for (var _i = this._frameEvents.length - 1; _i >= 0; _i--) {
            this._frameEvents[_i].triggered = false;
          }
        } // Trigger Loop End Event.
        // @ts-ignore


        if (this.hasEvent(exports.AnimationEvent.LOOP_END)) {
          this._activedEvents.push(new Event(exports.AnimationEvent.LOOP_END, this));
        } // @ts-ignore

      } else if (this.hasEvent(exports.AnimationEvent.FINISHED)) {
        // Trigger Finish Event.
        this._activedEvents.push(new Event(exports.AnimationEvent.FINISHED, this));
      }
    }
  }
  /**
   * Find the target the channel belongs to.
   * @param rootNode - The root entity of the skeleton animation.
   * @param target - The target to be finded.
   * @private
   */
  ;

  _proto._findChannelTarget = function _findChannelTarget(rootNode, target) {
    var targetID = target.id;
    var targetSceneObject = null;

    if (rootNode.name === targetID) {
      targetSceneObject = rootNode;
    } else {
      targetSceneObject = rootNode.findByName(targetID);
    }

    if (target.path === "weights") {
      return targetSceneObject.getComponent(SkinnedMeshRenderer);
    } else {
      return targetSceneObject;
    }
  }
  /**
   * @return Current and next key id, current alpha.
   * @param channel - The channle which the key and alpha in.
   * @param time - The frame time.
   * @private
   */
  ;

  _proto._getKeyAndAlpha = function _getKeyAndAlpha(channel, time) {
    var keyTime = 0;
    var currentKey = 0;
    var nextKey = 0;
    var timeKeys = channel.sampler.input;
    var numKeys = timeKeys.length;

    for (var i = numKeys - 1; i >= 0; i--) {
      if (time > timeKeys[i]) {
        keyTime = time - timeKeys[i];
        currentKey = i;
        break;
      }
    }

    nextKey = currentKey + 1;

    if (nextKey >= numKeys) {
      switch (this._wrapMode) {
        case exports.WrapMode.ONCE:
          nextKey = numKeys - 1;
          break;

        case exports.WrapMode.LOOP:
          nextKey = 0;
          break;
      }
    }

    var keyLength = timeKeys[nextKey] - timeKeys[currentKey];
    var alpha = nextKey === currentKey || keyLength < 0.00001 ? 1 : keyTime / keyLength;
    return {
      currentKey: currentKey,
      nextKey: nextKey,
      alpha: alpha
    };
  };

  _createClass(AnimationLayer, [{
    key: "isPlaying",
    get:
    /**
     * @return Whether the AnimationClip is playing.
     */
    function get() {
      return this._animClip && this._isPlaying;
    }
  }]);

  return AnimationLayer;
}(EventDispatcher);

var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

/**
 * Animation Component, the AnimationClip player with crossFade and mix abilities.
 */
var Animation = (_class = (_temp = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Animation, _Component);

  /**
   * Linearly interpolates between two values.
   * @param outValue - The output value after interpolation.
   * @param startValue - The start value before interpolation.
   * @param endValue - The end value after interpolation.
   * @param outputSize - The length of the output values.
   * @param alpha - The weight of the endValue in interpolation algorithm.
   * @private
   */
  Animation.lerp = function lerp(outValue, startValue, endValue, alpha, outputSize) {
    switch (outputSize) {
      case 1:
        outValue = startValue * (1 - alpha) + endValue * alpha;
        break;

      case 4:
        var start = _construct(math.Quaternion, startValue);

        var end = _construct(math.Quaternion, endValue);

        var quat = new math.Quaternion();
        math.Quaternion.slerp(start, end, alpha, quat);
        outValue[0] = quat.x;
        outValue[1] = quat.y;
        outValue[2] = quat.z;
        outValue[3] = quat.w;
        break;

      default:
        for (var i = outputSize; i >= 0; i--) {
          outValue[i] = startValue[i] * (1 - alpha) + endValue[i] * alpha;
        }

        break;
    } // End of switch.


    return outValue;
  }
  /** @internal */
  ;

  /**
   * @param entity - The entitiy which the animation component belongs to.
   */
  function Animation(entity) {
    var _this;

    _this = _Component.call(this, entity) || this;

    _initializerDefineProperty(_this, "_onUpdateIndex", _descriptor, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_animSet", _descriptor2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_animLayers", _descriptor3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_timeScale", _descriptor4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "_channelTargets", _descriptor5, _assertThisInitialized(_this));

    return _this;
  }
  /**
   * Evaluates the animation component based on deltaTime.
   * @param deltaTime - The deltaTime when the animation update.
   * @private
   */


  var _proto = Animation.prototype;

  _proto.update = function update(deltaTime) {
    if (!this.isPlaying()) {
      return;
    }

    deltaTime = deltaTime * this._timeScale; // Update state.

    for (var i = this._animLayers.length - 1; i >= 0; i--) {
      var animLayer = this._animLayers[i];
      animLayer.updateState(deltaTime);
    } // Update value.


    this._updateValues(); // Trigger events and destroy no use layer.


    for (var _i = this._animLayers.length - 1; _i >= 0; _i--) {
      var _animLayer = this._animLayers[_i];

      _animLayer.triggerEvents();

      if (!_animLayer.isPlaying && (_animLayer.isFading || _animLayer.isMixLayer)) {
        this._animLayers.splice(_i, 1);

        this._removeRefMixLayers(_animLayer);
      }
    }
  }
  /**
   * Add a AnimationClip to the animation with the name.
   * @param animClip - The AnimationClip which you want to be added.
   * @param name - The name of the AnimationClip.
   */
  ;

  _proto.addAnimationClip = function addAnimationClip(animClip, name) {
    this._animSet[name] = animClip;
  }
  /**
   * Remove clip from the animation.
   * @param name - The name of the AnimationClip.
   */
  ;

  _proto.removeAnimationClip = function removeAnimationClip(name) {
    var animClip = this._animSet[name];

    if (animClip) {
      delete this._animSet[name];
    }
  }
  /**
   * Get length of the AnimationClip By the name.
   * @param name - The name of the AnimationClip.
   * @return The AnimationClip length.
   */
  ;

  _proto.getAnimationClipLength = function getAnimationClipLength(name) {
    var animClip = this._animSet[name];

    if (animClip) {
      return animClip.getChannelTimeLength(0);
    } else {
      return 0.0;
    }
  }
  /**
   * Get the AnimationClip By name.
   * @param name - The name of the AnimationClip.
   * @return The AnimationClip which match the name.
   */
  ;

  _proto.getAnimationClip = function getAnimationClip(name) {
    return this._animSet[name] || null;
  }
  /**
   * Return whether is playing.
   * @return {boolean}
   */
  ;

  _proto.isPlaying = function isPlaying() {
    for (var i = this._animLayers.length - 1; i >= 0; i--) {
      if (this._animLayers[i].isPlaying) {
        return true;
      }
    }

    return false;
  }
  /**
   * Play the AnimationClip by name.
   * @param name - The AnimatioinClip's name.
   * @param options - The play options when playing AnimationClip.
   */
  ;

  _proto.playAnimationClip = function playAnimationClip(name, options) {
    var animClip = this._animSet[name];

    if (!animClip) {
      Logger.error("can not find anim clip: " + name);
      return;
    }

    var animLayer = null;

    for (var i = this._animLayers.length - 1; i >= 0; i--) {
      if (!this._animLayers[i].isFading && !this._animLayers[i].isMixLayer) {
        animLayer = this._animLayers[i];
        break;
      }
    }

    if (!animLayer) {
      animLayer = new AnimationLayer();

      this._animLayers.push(animLayer);
    }

    this._removeRefMixLayers(animLayer);

    this._channelTargets = animLayer.play(animClip, this.entity, options);
  }
  /**
   * CrossFade to the AnimationClip by name.
   * @param name - The AnimatioinClip's name.
   * @param crossFadeDuration - The milliseconds of the crossFade's duration.
   * @param options - The play options when playing AnimationClip.
   */
  ;

  _proto.CrossFade = function CrossFade(name, crossFadeDuration, options) {
    var animClip = this._animSet[name];

    if (!animClip) {
      Logger.error("can not find anim clip: " + name);
      return;
    }

    if (!crossFadeDuration || crossFadeDuration < 0) {
      Logger.error("crossFadeDuration can not less than 0!");
      return;
    } // Look for targets that can be mixed.


    var targetAnimLayer = null;

    for (var i = this._animLayers.length - 1; i >= 0; i--) {
      if (this._animLayers[i].canMix(animClip, this.entity)) {
        targetAnimLayer = this._animLayers[i];
        break;
      }
    }

    if (targetAnimLayer) {
      // Clear the unfinished crossFading action
      for (var _i2 = this._animLayers.length - 1; _i2 >= 0; _i2--) {
        if (this._animLayers[_i2].isFading) {
          this._animLayers.splice(_i2, 1);
        }
      }

      targetAnimLayer.isFading = true;
      targetAnimLayer.fadeDuration = crossFadeDuration;
      targetAnimLayer.fadeDeltaTime = 0;
      var animLayer = new AnimationLayer();
      animLayer.crossFadeDuration = crossFadeDuration;
      animLayer.crossFadeDeltaTime = 0;
      animLayer.play(animClip, this.entity, options);

      this._animLayers.push(animLayer);
    } else {
      this.playAnimationClip(name, options);
    }
  }
  /**
   * Mix the AnimationClip by name.
   * @param name - The AnimatioinClip's name.
   * @param mixBoneName - Takes effect on the bone named mixBoneName and the child bones attached to it.
   * @param options - The play options when playing AnimationClip.
   */
  ;

  _proto.mix = function mix(name, mixBoneName, options) {
    var animClip = this._animSet[name];

    if (!animClip) {
      Logger.error("can not find anim clip: " + name);
      return;
    }

    var mixNode = this.entity.findByName(mixBoneName);

    if (!mixNode) {
      Logger.error("can not find mix bone!");
      return;
    } // Look for targets that can be mixed.


    var targetAnimLayer = null;

    for (var i = this._animLayers.length - 1; i >= 0; i--) {
      if (this._animLayers[i].canMix(animClip, this.entity)) {
        targetAnimLayer = this._animLayers[i];
        break;
      }
    }

    if (targetAnimLayer) {
      this._removeRefMixLayers(null, mixNode);

      targetAnimLayer.hasMixLayer = true;
      var animLayer = new AnimationLayer();
      animLayer.isMixLayer = true;
      animLayer.mixTagetLayer = targetAnimLayer;
      animLayer.mixEntity = mixNode;
      animLayer.mix(animClip, targetAnimLayer, this.entity, mixNode, options);

      this._animLayers.push(animLayer);
    }
  }
  /**
   * Stop play
   * @param rightnow - Stop it immediately, or it will stop at the end of the clip
   */
  ;

  _proto.stop = function stop(rightnow) {
    for (var i = this._animLayers.length - 1; i >= 0; i--) {
      if (this._animLayers[i].isFading) {
        this._animLayers.splice(i, 1);
      } else {
        this._animLayers[i].stop(rightnow);
      }
    }
  }
  /**
   * Jump to a frame of the animation, take effect immediately.
   * @param frameTime - The time which the animation will jump to.
   */
  ;

  _proto.jumpToFrame = function jumpToFrame(frameTime) {
    frameTime = frameTime / 1000;

    for (var i = this._animLayers.length - 1; i >= 0; i--) {
      this._animLayers[i].jumpToFrame(frameTime);
    }

    this._updateValues();
  } // -- private ----------------------------------------------------------

  /**
   * Remove the mixed animation associated with targetLayer.
   * @param targetLayer - The mixed AnimatioinLayer which will be removed.
   * @private
   */
  ;

  _proto._removeRefMixLayers = function _removeRefMixLayers(targetLayer, mixNode) {
    if (targetLayer && targetLayer.hasMixLayer) {
      for (var i = this._animLayers.length - 1; i >= 0; i--) {
        var animLayer = this._animLayers[i];

        if (animLayer.isMixLayer && animLayer.mixTagetLayer === targetLayer) {
          animLayer.removeMixWeight();

          this._animLayers.splice(i, 1);
        }
      }
    }

    if (mixNode) {
      for (var _i3 = this._animLayers.length - 1; _i3 >= 0; _i3--) {
        var _animLayer2 = this._animLayers[_i3];

        if (_animLayer2.isMixLayer && (_animLayer2.mixEntity === mixNode || _animLayer2.mixEntity.findByName(mixNode) || mixNode.findByName(_animLayer2.mixEntity))) {
          _animLayer2.removeMixWeight();

          this._animLayers.splice(_i3, 1);
        }
      }
    }
  }
  /**
   * Update animation value.
   * @private
   */
  ;

  _proto._updateValues = function _updateValues() {
    if (this._animLayers.length === 0 || !this._channelTargets) {
      return;
    }

    for (var i = this._channelTargets.length - 1; i >= 0; i--) {
      var channelTarget = this._channelTargets[i];

      var val = this._getChannelValue(i, channelTarget.outputSize);

      var targetObject = channelTarget.targetObject;
      var path = channelTarget.path;

      if (path === "weights") {
        // SkinnedMeshRenderer.
        targetObject.setWeights(val);
      } else {
        var v = val; //CM: Temporary optimization val should be Vector3/Quaternion type to avoid conversion overhead
        //CM: In the future, after Animation unifies all animation systems, it will use pathType as other and continue to use reflection.
        //CM: Due to the relatively small number of pathTypes, pre-classification can be used to avoid switch overhead in the future, such as three types of skeletal animation

        var transform = targetObject.transform;

        switch (channelTarget.pathType) {
          case TagetType.position:
            var position = transform.position;
            position.setValue(v[0], v[1], v[2]);
            transform.position = position;
            break;

          case TagetType.rotation:
            var rotation = transform.rotationQuaternion;
            rotation.setValue(v[0], v[1], v[2], v[3]);
            transform.rotationQuaternion = rotation;
            break;

          case TagetType.scale:
            var scale = transform.scale;
            scale.setValue(v[0], v[1], v[2]);
            transform.scale = scale;
            break;

          default:
            targetObject[path] = val;
        }
      }
    } // End of for

  }
  /**
   * @return Channel value.
   * @param channelIndex - The channel's index in AnimationClip's channels property.
   * @param outputSize - The length of the output values.
   * @private
   */
  ;

  _proto._getChannelValue = function _getChannelValue(channelIndex, outputSize) {
    var weights = [];
    var values = [];

    for (var i = this._animLayers.length - 1; i >= 0; i--) {
      var weight = this._animLayers[i].getChannelLayerWeight(channelIndex);

      if (weight > 0) {
        weights.push(weight);
        values.push(this._animLayers[i].getChannelValue(channelIndex));
      }
    }
    /**
     * When values.length === 1, return the value directly.
     * When values.length === 2, return the lerp from value[0] and value[1].
     **/


    if (values.length === 1) {
      return values[0];
    } else if (values.length === 2) {
      return Animation.lerp(values[0], values[0], values[1], weights[1], outputSize);
    } // Other case can't be handled.


    Logger.error("Can not get channel value!");
    return false;
  }
  /**
   * Be called when this instance be enabled.
   * @override
   * @internal
   */
  ;

  _proto._onEnable = function _onEnable() {
    this.engine._componentsManager.addOnUpdateAnimations(this);
  }
  /**
   * Be called when this instance be disabled or it's entity be inActiveInHierarchy or before this instance be destroyed.
   * @override
   * @internal
   */
  ;

  _proto._onDisable = function _onDisable() {
    this.engine._componentsManager.removeOnUpdateAnimations(this);
  };

  _createClass(Animation, [{
    key: "timeScale",
    get:
    /**
     * The timeScale getter, timeScale which used for scale the animation time to speed up or slow down the animation.
     */
    function get() {
      return this._timeScale;
    }
    /**
     * The timeScale setter, timeScale which used for scale the animation time to speed up or slow down the animation.
     */
    ,
    set: function set(val) {
      if (val > 0) {
        this._timeScale = val;
      }
    }
  }]);

  return Animation;
}(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_onUpdateIndex", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_animSet", [shallowClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "_animLayers", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [new AnimationLayer()];
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "_timeScale", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 1.0;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "_channelTargets", [ignoreClone], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class);

/**
 * BufferGeometry.
 */
var BufferGeometry = /*#__PURE__*/function (_EngineObject) {
  _inheritsLoose(BufferGeometry, _EngineObject);

  /**
   * Create buffer geometry.
   * @param engine - Engine
   * @param name - Geometry name
   */
  function BufferGeometry(engine, name) {
    var _this;

    _this = _EngineObject.call(this, engine) || this;
    _this.name = void 0;
    _this._primitive = void 0;
    _this.bounds = new math.BoundingBox();
    _this._subGeometries = [];
    _this._primitive = new Primitive(engine);
    _this.name = name;
    return _this;
  }
  /**
   * Set vertex buffer binding.
   * @param vertexBufferBindings - Vertex buffer binding
   * @param firstIndex - First vertex buffer index, the default value is 0
   */


  var _proto = BufferGeometry.prototype;

  _proto.setVertexBufferBinding = function setVertexBufferBinding(bufferOrBinding, stride, firstIndex) {
    if (stride === void 0) {
      stride = 0;
    }

    if (firstIndex === void 0) {
      firstIndex = 0;
    }

    this._primitive.setVertexBufferBinding(bufferOrBinding, stride, firstIndex);
  }
  /**
   * Set vertex buffer binding.
   * @param vertexBufferBindings - Vertex buffer binding
   * @param firstIndex - First vertex buffer index, the default value is 0
   */
  ;

  _proto.setVertexBufferBindings = function setVertexBufferBindings(vertexBufferBindings, firstIndex) {
    if (firstIndex === void 0) {
      firstIndex = 0;
    }

    this._primitive.setVertexBufferBindings(vertexBufferBindings, firstIndex);
  }
  /**
   * Set index buffer binding.
   * @param buffer - Index buffer
   * @param format - Index buffer format
   */
  ;

  _proto.setIndexBufferBinding = function setIndexBufferBinding(bufferOrBinding, format) {
    this._primitive.setIndexBufferBinding(bufferOrBinding, format);
  }
  /**
   * Set vertex elements.
   * @param elements - Vertex element collection
   */
  ;

  _proto.setVertexElements = function setVertexElements(elements) {
    this._primitive.setVertexElements(elements);
  }
  /**
   * Add sub-geometry, each sub-geometry can correspond to an independent material.
   * @param start - Start drawing offset, if the index buffer is set, it means the offset in the index buffer, if not set, it means the offset in the vertex buffer
   * @param count - Drawing count, if the index buffer is set, it means the count in the index buffer, if not set, it means the count in the vertex buffer
   * @param topology - Drawing topology, default is PrimitiveTopology.Triangles
   */
  ;

  _proto.addSubGeometry = function addSubGeometry(start, count, topology) {
    if (topology === void 0) {
      topology = exports.PrimitiveTopology.Triangles;
    }

    var subGeometry = new SubPrimitive(start, count, topology);

    this._subGeometries.push(subGeometry);

    return subGeometry;
  }
  /**
   * Remove sub geometry.
   * @param subGeometry - SubGeometry needs to be removed
   */
  ;

  _proto.removeSubGeometry = function removeSubGeometry(subGeometry) {
    var subGeometries = this._subGeometries;
    var index = subGeometries.indexOf(subGeometry);

    if (index !== -1) {
      subGeometries.splice(index, 1);
    }
  }
  /**
   * Clear all sub geometries
   */
  ;

  _proto.clearSubGeometry = function clearSubGeometry() {
    this._subGeometries.length = 0;
  }
  /**
   * Destroy.
   */
  ;

  _proto.destroy = function destroy() {
    if (this._primitive) {
      this._primitive.destroy();

      this._primitive = null;
    }
  };

  _createClass(BufferGeometry, [{
    key: "vertexBufferBindings",
    get:
    /** Geometry name */

    /** @internal */

    /**
     * Vertex buffer binding collection.
     */
    function get() {
      return this._primitive.vertexBufferBindings;
    }
    /**
     * Index buffer binding.
     */

  }, {
    key: "indexBufferBinding",
    get: function get() {
      return this._primitive.indexBufferBinding;
    }
    /**
     * Vertex element collection.
     */

  }, {
    key: "vertexElements",
    get: function get() {
      return this._primitive.vertexElements;
    }
    /**
     * First sub-geometry. Rendered using the first material. For more details, please refer to the subGeometrys property.
     */

  }, {
    key: "subGeometry",
    get: function get() {
      return this._subGeometries[0] || null;
    }
    /**
     * A collection of sub-geometry, each sub-geometry can be rendered with an independent material.
     */

  }, {
    key: "subGeometries",
    get: function get() {
      return this._subGeometries;
    }
    /**
     * Instanced count, 0 means disable.
     */

  }, {
    key: "instanceCount",
    get: function get() {
      return this._primitive.instanceCount;
    },
    set: function set(count) {
      this._primitive.instanceCount = count;
    }
  }]);

  return BufferGeometry;
}(EngineObject);

/**
 * Geometry renderer
 */
var GeometryRenderer = /*#__PURE__*/function (_Renderer) {
  _inheritsLoose(GeometryRenderer, _Renderer);

  function GeometryRenderer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Renderer.call.apply(_Renderer, [this].concat(args)) || this;
    _this._material = void 0;
    _this._geometry = void 0;
    return _this;
  }

  var _proto = GeometryRenderer.prototype;

  _proto.render = function render(camera) {
    var geometry = this.geometry;

    if (geometry) {
      var subGeometries = geometry.subGeometries;
      var renderPipeline = camera._renderPipeline;
      var material = this._material;

      for (var i = 0, n = subGeometries.length; i < n; i++) {
        if (material) {
          var element = RenderElement.getFromPool();
          element.setValue(this, geometry._primitive, subGeometries[i], material); // CM: need to support multi material

          renderPipeline.pushPrimitive(element);
        }
      }
    } else {
      Logger.error("geometry is null.");
    }
  }
  /**
   * @override
   */
  ;

  _proto._updateBounds = function _updateBounds(worldBounds) {
    var geometry = this._geometry;

    if (geometry) {
      var localBounds = geometry.bounds;
      var worldMatrix = this._entity.transform.worldMatrix;
      math.BoundingBox.transform(localBounds, worldMatrix, worldBounds);
    } else {
      worldBounds.min.setValue(0, 0, 0);
      worldBounds.max.setValue(0, 0, 0);
    }
  };

  _createClass(GeometryRenderer, [{
    key: "geometry",
    get: function get() {
      return this._geometry;
    }
    /**
     * Material.
     */
    ,
    set:
    /**
     * Set buffer geometry
     */
    function set(value) {
      if (this._geometry) {
        this._geometry._primitive._addRefCount(-1);
      }

      value._primitive._addRefCount(1);

      this._geometry = value;
    }
  }, {
    key: "material",
    get: function get() {
      return this._material;
    },
    set: function set(value) {
      if (this._material) {
        this._material._addRefCount(-1);
      }

      value._addRefCount(1);

      this._material = value;
    }
  }]);

  return GeometryRenderer;
}(Renderer);

/**
 * Basic shape geometry.
 */

var ShapeGeometry = /*#__PURE__*/function (_BufferGeometry) {
  _inheritsLoose(ShapeGeometry, _BufferGeometry);

  function ShapeGeometry() {
    return _BufferGeometry.apply(this, arguments) || this;
  }

  var _proto = ShapeGeometry.prototype;

  /**
   * @internal
   */
  _proto._initialize = function _initialize(engine, vertices, indices) {
    var vertexStride = 32;
    var vertexElements = [new VertexElement("POSITION", 0, exports.VertexElementFormat.Vector3, 0), new VertexElement("NORMAL", 12, exports.VertexElementFormat.Vector3, 0), new VertexElement("TEXCOORD_0", 24, exports.VertexElementFormat.Vector2, 0)];

    this._initBuffer(engine, vertices, indices, vertexStride, vertexElements);
  };

  _proto._initBuffer = function _initBuffer(engine, vertices, indices, vertexStride, vertexElements) {
    var positionElement = vertexElements[0];
    var vertexBuffer = new Buffer(engine, exports.BufferBindFlag.VertexBuffer, vertices, exports.BufferUsage.Static);
    var indexBuffer = new Buffer(engine, exports.BufferBindFlag.IndexBuffer, indices, exports.BufferUsage.Static);
    this.setVertexBufferBinding(vertexBuffer, vertexStride);
    this.setIndexBufferBinding(indexBuffer, exports.IndexFormat.UInt16);
    this.setVertexElements(vertexElements);
    this.addSubGeometry(0, indices.length);

    this._computeBounds(positionElement, vertices);
  };

  _proto._computeBounds = function _computeBounds(positionElement, vertices) {
    var vertexElement = positionElement;
    var bufferIndex = vertexElement.bindingIndex;
    var vertexBufferBinding = this._primitive.vertexBufferBindings[bufferIndex];
    var stride = vertexBufferBinding.stride;
    var offset = vertexElement.offset;
    var vertexCount = vertexBufferBinding.buffer.byteLength / stride;
    var arrayBuffer = vertices;

    if (!(arrayBuffer instanceof ArrayBuffer)) {
      arrayBuffer = arrayBuffer.buffer;
    }

    var dataView = new DataView(arrayBuffer, offset);
    var min = new math.Vector3(Infinity, Infinity, Infinity);
    var max = new math.Vector3(-Infinity, -Infinity, -Infinity);

    for (var i = 0; i < vertexCount; i++) {
      var base = offset + stride * i;
      var position = new math.Vector3(dataView.getFloat32(base, true), dataView.getFloat32(base + 4, true), dataView.getFloat32(base + 8, true));
      math.Vector3.min(min, position, min);
      math.Vector3.max(max, position, max);
    }

    var bounds = this.bounds;
    min.cloneTo(bounds.min);
    max.cloneTo(bounds.max);
  };

  return ShapeGeometry;
}(BufferGeometry);

/**
 * CuboidGeometry.
 */

var CuboidGeometry = /*#__PURE__*/function (_ShapeGeometry) {
  _inheritsLoose(CuboidGeometry, _ShapeGeometry);

  /**
   * Create a cuboid geometry.
   * @param engine - Engine
   * @param width - Cuboid width
   * @param height - Cuboid height
   * @param depth - Cuboid depth
   */
  function CuboidGeometry(engine, width, height, depth) {
    var _this;

    if (width === void 0) {
      width = 1;
    }

    if (height === void 0) {
      height = 1;
    }

    if (depth === void 0) {
      depth = 1;
    }

    _this = _ShapeGeometry.call(this, engine) || this;
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    var halfDepth = depth / 2; // prettier-ignore

    var vertices = new Float32Array([// up
    -halfWidth, halfHeight, -halfDepth, 0, 1, 0, 0, 0, halfWidth, halfHeight, -halfDepth, 0, 1, 0, 1, 0, halfWidth, halfHeight, halfDepth, 0, 1, 0, 1, 1, -halfWidth, halfHeight, halfDepth, 0, 1, 0, 0, 1, // down
    -halfWidth, -halfHeight, -halfDepth, 0, -1, 0, 0, 1, halfWidth, -halfHeight, -halfDepth, 0, -1, 0, 1, 1, halfWidth, -halfHeight, halfDepth, 0, -1, 0, 1, 0, -halfWidth, -halfHeight, halfDepth, 0, -1, 0, 0, 0, // left
    -halfWidth, halfHeight, -halfDepth, -1, 0, 0, 0, 0, -halfWidth, halfHeight, halfDepth, -1, 0, 0, 1, 0, -halfWidth, -halfHeight, halfDepth, -1, 0, 0, 1, 1, -halfWidth, -halfHeight, -halfDepth, -1, 0, 0, 0, 1, // right
    halfWidth, halfHeight, -halfDepth, 1, 0, 0, 1, 0, halfWidth, halfHeight, halfDepth, 1, 0, 0, 0, 0, halfWidth, -halfHeight, halfDepth, 1, 0, 0, 0, 1, halfWidth, -halfHeight, -halfDepth, 1, 0, 0, 1, 1, // fornt
    -halfWidth, halfHeight, halfDepth, 0, 0, 1, 0, 0, halfWidth, halfHeight, halfDepth, 0, 0, 1, 1, 0, halfWidth, -halfHeight, halfDepth, 0, 0, 1, 1, 1, -halfWidth, -halfHeight, halfDepth, 0, 0, 1, 0, 1, // back
    -halfWidth, halfHeight, -halfDepth, 0, 0, -1, 1, 0, halfWidth, halfHeight, -halfDepth, 0, 0, -1, 0, 0, halfWidth, -halfHeight, -halfDepth, 0, 0, -1, 0, 1, -halfWidth, -halfHeight, -halfDepth, 0, 0, -1, 1, 1]); // prettier-ignore

    var indices = new Uint16Array([// up
    0, 2, 1, 2, 0, 3, // donw
    4, 6, 7, 6, 4, 5, // left
    8, 10, 9, 10, 8, 11, // right
    12, 14, 15, 14, 12, 13, // fornt
    16, 18, 17, 18, 16, 19, // back
    20, 22, 23, 22, 20, 21]);

    _this._initialize(engine, vertices, indices);

    return _this;
  }

  return CuboidGeometry;
}(ShapeGeometry);

/**
 * SphereGeometry.
 */

var SphereGeometry = /*#__PURE__*/function (_ShapeGeometry) {
  _inheritsLoose(SphereGeometry, _ShapeGeometry);

  /**
   * @param  radius - Sphere radius.
   * @param  horizontalSegments - Number of horizontal segments
   * @param  verticalSegments - Number of vertical segments
   * @param  alphaStart - Specify horizontal starting angle
   * @param  alphaRange - Specify horizontal sweep angle size
   * @param  thetaStart - Specify vertical starting angle
   * @param  thetaRange - Specify vertical sweep angle size
   */
  function SphereGeometry(engine, radius, horizontalSegments, verticalSegments, alphaStart, alphaRange, thetaStart, thetaRange) {
    var _this;

    if (radius === void 0) {
      radius = 1;
    }

    if (horizontalSegments === void 0) {
      horizontalSegments = 8;
    }

    if (verticalSegments === void 0) {
      verticalSegments = 6;
    }

    if (alphaStart === void 0) {
      alphaStart = 0;
    }

    if (alphaRange === void 0) {
      alphaRange = Math.PI * 2;
    }

    if (thetaStart === void 0) {
      thetaStart = 0;
    }

    if (thetaRange === void 0) {
      thetaRange = Math.PI;
    }

    _this = _ShapeGeometry.call(this, engine) || this;
    _this._parameters = void 0;
    _this._thetaEnd = void 0;
    _this._parameters = {
      radius: radius || 1,
      horizontalSegments: Math.max(3, Math.floor(horizontalSegments)),
      verticalSegments: Math.max(2, Math.floor(verticalSegments)),
      alphaStart: alphaStart,
      alphaRange: alphaRange,
      thetaStart: thetaStart,
      thetaRange: thetaRange
    };
    _this._thetaEnd = _this._parameters.thetaStart + _this._parameters.thetaRange;

    _this.initialize(engine);

    return _this;
  }
  /**
   * Generate sphere vertices data.
   * @private
   */


  var _proto = SphereGeometry.prototype;

  _proto.initialize = function initialize(engine) {
    var _this$_parameters = this._parameters,
        verticalSegments = _this$_parameters.verticalSegments,
        horizontalSegments = _this$_parameters.horizontalSegments; // Generate data of geometric vertices on the latitude and longitude lines

    var index = 0;
    var grid = [];
    var vertices = new Float32Array((verticalSegments + 1) * (horizontalSegments + 1) * 8);
    var indices = []; // const positions = [];

    for (var iy = 0; iy <= verticalSegments; iy++) {
      var verticesRow = [];
      var v = iy / verticalSegments;

      for (var ix = 0; ix <= horizontalSegments; ix++) {
        var u = ix / horizontalSegments;
        var posX = -this._parameters.radius * Math.cos(this._parameters.alphaStart + u * this._parameters.alphaRange) * Math.sin(this._parameters.thetaStart + v * this._parameters.thetaRange);
        var posY = this._parameters.radius * Math.cos(this._parameters.thetaStart + v * this._parameters.thetaRange);
        var posZ = this._parameters.radius * Math.sin(this._parameters.alphaStart + u * this._parameters.alphaRange) * Math.sin(this._parameters.thetaStart + v * this._parameters.thetaRange);
        posX = Math.abs(posX) < 1e-6 ? 0 : posX;
        posY = Math.abs(posY) < 1e-6 ? 0 : posY;
        posZ = Math.abs(posZ) < 1e-6 ? 0 : posZ;
        var offset = index * 8; // POSITION

        vertices[offset] = posX;
        vertices[offset + 1] = posY;
        vertices[offset + 2] = posZ; // NORMAL

        vertices[offset + 3] = posX;
        vertices[offset + 4] = posY;
        vertices[offset + 5] = posZ; // TEXCOORD_0

        vertices[offset + 6] = u;
        vertices[offset + 7] = 1 - v;
        verticesRow.push(index++);
      }

      grid.push(verticesRow);
    } // Generate indices


    for (var _iy = 0; _iy < verticalSegments; _iy++) {
      for (var _ix = 0; _ix < horizontalSegments; _ix++) {
        var a = grid[_iy][_ix + 1];
        var b = grid[_iy][_ix];
        var c = grid[_iy + 1][_ix];
        var d = grid[_iy + 1][_ix + 1];
        if (_iy !== 0 || this._parameters.thetaStart > 0) indices.push(a, b, d);
        if (_iy !== verticalSegments - 1 || this._thetaEnd < Math.PI) indices.push(b, c, d);
      }
    }

    this._initialize(engine, vertices, Uint16Array.from(indices));
  };

  return SphereGeometry;
}(ShapeGeometry);

/**
 * PlaneGeometry.
 */

var PlaneGeometry = /*#__PURE__*/function (_ShapeGeometry) {
  _inheritsLoose(PlaneGeometry, _ShapeGeometry);

  /**
   * @param engine - Engine
   * @param width - Plane width
   * @param height - Plane height
   * @param horizontalSegments - Plane horizontal segments
   * @param verticalSegments - Plane verticle segments
   */
  function PlaneGeometry(engine, width, height, horizontalSegments, verticalSegments) {
    var _this;

    if (width === void 0) {
      width = 1;
    }

    if (height === void 0) {
      height = 1;
    }

    if (horizontalSegments === void 0) {
      horizontalSegments = 1;
    }

    if (verticalSegments === void 0) {
      verticalSegments = 1;
    }

    _this = _ShapeGeometry.call(this, engine) || this;
    _this._parameters = void 0;
    _this.halfWidth = void 0;
    _this.halfHeight = void 0;
    _this._parameters = {
      width: width,
      height: height,
      horizontalSegments: Math.floor(horizontalSegments),
      verticalSegments: Math.floor(verticalSegments)
    };
    _this.halfWidth = _this._parameters.width / 2;
    _this.halfHeight = _this._parameters.height / 2;

    _this.initialize(engine);

    return _this;
  }

  var _proto = PlaneGeometry.prototype;

  _proto.initialize = function initialize(engine) {
    var _this$_parameters = this._parameters,
        verticalSegments = _this$_parameters.verticalSegments,
        horizontalSegments = _this$_parameters.horizontalSegments; // Generate data of geometric vertices on the latitude and longitude lines

    var index = 0;
    var offset = 0;
    var grid = [];
    var vertices = new Float32Array((verticalSegments + 1) * (horizontalSegments + 1) * 8);
    var indices = new Uint16Array(verticalSegments * horizontalSegments * 6);

    for (var iy = 0; iy <= verticalSegments; iy++) {
      var verticesRow = [];
      var v = iy / verticalSegments;

      for (var ix = 0; ix <= horizontalSegments; ix++) {
        var u = ix / horizontalSegments;
        var posX = u * this._parameters.width - this.halfWidth;
        var posY = v * this._parameters.height - this.halfHeight; // POSITION

        vertices[offset++] = posX;
        vertices[offset++] = posY;
        vertices[offset++] = 0; // NORMAL

        vertices[offset++] = 0;
        vertices[offset++] = 0;
        vertices[offset++] = 1; // TEXCOORD_0

        vertices[offset++] = u;
        vertices[offset++] = 1 - v;
        verticesRow.push(index++);
      }

      grid.push(verticesRow);
    } // Generate indices


    index = 0;

    for (var _iy = 0; _iy < verticalSegments; _iy++) {
      for (var _ix = 0; _ix < horizontalSegments; _ix++) {
        var a = grid[_iy][_ix + 1];
        var b = grid[_iy][_ix];
        var c = grid[_iy + 1][_ix];
        var d = grid[_iy + 1][_ix + 1];
        indices[index++] = a;
        indices[index++] = c;
        indices[index++] = b;
        indices[index++] = a;
        indices[index++] = d;
        indices[index++] = c;
      }
    }

    this._initialize(engine, vertices, indices);
  };

  return PlaneGeometry;
}(ShapeGeometry);

/**
 * CylinderGeometry.
 */

var CylinderGeometry = /*#__PURE__*/function (_ShapeGeometry) {
  _inheritsLoose(CylinderGeometry, _ShapeGeometry);

  /**
   * @param  engine - Engine
   * @param  radiusTop - Cylinder top radius, default is 1.
   * @param  radiusBottom - Cylinder bottom radius, default is 1.
   * @param  height - Cylinder height, default is 1.
   * @param  radialSegments - Number of segmented faces around the circumference of the cylinder. Default is 8
   * @param  heightSegments - Number of rows of faces along the height of the cylinder. Default is 1.
   * @param  openEnded - A boolean indicating whether the ends of the cylinder are open or capped. Default is false, meaning capped.
   * @param  thetaStart - Start angle for first segment, default = 0 (three o'clock position).
   * @param  thetaLength - The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cylinder.
   */
  function CylinderGeometry(engine, radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength, frontFace) {
    var _this;

    if (radiusTop === void 0) {
      radiusTop = 1;
    }

    if (radiusBottom === void 0) {
      radiusBottom = 1;
    }

    if (height === void 0) {
      height = 1;
    }

    if (radialSegments === void 0) {
      radialSegments = 8;
    }

    if (heightSegments === void 0) {
      heightSegments = 1;
    }

    if (openEnded === void 0) {
      openEnded = false;
    }

    if (thetaStart === void 0) {
      thetaStart = 0;
    }

    if (thetaLength === void 0) {
      thetaLength = 2 * Math.PI;
    }

    if (frontFace === void 0) {
      frontFace = exports.FrontFace.CCW;
    }

    _this = _ShapeGeometry.call(this, engine) || this;
    _this.FrontFace = void 0;
    _this.index = void 0;
    _this.indexArray = void 0;
    _this.halfHeight = void 0;
    _this._parameters = void 0;
    _this._vertices = void 0;
    _this._indices = void 0;
    _this.FrontFace = frontFace;
    _this._parameters = {
      radiusTop: radiusTop,
      radiusBottom: radiusBottom,
      height: height,
      radialSegments: radialSegments,
      heightSegments: heightSegments,
      openEnded: openEnded,
      thetaStart: thetaStart,
      thetaLength: thetaLength
    };
    _this._vertices = [];
    _this._indices = [];
    _this.index = 0;
    _this.indexArray = [];
    _this.halfHeight = _this._parameters.height / 2;

    _this.generateTorso();

    if (_this._parameters.openEnded === false) {
      if (_this._parameters.radiusTop > 0) _this.generateCap(true);
      if (_this._parameters.radiusBottom > 0) _this.generateCap(false);
    }

    _this._initialize(engine, Float32Array.from(_this._vertices), Uint16Array.from(_this._indices));

    return _this;
  }

  var _proto = CylinderGeometry.prototype;

  _proto.generateTorso = function generateTorso() {
    var _this$_parameters = this._parameters,
        radialSegments = _this$_parameters.radialSegments,
        heightSegments = _this$_parameters.heightSegments,
        radiusBottom = _this$_parameters.radiusBottom,
        radiusTop = _this$_parameters.radiusTop,
        height = _this$_parameters.height;
    var x, y;
    var normal = new math.Vector3();
    var slope = (radiusBottom - radiusTop) / height;

    for (y = 0; y <= heightSegments; y++) {
      var indexRow = [];
      var v = y / heightSegments;
      var radius = v * (radiusBottom - radiusTop) + radiusTop;

      for (x = 0; x <= radialSegments; x++) {
        var u = x / radialSegments;
        var theta = u * this._parameters.thetaLength + this._parameters.thetaStart;
        var sinTheta = Math.sin(theta);
        var cosTheta = Math.cos(theta); // vertex

        var vertX = radius * sinTheta;
        var vertY = -v * height + this.halfHeight;
        var vertZ = radius * cosTheta;

        this._vertices.push(vertX, vertY, vertZ); // normal


        normal.setValue(sinTheta, slope, cosTheta);
        normal.normalize();

        this._vertices.push(normal.x, normal.y, normal.z); // uv


        if (this.FrontFace === exports.FrontFace.CCW) {
          this._vertices.push(u, v);
        } else {
          this._vertices.push(1 - u, v);
        }

        indexRow.push(this.index++);
      }

      this.indexArray.push(indexRow);
    }

    for (x = 0; x < radialSegments; x++) {
      for (y = 0; y < heightSegments; y++) {
        var a = this.indexArray[y][x];
        var b = this.indexArray[y + 1][x];
        var c = this.indexArray[y + 1][x + 1];
        var d = this.indexArray[y][x + 1]; // faces

        this._indices.push(a, b, d);

        this._indices.push(b, c, d);
      }
    }
  };

  _proto.generateCap = function generateCap(isTop) {
    var radialSegments = this._parameters.radialSegments;
    var x;
    var radius = isTop === true ? this._parameters.radiusTop : this._parameters.radiusBottom;
    var sign = isTop === true ? 1 : -1;
    var centerIndexStart = this.index;

    for (x = 1; x <= radialSegments; x++) {
      // vertex
      this._vertices.push(0, this.halfHeight * sign, 0); // normal


      this._vertices.push(0, sign, 0); // uv


      this._vertices.push(0.5, 0.5); // increase index


      this.index++;
    }

    var centerIndexEnd = this.index;

    for (x = 0; x <= radialSegments; x++) {
      var u = x / radialSegments;
      var theta = u * this._parameters.thetaLength + this._parameters.thetaStart;
      var cosTheta = Math.cos(theta);
      var sinTheta = Math.sin(theta); // vertex

      var vertexX = radius * sinTheta;
      var vertexY = this.halfHeight * sign;
      var vertexZ = radius * cosTheta;

      this._vertices.push(vertexX, vertexY, vertexZ); // normal


      this._vertices.push(0, sign, 0); // uv


      var uvX = cosTheta * 0.5 + 0.5;
      var uvY = sinTheta * 0.5 * sign + 0.5;

      this._vertices.push(uvX, uvY); // increase index


      this.index++;
    }

    for (x = 0; x < radialSegments; x++) {
      var c = centerIndexStart + x;
      var i = centerIndexEnd + x;

      if (isTop === true) {
        // face top
        this._indices.push(i, i + 1, c);
      } else {
        // face bottom
        this._indices.push(i + 1, i, c);
      }
    }
  };

  return CylinderGeometry;
}(ShapeGeometry);

/**
 * CircleGeometry.
 */
var CircleGeometry = /*#__PURE__*/function (_ShapeGeometry) {
  _inheritsLoose(CircleGeometry, _ShapeGeometry);

  /**
   * @param engine - Engine
   * @param radius - Circle radius
   */
  function CircleGeometry(engine, options) {
    var _this;

    if (options === void 0) {
      options = {};
    }

    _this = _ShapeGeometry.call(this, engine) || this;
    _this.radius = 1;
    _this.segments = 16;
    _this.thetaStart = 0;
    _this.thetaLength = Math.PI * 2;
    _this.radius = options.radius || _this.radius;
    _this.segments = options.segments || _this.segments;
    _this.thetaStart = options.thetaStart || _this.thetaStart;
    _this.thetaLength = options.thetaLength || _this.thetaLength;

    var _assertThisInitialize = _assertThisInitialized(_this),
        segments = _assertThisInitialize.segments,
        radius = _assertThisInitialize.radius; // init with center point


    var vertices = new Float32Array((segments + 2) * 8); // POSITION NORMAL TEXCOORD_0

    vertices.set([0, 0, 0, 0, 0, 1, 0.5, 0.5]);
    var index = 8;

    for (var s = 0; s <= segments; s++) {
      var segment = _this.thetaStart + s / segments * _this.thetaLength;
      var x = radius * Math.cos(segment);
      var y = radius * Math.sin(segment); // POSITION

      vertices[index++] = x;
      vertices[index++] = y;
      vertices[index++] = 0; // NORMAL

      vertices[index++] = 0;
      vertices[index++] = 0;
      vertices[index++] = 1; // TEXCOORD_0

      vertices[index++] = (x / radius + 1) * 0.5;
      vertices[index++] = (y / radius + 1) * 0.5;
    }

    var indices = new Uint16Array(segments * 3);
    index = 0;

    for (var i = 1; i <= segments; i++) {
      indices[index++] = i;
      indices[index++] = i + 1;
      indices[index++] = 0;
    }

    _this._initialize(engine, vertices, indices);

    return _this;
  }

  return CircleGeometry;
}(ShapeGeometry);

/**
 * A rectangle covering the entire screen.
 * @private
 */

var ScreenQuadGeometry = /*#__PURE__*/function (_ShapeGeometry) {
  _inheritsLoose(ScreenQuadGeometry, _ShapeGeometry);

  function ScreenQuadGeometry(engine) {
    var _this;

    _this = _ShapeGeometry.call(this, engine) || this;
    var vertices = new Float32Array([-1, -1, 0, 0, 0, 1, -1, 0, 1, 0, 1, 1, 0, 1, 1, -1, 1, 0, 0, 1]);
    var indices = new Uint16Array([0, 1, 2, 3]);

    _this._initialize(engine, vertices, indices);

    _this.subGeometry.topology = exports.PrimitiveTopology.TriangleFan;
    return _this;
  }

  var _proto = ScreenQuadGeometry.prototype;

  _proto._initialize = function _initialize(engine, vertices, indices) {
    var vertexStride = 20;
    var vertexElements = [new VertexElement("POSITION", 0, exports.VertexElementFormat.Vector3, 0), new VertexElement("TEXCOORD_0", 12, exports.VertexElementFormat.Vector2, 0)];

    this._initBuffer(engine, vertices, indices, vertexStride, vertexElements);
  };

  return ScreenQuadGeometry;
}(ShapeGeometry);

/**
 * TorusGeometry.
 */

var TorusGeometry = /*#__PURE__*/function (_ShapeGeometry) {
  _inheritsLoose(TorusGeometry, _ShapeGeometry);

  function TorusGeometry(parameters, engine) {
    var _this;

    if (parameters === void 0) {
      parameters = {};
    }

    _this = _ShapeGeometry.call(this, engine) || this;
    _this.parameters = parameters;
    var radius = _this.parameters.radius || 1;
    var tube = _this.parameters.tube || 0.4;
    var radialSegments = Math.floor(_this.parameters.radialSegments) || 8;
    var tubularSegments = Math.floor(_this.parameters.tubularSegments) || 6;
    var arc = _this.parameters.arc || Math.PI * 2; // buffers

    var vertices = new Float32Array((radialSegments + 1) * (tubularSegments + 1) * 3);
    var indices = new Uint16Array(radialSegments * tubularSegments * 6); // generate vertices, normals and uvs

    var index = 0;

    for (var j = 0; j <= radialSegments; j++) {
      for (var i = 0; i <= tubularSegments; i++) {
        var u = i / tubularSegments * arc;
        var v = j / radialSegments * Math.PI * 2; // POSITION

        vertices[index++] = (radius + tube * Math.cos(v)) * Math.cos(u);
        vertices[index++] = (radius + tube * Math.cos(v)) * Math.sin(u);
        vertices[index++] = tube * Math.sin(v);
      }
    } // generate indices


    index = 0;

    for (var _j = 1; _j <= radialSegments; _j++) {
      for (var _i = 1; _i <= tubularSegments; _i++) {
        // indices
        var a = (tubularSegments + 1) * _j + _i - 1;
        var b = (tubularSegments + 1) * (_j - 1) + _i - 1;
        var c = (tubularSegments + 1) * (_j - 1) + _i;
        var d = (tubularSegments + 1) * _j + _i; // faces

        indices[index++] = a;
        indices[index++] = b;
        indices[index++] = d;
        indices[index++] = b;
        indices[index++] = c;
        indices[index++] = d;
      }
    }

    _this._initialize(engine, vertices, indices);

    return _this;
  }

  var _proto = TorusGeometry.prototype;

  _proto._initialize = function _initialize(engine, vertices, indices) {
    var vertexStride = 12;
    var vertexElements = [new VertexElement("POSITION", 0, exports.VertexElementFormat.Vector3, 0)];

    this._initBuffer(engine, vertices, indices, vertexStride, vertexElements);
  };

  return TorusGeometry;
}(ShapeGeometry);

var Model = /*#__PURE__*/function (_GeometryRenderer) {
  _inheritsLoose(Model, _GeometryRenderer);

  function Model(entity) {
    var _this;

    _this = _GeometryRenderer.call(this, entity) || this;
    _this._props = void 0;
    _this._geometryType = void 0;
    return _this;
  }

  var _proto = Model.prototype;

  _proto.init = function init(props) {
    this._props = props;
    var _props$geometryType = props.geometryType,
        geometryType = _props$geometryType === void 0 ? GeometryType.Box : _props$geometryType;
    this.material = props.material;
    this.geometryType = geometryType;
  };

  _proto.setProp = function setProp(key, value) {
    this._props[key] = value;

    if (key === "material") {
      this.material = value;
    } else {
      this.geometryType = this._props.geometryType;
    }
  };

  _createClass(Model, [{
    key: "geometryType",
    get: function get() {
      return this._geometryType;
    },
    set: function set(value) {
      switch (value) {
        case "Sphere":
          var _ref = this._props,
              sphereRadius = _ref.sphereRadius,
              sphereHorizontalSegments = _ref.sphereHorizontalSegments,
              sphereVerticalSegments = _ref.sphereVerticalSegments,
              sphereAlphaStart = _ref.sphereAlphaStart,
              sphereAlphaRange = _ref.sphereAlphaRange,
              sphereThetaStart = _ref.sphereThetaStart,
              sphereThetaRange = _ref.sphereThetaRange;
          this.geometry = new SphereGeometry(this.engine, sphereRadius, sphereHorizontalSegments, sphereVerticalSegments, sphereAlphaStart, sphereAlphaRange, sphereThetaStart, sphereThetaRange);
          break;

        case "Cylinder":
          var _ref2 = this._props,
              cylinderRadiusTop = _ref2.cylinderRadiusTop,
              cylinderRadiusBottom = _ref2.cylinderRadiusBottom,
              cylinderHeight = _ref2.cylinderHeight,
              cylinderRadialSegments = _ref2.cylinderRadialSegments,
              cylinderHeightSegments = _ref2.cylinderHeightSegments,
              cylinderOpenEnded = _ref2.cylinderOpenEnded;
          this.geometry = new CylinderGeometry(this.engine, cylinderRadiusTop, cylinderRadiusBottom, cylinderHeight, cylinderRadialSegments, cylinderHeightSegments, cylinderOpenEnded, undefined, undefined, undefined);
          break;

        case "Plane":
          var _ref3 = this._props,
              planeWidth = _ref3.planeWidth,
              planeHeight = _ref3.planeHeight,
              planeHorizontalSegments = _ref3.planeHorizontalSegments,
              planeVerticalSegments = _ref3.planeVerticalSegments;
          this.geometry = new PlaneGeometry(this.engine, planeWidth, planeHeight, planeHorizontalSegments, planeVerticalSegments);
          break;

        case "Box":
          var _ref4 = this._props,
              boxWidth = _ref4.boxWidth,
              boxHeight = _ref4.boxHeight,
              boxDepth = _ref4.boxDepth;
          this.geometry = new CuboidGeometry(this.engine, boxWidth, boxHeight, boxDepth);
          break;
      }

      this._geometryType = value;
    }
  }, {
    key: "material",
    get: function get() {
      return this._material;
    },
    set: function set(mtl) {
      if (!mtl) {
        this._material = new BlinnPhongMaterial(this.engine);
      } else {
        this._material = mtl;
      }
    }
  }]);

  return Model;
}(GeometryRenderer);
var GeometryType;

(function (GeometryType) {
  GeometryType["Box"] = "Box";
  GeometryType["Cylinder"] = "Cylinder";
  GeometryType["Plane"] = "Plane";
  GeometryType["Sphere"] = "Sphere";
})(GeometryType || (GeometryType = {}));

/**
 * SkyboxMaterial
 */

var SkyBoxMaterial = /*#__PURE__*/function (_Material) {
  _inheritsLoose(SkyBoxMaterial, _Material);

  function SkyBoxMaterial(engine) {
    var _this;

    _this = _Material.call(this, engine, Shader.find("skybox")) || this;
    _this.renderState.rasterState.cullMode = exports.CullMode.Off;
    _this.renderState.depthState.compareFunction = exports.CompareFunction.LessEqual;
    return _this;
  }

  return SkyBoxMaterial;
}(Material);

/**
 * Skybox Component
 */

var SkyBox = /*#__PURE__*/function (_GeometryRenderer) {
  _inheritsLoose(SkyBox, _GeometryRenderer);

  /**
   * Contructor of skybox
   * @param - Entity
   */
  function SkyBox(entity) {
    var _this;

    _this = _GeometryRenderer.call(this, entity) || this;
    _this._skyBoxMap = void 0;
    _this._matrix = new math.Matrix();
    _this._initBounds = false;
    _this.geometry = new CuboidGeometry(_this.engine, 2, 2, 2);
    _this.material = new SkyBoxMaterial(_this.engine);
    return _this;
  }
  /**
   * @internal
   * @param camera
   */


  var _proto = SkyBox.prototype;

  _proto.render = function render(camera) {
    if (!this._skyBoxMap) return;
    var modelMatrix = this.entity.transform.worldMatrix;
    var view = camera.viewMatrix;
    var proj = camera.projectionMatrix;
    var matrix = this._matrix;
    math.Matrix.multiply(view, modelMatrix, matrix);
    var e = matrix.elements;
    e[12] = e[13] = e[14] = 0;
    math.Matrix.multiply(proj, matrix, matrix);
    this.shaderData.setMatrix("u_mvpNoscale", matrix);

    _GeometryRenderer.prototype.render.call(this, camera);
  }
  /**
   * CubeMap of current skybox.
   */
  ;

  /**
   * @override
   */
  _proto._updateBounds = function _updateBounds(worldBounds) {
    if (!this._initBounds) {
      worldBounds.min.setValue(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
      worldBounds.max.setValue(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
      this._initBounds = true;
    }
  };

  _createClass(SkyBox, [{
    key: "skyBoxMap",
    get: function get() {
      return this._skyBoxMap;
    },
    set: function set(v) {
      this._skyBoxMap = v;
      v && this.material.shaderData.setTexture("u_cube", v);
    }
  }]);

  return SkyBox;
}(GeometryRenderer);

var DirtyFlagType;
/**
 * Blend mode enums of the particle renderer's material.
 */

(function (DirtyFlagType) {
  DirtyFlagType[DirtyFlagType["Position"] = 1] = "Position";
  DirtyFlagType[DirtyFlagType["Velocity"] = 2] = "Velocity";
  DirtyFlagType[DirtyFlagType["Acceleration"] = 4] = "Acceleration";
  DirtyFlagType[DirtyFlagType["Color"] = 8] = "Color";
  DirtyFlagType[DirtyFlagType["Apha"] = 16] = "Apha";
  DirtyFlagType[DirtyFlagType["Size"] = 32] = "Size";
  DirtyFlagType[DirtyFlagType["StartAngle"] = 64] = "StartAngle";
  DirtyFlagType[DirtyFlagType["StartTime"] = 128] = "StartTime";
  DirtyFlagType[DirtyFlagType["LifeTime"] = 256] = "LifeTime";
  DirtyFlagType[DirtyFlagType["RotateVelocity"] = 512] = "RotateVelocity";
  DirtyFlagType[DirtyFlagType["Scale"] = 1024] = "Scale";
  DirtyFlagType[DirtyFlagType["Everything"] = 4294967295] = "Everything";
})(DirtyFlagType || (DirtyFlagType = {}));

exports.ParticleRendererBlendMode = void 0;
/**
 * Particle Renderer Component.
 */

(function (ParticleRendererBlendMode) {
  ParticleRendererBlendMode[ParticleRendererBlendMode["Transparent"] = 0] = "Transparent";
  ParticleRendererBlendMode[ParticleRendererBlendMode["Additive"] = 1] = "Additive";
})(exports.ParticleRendererBlendMode || (exports.ParticleRendererBlendMode = {}));

var ParticleRenderer = /*#__PURE__*/function (_GeometryRenderer) {
  _inheritsLoose(ParticleRenderer, _GeometryRenderer);

  ParticleRenderer._getRandom = function _getRandom() {
    return Math.random() - 0.5;
  };

  function ParticleRenderer(props) {
    var _this;

    _this = _GeometryRenderer.call(this, props) || this;
    _this._vertexStride = void 0;
    _this._vertices = void 0;
    _this._vertexBuffer = void 0;
    _this._maxCount = 1000;
    _this._position = new math.Vector3();
    _this._positionRandomness = new math.Vector3();
    _this._positionArray = void 0;
    _this._velocity = new math.Vector3();
    _this._velocityRandomness = new math.Vector3();
    _this._acceleration = new math.Vector3();
    _this._accelerationRandomness = new math.Vector3();
    _this._color = new math.Color(1, 1, 1, 1);
    _this._colorRandomness = 0;
    _this._size = 1;
    _this._sizeRandomness = 0;
    _this._alpha = 1;
    _this._alphaRandomness = 0;
    _this._startAngle = 0;
    _this._startAngleRandomness = 0;
    _this._rotateVelocity = 0;
    _this._rotateVelocityRandomness = 0;
    _this._lifetime = 5;
    _this._startTimeRandomness = 0;
    _this._scale = 1;
    _this._isOnce = false;
    _this._time = 0;
    _this._isInit = false;
    _this._isStart = false;
    _this._updateDirtyFlag = DirtyFlagType.Everything;
    _this._isRotateToVelocity = false;
    _this._isUseOriginColor = false;
    _this._isScaleByLifetime = false;
    _this._is2d = true;
    _this._isFadeIn = false;
    _this._isFadeOut = false;
    _this._playOnEnable = true;
    _this._blendMode = exports.ParticleRendererBlendMode.Transparent;
    _this.spriteSheet = void 0;
    _this._material = _this._createMaterial();
    return _this;
  }
  /**
   * @override
   * @internal
   */


  var _proto = ParticleRenderer.prototype;

  _proto.update = function update(deltaTime) {
    if (!this._isInit || !this._isStart) {
      return;
    }

    if (this._updateDirtyFlag) {
      this._updateBuffer();

      this._updateDirtyFlag = 0;
    }

    this._time += deltaTime / 1000;
    this.shaderData.setFloat("u_time", this._time);
  }
  /**
   * @override
   * @internal
   */
  ;

  _proto._onEnable = function _onEnable() {
    _GeometryRenderer.prototype._onEnable.call(this);

    if (this._playOnEnable) {
      this.start();
    }
  }
  /**
   * Start emitting.
   */
  ;

  _proto.start = function start() {
    this._isStart = true;
    this._time = 0;
    this.shaderData.setInt("u_active", 1);
  }
  /**
   * Stop emitting.
   */
  ;

  _proto.stop = function stop() {
    this.shaderData.setInt("u_active", 0);
  };

  _proto._createMaterial = function _createMaterial() {
    var material = new Material(this.engine, Shader.find("particle-shader"));
    var renderState = material.renderState;
    var target = renderState.blendState.targetBlendState;
    target.sourceColorBlendFactor = target.sourceAlphaBlendFactor = exports.BlendFactor.SourceAlpha;
    target.destinationColorBlendFactor = target.destinationAlphaBlendFactor = exports.BlendFactor.OneMinusSourceAlpha;
    renderState.depthState.writeEnabled = false;
    material.renderQueueType = exports.RenderQueueType.Transparent;
    this.isUseOriginColor = true;
    this.is2d = true;
    this.isFadeOut = true;
    return material;
  };

  _proto._createGeometry = function _createGeometry() {
    var geometry = new BufferGeometry(this._entity.engine, "particleGeometry");
    var vertexStride = 96;
    var vertexFloatCount = this._maxCount * 4 * vertexStride;
    var vertices = new Float32Array(vertexFloatCount);
    var indices = new Uint16Array(6 * this._maxCount);

    for (var i = 0, idx = 0; i < this._maxCount; ++i) {
      var startIndex = i * 4;
      indices[idx++] = startIndex + 0;
      indices[idx++] = startIndex + 1;
      indices[idx++] = startIndex + 2;
      indices[idx++] = startIndex + 0;
      indices[idx++] = startIndex + 2;
      indices[idx++] = startIndex + 3;
    }

    var vertexElements = [new VertexElement("a_position", 0, exports.VertexElementFormat.Vector3, 0), new VertexElement("a_velocity", 12, exports.VertexElementFormat.Vector3, 0), new VertexElement("a_acceleration", 24, exports.VertexElementFormat.Vector3, 0), new VertexElement("a_color", 36, exports.VertexElementFormat.Vector4, 0), new VertexElement("a_lifeAndSize", 52, exports.VertexElementFormat.Vector4, 0), new VertexElement("a_rotation", 68, exports.VertexElementFormat.Vector2, 0), new VertexElement("a_uv", 76, exports.VertexElementFormat.Vector3, 0), new VertexElement("a_normalizedUv", 88, exports.VertexElementFormat.Vector2, 0)];
    var vertexBuffer = new Buffer(this.engine, exports.BufferBindFlag.VertexBuffer, vertexFloatCount * 4, exports.BufferUsage.Dynamic);
    var indexBuffer = new Buffer(this.engine, exports.BufferBindFlag.IndexBuffer, indices, exports.BufferUsage.Dynamic);
    geometry.setVertexBufferBinding(vertexBuffer, vertexStride);
    geometry.setIndexBufferBinding(indexBuffer, exports.IndexFormat.UInt16);
    geometry.setVertexElements(vertexElements);
    geometry.addSubGeometry(0, indices.length);
    this._vertexBuffer = vertexBuffer;
    this._vertexStride = vertexStride / 4;
    this._vertices = vertices;
    return geometry;
  };

  _proto._updateBuffer = function _updateBuffer() {
    for (var x = 0; x < this._maxCount; x++) {
      this._updateSingleBuffer(x);
    }

    this._vertexBuffer.setData(this._vertices);
  };

  _proto._updateSingleBuffer = function _updateSingleBuffer(i) {
    var _updateDirtyFlag = this._updateDirtyFlag,
        vertices = this._vertices,
        vertexStride = this._vertexStride;
    var getRandom = ParticleRenderer._getRandom;
    var offset = i * 4;
    var k0 = offset * vertexStride;
    var k1 = (offset + 1) * vertexStride;
    var k2 = (offset + 2) * vertexStride;
    var k3 = (offset + 3) * vertexStride;

    if (_updateDirtyFlag & DirtyFlagType.Position) {
      var _this$_position = this._position,
          x = _this$_position.x,
          y = _this$_position.y,
          z = _this$_position.z;
      var _positionArray = this._positionArray,
          _positionRandomness = this._positionRandomness;

      if (_positionArray) {
        if (_positionArray.length !== this._maxCount) {
          throw Error("The length of positionArray must be equal to maxCount.");
        }

        var pos = _positionArray[i];
        x += pos.x;
        y += pos.y;
        z += pos.z;
      } else {
        x += getRandom() * _positionRandomness.x;
        y += getRandom() * _positionRandomness.y;
        z += getRandom() * _positionRandomness.z;
      }

      vertices[k0] = vertices[k1] = vertices[k2] = vertices[k3] = x;
      vertices[k0 + 1] = vertices[k1 + 1] = vertices[k2 + 1] = vertices[k3 + 1] = y;
      vertices[k0 + 2] = vertices[k1 + 2] = vertices[k2 + 2] = vertices[k3 + 2] = z;
    }

    if (_updateDirtyFlag & DirtyFlagType.Velocity) {
      var _velocity = this._velocity,
          _velocityRandomness = this._velocityRandomness;
      vertices[k0 + 3] = vertices[k1 + 3] = vertices[k2 + 3] = vertices[k3 + 3] = _velocity.x + getRandom() * _velocityRandomness.x;
      vertices[k0 + 4] = vertices[k1 + 4] = vertices[k2 + 4] = vertices[k3 + 4] = _velocity.y + getRandom() * _velocityRandomness.y;
      vertices[k0 + 5] = vertices[k1 + 5] = vertices[k2 + 5] = vertices[k3 + 5] = _velocity.z + getRandom() * _velocityRandomness.z;
    }

    if (_updateDirtyFlag & DirtyFlagType.Acceleration) {
      var _acceleration = this._acceleration,
          _accelerationRandomness = this._accelerationRandomness;
      vertices[k0 + 6] = vertices[k1 + 6] = vertices[k2 + 6] = vertices[k3 + 6] = _acceleration.x + getRandom() * _accelerationRandomness.x;
      vertices[k0 + 7] = vertices[k1 + 7] = vertices[k2 + 7] = vertices[k3 + 7] = _acceleration.y + getRandom() * _accelerationRandomness.y;
      vertices[k0 + 8] = vertices[k1 + 8] = vertices[k2 + 8] = vertices[k3 + 8] = _acceleration.z + getRandom() * _accelerationRandomness.z;
    }

    if (_updateDirtyFlag & DirtyFlagType.Color) {
      var _color = this._color,
          _colorRandomness = this._colorRandomness;
      vertices[k0 + 9] = vertices[k1 + 9] = vertices[k2 + 9] = vertices[k3 + 9] = math.MathUtil.clamp(_color.r + getRandom() * _colorRandomness, 0, 1);
      vertices[k0 + 10] = vertices[k1 + 10] = vertices[k2 + 10] = vertices[k3 + 10] = math.MathUtil.clamp(_color.g + getRandom() * _colorRandomness, 0, 1);
      vertices[k0 + 11] = vertices[k1 + 11] = vertices[k2 + 11] = vertices[k3 + 11] = math.MathUtil.clamp(_color.b + getRandom() * _colorRandomness, 0, 1);
    }

    if (_updateDirtyFlag & DirtyFlagType.Apha) {
      vertices[k0 + 12] = vertices[k1 + 12] = vertices[k2 + 12] = vertices[k3 + 12] = math.MathUtil.clamp(this._alpha + getRandom() * this._alphaRandomness, 0, 1);
    }

    if (_updateDirtyFlag & DirtyFlagType.StartTime) {
      vertices[k0 + 13] = vertices[k1 + 13] = vertices[k2 + 13] = vertices[k3 + 13] = Math.random() * this._startTimeRandomness;
    }

    if (_updateDirtyFlag & DirtyFlagType.LifeTime) {
      var _lifetime = this._lifetime;
      vertices[k0 + 14] = vertices[k1 + 14] = vertices[k2 + 14] = vertices[k3 + 14] = _lifetime + getRandom() * _lifetime;
    }

    if (_updateDirtyFlag & DirtyFlagType.Size) {
      var _size = this._size;
      vertices[k0 + 15] = vertices[k1 + 15] = vertices[k2 + 15] = vertices[k3 + 15] = Math.max(_size + getRandom() * this._sizeRandomness * _size * 2, 0);
    }

    if (_updateDirtyFlag & DirtyFlagType.Scale) {
      vertices[k0 + 16] = vertices[k1 + 16] = vertices[k2 + 16] = vertices[k3 + 16] = this._scale;
    }

    if (_updateDirtyFlag & DirtyFlagType.StartAngle) {
      vertices[k0 + 17] = vertices[k1 + 17] = vertices[k2 + 17] = vertices[k3 + 17] = this._startAngle + getRandom() * Math.PI * this._startAngleRandomness * 2;
    }

    if (_updateDirtyFlag & DirtyFlagType.RotateVelocity) {
      vertices[k0 + 18] = vertices[k1 + 18] = vertices[k2 + 18] = vertices[k3 + 18] = this._rotateVelocity + getRandom() * this._rotateVelocityRandomness;
    }

    this._updateSingleUv(i, k0, k1, k2, k3);
  };

  _proto._updateSingleUv = function _updateSingleUv(i, k0, k1, k2, k3) {
    var spriteSheet = this.spriteSheet;

    var texture = this._material.shaderData.getTexture("u_texture");

    var vertices = this._vertices;

    if (texture) {
      var width = texture.width;
      var height = texture.height;

      if (spriteSheet) {
        var _spriteSheet = spriteSheet[i % spriteSheet.length],
            x = _spriteSheet.x,
            y = _spriteSheet.y,
            w = _spriteSheet.w,
            h = _spriteSheet.h;
        var u = x / width;
        var v = y / height;
        var p = u + w / width;
        var q = v + h / height;
        var ratio = h / w; // left bottom

        vertices[k0 + 19] = u;
        vertices[k0 + 20] = q;
        vertices[k0 + 21] = ratio; // right bottom

        vertices[k1 + 19] = p;
        vertices[k1 + 20] = q;
        vertices[k1 + 21] = ratio; // right top

        vertices[k2 + 19] = p;
        vertices[k2 + 20] = v;
        vertices[k2 + 21] = ratio; // left top

        vertices[k3 + 19] = u;
        vertices[k3 + 20] = v;
        vertices[k3 + 21] = ratio;
      } else {
        var _ratio = height / width; // left bottom


        vertices[k0 + 19] = 0;
        vertices[k0 + 20] = 1;
        vertices[k0 + 21] = _ratio; // right bottom

        vertices[k1 + 19] = 1;
        vertices[k1 + 20] = 1;
        vertices[k1 + 21] = _ratio; // right top

        vertices[k2 + 19] = 1;
        vertices[k2 + 20] = 0;
        vertices[k2 + 21] = _ratio; // left top

        vertices[k3 + 19] = 0;
        vertices[k3 + 20] = 0;
        vertices[k3 + 21] = _ratio;
      }
    } else {
      // left bottom
      vertices[k0 + 19] = 0;
      vertices[k0 + 20] = 0;
      vertices[k0 + 21] = 1; // right bottom

      vertices[k1 + 19] = 1;
      vertices[k1 + 20] = 0;
      vertices[k1 + 21] = 1; // right top

      vertices[k2 + 19] = 1;
      vertices[k2 + 20] = 1;
      vertices[k2 + 21] = 1; // left top

      vertices[k3 + 19] = 0;
      vertices[k3 + 20] = 1;
      vertices[k3 + 21] = 1;
    }

    vertices[k0 + 22] = -0.5;
    vertices[k0 + 23] = -0.5;
    vertices[k1 + 22] = 0.5;
    vertices[k1 + 23] = -0.5;
    vertices[k2 + 22] = 0.5;
    vertices[k2 + 23] = 0.5;
    vertices[k3 + 22] = -0.5;
    vertices[k3 + 23] = 0.5;
  };

  _createClass(ParticleRenderer, [{
    key: "texture",
    get:
    /**
     * Texture of particle.
     */
    function get() {
      return this.material.shaderData.getTexture('u_texture');
    },
    set: function set(texture) {
      if (texture) {
        this.shaderData.enableMacro('particleTexture');
        this.material.shaderData.setTexture('u_texture', texture);
      } else {
        this.shaderData.disableMacro('particleTexture');
      }
    }
    /**
     * Position of particles.
     */

  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Position;
      this._position = value;
    }
    /**
     * Random range of positions.
     */

  }, {
    key: "positionRandomness",
    get: function get() {
      return this._positionRandomness;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Position;
      this._positionRandomness = value;
    }
    /**
     * Array of fixed positions.
     */

  }, {
    key: "positionArray",
    get: function get() {
      return this._positionArray;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Position;
      this._positionArray = value;
    }
    /**
     * Velocity of particles.
     */

  }, {
    key: "velocity",
    get: function get() {
      return this._velocity;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Velocity;
      this._velocity = value;
    }
    /**
     * Random range of velocity.
     */

  }, {
    key: "velocityRandomness",
    get: function get() {
      return this._velocityRandomness;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Velocity;
      this._velocityRandomness = value;
    }
    /**
     * Acceleration of particles.
     */

  }, {
    key: "acceleration",
    get: function get() {
      return this._acceleration;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Acceleration;
      this._acceleration = value;
    }
    /**
     * Random range of acceleration.
     */

  }, {
    key: "accelerationRandomness",
    get: function get() {
      return this._accelerationRandomness;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Acceleration;
      this._accelerationRandomness = value;
    }
    /**
     * Color of particles.
     */

  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Color;
      this._color = value;
    }
    /**
     * Random range of color.
     */

  }, {
    key: "colorRandomness",
    get: function get() {
      return this._colorRandomness;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Color;
      this._colorRandomness = value;
    }
    /**
     * Size of particles.
     */

  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Size;
      this._size = value;
    }
    /**
     * Random range of size.
     */

  }, {
    key: "sizeRandomness",
    get: function get() {
      return this._sizeRandomness;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Size;
      this._sizeRandomness = value;
    }
    /**
     * Alpha of particles.
     */

  }, {
    key: "alpha",
    get: function get() {
      return this._alpha;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Apha;
      this._alpha = value;
    }
    /**
     * Random range of alpha.
     */

  }, {
    key: "alphaRandomness",
    get: function get() {
      return this._alphaRandomness;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Apha;
      this._alphaRandomness = value;
    }
    /**
     * Angle of particles.
     */

  }, {
    key: "angle",
    get: function get() {
      return this._startAngle;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.StartAngle;
      this._startAngle = value;
    }
    /**
     * Random range of angle.
     */

  }, {
    key: "angleRandomness",
    get: function get() {
      return this._startAngleRandomness;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.StartAngle;
      this._startAngleRandomness = value;
    }
    /**
     * Rotate velocity of particles.
     */

  }, {
    key: "rotateVelocity",
    get: function get() {
      return this._rotateVelocity;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.RotateVelocity;
      this._rotateVelocity = value;
    }
    /**
     * Random range of rotate velocity.
     */

  }, {
    key: "rotateVelocityRandomness",
    get: function get() {
      return this._rotateVelocityRandomness;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.RotateVelocity;
      this._rotateVelocityRandomness = value;
    }
    /**
     * Lifetime of particles.
     */

  }, {
    key: "lifetime",
    get: function get() {
      return this._lifetime;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.LifeTime;
      this._lifetime = value;
    }
    /**
     * Random range of start time.
     */

  }, {
    key: "startTimeRandomness",
    get: function get() {
      return this._startTimeRandomness;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.StartTime;
      this._startTimeRandomness = value;
    }
    /**
     * Scale factor of particles.
     */

  }, {
    key: "scale",
    get: function get() {
      return this._scale;
    },
    set: function set(value) {
      this._updateDirtyFlag |= DirtyFlagType.Scale;
      this._scale = value;
    }
    /**
     * Max count of particles.
     */

  }, {
    key: "maxCount",
    get: function get() {
      return this._maxCount;
    },
    set: function set(value) {
      this._isStart = false;
      this._isInit = false;
      this._maxCount = value;
      this._updateDirtyFlag = DirtyFlagType.Everything;
      this.geometry = this._createGeometry();

      this._updateBuffer();

      this._isInit = true;
    }
    /**
     * Whether play once.
     */

  }, {
    key: "isOnce",
    get: function get() {
      return this._isOnce;
    },
    set: function set(value) {
      this._time = 0;
      this.shaderData.setInt("u_once", value ? 1 : 0);
      this._isOnce = value;
    }
    /**
     * Whether follow the direction of velocity.
     */

  }, {
    key: "isRotateToVelocity",
    get: function get() {
      return this._isRotateToVelocity;
    },
    set: function set(value) {
      if (value) {
        this.shaderData.enableMacro("rotateToVelocity");
      } else {
        this.shaderData.disableMacro("rotateToVelocity");
      }

      this._isRotateToVelocity = value;
    }
    /**
     * Whether use origin color.
     */

  }, {
    key: "isUseOriginColor",
    get: function get() {
      return this._isUseOriginColor;
    },
    set: function set(value) {
      if (value) {
        this.shaderData.enableMacro("useOriginColor");
      } else {
        this.shaderData.disableMacro("useOriginColor");
      }

      this._isUseOriginColor = value;
    }
    /**
     * Whether scale by lifetime.
     */

  }, {
    key: "isScaleByLifetime",
    get: function get() {
      return this._isScaleByLifetime;
    },
    set: function set(value) {
      if (value) {
        this.shaderData.enableMacro("isScaleByLifetime");
      } else {
        this.shaderData.disableMacro("isScaleByLifetime");
      }

      this._isScaleByLifetime = value;
    }
    /**
     * Whether 2D rendering.
     */

  }, {
    key: "is2d",
    get: function get() {
      return this._is2d;
    },
    set: function set(value) {
      if (value) {
        this.shaderData.enableMacro("is2d");
      } else {
        this.shaderData.disableMacro("is2d");
        this.material.renderState.rasterState.cullMode = exports.CullMode.Off;
      }

      this._is2d = value;
    }
    /**
     * Whether fade in.
     */

  }, {
    key: "isFadeIn",
    get: function get() {
      return this._isFadeIn;
    },
    set: function set(value) {
      if (value) {
        this.shaderData.enableMacro("fadeIn");
      } else {
        this.shaderData.disableMacro("fadeIn");
      }

      this._isFadeIn = value;
    }
    /**
     * Whether fade out.
     */

  }, {
    key: "isFadeOut",
    get: function get() {
      return this._isFadeOut;
    },
    set: function set(value) {
      if (value) {
        this.shaderData.enableMacro("fadeOut");
      } else {
        this.shaderData.disableMacro("fadeOut");
      }

      this._isFadeOut = value;
    }
    /**
     * Whether play on enable.
     */

  }, {
    key: "playOnEnable",
    get: function get() {
      return this._playOnEnable;
    },
    set: function set(value) {
      this._playOnEnable = value;

      if (value) {
        this.start();
      } else {
        this.stop();
      }
    }
    /**
     * Blend mode of the particle renderer's material.
     */

  }, {
    key: "blendMode",
    get: function get() {
      return this._blendMode;
    },
    set: function set(value) {
      var blendState = this.material.renderState.blendState;
      var target = blendState.targetBlendState;

      if (value === exports.ParticleRendererBlendMode.Transparent) {
        target.sourceColorBlendFactor = target.sourceAlphaBlendFactor = exports.BlendFactor.SourceAlpha;
        target.destinationColorBlendFactor = target.destinationAlphaBlendFactor = exports.BlendFactor.OneMinusSourceAlpha;
      } else if (value === exports.ParticleRendererBlendMode.Additive) {
        target.sourceColorBlendFactor = target.sourceAlphaBlendFactor = exports.BlendFactor.SourceAlpha;
        target.destinationColorBlendFactor = target.destinationAlphaBlendFactor = exports.BlendFactor.One;
      }

      this._blendMode = value;
    }
  }]);

  return ParticleRenderer;
}(GeometryRenderer);

var FRAG_SHADER = "#define GLSLIFY 1\nvarying vec2 v_uv;uniform sampler2D u_texture;void main(void){gl_FragColor=texture2D(u_texture,v_uv);}"; // eslint-disable-line

var VERT_SHADER = "#define GLSLIFY 1\nattribute vec3 POSITION;attribute vec2 TEXCOORD_0;varying vec2 v_uv;uniform mat4 u_projMat;uniform mat4 u_viewMat;void main(){gl_Position=u_projMat*u_viewMat*vec4(POSITION,1.0);v_uv=TEXCOORD_0;}"; // eslint-disable-line

Shader.create("trail", VERT_SHADER, FRAG_SHADER);
var TrailMaterial = /*#__PURE__*/function (_Material) {
  _inheritsLoose(TrailMaterial, _Material);

  function TrailMaterial(engine) {
    var _this;

    _this = _Material.call(this, engine, Shader.find("trail")) || this;
    var target = _this.renderState.blendState.targetBlendState;
    target.sourceColorBlendFactor = target.sourceAlphaBlendFactor = exports.BlendFactor.SourceAlpha;
    target.destinationColorBlendFactor = target.destinationAlphaBlendFactor = exports.BlendFactor.One;
    _this.renderState.depthState.writeEnabled = false;
    return _this;
  }

  return TrailMaterial;
}(Material);

var _tempVector3 = new math.Vector3();
/**
 * @deprecated
 */


var TrailRenderer = /*#__PURE__*/function (_GeometryRenderer) {
  _inheritsLoose(TrailRenderer, _GeometryRenderer);

  /**
   * @deprecated
   */
  function TrailRenderer(entity, props) {
    var _this;

    _this = _GeometryRenderer.call(this, entity) || this;
    _this._vertexStride = void 0;
    _this._vertices = void 0;
    _this._vertexBuffer = void 0;
    _this._stroke = void 0;
    _this._minSeg = void 0;
    _this._lifetime = void 0;
    _this._maxPointNum = void 0;
    _this._points = void 0;
    _this._pointStates = void 0;
    _this._strapPoints = void 0;
    _this._curPointNum = void 0;
    _this._prePointsNum = void 0;
    _this._stroke = props.stroke || 0.2;
    _this._minSeg = props.minSeg || 0.02;
    _this._lifetime = props.lifetime || 1000;
    _this._maxPointNum = _this._lifetime / 1000.0 * entity.engine.targetFrameRate;
    _this._points = [];
    _this._pointStates = [];
    _this._strapPoints = [];

    for (var i = 0; i < _this._maxPointNum; i++) {
      _this._points.push(new math.Vector3());

      _this._pointStates.push(_this._lifetime);

      _this._strapPoints.push(new math.Vector3());

      _this._strapPoints.push(new math.Vector3());
    }

    _this._curPointNum = 0;
    var mtl = props.material || new TrailMaterial(_this.engine);
    _this.material = mtl;

    _this.setTexture(props.texture);

    _this._initGeometry();

    return _this;
  }
  /**
   * @internal
   */


  var _proto = TrailRenderer.prototype;

  _proto.update = function update(deltaTime) {
    var mov = 0,
        newIdx = 0;

    for (var i = 0; i < this._curPointNum; i++) {
      this._pointStates[i] -= deltaTime;

      if (this._pointStates[i] < 0) {
        mov++;
      } else if (mov > 0) {
        newIdx = i - mov; // Move data

        this._pointStates[newIdx] = this._pointStates[i]; // Move point

        this._points[i].cloneTo(this._points[newIdx]);
      }
    }

    this._curPointNum -= mov;
    var appendNewPoint = true;

    if (this._curPointNum === this._maxPointNum) {
      appendNewPoint = false;
    } else if (this._curPointNum > 0) {
      var lastPoint = this._points[this._points.length - 1];

      if (math.Vector3.distance(this.entity.worldPosition, lastPoint) < this._minSeg) {
        appendNewPoint = false;
      }
    }

    if (appendNewPoint) {
      this._pointStates[this._curPointNum] = this._lifetime;
      this.entity.worldPosition.cloneTo(this._points[this._curPointNum]);
      this._curPointNum++;
    }
  }
  /**
   * @internal
   */
  ;

  _proto.render = function render(camera) {
    this._updateStrapVertices(camera, this._points);

    this._updateStrapCoords();

    this._vertexBuffer.setData(this._vertices);

    _GeometryRenderer.prototype.render.call(this, camera);
  }
  /**
   * @deprecated
   * Set trail texture.
   * @param texture
   */
  ;

  _proto.setTexture = function setTexture(texture) {
    if (texture) {
      this.material.shaderData.setTexture("u_texture", texture);
    }
  };

  _proto._initGeometry = function _initGeometry() {
    var geometry = new BufferGeometry(this._entity.engine);
    var vertexStride = 20;
    var vertexCount = this._maxPointNum * 2;
    var vertexFloatCount = vertexCount * vertexStride;
    var vertices = new Float32Array(vertexFloatCount);
    var vertexElements = [new VertexElement("POSITION", 0, exports.VertexElementFormat.Vector3, 0), new VertexElement("TEXCOORD_0", 12, exports.VertexElementFormat.Vector2, 0)];
    var vertexBuffer = new Buffer(this.engine, vertexFloatCount * 4, exports.BufferUsage.Dynamic);
    geometry.setVertexBufferBinding(vertexBuffer, vertexStride);
    geometry.setVertexElements(vertexElements);
    geometry.addSubGeometry(0, vertexCount, exports.PrimitiveTopology.TriangleStrip);
    this._vertexBuffer = vertexBuffer;
    this._vertexStride = vertexStride;
    this._vertices = vertices;
    this.geometry = geometry;
  };

  _proto._updateStrapVertices = function _updateStrapVertices(camera, points) {
    var m = camera.viewMatrix;
    var e = m.elements;
    var vx = new math.Vector3(e[0], e[4], e[8]);
    var vy = new math.Vector3(e[1], e[5], e[9]);
    var vz = new math.Vector3(e[2], e[6], e[10]);
    var s = this._stroke;
    vy.scale(s);
    var up = new math.Vector3();
    var down = new math.Vector3();
    var rotation = new math.Quaternion();
    math.Vector3.transformByQuat(vx, rotation, vx);
    math.Vector3.transformByQuat(vy, rotation, vy);
    var dy = new math.Vector3();
    var cross = new math.Vector3();
    var perpVector = new math.Vector3();
    vx.normalize();
    var vertieces = this._vertices; //-- quad pos

    for (var i = 0; i < this._maxPointNum; i++) {
      //-- center pos
      if (i < this._curPointNum) {
        var p = points[i];

        if (i === this._curPointNum - 1 && i !== 0) {
          math.Vector3.subtract(p, points[i - 1], perpVector);
        } else {
          math.Vector3.subtract(points[i + 1], p, perpVector);
        }

        this._projectOnPlane(perpVector, vz, perpVector);

        perpVector.normalize(); // Calculate angle between vectors

        var angle = Math.acos(math.Vector3.dot(vx, perpVector));
        math.Vector3.cross(vx, perpVector, cross);

        if (math.Vector3.dot(cross, vz) <= 0) {
          angle = Math.PI * 2 - angle;
        }

        math.Quaternion.rotationAxisAngle(vz, angle, rotation);
        math.Vector3.transformByQuat(vy, rotation, dy);
        math.Vector3.add(p, dy, up);
        math.Vector3.subtract(p, dy, down);
      }

      var p0 = i * 2 * this._vertexStride / 4;
      var p1 = (i * 2 + 1) * this._vertexStride / 4;
      vertieces[p0] = up.x;
      vertieces[p0 + 1] = up.y;
      vertieces[p0 + 2] = up.z;
      vertieces[p1] = down.x;
      vertieces[p1 + 1] = down.y;
      vertieces[p1 + 2] = down.z;
    }
  };

  _proto._updateStrapCoords = function _updateStrapCoords() {
    if (this._prePointsNum === this._curPointNum) {
      return;
    }

    this._prePointsNum = this._curPointNum;
    var count = this._curPointNum;
    var texDelta = 1.0 / count;
    var vertieces = this._vertices;

    for (var i = 0; i < count; i++) {
      var d = 1.0 - i * texDelta;
      var p0 = i * 2 * this._vertexStride / 4;
      var p1 = (i * 2 + 1) * this._vertexStride / 4;
      vertieces[p0] = 0;
      vertieces[p0 + 1] = d;
      vertieces[p1] = 1.0;
      vertieces[p1 + 1] = d;
    }
  };

  _proto._projectOnVector = function _projectOnVector(a, p, out) {
    var n_p = p.clone();
    math.Vector3.normalize(n_p, n_p);
    var cosine = math.Vector3.dot(a, n_p);
    out.x = n_p.x * cosine;
    out.y = n_p.y * cosine;
    out.z = n_p.z * cosine;
  };

  _proto._projectOnPlane = function _projectOnPlane(a, n, out) {
    this._projectOnVector(a, n, _tempVector3);

    math.Vector3.subtract(a, _tempVector3, out);
  };

  return TrailRenderer;
}(GeometryRenderer);

var BoxCollider = /*#__PURE__*/function (_ABoxCollider) {
  _inheritsLoose(BoxCollider, _ABoxCollider);

  function BoxCollider(entity) {
    var _this;

    _this = _ABoxCollider.call(this, entity) || this;
    _this._center = new math.Vector3();
    _this._size = new math.Vector3();
    _this.isShowCollider = true;
    _this.center = _this.center;
    _this.size = _this.size;
    _this.isShowCollider = _this.isShowCollider;
    return _this;
  }

  _createClass(BoxCollider, [{
    key: "center",
    get: function get() {
      return this._center;
    },
    set: function set(value) {
      this._center = value;
      this.setBoxCenterSize(this._center, this._size);
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(value) {
      this._size = value;
      this.setBoxCenterSize(this._center, this._size);
    }
  }]);

  return BoxCollider;
}(ABoxCollider);

var SphereCollider = /*#__PURE__*/function (_ASphereCollider) {
  _inheritsLoose(SphereCollider, _ASphereCollider);

  function SphereCollider(entity) {
    var _this;

    _this = _ASphereCollider.call(this, entity) || this;
    _this.__center = new math.Vector3();
    _this.__radius = 1.0;
    _this.isShowCollider = true;
    _this._center = _this._center;
    _this._radius = _this._radius;
    _this.isShowCollider = _this.isShowCollider;
    return _this;
  }

  _createClass(SphereCollider, [{
    key: "_center",
    get: function get() {
      return this.__center;
    },
    set: function set(value) {
      this.__center = value;
      this.setSphere(this.__center, this.__radius);
    }
  }, {
    key: "_radius",
    get: function get() {
      return this.__radius;
    },
    set: function set(value) {
      this.__radius = value;
      this.setSphere(this.__center, this.__radius);
    }
  }]);

  return SphereCollider;
}(ASphereCollider);

Scene.registerFeature(ColliderFeature); //-- colliders

/**
 * AABBox = {
 *  min: [-1,-1,-1],
 *  max: [1,1,1]
 * };
 *
 * Sphere = {
 *  center: [0,0,0],
 *  radius: 1
 * };
 */

/**
 * Check whether the boxes intersect.
 * @param boxA - The first box to check
 * @param boxB - The second box to check
 * @returns True if the boxes intersect, false otherwise
 */

function intersectBox2Box(boxA, boxB) {
  return boxA.min.x <= boxB.max.x && boxA.max.x >= boxB.min.x && boxA.min.y <= boxB.max.y && boxA.max.y >= boxB.min.y && boxA.min.z <= boxB.max.z && boxA.max.z >= boxB.min.z;
}
/**
 * Check whether the spheres intersect.
 * @param sphereA - The first sphere to check
 * @param sphereB - The second sphere to check
 * @returns True if the spheres intersect, false otherwise
 */

function intersectSphere2Sphere(sphereA, sphereB) {
  var distance = math.Vector3.distance(sphereA.center, sphereB.center);
  return distance < sphereA.radius + sphereA.radius;
}
/**
 * Check whether the sphere and the box intersect.
 * @param sphere - The sphere to check
 * @param box - The box to check
 * @returns True if the sphere and the box intersect, false otherwise
 */

function intersectSphere2Box(sphere, box) {
  var center = sphere.center;
  var closestPoint = new math.Vector3(Math.max(box.min.x, Math.min(center.x, box.max.x)), Math.max(box.min.y, Math.min(center.y, box.max.y)), Math.max(box.min.z, Math.min(center.z, box.max.z)));
  var distance = math.Vector3.distance(center, closestPoint);
  return distance < sphere.radius;
}

/**
 * Detect collisions between the Collider on the current entity and other Colliders in the scene.
 */

var CollisionDetection = /*#__PURE__*/function (_Script) {
  _inheritsLoose(CollisionDetection, _Script);

  /**
   * Constructor of the colliseion detection.
   * @param entity - Entity to which the colliseion detection belong
   */
  function CollisionDetection(entity) {
    var _this;

    _this = _Script.call(this, entity) || this;
    _this._colliderManager = void 0;
    _this._myCollider = void 0;
    _this._overlopCollider = void 0;
    _this._sphere = void 0;
    _this._box = new math.BoundingBox();
    _this._evts = Object.create(null);
    _this._evtCount = 0;
    return _this;
  }
  /**
   * The collider that intersects with the collider on the current Entity.
   */


  var _proto = CollisionDetection.prototype;

  /**
   * When every frame is updated, calculate the collision with other collider.
   */
  _proto.onUpdate = function onUpdate(deltaTime) {
    _Script.prototype.onUpdate.call(this, deltaTime);

    var overlopCollider = null;

    if (this._colliderManager && this._myCollider) {
      var colliders = this._colliderManager.colliders;

      if (this._myCollider instanceof ABoxCollider) {
        this._updateWorldBox(this._myCollider, this._box);

        for (var i = 0, len = colliders.length; i < len; i++) {
          var collider = colliders[i];

          if (collider != this._myCollider && this._boxCollision(collider)) {
            overlopCollider = collider; // @ts-ignore

            this.dispatch("collision", {
              collider: collider
            });
          }
        } // end of for

      } else if (this._myCollider instanceof ASphereCollider) {
        this._sphere = this._getWorldSphere(this._myCollider);

        for (var _i = 0, _len = colliders.length; _i < _len; _i++) {
          var _collider = colliders[_i];

          if (_collider != this._myCollider && this._sphereCollision(_collider)) {
            overlopCollider = _collider; // @ts-ignore

            this.dispatch("collision", {
              collider: _collider
            });
          }
        } // end of for

      }
    } // end of if
    //-- overlop events


    if (overlopCollider != null && this._overlopCollider != overlopCollider) {
      // @ts-ignore
      this.dispatch("begin_overlop", {
        collider: overlopCollider
      });
    }

    if (this._overlopCollider != null && this._overlopCollider != overlopCollider) {
      var e = this._overlopCollider; // @ts-ignore

      this.dispatch("end_overlop", {
        collider: e
      });
    }

    this._overlopCollider = overlopCollider;
  }
  /**
   * Calculate the boundingbox in world space from boxCollider.
   * @param boxCollider - The boxCollider to calculate
   * @param out - The caclulated boundingBox
   */
  ;

  _proto._updateWorldBox = function _updateWorldBox(boxCollider, out) {
    var mat = boxCollider.entity.transform.worldMatrix;
    var source = CollisionDetection._tempBox1;
    boxCollider.boxMax.cloneTo(source.max);
    boxCollider.boxMin.cloneTo(source.min);
    math.BoundingBox.transform(source, mat, out);
  }
  /**
   * Get the sphere info of the given sphere collider in world space.
   * @param sphereCollider - The given sphere collider
   */
  ;

  _proto._getWorldSphere = function _getWorldSphere(sphereCollider) {
    var center = new math.Vector3();
    math.Vector3.transformCoordinate(sphereCollider.center, sphereCollider.entity.transform.worldMatrix, center);
    return {
      radius: sphereCollider.radius,
      center: center
    };
  }
  /**
   * Collider and another collider do collision detection.
   * @param other - The another collider to collision detection
   */
  ;

  _proto._boxCollision = function _boxCollision(other) {
    if (other instanceof ABoxCollider) {
      var box = CollisionDetection._tempBox2;

      this._updateWorldBox(other, box);

      return intersectBox2Box(box, this._box);
    } else if (other instanceof ASphereCollider) {
      var sphere = this._getWorldSphere(other);

      return intersectSphere2Box(sphere, this._box);
    }

    return false;
  }
  /**
   * Collider and another collider do collision detection.
   * @param other - The another collider to collision detection
   */
  ;

  _proto._sphereCollision = function _sphereCollision(other) {
    if (other instanceof ABoxCollider) {
      var box = CollisionDetection._tempBox2;

      this._updateWorldBox(other, box);

      return intersectSphere2Box(this._sphere, box);
    } else if (other instanceof ASphereCollider) {
      var sphere = this._getWorldSphere(other);

      return intersectSphere2Sphere(sphere, this._sphere);
    }

    return false;
  };

  _proto.onAwake = function onAwake() {
    this._colliderManager = this.scene.findFeature(ColliderFeature);
    this._myCollider = this.entity.getComponent(Collider);
  };

  _createClass(CollisionDetection, [{
    key: "overlopCollider",
    get: function get() {
      return this._overlopCollider;
    }
  }]);

  return CollisionDetection;
}(Script);
CollisionDetection._tempVec3 = new math.Vector3();
CollisionDetection._tempBox1 = new math.BoundingBox();
CollisionDetection._tempBox2 = new math.BoundingBox();
applyMixins(CollisionDetection, [EventDispatcher]);

function applyMixins(derivedCtor, baseCtors) {
  baseCtors.forEach(function (baseCtor) {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

/**
 * Fog.
 */

var Fog = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Fog, _Component);

  function Fog(entity) {
    var _this;

    _this = _Component.call(this, entity) || this;
    _this._color = new math.Color(1, 0, 0, 1);
    _this.color = _this._color;
    return _this;
  }
  /**
   * @internal
   * @override
   */


  var _proto = Fog.prototype;

  _proto._onEnable = function _onEnable() {
    this.scene.shaderData.enableMacro("O3_HAS_FOG");
  }
  /**
   * @internal
   * @override
   */
  ;

  _proto._onDisable = function _onDisable() {
    this.scene.shaderData.disableMacro("O3_HAS_FOG");
  };

  _createClass(Fog, [{
    key: "color",
    get:
    /**
     * Fog color.
     */
    function get() {
      return this._color;
    },
    set: function set(value) {
      this._color = value;
      this.scene.shaderData.setColor(Fog._colorProperty, value);
    }
  }]);

  return Fog;
}(Component);
Fog._colorProperty = Shader.getPropertyByName("u_fogColor");

/**
 * Exponential fog.
 */

var EXP2Fog = /*#__PURE__*/function (_Fog) {
  _inheritsLoose(EXP2Fog, _Fog);

  function EXP2Fog(entity) {
    var _this;

    _this = _Fog.call(this, entity) || this;
    _this._density = 0.0025;
    _this.density = _this._density;
    return _this;
  }
  /**
   * @internal
   * @override
   */


  var _proto = EXP2Fog.prototype;

  _proto._onEnable = function _onEnable() {
    this.scene.shaderData.enableMacro("O3_FOG_EXP2");
  }
  /**
   * @internal
   * @override
   */
  ;

  _proto._onDisable = function _onDisable() {
    this.scene.shaderData.disableMacro("O3_FOG_EXP2");
  };

  _createClass(EXP2Fog, [{
    key: "density",
    get:
    /**
     * Density of fog.
     */
    function get() {
      return this._density;
    },
    set: function set(value) {
      this._density = value;
      this.scene.shaderData.setFloat(EXP2Fog._densityProperty, value);
    }
  }]);

  return EXP2Fog;
}(Fog);
EXP2Fog._densityProperty = Shader.getPropertyByName("u_fogDensity");

/**
 * Linear fog, according to the distance of the camera linear difference fog density.
 */

var LinearFog = /*#__PURE__*/function (_Fog) {
  _inheritsLoose(LinearFog, _Fog);

  function LinearFog(entity) {
    var _this;

    _this = _Fog.call(this, entity) || this;
    _this._near = 1;
    _this._far = 1000;
    _this.near = _this._near;
    _this.far = _this._far;
    return _this;
  }

  _createClass(LinearFog, [{
    key: "near",
    get:
    /**
     * Start of fog.
     */
    function get() {
      return this._near;
    },
    set: function set(value) {
      this._near = value;
      this.scene.shaderData.setFloat(LinearFog._nearProperty, value);
    }
    /**
     * End of fog.
     */

  }, {
    key: "far",
    get: function get() {
      return this._far;
    },
    set: function set(value) {
      this._far = value;
      this.scene.shaderData.setFloat(LinearFog._farProperty, value);
    }
  }]);

  return LinearFog;
}(Fog);
LinearFog._nearProperty = Shader.getPropertyByName("u_fogNear");
LinearFog._farProperty = Shader.getPropertyByName("u_fogFar");

/**
 * Environmental probes, providing necessary capabilities such as reflection and refraction.
 * @example
 * ```ts
 * const probe = cameraEntity.addComponent( CubeProbe )
 * probe.onTextureChange = cubeTexture => {
 *   envLight.specularTexture = cubeTexture;
 *   skybox.specularTexture = cubeTexture;
 * }
 * ```
 */

var Probe = /*#__PURE__*/function (_Script) {
  _inheritsLoose(Probe, _Script);

  function Probe() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Script.call.apply(_Script, [this].concat(args)) || this;
    _this.probeLayer = exports.Layer.Everything;
    _this.width = 1024;
    _this.height = 1024;
    _this.antiAliasing = 1;
    _this._isCube = false;
    _this._oriCameraRenderTarget = void 0;
    _this._renderTarget = void 0;
    _this._renderTargetSwap = void 0;
    _this._activeRenderTarget = void 0;
    _this._camera = void 0;
    _this._oriCameraCullingMask = void 0;
    return _this;
  }

  var _proto = Probe.prototype;

  /**
   * Provide hooks for users to exchange Texture.
   * @remarks Prevent issue: Feedback Loops Between Textures and the Framebuffer.
   */
  _proto.onTextureChange = function onTextureChange(renderColorTexture) {}
  /**
   * @override
   */
  ;

  _proto.onBeginRender = function onBeginRender(camera) {
    if (!this.enabled) return;
    this._camera = camera;
    this._oriCameraCullingMask = camera.cullingMask;
    camera.cullingMask = this.probeLayer;

    if (!this._activeRenderTarget || this._activeRenderTarget.width !== this.width || this._activeRenderTarget.height !== this.height || this._activeRenderTarget.antiAliasing !== this.antiAliasing) {
      this._renderTarget = new RenderTarget(this.engine, this.width, this.height, new RenderColorTexture(this.engine, this.width, this.height, undefined, undefined, this._isCube), exports.RenderBufferDepthFormat.Depth, this.antiAliasing);
      this._renderTargetSwap = new RenderTarget(this.engine, this.width, this.height, new RenderColorTexture(this.engine, this.width, this.height, undefined, undefined, this._isCube), exports.RenderBufferDepthFormat.Depth, this.antiAliasing);
      this._activeRenderTarget = this._renderTarget;
    }

    this._oriCameraRenderTarget = camera.renderTarget;
    camera.renderTarget = this._activeRenderTarget;
  }
  /**
   * @override
   */
  ;

  _proto.onEndRender = function onEndRender(camera) {
    if (!this.enabled) return;
    this.onTextureChange && this.onTextureChange(this._texture);
    this._activeRenderTarget = this._activeRenderTarget === this._renderTarget ? this._renderTargetSwap : this._renderTarget;
  };

  _proto._reset = function _reset() {
    if (!this.enabled) return;
    this._camera.renderTarget = this._oriCameraRenderTarget;
    this._camera.cullingMask = this._oriCameraCullingMask;
  };

  _createClass(Probe, [{
    key: "_texture",
    get: function get() {
      var _this$_activeRenderTa;

      return (_this$_activeRenderTa = this._activeRenderTarget) === null || _this$_activeRenderTa === void 0 ? void 0 : _this$_activeRenderTa.getColorTexture();
    }
  }]);

  return Probe;
}(Script);

var cacheTarget = new math.Vector3();
var cacheUp = new math.Vector3();
var cacheDir = new math.Vector3();
/**
 * Cube probe, generate cubeTexture, used for dynamic environment reflection and other effects.
 */

var CubeProbe = /*#__PURE__*/function (_Probe) {
  _inheritsLoose(CubeProbe, _Probe);

  function CubeProbe() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Probe.call.apply(_Probe, [this].concat(args)) || this;
    _this.position = new math.Vector3(0, 0, 0);
    _this._isCube = true;
    _this.oriViewMatrix = new math.Matrix();
    _this._oriFieldOfView = void 0;
    return _this;
  }

  var _proto = CubeProbe.prototype;

  /**
   * @override
   */
  _proto.onBeginRender = function onBeginRender(camera) {
    if (!this.enabled) return;

    _Probe.prototype.onBeginRender.call(this, camera);

    this._storeCamera(camera); // Render 6 faces


    for (var faceIndex = 0; faceIndex < 6; faceIndex++) {
      // Change camera parameters
      this._setCamera(faceIndex, camera);

      camera.render(exports.TextureCubeFace.PositiveX + faceIndex);
    }

    this._restoreCamera(camera);

    _Probe.prototype._reset.call(this);
  }
  /**
   * Store original camera parameters.
   */
  ;

  _proto._storeCamera = function _storeCamera(camera) {
    camera.viewMatrix.cloneTo(this.oriViewMatrix);
    this._oriFieldOfView = camera.fieldOfView;
  }
  /**
   * Restore camera parameters.
   */
  ;

  _proto._restoreCamera = function _restoreCamera(camera) {
    this.oriViewMatrix.cloneTo(camera.viewMatrix);
    camera.fieldOfView = this._oriFieldOfView;
  }
  /**
   * Set camera parameters according to the rendering surface.
   */
  ;

  _proto._setCamera = function _setCamera(faceIndex, camera) {
    switch (faceIndex) {
      // positive_x
      case 0:
        cacheUp.setValue(0, -1, 0);
        cacheDir.setValue(1, 0, 0);
        break;
      // negative_x

      case 1:
        cacheUp.setValue(0, -1, 0);
        cacheDir.setValue(-1, 0, 0);
        break;
      // positive_y

      case 2:
        cacheUp.setValue(0, 0, 1);
        cacheDir.setValue(0, 1, 0);
        break;
      // negative_y

      case 3:
        cacheUp.setValue(0, 0, -1);
        cacheDir.setValue(0, -1, 0);
        break;
      // positive_z

      case 4:
        cacheUp.setValue(0, -1, 0);
        cacheDir.setValue(0, 0, 1);
        break;
      // negative_z

      case 5:
        cacheUp.setValue(0, -1, 0);
        cacheDir.setValue(0, 0, -1);
        break;
    }

    math.Vector3.add(this.position, cacheDir, cacheTarget);
    math.Matrix.lookAt(this.position, cacheTarget, cacheUp, camera.viewMatrix);
    camera.fieldOfView = 90;
  };

  return CubeProbe;
}(Probe);

/**
 * Shadow manager.
 */

var LightShadow = /*#__PURE__*/function () {
  /**
   * @internal
   */
  LightShadow._updateShaderData = function _updateShaderData(shaderData) {
    var data = LightShadow._combinedData;
    shaderData.setFloatArray(LightShadow._viewMatFromLightProperty, data.viewMatrix);
    shaderData.setFloatArray(LightShadow._projMatFromLightProperty, data.projectionMatrix);
    shaderData.setFloatArray(LightShadow._shadowBiasProperty, data.bias);
    shaderData.setFloatArray(LightShadow._shadowIntensityProperty, data.intensity);
    shaderData.setFloatArray(LightShadow._shadowRadiusProperty, data.radius);
    shaderData.setFloatArray(LightShadow._shadowMapSizeProperty, data.mapSize);
    shaderData.setTextureArray(LightShadow._shadowMapsProperty, data.map);
  }
  /**
   * Clear all shadow maps.
   */
  ;

  LightShadow.clearMap = function clearMap() {
    LightShadow._combinedData.map.length = 0;
  };

  function LightShadow(light, props) {
    if (props === void 0) {
      props = {
        engine: null,
        width: 512,
        height: 512
      };
    }

    this._mapSize = void 0;
    this._renderTarget = void 0;
    this.light = void 0;
    this.bias = 0.005;
    this.intensity = 0.2;
    this.radius = 1;
    this.projectionMatrix = new math.Matrix();
    this.light = light;
    var _props = props,
        engine = _props.engine,
        width = _props.width,
        height = _props.height;
    this._mapSize = new math.Vector2(width, height);
    this._renderTarget = new RenderTarget(engine, width, height, new RenderColorTexture(engine, width, height));
  }
  /**
   * The RenderTarget corresponding to the shadow map.
   * @readonly
   */


  var _proto = LightShadow.prototype;

  /**
   * Initialize the projection matrix for lighting.
   * @param light - The light to generate shadow
   */
  _proto.initShadowProjectionMatrix = function initShadowProjectionMatrix(light) {
    /**
     * Directional light projection matrix, the default coverage area is left: -5, right: 5, bottom: -5, up: 5, near: 0.5, far: 50.
     */
    if (light instanceof DirectLight) {
      math.Matrix.ortho(-5, 5, -5, 5, 0.1, 50, this.projectionMatrix);
    }
    /**
     * Point light projection matrix, default configuration: fov: 50, aspect: 1, near: 0.5, far: 50.
     */


    if (light instanceof PointLight) {
      math.Matrix.perspective(math.MathUtil.degreeToRadian(50), 1, 0.5, 50, this.projectionMatrix);
    }
    /**
     * Spotlight projection matrix, the default configuration: fov: this.angle * 2 * Math.sqrt(2), aspect: 1, near: 0.1, far: this.distance + 5
     */


    if (light instanceof SpotLight) {
      var fov = Math.min(Math.PI / 2, light.angle * 2 * Math.sqrt(2));
      math.Matrix.perspective(fov, 1, 0.1, light.distance + 5, this.projectionMatrix);
    }
  };

  _proto.appendData = function appendData(lightIndex) {
    var viewStart = lightIndex * 16;
    var projectionStart = lightIndex * 16;
    var biasStart = lightIndex;
    var intensityStart = lightIndex;
    var radiusStart = lightIndex;
    var mapSizeStart = lightIndex * 2;
    var mapStart = lightIndex;
    var data = LightShadow._combinedData;
    data.viewMatrix.set(this.light.viewMatrix.elements, viewStart);
    data.projectionMatrix.set(this.projectionMatrix.elements, projectionStart);
    data.bias[biasStart] = this.bias;
    data.intensity[intensityStart] = this.intensity;
    data.radius[radiusStart] = this.radius;
    data.mapSize[mapSizeStart] = this.mapSize.x;
    data.mapSize[mapSizeStart + 1] = this.mapSize.y;
    data.map[mapStart] = this.map;
  };

  _createClass(LightShadow, [{
    key: "renderTarget",
    get: function get() {
      return this._renderTarget;
    }
    /**
     * Shadow map's color render texture.
     * @readonly
     */

  }, {
    key: "map",
    get: function get() {
      return this._renderTarget.getColorTexture();
    }
    /**
     * Shadow map size.
     * @readonly
     */

  }, {
    key: "mapSize",
    get: function get() {
      return this._mapSize;
    }
  }]);

  return LightShadow;
}();
LightShadow._viewMatFromLightProperty = Shader.getPropertyByName("u_viewMatFromLight");
LightShadow._projMatFromLightProperty = Shader.getPropertyByName("u_projMatFromLight");
LightShadow._shadowBiasProperty = Shader.getPropertyByName("u_shadowBias");
LightShadow._shadowIntensityProperty = Shader.getPropertyByName("u_shadowIntensity");
LightShadow._shadowRadiusProperty = Shader.getPropertyByName("u_shadowRadius");
LightShadow._shadowMapSizeProperty = Shader.getPropertyByName("u_shadowMapSize");
LightShadow._shadowMapsProperty = Shader.getPropertyByName("u_shadowMaps");
LightShadow._maxLight = 3;
LightShadow._combinedData = {
  viewMatrix: new Float32Array(16 * LightShadow._maxLight),
  projectionMatrix: new Float32Array(16 * LightShadow._maxLight),
  bias: new Float32Array(LightShadow._maxLight),
  intensity: new Float32Array(LightShadow._maxLight),
  radius: new Float32Array(LightShadow._maxLight),
  mapSize: new Float32Array(2 * LightShadow._maxLight),
  map: []
};

/**
 * Set whether the light to generate shadows.
 */

Object.defineProperty(Light.prototype, "enableShadow", {
  get: function get() {
    return this._enableShadow;
  },
  set: function set(enabled) {
    this._enableShadow = enabled;

    if (this._enableShadow) {
      if (this instanceof AmbientLight) {
        this._enableShadow = false;
        Logger.warn("Has no shadow!");
        return;
      }

      this.shadow = this.shadow || new LightShadow(this, {
        engine: this.engine,
        width: 512,
        height: 512
      });
      this.shadow.initShadowProjectionMatrix(this);
    }
  }
});
/**
 * Set whether the renderer to receive shadows.
 */

Object.defineProperty(Component.prototype, "recieveShadow", {
  get: function get() {
    return this._recieveShadow;
  },
  set: function set(enabled) {
    this._recieveShadow = enabled;
  }
});
/**
 * Set whether the renderer to cast shadows.
 */

Object.defineProperty(Component.prototype, "castShadow", {
  get: function get() {
    return this._castShadow;
  },
  set: function set(enabled) {
    this._castShadow = enabled;
  }
});

/**
 * Shadow Map material.
 */

var ShadowMapMaterial = /*#__PURE__*/function (_Material) {
  _inheritsLoose(ShadowMapMaterial, _Material);

  function ShadowMapMaterial(engine) {
    var _this;

    _this = _Material.call(this, engine, Shader.find("shadow-map")) || this;

    _this.shaderData.enableMacro("O3_GENERATE_SHADOW_MAP");

    return _this;
  }

  return ShadowMapMaterial;
}(Material);

/**
 * RenderPass for rendering shadow map.
 */
var ShadowMapPass = /*#__PURE__*/function (_RenderPass) {
  _inheritsLoose(ShadowMapPass, _RenderPass);

  /**
   * Constructor.
   * @param light  - The light that the shadow belongs to
   */
  function ShadowMapPass(name, priority, renderTarget, replaceMaterial, mask, light) {
    var _this;

    _this = _RenderPass.call(this, name, priority, renderTarget, replaceMaterial, mask, new math.Vector4(1, 1, 1, 1)) || this;
    _this.light = void 0;
    _this.light = light;
    return _this;
  }
  /**
   * @override
   */


  var _proto = ShadowMapPass.prototype;

  _proto.preRender = function preRender(camera, queue) {
    // The viewProjection matrix from the light.
    var shaderData = this.replaceMaterial.shaderData;
    shaderData.setMatrix(ShadowMapPass._viewMatFromLightProperty, this.light.viewMatrix);
    shaderData.setMatrix(ShadowMapPass._projMatFromLightProperty, this.light.shadow.projectionMatrix);
  };

  return ShadowMapPass;
}(RenderPass);
ShadowMapPass._viewMatFromLightProperty = Shader.getPropertyByName("u_viewMatFromLight");
ShadowMapPass._projMatFromLightProperty = Shader.getPropertyByName("u_projMatFromLight");

/**
 * Shadow material.
 */

var ShadowMaterial = /*#__PURE__*/function (_Material) {
  _inheritsLoose(ShadowMaterial, _Material);

  function ShadowMaterial(engine) {
    var _this;

    _this = _Material.call(this, engine, Shader.find("shadow")) || this;
    var targetBlendState = _this.renderState.blendState.targetBlendState;
    targetBlendState.sourceColorBlendFactor = targetBlendState.sourceAlphaBlendFactor = exports.BlendFactor.DestinationColor;
    targetBlendState.destinationColorBlendFactor = targetBlendState.destinationAlphaBlendFactor = exports.BlendFactor.Zero;
    _this.renderState.depthState.compareFunction = exports.CompareFunction.LessEqual;
    _this.renderQueueType = exports.RenderQueueType.Transparent;
    return _this;
  }

  return ShadowMaterial;
}(Material);

/**
 * RenderPass for rendering shadow.
 */

var ShadowPass = /*#__PURE__*/function (_RenderPass) {
  _inheritsLoose(ShadowPass, _RenderPass);

  function ShadowPass() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _RenderPass.call.apply(_RenderPass, [this].concat(args)) || this;
    _this.clearMode = exports.ClearMode.DONT_CLEAR;
    return _this;
  }
  /**
   * @override
   */


  var _proto = ShadowPass.prototype;

  _proto.preRender = function preRender(camera, queue) {
    this.enabled = false;
    var lightMgr = camera.scene.findFeature(LightFeature);
    var lights = lightMgr.visibleLights;
    var shaderData = this.replaceMaterial.shaderData; // keep render based on default render pass

    var pass = camera._renderPipeline.defaultRenderPass;
    this.renderTarget = pass.renderTarget;
    var shadowMapCount = 0;
    LightShadow.clearMap();

    for (var i = 0, len = lights.length; i < len; i++) {
      var lgt = lights[i];

      if (lgt.enableShadow) {
        lgt.shadow.appendData(shadowMapCount++);
      }
    }

    if (shadowMapCount) {
      this.enabled = true;

      LightShadow._updateShaderData(shaderData);

      shaderData.enableMacro("O3_SHADOW_MAP_COUNT", shadowMapCount.toString());
    } else {
      shaderData.disableMacro("O3_SHADOW_MAP_COUNT");
    }
  };

  return ShadowPass;
}(RenderPass);

/**
 * Shadow plug-in.
 */

var ShadowFeature = /*#__PURE__*/function (_SceneFeature) {
  _inheritsLoose(ShadowFeature, _SceneFeature);

  function ShadowFeature() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _SceneFeature.call.apply(_SceneFeature, [this].concat(args)) || this;
    _this._shadowPass = void 0;
    _this._shadowMapMaterial = void 0;
    return _this;
  }

  var _proto = ShadowFeature.prototype;

  /**
   * @override
   */
  _proto.preRender = function preRender(scene, camera) {
    var lights = scene.findFeature(LightFeature).visibleLights;

    if (lights.length > 0) {
      // Check RenderPass for rendering shadows.
      if (!this._shadowPass) {
        this.addShadowPass(camera);
      } // Check RenderPass for rendering shadow map.


      var renderPipeline = camera._renderPipeline;

      for (var i = 0, len = lights.length; i < len; i++) {
        var lgt = lights[i];

        if (lgt.enableShadow && !lgt.shadowMapPass) {
          lgt.shadowMapPass = this.addShadowMapPass(camera, lgt);
        } else if (!lgt.enableShadow && lgt.shadowMapPass) {
          renderPipeline.removeRenderPass(lgt.shadowMapPass);
          lgt.shadowMapPass = null;
        }
      }

      this.updatePassRenderFlag(renderPipeline.queue);
    }
  }
  /**
   * Add RenderPass for rendering shadows.
   * @param camera - The camera for rendering
   */
  ;

  _proto.addShadowPass = function addShadowPass(camera) {
    var shadowMaterial = new ShadowMaterial(camera.engine);
    this._shadowPass = new ShadowPass("ShadowPass", 1, null, shadowMaterial, exports.Layer.Layer30); // SHADOW

    var renderer = camera._renderPipeline;
    renderer.addRenderPass(this._shadowPass);
  }
  /**
   * Add RenderPass for rendering shadow map.
   * @param camera - The camera for rendering
   * @param light - The light that the shadow belongs to
   */
  ;

  _proto.addShadowMapPass = function addShadowMapPass(camera, light) {
    // Share shadow map material.
    this._shadowMapMaterial = this._shadowMapMaterial || new ShadowMapMaterial(camera.engine);
    var shadowMapPass = new ShadowMapPass("ShadowMapPass", -1, light.shadow.renderTarget, this._shadowMapMaterial, exports.Layer.Layer31, // SHADOW_MAP
    light);
    var renderer = camera._renderPipeline;
    renderer.addRenderPass(shadowMapPass);
    return shadowMapPass;
  }
  /**
   * Update the renderPassFlag state of renderers in the scene.
   * @param renderQueue - Render queue
   */
  ;

  _proto.updatePassRenderFlag = function updatePassRenderFlag(renderQueue) {
    var items = renderQueue.items;

    for (var i = 0, len = items.length; i < len; i++) {
      var item = items[i];
      var ability = item.component;
      var recieveShadow = ability.recieveShadow;
      var castShadow = ability.castShadow;

      if (recieveShadow === true) {
        ability.entity.layer |= exports.Layer.Layer30; //SHADOW;
      } else if (recieveShadow === false) {
        ability.entity.layer &= ~exports.Layer.Layer30; //SHADOW;
      }

      if (castShadow === true) {
        ability.entity.layer |= exports.Layer.Layer31; //SHADOW_MAP;
      } else if (castShadow === false) {
        ability.entity.layer &= ~exports.Layer.Layer31; //SHADOW_MAP;
      }
    }
  };

  return ShadowFeature;
}(SceneFeature);

Scene.registerFeature(ShadowFeature);

Scene.registerFeature(LightFeature);
Scene.prototype.hasLight = hasLight; // Quote raycast

exports.ABoxCollider = ABoxCollider;
exports.ACollider = Collider;
exports.ASphereCollider = ASphereCollider;
exports.AmbientLight = AmbientLight;
exports.Animation = Animation;
exports.AnimationClip = AnimationClip;
exports.AssetPromise = AssetPromise;
exports.BasicRenderPipeline = BasicRenderPipeline;
exports.BlinnPhongMaterial = BlinnPhongMaterial;
exports.BoxCollider = BoxCollider;
exports.Buffer = Buffer;
exports.BufferGeometry = BufferGeometry;
exports.BufferUtil = BufferUtil;
exports.Camera = Camera;
exports.CircleGeometry = CircleGeometry;
exports.ColliderFeature = ColliderFeature;
exports.CollisionDetection = CollisionDetection;
exports.Component = Component;
exports.CubeProbe = CubeProbe;
exports.CuboidGeometry = CuboidGeometry;
exports.CylinderGeometry = CylinderGeometry;
exports.DirectLight = DirectLight;
exports.EXP2Fog = EXP2Fog;
exports.Engine = Engine;
exports.EngineFeature = EngineFeature;
exports.EngineObject = EngineObject;
exports.Entity = Entity;
exports.EnvironmentMapLight = EnvironmentMapLight;
exports.Event = Event;
exports.EventDispatcher = EventDispatcher;
exports.Fog = Fog;
exports.GeometryRenderer = GeometryRenderer;
exports.IndexBufferBinding = IndexBufferBinding;
exports.LODGroup = LODGroup;
exports.Light = Light;
exports.LightFeature = LightFeature;
exports.LinearFog = LinearFog;
exports.Loader = Loader;
exports.Logger = Logger;
exports.Material = Material;
exports.Mesh = Mesh;
exports.MeshRenderer = MeshRenderer;
exports.Model = Model;
exports.ObjectValues = ObjectValues;
exports.PBRMaterial = PBRMaterial;
exports.PBRSpecularMaterial = PBRSpecularMaterial;
exports.ParticleRenderer = ParticleRenderer;
exports.PlaneCollider = PlaneCollider;
exports.PlaneGeometry = PlaneGeometry;
exports.PointLight = PointLight;
exports.Primitive = Primitive;
exports.Probe = Probe;
exports.RefObject = RefObject;
exports.RenderColorTexture = RenderColorTexture;
exports.RenderDepthTexture = RenderDepthTexture;
exports.RenderElement = RenderElement;
exports.RenderPass = RenderPass;
exports.RenderQueue = RenderQueue;
exports.RenderTarget = RenderTarget;
exports.Renderer = Renderer;
exports.ResourceManager = ResourceManager;
exports.Scene = Scene;
exports.SceneFeature = SceneFeature;
exports.ScreenQuadGeometry = ScreenQuadGeometry;
exports.Script = Script;
exports.Shader = Shader;
exports.ShaderFactory = ShaderFactory;
exports.ShapeGeometry = ShapeGeometry;
exports.Skin = Skin;
exports.SkinnedMeshRenderer = SkinnedMeshRenderer;
exports.SkyBox = SkyBox;
exports.SphereCollider = SphereCollider;
exports.SphereGeometry = SphereGeometry;
exports.SpotLight = SpotLight;
exports.SpriteRenderer = SpriteRenderer;
exports.SubPrimitive = SubPrimitive;
exports.SystemInfo = SystemInfo;
exports.Texture = Texture;
exports.Texture2D = Texture2D;
exports.TextureCubeMap = TextureCubeMap;
exports.Time = Time;
exports.TorusGeometry = TorusGeometry;
exports.TrailMaterial = TrailMaterial;
exports.TrailRenderer = TrailRenderer;
exports.Transform = Transform;
exports.UnlitMaterial = UnlitMaterial;
exports.UpdateFlag = UpdateFlag;
exports.Util = Util;
exports.VertexBufferBinding = VertexBufferBinding;
exports.VertexElement = VertexElement;
exports.dependencies = dependencies;
exports.request = request;
exports.resourceLoader = resourceLoader;
