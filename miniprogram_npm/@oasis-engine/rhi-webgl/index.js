'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var wechatAdapter = require('@oasis-engine/wechat-adapter');
var math = require('@oasis-engine/math');
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

/**
 * The canvas used on the web, which can support HTMLCanvasElement and OffscreenCanvas.
 */

var WebCanvas = /*#__PURE__*/function () {
  var _proto = WebCanvas.prototype;

  /**
   * Resize the rendering size according to the clientWidth and clientHeight of the canvas.
   * @param pixelRatio - Pixel ratio
   */
  _proto.resizeByClientSize = function resizeByClientSize(pixelRatio) {
    if (pixelRatio === void 0) {
      pixelRatio = wechatAdapter.window.devicePixelRatio;
    }

    var webCanvas = this._webCanvas;

    if (webCanvas instanceof wechatAdapter.HTMLCanvasElement) {
      var width = webCanvas.clientWidth;
      var height = webCanvas.clientHeight;
      this.width = width * pixelRatio;
      this.height = height * pixelRatio;
    }
  }
  /**
   * Create a web canvas.
   * @param webCanvas - Web native canvas
   */
  ;

  function WebCanvas(webCanvas) {
    this._webCanvas = void 0;
    this._width = void 0;
    this._height = void 0;
    this._scale = new math.Vector2();
    var width = webCanvas.width;
    var height = webCanvas.height;
    this._webCanvas = webCanvas;
    this._width = width;
    this._height = height;
  }
  /**
   * Set scale.
   * @param x - Scale along the X axis
   * @param y - Scale along the Y axis
   */


  _proto.setScale = function setScale(x, y) {
    this._scale.setValue(x, y);

    this.scale = this._scale;
  };

  _createClass(WebCanvas, [{
    key: "width",
    get:
    /**
     * @inheritdoc
     */
    function get() {
      return this._width;
    },
    set: function set(value) {
      if (this._width !== value) {
        this._webCanvas.width = value;
        this._width = value;
      }
    }
    /**
     * @inheritdoc
     */

  }, {
    key: "height",
    get: function get() {
      return this._height;
    },
    set: function set(value) {
      if (this._height !== value) {
        this._webCanvas.height = value;
        this._height = value;
      }
    }
    /**
     * The scale of canvas, the value is visible width/height divide the render width/height.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */

  }, {
    key: "scale",
    get: function get() {
      var webCanvas = this._webCanvas;

      if (webCanvas instanceof wechatAdapter.HTMLCanvasElement) {
        this._scale.setValue(webCanvas.clientWidth * wechatAdapter.devicePixelRatio / webCanvas.width, webCanvas.clientHeight * wechatAdapter.devicePixelRatio / webCanvas.height);
      }

      return this._scale;
    },
    set: function set(value) {
      var webCanvas = this._webCanvas;

      if (webCanvas instanceof wechatAdapter.HTMLCanvasElement) {
        webCanvas.style.transformOrigin = "left top";
        webCanvas.style.transform = "scale(" + value.x + ", " + value.y + ")";
      }
    }
  }]);

  return WebCanvas;
}();

/**
 * GL capability.
 */
