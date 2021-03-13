'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var wechatAdapter = require('@oasis-engine/wechat-adapter');
var core = require('@oasis-engine/core');
var math = require('@oasis-engine/math');
var draco = require('@oasis-engine/draco');

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

var _dec$a, _class$a;

function isBase64(url) {
  return /^data:(.+?);base64,/.test(url);
}

(_dec$a = core.resourceLoader(core.AssetType.Buffer, ["bin", "r3bin"], false), _dec$a(_class$a = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(BufferLoader, _Loader);

  function BufferLoader() {
    return _Loader.apply(this, arguments) || this;
  }

  var _proto = BufferLoader.prototype;

  _proto.load = function load(item) {
    var url = item.url;

    if (isBase64(url)) {
      return new core.AssetPromise(function (resolve) {
        var base64Str = url.slice(13 + RegExp.$1.length);

        {
          return resolve(wechatAdapter.window.base64ToArrayBuffer(base64Str));
        }
      });
    }

    return this.request(url, _objectSpread2(_objectSpread2({}, item), {}, {
      type: "arraybuffer"
    }));
  };

  return BufferLoader;
}(core.Loader)) || _class$a);

var WEBGL_COMPONENT_TYPES = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};
/**
 * Parse binary text for glb loader.
 * @param array
 * @returns String
 * @private
 */

function decodeText(array) {
  if (typeof TextDecoder !== "undefined") {
    return new TextDecoder().decode(array);
  } // TextDecoder polyfill


  var s = "";

  for (var i = 0, il = array.length; i < il; i++) {
    s += String.fromCharCode(array[i]);
  }

  return decodeURIComponent(encodeURIComponent(s));
}
/** Get the number of bytes occupied by accessor type.
 * @return {number}
 * @param {string} accessorType
 * @private
 */

function getAccessorTypeSize(accessorType) {
  var ACCESSOR_TYPE_SIZE = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
  };
  return ACCESSOR_TYPE_SIZE[accessorType];
}
/** Get the TypedArray corresponding to the component type.
 * @return {function}
 * @param {string} componentType
 */

function getComponentType(componentType) {
  return WEBGL_COMPONENT_TYPES[componentType];
}
/**
 * Get accessor data.
 * @param gltf
 * @param accessor
 * @param buffers
 * @private
 */

function getAccessorData(gltf, accessor, buffers) {
  var _bufferView$byteStrid;

  var bufferView = gltf.bufferViews[accessor.bufferView];
  var arrayBuffer = buffers[bufferView.buffer];
  var accessorByteOffset = accessor.hasOwnProperty("byteOffset") ? accessor.byteOffset : 0;
  var bufferViewByteOffset = bufferView.hasOwnProperty("byteOffset") ? bufferView.byteOffset : 0;
  var byteOffset = accessorByteOffset + bufferViewByteOffset;
  var accessorTypeSize = getAccessorTypeSize(accessor.type);
  var length = accessorTypeSize * accessor.count;
  var byteStride = (_bufferView$byteStrid = bufferView.byteStride) != null ? _bufferView$byteStrid : 0;
  var arrayType = getComponentType(accessor.componentType);
  var uint8Array;

  if (byteStride) {
    uint8Array = new Uint8Array(length * arrayType.BYTES_PER_ELEMENT);
    var originalBufferView = new Uint8Array(arrayBuffer, bufferViewByteOffset, bufferView.byteLength);
    var viewAccessor = 0;
    var accessorByteSize = accessorTypeSize * arrayType.BYTES_PER_ELEMENT;

    for (var i = 0; i < accessor.count; i++) {
      viewAccessor = i * byteStride + accessorByteOffset;

      for (var j = 0; j < accessorByteSize; j++) {
        uint8Array[i * accessorByteSize + j] = originalBufferView[viewAccessor + j];
      }
    }
  } else {
    uint8Array = new Uint8Array(arrayBuffer, byteOffset, length * arrayType.BYTES_PER_ELEMENT);
    uint8Array = new Uint8Array(uint8Array);
  }

  return new arrayType(uint8Array.buffer);
}
/**
 * Get buffer data
 * @param bufferView
 * @param buffers
 * @returns {Blob|ArrayBuffer|Array.<T>|string}
 * @private
 */

function getBufferData(bufferView, buffers) {
  // get bufferView
  var arrayBuffer = buffers[bufferView.buffer];
  var byteOffset = bufferView.byteOffset || 0;
  return arrayBuffer.slice(byteOffset, byteOffset + bufferView.byteLength);
}
function getVertexStride(accessor) {
  var size = getAccessorTypeSize(accessor.type);
  var componentType = getComponentType(accessor.componentType);
  return size * componentType.BYTES_PER_ELEMENT;
}
function createVertexElement(gltf, semantic, accessor, index) {
  var size = getAccessorTypeSize(accessor.type);
  return new core.VertexElement(semantic, 0, getElementFormat(accessor.componentType, size), index);
}
function getIndexFormat(type) {
  switch (type) {
    case core.DataType.UNSIGNED_BYTE:
      return core.IndexFormat.UInt8;

    case core.DataType.UNSIGNED_SHORT:
      return core.IndexFormat.UInt16;

    case core.DataType.UNSIGNED_INT:
      return core.IndexFormat.UInt32;
  }
}
function getElementFormat(type, size) {
  if (type == core.DataType.FLOAT) {
    switch (size) {
      case 1:
        return core.VertexElementFormat.Float;

      case 2:
        return core.VertexElementFormat.Vector2;

      case 3:
        return core.VertexElementFormat.Vector3;

      case 4:
        return core.VertexElementFormat.Vector4;
    }
  }

  if (type == core.DataType.UNSIGNED_SHORT) {
    switch (size) {
      case 2:
        return core.VertexElementFormat.UShort2;

      case 4:
        return core.VertexElementFormat.UShort4;
    }
  }
}
/**
 * Load image buffer
 * @param imageBuffer
 * @param type
 * @param callback
 */

function loadImageBuffer(imageBuffer, type) {
  return new Promise(function (resolve, reject) {
    var img = new wechatAdapter.Image();

    {
      var base64 = wechatAdapter.window.arrayBufferToBase64(imageBuffer);
      img.src = "data:" + type + ";base64," + base64;
    }

    img.crossOrigin = "anonymous";

    img.onerror = function () {
      reject(new Error("Failed to load image buffer"));
    };

    img.onload = function () {
      // Call requestAnimationFrame to avoid iOS's bug.
      wechatAdapter.requestAnimationFrame(function () {
        resolve(img);
      });
    };
  });
}

function isAbsoluteUrl(url) {
  return /^(?:http|blob|data:|\/)/.test(url);
}

function parseRelativeUrl(baseUrl, relativeUrl) {
  if (isAbsoluteUrl(relativeUrl)) {
    return relativeUrl;
  } // TODO: implement ../path


  return baseUrl.substring(0, baseUrl.lastIndexOf("/") + 1) + relativeUrl;
}

var decoder;
var glTFDracoMeshCompression = {
  init: function init() {
    if (!decoder) {
      decoder = new draco.DRACODecoder();
    }
  },
  parse: function parse(extension, gltfPrimitive, gltf, buffers) {
    var bufferViews = gltf.bufferViews,
        accessors = gltf.accessors;
    var bufferViewIndex = extension.bufferView;
    var gltfAttributeMap = extension.attributes;
    var attributeMap = {};
    var attributeTypeMap = {};

    for (var attributeName in gltfAttributeMap) {
      attributeMap[attributeName] = gltfAttributeMap[attributeName];
    }

    for (var _attributeName in gltfPrimitive.attributes) {
      if (gltfAttributeMap[_attributeName] !== undefined) {
        var accessorDef = accessors[gltfPrimitive.attributes[_attributeName]];
        attributeTypeMap[_attributeName] = getComponentType(accessorDef.componentType).name;
      }
    }

    var indexAccessor = accessors[gltfPrimitive.indices];
    var indexType = getComponentType(indexAccessor.componentType).name;
    var taskConfig = {
      attributeIDs: attributeMap,
      attributeTypes: attributeTypeMap,
      useUniqueIDs: true,
      indexType: indexType
    };
    var buffer = getBufferData(bufferViews[bufferViewIndex], buffers);
    return decoder.decode(buffer, taskConfig).then(function (parsedGeometry) {
      return parsedGeometry;
    });
  }
};

//              https://github.com/KhronosGroup/glTF/pull/1223
//              https://github.com/KhronosGroup/glTF/issues/945
// KHR_materials_common:  https://github.com/donmccurdy/glTF/tree/donmccurdy-KHR_materials_common/extensions/Khronos/KHR_materials_common_v2
//                        https://github.com/KhronosGroup/glTF/pull/1150
//                        https://github.com/KhronosGroup/glTF/issues/947

var TARGET_PATH_MAP = {
  translation: "position",
  rotation: "rotation",
  scale: "scale",
  weights: "weights"
};
var nodeCount = 0;
var RegistedObjs = {};
var RegistedCustomMaterials = {};

var getDefaultMaterial = function () {
  // let defaultMateril: BlinnPhongMaterial;
  return function (engine) {
    // if (!defaultMateril) {
    var defaultMateril = new core.BlinnPhongMaterial(engine);
    defaultMateril.emissiveColor = new math.Color(0.749, 0.749, 0.749, 1); // }

    return defaultMateril;
  };
}();
/**
 * Extension dedicated registration key.
 */


var HandledExtensions = {
  PBRMaterial: "PBRMaterial",
  KHR_lights: "KHR_lights",
  KHR_materials_unlit: "KHR_materials_unlit",
  KHR_materials_pbrSpecularGlossiness: "KHR_materials_pbrSpecularGlossiness",
  KHR_techniques_webgl: "KHR_techniques_webgl",
  KHR_draco_mesh_compression: "KHR_draco_mesh_compression"
};
var KHR_lights = null;
var extensionParsers = {
  KHR_lights: KHR_lights,
  KHR_materials_unlit: core.UnlitMaterial,
  KHR_materials_pbrSpecularGlossiness: core.PBRSpecularMaterial,
  KHR_techniques_webgl: core.Material,
  KHR_draco_mesh_compression: glTFDracoMeshCompression
};
/**
 * Register extension components to glTF loader.
 * @param extobj - Need to add extensions
 */

function RegistExtension(extobj) {
  Object.keys(extobj).forEach(function (name) {
    if (RegistedObjs[name] === undefined) {
      RegistedObjs[name] = extobj[name];

      switch (name) {
        case HandledExtensions.KHR_lights:
          KHR_lights = extobj[name];
          extensionParsers.KHR_lights = KHR_lights;
          break;

        default:
          if (core.Material.isPrototypeOf(extobj[name]) && extobj[name].TECH_NAME) RegistedCustomMaterials[extobj[name].TECH_NAME] = extobj[name];
          break;
      }
    }
  });
}
var GLTFResource$1 = /*#__PURE__*/function (_EngineObject) {
  _inheritsLoose(GLTFResource, _EngineObject);

  function GLTFResource() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _EngineObject.call.apply(_EngineObject, [this].concat(args)) || this;
    _this.defaultSceneRoot = void 0;
    _this.defaultScene = void 0;
    _this.scenes = void 0;
    _this.textures = void 0;
    _this.animations = void 0;
    _this.materials = void 0;
    _this.meshes = void 0;
    _this.skins = void 0;
    _this.cameras = void 0;
    _this.meta = void 0;
    return _this;
  }

  return GLTFResource;
}(core.EngineObject);
/**
 * Parse the glTF structure.
 * @param resource
 * @returns {*}
 * @private
 */

function parseGLTF(data, engine) {
  // Start processing glTF data.
  var resources = {
    engine: engine,
    gltf: data.gltf,
    buffers: data.buffers,
    asset: new GLTFResource$1(engine)
  };
  resources.asset.textures = data.textures;
  resources.asset.meta = data.gltf;

  if (resources.gltf.asset && resources.gltf.asset.version) {
    resources.gltf.version = Number(resources.gltf.asset.version);
    resources.gltf.isGltf2 = resources.gltf.version >= 2 && resources.gltf.version <= 3;
  }

  parseExtensions(resources); // parse all related resources

  return parseResources(resources, "materials", parseMaterial).then(function () {
    return parseResources(resources, "meshes", parseMesh);
  }) // .then(() => parseResources(resources, "cameras", parseCamera))
  .then(function () {
    return parseResources(resources, "nodes", parseNode);
  }).then(function () {
    return parseResources(resources, "scenes", parseScene);
  }).then(function () {
    return parseResources(resources, "skins", parseSkin);
  }).then(function () {
    return parseResources(resources, "animations", parseAnimation);
  }).then(function () {
    return buildSceneGraph(resources);
  });
}

function parseExtensions(resources) {
  var gltf = resources.gltf,
      asset = resources.asset;
  var extensions = gltf.extensions,
      extensionsUsed = gltf.extensionsUsed,
      extensionsRequired = gltf.extensionsRequired;

  if (extensionsUsed) {
    core.Logger.info("extensionsUsed: ", extensionsUsed);

    for (var i = 0; i < extensionsUsed.length; i++) {
      if (Object.keys(extensionParsers).indexOf(extensionsUsed[i]) > -1) {
        if (!extensionParsers[extensionsUsed[i]]) {
          core.Logger.warn("extension " + extensionsUsed[i] + " is used, you can add this extension into gltf");
        }
      } else {
        core.Logger.warn("extensionsUsed has unsupported extension " + extensionsUsed[i]);
      }
    }
  }

  if (extensionsRequired) {
    core.Logger.info("extensionsRequired: " + extensionsRequired);

    for (var _i = 0; _i < extensionsRequired.length; _i++) {
      if (Object.keys(extensionParsers).indexOf(extensionsRequired[_i]) < 0 || !extensionParsers[extensionsRequired[_i]]) {
        core.Logger.error("model has not supported required extension " + extensionsRequired[_i]);
      }

      if (extensionsRequired[_i] === HandledExtensions.KHR_draco_mesh_compression) {
        extensionParsers.KHR_draco_mesh_compression.init();
      }
    }
  }

  if (extensions) {
    if (KHR_lights && extensions.KHR_lights) {
      asset.lights = KHR_lights.parseLights(extensions.KHR_lights.lights);
    }
  }
}
/**
 * General resource analysis method.
 * @param resources - Existing resources
 * @param name - Name
 * @param handler - Resource resolver
 * @private
 */


