'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var oasisEngine = require('oasis-engine');
var wechatAdapter = require('@oasis-engine/wechat-adapter');

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

function log() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  oasisEngine.Logger.info.apply(oasisEngine.Logger, ["🚀 [o3-engine-stats]"].concat(args));
}
function errorLog() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  oasisEngine.Logger.error.apply(oasisEngine.Logger, ["🚀 [o3-engine-stats]"].concat(args));
}

/**
 * @class DrawCallHook
 */

var DrawCallHook = /*#__PURE__*/function () {
  function DrawCallHook(gl) {
    this.drawCall = 0;
    this.triangles = 0;
    this.lines = 0;
    this.points = 0;
    this.hooked = void 0;
    this.realDrawElements = void 0;
    this.realDrawArrays = void 0;
    this.gl = void 0;
    this.realDrawElements = gl.drawElements;
    this.realDrawArrays = gl.drawArrays;
    gl.drawElements = this.hookedDrawElements.bind(this);
    gl.drawArrays = this.hookedDrawArrays.bind(this);
    this.hooked = true;
    this.gl = gl;
    log("DrawCall is hooked.");
  }

  var _proto = DrawCallHook.prototype;

  _proto.hookedDrawElements = function hookedDrawElements(mode, count, type, offset) {
    this.realDrawElements.call(this.gl, mode, count, type, offset);
    this.update(count, mode);
  };

  _proto.hookedDrawArrays = function hookedDrawArrays(mode, first, count) {
    this.realDrawArrays.call(this.gl, mode, first, count);
    this.update(count, mode);
  };

  _proto.update = function update(count, mode) {
    var gl = this.gl;
    this.drawCall++;

    switch (mode) {
      case gl.TRIANGLES:
        this.triangles += count / 3;
        break;

      case gl.TRIANGLE_STRIP:
      case gl.TRIANGLE_FAN:
        this.triangles += count - 2;
        break;

      case gl.LINES:
        this.lines += count / 2;
        break;

      case gl.LINE_STRIP:
        this.lines += count - 1;
        break;

      case gl.LINE_LOOP:
        this.lines += count;
        break;

      case gl.POINTS:
        this.points += count;
        break;

      default:
        errorLog("Unknown draw mode: " + mode);
        break;
    }
  };

  _proto.reset = function reset() {
    this.drawCall = 0;
    this.triangles = 0;
    this.lines = 0;
    this.points = 0;
  };

  _proto.release = function release() {
    if (this.hooked) {
      this.gl.drawElements = this.realDrawElements;
      this.gl.drawArrays = this.realDrawArrays;
    }

    this.hooked = false;
  };

  return DrawCallHook;
}();

/**
 * @class ShaderHook
 */

var ShaderHook = /*#__PURE__*/function () {
  function ShaderHook(gl) {
    this.shaders = 0;
    this.realAttachShader = void 0;
    this.realDetachShader = void 0;
    this.hooked = void 0;
    this.gl = void 0;
    this.realAttachShader = gl.attachShader;
    this.realDetachShader = gl.detachShader;
    gl.attachShader = this.hookedAttachShader.bind(this);
    gl.detachShader = this.hookedDetachShader.bind(this);
    this.hooked = true;
    this.gl = gl;
    log("Shader is hooked.");
  }

  var _proto = ShaderHook.prototype;

  _proto.hookedAttachShader = function hookedAttachShader(program, shader) {
    this.realAttachShader.call(this.gl, program, shader);
    this.shaders++;
    log("AttachShader:", shader, "shaders: " + this.shaders);
  };

  _proto.hookedDetachShader = function hookedDetachShader(program, shader) {
    this.realDetachShader.call(this.gl, program, shader);
    this.shaders--;
    log("DetachShader. shaders: " + this.shaders);
  };

  _proto.reset = function reset() {
    this.shaders = 0;
  };

  _proto.release = function release() {
    if (this.hooked) {
      this.gl.attachShader = this.realAttachShader;
      this.gl.detachShader = this.realDetachShader;
    }

    this.hooked = false;
  };

  return ShaderHook;
}();

/**
 * @class TextureHook
 */