var GLCapability = /*#__PURE__*/function () {
  function GLCapability(rhi) {
    this._maxDrawBuffers = void 0;
    this._maxAnisoLevel = void 0;
    this._maxAntiAliasing = void 0;
    this._rhi = void 0;
    this.capabilityList = void 0;
    this._rhi = rhi;
    this.capabilityList = new Map();
    this.init();
    this.compatibleAllInterface();
  }
  /**
   * Check device capabilities.
   */


  var _proto = GLCapability.prototype;

  _proto.canIUse = function canIUse(capabilityType) {
    return this.capabilityList.get(capabilityType);
  }
  /**
   * Check if can use some compressed texture format.
   */
  ;

  _proto.canIUseCompressedTextureInternalFormat = function canIUseCompressedTextureInternalFormat(internalType) {
    var RGBA_ASTC_4X4_KHR = core.GLCompressedTextureInternalFormat.RGBA_ASTC_4X4_KHR,
        RGBA_ASTC_12X12_KHR = core.GLCompressedTextureInternalFormat.RGBA_ASTC_12X12_KHR,
        SRGB8_ALPHA8_ASTC_4X4_KHR = core.GLCompressedTextureInternalFormat.SRGB8_ALPHA8_ASTC_4X4_KHR,
        SRGB8_ALPHA8_ASTC_12X12_KHR = core.GLCompressedTextureInternalFormat.SRGB8_ALPHA8_ASTC_12X12_KHR,
        RGB_ETC1_WEBGL = core.GLCompressedTextureInternalFormat.RGB_ETC1_WEBGL,
        R11_EAC = core.GLCompressedTextureInternalFormat.R11_EAC,
        SRGB8_ALPHA8_ETC2_EAC = core.GLCompressedTextureInternalFormat.SRGB8_ALPHA8_ETC2_EAC,
        RGB_PVRTC_4BPPV1_IMG = core.GLCompressedTextureInternalFormat.RGB_PVRTC_4BPPV1_IMG,
        RGBA_PVRTC_2BPPV1_IMG = core.GLCompressedTextureInternalFormat.RGBA_PVRTC_2BPPV1_IMG,
        RGB_S3TC_DXT1_EXT = core.GLCompressedTextureInternalFormat.RGB_S3TC_DXT1_EXT,
        RGBA_S3TC_DXT5_EXT = core.GLCompressedTextureInternalFormat.RGBA_S3TC_DXT5_EXT;

    if (internalType >= RGBA_ASTC_4X4_KHR && RGBA_ASTC_12X12_KHR <= RGBA_ASTC_12X12_KHR || internalType >= SRGB8_ALPHA8_ASTC_4X4_KHR && internalType <= SRGB8_ALPHA8_ASTC_12X12_KHR) {
      return this.canIUse(core.GLCapabilityType.astc);
    } else if (internalType === RGB_ETC1_WEBGL) {
      return this.canIUse(core.GLCapabilityType.etc1);
    } else if (internalType >= R11_EAC && internalType <= SRGB8_ALPHA8_ETC2_EAC) {
      return this.canIUse(core.GLCapabilityType.etc);
    } else if (internalType >= RGB_PVRTC_4BPPV1_IMG && internalType <= RGBA_PVRTC_2BPPV1_IMG) {
      return this.canIUse(core.GLCapabilityType.pvrtc);
    } else if (internalType >= RGB_S3TC_DXT1_EXT && internalType <= RGBA_S3TC_DXT5_EXT) {
      return this.canIUse(core.GLCapabilityType.s3tc);
    }

    return false;
  }
  /**
   * If can use more joints.
   */
  ;

  /**
   *  Init capabilities.
   */
  _proto.init = function init() {
    var cap = this.capabilityList;
    var isWebGL2 = this.rhi.isWebGL2;
    var requireExtension = this.rhi.requireExtension.bind(this.rhi);
    var standardDerivatives = core.GLCapabilityType.standardDerivatives,
        shaderTextureLod = core.GLCapabilityType.shaderTextureLod,
        elementIndexUint = core.GLCapabilityType.elementIndexUint,
        depthTexture = core.GLCapabilityType.depthTexture,
        vertexArrayObject = core.GLCapabilityType.vertexArrayObject,
        instancedArrays = core.GLCapabilityType.instancedArrays,
        multipleSample = core.GLCapabilityType.multipleSample,
        drawBuffers = core.GLCapabilityType.drawBuffers,
        astc = core.GLCapabilityType.astc,
        astc_webkit = core.GLCapabilityType.astc_webkit,
        etc = core.GLCapabilityType.etc,
        etc_webkit = core.GLCapabilityType.etc_webkit,
        etc1 = core.GLCapabilityType.etc1,
        etc1_webkit = core.GLCapabilityType.etc1_webkit,
        pvrtc = core.GLCapabilityType.pvrtc,
        pvrtc_webkit = core.GLCapabilityType.pvrtc_webkit,
        s3tc = core.GLCapabilityType.s3tc,
        s3tc_webkit = core.GLCapabilityType.s3tc_webkit,
        textureFloat = core.GLCapabilityType.textureFloat,
        textureHalfFloat = core.GLCapabilityType.textureHalfFloat,
        textureFloatLinear = core.GLCapabilityType.textureFloatLinear,
        textureHalfFloatLinear = core.GLCapabilityType.textureHalfFloatLinear,
        WEBGL_colorBufferFloat = core.GLCapabilityType.WEBGL_colorBufferFloat,
        colorBufferFloat = core.GLCapabilityType.colorBufferFloat,
        colorBufferHalfFloat = core.GLCapabilityType.colorBufferHalfFloat,
        textureFilterAnisotropic = core.GLCapabilityType.textureFilterAnisotropic;
    cap.set(standardDerivatives, isWebGL2 || !!requireExtension(standardDerivatives));
    cap.set(shaderTextureLod, isWebGL2 || !!requireExtension(shaderTextureLod));
    cap.set(elementIndexUint, isWebGL2 || !!requireExtension(elementIndexUint));
    cap.set(depthTexture, isWebGL2 || !!requireExtension(depthTexture));
    cap.set(vertexArrayObject, isWebGL2 || !!requireExtension(vertexArrayObject));
    cap.set(instancedArrays, isWebGL2 || !!requireExtension(instancedArrays));
    cap.set(multipleSample, isWebGL2);
    cap.set(drawBuffers, isWebGL2 || !!requireExtension(drawBuffers));
    cap.set(textureFloat, isWebGL2 || !!requireExtension(textureFloat));
    cap.set(textureHalfFloat, isWebGL2 || !!requireExtension(textureHalfFloat));
    cap.set(textureFloatLinear, !!requireExtension(textureFloatLinear));
    cap.set(textureHalfFloatLinear, isWebGL2 || !!requireExtension(textureHalfFloatLinear));
    cap.set(colorBufferFloat, isWebGL2 && !!requireExtension(colorBufferFloat) || !!requireExtension(WEBGL_colorBufferFloat));
    cap.set(colorBufferHalfFloat, isWebGL2 && !!requireExtension(colorBufferFloat) || !!requireExtension(colorBufferHalfFloat));
    cap.set(textureFilterAnisotropic, !!requireExtension(textureFilterAnisotropic));
    cap.set(astc, !!(requireExtension(astc) || requireExtension(astc_webkit)));
    cap.set(etc, !!(requireExtension(etc) || requireExtension(etc_webkit)));
    cap.set(etc1, !!(requireExtension(etc1) || requireExtension(etc1_webkit)));
    cap.set(pvrtc, !!(requireExtension(pvrtc) || requireExtension(pvrtc_webkit)));
    cap.set(s3tc, !!(requireExtension(s3tc) || requireExtension(s3tc_webkit)));
  }
  /**
   * If there are extensions that can supplement this ability, smooth out the difference.
   * @example
   * compatible(GLCapabilityType.depthTexture,{
   *    UNSIGNED_INT_24_8: "UNSIGNED_INT_24_8_WEBGL"
   * })
   * gl.UNSIGNED_INT_24_8 = ext.UNSIGNED_INT_24_8_WEBGL
   */
  ;

  _proto.compatibleInterface = function compatibleInterface(capabilityType, flatItem) {
    var rhi = this.rhi;
    var gl = rhi.gl;
    var ext = null;

    if (ext = rhi.requireExtension(capabilityType)) {
      for (var _glKey in flatItem) {
        var _extensionKey = flatItem[_glKey];
        var extensionVal = ext[_extensionKey]; // Mini game hack the native function,use “.bind” to smooth out if is “Funcion”.

        if (extensionVal !== null && extensionVal !== void 0 && extensionVal.bind) {
          gl[_glKey] = extensionVal.bind(ext);
        } else {
          gl[_glKey] = extensionVal;
        }
      }
    }
  };

  _proto.compatibleAllInterface = function compatibleAllInterface() {
    var depthTexture = core.GLCapabilityType.depthTexture,
        vertexArrayObject = core.GLCapabilityType.vertexArrayObject,
        instancedArrays = core.GLCapabilityType.instancedArrays,
        drawBuffers = core.GLCapabilityType.drawBuffers,
        textureFilterAnisotropic = core.GLCapabilityType.textureFilterAnisotropic,
        textureHalfFloat = core.GLCapabilityType.textureHalfFloat,
        colorBufferHalfFloat = core.GLCapabilityType.colorBufferHalfFloat,
        WEBGL_colorBufferFloat = core.GLCapabilityType.WEBGL_colorBufferFloat;
    var isWebGL2 = this.rhi.isWebGL2;

    if (!isWebGL2) {
      this.compatibleInterface(depthTexture, {
        UNSIGNED_INT_24_8: "UNSIGNED_INT_24_8_WEBGL"
      });
      this.compatibleInterface(vertexArrayObject, {
        createVertexArray: "createVertexArrayOES",
        deleteVertexArray: "deleteVertexArrayOES",
        isVertexArray: "isVertexArrayOES",
        bindVertexArray: "bindVertexArrayOES"
      });
      this.compatibleInterface(instancedArrays, {
        drawArraysInstanced: "drawArraysInstancedANGLE",
        drawElementsInstanced: "drawElementsInstancedANGLE",
        vertexAttribDivisor: "vertexAttribDivisorANGLE"
      });
      this.compatibleInterface(drawBuffers, {
        MAX_DRAW_BUFFERS: "MAX_DRAW_BUFFERS_WEBGL"
      });
      var items = {};

      if (this.canIUse(core.GLCapabilityType.drawBuffers)) {
        var maxDrawBuffers = this.maxDrawBuffers;

        for (var i = 0; i < maxDrawBuffers; i++) {
          i != 0 && (items["COLOR_ATTACHMENT" + i] = "COLOR_ATTACHMENT" + i + "_WEBGL");
          items["DRAW_BUFFER" + i] = "DRAW_BUFFER" + i + "_WEBGL";
        }

        this.compatibleInterface(drawBuffers, _objectSpread2({
          drawBuffers: "drawBuffersWEBGL"
        }, items));
      }

      this.compatibleInterface(textureHalfFloat, {
        HAFL_FLOAT: "HALF_FLOAT_OES"
      });
      this.compatibleInterface(colorBufferHalfFloat, {
        RGBA16F: "RBGA16F_EXT"
      });
      this.compatibleInterface(WEBGL_colorBufferFloat, {
        RGBA32F: "RBGA32F_EXT"
      });
    }

    this.compatibleInterface(textureFilterAnisotropic, {
      TEXTURE_MAX_ANISOTROPY_EXT: "TEXTURE_MAX_ANISOTROPY_EXT"
    });
  };

  _createClass(GLCapability, [{
    key: "maxDrawBuffers",
    get: function get() {
      if (!this._maxDrawBuffers) {
        if (this.canIUse(core.GLCapabilityType.drawBuffers)) {
          this._maxDrawBuffers = this._rhi.gl.getParameter(this._rhi.gl.MAX_DRAW_BUFFERS);
        } else {
          this._maxDrawBuffers = 1;
        }
      }

      return this._maxDrawBuffers;
    }
    /**
     * Max anisoLevel.
     */

  }, {
    key: "maxAnisoLevel",
    get: function get() {
      if (!this._maxAnisoLevel) {
        var ext = this._rhi.requireExtension(core.GLCapabilityType.textureFilterAnisotropic);

        this._maxAnisoLevel = ext ? this._rhi.gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 1;
      }

      return this._maxAnisoLevel;
    }
    /**
     * Max MSAA count.
     */

  }, {
    key: "maxAntiAliasing",
    get: function get() {
      if (!this._maxAntiAliasing) {
        var gl = this._rhi.gl;
        var canMSAA = this.canIUse(core.GLCapabilityType.multipleSample);
        this._maxAntiAliasing = canMSAA ? gl.getParameter(gl.MAX_SAMPLES) : 1;
      }

      return this._maxAntiAliasing;
    }
  }, {
    key: "rhi",
    get: function get() {
      return this._rhi;
    }
  }, {
    key: "canIUseMoreJoints",
    get: function get() {
      return this.canIUse(core.GLCapabilityType.textureFloat) && this.rhi.renderStates.getParameter(this.rhi.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
    }
  }]);

  return GLCapability;
}();

/**
 * GLContext extension.
 */
var GLExtensions = /*#__PURE__*/function () {
  function GLExtensions(rhi) {
    this.rhi = void 0;
    this._requireResult = void 0;
    this.rhi = rhi;
    this._requireResult = {};
  }
  /**
   * Require an extension.
   */


  var _proto = GLExtensions.prototype;

  _proto.requireExtension = function requireExtension(ext) {
    if (this._requireResult[ext] !== undefined) {
      return this._requireResult[ext];
    }

    this._requireResult[ext] = this.rhi.gl.getExtension(ext);
    return this._requireResult[ext];
  };

  return GLExtensions;
}();

/**
 * Improvement of VAO:
 * 1) WebGL2.0 must support VAO, almost all devices support vao extensions in webgl1.0, we can use PollyFill,only keep VAO mode.
 * 2) VAO implementation now has bugs, change IndexBuffer、VertexBuffer、VertexElements need to update VAO.
 */

/**
 * GL platform primtive.
 */
var GLPrimitive = /*#__PURE__*/function () {
  function GLPrimitive(rhi, primitive) {
    this._primitive = void 0;
    this.attribLocArray = void 0;
    this.canUseInstancedArrays = void 0;
    this.gl = void 0;
    this.vao = new Map();
    this._useVao = void 0;
    this._primitive = primitive;
    this.canUseInstancedArrays = rhi.canIUse(core.GLCapabilityType.instancedArrays);
    this._useVao = rhi.canIUse(core.GLCapabilityType.vertexArrayObject);
    this.gl = rhi.gl;
  }
  /**
   * Draw the primitive.
   */


  var _proto = GLPrimitive.prototype;

  _proto.draw = function draw(shaderProgram, subPrimitive) {
    var gl = this.gl;
    var primitive = this._primitive;

    if (this._useVao) {
      if (!this.vao.has(shaderProgram.id)) {
        this.registerVAO(shaderProgram);
      }

      var vao = this.vao.get(shaderProgram.id);
      gl.bindVertexArray(vao);
    } else {
      this.bindBufferAndAttrib(shaderProgram);
    }

    var indexBufferBinding = primitive.indexBufferBinding,
        instanceCount = primitive.instanceCount,
        _glIndexType = primitive._glIndexType;
    var topology = subPrimitive.topology,
        start = subPrimitive.start,
        count = subPrimitive.count;

    if (!instanceCount) {
      if (indexBufferBinding) {
        if (this._useVao) {
          gl.drawElements(topology, count, _glIndexType, start);
        } else {
          var _nativeBuffer = indexBufferBinding.buffer._nativeBuffer;
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _nativeBuffer);
          gl.drawElements(topology, count, _glIndexType, start);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        }
      } else {
        gl.drawArrays(topology, start, count);
      }
    } else {
      if (this.canUseInstancedArrays) {
        if (indexBufferBinding) {
          if (this._useVao) {
            gl.drawElementsInstanced(topology, count, _glIndexType, start, instanceCount);
          } else {
            var _nativeBuffer2 = indexBufferBinding.buffer._nativeBuffer;
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _nativeBuffer2);
            gl.drawElementsInstanced(topology, count, _glIndexType, start, instanceCount);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
          }
        } else {
          gl.drawArraysInstanced(topology, start, count, instanceCount);
        }
      } else {
        core.Logger.error("ANGLE_instanced_arrays extension is not supported");
      }
    } // unbind


    if (this._useVao) {
      gl.bindVertexArray(null);
    } else {
      this.disableAttrib();
    }
  };

  _proto.destroy = function destroy() {
    if (this._useVao) {
      var gl = this.gl;
      this.vao.forEach(function (vao) {
        gl.deleteVertexArray(vao);
      });
    }
  }
  /**
   * Bind buffer and attribute.
   */
  ;

  _proto.bindBufferAndAttrib = function bindBufferAndAttrib(shaderProgram) {
    var gl = this.gl;
    var primitive = this._primitive;
    var vertexBufferBindings = primitive.vertexBufferBindings;
    this.attribLocArray = [];
    var attributeLocation = shaderProgram.attributeLocation;
    var attributes = primitive._vertexElementMap;
    var vbo;
    var lastBoundVbo;

    for (var name in attributeLocation) {
      var loc = attributeLocation[name];
      if (loc === -1) continue;
      var element = attributes[name];

      if (element) {
        var _vertexBufferBindings = vertexBufferBindings[element.bindingIndex],
            buffer = _vertexBufferBindings.buffer,
            stride = _vertexBufferBindings.stride;
        vbo = buffer._nativeBuffer; // prevent binding the vbo which already bound at the last loop, e.g. a buffer with multiple attributes.

        if (lastBoundVbo !== vbo) {
          lastBoundVbo = vbo;
          gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
        }

        gl.enableVertexAttribArray(loc);
        var _element$_glElementIn = element._glElementInfo,
            size = _element$_glElementIn.size,
            type = _element$_glElementIn.type;
        gl.vertexAttribPointer(loc, size, type, element.normalized, stride, element.offset);

        if (this.canUseInstancedArrays) {
          gl.vertexAttribDivisor(loc, element.instanceDivisor);
        }

        this.attribLocArray.push(loc);
      } else {
        core.Logger.warn("vertex attribute not found: " + name);
      }
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  };

  _proto.disableAttrib = function disableAttrib() {
    var gl = this.gl;

    for (var i = 0, l = this.attribLocArray.length; i < l; i++) {
      gl.disableVertexAttribArray(this.attribLocArray[i]);
    }
  };

  _proto.registerVAO = function registerVAO(shaderProgram) {
    var gl = this.gl;
    var vao = gl.createVertexArray();
    /** register VAO */

    gl.bindVertexArray(vao);
    var indexBufferBinding = this._primitive.indexBufferBinding;

    if (indexBufferBinding) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBufferBinding.buffer._nativeBuffer);
    }

    this.bindBufferAndAttrib(shaderProgram);
    /** unbind */

    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    this.disableAttrib();
    this.vao.set(shaderProgram.id, vao);
  };

  return GLPrimitive;
}();