function parseResources(resources, name, handler) {
  var gltf = resources.gltf,
      asset = resources.asset;

  if (!asset[name]) {
    asset[name] = [];
  }

  if (gltf.hasOwnProperty(name)) {
    var entities = gltf[name] || [];
    core.Logger.debug(name + ":", entities);
    var promises = [];

    for (var i = entities.length - 1; i >= 0; i--) {
      promises.push(handler(entities[i], resources));
    }

    return Promise.all(promises).then(function (results) {
      for (var _i2 = 0; _i2 < results.length; _i2++) {
        asset[name].push(results[_i2]);
      }
    });
  }

  return Promise.resolve();
}
/**
 * Parse material.
 * @param gltfMaterial
 * @param resources
 * @private
 */


function parseMaterial(gltfMaterial, resources) {
  var gltf = resources.gltf,
      engine = resources.engine;

  if (gltf.isGltf2 && typeof gltfMaterial.technique === "undefined") {
    var _gltfMaterial$extensi = gltfMaterial.extensions,
        extensions = _gltfMaterial$extensi === void 0 ? {} : _gltfMaterial$extensi,
        pbrMetallicRoughness = gltfMaterial.pbrMetallicRoughness,
        normalTexture = gltfMaterial.normalTexture,
        emissiveTexture = gltfMaterial.emissiveTexture,
        emissiveFactor = gltfMaterial.emissiveFactor,
        occlusionTexture = gltfMaterial.occlusionTexture,
        alphaMode = gltfMaterial.alphaMode,
        alphaCutoff = gltfMaterial.alphaCutoff,
        doubleSided = gltfMaterial.doubleSided;
    var isUnlit = extensions.KHR_materials_unlit;
    var isSpecular = extensions.KHR_materials_pbrSpecularGlossiness;
    var material = null;

    if (isUnlit) {
      material = new core.UnlitMaterial(engine);
    } else if (isSpecular) {
      material = new core.PBRSpecularMaterial(engine);
    } else {
      material = new core.PBRMaterial(engine);
    } // render states


    material.doubleSided = doubleSided;

    switch (alphaMode) {
      case "OPAQUE":
        material.alphaMode = core.AlphaMode.Opaque;
        break;

      case "BLEND":
        material.alphaMode = core.AlphaMode.Blend;
        break;

      case "MASK":
        material.alphaMode = core.AlphaMode.CutOff;
        material.alphaCutoff = alphaCutoff === undefined ? 0.5 : alphaCutoff;
        break;
    } // may be applied to unlit too.


    if (pbrMetallicRoughness) {
      var baseColorFactor = pbrMetallicRoughness.baseColorFactor,
          baseColorTexture = pbrMetallicRoughness.baseColorTexture,
          metallicFactor = pbrMetallicRoughness.metallicFactor,
          roughnessFactor = pbrMetallicRoughness.roughnessFactor,
          metallicRoughnessTexture = pbrMetallicRoughness.metallicRoughnessTexture;

      if (baseColorTexture) {
        material.baseColorTexture = getItemByIdx("textures", baseColorTexture.index || 0, resources, false);
      }

      if (baseColorFactor) {
        material.baseColor = _construct(math.Color, baseColorFactor);
      }

      if (!isUnlit) {
        material = material;
        material.metallicFactor = metallicFactor !== undefined ? metallicFactor : 1;
        material.roughnessFactor = roughnessFactor !== undefined ? roughnessFactor : 1;

        if (metallicRoughnessTexture) {
          material.metallicRoughnessTexture = getItemByIdx("textures", metallicRoughnessTexture.index || 0, resources, false);
        }
      }
    } // break unlit at here, unlit don't need to process the next code


    if (isUnlit) {
      return Promise.resolve(material);
    }

    material = material;

    if (emissiveTexture) {
      material.emissiveTexture = getItemByIdx("textures", emissiveTexture.index || 0, resources, false);
    }

    if (emissiveFactor) {
      material.emissiveColor = _construct(math.Color, emissiveFactor);
    }

    if (normalTexture) {
      var index = normalTexture.index;
          normalTexture.texCoord;
          var scale = normalTexture.scale;
      material = material;
      material.normalTexture = getItemByIdx("textures", index || 0, resources, false);

      if (typeof scale !== undefined) {
        material.normalScale = scale;
      }
    }

    if (occlusionTexture) {
      material = material;
      material.occlusionTexture = getItemByIdx("textures", occlusionTexture.index || 0, resources, false);

      if (occlusionTexture.strength !== undefined) {
        material.occlusionStrength = occlusionTexture.strength;
      }
    }

    if (isSpecular) {
      var _extensions$KHR_mater = extensions.KHR_materials_pbrSpecularGlossiness,
          diffuseFactor = _extensions$KHR_mater.diffuseFactor,
          diffuseTexture = _extensions$KHR_mater.diffuseTexture,
          specularFactor = _extensions$KHR_mater.specularFactor,
          glossinessFactor = _extensions$KHR_mater.glossinessFactor,
          specularGlossinessTexture = _extensions$KHR_mater.specularGlossinessTexture;
      material = material;

      if (diffuseFactor) {
        material.baseColor = _construct(math.Color, diffuseFactor);
      }

      if (diffuseTexture) {
        material.baseColorTexture = getItemByIdx("textures", diffuseTexture.index || 0, resources, false);
      }

      if (specularFactor) {
        material.specularColor = _construct(math.Color, specularFactor);
      }

      if (glossinessFactor !== undefined) {
        material.glossinessFactor = glossinessFactor;
      }

      if (specularGlossinessTexture) {
        material.specularGlossinessTexture = getItemByIdx("textures", specularGlossinessTexture.index || 0, resources, false);
      }
    }

    return Promise.resolve(material);
  } else {
    var techniqueName = gltfMaterial.technique;
    core.Logger.warn("Deprecated: Please use a model that meets the glTF 2.0 specification"); // TODO: support KHR_UNLIT_MATERIAL in the future.

    if (techniqueName === "Texture") {
      var _material = new core.UnlitMaterial(engine);

      var _index = gltfMaterial.values._MainTex[0];
      _material.baseColorTexture = getItemByIdx("textures", _index || 0, resources, false);
      return Promise.resolve(_material);
    }
  }

  return Promise.resolve();
}
/**
 * Parse skin.
 * @param gltfSkin
 * @param resources
 * @private
 */

function parseSkin(gltfSkin, resources) {
  var gltf = resources.gltf,
      buffers = resources.buffers;
  var jointCount = gltfSkin.joints.length; // FIXME: name is null

  var skin = new core.Skin(gltfSkin.name); // parse IBM

  var accessor = gltf.accessors[gltfSkin.inverseBindMatrices];
  var buffer = getAccessorData(gltf, accessor, buffers);
  var MAT4_LENGTH = 16;

  for (var i = 0; i < jointCount; i++) {
    var startIdx = MAT4_LENGTH * i;
    var endIdx = startIdx + MAT4_LENGTH;
    skin.inverseBindMatrices[i] = _construct(math.Matrix, buffer.subarray(startIdx, endIdx));
  } // get joints


  for (var _i3 = 0; _i3 < jointCount; _i3++) {
    var _node = getItemByIdx("nodes", gltfSkin.joints[_i3], resources);

    skin.joints[_i3] = _node.name;
  } // get skeleton


  var node = getItemByIdx("nodes", gltfSkin.skeleton == null ? gltfSkin.joints[0] : gltfSkin.skeleton, resources);
  skin.skeleton = node.name;
  return Promise.resolve(skin);
}

function parsePrimitiveVertex(mesh, primitive, primitiveGroup, gltfPrimitive, gltf, getVertexBufferData, getIndexBufferData, engine) {
  // load vertices
  var i = 0;
  var vertexElements = [];

  for (var attributeSemantic in gltfPrimitive.attributes) {
    var accessorIdx = gltfPrimitive.attributes[attributeSemantic];
    var accessor = gltf.accessors[accessorIdx];
    var stride = getVertexStride(accessor);
    var vertexELement = createVertexElement(gltf, attributeSemantic, accessor, i);
    vertexElements.push(vertexELement);
    var bufferData = getVertexBufferData(attributeSemantic);
    var vertexBuffer = new core.Buffer(engine, core.BufferBindFlag.VertexBuffer, bufferData.byteLength, core.BufferUsage.Static);
    vertexBuffer.setData(bufferData);
    primitive.setVertexBufferBinding(vertexBuffer, stride, i++); // compute bounds

    if (vertexELement.semantic == "POSITION") {
      var position = new math.Vector3();
      var vertexCount = bufferData.length / 3;
      var _mesh$bounds = mesh.bounds,
          min = _mesh$bounds.min,
          max = _mesh$bounds.max;

      for (var _i4 = 0; _i4 < vertexCount; _i4++) {
        var offset = _i4 * 3;
        position.setValue(bufferData[offset], bufferData[offset + 1], bufferData[offset + 2]);
        math.Vector3.min(min, position, min);
        math.Vector3.max(max, position, max);
      }
    }
  }

  primitive.setVertexElements(vertexElements); // load indices

  var indexAccessor = gltf.accessors[gltfPrimitive.indices];
  var indexData = getIndexBufferData();
  var indexCount = indexAccessor.count;
  var indexFormat = getIndexFormat(indexAccessor.componentType);
  var indexByteSize = indexFormat == core.IndexFormat.UInt32 ? 4 : indexFormat == core.IndexFormat.UInt16 ? 2 : 1;
  var indexBuffer = new core.Buffer(engine, core.BufferBindFlag.IndexBuffer, indexCount * indexByteSize, core.BufferUsage.Static);
  indexBuffer.setData(indexData);
  primitive.setIndexBufferBinding(new core.IndexBufferBinding(indexBuffer, indexFormat));
  primitiveGroup.start = 0;
  primitiveGroup.count = indexCount;
  return Promise.resolve(primitive);
}
/**
 * Parse Mesh
 * @param gltfMesh
 * @param resources
 * @private
 */


function parseMesh(gltfMesh, resources) {
  var gltf = resources.gltf,
      buffers = resources.buffers,
      engine = resources.engine;
  var mesh = new core.Mesh(gltfMesh.name); // mesh.type = resources.assetType;
  // parse all primitives then link to mesh
  // TODO: use hash cached primitives

  var primitivePromises = [];
  var groups = [];

  var _loop = function _loop(i) {
    primitivePromises.push(new Promise(function (resolve, reject) {
      var gltfPrimitive = gltfMesh.primitives[i]; // FIXME: use index as primitive's name

      var primitive = new core.Primitive(engine, gltfPrimitive.name || gltfMesh.name || i);
      var subPrimitive = new core.SubPrimitive();
      groups.push(subPrimitive); // primitive.type = resources.assetType;

      subPrimitive.topology = gltfPrimitive.mode == null ? core.PrimitiveTopology.Triangles : gltfPrimitive.mode;

      if (gltfPrimitive.hasOwnProperty("targets")) {
        primitive.targets = [];
        mesh.weights = gltfMesh.weights || new Array(gltfPrimitive.targets.length).fill(0);
      }

      var vertexPromise;

      if (gltfPrimitive.extensions && gltfPrimitive.extensions[HandledExtensions.KHR_draco_mesh_compression]) {
        var extensionParser = extensionParsers.KHR_draco_mesh_compression;
        var extension = gltfPrimitive.extensions[HandledExtensions.KHR_draco_mesh_compression];
        vertexPromise = extensionParser.parse(extension, gltfPrimitive, gltf, buffers).then(function (decodedGeometry) {
          return parsePrimitiveVertex(mesh, primitive, subPrimitive, gltfPrimitive, gltf, function (attributeSemantic) {
            for (var _i6 = 0; _i6 < decodedGeometry.attributes.length; _i6++) {
              if (decodedGeometry.attributes[_i6].name === attributeSemantic) {
                return decodedGeometry.attributes[_i6].array;
              }
            }

            return null;
          }, function () {
            return decodedGeometry.index.array;
          }, resources.engine);
        });
      } else {
        vertexPromise = parsePrimitiveVertex(mesh, primitive, subPrimitive, gltfPrimitive, gltf, function (attributeSemantic) {
          var accessorIdx = gltfPrimitive.attributes[attributeSemantic];
          var accessor = gltf.accessors[accessorIdx];
          return getAccessorData(gltf, accessor, buffers);
        }, function () {
          var indexAccessor = gltf.accessors[gltfPrimitive.indices];
          return getAccessorData(gltf, indexAccessor, buffers);
        }, resources.engine);
      }

      vertexPromise.then(function (processedPrimitive) {
        resolve(processedPrimitive);
      }).catch(function (e) {
        reject(e);
      });
    }));
  };

  for (var i = 0; i < gltfMesh.primitives.length; i++) {
    _loop(i);
  }

  return Promise.all(primitivePromises).then(function (primitives) {
    for (var _i5 = 0; _i5 < primitives.length; _i5++) {
      mesh.primitives.push(primitives[_i5]);
      mesh.groups.push(groups[_i5]);
    }

    return mesh;
  });
}
/**
 * Parse Animation.
 * @param gltfAnimation
 * @param resources
 * @returns {*}
 * @private
 */

