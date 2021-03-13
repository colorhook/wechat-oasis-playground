'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var oasisEngine = require('oasis-engine');

/**
 * Tween class
 * @class
 */
var Tween = /*#__PURE__*/function () {
  /**
   * @constructor
   */
  function Tween() {
    this._nextId = void 0;
    this.tweeners = void 0;
    this._nextId = 0;
    this.tweeners = {};
  }
  /**
   * Next id.
   * @member {number}
   * @readonly
   */


  var _proto = Tween.prototype;

  _proto.getId = function getId() {
    return this._nextId++;
  }
  /**
   * Add keyframe.
   * @param tweener - Keyframe
   */
  ;

  _proto.add = function add(tweener) {
    if (!tweener.id) {
      tweener.id = this.getId();
    }

    this.tweeners[tweener.id] = tweener;
  }
  /**
   * Update the internal state of the tween and delete the key frames that have been played and are not needed.
   * @param {number} deltaTime - Time between two frames
   */
  ;

  _proto.update = function update(deltaTime) {
    for (var tweenerId in this.tweeners) {
      var tweener = this.tweeners[tweenerId];
      tweener.update(deltaTime); // remove unused tweener

      if (tweener._played && tweener._paused && !tweener.preserved) {
        delete this.tweeners[tweenerId];
      }
    }
  };

  return Tween;
}();

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

var LOOP_TYPE = {
  Restart: 0,
  Yoyo: 1 // TODO
  // Incremental: 2,

};

/**
 * Fork from https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */
// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === "function";

function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}

function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
}

function C(aA1) {
  return 3.0 * aA1;
} // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.


function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
} // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.


function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX,
      currentT,
      i = 0;

  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;

    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

  return currentT;
}

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);

    if (currentSlope === 0.0) {
      return aGuessT;
    }

    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }

  return aGuessT;
}

function LinearEasing(x) {
  return x;
}

function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  } // Precompute samples table


  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }

    --currentSample; // Interpolate to provide an initial guess for t

    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);

    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing(x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0 || x === 1) {
      return x;
    }

    return calcBezier(getTForX(x), mY1, mY2);
  };
}

function linear(t, b, c, d) {
  return c * t / d + b;
}
function easeInQuad(t, b, c, d) {
  return c * (t /= d) * t + b;
}
function easeOutQuad(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}
function easeInOutQuad(t, b, c, d) {
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t + b;
  } else {
    return -c / 2 * (--t * (t - 2) - 1) + b;
  }
}
function easeInCubic(t, b, c, d) {
  return c * (t /= d) * t * t + b;
}
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function easeInOutCubic(t, b, c, d) {
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t * t + b;
  } else {
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  }
}
function easeInQuart(t, b, c, d) {
  return c * (t /= d) * t * t * t + b;
}
function easeOutQuart(t, b, c, d) {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}
function easeInOutQuart(t, b, c, d) {
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t * t * t + b;
  } else {
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  }
}
function easeInQuint(t, b, c, d) {
  return c * (t /= d) * t * t * t * t + b;
}
function easeOutQuint(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}
function easeInOutQuint(t, b, c, d) {
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t * t * t * t + b;
  } else {
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  }
}
function easeInSine(t, b, c, d) {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
}
function easeOutSine(t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
}
function easeInOutSine(t, b, c, d) {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}
function easeInExpo(t, b, c, d) {
  var _ref;

  return (_ref = t === 0) !== null ? _ref : {
    b: c * Math.pow(2, 10 * (t / d - 1)) + b
  };
}
function easeOutExpo(t, b, c, d) {
  var _ref;

  return (_ref = t === d) !== null ? _ref : b + {
    c: c * (-Math.pow(2, -10 * t / d) + 1) + b
  };
}
function easeInOutExpo(t, b, c, d) {

  if ((t /= d / 2) < 1) {
    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  } else {
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
}
function easeInCirc(t, b, c, d) {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}
function easeOutCirc(t, b, c, d) {
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}
function easeInOutCirc(t, b, c, d) {
  if ((t /= d / 2) < 1) {
    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
  } else {
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }
}
function easeInElastic(t, b, c, d) {
  var a, p, s;
  s = 1.70158;
  p = 0;
  a = c;

  if (t === 0) ; else if ((t /= d) === 1) ;

  if (!p) {
    p = d * 0.3;
  }

  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(c / a);
  }

  return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
}
function easeOutElastic(t, b, c, d) {
  var a, p, s;
  s = 1.70158;
  p = 0;
  a = c;

  if (t === 0) ; else if ((t /= d) === 1) ;

  if (!p) {
    p = d * 0.3;
  }

  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(c / a);
  }

  return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
}
function easeInOutElastic(t, b, c, d) {
  var a, p, s;
  s = 1.70158;
  p = 0;
  a = c;

  if (t === 0) ; else if ((t /= d / 2) === 2) ;

  if (!p) {
    p = d * (0.3 * 1.5);
  }

  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(c / a);
  }

  if (t < 1) {
    return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  } else {
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
  }
}
function easeInBack(t, b, c, d, s) {
  if (s === void 0) {
    s = 1.70158;
  }

  return c * (t /= d) * t * ((s + 1) * t - s) + b;
}
function easeOutBack(t, b, c, d, s) {
  if (s === void 0) {
    s = 1.70158;
  }

  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}