/**
 * @private
 */
var GLRenderStates = /*#__PURE__*/function () {
  /**
   * @param {WebGLRenderingContext} gl
   */
  function GLRenderStates(gl) {
    this._gl = void 0;
    this._parameters = {};
    this._gl = gl;
    this._parameters = {}; // current gl state parameters

    /** cache */

    this._parameters[gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS] = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    this._parameters[gl.MAX_VERTEX_UNIFORM_VECTORS] = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
    this._parameters[gl.MAX_VERTEX_ATTRIBS] = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
    this._parameters[gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS] = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS); // init blend state same as BlendState default value.

    gl.blendFuncSeparate(gl.ONE, gl.ZERO, gl.ONE, gl.ZERO);
    gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
    gl.colorMask(true, true, true, true);
    gl.blendColor(0, 0, 0, 0);
    gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE); // init depth state same as DpethState default value.

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LESS);
    gl.depthMask(true); // init stencil state same as StencilState default value.

    gl.disable(gl.STENCIL_TEST);
    gl.stencilFuncSeparate(gl.FRONT, gl.ALWAYS, 0, 0xff);
    gl.stencilFuncSeparate(gl.BACK, gl.ALWAYS, 0, 0xff);
    gl.stencilOpSeparate(gl.FRONT, gl.KEEP, gl.KEEP, gl.KEEP);
    gl.stencilOpSeparate(gl.BACK, gl.KEEP, gl.KEEP, gl.KEEP);
    gl.stencilMask(0xff); // init raster state same as RasterState default value.

    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    gl.disable(gl.POLYGON_OFFSET_FILL);
    gl.polygonOffset(0, 0);
  }
  /**
   * Get a parameter.
   */


  var _proto = GLRenderStates.prototype;

  _proto.getParameter = function getParameter(pname) {
    return this._parameters[pname];
  };

  return GLRenderStates;
}();

