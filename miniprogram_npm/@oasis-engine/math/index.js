'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Defines how the bounding volumes intersects or contain one another.
 */
exports.ContainmentType = void 0;

(function (ContainmentType) {
  ContainmentType[ContainmentType["Disjoint"] = 0] = "Disjoint";
  ContainmentType[ContainmentType["Contains"] = 1] = "Contains";
  ContainmentType[ContainmentType["Intersects"] = 2] = "Intersects";
})(exports.ContainmentType || (exports.ContainmentType = {}));

/**
 * Defines the intersection between a plane and a bounding volume.
 */
exports.PlaneIntersectionType = void 0;

(function (PlaneIntersectionType) {
  PlaneIntersectionType[PlaneIntersectionType["Back"] = 0] = "Back";
  PlaneIntersectionType[PlaneIntersectionType["Front"] = 1] = "Front";
  PlaneIntersectionType[PlaneIntersectionType["Intersecting"] = 2] = "Intersecting";
})(exports.PlaneIntersectionType || (exports.PlaneIntersectionType = {}));

/**
 * Common utility methods for math operations.
 */
var MathUtil = /*#__PURE__*/function () {
  function MathUtil() {}

  /** The value for which all absolute numbers smaller than are considered equal to zero. */

  /** The conversion factor that radian to degree. */

  /** The conversion factor that degree to radian. */

  /**
   * Clamps the specified value.
   * @param v - The specified value
   * @param min - The min value
   * @param max - The max value
   * @returns The result of clamping a value between min and max
   */
  MathUtil.clamp = function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }
  /**
   * Checks if a and b are almost equals.
   * The absolute value of the difference between a and b is close to zero.
   * @param a - The left value to compare
   * @param b - The right value to compare
   * @returns True if a almost equal to b, false otherwise
   */
  ;

  MathUtil.equals = function equals(a, b) {
    return Math.abs(a - b) <= MathUtil.zeroTolerance;
  }
  /**
   * Determines whether the specified v is pow2.
   * @param v - The specified v
   * @returns True if the specified v is pow2, false otherwise
   */
  ;

  MathUtil.isPowerOf2 = function isPowerOf2(v) {
    return (v & v - 1) === 0;
  }
  /**
   * Modify the specified r from radian to degree.
   * @param r - The specified r
   * @returns The degree value
   */
  ;

  MathUtil.radianToDegree = function radianToDegree(r) {
    return r * MathUtil.radToDegreeFactor;
  }
  /**
   * Modify the specified d from degree to radian.
   * @param d - The specified d
   * @returns The radian value
   */
  ;

  MathUtil.degreeToRadian = function degreeToRadian(d) {
    return d * MathUtil.degreeToRadFactor;
  };

  return MathUtil;
}();
MathUtil.zeroTolerance = 1e-6;
MathUtil.radToDegreeFactor = 180 / Math.PI;
MathUtil.degreeToRadFactor = Math.PI / 180;

/**
 * Describes a 3D-vector.
 */
