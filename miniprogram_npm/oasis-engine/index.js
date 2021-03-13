'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@oasis-engine/core');
var loader = require('@oasis-engine/loader');
var math = require('@oasis-engine/math');
var rhiWebgl = require('@oasis-engine/rhi-webgl');

loader.Parser.registerComponents("o3", {
  GLTFModel: loader.GLTFModel,
  SpriteRenderer: core.SpriteRenderer,
  PointLight: core.PointLight,
  AmbientLight: core.AmbientLight,
  DirectLight: core.DirectLight,
  EnvironmentMapLight: core.EnvironmentMapLight,
  ParticleRenderer: core.ParticleRenderer,
  SkyBox: core.SkyBox,
  BoxCollider: core.BoxCollider,
  GeometryRenderer: core.GeometryRenderer,
  Camera: core.Camera,
  Component: core.Component,
  SphereCollider: core.SphereCollider,
  Model: core.Model
}); //@ts-ignore

var version = "0.2.2";
console.log("oasis engine version: " + version);

exports.version = version;
Object.keys(core).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return core[k];
    }
  });
});
Object.keys(loader).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return loader[k];
    }
  });
});
Object.keys(math).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return math[k];
    }
  });
});
Object.keys(rhiWebgl).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return rhiWebgl[k];
    }
  });
});