/**
 * @private
 */

var GLSprite = /*#__PURE__*/function () {
  function GLSprite(gl) {
    this.gl = void 0;
    this._vbo = void 0;
    this._maxBatchCount = void 0;
    this._vertBuffer = void 0;
    this._vertCursor = void 0;
    this._drawSpriteCount = void 0;
    this._vertAttributes = void 0;
    this.gl = gl; //-- vertex attributes

    this._initVertexAttributes(gl);

    this._vbo = gl.createBuffer();
    this._maxBatchCount = 0;
    this._vertBuffer = null;
    this._vertCursor = 0;
    this._drawSpriteCount = 0;
  }

  var _proto = GLSprite.prototype;

  _proto.setMaxBatchCount = function setMaxBatchCount(count) {
    var requireSize = count * 6 * 9;

    if (this._vertBuffer && this._vertBuffer.length >= requireSize) {
      return;
    }

    this._maxBatchCount = count;
    this._vertBuffer = new Float32Array(requireSize);
  };

  _proto.beginDraw = function beginDraw(count) {
    this._vertCursor = 0;
    this._drawSpriteCount = 0; // Dynamic resize

    if (count > this._maxBatchCount) {
      this.setMaxBatchCount(count);
    }
  };

  _proto.drawSprite = function drawSprite(positionQuad, uvRect, tintColor) {
    this._drawSpriteCount++;

    if (this._drawSpriteCount > this._maxBatchCount) {
      core.Logger.warn("Sprite: sprite count overflow");
      return;
    }

    var color = tintColor;
    var u = uvRect.u;
    var v = uvRect.v;
    var p = uvRect.u + uvRect.width;
    var q = uvRect.v + uvRect.height;

    this._pushVertex(positionQuad.leftTop, new math.Vector2(u, v), color);

    this._pushVertex(positionQuad.leftBottom, new math.Vector2(u, q), color);

    this._pushVertex(positionQuad.rightBottom, new math.Vector2(p, q), color);

    this._pushVertex(positionQuad.rightBottom, new math.Vector2(p, q), color);

    this._pushVertex(positionQuad.rightTop, new math.Vector2(p, v), color);

    this._pushVertex(positionQuad.leftTop, new math.Vector2(u, v), color);
  };

  _proto.endDraw = function endDraw(shaderProgram) {
    var vertCount = this._vertCursor / 9;
    if (vertCount <= 0) return;
    var gl = this.gl;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._vbo);
    gl.bufferData(gl.ARRAY_BUFFER, this._vertBuffer, gl.DYNAMIC_DRAW);
    var attributeLocation = shaderProgram.attributeLocation;

    for (var k in attributeLocation) {
      var location = attributeLocation[k];
      var attrib = this._vertAttributes[k];
      gl.vertexAttribPointer(location, attrib.size, attrib.type, attrib.normalized, attrib.stride, attrib.offset);
      gl.enableVertexAttribArray(location);
    }

    gl.drawArrays(gl.TRIANGLES, 0, vertCount);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null); // disable attributes

    for (var _k in attributeLocation) {
      gl.disableVertexAttribArray(attributeLocation[_k]);
    }
  };

  _proto._initVertexAttributes = function _initVertexAttributes(gl) {
    var vertexStride = (3 + 2 + 4) * 4;
    var posAtt = {};
    posAtt.name = "a_pos";
    posAtt.size = 3;
    posAtt.offset = 0;
    var uvAtt = {};
    uvAtt.name = "a_uv";
    uvAtt.size = 2;
    uvAtt.offset = 3 * 4;
    var colorAtt = {};
    colorAtt.name = "a_color";
    colorAtt.size = 4;
    colorAtt.offset = 5 * 4;
    this._vertAttributes = {
      a_pos: posAtt,
      a_uv: uvAtt,
      a_color: colorAtt
    };

    for (var k in this._vertAttributes) {
      var att = this._vertAttributes[k];
      att.type = gl.FLOAT;
      att.normalized = false;
      att.stride = vertexStride;
    }
  };

  _proto._pushVertex = function _pushVertex(pos, uv, color) {
    var vb = this._vertBuffer;
    var id = this._vertCursor; //-- pos

    vb[id] = pos.x;
    vb[id + 1] = pos.y;
    vb[id + 2] = pos.z; //-- uv

    vb[id + 3] = uv.x;
    vb[id + 4] = uv.y; //-- color

    vb[id + 5] = color.x;
    vb[id + 6] = color.y;
    vb[id + 7] = color.z;
    vb[id + 8] = color.w; //--

    this._vertCursor += 9;
  };

  _proto.finalize = function finalize() {
    if (this._vbo) {
      this.gl.deleteBuffer(this._vbo);
      this._vbo = null;
    }
  };

  return GLSprite;
}();