function easeInOutBack(t, b, c, d, s) {
  if (s === void 0) {
    s = 1.70158;
  }

  if ((t /= d / 2) < 1) {
    return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  } else {
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  }
}
function easeInBounce(t, b, c, d) {
  var v;
  v = easeOutBounce(d - t, 0, c, d);
  return c - v + b;
}
function easeOutBounce(t, b, c, d) {
  if ((t /= d) < 1 / 2.75) {
    return c * (7.5625 * t * t) + b;
  } else if (t < 2 / 2.75) {
    return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
  } else if (t < 2.5 / 2.75) {
    return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
  } else {
    return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
  }
}
function easeInOutBounce(t, b, c, d) {
  var v;

  if (t < d / 2) {
    v = easeInBounce(t * 2, 0, c, d);
    return v * 0.5 + b;
  } else {
    v = easeOutBounce(t * 2 - d, 0, c, d);
    return v * 0.5 + c * 0.5 + b;
  }
}
/**
 * Generate easing through bezier curve control points.
 * Hats off to gre: https://github.com/gre/bezier-easing
 *
 * @param x1 - X of control point 1, range 0-1
 * @param y1 - Y of control point 1, range 0-1
 * @param x2 - X of control point 2, range 0-1
 * @param y2 - Y of control point 2, range 0-1
 */

function bezierEasing(x1, y1, x2, y2) {
  var easing = bezier(x1, y1, x2, y2);
  return function (t, b, c, d) {
    return c * easing(t / d) + b;
  };
}

var Easing = /*#__PURE__*/Object.freeze({
  __proto__: null,
  linear: linear,
  easeInQuad: easeInQuad,
  easeOutQuad: easeOutQuad,
  easeInOutQuad: easeInOutQuad,
  easeInCubic: easeInCubic,
  easeOutCubic: easeOutCubic,
  easeInOutCubic: easeInOutCubic,
  easeInQuart: easeInQuart,
  easeOutQuart: easeOutQuart,
  easeInOutQuart: easeInOutQuart,
  easeInQuint: easeInQuint,
  easeOutQuint: easeOutQuint,
  easeInOutQuint: easeInOutQuint,
  easeInSine: easeInSine,
  easeOutSine: easeOutSine,
  easeInOutSine: easeInOutSine,
  easeInExpo: easeInExpo,
  easeOutExpo: easeOutExpo,
  easeInOutExpo: easeInOutExpo,
  easeInCirc: easeInCirc,
  easeOutCirc: easeOutCirc,
  easeInOutCirc: easeInOutCirc,
  easeInElastic: easeInElastic,
  easeOutElastic: easeOutElastic,
  easeInOutElastic: easeInOutElastic,
  easeInBack: easeInBack,
  easeOutBack: easeOutBack,
  easeInOutBack: easeInOutBack,
  easeInBounce: easeInBounce,
  easeOutBounce: easeOutBounce,
  easeInOutBounce: easeInOutBounce,
  bezierEasing: bezierEasing
});

var noop = function noop() {}; // on events
// play, pause, complete, kill, rewind, update