function parseAnimation(gltfAnimation, resources) {
  var gltf = resources.gltf,
      buffers = resources.buffers;
  var gltfSamplers = gltfAnimation.samplers || [];
  var gltfChannels = gltfAnimation.channels || [];
  var animationIdx = gltf.animations.indexOf(gltfAnimation);
  var animationClip = new core.AnimationClip(gltfAnimation.name || "Animation" + animationIdx);
  var duration = -1;
  var durationIndex = -1; // parse samplers

  for (var i = 0; i < gltfSamplers.length; i++) {
    var gltfSampler = gltfSamplers[i]; // input

    var inputAccessor = gltf.accessors[gltfSampler.input];
    var outputAccessor = gltf.accessors[gltfSampler.output];
    var input = getAccessorData(gltf, inputAccessor, buffers);
    var output = getAccessorData(gltf, outputAccessor, buffers);
    var outputAccessorSize = getAccessorTypeSize(outputAccessor.type);
    if (outputAccessorSize * input.length !== output.length) outputAccessorSize = output.length / input.length; // TODO: support
    // LINEAR, STEP, CUBICSPLINE

    var samplerInterpolation = core.InterpolationType.LINEAR;

    switch (gltfSampler.interpolation) {
      case "CUBICSPLINE":
        samplerInterpolation = core.InterpolationType.CUBICSPLINE;
        break;

      case "STEP":
        samplerInterpolation = core.InterpolationType.STEP;
        break;
    }

    var maxTime = input[input.length - 1];

    if (maxTime > duration) {
      duration = maxTime;
      durationIndex = i;
    }

    animationClip.addSampler(input, output, outputAccessorSize, samplerInterpolation);
  }

  animationClip.durationIndex = durationIndex;
  animationClip.duration = duration;

  for (var _i7 = 0; _i7 < gltfChannels.length; _i7++) {
    var gltfChannel = gltfChannels[_i7];
    var target = gltfChannel.target;
    var samplerIndex = gltfChannel.sampler;
    var targetNode = getItemByIdx("nodes", target.node, resources);
    var targetPath = TARGET_PATH_MAP[target.path];
    animationClip.addChannel(samplerIndex, targetNode.name, targetPath);
  }

  return Promise.resolve(animationClip);
}
/**
 * Parse the node of glTF.
 * @param gltfNode
 * @param resources
 * @private
 */

function parseNode(gltfNode, resources) {
  // TODO: undefined name?
  var entity = new core.Entity(resources.engine, gltfNode.name || "GLTF_NODE_" + nodeCount++);

  if (gltfNode.hasOwnProperty("matrix")) {
    var m = gltfNode.matrix;
    var mat = new math.Matrix();
    mat.setValueByArray(m);
    var pos = new math.Vector3();
    var scale = new math.Vector3(1, 1, 1);
    var rot = new math.Quaternion();
    mat.decompose(pos, rot, scale);
    entity.transform.position = pos;
    entity.transform.rotationQuaternion = rot;
    entity.transform.scale = scale;
  } else {
    for (var key in TARGET_PATH_MAP) {
      if (gltfNode.hasOwnProperty(key)) {
        var mapKey = TARGET_PATH_MAP[key];

        if (mapKey === "weights") {
          entity[mapKey] = gltfNode[key];
        } else {
          var arr = gltfNode[key];
          var len = arr.length;
          var obj = entity[mapKey];

          if (len === 2) {
            obj.setValue(arr[0], arr[1]);
          } else if (len === 3) {
            obj.setValue(arr[0], arr[1], arr[2]);
          } else if (len === 4) {
            obj.setValue(arr[0], arr[1], arr[2], arr[3]);
          }

          entity[mapKey] = obj;
        }
      }
    }
  }

  if (gltfNode.camera !== undefined) {
    var cameraOptions = resources.gltf.cameras[gltfNode.camera];
    var camera = entity.addComponent(core.Camera);

    if (cameraOptions.type === "orthographic") {
      camera.isOrthographic = true;
      var _cameraOptions$orthog = cameraOptions.orthographic,
          ymag = _cameraOptions$orthog.ymag,
          xmag = _cameraOptions$orthog.xmag,
          zfar = _cameraOptions$orthog.zfar,
          znear = _cameraOptions$orthog.znear;

      if (znear !== undefined) {
        camera.nearClipPlane = znear;
      }

      if (zfar !== undefined) {
        camera.farClipPlane = zfar;
      }

      if (ymag && xmag) {
        camera.orthographicSize = Math.max(ymag, xmag) / 2;
      }

      if (ymag !== undefined && xmag) {
        camera.orthographicSize = xmag / 2;
      }

      if (xmag !== undefined && ymag) {
        camera.orthographicSize = ymag / 2;
      }
    } else {
      var _cameraOptions$perspe = cameraOptions.perspective,
          aspectRatio = _cameraOptions$perspe.aspectRatio,
          yfov = _cameraOptions$perspe.yfov,
          _zfar = _cameraOptions$perspe.zfar,
          _znear = _cameraOptions$perspe.znear;

      if (aspectRatio !== undefined) {
        camera.aspectRatio = aspectRatio;
      }

      if (yfov !== undefined) {
        camera.fieldOfView = yfov;
      }

      if (_zfar !== undefined) {
        camera.farClipPlane = _zfar;
      }

      if (_znear !== undefined) {
        camera.nearClipPlane = _znear;
      }
    }
  }

  if (gltfNode.extensions) {
    if (KHR_lights && gltfNode.extensions.KHR_lights) {
      var lightIdx = gltfNode.extensions.KHR_lights.light;

      if (lightIdx !== undefined) {
        var light = getItemByIdx("lights", lightIdx, resources);

        if (light) {
          var lightCon = entity.addComponent(light.ability);

          _extends(lightCon, light.props);
        }
      }
    }
  }

  return Promise.resolve(entity);
}
/**
 * parse the scene of glTF.
 * @param gltfScene
 * @param resources
 * @returns {{nodes: Array}}
 * @private
 */

function parseScene(gltfScene, resources) {
  var sceneNodes = [];

  for (var i = 0; i < gltfScene.nodes.length; i++) {
    var node = getItemByIdx("nodes", gltfScene.nodes[i], resources);
    sceneNodes.push(node);
  }

  if (gltfScene.extensions) {
    if (KHR_lights && gltfScene.extensions.KHR_lights) {
      var lightIdx = gltfScene.extensions.KHR_lights.light;

      if (lightIdx !== undefined) {
        var light = getItemByIdx("lights", lightIdx, resources);
        if (light) sceneNodes[0].addComponent(light.ability, light.props);
      }
    }
  }

  return Promise.resolve({
    nodes: sceneNodes
  });
}
/**
 * Get content through index.
 * @param name
 * @param idx
 * @param resources
 * @returns {*}
 * @private
 */

function getItemByIdx(name, idx, resources, inverse) {
  if (inverse === void 0) {
    inverse = true;
  }

  var asset = resources.asset;
  var itemIdx = inverse ? asset[name].length - idx - 1 : idx;
  return asset[name][itemIdx];
}
/**
 * Construct scene graph and create Ability according to node configuration.
 * @param resources
 * @private
 */

function buildSceneGraph(resources) {
  var _gltf$scene;

  var asset = resources.asset,
      gltf = resources.gltf;
  var gltfNodes = gltf.nodes || [];
  var gltfMeshes = gltf.meshes;
  asset.defaultScene = getItemByIdx("scenes", (_gltf$scene = gltf.scene) != null ? _gltf$scene : 0, resources);

  for (var i = gltfNodes.length - 1; i >= 0; i--) {
    var gltfNode = gltfNodes[i];
    var node = getItemByIdx("nodes", i, resources);

    if (gltfNode.hasOwnProperty("children")) {
      var children = gltfNode.children || [];

      for (var j = children.length - 1; j >= 0; j--) {
        var childNode = getItemByIdx("nodes", children[j], resources);
        node.addChild(childNode);
      }
    } // link mesh


    if (gltfNode.hasOwnProperty("mesh")) {
      var meshIndex = gltfNode.mesh;
      node.meshIndex = meshIndex;
      var gltfMeshPrimitives = gltfMeshes[meshIndex].primitives;
      var mesh = getItemByIdx("meshes", meshIndex, resources);
      var renderer = void 0;

      if (gltfNode.hasOwnProperty("skin") || mesh.hasOwnProperty("weights")) {
        var skin = getItemByIdx("skins", gltfNode.skin, resources);
        var weights = mesh.weights;
        var skinRenderer = node.addComponent(core.SkinnedMeshRenderer);
        skinRenderer.mesh = mesh;
        skinRenderer.skin = skin;
        skinRenderer.setWeights(weights);
        renderer = skinRenderer;
      } else {
        renderer = node.addComponent(core.MeshRenderer);
        renderer.mesh = mesh;
      }

      for (var _j = 0, m = gltfMeshPrimitives.length; _j < m; _j++) {
        var materialIndex = gltfMeshPrimitives[_j].material;
        mesh.primitives[_j].materialIndex = materialIndex;
        var material = materialIndex !== undefined ? getItemByIdx("materials", materialIndex, resources) : getDefaultMaterial(node.engine);
        renderer.setSharedMaterial(_j, material);
      }
    }
  } //@ts-ignore


  var nodes = asset.defaultScene.nodes;

  if (nodes.length === 1) {
    asset.defaultSceneRoot = nodes[0];
  } else {
    var rootNode = new core.Entity(resources.engine);

    for (var _i8 = 0; _i8 < nodes.length; _i8++) {
      rootNode.addChild(nodes[_i8]);
    }

    asset.defaultSceneRoot = rootNode;
  }

  var animator = asset.defaultSceneRoot.addComponent(core.Animation);
  var animations = asset.animations;

  if (animations) {
    animations.forEach(function (clip) {
      animator.addAnimationClip(clip, clip.name);
    });
  }

  return resources.asset;
}

/**
 * Parse the glb format.
 * @param glb - Binary data
 * @returns GlTF information and bin information in Object glb.
 * @private
 */

function parseGLB(glb) {
  var UINT32_LENGTH = 4;
  var GLB_HEADER_MAGIC = 0x46546c67; // 'glTF'

  var GLB_HEADER_LENGTH = 12;
  var GLB_CHUNK_TYPES = {
    JSON: 0x4e4f534a,
    BIN: 0x004e4942
  };
  var dataView = new DataView(glb); // read header

  var header = {
    magic: dataView.getUint32(0, true),
    version: dataView.getUint32(UINT32_LENGTH, true),
    length: dataView.getUint32(2 * UINT32_LENGTH, true)
  };

  if (header.magic !== GLB_HEADER_MAGIC) {
    console.error("Invalid glb magic number. Expected 0x46546C67, found 0x" + header.magic.toString(16));
    return null;
  } // read main data


  var chunkLength = dataView.getUint32(GLB_HEADER_LENGTH, true);
  var chunkType = dataView.getUint32(GLB_HEADER_LENGTH + UINT32_LENGTH, true); // read glTF json

  if (chunkType !== GLB_CHUNK_TYPES.JSON) {
    console.error("Invalid glb chunk type. Expected 0x004E4942, found 0x" + chunkType.toString(16));
    return null;
  }

  var glTFData = new Uint8Array(glb, GLB_HEADER_LENGTH + 2 * UINT32_LENGTH, chunkLength);
  var gltf = JSON.parse(decodeText(glTFData)); // read all buffers

  var buffers = [];
  var byteOffset = GLB_HEADER_LENGTH + 2 * UINT32_LENGTH + chunkLength;

  while (byteOffset < header.length) {
    chunkLength = dataView.getUint32(byteOffset, true);
    chunkType = dataView.getUint32(byteOffset + UINT32_LENGTH, true);

    if (chunkType !== GLB_CHUNK_TYPES.BIN) {
      console.error("Invalid glb chunk type. Expected 0x004E4942, found 0x" + chunkType.toString(16));
      return null;
    }

    var currentOffset = byteOffset + 2 * UINT32_LENGTH;
    var buffer = glb.slice(currentOffset, currentOffset + chunkLength);
    buffers.push(buffer);
    byteOffset += chunkLength + 2 * UINT32_LENGTH;
  } // start parse glTF


  return {
    gltf: gltf,
    buffers: buffers
  };
}

var _dec$9, _class$9, _temp$4;
(_dec$9 = core.resourceLoader(core.AssetType.Perfab, ["gltf", "glb"]), _dec$9(_class$9 = (_temp$4 = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(GLTFLoader, _Loader);

  function GLTFLoader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Loader.call.apply(_Loader, [this].concat(args)) || this;
    _this.baseUrl = void 0;

    _this.requestGLTF = function (item, resourceManager) {
      return _this.request(item.url, _objectSpread2(_objectSpread2({}, item), {}, {
        type: "json"
      })).then(function (res) {
        return _this._loadGLTFResources(item, res, resourceManager);
      });
    };

    _this.requestGLB = function (item, resourceManager) {
      return _this.request(item.url, _objectSpread2(_objectSpread2({}, item), {}, {
        type: "arraybuffer"
      })).then(parseGLB).then(function (res) {
        return _objectSpread2(_objectSpread2({}, res), {}, {
          baseUrl: item.url,
          resourceManager: resourceManager
        });
      }).then(_this._loadImages);
    };

    _this._loadImages = function (_ref) {
      var gltf = _ref.gltf,
          buffers = _ref.buffers,
          baseUrl = _ref.baseUrl,
          resourceManager = _ref.resourceManager;

      if (gltf.images) {
        return Promise.all(gltf.images.map(function (_ref2) {
          var uri = _ref2.uri,
              bufferViewIndex = _ref2.bufferView,
              mimeType = _ref2.mimeType;

          if (uri) {
            // Use base64 or url.
            return resourceManager.load({
              url: parseRelativeUrl(baseUrl, uri),
              type: core.AssetType.Texture2D
            });
          } else {
            // Use bufferView.
            var bufferView = gltf.bufferViews[bufferViewIndex];
            var bufferData = getBufferData(bufferView, buffers);
            return loadImageBuffer(bufferData, mimeType).then(function (image) {
              var tex = new core.Texture2D(resourceManager.engine, image.width, image.height);
              tex.setImageSource(image);
              tex.generateMipmaps();
              return tex;
            });
          }
        })).then(function (textures) {
          return {
            gltf: gltf,
            buffers: buffers,
            textures: textures
          };
        });
      }

      return Promise.resolve({
        gltf: gltf,
        buffers: buffers
      });
    };

    return _this;
  }

  var _proto = GLTFLoader.prototype;

  _proto.load = function load(item, resourceManager) {
    var _this2 = this;

    return new core.AssetPromise(function (resolve, reject) {
      var requestGLTFResource = _this2.isGLB(item.url) ? _this2.requestGLB : _this2.requestGLTF;
      requestGLTFResource(item, resourceManager).then(function (res) {
        parseGLTF(res, resourceManager.engine).then(function (gltf) {
          resolve(gltf);
        });
      }).catch(function (e) {
        console.error(e);
        reject("Error loading glTF JSON from " + item.url);
      });
    });
  };

  _proto.isGLB = function isGLB(url) {
    return url.substring(url.lastIndexOf(".") + 1) === "glb";
  }
  /**
   * Load resources in gltf.
   * @param gltf
   * @param resourceManager
   */
  ;

  _proto._loadGLTFResources = function _loadGLTFResources(item, gltf, resourceManager) {
    // Buffer must be loaded first, then image.
    return this._loadBuffers(item.url, gltf, resourceManager).then(this._loadImages);
  };

  _proto._loadBuffers = function _loadBuffers(baseUrl, gltf, resourceManager) {
    if (gltf.buffers) {
      return Promise.all(gltf.buffers.map(function (item) {
        if (item instanceof ArrayBuffer) {
          return Promise.resolve(item);
        }

        return resourceManager.load({
          url: parseRelativeUrl(baseUrl, item.uri),
          type: core.AssetType.Buffer
        });
      })).then(function (buffers) {
        return {
          buffers: buffers,
          gltf: gltf,
          baseUrl: baseUrl,
          resourceManager: resourceManager
        };
      });
    }

    return Promise.resolve({
      baseUrl: baseUrl,
      gltf: gltf,
      resourceManager: resourceManager
    });
  };

  return GLTFLoader;
}(core.Loader), _temp$4)) || _class$9);

