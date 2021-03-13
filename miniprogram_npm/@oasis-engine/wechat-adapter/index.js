'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.devicePixelRatio = 1;
exports.WebGLRenderingContext = undefined;
exports.WebGL2RenderingContext = undefined;
exports.innerWidth = 0;
exports.innerHeight = 0;
exports.outerWidth = 0;
exports.outerHeight = 0;

try {
  var res = wx.getSystemInfoSync();
  exports.devicePixelRatio = res.pixelRatio;
  exports.innerWidth = res.windowWidth;
  exports.innerHeight = res.windowHeight;
  exports.outerWidth = res.screenWidth;
  exports.outerHeight = res.screenHeight;
} catch (err) {}

function base64ToArrayBuffer(base64) {
  return wx.base64ToArrayBuffer(base64);
}
function arrayBufferToBase64(arrayBuffer) {
  return wx.arrayBufferToBase64(arrayBuffer);
}
var performance = Date;
var _canvas = null;
function initCanvas(canvas, gl) {
  _canvas = canvas;
  exports.WebGLRenderingContext = exports.WebGL2RenderingContext = gl;
}
function requestAnimationFrame(callback) {
  return _canvas.requestAnimationFrame(callback);
}
function cancelAnimationFrame(id) {
  return _canvas.cancelAnimationFrame(id);
}
function Image() {
  return _canvas.createImage();
}
var document = undefined;
var navigator = {};
function request(url, options) {
  return wx.request(url, options);
}
var window = {
  initCanvas: initCanvas,
  WebGLRenderingContext: exports.WebGLRenderingContext,
  WebGL2RenderingContext: exports.WebGL2RenderingContext,
  base64ToArrayBuffer: base64ToArrayBuffer,
  arrayBufferToBase64: arrayBufferToBase64,
  innerWidth: exports.innerWidth,
  innerHeight: exports.innerHeight,
  outerWidth: exports.outerWidth,
  outerHeight: exports.outerHeight,
  setTimeout: setTimeout,
  setInterval: setInterval,
  devicePixelRatio: exports.devicePixelRatio,
  Image: Image,
  document: document,
  navigator: navigator,
  request: request
};

exports.Image = Image;
exports.arrayBufferToBase64 = arrayBufferToBase64;
exports.base64ToArrayBuffer = base64ToArrayBuffer;
exports.cancelAnimationFrame = cancelAnimationFrame;
exports.document = document;
exports.initCanvas = initCanvas;
exports.navigator = navigator;
exports.performance = performance;
exports.request = request;
exports.requestAnimationFrame = requestAnimationFrame;
exports.window = window;