/**
 * TweenBase class
 * @class
 * @private
 */


var TweenerBase = /*#__PURE__*/function () {
  function TweenerBase(getter, setter, endValue, interval, options, target) {
    if (options === void 0) {
      options = {};
    }

    this._time = void 0;
    this._paused = void 0;
    this._remainLoops = void 0;
    this._played = void 0;
    this.options = void 0;
    this.elapsedTime = void 0;
    this.interval = void 0;
    this.rewind = void 0;
    this.preserved = void 0;
    this.startValue = void 0;
    this.endValue = void 0;
    this.getter = void 0;
    this.setter = void 0;
    this.options = _objectSpread2({
      id: "",
      loops: {
        // set -1 as infinite
        count: 0,
        type: LOOP_TYPE.Yoyo
      },
      easing: linear,
      delay: 0,
      plugin: noop,
      pluginOptions: {},
      // callbacks
      onComplete: noop,
      onTick: noop
    }, options);
    this._time = 0;
    this._remainLoops = this.options.loops.count || 0;
    this._paused = true;
    this._played = false;
    this.rewind = false;
    this.preserved = false;
    this.elapsedTime = 0;
    this.startValue = getter();
    this.endValue = endValue;
    this.getter = getter;
    this.setter = setter;
    this.interval = interval;
  }

  var _proto = TweenerBase.prototype;

  _proto.duration = function duration() {};

  _proto.update = function update(deltaTime) {}
  /**
   * Set loop times.
   * @param {number} count - Loop count
   * @param {LOOP_TYPE} type - Loop type
   */
  ;

  _proto.setLoops = function setLoops(count, type) {
    if (type === void 0) {
      type = LOOP_TYPE.Yoyo;
    }

    this.options.loops = {
      count: count,
      type: type
    }; // reset loop

    this._remainLoops = count;
    return this;
  };

  _proto.set = function set(key, value) {
    var _objectSpread2$1;

    this.options = _objectSpread2(_objectSpread2({}, this.options), (_objectSpread2$1 = {}, _objectSpread2$1[key] = value, _objectSpread2$1));
    return this;
  };

  _proto.stop = function stop() {
    this.options.onComplete(this);
    this._paused = true;
    return this;
  };

  _proto.pause = function pause() {
    if (this._paused) return false;
    this._paused = true;
    return this;
  };

  _proto.start = function start(tweenManager) {
    if (tweenManager) {
      tweenManager.add(this);
    }

    if (!this._paused) return false;
    this.elapsedTime = 0;
    this._paused = false;
    this._played = true;
    return this;
  };

  return TweenerBase;
}();

// play, pause, complete, kill, rewind, update

/**
 * Tweener class
 * @extends TweenerBase
 */


var Tweener = /*#__PURE__*/function (_TweenerBase) {
  _inheritsLoose(Tweener, _TweenerBase);

  /**
   * @constructor
   * @param {function} getter - Getter function
   * @param {function} setter - Setter function
   * @param {number} endValue - End value
   * @param {number} interval - Time interval
   * @param {Object} options - Options
   * @param target
   * @param {function} options.onComplete - Completed callback function
   */
  function Tweener(getter, setter, endValue, interval, options, target) {
    if (options === void 0) {
      options = {};
    }

    if (target === void 0) {
      target = null;
    }

    return _TweenerBase.call(this, getter, setter, endValue, interval, options, target) || this;
  }
  /** Calculate the total duration of Tween animation.
   * @member {number}
   */


  var _proto = Tweener.prototype;

  _proto.duration = function duration() {
    // infinite
    var duration = 0;

    if (this.options.loops.count === -1) {
      duration = -1;
    } else {
      // FIXME: add rewind time
      duration = this.options.delay + this.options.loops.count * this.interval;
    }

    return duration;
  }
  /**
   * Update the state in the tween and detect whether the animation is about to end.
   * @param {number} deltaTime - Time between two frames
   * @private
   */
  ;

  _proto.update = function update(deltaTime) {
    this._time += deltaTime;

    if (!this._paused) {
      // if delay don't update
      if (this.options.delay > this._time) {
        return true;
      }

      this.elapsedTime += deltaTime; // in case deltaTime is really big

      this.elapsedTime = this.elapsedTime > this.interval ? this.interval : this.elapsedTime; // on start callback

      this.options.plugin(this);
      this.options.onTick(this); // everything has an end....

      if (this.elapsedTime === this.interval) {
        // loop it
        if (this._remainLoops > 0 || this._remainLoops <= -1) {
          switch (this.options.loops.type) {
            case LOOP_TYPE.Yoyo:
              this.rewind = !this.rewind;
              this.elapsedTime = 0;

              if (!this.rewind) {
                this._remainLoops--;
              }

              break;

            case LOOP_TYPE.Restart:
              // reset
              this.elapsedTime = 0;
              this._remainLoops--;
              break;
          }
        } else {
          this.stop();
        }
      }

      return true;
    }
  };

  return Tweener;
}(TweenerBase);