var _dec$8, _class$8;
(_dec$8 = core.resourceLoader(core.AssetType.JSON, ["json"], false), _dec$8(_class$8 = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(JSONLoader, _Loader);

  function JSONLoader() {
    return _Loader.apply(this, arguments) || this;
  }

  var _proto = JSONLoader.prototype;

  _proto.load = function load(item) {
    return this.request(item.url, _objectSpread2(_objectSpread2({}, item), {}, {
      type: "json"
    }));
  };

  return JSONLoader;
}(core.Loader)) || _class$8);

/**
 *
 * ported from https://github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.khronosTextureContainer.ts
 */
var HEADER_LEN = 12 + 13 * 4; // identifier + header elements (not including key value meta-data pairs)
// load types

var COMPRESSED_2D = 0; // uses a gl.compressedTexImage2D()

function getMipmaps(ktxContainer, loadMipmaps) {
  var mipmaps = []; // initialize width & height for level 1

  var dataOffset = HEADER_LEN + ktxContainer.bytesOfKeyValueData;
  var width = ktxContainer.pixelWidth;
  var height = ktxContainer.pixelHeight;
  var mipmapCount = loadMipmaps ? ktxContainer.numberOfMipmapLevels : 1;

  for (var level = 0; level < mipmapCount; level++) {
    var imageSize = new Int32Array(ktxContainer.buffer, dataOffset, 1)[0]; // size per face, since not supporting array cubemaps

    dataOffset += 4; // size of the image + 4 for the imageSize field

    for (var face = 0; face < ktxContainer.numberOfFaces; face++) {
      var byteArray = new Uint8Array(ktxContainer.buffer, dataOffset, imageSize);
      mipmaps.push({
        data: byteArray,
        width: width,
        height: height
      });
      dataOffset += imageSize;
      dataOffset += 3 - (imageSize + 3) % 4; // add padding for odd sized image
    }

    width = Math.max(1.0, width * 0.5);
    height = Math.max(1.0, height * 0.5);
  }

  return mipmaps;
}
/**
 * Checks if the given data starts with a KTX file identifier.
 * @param data the data to check
 * @returns true if the data is a KTX file or false otherwise
 */


function isValid(data) {
  if (data.byteLength >= 12) {
    // '«', 'K', 'T', 'X', ' ', '1', '1', '»', '\r', '\n', '\x1A', '\n'
    var identifier = new Uint8Array(data, 0, 12);

    if (identifier[0] === 0xab && identifier[1] === 0x4b && identifier[2] === 0x54 && identifier[3] === 0x58 && identifier[4] === 0x20 && identifier[5] === 0x31 && identifier[6] === 0x31 && identifier[7] === 0xbb && identifier[8] === 0x0d && identifier[9] === 0x0a && identifier[10] === 0x1a && identifier[11] === 0x0a) {
      return true;
    }
  }

  return false;
}

function getEngineFormat(internalFormat) {
  switch (internalFormat) {
    // case GLCompressedTextureInternalFormat.RGBA_S3TC_DXT3_EXT:
    // case GLCompressedTextureInternalFormat.RGBA_S3TC_DXT5_EXT:
    // break;
    case core.GLCompressedTextureInternalFormat.RGB_S3TC_DXT1_EXT:
      return core.TextureFormat.DXT1;

    case core.GLCompressedTextureInternalFormat.RGBA_S3TC_DXT5_EXT:
      return core.TextureFormat.DXT5;

    case core.GLCompressedTextureInternalFormat.RGB_ETC1_WEBGL:
      return core.TextureFormat.ETC1_RGB;

    case core.GLCompressedTextureInternalFormat.RGB8_ETC2:
      return core.TextureFormat.ETC2_RGB;

    case core.GLCompressedTextureInternalFormat.RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
      return core.TextureFormat.ETC2_RGBA5;

    case core.GLCompressedTextureInternalFormat.RGBA8_ETC2_EAC:
      return core.TextureFormat.ETC2_RGBA8;

    case core.GLCompressedTextureInternalFormat.RGB_PVRTC_2BPPV1_IMG:
      return core.TextureFormat.PVRTC_RGB2;

    case core.GLCompressedTextureInternalFormat.RGBA_PVRTC_2BPPV1_IMG:
      return core.TextureFormat.PVRTC_RGBA2;

    case core.GLCompressedTextureInternalFormat.RGB_PVRTC_4BPPV1_IMG:
      return core.TextureFormat.PVRTC_RGB4;

    case core.GLCompressedTextureInternalFormat.RGBA_PVRTC_4BPPV1_IMG:
      return core.TextureFormat.PVRTC_RGBA4;

    case core.GLCompressedTextureInternalFormat.RGBA_ASTC_4X4_KHR:
      return core.TextureFormat.ASTC_4x4;

    case core.GLCompressedTextureInternalFormat.RGBA_ASTC_5X5_KHR:
      return core.TextureFormat.ASTC_5x5;

    case core.GLCompressedTextureInternalFormat.RGBA_ASTC_6X6_KHR:
      return core.TextureFormat.ASTC_6x6;

    case core.GLCompressedTextureInternalFormat.RGBA_ASTC_8X8_KHR:
      return core.TextureFormat.ASTC_8x8;

    case core.GLCompressedTextureInternalFormat.RGBA_ASTC_10X10_KHR:
      return core.TextureFormat.ASTC_10x10;

    case core.GLCompressedTextureInternalFormat.RGBA_ASTC_12X12_KHR:
      return core.TextureFormat.ASTC_12x12;

    default:
      var formatName = core.GLCompressedTextureInternalFormat[internalFormat];
      throw new Error("this format is not supported in Oasis Engine: " + formatName);
  }
}
/**
 * for description see https://www.khronos.org/opengles/sdk/tools/KTX/
 * for file layout see https://www.khronos.org/opengles/sdk/tools/KTX/file_format_spec/
 */


var khronosTextureContainerParser = {
  /**
   *
   * @param buffer contents of the KTX container file
   * @param facesExpected should be either 1 or 6, based whether a cube texture or or
   * @param threeDExpected provision for indicating that data should be a 3D texture, not implemented
   * @param textureArrayExpected provision for indicating that data should be a texture array, not implemented
   * @param mapEngineFormat get Oasis Engine native TextureFormat?
   */
  parse: function parse(buffer, facesExpected, withMipmaps, mapEngineFormat) {
    if (mapEngineFormat === void 0) {
      mapEngineFormat = false;
    }

    if (!isValid(buffer)) {
      throw new Error("khronosTextureContainerParser: invalid KTX file, texture missing KTX identifier");
    } // load the reset of the header in native 32 bit uint


    var dataSize = Uint32Array.BYTES_PER_ELEMENT;
    var headerDataView = new DataView(buffer, 12, 13 * dataSize);
    var endianness = headerDataView.getUint32(0, true);
    var littleEndian = endianness === 0x04030201;
    var parsedResult = {
      buffer: buffer,
      glType: headerDataView.getUint32(1 * dataSize, littleEndian),
      // must be 0 for compressed textures
      glTypeSize: headerDataView.getUint32(2 * dataSize, littleEndian),
      // must be 1 for compressed textures
      glFormat: headerDataView.getUint32(3 * dataSize, littleEndian),
      // must be 0 for compressed textures
      glInternalFormat: headerDataView.getUint32(4 * dataSize, littleEndian),
      // the value of arg passed to gl.compressedTexImage2D(,,x,,,,)
      glBaseInternalFormat: headerDataView.getUint32(5 * dataSize, littleEndian),
      // specify GL_RGB, GL_RGBA, GL_ALPHA, etc (un-compressed only)
      pixelWidth: headerDataView.getUint32(6 * dataSize, littleEndian),
      // level 0 value of arg passed to gl.compressedTexImage2D(,,,x,,,)
      pixelHeight: headerDataView.getUint32(7 * dataSize, littleEndian),
      // level 0 value of arg passed to gl.compressedTexImage2D(,,,,x,,)
      pixelDepth: headerDataView.getUint32(8 * dataSize, littleEndian),
      // level 0 value of arg passed to gl.compressedTexImage3D(,,,,,x,,)
      numberOfArrayElements: headerDataView.getUint32(9 * dataSize, littleEndian),
      // used for texture arrays
      numberOfFaces: headerDataView.getUint32(10 * dataSize, littleEndian),
      // used for cubemap textures, should either be 1 or 6
      numberOfMipmapLevels: headerDataView.getUint32(11 * dataSize, littleEndian),
      // number of levels; disregard possibility of 0 for compressed textures
      bytesOfKeyValueData: headerDataView.getUint32(12 * dataSize, littleEndian),
      // the amount of space after the header for meta-data
      // would need to make this more elaborate & adjust checks above to support more than one load type
      loadType: COMPRESSED_2D
    }; // Make sure we have a compressed type.  Not only reduces work, but probably better to let dev know they are not compressing.

    if (parsedResult.glType !== 0) {
      throw new Error("only compressed formats currently supported");
    } else {
      // value of zero is an indication to generate mipmaps @ runtime.  Not usually allowed for compressed, so disregard.
      parsedResult.numberOfMipmapLevels = Math.max(1, parsedResult.numberOfMipmapLevels);
    }

    if (parsedResult.pixelHeight === 0 || parsedResult.pixelDepth !== 0) {
      throw new Error("only 2D textures currently supported");
    }

    if (parsedResult.numberOfArrayElements !== 0) {
      throw new Error("texture arrays not currently supported");
    }

    if (parsedResult.numberOfFaces !== facesExpected) {
      throw new Error("number of faces expected" + facesExpected + ", but found " + parsedResult.numberOfFaces);
    }

    if (withMipmaps) {
      parsedResult.mipmaps = getMipmaps(parsedResult, true);
    }

    if (mapEngineFormat) {
      parsedResult.engineFormat = getEngineFormat(parsedResult.glInternalFormat);
    }

    return parsedResult;
  }
};

function parseSingleKTX(data) {
  var ktx = khronosTextureContainerParser.parse(data, 1, true, true);
  return {
    mipmaps: ktx.mipmaps,
    engineFormat: ktx.engineFormat,
    internalFormat: ktx.glInternalFormat,
    width: ktx.pixelWidth,
    height: ktx.pixelHeight
  };
}
function parseCubeKTX(dataArray) {
  var mipmapsFaces = [];
  var internalFormat;
  var engineFormat;
  var width;
  var height;

  for (var i = 0; i < dataArray.length; i++) {
    var ktx = khronosTextureContainerParser.parse(dataArray[i], 1, true, true);
    mipmapsFaces.push(ktx.mipmaps);

    if (i === 0) {
      width = ktx.pixelWidth;
      height = ktx.pixelHeight;
      internalFormat = ktx.glInternalFormat;
      engineFormat = ktx.engineFormat;
    }
  }

  return {
    mipmapsFaces: mipmapsFaces,
    engineFormat: engineFormat,
    internalFormat: internalFormat,
    width: width,
    height: height
  };
}

var _dec$7, _class$7;
(_dec$7 = core.resourceLoader(core.AssetType.KTXCube, []), _dec$7(_class$7 = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(KTXCubeLoader, _Loader);

  function KTXCubeLoader() {
    return _Loader.apply(this, arguments) || this;
  }

  var _proto = KTXCubeLoader.prototype;

  _proto.load = function load(item, resourceManager) {
    var _this = this;

    return new core.AssetPromise(function (resolve, reject) {
      Promise.all(item.urls.map(function (url) {
        return _this.request(url, _objectSpread2(_objectSpread2({}, item), {}, {
          type: "arraybuffer"
        }));
      })).then(function (data) {
        var parsedData = parseCubeKTX(data);
        var width = parsedData.width,
            mipmapsFaces = parsedData.mipmapsFaces,
            engineFormat = parsedData.engineFormat;
        var mipmap = mipmapsFaces[0].length > 1;
        var texture = new core.TextureCubeMap(resourceManager.engine, width, engineFormat, mipmap);

        for (var face = 0; face < 6; face++) {
          var length = mipmapsFaces[face].length;

          for (var miplevel = 0; miplevel < length; miplevel++) {
            var _mipmapsFaces$face$mi = mipmapsFaces[face][miplevel],
                _data = _mipmapsFaces$face$mi.data,
                _width = _mipmapsFaces$face$mi.width,
                height = _mipmapsFaces$face$mi.height;
            texture.setPixelBuffer(core.TextureCubeFace.PositiveX + face, _data, miplevel, 0, 0, _width, height);
          }
        }

        resolve(texture);
      }).catch(function (e) {
        reject(e);
      });
    });
  };

  return KTXCubeLoader;
}(core.Loader)) || _class$7);