var spriteVertShader = "\nprecision highp float;\n\nuniform mat4 matProjection;\nuniform mat4 matView;\n\nattribute vec3 a_pos;\nattribute vec2 a_uv;\nattribute vec4 a_color;\n\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nvoid main()\n{\n  gl_Position = matProjection * matView * vec4(a_pos,1.0);\n  v_uv = a_uv;\n  v_color = a_color;\n}\n";
var spriteFragmentShader = "\nprecision mediump float;\nprecision mediump int;\n\nuniform sampler2D s_diffuse;\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nvoid main()\n{\n  // Only use the Alpha of the texture as a mask, so that the tint color can still be controlled to fade out.\n  vec4 baseColor = texture2D(s_diffuse, v_uv);\n  gl_FragColor = baseColor * v_color;\n}\n";
core.Shader.create("Sprite", spriteVertShader, spriteFragmentShader);

/**
 * @private
 */

var GLSpriteBatcher = /*#__PURE__*/function () {
  function GLSpriteBatcher(rhi) {
    this._gl = void 0;
    this._batchedQueue = void 0;
    this._targetTexture = void 0;
    this._glSprite = void 0;
    this._camera = void 0;
    this._gl = rhi.gl;
    this._batchedQueue = [];
    this._targetTexture = null;
    this._glSprite = new GLSprite(rhi.gl);
    this._camera = null;
  }

  var _proto = GLSpriteBatcher.prototype;

  _proto.flush = function flush(engine, material) {
    if (this._batchedQueue.length === 0) {
      return;
    }

    if (!this._targetTexture) {
      core.Logger.error("No texture!");
      return;
    }

    var materialData = material.shaderData;
    materialData.setTexture("s_diffuse", this._targetTexture);
    materialData.setMatrix("matView", this._camera.viewMatrix);
    materialData.setMatrix("matProjection", this._camera.projectionMatrix); //@ts-ignore

    var compileMacros = core.RenderQueue.compileMacros;
    compileMacros.clear(); //@ts-ignore

    var program = material.shader._getShaderProgram(engine, compileMacros);

    if (!program.isValid) {
      return;
    }

    program.bind();
    program.groupingOtherUniformBlock();
    program.uploadAll(program.materialUniformBlock, materialData); //@ts-ignore

    material.renderState._apply(engine);

    this._glSprite.beginDraw(this._batchedQueue.length);

    for (var i = 0, len = this._batchedQueue.length; i < len; i++) {
      var positionQuad = this._batchedQueue[i].positionQuad;
      var uvRect = this._batchedQueue[i].uvRect;
      var tintColor = this._batchedQueue[i].tintColor;

      this._glSprite.drawSprite(positionQuad, uvRect, tintColor);
    }

    this._glSprite.endDraw(program);

    this._batchedQueue = [];
    this._targetTexture = null;
    this._camera = null;
  };

  _proto.canBatch = function canBatch(texture, renderMode, camera) {
    if (this._targetTexture === null) {
      return true;
    }

    return texture === this._targetTexture && camera === this._camera;
  };

  _proto.drawSprite = function drawSprite(material, positionQuad, uvRect, tintColor, texture, renderMode, camera) {
    if (!this.canBatch(texture, renderMode, camera)) {
      this.flush(camera.engine, material);
    }

    this._targetTexture = texture;
    this._camera = camera;

    this._batchedQueue.push({
      positionQuad: positionQuad,
      uvRect: uvRect,
      tintColor: tintColor
    });
  };

  _proto.finalize = function finalize() {
    this._glSprite.finalize();
  };

  return GLSpriteBatcher;
}();