var QuaternionPlugin = function QuaternionPlugin(tweener) {
  var easing = tweener.options.easing;
  var result = new oasisEngine.Quaternion();
  var percent = easing(tweener.elapsedTime, 0, 1, tweener.interval);
  oasisEngine.Quaternion.slerp(tweener.startValue, tweener.endValue, percent, result);
  tweener.setter(result);
};

var FloatPlugin = function FloatPlugin(tweener) {
  var easing = tweener.options.easing;
  var result = easing(tweener.elapsedTime, tweener.startValue, tweener.endValue - tweener.startValue, tweener.interval);
  tweener.setter(result);
};

var handleVecComp = function handleVecComp(tweener, comp, result) {
  var easing = tweener.options.easing;
  var startValue = tweener.startValue[comp];
  var offsetValue = tweener.endValue[comp] - tweener.startValue[comp];

  if (tweener.rewind) {
    startValue = tweener.endValue[comp];
    offsetValue = tweener.startValue[comp] - tweener.endValue[comp];
  }

  result[comp] = easing(tweener.elapsedTime, startValue, offsetValue, tweener.interval);
};

var VectorPluginGenerator = function VectorPluginGenerator(count) {
  return function (tweener) {
    var result;

    switch (count) {
      case 2:
        result = new oasisEngine.Vector2();
        handleVecComp(tweener, "x", result);
        handleVecComp(tweener, "y", result);
        break;

      case 3:
        result = new oasisEngine.Vector3();
        handleVecComp(tweener, "x", result);
        handleVecComp(tweener, "y", result);
        handleVecComp(tweener, "z", result);
        break;

      default:
        result = new oasisEngine.Vector4();
        handleVecComp(tweener, "x", result);
        handleVecComp(tweener, "y", result);
        handleVecComp(tweener, "z", result);
        handleVecComp(tweener, "w", result);
        break;
    }

    tweener.setter(result);
  };
};

var Vector2Plugin = VectorPluginGenerator(2);

var Vector3Plugin = VectorPluginGenerator(3);

var Vector4Plugin = VectorPluginGenerator(4);

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  QuaternionPlugin: QuaternionPlugin,
  FloatPlugin: FloatPlugin,
  Vector2Plugin: Vector2Plugin,
  Vector3Plugin: Vector3Plugin,
  Vector4Plugin: Vector4Plugin
});

/***  Do rotation interpolation transformation.
 * @param {Object} obj - Object
 * @param {quat} endValue - End quaternion
 * @param {number} interval - Time interval
 * @param {Object} options - Options
 * @param {function} options.onComplete - Completed callback function
 */

var doTransformRotate = function doTransformRotate(obj, endValue, interval, options) {
  if (options === void 0) {
    options = {};
  }

  options.plugin = options.plugin || QuaternionPlugin;
  return new Tweener(function () {
    return obj.rotation.clone();
  }, function (value) {
    return obj.rotation = value;
  }, endValue, interval, options, obj);
};
/*** Do translation interpolation transformation.
 * @param {Object} obj - Object
 * @param {Vector3} endValue - End value
 * @param {number} interval - Time interval
 * @param {Object} options - Options
 * @param {function} options.onComplete - Completed callback function
 */