var _dec$6, _class$6;
(_dec$6 = core.resourceLoader(core.AssetType.KTX, ["ktx"]), _dec$6(_class$6 = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(KTXLoader, _Loader);

  function KTXLoader() {
    return _Loader.apply(this, arguments) || this;
  }

  var _proto = KTXLoader.prototype;

  _proto.load = function load(item, resourceManager) {
    var _this = this;

    return new core.AssetPromise(function (resolve, reject) {
      _this.request(item.url, _objectSpread2(_objectSpread2({}, item), {}, {
        type: "arraybuffer"
      })).then(function (bin) {
        var parsedData = parseSingleKTX(bin);
        var width = parsedData.width,
            height = parsedData.height,
            mipmaps = parsedData.mipmaps,
            engineFormat = parsedData.engineFormat;
        var mipmap = mipmaps.length > 1;
        var texture = new core.Texture2D(resourceManager.engine, width, height, engineFormat, mipmap);

        for (var miplevel = 0; miplevel < mipmaps.length; miplevel++) {
          var _mipmaps$miplevel = mipmaps[miplevel],
              _width = _mipmaps$miplevel.width,
              _height = _mipmaps$miplevel.height,
              data = _mipmaps$miplevel.data;
          texture.setPixelBuffer(data, miplevel, 0, 0, _width, _height);
        }

        resolve(texture);
      }).catch(function (e) {
        reject(e);
      });
    });
  };

  return KTXLoader;
}(core.Loader)) || _class$6);

var _dec$5, _class$5;
(_dec$5 = core.resourceLoader(core.AssetType.Texture2D, ["png", "jpg", "webp", "jpeg"]), _dec$5(_class$5 = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(Texture2DLoader, _Loader);

  function Texture2DLoader() {
    return _Loader.apply(this, arguments) || this;
  }

  var _proto = Texture2DLoader.prototype;

  _proto.load = function load(item, resourceManager) {
    var _this = this;

    return new core.AssetPromise(function (resolve, reject) {
      _this.request(item.url, _objectSpread2(_objectSpread2({}, item), {}, {
        type: "image"
      })).then(function (image) {
        var texture = new core.Texture2D(resourceManager.engine, image.width, image.height);
        if (!texture._glTexture) return;
        texture.setImageSource(image);
        texture.generateMipmaps();

        if (item.url.indexOf("data:") !== 0) {
          var splitPath = item.url.split("/");
          texture.name = splitPath[splitPath.length - 1];
        }

        resolve(texture);
      }).catch(function (e) {
        reject(e);
      });
    });
  };

  return Texture2DLoader;
}(core.Loader)) || _class$5);

var _dec$4, _class$4;
(_dec$4 = core.resourceLoader(core.AssetType.TextureCube, [""]), _dec$4(_class$4 = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(TextureCubeLoader, _Loader);

  function TextureCubeLoader() {
    return _Loader.apply(this, arguments) || this;
  }

  var _proto = TextureCubeLoader.prototype;

  _proto.load = function load(item, resourceManager) {
    var _this = this;

    return new core.AssetPromise(function (resolve, reject) {
      Promise.all(item.urls.map(function (url) {
        return _this.request(url, _objectSpread2(_objectSpread2({}, item), {}, {
          type: "image"
        }));
      })).then(function (images) {
        var _images$ = images[0],
            width = _images$.width,
            height = _images$.height;

        if (width !== height) {
          console.error("The cube texture must have the same width and height");
          return;
        }

        var tex = new core.TextureCubeMap(resourceManager.engine, width);
        if (!tex._glTexture) return;

        for (var faceIndex = 0; faceIndex < 6; faceIndex++) {
          tex.setImageSource(core.TextureCubeFace.PositiveX + faceIndex, images[faceIndex], 0);
        }

        tex.generateMipmaps();
        resolve(tex);
      }).catch(function (e) {
        reject(e);
      });
    });
  };

  return TextureCubeLoader;
}(core.Loader)) || _class$4);

/**
 * @deprecated
 * Temporarily only for editor use.
 * Remove when editor finish change from gltf to prefab.
 */
var GLTFModel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(GLTFModel, _Component);

  function GLTFModel(entity) {
    var _this;

    _this = _Component.call(this, entity) || this;
    _this._animator = void 0;
    _this.animationsNames = void 0;
    _this._asset = void 0;
    _this.GLTFNode = void 0;
    _this._loop = void 0;
    _this._autoPlay = void 0;
    _this._hasBuiltNode = false;
    return _this;
  }
  /**
   * Init.
   * @param props - Init props
   */


  var _proto = GLTFModel.prototype;

  _proto.init = function init(props) {
    var _props$asset = props.asset,
        asset = _props$asset === void 0 ? null : _props$asset,
        autoPlay = props.autoPlay,
        loop = props.loop,
        isClone = props.isClone;

    if (isClone) {
      var rootName = props.gltfRootName;

      if (rootName) {
        this.GLTFNode = this.entity.findByName(rootName);
      }
    }

    if (!this.GLTFNode) {
      var _rootName = "GLTF-" + Date.now();

      props.gltfRootName = _rootName;
      this.GLTFNode = this.entity.createChild(_rootName);
      this._hasBuiltNode = false;
    } else {
      this._hasBuiltNode = true;
    }

    this.asset = asset;
    this.loop = loop;
    this.autoPlay = autoPlay;
  }
  /**
   * @override
   */
  ;

  _proto._onEnable = function _onEnable() {
    this.GLTFNode && (this.GLTFNode.isActive = true);
  }
  /**
   * @override
   */
  ;

  _proto._onDisable = function _onDisable() {
    this.GLTFNode && (this.GLTFNode.isActive = false);
  };

  _createClass(GLTFModel, [{
    key: "asset",
    get: function get() {
      return this._asset;
    },
    set: function set(value) {
      if (value && value.defaultSceneRoot === this.GLTFNode) {
        return;
      }

      if (!this._hasBuiltNode) {
        this.GLTFNode.clearChildren();

        if (value !== null) {
          if (this.GLTFNode) {
            this.GLTFNode.destroy();
          }

          this.GLTFNode = value.defaultSceneRoot.clone();
          this._animator = this.GLTFNode.getComponent(core.Animation);
          this.entity.addChild(this.GLTFNode);
        }
      }

      this._asset = value;
    }
  }, {
    key: "animator",
    get: function get() {
      return this._animator;
    }
  }, {
    key: "autoPlay",
    get: function get() {
      return this._autoPlay;
    },
    set: function set(value) {
      if (this._animator) {
        // Play bone animation.
        if (value) {
          this._animator.playAnimationClip(value, {
            wrapMode: this._loop
          });
        } else {
          this._animator.stop(false);
        }
      }

      this._autoPlay = value;
    }
  }, {
    key: "loop",
    get: function get() {
      return this._loop;
    },
    set: function set(value) {
      if (this._animator && this.autoPlay) {
        // Play bone animation
        this._animator.playAnimationClip(this._autoPlay, {
          wrapMode: value
        });
      }

      this._loop = value;
    }
  }]);

  return GLTFModel;
}(core.Component);

var PluginManager = /*#__PURE__*/function () {
  function PluginManager() {
    this.registeredPlugins = new Set();
    this.plugins = [];
  }

  var _proto = PluginManager.prototype;

  _proto.register = function register(plugin) {
    this.registeredPlugins.add(plugin);
  };

  _proto.boot = function boot(oasis) {
    for (var _iterator = _createForOfIteratorHelperLoose(this.registeredPlugins.values()), _step; !(_step = _iterator()).done;) {
      var plugin = _step.value;

      if (typeof plugin === "function") {
        plugin = plugin(oasis);
      }

      this.plugins.push(plugin);
    }
  };

  _proto.reset = function reset() {
    this.registeredPlugins.clear();
    this.plugins = [];
  };

  _proto.nodeAdded = function nodeAdded(entity) {
    this.delegateMethod("nodeAdded", entity);
  };

  _proto.delegateMethod = function delegateMethod(name) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.plugins.forEach(function (plugin) {
      return plugin[name] && plugin[name].apply(plugin, args);
    });
  };

  return PluginManager;
}();
function pluginHook(options) {
  return function (target, propertyName, descriptor) {
    var method = descriptor.value;

    descriptor.value = function () {
      var _this$oasis$pluginMan,
          _this = this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      options.before && (_this$oasis$pluginMan = this.oasis.pluginManager).delegateMethod.apply(_this$oasis$pluginMan, [options.before].concat(args));
      return Promise.resolve(method.apply(this, arguments)).then(function (returnObj) {
        options.after && _this.oasis.pluginManager.delegateMethod(options.after, returnObj);
        return returnObj;
      });
    };
  };
}

function switchElementsIndex(elements, currentIndex, targetIndex) {
  if (currentIndex === targetIndex || targetIndex === null || targetIndex === undefined) {
    return;
  }

  var _ref = [elements[targetIndex], elements[currentIndex]];
  elements[currentIndex] = _ref[0];
  elements[targetIndex] = _ref[1];
}
function isAsset(config) {
  return config && config.type === "asset";
}
function getAllGetters(obj) {
  var result = [];
  var prototype = Object.getPrototypeOf(obj);
  var prototype_property_descriptors = Object.getOwnPropertyDescriptors(prototype);

  for (var _i = 0, _Object$entries = Object.entries(prototype_property_descriptors); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i],
        property = _Object$entries$_i[0],
        descriptor = _Object$entries$_i[1];

    if (typeof descriptor.get === "function") {
      result.push(property);
    }
  }

  return result;
}

var SchemaResource = /*#__PURE__*/function () {
  var _proto = SchemaResource.prototype;

  _proto.setMeta = function setMeta() {};

  function SchemaResource(resourceManager, _resource) {
    this.resourceManager = resourceManager;
    this._resource = _resource;
    this._meta = {};
    this._attachedResources = [];
    this.setMeta();
  }

  _proto.loadWithAttachedResources = function loadWithAttachedResources(resourceLoader, assetConfig, oasis) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      _this.load(resourceLoader, assetConfig, oasis).then(function () {
        resolve({
          resources: [_this],
          structure: {
            index: 0,
            props: {}
          }
        });
      }).catch(function (e) {
        reject(e);
      });
    });
  };

  _proto.getProps = function getProps() {
    return {};
  };

  _proto.bind = function bind() {};

  _proto.attach = function attach() {};

  _proto.update = function update(key, value) {
    if (isAsset(value)) {
      var resource = this.resourceManager.get(value.id);

      if (resource) {
        this._resource[key] = resource.resource;
      } else {
        core.Logger.warn("SchemaResource: " + this.meta.name + " can't find asset, which id is: " + value.id);
      }
    } else {
      this._resource[key] = value;
    }
  };

  _proto.updateMeta = function updateMeta(key, value) {
    this._meta[key] = value;
  };

  _proto.onDestroy = function onDestroy() {};

  _createClass(SchemaResource, [{
    key: "resource",
    get:
    /**
     * Resource
     */
    function get() {
      return this._resource;
    }
  }, {
    key: "meta",
    get: function get() {
      return this._meta;
    }
  }, {
    key: "attachedResources",
    get: function get() {
      return this._attachedResources;
    }
  }]);

  return SchemaResource;
}();

var TextureResource = /*#__PURE__*/function (_SchemaResource) {
  _inheritsLoose(TextureResource, _SchemaResource);

  function TextureResource() {
    return _SchemaResource.apply(this, arguments) || this;
  }

  var _proto = TextureResource.prototype;

  _proto.load = function load(resourceManager, assetConfig, oasis) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var _assetConfig$props, _assetConfig$props$co, _url;

      var url;
      var assetType = core.AssetType.Texture2D;

      if (_this.resourceManager.useCompressedTexture && assetConfig !== null && assetConfig !== void 0 && (_assetConfig$props = assetConfig.props) !== null && _assetConfig$props !== void 0 && (_assetConfig$props$co = _assetConfig$props.compression) !== null && _assetConfig$props$co !== void 0 && _assetConfig$props$co.compressions.length) {
        var rhi = oasis.engine._hardwareRenderer;
        var compressions = assetConfig.props.compression.compressions;

        for (var i = 0; i < compressions.length; i++) {
          var compression = compressions[i];

          if (compression.container === "ktx" && rhi.canIUse(core.GLCapabilityType[compression.type])) {
            url = compression.url;
            assetType = core.AssetType.KTX;
            break;
          }
        }
      }

      url = (_url = url) != null ? _url : assetConfig.url;
      resourceManager.load({
        url: url,
        type: assetType
      }).then(function (res) {
        _this._resource = res;
        resolve(_this);
      }).catch(function (e) {
        reject(e);
      });
    });
  };

  _proto.setMeta = function setMeta() {
    if (this.resource) {
      this._meta.name = this.resource.name;

      if (this.resource.image) {
        this._meta.url = this.resource.image.src;
      }
    }
  };

  return TextureResource;
}(SchemaResource);