var Vector3 = /*#__PURE__*/function () {
  /** @internal zero.*/

  /** @internal one.*/

  /** @internal */

  /**
   * Determines the sum of two vectors.
   * @param left - The first vector to add
   * @param right - The second vector to add
   * @param out - The sum of two vectors
   */
  Vector3.add = function add(left, right, out) {
    out.x = left.x + right.x;
    out.y = left.y + right.y;
    out.z = left.z + right.z;
  }
  /**
   * Determines the difference between two vectors.
   * @param left - The first vector to subtract
   * @param right - The second vector to subtract
   * @param out - The difference between two vectors
   */
  ;

  Vector3.subtract = function subtract(left, right, out) {
    out.x = left.x - right.x;
    out.y = left.y - right.y;
    out.z = left.z - right.z;
  }
  /**
   * Determines the product of two vectors.
   * @param left - The first vector to multiply
   * @param right - The second vector to multiply
   * @param out - The product of two vectors
   */
  ;

  Vector3.multiply = function multiply(left, right, out) {
    out.x = left.x * right.x;
    out.y = left.y * right.y;
    out.z = left.z * right.z;
  }
  /**
   * Determines the divisor of two vectors.
   * @param left - The first vector to divide
   * @param right - The second vector to divide
   * @param out - The divisor of two vectors
   */
  ;

  Vector3.divide = function divide(left, right, out) {
    out.x = left.x / right.x;
    out.y = left.y / right.y;
    out.z = left.z / right.z;
  }
  /**
   * Determines the dot product of two vectors.
   * @param left - The first vector to dot
   * @param right - The second vector to dot
   * @returns The dot product of two vectors
   */
  ;

  Vector3.dot = function dot(left, right) {
    return left.x * right.x + left.y * right.y + left.z * right.z;
  }
  /**
   * Determines the cross product of two vectors.
   * @param left - The first vector to cross
   * @param right - The second vector to cross
   * @param out - The cross product of two vectors
   */
  ;

  Vector3.cross = function cross(left, right, out) {
    var ax = left.x;
    var ay = left.y;
    var az = left.z;
    var bx = right.x;
    var by = right.y;
    var bz = right.z;
    out.x = ay * bz - az * by;
    out.y = az * bx - ax * bz;
    out.z = ax * by - ay * bx;
  }
  /**
   * Determines the distance of two vectors.
   * @param a - The first vector
   * @param b - The second vector
   * @returns The distance of two vectors
   */
  ;

  Vector3.distance = function distance(a, b) {
    var x = b.x - a.x;
    var y = b.y - a.y;
    var z = b.z - a.z;
    return Math.sqrt(x * x + y * y + z * z);
  }
  /**
   * Determines the squared distance of two vectors.
   * @param a - The first vector
   * @param b - The second vector
   * @returns The squared distance of two vectors
   */
  ;

  Vector3.distanceSquared = function distanceSquared(a, b) {
    var x = b.x - a.x;
    var y = b.y - a.y;
    var z = b.z - a.z;
    return x * x + y * y + z * z;
  }
  /**
   * Determines whether the specified vectors are equals.
   * @param left - The first vector to compare
   * @param right - The second vector to compare
   * @returns True if the specified vectors are equals, false otherwise
   */
  ;

  Vector3.equals = function equals(left, right) {
    return MathUtil.equals(left.x, right.x) && MathUtil.equals(left.y, right.y) && MathUtil.equals(left.z, right.z);
  }
  /**
   * Performs a linear interpolation between two vectors.
   * @param start - The first vector
   * @param end - The second vector
   * @param t - The blend amount where 0 returns start and 1 end
   * @param out - The result of linear blending between two vectors
   */
  ;

  Vector3.lerp = function lerp(start, end, t, out) {
    var x = start.x,
        y = start.y,
        z = start.z;
    out.x = x + (end.x - x) * t;
    out.y = y + (end.y - y) * t;
    out.z = z + (end.z - z) * t;
  }
  /**
   * Calculate a vector containing the largest components of the specified vectors.
   * @param left - The first vector
   * @param right - The second vector
   * @param out - The vector containing the largest components of the specified vectors
   */
  ;

  Vector3.max = function max(left, right, out) {
    out.x = Math.max(left.x, right.x);
    out.y = Math.max(left.y, right.y);
    out.z = Math.max(left.z, right.z);
  }
  /**
   * Calculate a vector containing the smallest components of the specified vectors.
   * @param left - The first vector
   * @param right - The second vector
   * @param out - The vector containing the smallest components of the specified vectors
   */
  ;

  Vector3.min = function min(left, right, out) {
    out.x = Math.min(left.x, right.x);
    out.y = Math.min(left.y, right.y);
    out.z = Math.min(left.z, right.z);
  }
  /**
   * Reverses the direction of a given vector.
   * @param a - The vector to negate
   * @param out - The vector facing in the opposite direction
   */
  ;

  Vector3.negate = function negate(a, out) {
    out.x = -a.x;
    out.y = -a.y;
    out.z = -a.z;
  }
  /**
   * Converts the vector into a unit vector.
   * @param a - The vector to normalize
   * @param out - The normalized vector
   */
  ;

  Vector3.normalize = function normalize(a, out) {
    var x = a.x,
        y = a.y,
        z = a.z;
    var len = Math.sqrt(x * x + y * y + z * z);

    if (len > 0) {
      // TODO
      len = 1 / len;
      out.x = x * len;
      out.y = y * len;
      out.z = z * len;
    }
  }
  /**
   * Scale a vector by the given value.
   * @param a - The vector to scale
   * @param s - The amount by which to scale the vector
   * @param out - The scaled vector
   */
  ;

  Vector3.scale = function scale(a, s, out) {
    out.x = a.x * s;
    out.y = a.y * s;
    out.z = a.z * s;
  }
  /**
   * Performs a normal transformation using the given 4x4 matrix.
   * @remarks
   * A normal transform performs the transformation with the assumption that the w component
   * is zero. This causes the fourth row and fourth collumn of the matrix to be unused. The
   * end result is a vector that is not translated, but all other transformation properties
   * apply. This is often prefered for normal vectors as normals purely represent direction
   * rather than location because normal vectors should not be translated.
   * @param v - The normal vector to transform
   * @param m - The transform matrix
   * @param out - The transformed normal
   */
  ;

  Vector3.transformNormal = function transformNormal(v, m, out) {
    var x = v.x,
        y = v.y,
        z = v.z;
    var e = m.elements;
    out.x = x * e[0] + y * e[4] + z * e[8];
    out.y = x * e[1] + y * e[5] + z * e[9];
    out.z = x * e[2] + y * e[6] + z * e[10];
  }
  /**
   * Performs a transformation using the given 4x4 matrix.
   * @param v - The vector to transform
   * @param m - The transform matrix
   * @param out - The transformed vector3
   */
  ;

  Vector3.transformToVec3 = function transformToVec3(v, m, out) {
    var x = v.x,
        y = v.y,
        z = v.z;
    var e = m.elements;
    out.x = x * e[0] + y * e[4] + z * e[8] + e[12];
    out.y = x * e[1] + y * e[5] + z * e[9] + e[13];
    out.z = x * e[2] + y * e[6] + z * e[10] + e[14];
  }
  /**
   * Performs a transformation from vector3 to vector4 using the given 4x4 matrix.
   * @param v - The vector to transform
   * @param m - The transform matrix
   * @param out - The transformed vector4
   */
  ;

  Vector3.transformToVec4 = function transformToVec4(v, m, out) {
    var x = v.x,
        y = v.y,
        z = v.z;
    var e = m.elements;
    out.x = x * e[0] + y * e[4] + z * e[8] + e[12];
    out.y = x * e[1] + y * e[5] + z * e[9] + e[13];
    out.z = x * e[2] + y * e[6] + z * e[10] + e[14];
    out.w = x * e[3] + y * e[7] + z * e[11] + e[15];
  }
  /**
   * Performs a coordinate transformation using the given 4x4 matrix.
   *
   * @remarks
   * A coordinate transform performs the transformation with the assumption that the w component
   * is one. The four dimensional vector obtained from the transformation operation has each
   * component in the vector divided by the w component. This forces the wcomponent to be one and
   * therefore makes the vector homogeneous. The homogeneous vector is often prefered when working
   * with coordinates as the w component can safely be ignored.
   * @param v - The coordinate vector to transform
   * @param m - The transform matrix
   * @param out - The transformed coordinates
   */
  ;

  Vector3.transformCoordinate = function transformCoordinate(v, m, out) {
    var x = v.x,
        y = v.y,
        z = v.z;
    var e = m.elements;
    var w = x * e[3] + y * e[7] + z * e[11] + e[15];
    w = 1.0 / w;
    out.x = (x * e[0] + y * e[4] + z * e[8] + e[12]) * w;
    out.y = (x * e[1] + y * e[5] + z * e[9] + e[13]) * w;
    out.z = (x * e[2] + y * e[6] + z * e[10] + e[14]) * w;
  }
  /**
   * Performs a transformation using the given quaternion.
   * @param v - The vector to transform
   * @param quaternion - The transform quaternion
   * @param out - The transformed vector
   */
  ;

  Vector3.transformByQuat = function transformByQuat(v, quaternion, out) {
    var x = v.x,
        y = v.y,
        z = v.z;
    var qx = quaternion.x,
        qy = quaternion.y,
        qz = quaternion.z,
        qw = quaternion.w; // calculate quat * vec

    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

    out.x = ix * qw - iw * qx - iy * qz + iz * qy;
    out.y = iy * qw - iw * qy - iz * qx + ix * qz;
    out.z = iz * qw - iw * qz - ix * qy + iy * qx;
  }
  /** The x component of the vector.*/
  ;

  /**
   * Constructor of Vector3.
   * @param x - The x component of the vector, default 0
   * @param y - The y component of the vector, default 0
   * @param z - The z component of the vector, default 0
   */
  function Vector3(x, y, z) {
    if (x === void 0) {
      x = 0;
    }

    if (y === void 0) {
      y = 0;
    }

    if (z === void 0) {
      z = 0;
    }

    this.x = void 0;
    this.y = void 0;
    this.z = void 0;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  /**
   * Set the value of this vector.
   * @param x - The x component of the vector
   * @param y - The y component of the vector
   * @param z - The z component of the vector
   * @returns This vector
   */


  var _proto = Vector3.prototype;

  _proto.setValue = function setValue(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  /**
   * Set the value of this vector by an array.
   * @param array - The array
   * @param offset - The start offset of the array
   * @returns This vector
   */
  ;

  _proto.setValueByArray = function setValueByArray(array, offset) {
    if (offset === void 0) {
      offset = 0;
    }

    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  }
  /**
   * Determines the sum of this vector and the specified vector.
   * @param right - The specified vector
   * @returns This vector
   */
  ;

  _proto.add = function add(right) {
    this.x += right.x;
    this.y += right.y;
    this.z += right.z;
    return this;
  }
  /**
   * Determines the difference of this vector and the specified vector.
   * @param right - The specified vector
   * @returns This vector
   */
  ;

  _proto.subtract = function subtract(right) {
    this.x -= right.x;
    this.y -= right.y;
    this.z -= right.z;
    return this;
  }
  /**
   * Determines the product of this vector and the specified vector.
   * @param right - The specified vector
   * @returns This vector
   */
  ;

  _proto.multiply = function multiply(right) {
    this.x *= right.x;
    this.y *= right.y;
    this.z *= right.z;
    return this;
  }
  /**
   * Determines the divisor of this vector and the specified vector.
   * @param right - The specified vector
   * @returns This vector
   */
  ;

  _proto.divide = function divide(right) {
    this.x /= right.x;
    this.y /= right.y;
    this.z /= right.z;
    return this;
  }
  /**
   * Calculate the length of this vector.
   * @returns The length of this vector
   */
  ;

  _proto.length = function length() {
    var x = this.x,
        y = this.y,
        z = this.z;
    return Math.sqrt(x * x + y * y + z * z);
  }
  /**
   * Calculate the squared length of this vector.
   * @returns The squared length of this vector
   */
  ;

  _proto.lengthSquared = function lengthSquared() {
    var x = this.x,
        y = this.y,
        z = this.z;
    return x * x + y * y + z * z;
  }
  /**
   * Reverses the direction of this vector.
   * @returns This vector
   */
  ;

  _proto.negate = function negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }
  /**
   * Converts this vector into a unit vector.
   * @returns This vector
   */
  ;

  _proto.normalize = function normalize() {
    Vector3.normalize(this, this);
    return this;
  }
  /**
   * Scale this vector by the given value.
   * @param s - The amount by which to scale the vector
   * @returns This vector
   */
  ;

  _proto.scale = function scale(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }
  /**
   * Clone the value of this vector to an array.
   * @param out - The array
   * @param outOffset - The start offset of the array
   */
  ;

  _proto.toArray = function toArray(out, outOffset) {
    if (outOffset === void 0) {
      outOffset = 0;
    }

    out[outOffset] = this.x;
    out[outOffset + 1] = this.y;
    out[outOffset + 2] = this.z;
  }
  /**
   * Creates a clone of this vector.
   * @returns A clone of this vector
   */
  ;

  _proto.clone = function clone() {
    return new Vector3(this.x, this.y, this.z);
  }
  /**
   * Clones this vector to the specified vector.
   * @param out - The specified vector
   * @returns The specified vector
   */
  ;

  _proto.cloneTo = function cloneTo(out) {
    out.x = this.x;
    out.y = this.y;
    out.z = this.z;
    return out;
  }
  /**
   * This vector performs a normal transformation using the given 4x4 matrix.
   * @remarks
   * A normal transform performs the transformation with the assumption that the w component
   * is zero. This causes the fourth row and fourth collumn of the matrix to be unused. The
   * end result is a vector that is not translated, but all other transformation properties
   * apply. This is often prefered for normal vectors as normals purely represent direction
   * rather than location because normal vectors should not be translated.
   * @param m - The transform matrix
   * @returns This vector
   */
  ;

  _proto.transformNormal = function transformNormal(m) {
    Vector3.transformNormal(this, m, this);
    return this;
  }
  /**
   * This vector performs a transformation using the given 4x4 matrix.
   * @param m - The transform matrix
   * @returns This vector
   */
  ;

  _proto.transformToVec3 = function transformToVec3(m) {
    Vector3.transformToVec3(this, m, this);
    return this;
  }
  /**
   * This vector performs a coordinate transformation using the given 4x4 matrix.
   * @remarks
   * A coordinate transform performs the transformation with the assumption that the w component
   * is one. The four dimensional vector obtained from the transformation operation has each
   * component in the vector divided by the w component. This forces the wcomponent to be one and
   * therefore makes the vector homogeneous. The homogeneous vector is often prefered when working
   * with coordinates as the w component can safely be ignored.
   * @param m - The transform matrix
   * @returns This vector
   */
  ;

  _proto.transformCoordinate = function transformCoordinate(m) {
    Vector3.transformCoordinate(this, m, this);
    return this;
  }
  /**
   * This vector performs a transformation using the given quaternion.
   * @param quaternion - The transform quaternion
   * @param out - This vector
   */
  ;

  _proto.transformByQuat = function transformByQuat(quaternion) {
    Vector3.transformByQuat(this, quaternion, this);
    return this;
  };

  return Vector3;
}();
Vector3._zero = new Vector3(0.0, 0.0, 0.0);
Vector3._one = new Vector3(1.0, 1.0, 1.0);
Vector3._tempVector3 = new Vector3();

/**
 * A bounding sphere.
 * */

var BoundingSphere = /*#__PURE__*/function () {
  /**
   * Calculate a bounding sphere that fully contains the given points.
   * @param points - The given points
   * @param out - The calculated bounding sphere
   */
  BoundingSphere.fromPoints = function fromPoints(points, out) {
    if (!points || points.length === 0) {
      throw new Error("points must be array and length must > 0");
    }

    var len = points.length;
    var center = BoundingSphere._tempVec30;
    center.x = center.y = center.z = 0; // Calculate the center of the sphere.

    for (var i = 0; i < len; ++i) {
      Vector3.add(points[i], center, center);
    } // The center of the sphere.


    Vector3.scale(center, 1 / len, out.center); // Calculate the radius of the sphere.

    var radius = 0.0;

    for (var _i = 0; _i < len; ++_i) {
      var distance = Vector3.distanceSquared(center, points[_i]);
      distance > radius && (radius = distance);
    } // The radius of the sphere.


    out.radius = Math.sqrt(radius);
  }
  /**
   * Calculate a bounding sphere from a given box.
   * @param box - The given box
   * @param out - The calculated bounding sphere
   */
  ;

  BoundingSphere.fromBox = function fromBox(box, out) {
    var center = out.center;
    var min = box.min,
        max = box.max;
    center.x = (min.x + max.x) * 0.5;
    center.y = (min.y + max.y) * 0.5;
    center.z = (min.z + max.z) * 0.5;
    out.radius = Vector3.distance(center, max);
  }
  /** The center point of the sphere. */
  ;

  /**
   * Constructor of BoundingSphere.
   * @param center - The center point of the sphere
   * @param radius - The radius of the sphere
   */
  function BoundingSphere(center, radius) {
    if (center === void 0) {
      center = null;
    }

    if (radius === void 0) {
      radius = 0;
    }

    this.center = new Vector3();
    this.radius = 0;
    center && center.cloneTo(this.center);
    this.radius = radius;
  }
  /**
   * Creates a clone of this sphere.
   * @returns A clone of this sphere
   */


  var _proto = BoundingSphere.prototype;

  _proto.clone = function clone() {
    return new BoundingSphere(this.center, this.radius);
  }
  /**
   * Clones this sphere to the specified sphere.
   * @param out - The specified sphere
   * @returns The specified sphere
   */
  ;

  _proto.cloneTo = function cloneTo(out) {
    this.center.cloneTo(out.center);
    out.radius = this.radius;
    return out;
  };

  return BoundingSphere;
}();
BoundingSphere._tempVec30 = new Vector3();

/**
 * Axis Aligned Bound Box (AABB).
 */

var BoundingBox = /*#__PURE__*/function () {
  /**
   * Calculate a bounding box from the center point and the extent of the bounding box.
   * @param center - The center point
   * @param extent - The extent of the bounding box
   * @param out - The calculated bounding box
   */
  BoundingBox.fromCenterAndExtent = function fromCenterAndExtent(center, extent, out) {
    Vector3.subtract(center, extent, out.min);
    Vector3.add(center, extent, out.max);
  }
  /**
   * Calculate a bounding box that fully contains the given points.
   * @param points - The given points
   * @param out - The calculated bounding box
   */
  ;

  BoundingBox.fromPoints = function fromPoints(points, out) {
    if (!points || points.length === 0) {
      throw new Error("points must be array and length must > 0");
    }

    var min = out.min,
        max = out.max;
    min.x = min.y = min.z = Number.MAX_VALUE;
    max.x = max.y = max.z = -Number.MAX_VALUE;

    for (var i = 0, l = points.length; i < l; ++i) {
      var point = points[i];
      Vector3.min(min, point, min);
      Vector3.max(max, point, max);
    }
  }
  /**
   * Calculate a bounding box from a given sphere.
   * @param shpere - The given sphere
   * @param out - The calculated bounding box
   */
  ;

  BoundingBox.fromSphere = function fromSphere(shpere, out) {
    var center = shpere.center,
        radius = shpere.radius;
    var min = out.min,
        max = out.max;
    min.x = center.x - radius;
    min.y = center.y - radius;
    min.z = center.z - radius;
    max.x = center.x + radius;
    max.y = center.y + radius;
    max.z = center.z + radius;
  }
  /**
   * Transfrom a bounding box.
   * @param source - The original bounding box
   * @param matrix - The transform to apply to the bounding box
   * @param out - The transformed bounding box
   */
  ;

  BoundingBox.transform = function transform(source, matrix, out) {
    // https://zeux.io/2010/10/17/aabb-from-obb-with-component-wise-abs/
    var center = BoundingBox._tempVec30;
    var extent = BoundingBox._tempVec31;
    source.getCenter(center);
    source.getExtent(extent);
    Vector3.transformCoordinate(center, matrix, center);
    var x = extent.x,
        y = extent.y,
        z = extent.z;
    var e = matrix.elements;
    extent.x = Math.abs(x * e[0]) + Math.abs(y * e[4]) + Math.abs(z * e[8]);
    extent.y = Math.abs(x * e[1]) + Math.abs(y * e[5]) + Math.abs(z * e[9]);
    extent.z = Math.abs(x * e[2]) + Math.abs(y * e[6]) + Math.abs(z * e[10]); // set min、max

    Vector3.subtract(center, extent, out.min);
    Vector3.add(center, extent, out.max);
  }
  /**
   * Calculate a bounding box that is as large as the total combined area of the two specified boxes.
   * @param box1 - The first box to merge
   * @param box2 - The second box to merge
   * @param out - The merged bounding box
   * @returns The merged bounding box
   */
  ;

  BoundingBox.merge = function merge(box1, box2, out) {
    Vector3.min(box1.min, box2.min, out.min);
    Vector3.max(box1.max, box2.max, out.max);
    return out;
  }
  /** The minimum point of the box. */
  ;

  /**
   * Constructor of BoundingBox.
   * @param min - The minimum point of the box
   * @param max - The maximum point of the box
   */
  function BoundingBox(min, max) {
    if (min === void 0) {
      min = null;
    }

    if (max === void 0) {
      max = null;
    }

    this.min = new Vector3();
    this.max = new Vector3();
    min && min.cloneTo(this.min);
    max && max.cloneTo(this.max);
  }
  /**
   * Creates a clone of this box.
   * @returns A clone of this box
   */


  var _proto = BoundingBox.prototype;

  _proto.clone = function clone() {
    return new BoundingBox(this.min, this.max);
  }
  /**
   * Clones this box to the specified box.
   * @param out - The specified box
   * @returns The specified box
   */
  ;

  _proto.cloneTo = function cloneTo(out) {
    this.min.cloneTo(out.min);
    this.max.cloneTo(out.max);
    return out;
  }
  /**
   * Get the center point of this bounding box.
   * @param out - The center point of this bounding box
   * @returns The center point of this bounding box
   */
  ;

  _proto.getCenter = function getCenter(out) {
    Vector3.add(this.min, this.max, out);
    Vector3.scale(out, 0.5, out);
    return out;
  }
  /**
   * Get the extent of this bounding box.
   * @param out - The extent of this bounding box
   * @returns The extent of this bounding box
   */
  ;

  _proto.getExtent = function getExtent(out) {
    Vector3.subtract(this.max, this.min, out);
    Vector3.scale(out, 0.5, out);
    return out;
  }
  /**
   * Get the eight corners of this bounding box.
   * @param out - An array of points representing the eight corners of this bounding box
   * @returns An array of points representing the eight corners of this bounding box
   */
  ;

  _proto.getCorners = function getCorners(out) {
    if (out === void 0) {
      out = [];
    }

    var min = this.min,
        max = this.max;
    var minX = min.x;
    var minY = min.y;
    var minZ = min.z;
    var maxX = max.x;
    var maxY = max.y;
    var maxZ = max.z;
    var len = out.length; // The array length is less than 8 to make up

    if (len < 8) {
      for (var i = 0, l = 8 - len; i < l; ++i) {
        out[len + i] = new Vector3();
      }
    }

    out[0].setValue(minX, maxY, maxZ);
    out[1].setValue(maxX, maxY, maxZ);
    out[2].setValue(maxX, minY, maxZ);
    out[3].setValue(minX, minY, maxZ);
    out[4].setValue(minX, maxY, minZ);
    out[5].setValue(maxX, maxY, minZ);
    out[6].setValue(maxX, minY, minZ);
    out[7].setValue(minX, minY, minZ);
    return out;
  }
  /**
   * Transfrom a bounding box.
   * @param matrix - The transform to apply to the bounding box
   * @returns The transformed bounding box
   */
  ;

  _proto.transform = function transform(matrix) {
    BoundingBox.transform(this, matrix, this);
    return this;
  };

  return BoundingBox;
}();
BoundingBox._tempVec30 = new Vector3();
BoundingBox._tempVec31 = new Vector3();

/**
 * Contains static methods to help in determining intersections, containment, etc.
 */

var CollisionUtil = /*#__PURE__*/function () {
  function CollisionUtil() {}

  /**
   * Calculate the distance from a point to a plane.
   * @param plane - The plane
   * @param point - The point
   * @returns The distance from a point to a plane
   */
  CollisionUtil.distancePlaneAndPoint = function distancePlaneAndPoint(plane, point) {
    return Vector3.dot(plane.normal, point) + plane.distance;
  }
  /**
   * Get the intersection type between a plane and a point.
   * @param plane - The plane
   * @param point - The point
   * @returns The intersection type
   */
  ;

  CollisionUtil.intersectsPlaneAndPoint = function intersectsPlaneAndPoint(plane, point) {
    var distance = CollisionUtil.distancePlaneAndPoint(plane, point);

    if (distance > 0) {
      return exports.PlaneIntersectionType.Front;
    }

    if (distance < 0) {
      return exports.PlaneIntersectionType.Back;
    }

    return exports.PlaneIntersectionType.Intersecting;
  }
  /**
   * Get the intersection type between a plane and a box (AABB).
   * @param plane - The plane
   * @param box - The box
   * @returns The intersection type
   */
  ;

  CollisionUtil.intersectsPlaneAndBox = function intersectsPlaneAndBox(plane, box) {
    var min = box.min,
        max = box.max;
    var normal = plane.normal;
    var front = CollisionUtil._tempVec30;
    var back = CollisionUtil._tempVec31;

    if (normal.x >= 0) {
      front.x = max.x;
      back.x = min.x;
    } else {
      front.x = min.x;
      back.x = max.x;
    }

    if (normal.y >= 0) {
      front.y = max.y;
      back.y = min.y;
    } else {
      front.y = min.y;
      back.y = max.y;
    }

    if (normal.z >= 0) {
      front.z = max.z;
      back.z = min.z;
    } else {
      front.z = min.z;
      back.z = max.z;
    }

    if (CollisionUtil.distancePlaneAndPoint(plane, front) < 0) {
      return exports.PlaneIntersectionType.Back;
    }

    if (CollisionUtil.distancePlaneAndPoint(plane, back) > 0) {
      return exports.PlaneIntersectionType.Front;
    }

    return exports.PlaneIntersectionType.Intersecting;
  }
  /**
   * Get the intersection type between a plane and a sphere.
   * @param plane - The plane
   * @param sphere - The sphere
   * @returns The intersection type
   */
  ;

  CollisionUtil.intersectsPlaneAndSphere = function intersectsPlaneAndSphere(plane, sphere) {
    var center = sphere.center,
        radius = sphere.radius;
    var distance = CollisionUtil.distancePlaneAndPoint(plane, center);

    if (distance > radius) {
      return exports.PlaneIntersectionType.Front;
    }

    if (distance < -radius) {
      return exports.PlaneIntersectionType.Back;
    }

    return exports.PlaneIntersectionType.Intersecting;
  }
  /**
   * Get the intersection type between a ray and a plane.
   * @param ray - The ray
   * @param plane - The plane
   * @returns The distance from ray to plane if intersecting, -1 otherwise
   */
  ;

  CollisionUtil.intersectsRayAndPlane = function intersectsRayAndPlane(ray, plane) {
    var normal = plane.normal;
    var zeroTolerance = MathUtil.zeroTolerance;
    var dir = Vector3.dot(normal, ray.direction); // Parallel

    if (Math.abs(dir) < zeroTolerance) {
      return -1;
    }

    var position = Vector3.dot(normal, ray.origin);
    var distance = (-plane.distance - position) / dir;

    if (distance < 0) {
      if (distance < -zeroTolerance) {
        return -1;
      }

      distance = 0;
    }

    return distance;
  }
  /**
   * Get the intersection type between a ray and a box (AABB).
   * @param ray - The ray
   * @param box - The box
   * @returns The distance from ray to box if intersecting, -1 otherwise
   */
  ;

  CollisionUtil.intersectsRayAndBox = function intersectsRayAndBox(ray, box) {
    var zeroTolerance = MathUtil.zeroTolerance;
    var origin = ray.origin,
        direction = ray.direction;
    var min = box.min,
        max = box.max;
    var dirX = direction.x;
    var dirY = direction.y;
    var dirZ = direction.z;
    var oriX = origin.x;
    var oriY = origin.y;
    var oriZ = origin.z;
    var distance = 0;
    var tmax = Number.MAX_VALUE;

    if (Math.abs(dirX) < zeroTolerance) {
      if (oriX < min.x || oriX > max.x) {
        return -1;
      }
    } else {
      var inverse = 1.0 / dirX;
      var t1 = (min.x - oriX) * inverse;
      var t2 = (max.x - oriX) * inverse;

      if (t1 > t2) {
        var temp = t1;
        t1 = t2;
        t2 = temp;
      }

      distance = Math.max(t1, distance);
      tmax = Math.min(t2, tmax);

      if (distance > tmax) {
        return -1;
      }
    }

    if (Math.abs(dirY) < zeroTolerance) {
      if (oriY < min.y || oriY > max.y) {
        return -1;
      }
    } else {
      var _inverse = 1.0 / dirY;

      var _t = (min.y - oriY) * _inverse;

      var _t2 = (max.y - oriY) * _inverse;

      if (_t > _t2) {
        var _temp = _t;
        _t = _t2;
        _t2 = _temp;
      }

      distance = Math.max(_t, distance);
      tmax = Math.min(_t2, tmax);

      if (distance > tmax) {
        return -1;
      }
    }

    if (Math.abs(dirZ) < zeroTolerance) {
      if (oriZ < min.z || oriZ > max.z) {
        return -1;
      }
    } else {
      var _inverse2 = 1.0 / dirZ;

      var _t3 = (min.z - oriZ) * _inverse2;

      var _t4 = (max.z - oriZ) * _inverse2;

      if (_t3 > _t4) {
        var _temp2 = _t3;
        _t3 = _t4;
        _t4 = _temp2;
      }

      distance = Math.max(_t3, distance);
      tmax = Math.min(_t4, tmax);

      if (distance > tmax) {
        return -1;
      }
    }

    return distance;
  }
  /**
   * Get the intersection type between a ray and a sphere.
   * @param ray - The ray
   * @param sphere - The sphere
   * @returns The distance from ray to sphere if intersecting, -1 otherwise
   */
  ;

  CollisionUtil.intersectsRayAndSphere = function intersectsRayAndSphere(ray, sphere) {
    var origin = ray.origin,
        direction = ray.direction;
    var center = sphere.center,
        radius = sphere.radius;
    var m = CollisionUtil._tempVec30;
    Vector3.subtract(origin, center, m);
    var b = Vector3.dot(m, direction);
    var c = Vector3.dot(m, m) - radius * radius;

    if (b > 0 && c > 0) {
      return -1;
    }

    var discriminant = b * b - c;

    if (discriminant < 0) {
      return -1;
    }

    var distance = -b - Math.sqrt(discriminant);

    if (distance < 0) {
      distance = 0;
    }

    return distance;
  }
  /**
   * Get whether or not a specified bounding box intersects with this frustum (Contains or Intersects).
   * @param frustum - The frustum
   * @param box - The box
   * @returns True if bounding box intersects with this frustum, false otherwise
   */
  ;

  CollisionUtil.intersectsFrustumAndBox = function intersectsFrustumAndBox(frustum, box) {
    var min = box.min,
        max = box.max;
    var back = CollisionUtil._tempVec30;

    for (var i = 0; i < 6; ++i) {
      var plane = frustum.getPlane(i);
      var normal = plane.normal;
      back.x = normal.x >= 0 ? min.x : max.x;
      back.y = normal.y >= 0 ? min.y : max.y;
      back.z = normal.z >= 0 ? min.z : max.z;

      if (Vector3.dot(plane.normal, back) > -plane.distance) {
        return false;
      }
    }

    return true;
  }
  /**
   * Get the containment type between a frustum and a box (AABB).
   * @param frustum - The frustum
   * @param box - The box
   * @returns The containment type
   */
  ;

  CollisionUtil.frustumContainsBox = function frustumContainsBox(frustum, box) {
    var min = box.min,
        max = box.max;
    var front = CollisionUtil._tempVec30;
    var back = CollisionUtil._tempVec31;
    var result = exports.ContainmentType.Contains;

    for (var i = 0; i < 6; ++i) {
      var plane = frustum.getPlane(i);
      var normal = plane.normal;

      if (normal.x >= 0) {
        front.x = max.x;
        back.x = min.x;
      } else {
        front.x = min.x;
        back.x = max.x;
      }

      if (normal.y >= 0) {
        front.y = max.y;
        back.y = min.y;
      } else {
        front.y = min.y;
        back.y = max.y;
      }

      if (normal.z >= 0) {
        front.z = max.z;
        back.z = min.z;
      } else {
        front.z = min.z;
        back.z = max.z;
      }

      if (CollisionUtil.intersectsPlaneAndPoint(plane, back) === exports.PlaneIntersectionType.Front) {
        return exports.ContainmentType.Disjoint;
      }

      if (CollisionUtil.intersectsPlaneAndPoint(plane, front) === exports.PlaneIntersectionType.Front) {
        result = exports.ContainmentType.Intersects;
      }
    }

    return result;
  }
  /**
   * Get the containment type between a frustum and a sphere.
   * @param frustum - The frustum
   * @param sphere - The sphere
   * @returns The containment type
   */
  ;

  CollisionUtil.frustumContainsSphere = function frustumContainsSphere(frustum, sphere) {
    var result = exports.ContainmentType.Contains;

    for (var i = 0; i < 6; ++i) {
      var plane = frustum.getPlane(i);
      var intersectionType = CollisionUtil.intersectsPlaneAndSphere(plane, sphere);

      if (intersectionType === exports.PlaneIntersectionType.Front) {
        return exports.ContainmentType.Disjoint;
      } else if (intersectionType === exports.PlaneIntersectionType.Intersecting) {
        result = exports.ContainmentType.Intersects;
        break;
      }
    }

    return result;
  };

  return CollisionUtil;
}();
CollisionUtil._tempVec30 = new Vector3();
CollisionUtil._tempVec31 = new Vector3();

/**
 * Represents a plane in three dimensional space.
 */

var Plane = /*#__PURE__*/function () {
  /**
   * Normalize the normal vector of the specified plane.
   * @param p - The specified plane
   * @param out - A normalized version of the specified plane
   */
  Plane.normalize = function normalize(p, out) {
    var normal = p.normal;
    var factor = 1.0 / normal.length();
    var outNormal = out.normal;
    outNormal.x = normal.x * factor;
    outNormal.y = normal.y * factor;
    outNormal.z = normal.z * factor;
    out.distance = p.distance * factor;
  }
  /**
   * Calculate the plane that contains the three specified points.
   * @param point0 - The first point
   * @param point1 - The second point
   * @param point2 - The third point
   * @param out - The calculated plane
   */
  ;

  Plane.fromPoints = function fromPoints(point0, point1, point2, out) {
    var x0 = point0.x;
    var y0 = point0.y;
    var z0 = point0.z;
    var x1 = point1.x - x0;
    var y1 = point1.y - y0;
    var z1 = point1.z - z0;
    var x2 = point2.x - x0;
    var y2 = point2.y - y0;
    var z2 = point2.z - z0;
    var yz = y1 * z2 - z1 * y2;
    var xz = z1 * x2 - x1 * z2;
    var xy = x1 * y2 - y1 * x2;
    var invPyth = 1.0 / Math.sqrt(yz * yz + xz * xz + xy * xy);
    var x = yz * invPyth;
    var y = xz * invPyth;
    var z = xy * invPyth;
    var normal = out.normal;
    normal.x = x;
    normal.y = y;
    normal.z = z;
    out.distance = -(x * x0 + y * y0 + z * z0);
  }
  /** The normal of the plane. */
  ;

  /**
   * Constructor of Plane.
   * @param normal - The normal vector
   * @param distance - The distance of the plane along its normal to the origin
   */
  function Plane(normal, distance) {
    if (normal === void 0) {
      normal = null;
    }

    if (distance === void 0) {
      distance = 0;
    }

    this.normal = new Vector3();
    this.distance = 0;
    normal && normal.cloneTo(this.normal);
    this.distance = distance;
  }
  /**
   * Normalize the normal vector of this plane.
   * @returns The plane after normalize
   */


  var _proto = Plane.prototype;

  _proto.normalize = function normalize() {
    Plane.normalize(this, this);
    return this;
  }
  /**
   * Creates a clone of this plane.
   * @returns A clone of this plane
   */
  ;

  _proto.clone = function clone() {
    var out = new Plane();
    this.cloneTo(out);
    return out;
  }
  /**
   * Clones this plane to the specified plane.
   * @param out - The specified plane
   * @returns The specified plane
   */
  ;

  _proto.cloneTo = function cloneTo(out) {
    this.normal.cloneTo(out.normal);
    out.distance = this.distance;
    return out;
  };

  return Plane;
}();

/**
 * A bounding frustum.
 */

var BoundingFrustum = /*#__PURE__*/function () {
  /** The near plane of this frustum. */

  /** The far plane of this frustum. */

  /** The left plane of this frustum. */

  /** The right plane of this frustum. */

  /** The top plane of this frustum. */

  /** The bottom plane of this frustum. */

  /**
   * Constructor of BoundingFrustum.
   * @param matrix - The view-projection matrix
   */
  function BoundingFrustum(matrix) {
    if (matrix === void 0) {
      matrix = null;
    }

    this.near = void 0;
    this.far = void 0;
    this.left = void 0;
    this.right = void 0;
    this.top = void 0;
    this.bottom = void 0;
    this.near = new Plane();
    this.far = new Plane();
    this.left = new Plane();
    this.right = new Plane();
    this.top = new Plane();
    this.bottom = new Plane();
    matrix && this.calculateFromMatrix(matrix);
  }
  /**
   * Creates a clone of this frustum.
   * @returns A clone of this frustum
   */


  var _proto = BoundingFrustum.prototype;

  _proto.clone = function clone() {
    var bf = new BoundingFrustum();
    this.cloneTo(bf);
    return bf;
  }
  /**
   * Clones this frustum to the specified frustum.
   * @param out - The specified frustum
   * @returns The specified frustum
   */
  ;

  _proto.cloneTo = function cloneTo(out) {
    this.near.cloneTo(out.near);
    this.far.cloneTo(out.far);
    this.left.cloneTo(out.left);
    this.right.cloneTo(out.right);
    this.top.cloneTo(out.top);
    this.bottom.cloneTo(out.bottom);
    return out;
  }
  /**
   * Get the plane by the given index.
   * 0: near
   * 1: far
   * 2: left
   * 3: right
   * 4: top
   * 5: bottom
   * @param index - The index
   * @returns The plane get
   */
  ;

  _proto.getPlane = function getPlane(index) {
    switch (index) {
      case 0:
        return this.near;

      case 1:
        return this.far;

      case 2:
        return this.left;

      case 3:
        return this.right;

      case 4:
        return this.top;

      case 5:
        return this.bottom;

      default:
        return null;
    }
  }
  /**
   * Update all planes from the given matrix.
   * @param matrix - The given view-projection matrix
   */
  ;

  _proto.calculateFromMatrix = function calculateFromMatrix(matrix) {
    var me = matrix.elements;
    var m11 = me[0];
    var m12 = me[1];
    var m13 = me[2];
    var m14 = me[3];
    var m21 = me[4];
    var m22 = me[5];
    var m23 = me[6];
    var m24 = me[7];
    var m31 = me[8];
    var m32 = me[9];
    var m33 = me[10];
    var m34 = me[11];
    var m41 = me[12];
    var m42 = me[13];
    var m43 = me[14];
    var m44 = me[15]; // near

    var nearNormal = this.near.normal;
    nearNormal.x = -m14 - m13;
    nearNormal.y = -m24 - m23;
    nearNormal.z = -m34 - m33;
    this.near.distance = -m44 - m43;
    this.near.normalize(); // far

    var farNormal = this.far.normal;
    farNormal.x = m13 - m14;
    farNormal.y = m23 - m24;
    farNormal.z = m33 - m34;
    this.far.distance = m43 - m44;
    this.far.normalize(); // left

    var leftNormal = this.left.normal;
    leftNormal.x = -m14 - m11;
    leftNormal.y = -m24 - m21;
    leftNormal.z = -m34 - m31;
    this.left.distance = -m44 - m41;
    this.left.normalize(); // right

    var rightNormal = this.right.normal;
    rightNormal.x = m11 - m14;
    rightNormal.y = m21 - m24;
    rightNormal.z = m31 - m34;
    this.right.distance = m41 - m44;
    this.right.normalize(); // top

    var topNormal = this.top.normal;
    topNormal.x = m12 - m14;
    topNormal.y = m22 - m24;
    topNormal.z = m32 - m34;
    this.top.distance = m42 - m44;
    this.top.normalize(); // bottom

    var bottomNormal = this.bottom.normal;
    bottomNormal.x = -m14 - m12;
    bottomNormal.y = -m24 - m22;
    bottomNormal.z = -m34 - m32;
    this.bottom.distance = -m44 - m42;
    this.bottom.normalize();
  }
  /**
   * Get whether or not a specified bounding box intersects with this frustum (Contains or Intersects).
   * @param box - The box for testing
   * @returns True if bounding box intersects with this frustum, false otherwise
   */
  ;

  _proto.intersectsBox = function intersectsBox(box) {
    return CollisionUtil.intersectsFrustumAndBox(this, box);
  }
  /**
   * Get whether or not a specified bounding sphere intersects with this frustum (Contains or Intersects).
   * @param sphere - The sphere for testing
   * @returns True if bounding sphere intersects with this frustum, false otherwise
   */
  ;

  _proto.intersectsSphere = function intersectsSphere(sphere) {
    return CollisionUtil.frustumContainsSphere(this, sphere) !== exports.ContainmentType.Disjoint;
  };

  return BoundingFrustum;
}();

/**
 * Represents a 3x3 mathematical matrix.
 */
var Matrix3x3 = /*#__PURE__*/function () {
  /**
   * Determines the sum of two matrices.
   * @param left - The first matrix to add
   * @param right - The second matrix to add
   * @param out - The sum of two matrices
   */
  Matrix3x3.add = function add(left, right, out) {
    var le = left.elements;
    var re = right.elements;
    var oe = out.elements;
    oe[0] = le[0] + re[0];
    oe[1] = le[1] + re[1];
    oe[2] = le[2] + re[2];
    oe[3] = le[3] + re[3];
    oe[4] = le[4] + re[4];
    oe[5] = le[5] + re[5];
    oe[6] = le[6] + re[6];
    oe[7] = le[7] + re[7];
    oe[8] = le[8] + re[8];
  }
  /**
   * Determines the difference between two matrices.
   * @param left - The first matrix to subtract
   * @param right - The second matrix to subtract
   * @param out - The difference between two matrices
   */
  ;

  Matrix3x3.subtract = function subtract(left, right, out) {
    var le = left.elements;
    var re = right.elements;
    var oe = out.elements;
    oe[0] = le[0] - re[0];
    oe[1] = le[1] - re[1];
    oe[2] = le[2] - re[2];
    oe[3] = le[3] - re[3];
    oe[4] = le[4] - re[4];
    oe[5] = le[5] - re[5];
    oe[6] = le[6] - re[6];
    oe[7] = le[7] - re[7];
    oe[8] = le[8] - re[8];
  }
  /**
   * Determines the product of two matrices.
   * @param left - The first matrix to multiply
   * @param right - The second matrix to multiply
   * @param out - The product of two matrices
   */
  ;

  Matrix3x3.multiply = function multiply(left, right, out) {
    var le = left.elements;
    var re = right.elements;
    var oe = out.elements;
    var l11 = le[0],
        l12 = le[1],
        l13 = le[2];
    var l21 = le[3],
        l22 = le[4],
        l23 = le[5];
    var l31 = le[6],
        l32 = le[7],
        l33 = le[8];
    var r11 = re[0],
        r12 = re[1],
        r13 = re[2];
    var r21 = re[3],
        r22 = re[4],
        r23 = re[5];
    var r31 = re[6],
        r32 = re[7],
        r33 = re[8];
    oe[0] = l11 * r11 + l21 * r12 + l31 * r13;
    oe[1] = l12 * r11 + l22 * r12 + l32 * r13;
    oe[2] = l13 * r11 + l23 * r12 + l33 * r13;
    oe[3] = l11 * r21 + l21 * r22 + l31 * r23;
    oe[4] = l12 * r21 + l22 * r22 + l32 * r23;
    oe[5] = l13 * r21 + l23 * r22 + l33 * r23;
    oe[6] = l11 * r31 + l21 * r32 + l31 * r33;
    oe[7] = l12 * r31 + l22 * r32 + l32 * r33;
    oe[8] = l13 * r31 + l23 * r32 + l33 * r33;
  }
  /**
   * Determines whether the specified matrices are equals.
   * @param left - The first matrix to compare
   * @param right - The second matrix to compare
   * @returns True if the specified matrices are equals, false otherwise
   */
  ;

  Matrix3x3.equals = function equals(left, right) {
    var le = left.elements;
    var re = right.elements;
    return MathUtil.equals(le[0], re[0]) && MathUtil.equals(le[1], re[1]) && MathUtil.equals(le[2], re[2]) && MathUtil.equals(le[3], re[3]) && MathUtil.equals(le[4], re[4]) && MathUtil.equals(le[5], re[5]) && MathUtil.equals(le[6], re[6]) && MathUtil.equals(le[7], re[7]) && MathUtil.equals(le[8], re[8]);
  }
  /**
   * Calculate a rotation matrix from a quaternion.
   * @param quaternion - The quaternion used to calculate the matrix
   * @param out - The calculated rotation matrix
   */
  ;

  Matrix3x3.rotationQuaternion = function rotationQuaternion(quaternion, out) {
    var oe = out.elements;
    var x = quaternion.x,
        y = quaternion.y,
        z = quaternion.z,
        w = quaternion.w;
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    oe[0] = 1 - yy - zz;
    oe[3] = yx - wz;
    oe[6] = zx + wy;
    oe[1] = yx + wz;
    oe[4] = 1 - xx - zz;
    oe[7] = zy - wx;
    oe[2] = zx - wy;
    oe[5] = zy + wx;
    oe[8] = 1 - xx - yy;
  }
  /**
   * Calculate a matrix from scale vector.
   * @param s - The scale vector
   * @param out - The calculated matrix
   */
  ;

  Matrix3x3.scaling = function scaling(s, out) {
    var oe = out.elements;
    oe[0] = s.x;
    oe[1] = 0;
    oe[2] = 0;
    oe[3] = 0;
    oe[4] = s.y;
    oe[5] = 0;
    oe[6] = 0;
    oe[7] = 0;
    oe[8] = 1;
  }
  /**
   * Calculate a matrix from translation vector.
   * @param translation - The translation vector
   * @param out - The calculated matrix
   */
  ;

  Matrix3x3.translation = function translation(_translation, out) {
    var oe = out.elements;
    oe[0] = 1;
    oe[1] = 0;
    oe[2] = 0;
    oe[3] = 0;
    oe[4] = 1;
    oe[5] = 0;
    oe[6] = _translation.x;
    oe[7] = _translation.y;
    oe[8] = 1;
  }
  /**
   * Calculate the inverse of the specified matrix.
   * @param a - The matrix whose inverse is to be calculated
   * @param out - The inverse of the specified matrix
   */
  ;

  Matrix3x3.invert = function invert(a, out) {
    var ae = a.elements;
    var oe = out.elements;
    var a11 = ae[0],
        a12 = ae[1],
        a13 = ae[2];
    var a21 = ae[3],
        a22 = ae[4],
        a23 = ae[5];
    var a31 = ae[6],
        a32 = ae[7],
        a33 = ae[8];
    var b12 = a33 * a22 - a23 * a32;
    var b22 = -a33 * a21 + a23 * a31;
    var b32 = a32 * a21 - a22 * a31;
    var det = a11 * b12 + a12 * b22 + a13 * b32;

    if (!det) {
      return;
    }

    det = 1.0 / det;
    oe[0] = b12 * det;
    oe[1] = (-a33 * a12 + a13 * a32) * det;
    oe[2] = (a23 * a12 - a13 * a22) * det;
    oe[3] = b22 * det;
    oe[4] = (a33 * a11 - a13 * a31) * det;
    oe[5] = (-a23 * a11 + a13 * a21) * det;
    oe[6] = b32 * det;
    oe[7] = (-a32 * a11 + a12 * a31) * det;
    oe[8] = (a22 * a11 - a12 * a21) * det;
  }
  /**
   * Calculate a 3x3 normal matrix from a 4x4 matrix.
   * @remarks The calculation process is the transpose matrix of the inverse matrix.
   * @param mat4 - The 4x4 matrix
   * @param out - THe 3x3 normal matrix
   */
  ;

  Matrix3x3.normalMatrix = function normalMatrix(mat4, out) {
    var ae = mat4.elements;
    var oe = out.elements;
    var a11 = ae[0],
        a12 = ae[1],
        a13 = ae[2],
        a14 = ae[3];
    var a21 = ae[4],
        a22 = ae[5],
        a23 = ae[6],
        a24 = ae[7];
    var a31 = ae[8],
        a32 = ae[9],
        a33 = ae[10],
        a34 = ae[11];
    var a41 = ae[12],
        a42 = ae[13],
        a43 = ae[14],
        a44 = ae[15];
    var b00 = a11 * a22 - a12 * a21;
    var b01 = a11 * a23 - a13 * a21;
    var b02 = a11 * a24 - a14 * a21;
    var b03 = a12 * a23 - a13 * a22;
    var b04 = a12 * a24 - a14 * a22;
    var b05 = a13 * a24 - a14 * a23;
    var b06 = a31 * a42 - a32 * a41;
    var b07 = a31 * a43 - a33 * a41;
    var b08 = a31 * a44 - a34 * a41;
    var b09 = a32 * a43 - a33 * a42;
    var b10 = a32 * a44 - a34 * a42;
    var b11 = a33 * a44 - a34 * a43;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
      return null;
    }

    det = 1.0 / det;
    oe[0] = (a22 * b11 - a23 * b10 + a24 * b09) * det;
    oe[1] = (a23 * b08 - a21 * b11 - a24 * b07) * det;
    oe[2] = (a21 * b10 - a22 * b08 + a24 * b06) * det;
    oe[3] = (a13 * b10 - a12 * b11 - a14 * b09) * det;
    oe[4] = (a11 * b11 - a13 * b08 + a14 * b07) * det;
    oe[5] = (a12 * b08 - a11 * b10 - a14 * b06) * det;
    oe[6] = (a42 * b05 - a43 * b04 + a44 * b03) * det;
    oe[7] = (a43 * b02 - a41 * b05 - a44 * b01) * det;
    oe[8] = (a41 * b04 - a42 * b02 + a44 * b00) * det;
  }
  /**
   * The specified matrix rotates around an angle.
   * @param a - The specified matrix
   * @param r - The rotation angle in radians
   * @param out - The rotated matrix
   */
  ;

  Matrix3x3.rotate = function rotate(a, r, out) {
    var ae = a.elements;
    var oe = out.elements;
    var s = Math.sin(r);
    var c = Math.cos(r);
    var a11 = ae[0],
        a12 = ae[1],
        a13 = ae[2];
    var a21 = ae[3],
        a22 = ae[4],
        a23 = ae[5];
    var a31 = ae[6],
        a32 = ae[7],
        a33 = ae[8];
    oe[0] = c * a11 + s * a21;
    oe[1] = c * a12 + s * a22;
    oe[2] = c * a13 + s * a23;
    oe[3] = c * a21 - s * a11;
    oe[4] = c * a22 - s * a12;
    oe[5] = c * a23 - s * a13;
    oe[6] = a31;
    oe[7] = a32;
    oe[8] = a33;
  }
  /**
   * Scale a matrix by a given vector.
   * @param m - The matrix
   * @param s - The given vector
   * @param out - The scaled matrix
   */
  ;

  Matrix3x3.scale = function scale(m, s, out) {
    var x = s.x,
        y = s.y;
    var ae = m.elements;
    var oe = out.elements;
    oe[0] = x * ae[0];
    oe[1] = x * ae[1];
    oe[2] = x * ae[2];
    oe[3] = y * ae[3];
    oe[4] = y * ae[4];
    oe[5] = y * ae[5];
    oe[6] = ae[6];
    oe[7] = ae[7];
    oe[8] = ae[8];
  }
  /**
   * Translate a matrix by a given vector.
   * @param m - The matrix
   * @param translation - The given vector
   * @param out - The translated matrix
   */
  ;

  Matrix3x3.translate = function translate(m, translation, out) {
    var x = translation.x,
        y = translation.y;
    var ae = m.elements;
    var oe = out.elements;
    var a11 = ae[0],
        a12 = ae[1],
        a13 = ae[2];
    var a21 = ae[3],
        a22 = ae[4],
        a23 = ae[5];
    var a31 = ae[6],
        a32 = ae[7],
        a33 = ae[8];
    oe[0] = a11;
    oe[1] = a12;
    oe[2] = a13;
    oe[3] = a21;
    oe[4] = a22;
    oe[5] = a23;
    oe[6] = x * a11 + y * a21 + a31;
    oe[7] = x * a12 + y * a22 + a32;
    oe[8] = x * a13 + y * a23 + a33;
  }
  /**
   * Calculate the transpose of the specified matrix.
   * @param a - The specified matrix
   * @param out - The transpose of the specified matrix
   */
  ;

  Matrix3x3.transpose = function transpose(a, out) {
    var ae = a.elements;
    var oe = out.elements;

    if (out === a) {
      var a12 = ae[1];
      var a13 = ae[2];
      var a23 = ae[5];
      oe[1] = ae[3];
      oe[2] = ae[6];
      oe[3] = a12;
      oe[5] = ae[7];
      oe[6] = a13;
      oe[7] = a23;
    } else {
      oe[0] = ae[0];
      oe[1] = ae[3];
      oe[2] = ae[6];
      oe[3] = ae[1];
      oe[4] = ae[4];
      oe[5] = ae[7];
      oe[6] = ae[2];
      oe[7] = ae[5];
      oe[8] = ae[8];
    }
  }
  /**
   * An array containing the elements of the matrix (column matrix).
   * @remarks
   * elements[0] first column and first row value m11
   * elements[1] first column and second row value m12
   * elements[2] first column and third row value m13
   * elements[3] second column and first row value m21
   * and so on
   */
  ;

  /**
   * Constructor of 3*3 matrix.
   * @param m11 - Default 1 column 1, row 1
   * @param m12 - Default 0 column 1, row 2
   * @param m13 - Default 0 column 1, row 3
   * @param m21 - Default 0 column 2, row 1
   * @param m22 - Default 1 column 2, row 2
   * @param m23 - Default 0 column 2, row 3
   * @param m31 - Default 0 column 3, row 1
   * @param m32 - Default 0 column 3, row 2
   * @param m33 - Default 1 column 3, row 3
   */
  function Matrix3x3(m11, m12, m13, m21, m22, m23, m31, m32, m33) {
    if (m11 === void 0) {
      m11 = 1;
    }

    if (m12 === void 0) {
      m12 = 0;
    }

    if (m13 === void 0) {
      m13 = 0;
    }

    if (m21 === void 0) {
      m21 = 0;
    }

    if (m22 === void 0) {
      m22 = 1;
    }

    if (m23 === void 0) {
      m23 = 0;
    }

    if (m31 === void 0) {
      m31 = 0;
    }

    if (m32 === void 0) {
      m32 = 0;
    }

    if (m33 === void 0) {
      m33 = 1;
    }

    this.elements = new Float32Array(9);
    var e = this.elements;
    e[0] = m11;
    e[1] = m12;
    e[2] = m13;
    e[3] = m21;
    e[4] = m22;
    e[5] = m23;
    e[6] = m31;
    e[7] = m32;
    e[8] = m33;
  }
  /**
   * Set the value of this matrix, and return this matrix.
   * @param m11
   * @param m12
   * @param m13
   * @param m21
   * @param m22
   * @param m23
   * @param m31
   * @param m32
   * @param m33
   * @returns This matrix
   */


  var _proto = Matrix3x3.prototype;

  _proto.setValue = function setValue(m11, m12, m13, m21, m22, m23, m31, m32, m33) {
    var e = this.elements;
    e[0] = m11;
    e[1] = m12;
    e[2] = m13;
    e[3] = m21;
    e[4] = m22;
    e[5] = m23;
    e[6] = m31;
    e[7] = m32;
    e[8] = m33;
    return this;
  }
  /**
   * Set the value of this matrix by an array.
   * @param array - The array
   * @param offset - The start offset of the array
   * @returns This matrix
   */
  ;

  _proto.setValueByArray = function setValueByArray(array, offset) {
    if (offset === void 0) {
      offset = 0;
    }

    var srce = this.elements;

    for (var i = 0; i < 12; i++) {
      srce[i] = array[i + offset];
    }

    return this;
  }
  /**
   * Set the value of this 3x3 matrix by the specified 4x4 matrix.
   * upper-left principle
   * @param a - The specified 4x4 matrix
   * @returns This 3x3 matrix
   */
  ;

  _proto.setValueByMatrix = function setValueByMatrix(a) {
    var ae = a.elements;
    var e = this.elements;
    e[0] = ae[0];
    e[1] = ae[1];
    e[2] = ae[2];
    e[3] = ae[4];
    e[4] = ae[5];
    e[5] = ae[6];
    e[6] = ae[8];
    e[7] = ae[9];
    e[8] = ae[10];
    return this;
  }
  /**
   * Clone the value of this matrix to an array.
   * @param out - The array
   * @param outOffset - The start offset of the array
   */
  ;

  _proto.toArray = function toArray(out, outOffset) {
    if (outOffset === void 0) {
      outOffset = 0;
    }

    var e = this.elements;
    out[outOffset] = e[0];
    out[outOffset + 1] = e[1];
    out[outOffset + 2] = e[2];
    out[outOffset + 3] = e[3];
    out[outOffset + 4] = e[4];
    out[outOffset + 5] = e[5];
    out[outOffset + 6] = e[6];
    out[outOffset + 7] = e[7];
    out[outOffset + 8] = e[8];
  }
  /**
   * Creates a clone of this matrix.
   * @returns A clone of this matrix
   */
  ;

  _proto.clone = function clone() {
    var e = this.elements;
    var ret = new Matrix3x3(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
    return ret;
  }
  /**
   * Clones this matrix to the specified matrix.
   * @param out - The specified matrix
   * @returns The specified matrix
   */
  ;

  _proto.cloneTo = function cloneTo(out) {
    var e = this.elements;
    var oe = out.elements;
    oe[0] = e[0];
    oe[1] = e[1];
    oe[2] = e[2];
    oe[3] = e[3];
    oe[4] = e[4];
    oe[5] = e[5];
    oe[6] = e[6];
    oe[7] = e[7];
    oe[8] = e[8];
    return out;
  }
  /**
   * Determines the sum of this matrix and the specified matrix.
   * @param right - The specified matrix
   * @returns This matrix that store the sum of the two matrices
   */
  ;

  _proto.add = function add(right) {
    Matrix3x3.add(this, right, this);
    return this;
  }
  /**
   * Determines the difference between this matrix and the specified matrix.
   * @param right - The specified matrix
   * @returns This matrix that store the difference between the two matrices
   */
  ;

  _proto.subtract = function subtract(right) {
    Matrix3x3.subtract(this, right, this);
    return this;
  }
  /**
   * Determines the product of this matrix and the specified matrix.
   * @param right - The specified matrix
   * @returns This matrix that store the product of the two matrices
   */
  ;

  _proto.multiply = function multiply(right) {
    Matrix3x3.multiply(this, right, this);
    return this;
  }
  /**
   * Calculate a determinant of this matrix.
   * @returns The determinant of this matrix
   */
  ;

  _proto.determinant = function determinant() {
    var e = this.elements;
    var a11 = e[0],
        a12 = e[1],
        a13 = e[2];
    var a21 = e[3],
        a22 = e[4],
        a23 = e[5];
    var a31 = e[6],
        a32 = e[7],
        a33 = e[8];
    var b12 = a33 * a22 - a23 * a32;
    var b22 = -a33 * a21 + a23 * a31;
    var b32 = a32 * a21 - a22 * a31;
    return a11 * b12 + a12 * b22 + a13 * b32;
  }
  /**
   * Identity this matrix.
   * @returns This matrix after identity
   */
  ;

  _proto.identity = function identity() {
    var e = this.elements;
    e[0] = 1;
    e[1] = 0;
    e[2] = 0;
    e[3] = 0;
    e[4] = 1;
    e[5] = 0;
    e[6] = 0;
    e[7] = 0;
    e[8] = 1;
    return this;
  }
  /**
   * Invert the matrix.
   * @returns The matrix after invert
   */
  ;

  _proto.invert = function invert() {
    Matrix3x3.invert(this, this);
    return this;
  }
  /**
   * This matrix rotates around an angle.
   * @param r - The rotation angle in radians
   * @returns This matrix after rotate
   */
  ;

  _proto.rotate = function rotate(r) {
    Matrix3x3.rotate(this, r, this);
    return this;
  }
  /**
   * Scale this matrix by a given vector.
   * @param s - The given vector
   * @returns This matrix after scale
   */
  ;

  _proto.scale = function scale(s) {
    Matrix3x3.scale(this, s, this);
    return this;
  }
  /**
   * Translate this matrix by a given vector.
   * @param translation - The given vector
   * @returns This matrix after translate
   */
  ;

  _proto.translate = function translate(translation) {
    Matrix3x3.translate(this, translation, this);
    return this;
  }
  /**
   * Calculate the transpose of this matrix.
   * @returns This matrix after transpose
   */
  ;

  _proto.transpose = function transpose() {
    Matrix3x3.transpose(this, this);
    return this;
  };

  return Matrix3x3;
}();

/**
 * Represents a four dimensional mathematical quaternion.
 */

var Quaternion = /*#__PURE__*/function () {
  /** @internal */

  /**
   * Determines the sum of two quaternions.
   * @param left - The first quaternion to add
   * @param right - The second quaternion to add
   * @param out - The sum of two quaternions
   */
  Quaternion.add = function add(left, right, out) {
    out.x = left.x + right.x;
    out.y = left.y + right.y;
    out.z = left.z + right.z;
    out.w = left.w + right.w;
  }
  /**
   * Determines the product of two quaternions.
   * @param left - The first quaternion to multiply
   * @param right - The second quaternion to multiply
   * @param out - The product of two quaternions
   */
  ;

  Quaternion.multiply = function multiply(left, right, out) {
    var ax = left.x,
        ay = left.y,
        az = left.z,
        aw = left.w;
    var bx = right.x,
        by = right.y,
        bz = right.z,
        bw = right.w;
    out.x = ax * bw + aw * bx + ay * bz - az * by;
    out.y = ay * bw + aw * by + az * bx - ax * bz;
    out.z = az * bw + aw * bz + ax * by - ay * bx;
    out.w = aw * bw - ax * bx - ay * by - az * bz;
  }
  /**
   * Calculate quaternion that contains conjugated version of the specified quaternion.
   * @param a - The specified quaternion
   * @param out - The conjugate version of the specified quaternion
   */
  ;

  Quaternion.conjugate = function conjugate(a, out) {
    out.x = -a.x;
    out.y = -a.y;
    out.z = -a.z;
    out.w = a.w;
  }
  /**
   * Determines the dot product of two quaternions.
   * @param left - The first quaternion to dot
   * @param right - The second quaternion to dot
   * @returns The dot product of two quaternions
   */
  ;

  Quaternion.dot = function dot(left, right) {
    return left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w;
  }
  /**
   * Determines whether the specified quaternions are equals.
   * @param left - The first quaternion to compare
   * @param right - The second quaternion to compare
   * @returns True if the specified quaternions are equals, false otherwise
   */
  ;

  Quaternion.equals = function equals(left, right) {
    return MathUtil.equals(left.x, right.x) && MathUtil.equals(left.y, right.y) && MathUtil.equals(left.z, right.z) && MathUtil.equals(left.w, right.w);
  }
  /**
   * Calculate a quaternion rotates around an arbitary axis.
   * @param axis - The axis
   * @param rad - The rotation angle in radians
   * @param out - The quaternion after rotate
   */
  ;

  Quaternion.rotationAxisAngle = function rotationAxisAngle(axis, rad, out) {
    var normalAxis = Quaternion._tempVector3;
    Vector3.normalize(axis, normalAxis);
    rad *= 0.5;
    var s = Math.sin(rad);
    out.x = normalAxis.x * s;
    out.y = normalAxis.y * s;
    out.z = normalAxis.z * s;
    out.w = Math.cos(rad);
  }
  /**
   * Calculate a quaternion rotates around x, y, z axis (pitch/yaw/roll).
   * @param x - The radian of rotation around X (pitch)
   * @param y - The radian of rotation around Y (yaw)
   * @param z - The radian of rotation around Z (roll)
   * @param out - The calculated quaternion
   */
  ;

  Quaternion.rotationEuler = function rotationEuler(x, y, z, out) {
    Quaternion.rotationYawPitchRoll(y, x, z, out);
  }
  /**
   * Calculate a quaternion from the specified yaw, pitch and roll angles.
   * @param yaw - Yaw around the y axis in radians
   * @param pitch - Pitch around the x axis in radians
   * @param roll - Roll around the z axis in radians
   * @param out - The calculated quaternion
   */
  ;

  Quaternion.rotationYawPitchRoll = function rotationYawPitchRoll(yaw, pitch, roll, out) {
    var halfRoll = roll * 0.5;
    var halfPitch = pitch * 0.5;
    var halfYaw = yaw * 0.5;
    var sinRoll = Math.sin(halfRoll);
    var cosRoll = Math.cos(halfRoll);
    var sinPitch = Math.sin(halfPitch);
    var cosPitch = Math.cos(halfPitch);
    var sinYaw = Math.sin(halfYaw);
    var cosYaw = Math.cos(halfYaw);
    var cosYawPitch = cosYaw * cosPitch;
    var sinYawPitch = sinYaw * sinPitch;
    out.x = cosYaw * sinPitch * cosRoll + sinYaw * cosPitch * sinRoll;
    out.y = sinYaw * cosPitch * cosRoll - cosYaw * sinPitch * sinRoll;
    out.z = cosYawPitch * sinRoll - sinYawPitch * cosRoll;
    out.w = cosYawPitch * cosRoll + sinYawPitch * sinRoll;
  }
  /**
   * Calculate a quaternion from the specified 3x3 matrix.
   * @param m - The specified 3x3 matrix
   * @param out - The calculated quaternion
   */
  ;

  Quaternion.rotationMatrix3x3 = function rotationMatrix3x3(m, out) {
    var me = m.elements;
    var m11 = me[0],
        m12 = me[1],
        m13 = me[2];
    var m21 = me[3],
        m22 = me[4],
        m23 = me[5];
    var m31 = me[6],
        m32 = me[7],
        m33 = me[8];
    var scale = m11 + m22 + m33;
    var sqrt, half;

    if (scale > 0) {
      sqrt = Math.sqrt(scale + 1.0);
      out.w = sqrt * 0.5;
      sqrt = 0.5 / sqrt;
      out.x = (m23 - m32) * sqrt;
      out.y = (m31 - m13) * sqrt;
      out.z = (m12 - m21) * sqrt;
    } else if (m11 >= m22 && m11 >= m33) {
      sqrt = Math.sqrt(1.0 + m11 - m22 - m33);
      half = 0.5 / sqrt;
      out.x = 0.5 * sqrt;
      out.y = (m12 + m21) * half;
      out.z = (m13 + m31) * half;
      out.w = (m23 - m32) * half;
    } else if (m22 > m33) {
      sqrt = Math.sqrt(1.0 + m22 - m11 - m33);
      half = 0.5 / sqrt;
      out.x = (m21 + m12) * half;
      out.y = 0.5 * sqrt;
      out.z = (m32 + m23) * half;
      out.w = (m31 - m13) * half;
    } else {
      sqrt = Math.sqrt(1.0 + m33 - m11 - m22);
      half = 0.5 / sqrt;
      out.x = (m13 + m31) * half;
      out.y = (m23 + m32) * half;
      out.z = 0.5 * sqrt;
      out.w = (m12 - m21) * half;
    }
  }
  /**
   * Calculate the inverse of the specified quaternion.
   * @param a - The quaternion whose inverse is to be calculated
   * @param out - The inverse of the specified quaternion
   */
  ;

  Quaternion.invert = function invert(a, out) {
    var x = a.x,
        y = a.y,
        z = a.z,
        w = a.w;
    var dot = x * x + y * y + z * z + w * w;

    if (dot > MathUtil.zeroTolerance) {
      var invDot = 1.0 / dot;
      out.x = -x * invDot;
      out.y = -y * invDot;
      out.z = -z * invDot;
      out.w = w * invDot;
    }
  }
  /**
   * Performs a linear blend between two quaternions.
   * @param start - The first quaternion
   * @param end - The second quaternion
   * @param t - The blend amount where 0 returns start and 1 end
   * @param out - The result of linear blending between two quaternions
   */
  ;

  Quaternion.lerp = function lerp(start, end, t, out) {
    var inv = 1.0 - t;

    if (Quaternion.dot(start, end) >= 0) {
      out.x = start.x * inv + end.x * t;
      out.y = start.y * inv + end.y * t;
      out.z = start.z * inv + end.z * t;
      out.w = start.w * inv + end.w * t;
    } else {
      out.x = start.x * inv - end.x * t;
      out.y = start.y * inv - end.y * t;
      out.z = start.z * inv - end.z * t;
      out.w = start.w * inv - end.w * t;
    }

    out.normalize();
  }
  /**
   * Performs a spherical linear blend between two quaternions.
   * @param start - The first quaternion
   * @param end - The second quaternion
   * @param t - The blend amount where 0 returns start and 1 end
   * @param out - The result of spherical linear blending between two quaternions
   */
  ;

  Quaternion.slerp = function slerp(start, end, t, out) {
    var ax = start.x;
    var ay = start.y;
    var az = start.z;
    var aw = start.w;
    var bx = end.x;
    var by = end.y;
    var bz = end.z;
    var bw = end.w;
    var scale0, scale1; // calc cosine

    var cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

    if (cosom < 0.0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    } // calculate coefficients


    if (1.0 - cosom > MathUtil.zeroTolerance) {
      // standard case (slerp)
      var omega = Math.acos(cosom);
      var sinom = Math.sin(omega);
      scale0 = Math.sin((1.0 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      // "from" and "to" quaternions are very close
      //  ... so we can do a linear interpolation
      scale0 = 1.0 - t;
      scale1 = t;
    } // calculate final values


    out.x = scale0 * ax + scale1 * bx;
    out.y = scale0 * ay + scale1 * by;
    out.z = scale0 * az + scale1 * bz;
    out.w = scale0 * aw + scale1 * bw;
  }
  /**
   * Scales the specified quaternion magnitude to unit length.
   * @param a - The specified quaternion
   * @param out - The normalized quaternion
   */
  ;

  Quaternion.normalize = function normalize(a, out) {
    var x = a.x,
        y = a.y,
        z = a.z,
        w = a.w;
    var len = Math.sqrt(x * x + y * y + z * z + w * w);

    if (len > MathUtil.zeroTolerance) {
      len = 1 / len;
      out.x = x * len;
      out.y = y * len;
      out.z = z * len;
      out.w = w * len;
    }
  }
  /**
   * Calculate a quaternion rotate around X axis.
   * @param rad - The rotation angle in radians
   * @param out - The calculated quaternion
   */
  ;

  Quaternion.rotationX = function rotationX(rad, out) {
    rad *= 0.5;
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out.x = s;
    out.y = 0;
    out.z = 0;
    out.w = c;
  }
  /**
   * Calculate a quaternion rotate around Y axis.
   * @param rad - The rotation angle in radians
   * @param out - The calculated quaternion
   */
  ;

  Quaternion.rotationY = function rotationY(rad, out) {
    rad *= 0.5;
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out.x = 0;
    out.y = s;
    out.z = 0;
    out.w = c;
  }
  /**
   * Calculate a quaternion rotate around Z axis.
   * @param rad - The rotation angle in radians
   * @param out - The calculated quaternion
   */
  ;

  Quaternion.rotationZ = function rotationZ(rad, out) {
    rad *= 0.5;
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out.x = 0;
    out.y = 0;
    out.z = s;
    out.w = c;
  }
  /**
   * Calculate a quaternion that the specified quaternion rotate around X axis.
   * @param quaternion - The specified quaternion
   * @param rad - The rotation angle in radians
   * @param out - The calculated quaternion
   */
  ;

  Quaternion.rotateX = function rotateX(quaternion, rad, out) {
    var x = quaternion.x,
        y = quaternion.y,
        z = quaternion.z,
        w = quaternion.w;
    rad *= 0.5;
    var bx = Math.sin(rad);
    var bw = Math.cos(rad);
    out.x = x * bw + w * bx;
    out.y = y * bw + z * bx;
    out.z = z * bw - y * bx;
    out.w = w * bw - x * bx;
  }
  /**
   * Calculate a quaternion that the specified quaternion rotate around Y axis.
   * @param quaternion - The specified quaternion
   * @param rad - The rotation angle in radians
   * @param out - The calculated quaternion
   */
  ;

  Quaternion.rotateY = function rotateY(quaternion, rad, out) {
    var x = quaternion.x,
        y = quaternion.y,
        z = quaternion.z,
        w = quaternion.w;
    rad *= 0.5;
    var by = Math.sin(rad);
    var bw = Math.cos(rad);
    out.x = x * bw - z * by;
    out.y = y * bw + w * by;
    out.z = z * bw + x * by;
    out.w = w * bw - y * by;
  }
  /**
   * Calculate a quaternion that the specified quaternion rotate around Z axis.
   * @param quaternion - The specified quaternion
   * @param rad - The rotation angle in radians
   * @param out - The calculated quaternion
   */
  ;

  Quaternion.rotateZ = function rotateZ(quaternion, rad, out) {
    var x = quaternion.x,
        y = quaternion.y,
        z = quaternion.z,
        w = quaternion.w;
    rad *= 0.5;
    var bz = Math.sin(rad);
    var bw = Math.cos(rad);
    out.x = x * bw + y * bz;
    out.y = y * bw - x * bz;
    out.z = z * bw + w * bz;
    out.w = w * bw - z * bz;
  }
  /**
   * Scale a quaternion by a given number.
   * @param a - The quaternion
   * @param s - The given number
   * @param out - The scaled quaternion
   */
  ;

  Quaternion.scale = function scale(a, s, out) {
    out.x = a.x * s;
    out.y = a.y * s;
    out.z = a.z * s;
    out.w = a.w * s;
  }
  /** The x component of the quaternion. */
  ;

  /**
   * Constructor of Quaternion.
   * @param x - The x component of the quaternion, default 0
   * @param y - The y component of the quaternion, default 0
   * @param z - The z component of the quaternion, default 0
   * @param w - The w component of the quaternion, default 1
   */
  function Quaternion(x, y, z, w) {
    if (x === void 0) {
      x = 0;
    }

    if (y === void 0) {
      y = 0;
    }

    if (z === void 0) {
      z = 0;
    }

    if (w === void 0) {
      w = 1;
    }

    this.x = void 0;
    this.y = void 0;
    this.z = void 0;
    this.w = void 0;
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  /**
   * Set the value of this quaternion, and return this quaternion.
   * @param x - The x component of the quaternion
   * @param y - The y component of the quaternion
   * @param z - The z component of the quaternion
   * @param w - The w component of the quaternion
   * @returns This quaternion
   */


  var _proto = Quaternion.prototype;

  _proto.setValue = function setValue(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  /**
   * Set the value of this quaternion by an array.
   * @param array - The array
   * @param offset - The start offset of the array
   * @returns This quaternion
   */
  ;

  _proto.setValueByArray = function setValueByArray(array, offset) {
    if (offset === void 0) {
      offset = 0;
    }

    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    this.w = array[offset + 3];
    return this;
  }
  /**
   * Transforms this quaternion into its conjugated version.
   * @returns This quaternion
   */
  ;

  _proto.conjugate = function conjugate() {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    return this;
  }
  /**
   * Get the rotation axis and rotation angle of the quaternion (unit: radians).
   * @param out - The axis as an output parameter
   * @returns The rotation angle (unit: radians)
   */
  ;

  _proto.getAxisAngle = function getAxisAngle(out) {
    var x = this.x,
        y = this.y,
        z = this.z;
    var length = x * x + y * y + z * z;

    if (length < MathUtil.zeroTolerance) {
      out.x = 1;
      out.y = 0;
      out.z = 0;
      return 0;
    } else {
      var inv = 1.0 / length;
      out.x = this.x * inv;
      out.y = this.y * inv;
      out.z = this.z * inv;
      return Math.acos(this.w) * 2.0;
    }
  }
  /**
   * Identity this quaternion.
   * @returns This quaternion after identity
   */
  ;

  _proto.identity = function identity() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 1;
    return this;
  }
  /**
   * Calculate the length of this quaternion.
   * @returns The length of this quaternion
   */
  ;

  _proto.length = function length() {
    var x = this.x,
        y = this.y,
        z = this.z,
        w = this.w;
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }
  /**
   * Calculates the squared length of this quaternion.
   * @returns The squared length of this quaternion
   */
  ;

  _proto.lengthSquared = function lengthSquared() {
    var x = this.x,
        y = this.y,
        z = this.z,
        w = this.w;
    return x * x + y * y + z * z + w * w;
  }
  /**
   * Converts this quaternion into a unit quaternion.
   * @returns This quaternion
   */
  ;

  _proto.normalize = function normalize() {
    Quaternion.normalize(this, this);
    return this;
  }
  /**
   * Get the euler of this quaternion.
   * @param out - The euler (in radians) as an output parameter
   * @returns Euler x->pitch y->yaw z->roll
   */
  ;

  _proto.toEuler = function toEuler(out) {
    this.toYawPitchRoll(out);
    var t = out.x;
    out.x = out.y;
    out.y = t;
    return out;
  }
  /**
   * Get the euler of this quaternion.
   * @param out - The euler (in radians) as an output parameter
   * @returns Euler x->yaw y->pitch z->roll
   */
  ;

  _proto.toYawPitchRoll = function toYawPitchRoll(out) {
    var x = this.x,
        y = this.y,
        z = this.z,
        w = this.w;
    var xx = x * x;
    var yy = y * y;
    var zz = z * z;
    var xy = x * y;
    var zw = z * w;
    var zx = z * x;
    var yw = y * w;
    var yz = y * z;
    var xw = x * w;
    out.y = Math.asin(2.0 * (xw - yz));

    if (Math.cos(out.y) > MathUtil.zeroTolerance) {
      out.z = Math.atan2(2.0 * (xy + zw), 1.0 - 2.0 * (zz + xx));
      out.x = Math.atan2(2.0 * (zx + yw), 1.0 - 2.0 * (yy + xx));
    } else {
      out.z = Math.atan2(-2.0 * (xy - zw), 1.0 - 2.0 * (yy + zz));
      out.x = 0.0;
    }

    return out;
  }
  /**
   * Clone the value of this quaternion to an array.
   * @param out - The array
   * @param outOffset - The start offset of the array
   */
  ;

  _proto.toArray = function toArray(out, outOffset) {
    if (outOffset === void 0) {
      outOffset = 0;
    }

    out[outOffset] = this.x;
    out[outOffset + 1] = this.y;
    out[outOffset + 2] = this.z;
    out[outOffset + 3] = this.w;
  }
  /**
   * Creates a clone of this quaternion.
   * @returns A clone of this quaternion
   */
  ;

  _proto.clone = function clone() {
    return new Quaternion(this.x, this.y, this.z, this.w);
  }
  /**
   * Clones this quaternion to the specified quaternion.
   * @param out - The specified quaternion
   * @returns The specified quaternion
   */
  ;

  _proto.cloneTo = function cloneTo(out) {
    out.x = this.x;
    out.y = this.y;
    out.z = this.z;
    out.w = this.w;
    return out;
  }
  /**
   * Calculate this quaternion rotate around X axis.
   * @param rad - The rotation angle in radians
   * @returns This quaternion
   */
  ;

  _proto.rotateX = function rotateX(rad) {
    Quaternion.rotateX(this, rad, this);
    return this;
  }
  /**
   * Calculate this quaternion rotate around Y axis.
   * @param rad - The rotation angle in radians
   * @returns This quaternion
   */
  ;

  _proto.rotateY = function rotateY(rad) {
    Quaternion.rotateY(this, rad, this);
    return this;
  }
  /**
   * Calculate this quaternion rotate around Z axis.
   * @param rad - The rotation angle in radians
   * @returns This quaternion
   */
  ;

  _proto.rotateZ = function rotateZ(rad) {
    Quaternion.rotateZ(this, rad, this);
    return this;
  }
  /**
   * Calculate this quaternion rotates around an arbitary axis.
   * @param axis - The axis
   * @param rad - The rotation angle in radians
   * @returns This quaternion
   */
  ;

  _proto.rotationAxisAngle = function rotationAxisAngle(axis, rad) {
    Quaternion.rotationAxisAngle(axis, rad, this);
    return this;
  }
  /**
   * Determines the product of this quaternion and the specified quaternion.
   * @param quat - The specified quaternion
   * @returns The product of the two quaternions
   */
  ;

  _proto.multiply = function multiply(quat) {
    Quaternion.multiply(this, quat, this);
    return this;
  }
  /**
   * Invert this quaternion.
   * @returns This quaternion after invert
   */
  ;

  _proto.invert = function invert() {
    Quaternion.invert(this, this);
    return this;
  }
  /**
   * Determines the dot product of this quaternion and the specified quaternion.
   * @param quat - The specified quaternion
   * @returns The dot product of two quaternions
   */
  ;

  _proto.dot = function dot(quat) {
    return Quaternion.dot(this, quat);
  }
  /**
   * Performs a linear blend between this quaternion and the specified quaternion.
   * @param quat - The specified quaternion
   * @param t - The blend amount where 0 returns this and 1 quat
   * @returns - The result of linear blending between two quaternions
   */
  ;

  _proto.lerp = function lerp(quat, t) {
    Quaternion.lerp(this, quat, t, this);
    return this;
  };

  return Quaternion;
}();
Quaternion._tempVector3 = new Vector3();

/**
 * Represents a 4x4 mathematical matrix.
 */

var Matrix = /*#__PURE__*/function () {
  /** @internal Identity matrix. */

  /**
   * Determines the product of two matrices.
   * @param left - The first matrix to multiply
   * @param right - The second matrix to multiply
   * @param out - The product of the two matrices
   */
  Matrix.multiply = function multiply(left, right, out) {
    var le = left.elements;
    var re = right.elements;
    var oe = out.elements;
    var l11 = le[0],
        l12 = le[1],
        l13 = le[2],
        l14 = le[3];
    var l21 = le[4],
        l22 = le[5],
        l23 = le[6],
        l24 = le[7];
    var l31 = le[8],
        l32 = le[9],
        l33 = le[10],
        l34 = le[11];
    var l41 = le[12],
        l42 = le[13],
        l43 = le[14],
        l44 = le[15];
    var r11 = re[0],
        r12 = re[1],
        r13 = re[2],
        r14 = re[3];
    var r21 = re[4],
        r22 = re[5],
        r23 = re[6],
        r24 = re[7];
    var r31 = re[8],
        r32 = re[9],
        r33 = re[10],
        r34 = re[11];
    var r41 = re[12],
        r42 = re[13],
        r43 = re[14],
        r44 = re[15];
    oe[0] = l11 * r11 + l21 * r12 + l31 * r13 + l41 * r14;
    oe[1] = l12 * r11 + l22 * r12 + l32 * r13 + l42 * r14;
    oe[2] = l13 * r11 + l23 * r12 + l33 * r13 + l43 * r14;
    oe[3] = l14 * r11 + l24 * r12 + l34 * r13 + l44 * r14;
    oe[4] = l11 * r21 + l21 * r22 + l31 * r23 + l41 * r24;
    oe[5] = l12 * r21 + l22 * r22 + l32 * r23 + l42 * r24;
    oe[6] = l13 * r21 + l23 * r22 + l33 * r23 + l43 * r24;
    oe[7] = l14 * r21 + l24 * r22 + l34 * r23 + l44 * r24;
    oe[8] = l11 * r31 + l21 * r32 + l31 * r33 + l41 * r34;
    oe[9] = l12 * r31 + l22 * r32 + l32 * r33 + l42 * r34;
    oe[10] = l13 * r31 + l23 * r32 + l33 * r33 + l43 * r34;
    oe[11] = l14 * r31 + l24 * r32 + l34 * r33 + l44 * r34;
    oe[12] = l11 * r41 + l21 * r42 + l31 * r43 + l41 * r44;
    oe[13] = l12 * r41 + l22 * r42 + l32 * r43 + l42 * r44;
    oe[14] = l13 * r41 + l23 * r42 + l33 * r43 + l43 * r44;
    oe[15] = l14 * r41 + l24 * r42 + l34 * r43 + l44 * r44;
  }
  /**
   * Determines whether the specified matrices are equals.
   * @param left - The first matrix to compare
   * @param right - The second matrix to compare
   * @returns True if the specified matrices are equals, false otherwise
   */
  ;

  Matrix.equals = function equals(left, right) {
    var le = left.elements;
    var re = right.elements;
    return MathUtil.equals(le[0], re[0]) && MathUtil.equals(le[1], re[1]) && MathUtil.equals(le[2], re[2]) && MathUtil.equals(le[3], re[3]) && MathUtil.equals(le[4], re[4]) && MathUtil.equals(le[5], re[5]) && MathUtil.equals(le[6], re[6]) && MathUtil.equals(le[7], re[7]) && MathUtil.equals(le[8], re[8]) && MathUtil.equals(le[9], re[9]) && MathUtil.equals(le[10], re[10]) && MathUtil.equals(le[11], re[11]) && MathUtil.equals(le[12], re[12]) && MathUtil.equals(le[13], re[13]) && MathUtil.equals(le[14], re[14]) && MathUtil.equals(le[15], re[15]);
  }
  /**
   * Calculate a rotation matrix from a quaternion.
   * @param quaternion - The quaternion used to calculate the matrix
   * @param out - The calculated rotation matrix
   */
  ;

  Matrix.rotationQuaternion = function rotationQuaternion(quaternion, out) {
    var oe = out.elements;
    var x = quaternion.x,
        y = quaternion.y,
        z = quaternion.z,
        w = quaternion.w;
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    oe[0] = 1 - yy - zz;
    oe[1] = yx + wz;
    oe[2] = zx - wy;
    oe[3] = 0;
    oe[4] = yx - wz;
    oe[5] = 1 - xx - zz;
    oe[6] = zy + wx;
    oe[7] = 0;
    oe[8] = zx + wy;
    oe[9] = zy - wx;
    oe[10] = 1 - xx - yy;
    oe[11] = 0;
    oe[12] = 0;
    oe[13] = 0;
    oe[14] = 0;
    oe[15] = 1;
  }
  /**
   * Calculate a matrix rotates around an arbitary axis.
   * @param axis - The axis
   * @param r - The rotation angle in radians
   * @param out - The matrix after rotate
   */
  ;

  Matrix.rotationAxisAngle = function rotationAxisAngle(axis, r, out) {
    var oe = out.elements;
    var x = axis.x,
        y = axis.y,
        z = axis.z;
    var len = Math.sqrt(x * x + y * y + z * z);
    var s, c, t;

    if (Math.abs(len) < MathUtil.zeroTolerance) {
      return;
    }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(r);
    c = Math.cos(r);
    t = 1 - c; // Perform rotation-specific matrix multiplication

    oe[0] = x * x * t + c;
    oe[1] = y * x * t + z * s;
    oe[2] = z * x * t - y * s;
    oe[3] = 0;
    oe[4] = x * y * t - z * s;
    oe[5] = y * y * t + c;
    oe[6] = z * y * t + x * s;
    oe[7] = 0;
    oe[8] = x * z * t + y * s;
    oe[9] = y * z * t - x * s;
    oe[10] = z * z * t + c;
    oe[11] = 0;
    oe[12] = 0;
    oe[13] = 0;
    oe[14] = 0;
    oe[15] = 1;
  }
  /**
   * Calculate a matrix from a quaternion and a translation.
   * @param quaternion - The quaternion used to calculate the matrix
   * @param translation - The translation used to calculate the matrix
   * @param out - The calculated matrix
   */
  ;

  Matrix.rotationTranslation = function rotationTranslation(quaternion, translation, out) {
    Matrix.rotationQuaternion(quaternion, out);
    var oe = out.elements;
    oe[12] = translation.x;
    oe[13] = translation.y;
    oe[14] = translation.z;
  }
  /**
   * Calculate an affine matrix.
   * @param scale - The scale used to calculate matrix
   * @param rotation - The rotation used to calculate matrix
   * @param translation - The translation used to calculate matrix
   * @param out - The calculated matrix
   */
  ;

  Matrix.affineTransformation = function affineTransformation(scale, rotation, translation, out) {
    var oe = out.elements;
    var x = rotation.x,
        y = rotation.y,
        z = rotation.z,
        w = rotation.w;
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = scale.x;
    var sy = scale.y;
    var sz = scale.z;
    oe[0] = (1 - (yy + zz)) * sx;
    oe[1] = (xy + wz) * sx;
    oe[2] = (xz - wy) * sx;
    oe[3] = 0;
    oe[4] = (xy - wz) * sy;
    oe[5] = (1 - (xx + zz)) * sy;
    oe[6] = (yz + wx) * sy;
    oe[7] = 0;
    oe[8] = (xz + wy) * sz;
    oe[9] = (yz - wx) * sz;
    oe[10] = (1 - (xx + yy)) * sz;
    oe[11] = 0;
    oe[12] = translation.x;
    oe[13] = translation.y;
    oe[14] = translation.z;
    oe[15] = 1;
  }
  /**
   * Calculate a matrix from scale vector.
   * @param s - The scale vector
   * @param out - The calculated matrix
   */
  ;

  Matrix.scaling = function scaling(s, out) {
    var oe = out.elements;
    oe[0] = s.x;
    oe[1] = 0;
    oe[2] = 0;
    oe[3] = 0;
    oe[4] = 0;
    oe[5] = s.y;
    oe[6] = 0;
    oe[7] = 0;
    oe[8] = 0;
    oe[9] = 0;
    oe[10] = s.z;
    oe[11] = 0;
    oe[12] = 0;
    oe[13] = 0;
    oe[14] = 0;
    oe[15] = 1;
  }
  /**
   * Calculate a matrix from translation vector.
   * @param translation - The translation vector
   * @param out - The calculated matrix
   */
  ;

  Matrix.translation = function translation(_translation, out) {
    var oe = out.elements;
    oe[0] = 1;
    oe[1] = 0;
    oe[2] = 0;
    oe[3] = 0;
    oe[4] = 0;
    oe[5] = 1;
    oe[6] = 0;
    oe[7] = 0;
    oe[8] = 0;
    oe[9] = 0;
    oe[10] = 1;
    oe[11] = 0;
    oe[12] = _translation.x;
    oe[13] = _translation.y;
    oe[14] = _translation.z;
    oe[15] = 1;
  }
  /**
   * Calculate the inverse of the specified matrix.
   * @param a - The matrix whose inverse is to be calculated
   * @param out - The inverse of the specified matrix
   */
  ;

  Matrix.invert = function invert(a, out) {
    var ae = a.elements;
    var oe = out.elements;
    var a11 = ae[0],
        a12 = ae[1],
        a13 = ae[2],
        a14 = ae[3];
    var a21 = ae[4],
        a22 = ae[5],
        a23 = ae[6],
        a24 = ae[7];
    var a31 = ae[8],
        a32 = ae[9],
        a33 = ae[10],
        a34 = ae[11];
    var a41 = ae[12],
        a42 = ae[13],
        a43 = ae[14],
        a44 = ae[15];
    var b00 = a11 * a22 - a12 * a21;
    var b01 = a11 * a23 - a13 * a21;
    var b02 = a11 * a24 - a14 * a21;
    var b03 = a12 * a23 - a13 * a22;
    var b04 = a12 * a24 - a14 * a22;
    var b05 = a13 * a24 - a14 * a23;
    var b06 = a31 * a42 - a32 * a41;
    var b07 = a31 * a43 - a33 * a41;
    var b08 = a31 * a44 - a34 * a41;
    var b09 = a32 * a43 - a33 * a42;
    var b10 = a32 * a44 - a34 * a42;
    var b11 = a33 * a44 - a34 * a43;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
      return null;
    }

    det = 1.0 / det;
    oe[0] = (a22 * b11 - a23 * b10 + a24 * b09) * det;
    oe[1] = (a13 * b10 - a12 * b11 - a14 * b09) * det;
    oe[2] = (a42 * b05 - a43 * b04 + a44 * b03) * det;
    oe[3] = (a33 * b04 - a32 * b05 - a34 * b03) * det;
    oe[4] = (a23 * b08 - a21 * b11 - a24 * b07) * det;
    oe[5] = (a11 * b11 - a13 * b08 + a14 * b07) * det;
    oe[6] = (a43 * b02 - a41 * b05 - a44 * b01) * det;
    oe[7] = (a31 * b05 - a33 * b02 + a34 * b01) * det;
    oe[8] = (a21 * b10 - a22 * b08 + a24 * b06) * det;
    oe[9] = (a12 * b08 - a11 * b10 - a14 * b06) * det;
    oe[10] = (a41 * b04 - a42 * b02 + a44 * b00) * det;
    oe[11] = (a32 * b02 - a31 * b04 - a34 * b00) * det;
    oe[12] = (a22 * b07 - a21 * b09 - a23 * b06) * det;
    oe[13] = (a11 * b09 - a12 * b07 + a13 * b06) * det;
    oe[14] = (a42 * b01 - a41 * b03 - a43 * b00) * det;
    oe[15] = (a31 * b03 - a32 * b01 + a33 * b00) * det;
  }
  /**
   * Calculate a right-handed look-at matrix.
   * @param eye - The position of the viewer's eye
   * @param target - The camera look-at target
   * @param up - The camera's up vector
   * @param out - The calculated look-at matrix
   */
  ;

  Matrix.lookAt = function lookAt(eye, target, up, out) {
    var oe = out.elements;
    var xAxis = Matrix._tempVec30;
    var yAxis = Matrix._tempVec31;
    var zAxis = Matrix._tempVec32;
    Vector3.subtract(eye, target, zAxis);
    zAxis.normalize();
    Vector3.cross(up, zAxis, xAxis);
    xAxis.normalize();
    Vector3.cross(zAxis, xAxis, yAxis);
    oe[0] = xAxis.x;
    oe[1] = yAxis.x;
    oe[2] = zAxis.x;
    oe[3] = 0;
    oe[4] = xAxis.y;
    oe[5] = yAxis.y;
    oe[6] = zAxis.y;
    oe[7] = 0;
    oe[8] = xAxis.z;
    oe[9] = yAxis.z;
    oe[10] = zAxis.z;
    oe[11] = 0;
    oe[12] = -Vector3.dot(xAxis, eye);
    oe[13] = -Vector3.dot(yAxis, eye);
    oe[14] = -Vector3.dot(zAxis, eye);
    oe[15] = 1;
  }
  /**
   * Calculate an orthographic projection matrix.
   * @param left - The left edge of the viewing
   * @param right - The right edge of the viewing
   * @param bottom - The bottom edge of the viewing
   * @param top - The top edge of the viewing
   * @param near - The depth of the near plane
   * @param far - The depth of the far plane
   * @param out - The calculated orthographic projection matrix
   */
  ;

  Matrix.ortho = function ortho(left, right, bottom, top, near, far, out) {
    var oe = out.elements;
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    oe[0] = -2 * lr;
    oe[1] = 0;
    oe[2] = 0;
    oe[3] = 0;
    oe[4] = 0;
    oe[5] = -2 * bt;
    oe[6] = 0;
    oe[7] = 0;
    oe[8] = 0;
    oe[9] = 0;
    oe[10] = 2 * nf;
    oe[11] = 0;
    oe[12] = (left + right) * lr;
    oe[13] = (top + bottom) * bt;
    oe[14] = (far + near) * nf;
    oe[15] = 1;
  }
  /**
   * Calculate a perspective projection matrix.
   * @param fovy - Field of view in the y direction, in radians
   * @param aspect - Aspect ratio, defined as view space width divided by height
   * @param near - The depth of the near plane
   * @param far - The depth of the far plane
   * @param out - The calculated perspective projection matrix
   */
  ;

  Matrix.perspective = function perspective(fovy, aspect, near, far, out) {
    var oe = out.elements;
    var f = 1.0 / Math.tan(fovy / 2);
    var nf = 1 / (near - far);
    oe[0] = f / aspect;
    oe[1] = 0;
    oe[2] = 0;
    oe[3] = 0;
    oe[4] = 0;
    oe[5] = f;
    oe[6] = 0;
    oe[7] = 0;
    oe[8] = 0;
    oe[9] = 0;
    oe[10] = (far + near) * nf;
    oe[11] = -1;
    oe[12] = 0;
    oe[13] = 0;
    oe[14] = 2 * far * near * nf;
    oe[15] = 0;
  }
  /**
   * The specified matrix rotates around an arbitary axis.
   * @param m - The specified matrix
   * @param axis - The axis
   * @param r - The rotation angle in radians
   * @param out - The rotated matrix
   */
  ;

  Matrix.rotateAxisAngle = function rotateAxisAngle(m, axis, r, out) {
    var x = axis.x,
        y = axis.y,
        z = axis.z;
    var len = Math.sqrt(x * x + y * y + z * z);

    if (Math.abs(len) < MathUtil.zeroTolerance) {
      return;
    }

    var me = m.elements;
    var oe = out.elements;
    var s, c, t;
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(r);
    c = Math.cos(r);
    t = 1 - c;
    var a11 = me[0],
        a12 = me[1],
        a13 = me[2],
        a14 = me[3];
    var a21 = me[4],
        a22 = me[5],
        a23 = me[6],
        a24 = me[7];
    var a31 = me[8],
        a32 = me[9],
        a33 = me[10],
        a34 = me[11]; // Construct the elements of the rotation matrix

    var b11 = x * x * t + c;
    var b12 = y * x * t + z * s;
    var b13 = z * x * t - y * s;
    var b21 = x * y * t - z * s;
    var b22 = y * y * t + c;
    var b23 = z * y * t + x * s;
    var b31 = x * z * t + y * s;
    var b32 = y * z * t - x * s;
    var b33 = z * z * t + c; // Perform rotation-specific matrix multiplication

    oe[0] = a11 * b11 + a21 * b12 + a31 * b13;
    oe[1] = a12 * b11 + a22 * b12 + a32 * b13;
    oe[2] = a13 * b11 + a23 * b12 + a33 * b13;
    oe[3] = a14 * b11 + a24 * b12 + a34 * b13;
    oe[4] = a11 * b21 + a21 * b22 + a31 * b23;
    oe[5] = a12 * b21 + a22 * b22 + a32 * b23;
    oe[6] = a13 * b21 + a23 * b22 + a33 * b23;
    oe[7] = a14 * b21 + a24 * b22 + a34 * b23;
    oe[8] = a11 * b31 + a21 * b32 + a31 * b33;
    oe[9] = a12 * b31 + a22 * b32 + a32 * b33;
    oe[10] = a13 * b31 + a23 * b32 + a33 * b33;
    oe[11] = a14 * b31 + a24 * b32 + a34 * b33;

    if (m !== out) {
      // If the source and destination differ, copy the unchanged last row
      oe[12] = me[12];
      oe[13] = me[13];
      oe[14] = me[14];
      oe[15] = me[15];
    }
  }
  /**
   * Scale a matrix by a given vector.
   * @param m - The matrix
   * @param s - The given vector
   * @param out - The scaled matrix
   */
  ;

  Matrix.scale = function scale(m, s, out) {
    var me = m.elements;
    var oe = out.elements;
    var x = s.x,
        y = s.y,
        z = s.z;
    oe[0] = me[0] * x;
    oe[1] = me[1] * x;
    oe[2] = me[2] * x;
    oe[3] = me[3] * x;
    oe[4] = me[4] * y;
    oe[5] = me[5] * y;
    oe[6] = me[6] * y;
    oe[7] = me[7] * y;
    oe[8] = me[8] * z;
    oe[9] = me[9] * z;
    oe[10] = me[10] * z;
    oe[11] = me[11] * z;
    oe[12] = me[12];
    oe[13] = me[13];
    oe[14] = me[14];
    oe[15] = me[15];
  }
  /**
   * Translate a matrix by a given vector.
   * @param m - The matrix
   * @param v - The given vector
   * @param out - The translated matrix
   */
  ;

  Matrix.translate = function translate(m, v, out) {
    var me = m.elements;
    var oe = out.elements;
    var x = v.x,
        y = v.y,
        z = v.z;

    if (m === out) {
      oe[12] = me[0] * x + me[4] * y + me[8] * z + me[12];
      oe[13] = me[1] * x + me[5] * y + me[9] * z + me[13];
      oe[14] = me[2] * x + me[6] * y + me[10] * z + me[14];
      oe[15] = me[3] * x + me[7] * y + me[11] * z + me[15];
    } else {
      var a11 = me[0],
          a12 = me[1],
          a13 = me[2],
          a14 = me[3];
      var a21 = me[4],
          a22 = me[5],
          a23 = me[6],
          a24 = me[7];
      var a31 = me[8],
          a32 = me[9],
          a33 = me[10],
          a34 = me[11];
      oe[0] = a11, oe[1] = a12, oe[2] = a13, oe[3] = a14;
      oe[4] = a21, oe[5] = a22, oe[6] = a23, oe[7] = a24;
      oe[8] = a31, oe[9] = a32, oe[10] = a33, oe[11] = a34;
      oe[12] = a11 * x + a21 * y + a31 * z + me[12];
      oe[13] = a12 * x + a22 * y + a32 * z + me[13];
      oe[14] = a13 * x + a23 * y + a33 * z + me[14];
      oe[15] = a14 * x + a24 * y + a34 * z + me[15];
    }
  }
  /**
   * Calculate the transpose of the specified matrix.
   * @param a - The specified matrix
   * @param out - The transpose of the specified matrix
   */
  ;

  Matrix.transpose = function transpose(a, out) {
    var ae = a.elements;
    var oe = out.elements;

    if (out === a) {
      var a12 = ae[1];
      var a13 = ae[2];
      var a14 = ae[3];
      var a23 = ae[6];
      var a24 = ae[7];
      var a34 = ae[11];
      oe[1] = ae[4];
      oe[2] = ae[8];
      oe[3] = ae[12];
      oe[4] = a12;
      oe[6] = ae[9];
      oe[7] = ae[13];
      oe[8] = a13;
      oe[9] = a23;
      oe[11] = ae[14];
      oe[12] = a14;
      oe[13] = a24;
      oe[14] = a34;
    } else {
      oe[0] = ae[0];
      oe[1] = ae[4];
      oe[2] = ae[8];
      oe[3] = ae[12];
      oe[4] = ae[1];
      oe[5] = ae[5];
      oe[6] = ae[9];
      oe[7] = ae[13];
      oe[8] = ae[2];
      oe[9] = ae[6];
      oe[10] = ae[10];
      oe[11] = ae[14];
      oe[12] = ae[3];
      oe[13] = ae[7];
      oe[14] = ae[11];
      oe[15] = ae[15];
    }
  }
  /**
   * An array containing the elements of the matrix (column matrix).
   * @remarks
   * elements[0] first column and first row value m11
   * elements[1] first column and second row value m12
   * elements[2] first column and third row value m13
   * elements[3] first column and fourth row value m14
   * elements[4] second column and first row value m21
   * and so on
   */
  ;

  /**
   * Constructor of 4x4 Matrix.
   * @param m11 - default 1, column 1, row 1
   * @param m12 - default 0, column 1, row 2
   * @param m13 - default 0, column 1, row 3
   * @param m14 - default 0, column 1, row 4
   * @param m21 - default 0, column 2, row 1
   * @param m22 - default 1, column 2, row 2
   * @param m23 - default 0, column 2, row 3
   * @param m24 - default 0, column 2, row 4
   * @param m31 - default 0, column 3, row 1
   * @param m32 - default 0, column 3, row 2
   * @param m33 - default 1, column 3, row 3
   * @param m34 - default 0, column 3, row 4
   * @param m41 - default 0, column 4, row 1
   * @param m42 - default 0, column 4, row 2
   * @param m43 - default 0, column 4, row 3
   * @param m44 - default 1, column 4, row 4
   */
  function Matrix(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
    if (m11 === void 0) {
      m11 = 1;
    }

    if (m12 === void 0) {
      m12 = 0;
    }

    if (m13 === void 0) {
      m13 = 0;
    }

    if (m14 === void 0) {
      m14 = 0;
    }

    if (m21 === void 0) {
      m21 = 0;
    }

    if (m22 === void 0) {
      m22 = 1;
    }

    if (m23 === void 0) {
      m23 = 0;
    }

    if (m24 === void 0) {
      m24 = 0;
    }

    if (m31 === void 0) {
      m31 = 0;
    }

    if (m32 === void 0) {
      m32 = 0;
    }

    if (m33 === void 0) {
      m33 = 1;
    }

    if (m34 === void 0) {
      m34 = 0;
    }

    if (m41 === void 0) {
      m41 = 0;
    }

    if (m42 === void 0) {
      m42 = 0;
    }

    if (m43 === void 0) {
      m43 = 0;
    }

    if (m44 === void 0) {
      m44 = 1;
    }

    this.elements = new Float32Array(16);
    var e = this.elements;
    e[0] = m11;
    e[1] = m12;
    e[2] = m13;
    e[3] = m14;
    e[4] = m21;
    e[5] = m22;
    e[6] = m23;
    e[7] = m24;
    e[8] = m31;
    e[9] = m32;
    e[10] = m33;
    e[11] = m34;
    e[12] = m41;
    e[13] = m42;
    e[14] = m43;
    e[15] = m44;
  }
  /**
   * Set the value of this matrix, and return this matrix.
   * @param m11 - column 1, row 1
   * @param m12 - column 1, row 2
   * @param m13 - column 1, row 3
   * @param m14 - column 1, row 4
   * @param m21 - column 2, row 1
   * @param m22 - column 2, row 2
   * @param m23 - column 2, row 3
   * @param m24 - column 2, row 4
   * @param m31 - column 3, row 1
   * @param m32 - column 3, row 2
   * @param m33 - column 3, row 3
   * @param m34 - column 3, row 4
   * @param m41 - column 4, row 1
   * @param m42 - column 4, row 2
   * @param m43 - column 4, row 3
   * @param m44 - column 4, row 4
   * @returns This matrix
   */


  var _proto = Matrix.prototype;

  _proto.setValue = function setValue(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
    var e = this.elements;
    e[0] = m11;
    e[1] = m12;
    e[2] = m13;
    e[3] = m14;
    e[4] = m21;
    e[5] = m22;
    e[6] = m23;
    e[7] = m24;
    e[8] = m31;
    e[9] = m32;
    e[10] = m33;
    e[11] = m34;
    e[12] = m41;
    e[13] = m42;
    e[14] = m43;
    e[15] = m44;
    return this;
  }
  /**
   * Set the value of this matrix by an array.
   * @param array - The array
   * @param offset - The start offset of the array
   * @returns This matrix
   */
  ;

  _proto.setValueByArray = function setValueByArray(array, offset) {
    if (offset === void 0) {
      offset = 0;
    }

    var srce = this.elements;

    for (var i = 0; i < 16; i++) {
      srce[i] = array[i + offset];
    }

    return this;
  }
  /**
   * Clone the value of this matrix to an array.
   * @param out - The array
   * @param outOffset - The start offset of the array
   */
  ;

  _proto.toArray = function toArray(out, outOffset) {
    if (outOffset === void 0) {
      outOffset = 0;
    }

    var e = this.elements;
    out[outOffset] = e[0];
    out[outOffset + 1] = e[1];
    out[outOffset + 2] = e[2];
    out[outOffset + 3] = e[3];
    out[outOffset + 4] = e[4];
    out[outOffset + 5] = e[5];
    out[outOffset + 6] = e[6];
    out[outOffset + 7] = e[7];
    out[outOffset + 8] = e[8];
    out[outOffset + 9] = e[9];
    out[outOffset + 10] = e[10];
    out[outOffset + 11] = e[11];
    out[outOffset + 12] = e[12];
    out[outOffset + 13] = e[13];
    out[outOffset + 14] = e[14];
    out[outOffset + 15] = e[15];
  }
  /**
   * Creates a clone of this matrix.
   * @returns A clone of this matrix
   */
  ;

  _proto.clone = function clone() {
    var e = this.elements;
    var ret = new Matrix(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
    return ret;
  }
  /**
   * Clones this matrix to the specified matrix.
   * @param out - The specified matrix
   * @returns The specified matrix
   */
  ;

  _proto.cloneTo = function cloneTo(out) {
    var e = this.elements;
    var oe = out.elements;
    oe[0] = e[0];
    oe[1] = e[1];
    oe[2] = e[2];
    oe[3] = e[3];
    oe[4] = e[4];
    oe[5] = e[5];
    oe[6] = e[6];
    oe[7] = e[7];
    oe[8] = e[8];
    oe[9] = e[9];
    oe[10] = e[10];
    oe[11] = e[11];
    oe[12] = e[12];
    oe[13] = e[13];
    oe[14] = e[14];
    oe[15] = e[15];
    return out;
  }
  /**
   * Determines the product of this matrix and the specified matrix.
   * @param right - The specified matrix
   * @returns This matrix that store the product of the two matrices
   */
  ;

  _proto.multiply = function multiply(right) {
    Matrix.multiply(this, right, this);
    return this;
  }
  /**
   * Calculate a determinant of this matrix.
   * @returns The determinant of this matrix
   */
  ;

  _proto.determinant = function determinant() {
    var e = this.elements;
    var a11 = e[0],
        a12 = e[1],
        a13 = e[2],
        a14 = e[3];
    var a21 = e[4],
        a22 = e[5],
        a23 = e[6],
        a24 = e[7];
    var a31 = e[8],
        a32 = e[9],
        a33 = e[10],
        a34 = e[11];
    var a41 = e[12],
        a42 = e[13],
        a43 = e[14],
        a44 = e[15];
    var b00 = a11 * a22 - a12 * a21;
    var b01 = a11 * a23 - a13 * a21;
    var b02 = a11 * a24 - a14 * a21;
    var b03 = a12 * a23 - a13 * a22;
    var b04 = a12 * a24 - a14 * a22;
    var b05 = a13 * a24 - a14 * a23;
    var b06 = a31 * a42 - a32 * a41;
    var b07 = a31 * a43 - a33 * a41;
    var b08 = a31 * a44 - a34 * a41;
    var b09 = a32 * a43 - a33 * a42;
    var b10 = a32 * a44 - a34 * a42;
    var b11 = a33 * a44 - a34 * a43; // Calculate the determinant

    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  }
  /**
   * Decompose this matrix to translation, rotation and scale elements.
   * @param translation - Translation vector as an output parameter
   * @param rotation - Rotation quaternion as an output parameter
   * @param scale - Scale vector as an output parameter
   * @returns True if this matrix can be decomposed, false otherwise
   */
  ;

  _proto.decompose = function decompose(translation, rotation, scale) {
    var rm = Matrix._tempMat30;
    var e = this.elements;
    var rme = rm.elements;
    var m11 = e[0];
    var m12 = e[1];
    var m13 = e[2];
    var m14 = e[3];
    var m21 = e[4];
    var m22 = e[5];
    var m23 = e[6];
    var m24 = e[7];
    var m31 = e[8];
    var m32 = e[9];
    var m33 = e[10];
    var m34 = e[11];
    translation.x = e[12];
    translation.y = e[13];
    translation.z = e[14];
    var xs = Math.sign(m11 * m12 * m13 * m14) < 0 ? -1 : 1;
    var ys = Math.sign(m21 * m22 * m23 * m24) < 0 ? -1 : 1;
    var zs = Math.sign(m31 * m32 * m33 * m34) < 0 ? -1 : 1;
    var sx = xs * Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
    var sy = ys * Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
    var sz = zs * Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
    scale.x = sx;
    scale.y = sy;
    scale.z = sz;

    if (Math.abs(sx) < MathUtil.zeroTolerance || Math.abs(sy) < MathUtil.zeroTolerance || Math.abs(sz) < MathUtil.zeroTolerance) {
      rotation.identity();
      return false;
    } else {
      var invSX = 1 / sx;
      var invSY = 1 / sy;
      var invSZ = 1 / sz;
      rme[0] = m11 * invSX;
      rme[1] = m12 * invSX;
      rme[2] = m13 * invSX;
      rme[3] = m21 * invSY;
      rme[4] = m22 * invSY;
      rme[5] = m23 * invSY;
      rme[6] = m31 * invSZ;
      rme[7] = m32 * invSZ;
      rme[8] = m33 * invSZ;
      Quaternion.rotationMatrix3x3(rm, rotation);
      return true;
    }
  }
  /**
   * Get rotation from this matrix.
   * @param out - Rotation quaternion as an output parameter
   * @returns The out
   */
  ;

  _proto.getRotation = function getRotation(out) {
    var e = this.elements;
    var trace = e[0] + e[5] + e[10];

    if (trace > MathUtil.zeroTolerance) {
      var S = Math.sqrt(trace + 1.0) * 2;
      out.w = 0.25 * S;
      out.x = (e[6] - e[9]) / S;
      out.y = (e[8] - e[2]) / S;
      out.z = (e[1] - e[4]) / S;
    } else if (e[0] > e[5] && e[0] > e[10]) {
      var _S = Math.sqrt(1.0 + e[0] - e[5] - e[10]) * 2;

      out.w = (e[6] - e[9]) / _S;
      out.x = 0.25 * _S;
      out.y = (e[1] + e[4]) / _S;
      out.z = (e[8] + e[2]) / _S;
    } else if (e[5] > e[10]) {
      var _S2 = Math.sqrt(1.0 + e[5] - e[0] - e[10]) * 2;

      out.w = (e[8] - e[2]) / _S2;
      out.x = (e[1] + e[4]) / _S2;
      out.y = 0.25 * _S2;
      out.z = (e[6] + e[9]) / _S2;
    } else {
      var _S3 = Math.sqrt(1.0 + e[10] - e[0] - e[5]) * 2;

      out.w = (e[1] - e[4]) / _S3;
      out.x = (e[8] + e[2]) / _S3;
      out.y = (e[6] + e[9]) / _S3;
      out.z = 0.25 * _S3;
    }

    return out;
  }
  /**
   * Get scale from this matrix.
   * @param out - Scale vector as an output parameter
   * @returns The out
   */
  ;

  _proto.getScaling = function getScaling(out) {
    //getScale()
    var e = this.elements;
    var m11 = e[0],
        m12 = e[1],
        m13 = e[2];
    var m21 = e[4],
        m22 = e[5],
        m23 = e[6];
    var m31 = e[8],
        m32 = e[9],
        m33 = e[10];
    out.x = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
    out.y = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
    out.z = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
    return out;
  }
  /**
   * Get translation from this matrix.
   * @param out - Translation vector as an output parameter
   * @returns The out
   */
  ;

  _proto.getTranslation = function getTranslation(out) {
    var e = this.elements;
    out.x = e[12];
    out.y = e[13];
    out.z = e[14];
    return out;
  }
  /**
   * Identity this matrix.
   * @returns This matrix after identity
   */
  ;

  _proto.identity = function identity() {
    var e = this.elements;
    e[0] = 1;
    e[1] = 0;
    e[2] = 0;
    e[3] = 0;
    e[4] = 0;
    e[5] = 1;
    e[6] = 0;
    e[7] = 0;
    e[8] = 0;
    e[9] = 0;
    e[10] = 1;
    e[11] = 0;
    e[12] = 0;
    e[13] = 0;
    e[14] = 0;
    e[15] = 1;
    return this;
  }
  /**
   * Invert the matrix.
   * @returns The matrix after invert
   */
  ;

  _proto.invert = function invert() {
    Matrix.invert(this, this);
    return this;
  }
  /**
   * This matrix rotates around an arbitary axis.
   * @param axis - The axis
   * @param r - The rotation angle in radians
   * @returns This matrix after rotate
   */
  ;

  _proto.rotateAxisAngle = function rotateAxisAngle(axis, r) {
    Matrix.rotateAxisAngle(this, axis, r, this);
    return this;
  }
  /**
   * Scale this matrix by a given vector.
   * @param s - The given vector
   * @returns This matrix after scale
   */
  ;

  _proto.scale = function scale(s) {
    Matrix.scale(this, s, this);
    return this;
  }
  /**
   * Translate this matrix by a given vector.
   * @param v - The given vector
   * @returns This matrix after translate
   */
  ;

  _proto.translate = function translate(v) {
    Matrix.translate(this, v, this);
    return this;
  }
  /**
   * Calculate the transpose of this matrix.
   * @returns This matrix after transpose
   */
  ;

  _proto.transpose = function transpose() {
    Matrix.transpose(this, this);
    return this;
  };

  return Matrix;
}();
Matrix._tempVec30 = new Vector3();
Matrix._tempVec31 = new Vector3();
Matrix._tempVec32 = new Vector3();
Matrix._tempMat30 = new Matrix3x3();
Matrix._identity = new Matrix(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);

/**
 * Represents a ray with an origin and a direction in 3D space.
 */

var Ray = /*#__PURE__*/function () {
  /** The origin of the ray. */

  /** The direction of the ray. */

  /**
   * Constructor of Ray.
   * @param origin - The origin vector
   * @param direction - The direction vector
   */
  function Ray(origin, direction) {
    if (origin === void 0) {
      origin = null;
    }

    if (direction === void 0) {
      direction = null;
    }

    this.origin = new Vector3();
    this.direction = new Vector3();
    origin && origin.cloneTo(this.origin);
    direction && direction.cloneTo(this.direction);
  }
  /**
   * Check if this ray intersects the specified plane.
   * @param plane - The specified plane
   * @returns The distance from this ray to the specified plane if intersecting, -1 otherwise
   */


  var _proto = Ray.prototype;

  _proto.intersectPlane = function intersectPlane(plane) {
    return CollisionUtil.intersectsRayAndPlane(this, plane);
  }
  /**
   * Check if this ray intersects the specified sphere.
   * @param sphere - The specified sphere
   * @returns The distance from this ray to the specified sphere if intersecting, -1 otherwise
   */
  ;

  _proto.intersectSphere = function intersectSphere(sphere) {
    return CollisionUtil.intersectsRayAndSphere(this, sphere);
  }
  /**
   * Check if this ray intersects the specified box (AABB).
   * @param box - The specified box
   * @returns The distance from this ray to the specified box if intersecting, -1 otherwise
   */
  ;

  _proto.intersectBox = function intersectBox(box) {
    return CollisionUtil.intersectsRayAndBox(this, box);
  }
  /**
   * The coordinates of the specified distance from the origin in the ray direction.
   * @param distance - The specified distance
   * @param out - The coordinates as an output parameter
   * @returns The out
   */
  ;

  _proto.getPoint = function getPoint(distance, out) {
    Vector3.scale(this.direction, distance, out);
    return out.add(this.origin);
  };

  return Ray;
}();

// Prevent gimbal lock.
var ESP = MathUtil.zeroTolerance; // Spherical.

var Spherical = /*#__PURE__*/function () {
  function Spherical(radius, phi, theta) {
    this.radius = void 0;
    this.phi = void 0;
    this.theta = void 0;
    this.radius = radius !== undefined ? radius : 1.0;
    this.phi = phi !== undefined ? phi : 0;
    this.theta = theta !== undefined ? theta : 0;
  }

  var _proto = Spherical.prototype;

  _proto.set = function set(radius, phi, theta) {
    this.radius = radius;
    this.phi = phi;
    this.theta = theta;
    return this;
  };

  _proto.makeSafe = function makeSafe() {
    this.phi = MathUtil.clamp(this.phi, ESP, Math.PI - ESP);
    return this;
  };

  _proto.setFromVec3 = function setFromVec3(v3) {
    this.radius = v3.length();

    if (this.radius === 0) {
      this.theta = 0;
      this.phi = 0;
    } else {
      this.theta = Math.atan2(v3.x, v3.z);
      this.phi = Math.acos(MathUtil.clamp(v3.y / this.radius, -1, 1));
    }

    return this;
  };

  _proto.setToVec3 = function setToVec3(v3) {
    var sinPhiRadius = Math.sin(this.phi) * this.radius;
    v3.x = sinPhiRadius * Math.sin(this.theta);
    v3.y = Math.cos(this.phi) * this.radius;
    v3.z = sinPhiRadius * Math.cos(this.theta);
    return this;
  };

  return Spherical;
}();

/**
 * Describes a 2D-vector.
 */

var Vector2 = /*#__PURE__*/function () {
  /** @internal zero.*/

  /** @internal one.*/

  /**
   * Determines the sum of two vectors.
   * @param left - The first vector to add
   * @param right - The second vector to add
   * @param out - The sum of two vectors
   */
  Vector2.add = function add(left, right, out) {
    out.x = left.x + right.x;
    out.y = left.y + right.y;
  }
  /**
   * Determines the difference between two vectors.
   * @param left - The first vector to subtract
   * @param right - The second vector to subtract
   * @param out - The difference between two vectors
   */
  ;

  Vector2.subtract = function subtract(left, right, out) {
    out.x = left.x - right.x;
    out.y = left.y - right.y;
  }
  /**
   * Determines the product of two vectors.
   * @param left - The first vector to multiply
   * @param right - The second vector to multiply
   * @param out - The product of two vectors
   */
  ;

  Vector2.multiply = function multiply(left, right, out) {
    out.x = left.x * right.x;
    out.y = left.y * right.y;
  }
  /**
   * Determines the divisor of two vectors.
   * @param left - The first vector to divide
   * @param right - The second vector to divide
   * @param out - The divisor of two vectors
   */
  ;

  Vector2.divide = function divide(left, right, out) {
    out.x = left.x / right.x;
    out.y = left.y / right.y;
  }
  /**
   * Determines the dot product of two vectors.
   * @param left - The first vector to dot
   * @param right - The second vector to dot
   * @returns The dot product of two vectors
   */
  ;

  Vector2.dot = function dot(left, right) {
    return left.x * right.x + left.y * right.y;
  }
  /**
   * Determines the distance of two vectors.
   * @param left - The first vector
   * @param right - The second vector
   * @returns The distance of two vectors
   */
  ;

  Vector2.distance = function distance(left, right) {
    var x = right.x - left.x;
    var y = right.y - left.y;
    return Math.sqrt(x * x + y * y);
  }
  /**
   * Determines the squared distance of two vectors.
   * @param left - The first vector
   * @param right - The second vector
   * @returns The squared distance of two vectors
   */
  ;

  Vector2.distanceSquared = function distanceSquared(left, right) {
    var x = right.x - left.x;
    var y = right.y - left.y;
    return x * x + y * y;
  }
  /**
   * Determines whether the specified vectors are equals.
   * @param left - The first vector to compare
   * @param right - The second vector to compare
   * @returns True if the specified vectors are equals, false otherwise
   */
  ;

  Vector2.equals = function equals(left, right) {
    return MathUtil.equals(left.x, right.x) && MathUtil.equals(left.y, right.y);
  }
  /**
   * Performs a linear interpolation between two vectors.
   * @param left - The first vector
   * @param right - The second vector
   * @param t - The blend amount where 0 returns left and 1 right
   * @param out - The result of linear blending between two vectors
   */
  ;

  Vector2.lerp = function lerp(left, right, t, out) {
    var x = left.x,
        y = left.y;
    out.x = x + (right.x - x) * t;
    out.y = y + (right.y - y) * t;
  }
  /**
   * Calculate a vector containing the largest components of the specified vectors.
   * @param left - The first vector
   * @param right - The second vector
   * @param out - The vector containing the largest components of the specified vectors
   */
  ;

  Vector2.max = function max(left, right, out) {
    out.x = Math.max(left.x, right.x);
    out.y = Math.max(left.y, right.y);
  }
  /**
   * Calculate a vector containing the smallest components of the specified vectors.
   * @param left - The first vector
   * @param right - The second vector
   * @param out - The vector containing the smallest components of the specified vectors
   */
  ;

  Vector2.min = function min(left, right, out) {
    out.x = Math.min(left.x, right.x);
    out.y = Math.min(left.y, right.y);
  }
  /**
   * Reverses the direction of a given vector.
   * @param left - The vector to negate
   * @param out - The vector facing in the opposite direction
   */
  ;

  Vector2.negate = function negate(left, out) {
    out.x = -left.x;
    out.y = -left.y;
  }
  /**
   * Converts the vector into a unit vector.
   * @param left - The vector to normalize
   * @param out - The normalized vector
   */
  ;

  Vector2.normalize = function normalize(left, out) {
    var x = left.x,
        y = left.y;
    var len = Math.sqrt(x * x + y * y);

    if (len > MathUtil.zeroTolerance) {
      len = 1 / len;
      out.x = x * len;
      out.y = y * len;
    }
  }
  /**
   * Scale a vector by the given value.
   * @param left - The vector to scale
   * @param scale - The amount by which to scale the vector
   * @param out - The scaled vector
   */
  ;

  Vector2.scale = function scale(left, s, out) {
    out.x = left.x * s;
    out.y = left.y * s;
  }
  /** The x component of the vector. */
  ;

  /**
   * Constructor of Vector2.
   * @param x - The x component of the vector, default 0
   * @param y - The y component of the vector, default 0
   */
  function Vector2(x, y) {
    if (x === void 0) {
      x = 0;
    }

    if (y === void 0) {
      y = 0;
    }

    this.x = void 0;
    this.y = void 0;
    this.x = x;
    this.y = y;
  }
  /**
   * Set the value of this vector.
   * @param x - The x component of the vector
   * @param y - The y component of the vector
   * @returns This vector
   */


  var _proto = Vector2.prototype;

  _proto.setValue = function setValue(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  /**
   * Set the value of this vector by an array.
   * @param array - The array
   * @param offset - The start offset of the array
   * @returns This vector
   */
  ;

  _proto.setValueByArray = function setValueByArray(array, offset) {
    if (offset === void 0) {
      offset = 0;
    }

    this.x = array[offset];
    this.y = array[offset + 1];
    return this;
  }
  /**
   * Determines the sum of this vector and the specified vector.
   * @param right - The specified vector
   * @returns This vector
   */
  ;

  _proto.add = function add(right) {
    this.x += right.x;
    this.y += right.y;
    return this;
  }
  /**
   * Determines the difference of this vector and the specified vector.
   * @param right - The specified vector
   * @returns This vector
   */
  ;

  _proto.subtract = function subtract(right) {
    this.x -= right.x;
    this.y -= right.y;
    return this;
  }
  /**
   * Determines the product of this vector and the specified vector.
   * @param right - The specified vector
   * @returns This vector
   */
  ;

  _proto.multiply = function multiply(right) {
    this.x *= right.x;
    this.y *= right.y;
    return this;
  }
  /**
   * Determines the divisor of this vector and the specified vector.
   * @param right - The specified vector
   * @returns This vector
   */
  ;

  _proto.divide = function divide(right) {
    this.x /= right.x;
    this.y /= right.y;
    return this;
  }
  /**
   * Calculate the length of this vector.
   * @returns The length of this vector
   */
  ;

  _proto.length = function length() {
    var x = this.x,
        y = this.y;
    return Math.sqrt(x * x + y * y);
  }
  /**
   * Calculate the squared length of this vector.
   * @returns The squared length of this vector
   */
  ;

  _proto.lengthSquared = function lengthSquared() {
    var x = this.x,
        y = this.y;
    return x * x + y * y;
  }
  /**
   * Reverses the direction of this vector.
   * @returns This vector
   */
  ;

  _proto.negate = function negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  /**
   * Converts this vector into a unit vector.
   * @returns This vector
   */
  ;

  _proto.normalize = function normalize() {
    Vector2.normalize(this, this);
    return this;
  }
  /**
   * Scale this vector by the given value.
   * @param s - The amount by which to scale the vector
   * @returns This vector
   */
  ;

  _proto.scale = function scale(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }
  /**
   * Clone the value of this vector to an array.
   * @param out - The array
   * @param outOffset - The start offset of the array
   */
  ;

  _proto.toArray = function toArray(out, outOffset) {
    if (outOffset === void 0) {
      outOffset = 0;
    }

    out[outOffset] = this.x;
    out[outOffset + 1] = this.y;
  }
  /**
   * Creates a clone of this vector.
   * @returns A clone of this vector
   */
  ;

  _proto.clone = function clone() {
    return new Vector2(this.x, this.y);
  }
  /**
   * Clones this vector to the specified vector.
   * @param out - The specified vector
   * @returns The specified vector
   */
  ;

  _proto.cloneTo = function cloneTo(out) {
    out.x = this.x;
    out.y = this.y;
    return out;
  };

  return Vector2;
}();
Vector2._zero = new Vector2(0.0, 0.0);
Vector2._one = new Vector2(1.0, 1.0);

/**
 * Describes a 4D-vector.
 */
var Vector4 = /*#__PURE__*/function () {
  /** @internal zero.*/

  /** @internal one.*/

  /**
   * Determines the sum of two vectors.
   * @param left - The first vector to add
   * @param right - The second vector to add
   * @param out - The sum of two vectors
   */
  Vector4.add = function add(left, right, out) {
    out.x = left.x + right.x;
    out.y = left.y + right.y;
    out.z = left.z + right.z;
    out.w = left.w + right.w;
  }
  /**
   * Determines the difference between two vectors.
   * @param left - The first vector to subtract
   * @param right - The second vector to subtract
   * @param out - The difference between two vectors
   */
  ;

  Vector4.subtract = function subtract(left, right, out) {
    out.x = left.x - right.x;
    out.y = left.y - right.y;
    out.z = left.z - right.z;
    out.w = left.w - right.w;
  }
  /**
   * Determines the product of two vectors.
   * @param left - The first vector to multiply
   * @param right - The second vector to multiply
   * @param out - The product of two vectors
   */
  ;

  Vector4.multiply = function multiply(left, right, out) {
    out.x = left.x * right.x;
    out.y = left.y * right.y;
    out.z = left.z * right.z;
    out.w = left.w * right.w;
  }
  /**
   * Determines the divisor of two vectors.
   * @param left - The first vector to divide
   * @param right - The second vector to divide
   * @param out - The divisor of two vectors
   */
  ;

  Vector4.divide = function divide(left, right, out) {
    out.x = left.x / right.x;
    out.y = left.y / right.y;
    out.z = left.z / right.z;
    out.w = left.w / right.w;
  }
  /**
   * Determines the dot product of two vectors.
   * @param left - The first vector to dot
   * @param right - The second vector to dot
   * @returns The dot product of two vectors
   */
  ;

  Vector4.dot = function dot(left, right) {
    return left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w;
  }
  /**
   * Determines the distance of two vectors.
   * @param a - The first vector
   * @param b - The second vector
   * @returns The distance of two vectors
   */
  ;

  Vector4.distance = function distance(a, b) {
    var x = b.x - a.x;
    var y = b.y - a.y;
    var z = b.z - a.z;
    var w = b.w - a.w;
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }
  /**
   * Determines the squared distance of two vectors.
   * @param a - The first vector
   * @param b - The second vector
   * @returns The squared distance of two vectors
   */
  ;

  Vector4.distanceSquared = function distanceSquared(a, b) {
    var x = b.x - a.x;
    var y = b.y - a.y;
    var z = b.z - a.z;
    var w = b.w - a.w;
    return x * x + y * y + z * z + w * w;
  }
  /**
   * Determines whether the specified vectors are equals.
   * @param left - The first vector to compare
   * @param right - The second vector to compare
   * @returns True if the specified vectors are equals, false otherwise
   */
  ;

  Vector4.equals = function equals(left, right) {
    return MathUtil.equals(left.x, right.x) && MathUtil.equals(left.y, right.y) && MathUtil.equals(left.z, right.z) && MathUtil.equals(left.w, right.w);
  }
  /**
   * Performs a linear interpolation between two vectors.
   * @param start - The first vector
   * @param end - The second vector
   * @param t - The blend amount where 0 returns start and 1 end
   * @param out - The result of linear blending between two vectors
   */
  ;

  Vector4.lerp = function lerp(start, end, t, out) {
    var x = start.x,
        y = start.y,
        z = start.z,
        w = start.w;
    out.x = x + (end.x - x) * t;
    out.y = y + (end.y - y) * t;
    out.z = z + (end.z - z) * t;
    out.w = w + (end.w - w) * t;
  }
  /**
   * Calculate a vector containing the largest components of the specified vectors.
   * @param left - The first vector
   * @param right - The second vector
   * @param out - The vector containing the largest components of the specified vectors
   */
  ;

  Vector4.max = function max(left, right, out) {
    out.x = Math.max(left.x, right.x);
    out.y = Math.max(left.y, right.y);
    out.z = Math.max(left.z, right.z);
    out.w = Math.max(left.w, right.w);
  }
  /**
   * Calculate a vector containing the smallest components of the specified vectors.
   * @param left - The first vector
   * @param right - The second vector
   * @param out - The vector containing the smallest components of the specified vectors
   */
  ;

  Vector4.min = function min(left, right, out) {
    out.x = Math.min(left.x, right.x);
    out.y = Math.min(left.y, right.y);
    out.z = Math.min(left.z, right.z);
    out.w = Math.min(left.w, right.w);
  }
  /**
   * Reverses the direction of a given vector.
   * @param a - The vector to negate
   * @param out - The vector facing in the opposite direction
   */
  ;

  Vector4.negate = function negate(a, out) {
    out.x = -a.x;
    out.y = -a.y;
    out.z = -a.z;
    out.w = -a.w;
  }
  /**
   * Converts the vector into a unit vector.
   * @param a - The vector to normalize
   * @param out - The normalized vector
   */
  ;

  Vector4.normalize = function normalize(a, out) {
    var x = a.x,
        y = a.y,
        z = a.z,
        w = a.w;
    var len = Math.sqrt(x * x + y * y + z * z + w * w);

    if (len > MathUtil.zeroTolerance) {
      len = 1 / len;
      out.x = x * len;
      out.y = y * len;
      out.z = z * len;
      out.w = w * len;
    }
  }
  /**
   * Scale a vector by the given value.
   * @param a - The vector to scale
   * @param s - The amount by which to scale the vector
   * @param out - The scaled vector
   */
  ;

  Vector4.scale = function scale(a, s, out) {
    out.x = a.x * s;
    out.y = a.y * s;
    out.z = a.z * s;
    out.w = a.w * s;
  }
  /**
   * Performs a transformation using the given 4x4 matrix.
   * @param v - The vector to transform
   * @param m - The transform matrix
   * @param out - The transformed vector3
   */
  ;

  Vector4.transform = function transform(v, m, out) {
    var x = v.x,
        y = v.y,
        z = v.z,
        w = v.w;
    var e = m.elements;
    out.x = x * e[0] + y * e[4] + z * e[8] + w * e[12];
    out.y = x * e[1] + y * e[5] + z * e[9] + w * e[13];
    out.z = x * e[2] + y * e[6] + z * e[10] + w * e[14];
    out.w = x * e[3] + y * e[7] + z * e[11] + w * e[15];
  }
  /**
   * Performs a transformation using the given quaternion.
   * @param v - The vector to transform
   * @param q - The transform quaternion
   * @param out - The transformed vector
   */
  ;

  Vector4.transformByQuat = function transformByQuat(v, q, out) {
    var x = v.x,
        y = v.y,
        z = v.z,
        w = v.w;
    var qx = q.x;
    var qy = q.y;
    var qz = q.z;
    var qw = q.w; // calculate quat * vec

    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

    out.x = ix * qw - iw * qx - iy * qz + iz * qy;
    out.y = iy * qw - iw * qy - iz * qx + ix * qz;
    out.z = iz * qw - iw * qz - ix * qy + iy * qx;
    out.w = w;
  }
  /** The x component of the vector. */
  ;

  /**
   * Constructor of Vector4.
   * @param x - The x component of the vector, default 0
   * @param y - The y component of the vector, default 0
   * @param z - The z component of the vector, default 0
   * @param w - The w component of the vector, default 0
   */
  function Vector4(x, y, z, w) {
    if (x === void 0) {
      x = 0;
    }

    if (y === void 0) {
      y = 0;
    }

    if (z === void 0) {
      z = 0;
    }

    if (w === void 0) {
      w = 0;
    }

    this.x = void 0;
    this.y = void 0;
    this.z = void 0;
    this.w = void 0;
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  /**
   * Set the value of this vector.
   * @param x - The x component of the vector
   * @param y - The y component of the vector
   * @param z - The z component of the vector
   * @param w - The w component of the vector
   * @returns This vector
   */


  var _proto = Vector4.prototype;

  _proto.setValue = function setValue(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  /**
   * Set the value of this vector by an array.
   * @param array - The array
   * @param offset - The start offset of the array
   * @returns This vector
   */
  ;

  _proto.setValueByArray = function setValueByArray(array, offset) {
    if (offset === void 0) {
      offset = 0;
    }

    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    this.w = array[offset + 3];
    return this;
  }
  /**
   * Determines the sum of this vector and the specified vector.
   * @param right - The specified vector
   * @returns This vector
   */
  ;

  _proto.add = function add(right) {
    this.x += right.x;
    this.y += right.y;
    this.z += right.z;
    this.w += right.w;
    return this;
  }
  /**
   * Determines the difference of this vector and the specified vector.
   * @param right - the specified vector
   * @returns This vector
   */
  ;

  _proto.subtract = function subtract(right) {
    this.x -= right.x;
    this.y -= right.y;
    this.z -= right.z;
    this.w -= right.w;
    return this;
  }
  /**
   * Determines the product of this vector and the specified vector.
   * @param right - the specified vector
   * @returns This vector
   */
  ;

  _proto.multiply = function multiply(right) {
    this.x *= right.x;
    this.y *= right.y;
    this.z *= right.z;
    this.w *= right.w;
    return this;
  }
  /**
   * Determines the divisor of this vector and the specified vector.
   * @param right - the specified vector
   * @returns This vector
   */
  ;

  _proto.divide = function divide(right) {
    this.x /= right.x;
    this.y /= right.y;
    this.z /= right.z;
    this.w /= right.w;
    return this;
  }
  /**
   * Calculate the length of this vector.
   * @returns The length of this vector
   */
  ;

  _proto.length = function length() {
    var x = this.x,
        y = this.y,
        z = this.z,
        w = this.w;
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }
  /**
   * Calculate the squared length of this vector.
   * @returns The squared length of this vector
   */
  ;

  _proto.lengthSquared = function lengthSquared() {
    var x = this.x,
        y = this.y,
        z = this.z,
        w = this.w;
    return x * x + y * y + z * z + w * w;
  }
  /**
   * Reverses the direction of this vector.
   * @returns This vector
   */
  ;

  _proto.negate = function negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  }
  /**
   * Converts this vector into a unit vector.
   * @returns This vector
   */
  ;

  _proto.normalize = function normalize() {
    Vector4.normalize(this, this);
    return this;
  }
  /**
   * Scale this vector by the given value.
   * @param s - The amount by which to scale the vector
   * @returns This vector
   */
  ;

  _proto.scale = function scale(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    this.w *= s;
    return this;
  }
  /**
   * Clone the value of this vector to an array.
   * @param out - The array
   * @param outOffset - The start offset of the array
   */
  ;

  _proto.toArray = function toArray(out, outOffset) {
    if (outOffset === void 0) {
      outOffset = 0;
    }

    out[outOffset] = this.x;
    out[outOffset + 1] = this.y;
    out[outOffset + 2] = this.z;
    out[outOffset + 3] = this.w;
  }
  /**
   * Creates a clone of this vector.
   * @returns A clone of this vector
   */
  ;

  _proto.clone = function clone() {
    var ret = new Vector4(this.x, this.y, this.z, this.w);
    return ret;
  }
  /**
   * Clones this vector to the specified vector.
   * @param out - The specified vector
   * @returns The specified vector
   */
  ;

  _proto.cloneTo = function cloneTo(out) {
    out.x = this.x;
    out.y = this.y;
    out.z = this.z;
    out.w = this.w;
    return out;
  };

  return Vector4;
}();
Vector4._zero = new Vector4(0.0, 0.0, 0.0, 0.0);
Vector4._one = new Vector4(1.0, 1.0, 1.0, 1.0);

/**
 * Describes a color in the from of RGBA (in order: R, G, B, A).
 */

var Color = /*#__PURE__*/function () {
  /**
   * Modify a value from the gamma space to the linear space.
   * @param value - The value in gamma space
   * @returns The value in linear space
   */
  Color.gammaToLinearSpace = function gammaToLinearSpace(value) {
    // https://www.khronos.org/registry/OpenGL/extensions/EXT/EXT_framebuffer_sRGB.txt
    // https://www.khronos.org/registry/OpenGL/extensions/EXT/EXT_texture_sRGB_decode.txt
    if (value <= 0.0) return 0.0;else if (value <= 0.04045) return value / 12.92;else if (value < 1.0) return Math.pow((value + 0.055) / 1.055, 2.4);else return Math.pow(value, 2.4);
  }
  /**
   * Modify a value from the linear space to the gamma space.
   * @param value - The value in linear space
   * @returns The value in gamma space
   */
  ;

  Color.linearToGammaSpace = function linearToGammaSpace(value) {
    // https://www.khronos.org/registry/OpenGL/extensions/EXT/EXT_framebuffer_sRGB.txt
    // https://www.khronos.org/registry/OpenGL/extensions/EXT/EXT_texture_sRGB_decode.txt
    if (value <= 0.0) return 0.0;else if (value < 0.0031308) return 12.92 * value;else if (value < 1.0) return 1.055 * Math.pow(value, 0.41666) - 0.055;else return Math.pow(value, 0.41666);
  }
  /**
   * Determines whether the specified colors are equals.
   * @param left - The first color to compare
   * @param right - The second color to compare
   * @returns True if the specified colors are equals, false otherwise
   */
  ;

  Color.equals = function equals(left, right) {
    return MathUtil.equals(left.r, right.r) && MathUtil.equals(left.g, right.g) && MathUtil.equals(left.b, right.b) && MathUtil.equals(left.a, right.a);
  }
  /** The red component of the color, 0~1. */
  ;

  /**
   * Constructor of Color.
   * @param r - The red component of the color
   * @param g - The green component of the color
   * @param b - The blue component of the color
   * @param a - The alpha component of the color
   */
  function Color(r, g, b, a) {
    if (r === void 0) {
      r = 1;
    }

    if (g === void 0) {
      g = 1;
    }

    if (b === void 0) {
      b = 1;
    }

    if (a === void 0) {
      a = 1;
    }

    this.r = void 0;
    this.g = void 0;
    this.b = void 0;
    this.a = void 0;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  /**
   * Creates a clone of this color.
   * @returns A clone of this color
   */


  var _proto = Color.prototype;

  _proto.clone = function clone() {
    var ret = new Color(this.r, this.g, this.b, this.a);
    return ret;
  }
  /**
   * Clones this color to the specified color.
   * @param out - The specified color
   * @returns The specified color
   */
  ;

  _proto.cloneTo = function cloneTo(out) {
    out.r = this.r;
    out.g = this.g;
    out.b = this.b;
    out.a = this.a;
    return out;
  }
  /**
   * Modify components (r, g, b) of this color from gamma space to linear space.
   * @param out - The color in linear space
   * @returns The color in linear space
   */
  ;

  _proto.toLinear = function toLinear(out) {
    out.r = Color.gammaToLinearSpace(this.r);
    out.g = Color.gammaToLinearSpace(this.g);
    out.b = Color.gammaToLinearSpace(this.b);
    return out;
  }
  /**
   * Modify components (r, g, b) of this color from linear space to gamma space.
   * @param out - The color in gamma space
   * @returns The color in gamma space
   */
  ;

  _proto.toGamma = function toGamma(out) {
    out.r = Color.linearToGammaSpace(this.r);
    out.g = Color.linearToGammaSpace(this.g);
    out.b = Color.linearToGammaSpace(this.b);
    return out;
  };

  return Color;
}();

exports.BoundingBox = BoundingBox;
exports.BoundingFrustum = BoundingFrustum;
exports.BoundingSphere = BoundingSphere;
exports.CollisionUtil = CollisionUtil;
exports.Color = Color;
exports.MathUtil = MathUtil;
exports.Matrix = Matrix;
exports.Matrix3x3 = Matrix3x3;
exports.Plane = Plane;
exports.Quaternion = Quaternion;
exports.Ray = Ray;
exports.Spherical = Spherical;
exports.Vector2 = Vector2;
exports.Vector3 = Vector3;
exports.Vector4 = Vector4;