var doTransformTranslate = function doTransformTranslate(obj, endValue, interval, options) {
  if (options === void 0) {
    options = {};
  }

  options.plugin = options.plugin || Vector3Plugin;
  return new Tweener(function () {
    return obj.position.clone();
  }, function (value) {
    return obj.position = value;
  }, endValue, interval, options, obj);
};
/*** Do scaling interpolation transformation.
 * @param {Object} obj - Object
 * @param {Vector3} endValue - End value
 * @param {number} interval - Time interval
 * @param {Object} options - Options
 * @param {function} options.onComplete - Completed callback function
 */


var doTransformScale = function doTransformScale(obj, endValue, interval, options) {
  if (options === void 0) {
    options = {};
  }

  options.plugin = options.plugin || Vector3Plugin;
  return new Tweener(function () {
    return obj.scale.clone();
  }, function (value) {
    return obj.scale = value;
  }, endValue, interval, options, obj);
};
/***
 * Do material parameters interpolation transformation.
 * @param {Material} mtl - Material
 * @param {*} endValue - End value
 * @param {string} property - Material property
 * @param {number} interval - Time interval
 * @param {Object} options - Options
 * @param {function} options.onComplete - Completed callback function
 */


var doMaterialValue = function doMaterialValue(mtl, endValue, property, interval, options) {
  if (property === void 0) {
    property = "";
  }

  if (options === void 0) {
    options = {};
  }

  options.plugin = options.plugin || FloatPlugin;
  return new Tweener(function () {
    return mtl.getValue(property);
  }, function (value) {
    return mtl.setValue(property, value);
  }, endValue, interval, options, mtl);
};
/*** Do material color interpolation transformation.
 * @param {Material} mtl - Material
 * @param {Vector3} endValue - End value
 * @param {string} property - Material property
 * @param {number} interval - Time interval
 * @param {Object} options - Options
 * @param {function} options.onComplete - Completed callback function
 */


var doMaterialColor = function doMaterialColor(mtl, endValue, property, interval, options) {
  if (property === void 0) {
    property = "";
  }

  if (options === void 0) {
    options = {};
  }

  options.plugin = options.plugin || Vector3Plugin;
  return new Tweener(function () {
    return mtl.getValue(property);
  }, function (value) {
    mtl.setValue(property, [value[0] / 255, value[1] / 255, value[2] / 255]);
  }, endValue, interval, options, mtl);
};
/*** Do general numerical interpolation transformation.
 * @param {number|Vector2|Vector3|Vector4} startValue - Start value
 * @param {function} setter - Setter function
 * @param {number|Vector2|Vector3|Vector4} endValue - End value
 * @param interval - Time interval
 * @param {Object} options - Options
 * @param {DataType} options.dataType
 * @param {function} options.onComplete - Completed callback function
 */


var doTransformByDataType = function doTransformByDataType(startValue, setter, endValue, interval, options) {
  if (options === void 0) {
    options = {};
  }

  if (options.dataType === oasisEngine.DataType.FLOAT_VEC2) {
    options.plugin = options.plugin || Vector2Plugin;
    return new Tweener(function () {
      return startValue.clone();
    }, setter, endValue, interval, options);
  } else if (options.dataType === oasisEngine.DataType.FLOAT_VEC3) {
    options.plugin = options.plugin || Vector3Plugin;
    return new Tweener(function () {
      return startValue.clone();
    }, setter, endValue, interval, options);
  } else if (options.dataType === oasisEngine.DataType.FLOAT_VEC4) {
    options.plugin = options.plugin || Vector3Plugin;
    return new Tweener(function () {
      return startValue.clone();
    }, setter, endValue, interval, options);
  } else {
    options.plugin = options.plugin || FloatPlugin;
    return new Tweener(function () {
      return startValue;
    }, setter, endValue, interval, options);
  }
};

var doTransform = {
  Rotate: doTransformRotate,
  Translate: doTransformTranslate,
  Scale: doTransformScale,
  DataType: doTransformByDataType
};
var doMaterial = {
  Float: doMaterialValue,
  Color: doMaterialColor
};

exports.Easing = Easing;
exports.LOOP_TYPE = LOOP_TYPE;
exports.Tween = Tween;
exports.TweenPlugins = index;
exports.Tweener = Tweener;
exports.doMaterial = doMaterial;
exports.doTransform = doTransform;