var BlinnPhongMaterialResource = /*#__PURE__*/function (_SchemaResource) {
  _inheritsLoose(BlinnPhongMaterialResource, _SchemaResource);

  function BlinnPhongMaterialResource() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _SchemaResource.call.apply(_SchemaResource, [this].concat(args)) || this;
    _this.configProps = void 0;
    return _this;
  }

  var _proto = BlinnPhongMaterialResource.prototype;

  _proto.load = function load(resourceManager, assetConfig) {
    var _this2 = this;

    return new Promise(function (resolve) {
      var assetObj = new core.BlinnPhongMaterial(resourceManager.engine);
      _this2.configProps = assetConfig.props;
      _this2._resource = assetObj;

      for (var k in _this2.configProps) {
        if (!isAsset(_this2.configProps[k])) {
          assetObj[k] = _this2.configProps[k];
        }
      }

      _this2.setMeta();

      resolve(_this2);
    });
  };

  _proto.loadWithAttachedResources = function loadWithAttachedResources(resourceManager, assetConfig) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var loadPromise;

      if (assetConfig.resource instanceof core.BlinnPhongMaterial) {
        loadPromise = new Promise(function (resolve) {
          _this3._resource = assetConfig.resource;

          _this3.setMeta();

          resolve(_this3);
        });
      } else if (assetConfig.props) {
        loadPromise = _this3.load(resourceManager, assetConfig);
      } else {
        reject("Load BlinnPhongMaterial Error");
      }

      if (loadPromise) {
        loadPromise.then(function () {
          var result = {
            resources: [_this3],
            structure: {
              index: 0,
              props: {}
            }
          };
          var material = _this3._resource;
          getAllGetters(_this3._resource).forEach(function (attr) {
            if (!(material[attr] instanceof core.Texture)) return;
            var textureResource = new TextureResource(_this3.resourceManager, material[attr]);

            _this3.attachedResources.push(textureResource);

            result.resources.push(textureResource);
            result.structure.props[attr] = {
              index: result.resources.length - 1
            };
          });
          resolve(result);
        });
      }
    });
  };

  _proto.setMeta = function setMeta() {
    if (this.resource) {
      this.meta.name = this.resource.name;
    }
  };

  _proto.bind = function bind() {
    var _this4 = this;

    var resource = this._resource;
    Object.keys(this.configProps).forEach(function (attr) {
      var value = _this4.configProps[attr];

      if (isAsset(value)) {
        var textureResource = _this4.resourceManager.get(value.id);

        if (textureResource && textureResource instanceof TextureResource) {
          resource[attr] = textureResource.resource;

          _this4._attachedResources.push(textureResource);
        } else {
          resource[attr] = null;
          core.Logger.warn("BlinnPhongMaterialResource: " + _this4.meta.name + " can't find asset \"" + attr + "\", which id is: " + value.id);
        }
      } else {
        resource[attr] = value;
      }
    });
  };

  return BlinnPhongMaterialResource;
}(SchemaResource);

var PBRMaterialResource = /*#__PURE__*/function (_SchemaResource) {
  _inheritsLoose(PBRMaterialResource, _SchemaResource);

  function PBRMaterialResource() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _SchemaResource.call.apply(_SchemaResource, [this].concat(args)) || this;
    _this.configProps = void 0;
    return _this;
  }

  var _proto = PBRMaterialResource.prototype;

  _proto.load = function load(resourceManager, assetConfig) {
    var _this2 = this;

    return new Promise(function (resolve) {
      var assetObj = new core.PBRMaterial(resourceManager.engine);
      _this2.configProps = assetConfig.props;

      for (var k in _this2.configProps) {
        if (!isAsset(_this2.configProps[k])) {
          assetObj[k] = _this2.configProps[k];
        }
      }

      _this2._resource = assetObj;

      _this2.setMeta();

      resolve(_this2);
    });
  };

  _proto.loadWithAttachedResources = function loadWithAttachedResources(resourceManager, assetConfig) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var loadPromise;

      if (assetConfig.resource instanceof core.PBRMaterial) {
        loadPromise = new Promise(function (resolve) {
          _this3._resource = assetConfig.resource;

          _this3.setMeta();

          resolve(_this3);
        });
      } else if (assetConfig.props) {
        loadPromise = _this3.load(resourceManager, assetConfig);
      } else {
        reject("Load PBRMaterial Error");
      }

      if (loadPromise) {
        loadPromise.then(function () {
          var result = {
            resources: [_this3],
            structure: {
              index: 0,
              props: {}
            }
          };
          var material = _this3._resource;
          getAllGetters(_this3._resource).forEach(function (attr) {
            if (!(material[attr] instanceof core.Texture)) return;
            var textureResource = new TextureResource(_this3.resourceManager, material[attr]);

            _this3.attachedResources.push(textureResource);

            result.resources.push(textureResource);
            result.structure.props[attr] = {
              index: result.resources.length - 1
            };
          });
          resolve(result);
        });
      }
    });
  };

  _proto.setMeta = function setMeta() {
    if (this.resource) {
      this.meta.name = this.resource.name;
    }
  };

  _proto.getProps = function getProps() {
    var _this4 = this;

    var result = {};
    var props = getAllGetters(this.resource);
    props.forEach(function (prop) {
      return result[prop] = _this4.resource[prop];
    });
    return result;
  };

  _proto.bind = function bind() {
    var _this5 = this;

    var resource = this._resource;
    Object.keys(this.configProps).forEach(function (attr) {
      var value = _this5.configProps[attr];

      if (isAsset(value)) {
        var textureResource = _this5.resourceManager.get(value.id);

        if (textureResource && textureResource instanceof TextureResource) {
          resource[attr] = textureResource.resource;

          _this5._attachedResources.push(textureResource);
        } else {
          resource[attr] = null;
          core.Logger.warn("PBRMaterialResource: " + _this5.meta.name + " can't find asset \"" + attr + "\", which id is: " + value.id);
        }
      } else {
        resource[attr] = value;
      }
    });
  };

  return PBRMaterialResource;
}(SchemaResource);

var PBRSpecularMaterialResource = /*#__PURE__*/function (_SchemaResource) {
  _inheritsLoose(PBRSpecularMaterialResource, _SchemaResource);

  function PBRSpecularMaterialResource() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _SchemaResource.call.apply(_SchemaResource, [this].concat(args)) || this;
    _this.configProps = void 0;
    return _this;
  }

  var _proto = PBRSpecularMaterialResource.prototype;

  _proto.load = function load(resourceManager, assetConfig) {
    var _this2 = this;

    return new Promise(function (resolve) {
      var assetObj = new core.PBRSpecularMaterial(resourceManager.engine);
      _this2.configProps = assetConfig.props;
      _this2._resource = assetObj;

      for (var k in _this2.configProps) {
        if (!isAsset(_this2.configProps[k])) {
          assetObj[k] = _this2.configProps[k];
        }
      }

      _this2.setMeta();

      resolve(_this2);
    });
  };

  _proto.loadWithAttachedResources = function loadWithAttachedResources(resourceManager, assetConfig) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var loadPromise;

      if (assetConfig.resource instanceof core.PBRSpecularMaterial) {
        loadPromise = new Promise(function (resolve) {
          _this3._resource = assetConfig.resource;

          _this3.setMeta();

          resolve(_this3);
        });
      } else if (assetConfig.props) {
        loadPromise = _this3.load(resourceManager, assetConfig);
      } else {
        reject("Load PBRSpecularMaterial Error");
      }

      if (loadPromise) {
        loadPromise.then(function () {
          var result = {
            resources: [_this3],
            structure: {
              index: 0,
              props: {}
            }
          };
          var material = _this3._resource;
          getAllGetters(_this3._resource).forEach(function (attr) {
            if (!(material[attr] instanceof core.Texture)) return;
            var textureResource = new TextureResource(_this3.resourceManager, material[attr]);

            _this3.attachedResources.push(textureResource);

            result.resources.push(textureResource);
            result.structure.props[attr] = {
              index: result.resources.length - 1
            };
          });
          resolve(result);
        });
      }
    });
  };

  _proto.setMeta = function setMeta() {
    if (this.resource) {
      this.meta.name = this.resource.name;
    }
  };

  _proto.getProps = function getProps() {
    var _this4 = this;

    var result = {};
    var props = getAllGetters(this.resource);
    props.forEach(function (prop) {
      return result[prop] = _this4.resource[prop];
    });
    return result;
  };

  _proto.bind = function bind() {
    var _this5 = this;

    var resource = this._resource;
    Object.keys(this.configProps).forEach(function (attr) {
      var value = _this5.configProps[attr];

      if (isAsset(value)) {
        var textureResource = _this5.resourceManager.get(value.id);

        if (textureResource && textureResource instanceof TextureResource) {
          resource[attr] = textureResource.resource;

          _this5._attachedResources.push(textureResource);
        } else {
          resource[attr] = null;
          core.Logger.warn("PBRSpecularMaterialResource: " + _this5.meta.name + " can't find asset \"" + attr + "\", which id is: " + value.id);
        }
      } else {
        resource[attr] = value;
      }
    });
  };

  return PBRSpecularMaterialResource;
}(SchemaResource);

var UnlitMaterialResource = /*#__PURE__*/function (_SchemaResource) {
  _inheritsLoose(UnlitMaterialResource, _SchemaResource);

  function UnlitMaterialResource() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _SchemaResource.call.apply(_SchemaResource, [this].concat(args)) || this;
    _this.configProps = void 0;
    return _this;
  }

  var _proto = UnlitMaterialResource.prototype;

  _proto.load = function load(resourceManager, assetConfig) {
    var _this2 = this;

    return new Promise(function (resolve) {
      var assetObj = new core.UnlitMaterial(resourceManager.engine);
      _this2.configProps = assetConfig.props;

      for (var k in _this2.configProps) {
        if (!isAsset(_this2.configProps[k])) {
          assetObj[k] = _this2.configProps[k];
        }
      }

      _this2._resource = assetObj;

      _this2.setMeta();

      resolve(_this2);
    });
  };

  _proto.loadWithAttachedResources = function loadWithAttachedResources(resourceManager, assetConfig) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var loadPromise;

      if (assetConfig.resource instanceof core.UnlitMaterial) {
        loadPromise = new Promise(function (resolve) {
          _this3._resource = assetConfig.resource;

          _this3.setMeta();

          resolve(_this3);
        });
      } else if (assetConfig.props) {
        loadPromise = _this3.load(resourceManager, assetConfig);
      } else {
        reject("Load PBRMaterial Error");
      }

      if (loadPromise) {
        loadPromise.then(function () {
          var result = {
            resources: [_this3],
            structure: {
              index: 0,
              props: {}
            }
          };
          var material = _this3._resource;
          getAllGetters(_this3._resource).forEach(function (attr) {
            if (!(material[attr] instanceof core.Texture)) return;
            var textureResource = new TextureResource(_this3.resourceManager, material[attr]);

            _this3.attachedResources.push(textureResource);

            result.resources.push(textureResource);
            result.structure.props[attr] = {
              index: result.resources.length - 1
            };
          });
          resolve(result);
        });
      }
    });
  };

  _proto.setMeta = function setMeta() {
    if (this.resource) {
      this.meta.name = this.resource.name;
    }
  };

  _proto.getProps = function getProps() {
    var _this4 = this;

    var result = {};
    var props = getAllGetters(this.resource);
    props.forEach(function (prop) {
      return result[prop] = _this4.resource[prop];
    });
    return result;
  };

  _proto.bind = function bind() {
    var _this5 = this;

    var resource = this._resource;
    Object.keys(this.configProps).forEach(function (attr) {
      var value = _this5.configProps[attr];

      if (isAsset(value)) {
        var textureResource = _this5.resourceManager.get(value.id);

        if (textureResource && textureResource instanceof TextureResource) {
          resource[attr] = textureResource.resource;

          _this5._attachedResources.push(textureResource);
        } else {
          resource[attr] = null;
          core.Logger.warn("PBRMaterialResource: " + _this5.meta.name + " can't find asset \"" + attr + "\", which id is: " + value.id);
        }
      } else {
        resource[attr] = value;
      }
    });
  };

  return UnlitMaterialResource;
}(SchemaResource);

var GLTFResource = /*#__PURE__*/function (_SchemaResource) {
  _inheritsLoose(GLTFResource, _SchemaResource);

  function GLTFResource() {
    return _SchemaResource.apply(this, arguments) || this;
  }

  var _proto = GLTFResource.prototype;

  _proto.load = function load(resourceManager, assetConfig, oasis) {
    var _assetConfig$props,
        _this = this;

    if (!!((_assetConfig$props = assetConfig.props) !== null && _assetConfig$props !== void 0 && _assetConfig$props.compression)) {
      glTFDracoMeshCompression.init();
    }

    return resourceManager.load({
      url: assetConfig.url,
      type: core.AssetType.Perfab
    }).then(function (res) {
      var gltf = res;

      if (assetConfig.props) {
        gltf.newMaterial = assetConfig.props.newMaterial;
      }

      _this._resource = gltf;
    });
  };

  _proto.loadWithAttachedResources = function loadWithAttachedResources(resourceManager, assetConfig, oasis) {
    var _this2 = this;

    return new Promise(function (resolve) {
      _this2.load(resourceManager, assetConfig, oasis).then(function () {
        var gltf = _this2.resource;
        var materials = gltf.materials;
        var loadPromises = [];
        var result = {
          resources: [_this2],
          structure: {
            index: 0,
            props: {
              newMaterial: []
            }
          }
        };

        for (var i = 0; i < materials.length; i++) {
          var material = materials[i];
          var materialResource = null;
          var type = "";

          if (material instanceof core.PBRMaterial) {
            materialResource = new PBRMaterialResource(_this2.resourceManager);
            type = "PBRMaterial";
          } else if (material instanceof core.UnlitMaterial) {
            materialResource = new UnlitMaterialResource(_this2.resourceManager);
            type = "UnlitMaterial";
          } else if (material instanceof core.PBRSpecularMaterial) {
            materialResource = new PBRSpecularMaterialResource(_this2.resourceManager);
            type = "PBRSpecularMaterial";
          } else {
            materialResource = new BlinnPhongMaterialResource(_this2.resourceManager);
            type = "BlinnPhongMaterial";
          }

          _this2._attachedResources.push(materialResource);

          loadPromises.push(materialResource.loadWithAttachedResources(resourceManager, {
            type: type,
            name: material.name,
            resource: material
          }));
        }

        Promise.all(loadPromises).then(function (res) {
          var newMaterial = result.structure.props.newMaterial;
          res.forEach(function (mat) {
            var matStructure = mat.structure;
            var matResource = mat.resources[matStructure.index];
            result.resources.push(matResource);
            matStructure.index = result.resources.length - 1;

            for (var key in matStructure.props) {
              if (matStructure.props.hasOwnProperty(key)) {
                var textureStructure = matStructure.props[key];
                var textureResource = mat.resources[textureStructure.index];
                result.resources.push(textureResource);
                textureStructure.index = result.resources.length - 1;
              }
            }

            newMaterial.push(matStructure);
          });
          resolve(result);
        });
      });
    });
  };

  _proto.setMeta = function setMeta(assetConfig) {
    if (assetConfig) {
      this.meta.name = assetConfig.name;
    }
  };

  _proto.bind = function bind() {
    var resource = this._resource;
    this.bindMaterials(resource.newMaterial);
  };

  _proto.update = function update(key, value) {
    if (key === "newMaterial") {
      this.bindMaterials(value);
    } else {
      this._resource[key] = value;
    }
  };

  _proto.bindMaterials = function bindMaterials(materials) {
    if (!materials || !materials.length) {
      return;
    }

    var gltf = this._resource;
    var meshes = gltf.meshes;

    for (var i = 0; i < materials.length; i++) {
      var mtlResource = this.resourceManager.get(materials[i].id);

      if (mtlResource) {
        this._attachedResources.push(mtlResource);

        gltf.materials[i] = mtlResource.resource;
      } else {
        core.Logger.warn("GLTFResource: " + this.meta.name + " can't find asset \"material\", which id is: " + materials[i].id);
      }
    }

    for (var j = 0; j < meshes.length; j++) {
      var node = this.getNodeByMeshIndex(gltf.nodes, meshes.length - 1 - j);

      if (node) {
        for (var k = 0; k < meshes[j].primitives.length; k++) {
          var primitive = meshes[j].primitives[k];
          var meshRenderer = node.getComponent(core.MeshRenderer);
          var material = gltf.materials[gltf.materials.length - 1 - primitive.materialIndex];

          if (meshRenderer && material && material instanceof core.Material) {
            meshRenderer.setSharedMaterial(k, material);
          }
        }
      }
    }
  };

  _proto.getNodeByMeshIndex = function getNodeByMeshIndex(nodes, index) {
    for (var i = 0; i <= nodes.length; i++) {
      var node = nodes[i];

      if (node.meshIndex === index) {
        return node;
      }
    }

    return null;
  };

  return GLTFResource;
}(SchemaResource);