var TextureHook = /*#__PURE__*/function () {
  function TextureHook(gl) {
    this.textures = 0;
    this.realCreateTexture = void 0;
    this.realDeleteTexture = void 0;
    this.hooked = void 0;
    this.gl = void 0;
    this.realCreateTexture = gl.createTexture;
    this.realDeleteTexture = gl.deleteTexture;
    gl.createTexture = this.hookedCreateTexture.bind(this);
    gl.deleteTexture = this.hookedDeleteTexture.bind(this);
    this.hooked = true;
    this.gl = gl;
    log("Texture is hooked.");
  }

  var _proto = TextureHook.prototype;

  _proto.hookedCreateTexture = function hookedCreateTexture() {
    var texture = this.realCreateTexture.call(this.gl);
    this.textures++;
    log("CreateTexture:", texture, "textures: " + this.textures);
    return texture;
  };

  _proto.hookedDeleteTexture = function hookedDeleteTexture(texture) {
    this.realDeleteTexture.call(this.gl, texture);
    this.textures--;
    log("DeleteTexture. textures: " + this.textures);
  };

  _proto.reset = function reset() {
    this.textures = 0;
  };

  _proto.release = function release() {
    if (this.hooked) {
      this.gl.createTexture = this.realCreateTexture;
      this.gl.deleteTexture = this.realDeleteTexture;
    }

    this.hooked = false;
  };

  return TextureHook;
}();

/**
 * @class Core
 */
var Core = /*#__PURE__*/function () {
  function Core(gl) {
    this.gl = void 0;
    this.drawCallHook = void 0;
    this.textureHook = void 0;
    this.shaderHook = void 0;
    this.samplingFrames = 60;
    this.samplingIndex = 0;
    this.updateCounter = 0;
    this.updateTime = 0;
    this.gl = gl;
    this.hook(gl);
  }

  var _proto = Core.prototype;

  _proto.hook = function hook(gl) {
    this.drawCallHook = new DrawCallHook(gl);
    this.textureHook = new TextureHook(gl);
    this.shaderHook = new ShaderHook(gl);
  };

  _proto.reset = function reset() {
    this.drawCallHook && this.drawCallHook.reset();
  };

  _proto.release = function release() {
    this.drawCallHook && this.drawCallHook.release();
    this.textureHook && this.textureHook.release();
    this.shaderHook && this.shaderHook.release();
  };

  _proto.update = function update() {
    this.updateCounter++;
    var now = wechatAdapter.performance.now();

    if (now - this.updateTime < 1000) {
      return;
    }

    if (this.samplingIndex !== this.samplingFrames) {
      this.reset();
      this.samplingIndex++;
      return;
    }

    this.samplingIndex = 0;
    var data = {
      fps: Math.round(this.updateCounter * 1000 / (now - this.updateTime)),
      memory: wechatAdapter.performance.memory && wechatAdapter.performance.memory.usedJSHeapSize / 1048576 >> 0,
      drawCall: this.drawCallHook.drawCall,
      triangles: this.drawCallHook.triangles,
      //@ts-ignorets-ignore
      nodes: oasisEngine.Entity._entitys.length,
      lines: this.drawCallHook.lines,
      points: this.drawCallHook.points,
      textures: this.textureHook.textures,
      shaders: this.shaderHook.shaders,
      webglContext: wechatAdapter.window.hasOwnProperty("WebGL2RenderingContext") && this.gl instanceof wechatAdapter.WebGL2RenderingContext ? "2.0" : "1.0"
    };
    this.reset();
    this.updateCounter = 0;
    this.updateTime = now;
    return data;
  };

  return Core;
}();

