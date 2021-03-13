'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var wechatAdapter = require('@oasis-engine/wechat-adapter');
var oasisEngine = require('oasis-engine');

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var ESP = oasisEngine.MathUtil.zeroTolerance;

function includes(array) {
  for (var _len = arguments.length, filterArray = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    filterArray[_key - 1] = arguments[_key];
  }

  return filterArray.some(function (e) {
    return array.indexOf(e) !== -1;
  });
}
/**
 * The camera's roaming controller, can move up and down, left and right, and rotate the viewing angle.
 */


var FreeControl = /*#__PURE__*/function (_Script) {
  _inheritsLoose(FreeControl, _Script);

  /**
   * Movement distance per second, the unit is the unit before MVP conversion.
   */

  /**
   * Rotate speed.
   */

  /**
   * Simulate a ground.
   */

  /**
   * Simulated ground height.
   */

  /**
   * Only rotate when press=true
   */

  /**
   * Radian of spherical.theta.
   */

  /**
   * Radian of spherical.phi.
   */
  function FreeControl(entity) {
    var _this;

    _this = _Script.call(this, entity) || this;
    _this._forward = new oasisEngine.Vector3();
    _this._right = new oasisEngine.Vector3();
    _this.camera = void 0;
    _this.mainElement = void 0;
    _this.domElement = void 0;
    _this.movementSpeed = void 0;
    _this.rotateSpeed = void 0;
    _this.floorMock = void 0;
    _this.floorY = void 0;
    _this.press = void 0;
    _this.keysForward = void 0;
    _this.keysBackward = void 0;
    _this.keysLeft = void 0;
    _this.keysRight = void 0;
    _this._theta = void 0;
    _this._phi = void 0;
    _this._moveForward = void 0;
    _this._moveBackward = void 0;
    _this._moveLeft = void 0;
    _this._moveRight = void 0;
    _this._v3Cache = void 0;
    _this._spherical = void 0;
    _this._rotateOri = void 0;
    _this._events = void 0;
    _this.camera = entity; // @ts-ignore
    // @todo In the future, the dependence on html elements will be removed and realized through the input of the packaging engine.

    _this.mainElement = _this.scene.engine.canvas._webCanvas;
    _this.domElement = wechatAdapter.document;
    _this.movementSpeed = 1.0;
    _this.rotateSpeed = 1.0;
    _this.floorMock = true;
    _this.floorY = 0;
    _this.press = false;
    _this.keysForward = ["KeyW", "ArrowUp"];
    _this.keysBackward = ["KeyS", "ArrowDown"];
    _this.keysLeft = ["KeyA", "ArrowLeft"];
    _this.keysRight = ["KeyD", "ArrowRight"];
    _this._theta = 0;
    _this._phi = 0; // private variables

    _this._moveForward = false;
    _this._moveBackward = false;
    _this._moveLeft = false;
    _this._moveRight = false;
    _this._v3Cache = new oasisEngine.Vector3();
    _this._spherical = new oasisEngine.Spherical();
    _this._rotateOri = [0, 0];
    _this._events = [{
      type: "mousemove",
      listener: _this.onMouseMove.bind(_assertThisInitialized(_this))
    }, {
      type: "touchmove",
      listener: _this.onMouseMove.bind(_assertThisInitialized(_this))
    }, {
      type: "mousedown",
      listener: _this.onMouseDown.bind(_assertThisInitialized(_this))
    }, {
      type: "touchstart",
      listener: _this.onMouseDown.bind(_assertThisInitialized(_this))
    }, {
      type: "mouseup",
      listener: _this.onMouseUp.bind(_assertThisInitialized(_this))
    }, {
      type: "touchend",
      listener: _this.onMouseUp.bind(_assertThisInitialized(_this))
    }, {
      type: "keydown",
      listener: _this.onKeyDown.bind(_assertThisInitialized(_this)),
      element: wechatAdapter.window
    }, {
      type: "keyup",
      listener: _this.onKeyUp.bind(_assertThisInitialized(_this)),
      element: wechatAdapter.window
    }, {
      type: "contextmenu",
      listener: _this.onContextMenu.bind(_assertThisInitialized(_this))
    }];

    _this.initEvents(); // init spherical


    _this.updateSpherical();

    return _this;
  }
  /**
   * Browser right click event.
   */


  var _proto = FreeControl.prototype;

  _proto.onContextMenu = function onContextMenu(event) {
    event.preventDefault();
  }
  /**
   * Keyboard press event.
   */
  ;

  _proto.onKeyDown = function onKeyDown(event) {
    var code = event.code,
        key = event.key,
        keyCode = event.keyCode;

    if (includes(this.keysForward, code, key, keyCode)) {
      this._moveForward = true;
    } else if (includes(this.keysBackward, code, key, keyCode)) {
      this._moveBackward = true;
    } else if (includes(this.keysLeft, code, key, keyCode)) {
      this._moveLeft = true;
    } else if (includes(this.keysRight, code, key, keyCode)) {
      this._moveRight = true;
    }
  }
  /**
   * Keyboard up event.
   */
  ;

  _proto.onKeyUp = function onKeyUp(event) {
    var code = event.code,
        key = event.key,
        keyCode = event.keyCode;

    if (includes(this.keysForward, code, key, keyCode)) {
      this._moveForward = false;
    } else if (includes(this.keysBackward, code, key, keyCode)) {
      this._moveBackward = false;
    } else if (includes(this.keysLeft, code, key, keyCode)) {
      this._moveLeft = false;
    } else if (includes(this.keysRight, code, key, keyCode)) {
      this._moveRight = false;
    }
  }
  /**
   * Mouse press event.
   */
  ;

  _proto.onMouseDown = function onMouseDown(event) {
    event.stopPropagation();
    event = event.changedTouches && event.changedTouches[0] || event;

    if (this.domElement !== wechatAdapter.document) {
      this.domElement.focus();
    }

    this.press = true;
    this._rotateOri = [event.clientX, event.clientY];
  }
  /**
   * Mouse up event.
   */
  ;

  _proto.onMouseUp = function onMouseUp(event) {
    event.preventDefault();
    event.stopPropagation();
    this.press = false;
  }
  /**
   * Mouse movement event.
   */
  ;

  _proto.onMouseMove = function onMouseMove(event) {
    if (this.press === false) return;
    if (this.enabled === false) return;
    event.preventDefault();
    event.stopPropagation();
    event = event.changedTouches && event.changedTouches[0] || event;
    var movementX = event.clientX - this._rotateOri[0];
    var movementY = event.clientY - this._rotateOri[1];
    this._rotateOri[0] = event.clientX;
    this._rotateOri[1] = event.clientY;
    var factorX = 180 / this.mainElement.width;
    var factorY = 180 / this.mainElement.height;
    var actualX = movementX * factorX;
    var actualY = movementY * factorY;
    this.rotate(-actualX, actualY);
  }
  /**
   * The angle of rotation around the y axis and the x axis respectively.
   * @param alpha - Radian to rotate around the y axis
   * @param beta - Radian to rotate around the x axis
   */
  ;

  _proto.rotate = function rotate(alpha, beta) {
    if (alpha === void 0) {
      alpha = 0;
    }

    if (beta === void 0) {
      beta = 0;
    }

    this._theta += oasisEngine.MathUtil.degreeToRadian(alpha);
    this._phi += oasisEngine.MathUtil.degreeToRadian(beta);
    this._phi = oasisEngine.MathUtil.clamp(this._phi, ESP, Math.PI - ESP);
    this._spherical.theta = this._theta;
    this._spherical.phi = this._phi;

    this._spherical.setToVec3(this._v3Cache);

    oasisEngine.Vector3.add(this.camera.transform.position, this._v3Cache, this._v3Cache);
    this.camera.transform.lookAt(this._v3Cache, new oasisEngine.Vector3(0, 1, 0));
  };

  _proto.onUpdate = function onUpdate(delta) {
    if (this.enabled === false) return;
    var actualMoveSpeed = delta / 1000 * this.movementSpeed;
    this.camera.transform.getWorldForward(this._forward);
    this.camera.transform.getWorldRight(this._right);

    if (this._moveForward) {
      this.camera.transform.translate(this._forward.scale(actualMoveSpeed), false);
    }

    if (this._moveBackward) {
      this.camera.transform.translate(this._forward.scale(-actualMoveSpeed), false);
    }

    if (this._moveLeft) {
      this.camera.transform.translate(this._right.scale(-actualMoveSpeed), false);
    }

    if (this._moveRight) {
      this.camera.transform.translate(this._right.scale(actualMoveSpeed), false);
    }

    if (this.floorMock) {
      var position = this.camera.transform.position;

      if (position.y !== this.floorY) {
        this.camera.transform.setPosition(position.x, this.floorY, position.z);
      }
    }
  }
  /**
   * Register browser events.
   */
  ;

  _proto.initEvents = function initEvents() {
    var _this2 = this;

    this._events.forEach(function (ele) {
      if (ele.element) {
        ele.element.addEventListener(ele.type, ele.listener, false);
      } else {
        _this2.mainElement.addEventListener(ele.type, ele.listener, false);
      }
    });
  };

  _proto.onDestroy = function onDestroy() {
    var _this3 = this;

    this._events.forEach(function (ele) {
      if (ele.element) {
        ele.element.removeEventListener(ele.type, ele.listener, false);
      } else {
        _this3.mainElement.removeEventListener(ele.type, ele.listener, false);
      }
    });
  }
  /**
   * must updateSpherical after quaternion has been changed
   * @example
   * Entity#lookAt([0,1,0],[0,1,0]);
   * AFreeControls#updateSpherical();
   */
  ;

  _proto.updateSpherical = function updateSpherical() {
    this._v3Cache.setValue(0, 0, -1);

    oasisEngine.Vector3.transformByQuat(this._v3Cache, this.camera.rotation, this._v3Cache);

    this._spherical.setFromVec3(this._v3Cache);

    this._theta = this._spherical.theta;
    this._phi = this._spherical.phi;
  };

  return FreeControl;
}(oasisEngine.Script);