var scriptAbility = {};
function script(name) {
  return function (target) {
    scriptAbility[name] = target;
  };
}
var ScriptResource = /*#__PURE__*/function (_SchemaResource) {
  _inheritsLoose(ScriptResource, _SchemaResource);

  function ScriptResource() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _SchemaResource.call.apply(_SchemaResource, [this].concat(args)) || this;
    _this.isInit = false;
    return _this;
  }

  var _proto = ScriptResource.prototype;

  _proto.initScriptContext = function initScriptContext() {
    if (this.isInit) {
      return;
    }

    this.isInit = true;
    wechatAdapter.window.__o3_script_context__ = {
      o3: Parser._components["o3"],
      script: function script(name) {
        return function (target) {
          scriptAbility[name] = target;
        };
      }
    };
  };

  _proto.load = function load(resourceLoader, assetConfig, oasis) {
    var _this2 = this;

    this.initScriptContext();
    return new Promise(function (resolve) {
      var config = assetConfig;
      var scripts = config.props.scripts;

      if (!_this2.resourceManager.isLocal) {
        var scriptDom = wechatAdapter.document.createElement("script");
        scriptDom.crossOrigin = "anonymous";

        _this2.setMeta(assetConfig);

        scriptDom.onload = function () {
          var o3Scripts = wechatAdapter.window.o3Scripts;

          for (var i = 0; i < scripts.length; i++) {
            var name = scripts[i].name;
            _this2._resource = o3Scripts && o3Scripts[name];
            scriptAbility[name] = _this2._resource;
          }

          resolve(_this2);
        };

        scriptDom.src = assetConfig.url;
        wechatAdapter.document.body.appendChild(scriptDom);
      } else {
        for (var i = 0; i < scripts.length; i++) {
          var _oasis$options;

          var name = scripts[i].name;
          scriptAbility[name] = (_oasis$options = oasis.options) === null || _oasis$options === void 0 ? void 0 : _oasis$options.scripts[name];
        }

        resolve(_this2);
      }
    });
  };

  _proto.setMeta = function setMeta(assetConfig) {
    if (assetConfig) {
      this._meta.name = assetConfig.name;
      this._meta.url = assetConfig.url;
      this._meta.source = assetConfig.source;
    }
  };

  return ScriptResource;
}(SchemaResource);

var imageOrderMap = {
  px: 0,
  nx: 1,
  py: 2,
  ny: 3,
  pz: 4,
  nz: 5
};
var TextureCubeMapResource = /*#__PURE__*/function (_SchemaResource) {
  _inheritsLoose(TextureCubeMapResource, _SchemaResource);

  function TextureCubeMapResource() {
    return _SchemaResource.apply(this, arguments) || this;
  }

  var _proto = TextureCubeMapResource.prototype;

  _proto.load = function load(resourceManager, assetConfig, oasis) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var _assetConfig$props, _assetConfig$props$co;

      var imageUrls = [];
      var type = core.AssetType.TextureCube;

      if (_this.resourceManager.useCompressedTexture && assetConfig !== null && assetConfig !== void 0 && (_assetConfig$props = assetConfig.props) !== null && _assetConfig$props !== void 0 && (_assetConfig$props$co = _assetConfig$props.compression) !== null && _assetConfig$props$co !== void 0 && _assetConfig$props$co.compressions.length) {
        var rhi = oasis.engine._hardwareRenderer;
        var compressions = assetConfig.props.compression.compressions;

        for (var i = 0; i < compressions.length; i++) {
          var compression = compressions[i];

          if (compression.container === "ktx" && rhi.canIUse(core.GLCapabilityType[compression.type])) {
            for (var key in compression.files) {
              if (compression.files.hasOwnProperty(key)) {
                var image = compression.files[key];
                imageUrls[imageOrderMap[key]] = image.url;
              }
            }

            console.warn(compression.type);
            type = core.AssetType.KTXCube;
            break;
          }
        }
      }

      if (type === core.AssetType.TextureCube) {
        for (var _key in assetConfig.props.images) {
          if (assetConfig.props.images.hasOwnProperty(_key)) {
            var _image = assetConfig.props.images[_key];
            imageUrls[imageOrderMap[_key]] = _image.url;
          }
        }
      }

      resourceManager.load({
        urls: imageUrls,
        type: type
      }).then(function (res) {
        _this._resource = res;
        resolve(_this);
      }).catch(function (e) {
        reject(e);
      });
    });
  };

  _proto.setMeta = function setMeta() {
    if (this.resource) {
      this.meta.name = this.resource.name;
    }
  };

  return TextureCubeMapResource;
}(SchemaResource);

var BaseResource = /*#__PURE__*/function (_SchemaResource) {
  _inheritsLoose(BaseResource, _SchemaResource);

  function BaseResource() {
    return _SchemaResource.apply(this, arguments) || this;
  }

  var _proto = BaseResource.prototype;

  _proto.load = function load(resourceLoader, assetConfig) {
    var _this = this;

    return new Promise(function (resolve) {
      _this._resource = assetConfig;

      _this.setMetaData("name", _this.resource.name);

      _this.setMetaData("url", _this.resource.url);

      resolve(_this);
    });
  };

  _proto.setMetaData = function setMetaData(key, value) {
    this._meta[key] = value;
  };

  return BaseResource;
}(SchemaResource);