var tpl = "\n  <dl>\n    <dt>FPS</dt>\n    <dd>0</dd>\n    <dt>Memory <span class=\"unit\">(MB)</span></dt>\n    <dd>0</dd>\n    <dt>DrawCall</dt>\n    <dd>0</dd>\n    <dt>Triangles</dt>\n    <dd>0</dd>\n    <dt>Nodes</dt>\n    <dd>0</dd>\n    <dt>Textures</dt>\n    <dd>0</dd>\n    <dt>Shaders</dt>\n    <dd>0</dd>\n    <dt>WebGL</dt>\n    <dd></dd>\n  </dl>\n";
var css = "\n  .gl-perf {\n    pointer-events: none;\n    user-select: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    padding: " + 10 / 7.5 + "vh " + 10 / 7.5 + "vh 0 " + 10 / 7.5 + "vh;\n    background: rgba(0, 0, 0, 0.3);\n    color: #fff;\n    font: " + 10 / 7.5 + "vh arial;\n  }\n\n  .gl-perf dl,\n  .gl-perf dt,\n  .gl-perf dd {\n    padding: 0;\n    margin: 0;\n  }\n\n  .gl-perf dt {\n    color: #fff;\n    text-shadow: #000 0 0 1px;\n  }\n\n  .gl-perf dt .unit{\n    font-size: " + 10 / 7.5 + "vh;\n  }\n\n  .gl-perf dd {\n    font-size: " + 20 / 7.5 + "vh;\n    padding: " + 10 / 7.5 + "vh 0 " + 10 / 7.5 + "vh;\n  }\n";

var Monitor = /*#__PURE__*/function () {
  function Monitor(gl) {
    this.core = void 0;
    this.doms = void 0;
    this.items = void 0;
    this.container = void 0;
    this.core = new Core(gl);
    this.items = [];
    this.items = ["fps", "memory", "drawCall", "triangles", "nodes", "textures", "shaders", "webglContext"];
    this.createContainer();
    this.update = this.update.bind(this);
  }

  var _proto = Monitor.prototype;

  _proto.createContainer = function createContainer() {
    var container = wechatAdapter.document.createElement("div");
    container.classList.add("gl-perf");
    container.innerHTML = tpl;
    container.appendChild(this.createStyle());
    wechatAdapter.document.body.appendChild(container);
    this.doms = Array.prototype.slice.apply(container.querySelectorAll("dd"));
    this.container = container;
  };

  _proto.createStyle = function createStyle() {
    var style = wechatAdapter.document.createElement("style");
    style.type = "text/css";
    style.appendChild(wechatAdapter.document.createTextNode(css));
    return style;
  }
  /**
   * Update per frame
   */
  ;

  _proto.update = function update() {
    var _this = this;

    var data = this.core.update();

    if (data) {
      var _loop = function _loop(i, l) {
        var dom = _this.doms[i];
        var item = _this.items[i];
        var value = data[item] || 0; // see: http://wilsonpage.co.uk/preventing-layout-thrashing/

        wechatAdapter.requestAnimationFrame(function () {
          dom.innerText = value;
        });
      };

      for (var i = 0, l = this.items.length; i < l; i++) {
        _loop(i, l);
      }
    }
  }
  /**
   * reset all hooks
   */
  ;

  _proto.reset = function reset() {
    this.core.reset();
  }
  /**
   * release all hooks
   */
  ;

  _proto.release = function release() {
    this.core.release();
  }
  /**
   * destory the instance
   */
  ;

  _proto.destroy = function destroy() {
    this.release();
    wechatAdapter.document.body.removeChild(this.container);
  };

  return Monitor;
}();

/**
 * Engine Feature: Display engine status data such as FPS.
 */

var Stats = /*#__PURE__*/function (_EngineFeature) {
  _inheritsLoose(Stats, _EngineFeature);

  /**
   * Constructor of Stats.
   */
  function Stats() {
    var _this;

    _this = _EngineFeature.call(this) || this;
    _this.monitor = void 0;
    return _this;
  }
  /**
   * Tick pre-callback.
   */


  var _proto = Stats.prototype;

  _proto.preTick = function preTick(engine, currentScene) {
    if (!this.monitor) {
      var gl = currentScene.engine._hardwareRenderer.gl;

      if (gl) {
        this.monitor = new Monitor(gl);
      }
    }
  }
  /**
   * Tick post-callback.
   */
  ;

  _proto.postTick = function postTick(engine, currentScene) {
    if (this.monitor) {
      this.monitor.update();
    }
  };

  return Stats;
}(oasisEngine.EngineFeature);

oasisEngine.Engine.registerFeature(Stats);

exports.Stats = Stats;