/**
 * The camera's track controller, can rotate, zoom, pan, support mouse and touch events.
 */

var OrbitControl = /*#__PURE__*/function (_Script) {
  _inheritsLoose(OrbitControl, _Script);

  function OrbitControl(entity) {
    var _this;

    _this = _Script.call(this, entity) || this;
    _this.camera = void 0;
    _this.domElement = void 0;
    _this.mainElement = void 0;
    _this.fov = void 0;
    _this.target = void 0;
    _this.up = void 0;
    _this.minDistance = void 0;
    _this.maxDistance = void 0;
    _this.minZoom = void 0;
    _this.maxZoom = void 0;
    _this.enableDamping = void 0;
    _this.zoomFactor = void 0;
    _this.enableRotate = void 0;
    _this.keyPanSpeed = void 0;
    _this.minPolarAngle = void 0;
    _this.maxPolarAngle = void 0;
    _this.minAzimuthAngle = void 0;
    _this.maxAzimuthAngle = void 0;
    _this.enableZoom = void 0;
    _this.dampingFactor = void 0;
    _this.zoomSpeed = void 0;
    _this.enablePan = void 0;
    _this.autoRotate = void 0;
    _this.autoRotateSpeed = void 0;
    _this.rotateSpeed = void 0;
    _this.enableKeys = void 0;
    _this.keys = void 0;
    _this.mouseButtons = void 0;
    _this.touchFingers = void 0;
    _this.STATE = void 0;
    _this.mouseUpEvents = void 0;
    _this.constEvents = void 0;
    _this._position = void 0;
    _this._offset = void 0;
    _this._spherical = void 0;
    _this._sphericalDelta = void 0;
    _this._sphericalDump = void 0;
    _this._zoomFrag = void 0;
    _this._scale = void 0;
    _this._panOffset = void 0;
    _this._isMouseUp = void 0;
    _this._vPan = void 0;
    _this._state = void 0;
    _this._rotateStart = void 0;
    _this._rotateEnd = void 0;
    _this._rotateDelta = void 0;
    _this._panStart = void 0;
    _this._panEnd = void 0;
    _this._panDelta = void 0;
    _this._zoomStart = void 0;
    _this._zoomEnd = void 0;
    _this._zoomDelta = void 0;
    _this.camera = entity; // @ts-ignore
    // @todo In the future, the dependence on html elements will be removed and realized through the input of the packaging engine.

    _this.mainElement = _this.engine.canvas._webCanvas;
    _this.domElement = wechatAdapter.document;
    _this.fov = 45; // Target position.

    _this.target = new oasisEngine.Vector3(); // Up vector

    _this.up = new oasisEngine.Vector3(0, 1, 0);
    /**
     * The minimum distance, the default is 0.1, should be greater than 0.
     */

    _this.minDistance = 0.1;
    /**
     * The maximum distance, the default is infinite, should be greater than the minimum distance
     */

    _this.maxDistance = Infinity;
    /**
     * Minimum zoom speed, the default is 0.0.
     * @member {Number}
     */

    _this.minZoom = 0.0;
    /**
     * Maximum zoom speed, the default is positive infinity.
     */

    _this.maxZoom = Infinity;
    /**
     * The minimum radian in the vertical direction, the default is 0 radian, the value range is 0 - Math.PI.
     */

    _this.minPolarAngle = 0;
    /**
     * The maximum radian in the vertical direction, the default is Math.PI, and the value range is 0 - Math.PI.
     */

    _this.maxPolarAngle = Math.PI;
    /**
     * The minimum radian in the horizontal direction, the default is negative infinity.
     */

    _this.minAzimuthAngle = -Infinity;
    /**
     * The maximum radian in the horizontal direction, the default is positive infinity.
     */

    _this.maxAzimuthAngle = Infinity;
    /**
     * Whether to enable camera damping, the default is true.
     */

    _this.enableDamping = true;
    /**
     * Rotation damping parameter, default is 0.1 .
     */

    _this.dampingFactor = 0.1;
    /**
     * Zoom damping parameter, default is 0.2 .
     */

    _this.zoomFactor = 0.2;
    /**
     * Whether to enable zoom, the default is true.
     */

    _this.enableZoom = true;
    /**
     * Camera zoom speed, the default is 1.0.
     */

    _this.zoomSpeed = 1.0;
    /**
     * Whether to enable rotation, the default is true.
     */

    _this.enableRotate = true;
    /**
     * Rotation speed, default is 1.0 .
     */

    _this.rotateSpeed = 1.0;
    /**
     * Whether to enable translation, the default is true.
     */

    _this.enablePan = true;
    /**
     * Keyboard translation speed, the default is 7.0 .
     */

    _this.keyPanSpeed = 7.0;
    /**
     * Whether to automatically rotate the camera, the default is false.
     */

    _this.autoRotate = false;
    /**
     * The time required for one automatic rotation, the default is 2.0s .
     */

    _this.autoRotateSpeed = 2.0;
    /**
     * Whether to enable keyboard.
     */

    _this.enableKeys = false;
    _this.keys = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      BOTTOM: 40
    }; // Control keys.

    _this.mouseButtons = {
      ORBIT: 0,
      ZOOM: 1,
      PAN: 2
    };
    _this.touchFingers = {
      ORBIT: 1,
      ZOOM: 2,
      PAN: 3
    }; // Reuse objects to prevent excessive stack allocation.
    // update

    _this._position = new oasisEngine.Vector3();
    _this._offset = new oasisEngine.Vector3();
    _this._spherical = new oasisEngine.Spherical();
    _this._sphericalDelta = new oasisEngine.Spherical();
    _this._sphericalDump = new oasisEngine.Spherical();
    _this._zoomFrag = 0;
    _this._scale = 1;
    _this._panOffset = new oasisEngine.Vector3();
    _this._isMouseUp = true; // pan

    _this._vPan = new oasisEngine.Vector3(); // state

    _this._rotateStart = new oasisEngine.Vector2();
    _this._rotateEnd = new oasisEngine.Vector2();
    _this._rotateDelta = new oasisEngine.Vector2();
    _this._panStart = new oasisEngine.Vector2();
    _this._panEnd = new oasisEngine.Vector2();
    _this._panDelta = new oasisEngine.Vector2();
    _this._zoomStart = new oasisEngine.Vector2();
    _this._zoomEnd = new oasisEngine.Vector2();
    _this._zoomDelta = new oasisEngine.Vector2();
    _this.STATE = {
      NONE: -1,
      ROTATE: 0,
      ZOOM: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_ZOOM: 4,
      TOUCH_PAN: 5
    };
    _this._state = _this.STATE.NONE;
    return _this;
  }

  var _proto = OrbitControl.prototype;

  _proto.onDisable = function onDisable() {};

  _proto.onDestroy = function onDestroy() {};

  _proto.onUpdate = function onUpdate(dtime) {
    if (!this.enabled) return;
    var position = this.camera.transform.position;
    position.cloneTo(this._offset);

    this._offset.subtract(this.target);

    this._spherical.setFromVec3(this._offset);

    if (this.autoRotate && this._state === this.STATE.NONE) {
      this.rotateLeft(this.getAutoRotationAngle(dtime));
    }

    this._spherical.theta += this._sphericalDelta.theta;
    this._spherical.phi += this._sphericalDelta.phi;
    this._spherical.theta = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, this._spherical.theta));
    this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi));

    this._spherical.makeSafe();

    if (this._scale !== 1) {
      this._zoomFrag = this._spherical.radius * (this._scale - 1);
    }

    this._spherical.radius += this._zoomFrag;
    this._spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, this._spherical.radius));
    this.target.add(this._panOffset);

    this._spherical.setToVec3(this._offset);

    this.target.cloneTo(this._position);

    this._position.add(this._offset);

    this.camera.transform.position = this._position;
    this.camera.transform.lookAt(this.target, this.up);

    if (this.enableDamping === true) {
      this._sphericalDump.theta *= 1 - this.dampingFactor;
      this._sphericalDump.phi *= 1 - this.dampingFactor;
      this._zoomFrag *= 1 - this.zoomFactor;

      if (this._isMouseUp) {
        this._sphericalDelta.theta = this._sphericalDump.theta;
        this._sphericalDelta.phi = this._sphericalDump.phi;
      } else {
        this._sphericalDelta.set(0, 0, 0);
      }
    } else {
      this._sphericalDelta.set(0, 0, 0);

      this._zoomFrag = 0;
    }

    this._scale = 1;

    this._panOffset.setValue(0, 0, 0);
  }
  /**
   * Get the radian of automatic rotation.
   */
  ;

  _proto.getAutoRotationAngle = function getAutoRotationAngle(dtime) {
    return 2 * Math.PI / this.autoRotateSpeed / 1000 * dtime;
  }
  /**
   * Get zoom value.
   */
  ;

  _proto.getZoomScale = function getZoomScale() {
    return Math.pow(0.95, this.zoomSpeed);
  }
  /**
   * Rotate to the left by a certain randian.
   * @param radian - Radian value of rotation
   */
  ;

  _proto.rotateLeft = function rotateLeft(radian) {
    this._sphericalDelta.theta -= radian;

    if (this.enableDamping) {
      this._sphericalDump.theta = -radian;
    }
  }
  /**
   * Rotate to the right by a certain randian.
   * @param radian - Radian value of rotation
   */
  ;

  _proto.rotateUp = function rotateUp(radian) {
    this._sphericalDelta.phi -= radian;

    if (this.enableDamping) {
      this._sphericalDump.phi = -radian;
    }
  }
  /**
   * Pan left.
   */
  ;

  _proto.panLeft = function panLeft(distance, worldMatrix) {
    var e = worldMatrix.elements;

    this._vPan.setValue(e[0], e[1], e[2]);

    this._vPan.scale(distance);

    this._panOffset.add(this._vPan);
  }
  /**
   * Pan right.
   */
  ;

  _proto.panUp = function panUp(distance, worldMatrix) {
    var e = worldMatrix.elements;

    this._vPan.setValue(e[4], e[5], e[6]);

    this._vPan.scale(distance);

    this._panOffset.add(this._vPan);
  }
  /**
   * Pan.
   * @param deltaX - The amount of translation from the screen distance in the x direction
   * @param deltaY - The amount of translation from the screen distance in the y direction
   */
  ;

  _proto.pan = function pan(deltaX, deltaY) {
    // perspective only
    var position = this.camera.position;
    position.cloneTo(this._vPan);

    this._vPan.subtract(this.target);

    var targetDistance = this._vPan.length();

    targetDistance *= this.fov / 2 * (Math.PI / 180);
    this.panLeft(-2 * deltaX * (targetDistance / wechatAdapter.window.innerWidth), this.camera.transform.worldMatrix);
    this.panUp(2 * deltaY * (targetDistance / wechatAdapter.window.innerHeight), this.camera.transform.worldMatrix);
  }
  /**
   * Zoom in.
   */
  ;

  _proto.zoomIn = function zoomIn(zoomScale) {
    // perspective only
    this._scale *= zoomScale;
  }
  /**
   * Zoom out.
   */
  ;

  _proto.zoomOut = function zoomOut(zoomScale) {
    // perspective only
    this._scale /= zoomScale;
  }
  /**
   * Rotation parameter update when touch is dropped.
   */
  ;

  _proto.handleTouchStartRotate = function handleTouchStartRotate(event) {
    this._rotateStart.setValue(event.touches[0].x, event.touches[0].y);
  }
  /**
   * Zoom parameter update when touch down.
   */
  ;

  _proto.handleTouchStartZoom = function handleTouchStartZoom(event) {
    var dx = event.touches[0].x - event.touches[1].x;
    var dy = event.touches[0].y - event.touches[1].y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    this._zoomStart.setValue(0, distance);
  }
  /**
   * Update the translation parameter when touch down.
   */
  ;

  _proto.handleTouchStartPan = function handleTouchStartPan(event) {
    this._panStart.setValue(event.touches[0].x, event.touches[0].y);
  }
  /**
   * Rotation parameter update when touch to move.
   */
  ;

  _proto.handleTouchMoveRotate = function handleTouchMoveRotate(event) {
    this._rotateEnd.setValue(event.touches[0].x, event.touches[0].y);

    oasisEngine.Vector2.subtract(this._rotateEnd, this._rotateStart, this._rotateDelta);
    this.rotateLeft(2 * Math.PI * this._rotateDelta.x / wechatAdapter.window.innerWidth * this.rotateSpeed);
    this.rotateUp(2 * Math.PI * this._rotateDelta.y / wechatAdapter.window.innerHeight * this.rotateSpeed);

    this._rotateEnd.cloneTo(this._rotateStart);
  }
  /**
   * Zoom parameter update when touch to move.
   */
  ;

  _proto.handleTouchMoveZoom = function handleTouchMoveZoom(event) {
    var dx = event.touches[0].x - event.touches[1].x;
    var dy = event.touches[0].y - event.touches[1].y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    this._zoomEnd.setValue(0, distance);

    oasisEngine.Vector2.subtract(this._zoomEnd, this._zoomStart, this._zoomDelta);

    if (this._zoomDelta.y > 0) {
      this.zoomIn(this.getZoomScale());
    } else if (this._zoomDelta.y < 0) {
      this.zoomOut(this.getZoomScale());
    }

    this._zoomEnd.cloneTo(this._zoomStart);
  }
  /**
   * Pan parameter update when touch moves.
   */
  ;

  _proto.handleTouchMovePan = function handleTouchMovePan(event) {
    this._panEnd.setValue(event.touches[0].x, event.touches[0].y);

    oasisEngine.Vector2.subtract(this._panEnd, this._panStart, this._panDelta);
    this.pan(this._panDelta.x, this._panDelta.y);

    this._panEnd.cloneTo(this._panStart);
  }
  /**
   * Total handling of touch start events.
   */
  ;

  _proto.onTouchStart = function onTouchStart(event) {
    if (this.enabled === false) return;
    this._isMouseUp = false;

    switch (event.touches.length) {
      case this.touchFingers.ORBIT:
        if (this.enableRotate === false) return;
        this.handleTouchStartRotate(event);
        this._state = this.STATE.TOUCH_ROTATE;
        break;

      case this.touchFingers.ZOOM:
        if (this.enableZoom === false) return;
        this.handleTouchStartZoom(event);
        this._state = this.STATE.TOUCH_ZOOM;
        break;

      case this.touchFingers.PAN:
        if (this.enablePan === false) return;
        this.handleTouchStartPan(event);
        this._state = this.STATE.TOUCH_PAN;
        break;

      default:
        this._state = this.STATE.NONE;
    }
  }
  /**
   * Total handling of touch movement events.
   */
  ;

  _proto.onTouchMove = function onTouchMove(event) {
    if (this.enabled === false) return;

    switch (event.touches.length) {
      case this.touchFingers.ORBIT:
        if (this.enableRotate === false) return;
        if (this._state !== this.STATE.TOUCH_ROTATE) return;
        this.handleTouchMoveRotate(event);
        break;

      case this.touchFingers.ZOOM:
        if (this.enableZoom === false) return;
        if (this._state !== this.STATE.TOUCH_ZOOM) return;
        this.handleTouchMoveZoom(event);
        break;

      case this.touchFingers.PAN:
        if (this.enablePan === false) return;
        if (this._state !== this.STATE.TOUCH_PAN) return;
        this.handleTouchMovePan(event);
        break;

      default:
        this._state = this.STATE.NONE;
    }
  }
  /**
   * Total handling of touch end events.
   */
  ;

  _proto.onTouchEnd = function onTouchEnd() {
    if (this.enabled === false) return;
    this._isMouseUp = true;
    this._state = this.STATE.NONE;
  };

  return OrbitControl;
}(oasisEngine.Script);

exports.FreeControl = FreeControl;
exports.OrbitControl = OrbitControl;