var _dec$3, _dec2$2, _dec3$1, _class$3, _temp$3;
var AbilityManager = (_dec$3 = pluginHook({
  after: "abilityAdded",
  before: "beforeAbilityAdded"
}), _dec2$2 = pluginHook({
  before: "beforeAbilityUpdated",
  after: "abilityUpdated"
}), _dec3$1 = pluginHook({
  after: "abilityDeleted",
  before: "beforeAbilityDeleted"
}), (_class$3 = (_temp$3 = /*#__PURE__*/function () {
  function AbilityManager(oasis) {
    this.oasis = oasis;
    this.abilityMap = {};
  }

  var _proto = AbilityManager.prototype;

  _proto.add = function add(abilityConfig) {
    var type = abilityConfig.type,
        nodeId = abilityConfig.node,
        props = abilityConfig.props,
        id = abilityConfig.id,
        index = abilityConfig.index;
    var node = this.oasis.nodeManager.get(nodeId);
    var AbilityConstructor = this.getCompConstructor(type);

    if (!AbilityConstructor) {
      core.Logger.error(type + " abiltiy is not defined");
      return;
    }

    var abilityProps = this.mixPropsToExplicitProps(props);
    var ability = node.addComponent(AbilityConstructor);
    var enabled = abilityProps.enabled;

    if (enabled !== undefined) {
      ability.enabled = enabled;
    }

    if (type === "Model" || type === "GLTFModel") {
      // TODO
      ability.init(abilityProps);
    } else {
      for (var k in abilityProps) {
        if (abilityProps[k] !== null) {
          ability[k] = abilityProps[k];
        }
      }
    } //@ts-ignore


    var abilityArray = node._components;
    var currentIndex = abilityArray.length - 1;
    switchElementsIndex(abilityArray, currentIndex, index);
    ability.id = id;
    this.abilityMap[id] = ability;
    return ability;
  };

  _proto.update = function update(id, key, value) {
    if (this.get(id).constructor.name === "Model") {
      // TODO
      if (value && this.checkIsAsset(value)) {
        this.get(id).setProp(key, this.oasis.resourceManager.get(value.id).resource);
      } else {
        this.get(id).setProp(key, value);
      }
    } else {
      if (value && this.checkIsAsset(value)) {
        this.get(id)[key] = this.oasis.resourceManager.get(value.id).resource;
      } else {
        this.get(id)[key] = value;
      }
    }

    return {
      id: id,
      key: key,
      value: value
    };
  };

  _proto.get = function get(id) {
    return this.abilityMap[id];
  };

  _proto.delete = function _delete(id) {
    var ability = this.abilityMap[id];
    ability.destroy();
    delete this.abilityMap[id];
    return id;
  };

  _proto.getCompConstructor = function getCompConstructor(type) {
    var splits = type.split("."); // script

    if (splits[0] === "script") {
      return scriptAbility[splits[1]];
    }

    var constructor = Parser._components["o3"][type];

    if (!constructor) {
      throw new Error(type + " is not defined");
    }

    return constructor;
  };

  _proto.mixPropsToExplicitProps = function mixPropsToExplicitProps(props) {
    var explicitProps = _objectSpread2({}, props);

    for (var k in props) {
      var prop = props[k];

      if (prop && this.checkIsAsset(prop)) {
        var res = this.oasis.resourceManager.get(prop.id);

        if (res) {
          explicitProps[k] = res.resource;
        } else {
          explicitProps[k] = null;
          core.Logger.warn("AbilityManager: can't get asset \"" + k + "\", which id is " + prop.id);
        }
      }
    }

    return explicitProps;
  };

  _proto.checkIsAsset = function checkIsAsset(prop) {
    return prop.type === "asset";
  };

  return AbilityManager;
}(), _temp$3), (_applyDecoratedDescriptor(_class$3.prototype, "add", [_dec$3], Object.getOwnPropertyDescriptor(_class$3.prototype, "add"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "update", [_dec2$2], Object.getOwnPropertyDescriptor(_class$3.prototype, "update"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "delete", [_dec3$1], Object.getOwnPropertyDescriptor(_class$3.prototype, "delete"), _class$3.prototype)), _class$3));

var _dec$2, _dec2$1, _dec3, _class$2, _temp$2;
var NodeManager = (_dec$2 = pluginHook({
  after: "nodeAdded"
}), _dec2$1 = pluginHook({
  before: "beforeNodeUpdated",
  after: "nodeUpdated"
}), _dec3 = pluginHook({
  before: "beforeNodeDeleted"
}), (_class$2 = (_temp$2 = /*#__PURE__*/function () {
  function NodeManager(oasis) {
    this.oasis = oasis;
    this.nodeMap = {};
    this.root = void 0;
    this.root = new core.Entity(this.oasis.engine, "root");
  }

  var _proto = NodeManager.prototype;

  _proto.addRootEntity = function addRootEntity() {
    this.oasis.engine.sceneManager.activeScene.addRootEntity(this.root);
  };

  _proto.add = function add(nodeConfig) {
    this.create(nodeConfig);
    this.append(nodeConfig.id, nodeConfig.parent, nodeConfig.index);
    return this.get(nodeConfig.id);
  };

  _proto.update = function update(id, key, value) {
    this.get(id)[key] = value;
    return {
      id: id,
      key: key,
      value: value
    };
  };

  _proto.get = function get(id) {
    return this.nodeMap[id];
  };

  _proto.reset = function reset() {
    this.nodeMap = {};
  };

  _proto.delete = function _delete(id) {
    this.nodeMap[id].destroy();
    delete this.nodeMap[id];
  };

  _proto.create = function create(nodeConfig) {
    var isActive = nodeConfig.isActive,
        position = nodeConfig.position,
        rotation = nodeConfig.rotation,
        scale = nodeConfig.scale,
        id = nodeConfig.id,
        name = nodeConfig.name;
    var entity = new core.Entity(this.oasis.engine, name);
    entity.isActive = isActive;
    entity.transform.position = new math.Vector3(position[0], position[1], position[2]);
    entity.transform.rotation = new math.Vector3(rotation[0], rotation[1], rotation[2]);
    entity.transform.scale = new math.Vector3(scale[0], scale[1], scale[2]);
    entity.id = id;
    this.nodeMap[id] = entity;
    return entity;
  };

  _proto.append = function append(childId, parentId, index) {
    var child = this.nodeMap[childId];
    var parent = this.nodeMap[parentId] || this.root;
    parent.addChild(child); //@ts-ignore

    var children = parent._children;
    var currentIndex = children.length - 1;
    switchElementsIndex(children, currentIndex, index);
  };

  return NodeManager;
}(), _temp$2), (_applyDecoratedDescriptor(_class$2.prototype, "add", [_dec$2], Object.getOwnPropertyDescriptor(_class$2.prototype, "add"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "update", [_dec2$1], Object.getOwnPropertyDescriptor(_class$2.prototype, "update"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "delete", [_dec3], Object.getOwnPropertyDescriptor(_class$2.prototype, "delete"), _class$2.prototype)), _class$2));

var _dec$1, _dec2, _class$1, _temp$1;
var RESOURCE_CLASS = {
  script: ScriptResource,
  gltf: GLTFResource,
  texture: TextureResource,
  // 'image': TextureResource,
  cubeTexture: TextureCubeMapResource,
  PBRMaterial: PBRMaterialResource,
  PBRSpecularMaterial: PBRSpecularMaterialResource,
  UnlitMaterial: UnlitMaterialResource,
  BlinnPhongMaterial: BlinnPhongMaterialResource,
  // Animation: Animation,
  base: BaseResource
};
var RESOURCE_TYPE = new Map();

for (var key in RESOURCE_CLASS) {
  if (RESOURCE_CLASS.hasOwnProperty(key)) {
    var element = RESOURCE_CLASS[key];
    RESOURCE_TYPE.set(element, key);
  }
}

var resourceFactory = {
  createResource: function createResource(resourceManager, type) {
    return new RESOURCE_CLASS[type](resourceManager);
  }
};
function registerResource(type, resource) {
  if (!RESOURCE_CLASS.hasOwnProperty(type)) {
    RESOURCE_CLASS[type] = resource;
    RESOURCE_TYPE.set(resource, type);
  }
}
var SchemaResourceManager = (_dec$1 = pluginHook({
  before: "beforeResourceRemove"
}), _dec2 = pluginHook({
  after: "resourceUpdated",
  before: "beforeResourceUpdate"
}), (_class$1 = (_temp$1 = /*#__PURE__*/function () {
  function SchemaResourceManager(oasis) {
    this.oasis = oasis;
    this.resourceMap = {};
    this.resourceIdMap = new WeakMap();
    this.maxId = 0;
    this.engineResourceManager = void 0;
    this.engineResourceManager = this.oasis.engine.resourceManager;
  }

  var _proto = SchemaResourceManager.prototype;

  _proto.load = function load(asset) {
    var _this = this;

    var resource = resourceFactory.createResource(this, asset.type);
    var loadPromise = resource.load(this.oasis.engine.resourceManager, asset, this.oasis);
    this.maxId = Math.max(+asset.id, this.maxId);
    loadPromise.then(function () {
      _this.resourceMap[asset.id] = resource;

      _this.resourceIdMap.set(resource, asset.id);
    });
    return loadPromise;
  };

  _proto.add = function add(asset) {
    var _this2 = this;

    var resource = resourceFactory.createResource(this, asset.type);
    return new Promise(function (resolve) {
      resource.loadWithAttachedResources(_this2.oasis.engine.resourceManager, asset, _this2.oasis).then(function (result) {
        resolve(_this2.getAddResourceResult(result.resources, result.structure));
      });
    });
  };

  _proto.remove = function remove(id) {
    var _this3 = this;

    return new Promise(function (resolve) {
      var resource = _this3.resourceMap[id];
      var result = [id];
      var hasAttachedResource = false;
      delete _this3.resourceMap[id];

      if (resource) {
        var attached = resource.attachedResources;

        for (var index = 0; index < attached.length; index++) {
          var attachedResource = attached[index];

          var attachedResourceId = _this3.resourceIdMap.get(attachedResource);

          if (attachedResourceId) {
            hasAttachedResource = true;

            _this3.remove(attachedResourceId).then(function (attachedResourceRemoveResult) {
              result.push.apply(result, attachedResourceRemoveResult);
              resolve(result);
            });
          }
        }
      }

      if (!hasAttachedResource) {
        resolve(result);
      }
    });
  };

  _proto.update = function update(id, key, value) {
    var resource = this.get(id);

    if (resource) {
      resource.update(key, value);
    }

    return {
      resource: resource,
      id: id,
      key: key,
      value: value
    };
  };

  _proto.updateMeta = function updateMeta(id, key, value) {
    var resource = this.get(id);

    if (resource) {
      resource.updateMeta(key, value);
    }
  };

  _proto.get = function get(id) {
    return this.resourceMap[id];
  };

  _proto.getAll = function getAll() {
    return core.ObjectValues(this.resourceMap);
  };

  _proto.getAddResourceResult = function getAddResourceResult(resources, structure) {
    var _this4 = this;

    var addResourceResult = {};
    var resource = resources[structure.index];
    var id = "" + ++this.maxId;
    this.resourceMap[id] = resource;
    this.resourceIdMap.set(resource, id);
    addResourceResult.id = this.maxId;
    addResourceResult.type = RESOURCE_TYPE.get(resource.constructor);
    addResourceResult.meta = resource.meta;
    addResourceResult.props = {};

    for (var _key in structure.props) {
      if (structure.props.hasOwnProperty(_key)) {
        var _element = structure.props[_key];

        if (_element) {
          if (Array.isArray(_element)) {
            addResourceResult.props[_key] = _element.map(function (child) {
              return _this4.getAddResourceResult(resources, child);
            });
          } else {
            addResourceResult.props[_key] = this.getAddResourceResult(resources, _element);
          }
        }
      }
    }

    return addResourceResult;
  };

  _createClass(SchemaResourceManager, [{
    key: "isLocal",
    get: function get() {
      return this.oasis.options.local;
    }
  }, {
    key: "useCompressedTexture",
    get: function get() {
      var _this$oasis$options$u;

      return (_this$oasis$options$u = this.oasis.options.useCompressedTexture) != null ? _this$oasis$options$u : true;
    }
  }]);

  return SchemaResourceManager;
}(), _temp$1), (_applyDecoratedDescriptor(_class$1.prototype, "remove", [_dec$1], Object.getOwnPropertyDescriptor(_class$1.prototype, "remove"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "update", [_dec2], Object.getOwnPropertyDescriptor(_class$1.prototype, "update"), _class$1.prototype)), _class$1));

var _dec, _class, _temp;
var Oasis = (_dec = pluginHook({
  after: "schemaParsed"
}), (_class = (_temp = /*#__PURE__*/function (_EventDispatcher) {
  _inheritsLoose(Oasis, _EventDispatcher);

  function Oasis(_options, pluginManager) {
    var _options$scripts;

    var _this;

    _this = _EventDispatcher.call(this, _options.engine) || this;
    _this._options = _options;
    _this.pluginManager = pluginManager;
    _this.engine = null;
    _this.nodeManager = void 0;
    _this.abilityManager = void 0;
    _this.resourceManager = void 0;
    _this._canvas = void 0;
    _this.schema = void 0;
    _this.timeout = void 0;
    _this.oasis = _assertThisInitialized(_this);
    _this.engine = _options.engine;
    _this.schema = _options.config;
    _this.timeout = _options.timeout;
    _options.scripts = (_options$scripts = _options.scripts) != null ? _options$scripts : {};
    _this.nodeManager = new NodeManager(_assertThisInitialized(_this));
    _this.abilityManager = new AbilityManager(_assertThisInitialized(_this));
    _this.nodeManager.add = _this.nodeManager.add.bind(_this.nodeManager);
    _this.abilityManager.add = _this.abilityManager.add.bind(_this.abilityManager);
    _this.resourceManager = new SchemaResourceManager(_assertThisInitialized(_this));

    if (_options.fps) {
      _this.engine.targetFrameRate = _options.fps;
      _this.engine.vSyncCount = 0;
    }

    return _this;
  }

  var _proto = Oasis.prototype;

  _proto.updateConfig = function updateConfig(config) {
    this.schema = config;
    this.init();
  };

  _proto.init = function init() {
    var _this2 = this;

    return this.loadResources().then(function () {
      _this2.bindResources();

      _this2.parseEntities();

      _this2.attach();

      _this2.nodeManager.addRootEntity();

      _this2.parseNodeAbilities();

      _this2.pluginManager.boot(_this2);
    });
  };

  _proto.loadResources = function loadResources() {
    var _this3 = this;

    var _this$schema$assets = this.schema.assets,
        assets = _this$schema$assets === void 0 ? {} : _this$schema$assets;
    var loadingPromises = core.ObjectValues(assets).filter(function (asset) {
      if (RESOURCE_CLASS[asset.type]) {
        return true;
      }

      console.warn(asset.type + " loader is not defined. the " + asset.type + " type will be ignored.");
      return false;
    }).map(function (asset) {
      return _this3.resourceManager.load(asset);
    });
    return Promise.all(loadingPromises);
  };

  _proto.bindResources = function bindResources() {
    this.resourceManager.getAll().forEach(function (resource) {
      resource.bind();
    });
  };

  _proto.parseEntities = function parseEntities() {
    var nodes = this.schema.nodes;
    var indices = this.bfsNodes();
    indices.map(function (index) {
      return nodes[index];
    }).forEach(this.nodeManager.add);
  };

  _proto.parseNodeAbilities = function parseNodeAbilities() {
    var abilities = this.schema.abilities;
    Object.keys(abilities).map(function (id) {
      return _objectSpread2({
        id: id
      }, abilities[id]);
    }).forEach(this.abilityManager.add);
  };

  _proto.bfsNodes = function bfsNodes() {
    var nodes = this.schema.nodes;
    var roots = core.ObjectValues(nodes).filter(function (node) {
      return !nodes[node.parent];
    }).map(function (node) {
      return node.id;
    });
    var result = [];

    var traverseChildren = function traverseChildren(roots) {
      result = result.concat(roots);
      roots.forEach(function (id) {
        var children = nodes[id].children;
        children && traverseChildren(children);
      });
    };

    traverseChildren(roots);
    return result;
  };

  _proto.attach = function attach() {
    this.resourceManager.getAll().forEach(function (resource) {
      resource.attach();
    });
  };

  Oasis.create = function create(options, pluginManager) {
    var oasis = new Oasis(options, pluginManager);
    return oasis.init().then(function () {
      options.autoPlay && oasis.engine.run();
      return oasis;
    });
  };

  _createClass(Oasis, [{
    key: "canvas",
    get: function get() {
      return this._options.canvas;
    }
  }, {
    key: "options",
    get: function get() {
      return this._options;
    }
  }]);

  return Oasis;
}(core.EventDispatcher), _temp), (_applyDecoratedDescriptor(_class.prototype, "init", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "init"), _class.prototype)), _class));

/**
 * temp compa
 * @param config
 */

function compatibleToV2(config) {
  var _config$abilities = config.abilities,
      abilities = _config$abilities === void 0 ? {} : _config$abilities,
      _config$assets = config.assets,
      assets = _config$assets === void 0 ? {} : _config$assets;
  var ids = Object.keys(abilities);
  var assetKeys = Object.keys(assets);

  for (var i = 0, l = ids.length; i < l; ++i) {
    handleComponents(abilities[ids[i]].props);
  }

  for (var _i = 0, _l = assetKeys.length; _i < _l; ++_i) {
    handleAssets(assets[assetKeys[_i]].props);
  }

  return config;
} // TODO temp

function handleComponents(props) {
  var keys = Object.keys(props);

  for (var i = 0, l = keys.length; i < l; ++i) {
    var k = keys[i];
    var v = props[k];

    if (Array.isArray(v)) {
      if (["color", "diffuseColor", "specularColor"].indexOf(k) !== -1) {
        props[k] = new math.Color(v[0], v[1], v[2], v[3]);
      } else if (v.length === 4) {
        props[k] = new math.Vector4(v[0], v[1], v[2], v[3]);
      } else if (v.length === 3) {
        props[k] = new math.Vector3(v[0], v[1], v[2]);
      } else if (v.length === 2) {
        props[k] = new math.Vector2(v[0], v[1]);
      }
    }
  }
}

function handleAssets(props) {
  if (props === void 0) {
    props = {};
  }

  if (!props) {
    return;
  }

  var keys = Object.keys(props);

  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    var value = props[key];

    if (key === "newMaterial" || key === "scripts") {
      continue;
    }

    if (Array.isArray(value)) {
      if (["emissiveColor", "diffuseColor", "specularColor", "baseColor"].indexOf(key) !== -1) {
        props[key] = new math.Color(value[0], value[1], value[2], value[3]);
      } else if (value.length === 4) {
        props[key] = new math.Vector4(value[0], value[1], value[2], value[3]);
      } else if (value.length === 3) {
        props[key] = new math.Vector3(value[0], value[1], value[2]);
      } else if (value.length === 2) {
        props[key] = new math.Vector2(value[0], value[1]);
      }
    }
  }
}

var CURRENT_SCHEMA_VERSION = 3;
var Parser = /*#__PURE__*/function () {
  var _proto = Parser.prototype;

  /**
   * Parse a scene config.
   * @param options - Options of scene
   */
  _proto.parse = function parse(options) {
    var _options$config;

    if ((options === null || options === void 0 ? void 0 : (_options$config = options.config) === null || _options$config === void 0 ? void 0 : _options$config.version) !== CURRENT_SCHEMA_VERSION) {
      var _options$config2;

      console.warn("schema-parser: schema version \"" + (options === null || options === void 0 ? void 0 : (_options$config2 = options.config) === null || _options$config2 === void 0 ? void 0 : _options$config2.version) + "\" is out of date, please re-pull the latest version (version " + CURRENT_SCHEMA_VERSION + ") of the schema");
    }

    compatibleToV2(options.config);
    return Oasis.create(options, this.pluginManager);
  };

  _proto.register = function register(plugin) {
    this.pluginManager.register(plugin);
  };

  _proto.resetPlugins = function resetPlugins() {
    this.pluginManager.reset();
  };

  function Parser() {
    this.pluginManager = new PluginManager();
  }

  Parser.create = function create() {
    var parser = new Parser();
    return parser;
  }
  /** @internal */
  ;

  /**
   * Register parsing component
   * @param namespace - Namespace
   * @param components - Components
   */
  Parser.registerComponents = function registerComponents(namespace, components) {
    if (!this._components[namespace]) {
      this._components[namespace] = {};
    }

    _extends(this._components[namespace], components);
  };

  return Parser;
}();
Parser._components = {};
var parser = Parser.create();

exports.GLTFModel = GLTFModel;
exports.Oasis = Oasis;
exports.Parser = Parser;
exports.RegistExtension = RegistExtension;
exports.SchemaResource = SchemaResource;
exports.parseSingleKTX = parseSingleKTX;
exports.parser = parser;
exports.registerResource = registerResource;
exports.script = script;