/**
 * WebGL mode.
 */
exports.WebGLMode = void 0;
/**
 * WebGL renderer options.
 */

(function (WebGLMode) {
  WebGLMode[WebGLMode["Auto"] = 0] = "Auto";
  WebGLMode[WebGLMode["WebGL2"] = 1] = "WebGL2";
  WebGLMode[WebGLMode["WebGL1"] = 2] = "WebGL1";
})(exports.WebGLMode || (exports.WebGLMode = {}));

/**
 * WebGL renderer, including WebGL1.0 and WebGL2.0.
 */
var WebGLRenderer = /*#__PURE__*/function () {
  function WebGLRenderer(options) {
    if (options === void 0) {
      options = {};
    }

    this._currentBind = void 0;
    this._options = void 0;
    this._gl = void 0;
    this._renderStates = void 0;
    this._extensions = void 0;
    this._spriteBatcher = void 0;
    this._capability = void 0;
    this._isWebGL2 = void 0;
    this._activedTextureID = void 0;
    this._activeTextures = new Array(32);
    this._options = options;
  }

  var _proto = WebGLRenderer.prototype;

  _proto.init = function init(canvas) {
    var option = this._options;
    var webCanvas = canvas._webCanvas;
    option.webGLMode || exports.WebGLMode.Auto;
    var gl;

    {
      gl = webCanvas.getContext("webgl", option);
    }

    if (!gl) {
      throw new Error("Get GL Context FAILED.");
    }

    {
      wechatAdapter.window.initCanvas(webCanvas, gl);
    }

    this._gl = gl;
    this._renderStates = new GLRenderStates(gl);
    this._extensions = new GLExtensions(this);
    this._capability = new GLCapability(this);
    this._options = null;
  };

  _proto.createPlatformPrimitive = function createPlatformPrimitive(primitive) {
    return new GLPrimitive(this, primitive);
  };

  _proto.requireExtension = function requireExtension(ext) {
    return this._extensions.requireExtension(ext);
  };

  _proto.canIUse = function canIUse(capabilityType) {
    return this.capability.canIUse(capabilityType);
  };

  _proto.canIUseCompressedTextureInternalFormat = function canIUseCompressedTextureInternalFormat(type) {
    return this.capability.canIUseCompressedTextureInternalFormat(type);
  };

  _proto.viewport = function viewport(x, y, width, height) {
    // gl.enable(gl.SCISSOR_TEST);
    // gl.scissor(x, transformY, width, height);
    var gl = this._gl;
    gl.viewport(x, gl.drawingBufferHeight - y - height, width, height);
  };

  _proto.colorMask = function colorMask(r, g, b, a) {
    this._gl.colorMask(r, g, b, a);
  };

  _proto.clearRenderTarget = function clearRenderTarget(engine, clearMode, clearParam) {
    var gl = this._gl;
    var _engine$_lastRenderSt = engine._lastRenderState,
        targetBlendState = _engine$_lastRenderSt.blendState.targetBlendState,
        depthState = _engine$_lastRenderSt.depthState,
        stencilState = _engine$_lastRenderSt.stencilState;
    var clearFlag;

    switch (clearMode) {
      case core.ClearMode.SOLID_COLOR:
        gl.clearColor(clearParam.x, clearParam.y, clearParam.z, clearParam.w);
        clearFlag = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT;
        break;

      case core.ClearMode.DEPTH_ONLY:
        clearFlag = gl.DEPTH_BUFFER_BIT;
        break;

      case core.ClearMode.COLOR_ONLY:
        gl.clearColor(clearParam.x, clearParam.y, clearParam.z, clearParam.w);
        clearFlag = gl.COLOR_BUFFER_BIT;
        break;

      case core.ClearMode.STENCIL_ONLY:
        gl.clear(gl.STENCIL_BUFFER_BIT);
        clearFlag = gl.STENCIL_BUFFER_BIT;
        break;

      case core.ClearMode.ALL_CLEAR:
        gl.clearColor(clearParam.x, clearParam.y, clearParam.z, clearParam.w);
        clearFlag = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT;
        break;
    }

    if (clearFlag & gl.COLOR_BUFFER_BIT && targetBlendState.colorWriteMask !== core.ColorWriteMask.All) {
      gl.colorMask(true, true, true, true);
      targetBlendState.colorWriteMask = core.ColorWriteMask.All;
    }

    if (clearFlag & gl.DEPTH_BUFFER_BIT && depthState.writeEnabled !== true) {
      gl.depthMask(true);
      depthState.writeEnabled = true;
    }

    if (clearFlag & gl.STENCIL_BUFFER_BIT && stencilState.writeMask !== 0xff) {
      gl.stencilMask(0xff);
      stencilState.writeMask = 0xff;
    }

    gl.clear(clearFlag);
  };

  _proto.drawPrimitive = function drawPrimitive(primitive, subPrimitive, shaderProgram) {
    // todo: VAO not support morph animation
    if (primitive) {
      //@ts-ignore
      primitive._draw(shaderProgram, subPrimitive);
    } else {
      core.Logger.error("draw primitive failed.");
    }
  };

  _proto.drawSprite = function drawSprite(material, positionQuad, uvRect, tintColor, texture, renderMode, camera) {
    if (!this._spriteBatcher) {
      this._spriteBatcher = new GLSpriteBatcher(this);
    }

    this._spriteBatcher.drawSprite(material, positionQuad, uvRect, tintColor, texture, renderMode, camera);
  };

  _proto.flushSprite = function flushSprite(engine, material) {
    if (this._spriteBatcher) {
      this._spriteBatcher.flush(engine, material);
    }
  };

  _proto.activeRenderTarget = function activeRenderTarget(renderTarget, camera) {
    var gl = this._gl;

    if (renderTarget) {
      renderTarget._activeRenderTarget();

      var width = renderTarget.width,
          height = renderTarget.height;
      gl.viewport(0.0, 0.0, width, height);
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      var viewport = camera.viewport;
      var _width = gl.drawingBufferWidth;
      var _height = gl.drawingBufferHeight;
      this.viewport(viewport.x * _width, viewport.y * _height, viewport.z * _width, viewport.w * _height);
    }
  };

  _proto.blitRenderTarget = function blitRenderTarget(renderTarget) {
    if (renderTarget) {
      if (renderTarget._MSAAFrameBuffer) {
        renderTarget._blitRenderTarget();

        return;
      }
    }
  };

  _proto.setRenderTargetFace = function setRenderTargetFace(renderTarget, cubeFace) {
    if (renderTarget) {
      renderTarget._setRenderTargetFace(cubeFace);
    }
  };

  _proto.destroy = function destroy() {};

  _proto.activeTexture = function activeTexture(textureID) {
    if (this._activedTextureID !== textureID) {
      this._gl.activeTexture(textureID);

      this._activedTextureID = textureID;
    }
  };

  _proto.bindTexture = function bindTexture(target, texture) {
    var gl = this._gl;

    if (this._activeTextures[this._activedTextureID - gl.TEXTURE0] !== texture) {
      gl.bindTexture(target, texture);
      this._activeTextures[this._activedTextureID - gl.TEXTURE0] = texture;
    }
  };

  _createClass(WebGLRenderer, [{
    key: "isWebGL2",
    get: function get() {
      return this._isWebGL2;
    }
  }, {
    key: "gl",
    get: function get() {
      return this._gl;
    }
  }, {
    key: "renderStates",
    get: function get() {
      return this._renderStates;
    }
  }, {
    key: "capability",
    get: function get() {
      return this._capability;
    }
  }, {
    key: "canIUseMoreJoints",
    get: function get() {
      return this.capability.canIUseMoreJoints;
    }
  }]);

  return WebGLRenderer;
}();

/**
 * WebGL platform engine,support includes WebGL1.0 and WebGL2.0.
 */

var WebGLEngine = /*#__PURE__*/function (_Engine) {
  _inheritsLoose(WebGLEngine, _Engine);

  /**
   * Create an engine suitable for the WebGL platform.
   * @param canvas - Native web canvas
   * @param webGLRendererOptions - WebGL renderer options
   */
  function WebGLEngine(canvas, webGLRendererOptions) {
    var webCanvas = new WebCanvas(typeof canvas === "string" ? wechatAdapter.document.getElementById(canvas) : canvas);
    var hardwareRenderer = new WebGLRenderer(webGLRendererOptions);
    return _Engine.call(this, webCanvas, hardwareRenderer) || this;
  }
  /**
   * Web canvas.
   */


  _createClass(WebGLEngine, [{
    key: "canvas",
    get: function get() {
      return this._canvas;
    }
  }]);

  return WebGLEngine;
}(core.Engine);

exports.WebCanvas = WebCanvas;
exports.WebGLEngine = WebGLEngine;
exports.WebGLRenderer = WebGLRenderer;
