// hacked from github.com/metapolator/metapolator.git@88eaa50c27fab29bfacfa3f8392972957359bd09

//////////////////////////////// Complex.js ////////////////////////////////

var Complex = function(real, imag){
  Object.defineProperty(this, 'real', {
    value: real !== undefined ? real : 0
    , writable: false
  })
  
  Object.defineProperty(this, 'imag', {
    value: imag !== undefined ? imag : 0
    , writable: false
  })
};

var prototype = Complex.prototype = {
  constructor: Complex,
  fromRect: function(a, b) {
    return new this.constructor(a, b)
  },

  fromPolar: function(r, phi){
    if (typeof r == 'string'){
      var parts = r.split(' ');
      r = parts[0];
      phi = parts[1];
    }
    return new this.constructor(
      r * Math.cos(phi),
      r * Math.sin(phi)
    );
  },

  toPrecision: function(k){
    return new this.constructor(
      this.real.toPrecision(k),
      this.imag.toPrecision(k)
    );
  },

  toFixed: function(k){
    return new this.constructor(
      this.real.toFixed(k),
      this.imag.toFixed(k)
    );
  },

  magnitude: function(){
    var a = this.real, b = this.imag;
    return Math.sqrt(a * a + b * b);
  },

  angle: function(){
    return Math.atan2(this.imag, this.real);
  },

  conjugate: function(){
    return new this.constructor(this.real, -this.imag);
  },

  negate: function(){
    return new this.constructor(-this.real, -this.imag);
  },

  multiply: function(z){
    z = this.constructor.from(z);
    var a = this.real, b = this.imag;
    return new this.constructor(
      z.real * a - z.imag * b,
      b * z.real + z.imag * a
    );
  },

  divide: function(z){
    z = this.constructor.from(z);
    var divident = (Math.pow(z.real, 2) + Math.pow(z.imag, 2)),
      a = this.real, b = this.imag;
    return new this.constructor(
      (a * z.real + b * z.imag) / divident,
      (b * z.real - a * z.imag) / divident
    );
  },

  add: function(z){
    z = this.constructor.from(z);
    return new this.constructor(this.real + z.real, this.imag + z.imag);
  },

  subtract: function(z){
    z = this.constructor.from(z);
    return new this.constructor(this.real - z.real, this.imag - z.imag);
  },

  pow: function(z){
    z = this.constructor.from(z);
    var result = z.multiply(this.clone().log()).exp(); // z^w = e^(w*log(z))
    return new this.constructor(result.real, result.imag);
  },

  sqrt: function(){
    var abs = this.magnitude(),
      sgn = this.imag < 0 ? -1 : 1;
    return new this.constructor(
      Math.sqrt((abs + this.real) / 2),
      sgn * Math.sqrt((abs - this.real) / 2)
    );
  },

  log: function(k){
    if (!k) k = 0;
    return new this.constructor(
      Math.log(this.magnitude()),
      this.angle() + k * 2 * Math.PI
    );
  },

  exp: function(){
    return this.fromPolar(
      Math.exp(this.real),
      this.imag
    );
  },

  sin: function(){
    var a = this.real, b = this.imag;
    return new this.constructor(
      Math.sin(a) * cosh(b),
      Math.cos(a) * sinh(b)
    );
  },

  cos: function(){
    var a = this.real, b = this.imag;
    return new this.constructor(
      Math.cos(a) * cosh(b),
      Math.sin(a) * sinh(b) * -1
    );
  },

  tan: function(){
    var a = this.real, b = this.imag,
      divident = Math.cos(2 * a) + cosh(2 * b);
    return new this.constructor(
      Math.sin(2 * a) / divident,
      sinh(2 * b) / divident
    );
  },

  sinh: function(){
    var a = this.real, b = this.imag;
    return new this.constructor(
      sinh(a) * Math.cos(b),
      cosh(a) * Math.sin(b)
    );
  },

  cosh: function(){
    var a = this.real, b = this.imag;
    return new this.constructor(
      cosh(a) * Math.cos(b),
      sinh(a) * Math.sin(b)
    );
  },

  tanh: function(){
    var a = this.real, b = this.imag,
      divident = cosh(2 * a) + Math.cos(2 * b);
    return new this.constructor(
      sinh(2 * a) / divident,
      Math.sin(2 * b) / divident
    );
  },

  clone: function(){
    return new this.constructor(this.real, this.imag);
  },

  toString: function(polar){
    if (polar) return this.magnitude() + ' ' + this.angle();

    var ret = '', a = this.real, b = this.imag;
    if (a) ret += a;
    if (a && b || b < 0) ret += b < 0 ? '-' : '+';
    if (b){
      var absIm = Math.abs(b);
      if (absIm != 1) ret += absIm;
      ret += 'i';
    }
    return ret || '0';
  },

  equals: function(z) {
    z = this.constructor.from(z);
    return (z.real == this.real && z.imag == this.imag);
  }

};

var alias = {
  abs: 'magnitude'
  , arg: 'angle'
  , phase: 'angle'
  , conj: 'conjugate'
  , '**': 'pow'
  , mult: 'multiply'
  , '*':  'multiply'
  , dev: 'divide'
  , '/': 'divide'
  , '+': 'add'
  , sub: 'subtract'
  , '-': 'subtract'
  , '=': 'equals'
};

for (var a in alias) prototype[a] = prototype[alias[a]];

// factories and constants
var extend = {

  from: function(real, im) {
    if (real instanceof Complex) return new Complex(real.real, real.imag);
    return new Complex(real, im);
  },

  fromString: function(str) {
    var match, real, im;
    if (str == 'i') str = '0+1i';
    match = str.match(/(\d+)?([\+\-]\d*)[ij]/);
    if (match) {
      real = match[1];
      im = (match[2] == '+' || match[2] == '-')
        ? match[2] + '1'
        : match[2];
    }
    return new Complex(+real, +im);
  },

  fromPolar: function(r, phi) {
    return new Complex(1, 1).fromPolar(r, phi);
  },

  i: new Complex(0, 1),

  one: new Complex(1, 0)

};

for (var e in extend) Complex[e] = extend[e];

var sinh = function(x){
  return (Math.pow(Math.E, x) - Math.pow(Math.E, -x)) / 2;
};

var cosh = function(x){
  return (Math.pow(Math.E, x) + Math.pow(Math.E, -x)) / 2;
};

//////////////////////////////// Vector.js ////////////////////////////////

/**
 * Add access with geometry names "x" and "y" and a minimal
 * array interface with length (== 2), 0, 1;
 */
 
var Parent = Complex;
 
function Vector(x, y) {
    Parent.call(this, x, y);
    // this.cps_proxy = whitelistProxies.generic(this, this._cps_whitelist);
}
var _p = Vector.prototype = Object.create(Parent.prototype);
_p.constructor = Vector;

_p._cps_whitelist = {
    x: 'x'
  , y: 'y'
  , length: 'len'
  , angle: 'rad'
};


Vector.fromArray = function(arr) {
    return new _p.constructor(arr[0], arr[1]);
};

function _getReal() {
    /*jshint validthis:true*/
    return this.real;
}

function _getImaginary() {
    /*jshint validthis:true*/
    return this.imag;
}

Object.defineProperty(_p, 'x', {get: _getReal});
Object.defineProperty(_p, 'y', {get: _getImaginary});

// array interface
Object.defineProperty(_p, 'length', {
    value: 2
  , writable: false
  , enumerable: true
});
Object.defineProperty(_p, '0', {get: _getReal});
Object.defineProperty(_p, '1', {get: _getImaginary});

_p.valueOf = function() {
    return Array.prototype.slice.call(this);
};

_p.toString = function() {
    return '<Vector ' + this.valueOf() +'>';
};

// factories and constants
Vector.i = new Vector(0, 1);
Vector.one = new Vector(1, 0);

Vector.from = function(x, y) {
    // just map to Parent and then convert
    var complex = Parent.from(x, y);
    return new Vector(complex.real, complex.imag);
};

Vector.fromPolar = function(r, phi) {
    return new Vector(1, 1).fromPolar(r, phi);
};


// Some getters, so we can use these easily with CPS. At the moment
// CPS doesn't provide facilities to call external methods, i.e.
// methods that are not defined as operators but properties of the
// element at hand. I think this would make more problems than it
// would solve, so getters is the way.

/**
 * A getter for the "length" of the vector, however "length" is already
 * used for an array like interface of Vector. So "len" it is, because
 * its short and often used to abbreviate "length".
 */
Object.defineProperty(_p, 'len', {
    get: Parent.prototype.magnitude
});

/**
 * A getter for the angle of the vector in radians.
 */
Object.defineProperty(_p, 'rad', {
    get: Parent.prototype.angle
});


/**
 * All points in this module are expected instances of
 * metapolator/math/Vector (complex numbers)
 */

function normalizeAngle(angle) {
    var result = angle % (2*Math.PI);
    if(result < 0)
        result += (2*Math.PI);
    return result;
}

function hobby(theta, phi) {
    var st = Math.sin(theta)
      , ct = Math.cos(theta)
      , sp = Math.sin(phi)
      , cp = Math.cos(phi)
      ;
    return (
    (2 + Math.sqrt(2) * (st-1/16*sp) * (sp-1/16*st) * (ct-cp)) /
    (3 * (1 + 0.5*(Math.sqrt(5)-1)* ct + 0.5*(3-Math.sqrt(5))*cp))
    );
}

/**
 * Returns two distances from the respective on-curve points to their
 * control points on the given curve segment.
 *
 * dir0 and dir1 are the tangent directions as radians or instances
 * of Vector.
 *
 * alpha and beta are the tension parameters. The tensions values alpha
 * and beta have no influence on the resulting distance of each other.
 *
 * Tensions are bigger the closer they are to their on-curve points.
 * When using Infinity as a tension the returned magnitude is 0;
 * When using 0 as a tension the returned magnitude is Infinity.
 *    When the tension is 0 and z0 equals z1 its resulting
 *    magnitude is NaN; in this case it is short circuited into
 *    returning Infinity, which is OK as a behavior; because it obeys
 *    the rule above, also it's compatible with the reverse operation
 *    magnitude2tension.
 */
function _tension2magnitude(z0, dir0, alpha, beta, dir1, z1) {
    var diff_z1z0 = z1['-'](z0)
      , angle_z1z0 = diff_z1z0.angle()
      , magnitude_z1z0 = diff_z1z0.magnitude()
        // calculating this using the polar form helps us by not
        // getting into trouble when z1['-'](z0) is <Vector 0, 0>
        // because that would cause a division by 0 when calculating
        // theta and pi using cartesian arithmetic.
      , theta = normalizeAngle(dir0 - angle_z1z0)
      , phi = normalizeAngle(angle_z1z0 - dir1)
      , u, v;

    if(alpha !== undefined)
        u = (magnitude_z1z0 === 0 && (alpha === 0 || alpha === Infinity))
            ? (alpha === 0 ? Infinity : 0)
            : magnitude_z1z0 * hobby(theta, phi) / alpha
            ;
    if(beta !== undefined)
        v = (magnitude_z1z0 === 0 && (beta === 0 || beta === Infinity))
            ? (beta === 0 ? Infinity : 0)
            : magnitude_z1z0 * hobby(phi, theta) / beta
            ;
    return [u, v];
}

function tension2magnitude(z0, dir0, alpha, beta, dir1, z1) {
    var uv = _tension2magnitude(z0, dir0, alpha, beta, dir1, z1);
    if(uv[0] === undefined) uv[0] = NaN;
    if(uv[1] === undefined) uv[1] = NaN;
    return uv;
}

function tension2magnitudeOut(z0, dir0, alpha, dir1, z1) {
    return _tension2magnitude(z0, dir0, alpha, undefined, dir1, z1)[0];
}

function tension2magnitudeIn(z0, dir0, beta, dir1, z1) {
    return _tension2magnitude(z0, dir0, undefined, beta, dir1, z1)[1];
}

/**
 * dir0 and dir1 are radians
 * alpha, beta are the magnitudes
 *
 * Also
 * [Infinity, Infinity] instead of [NaN, NaN] when the magnitudes are 0
 * And it can still return a tension for one control when the other
 * control is 0
 */
function _magnitude2tension(z0, dir0, alpha, beta, dir1, z1) {
    var uv, u, v
        // 1 is the default tension
      , _alpha = alpha === 0 || alpha === undefined ? undefined : 1
      , _beta = beta === 0 || beta === undefined ? undefined : 1
      ;
    if(_alpha || _beta)
        uv = _tension2control(z0, dir0, _alpha, _beta, dir1, z1);

    if(alpha === 0)
        u = Infinity;
    else if (alpha !== undefined)
        u = uv[0]['-'](z0).magnitude()/alpha;

    if(beta === 0)
        v = Infinity;
    else if (beta !== undefined)
        v = uv[1]['-'](z1).magnitude()/beta;

    return[u, v];
}

function magnitude2tension(z0, dir0, alpha, beta, dir1, z1) {
    var uv = _magnitude2tension(z0, dir0, alpha, beta, dir1, z1);
    if(uv[0] === undefined) uv[0] = NaN;
    if(uv[1] === undefined) uv[1] = NaN;
    return uv;
}

function magnitude2tensionOut(z0, dir0, alpha, dir1, z1) {
    return _magnitude2tension(z0, dir0, alpha, undefined, dir1, z1)[0];
}

function magnitude2tensionIn(z0, dir0, beta, dir1, z1) {
    return _magnitude2tension(z0, dir0, undefined, beta, dir1, z1)[1];
}

/**
 * returns vectors for the absolute positions of the control points
 * used to be called hobby2cubic
 */
function _tension2control(z0, dir0, alpha, beta, dir1, z1) {
    var d0, d1, uv, u, v;

    if(dir0 instanceof Vector || dir1 instanceof Vector)
        console.warn('It is deprecated to use Vectors for dir0 or dir1');

    d0 = (dir0 instanceof Vector) ? dir0.arg() : dir0;
    d1 = (dir1 instanceof Vector) ? dir1.arg() : dir1;

    uv = _tension2magnitude(z0, d0, alpha, beta, d1, z1);
    if(uv[0] !== undefined)
        u = Vector.fromPolar(uv[0], d0)['+'](z0);
    if(uv[1] !== undefined)
        v = z1['-'](Vector.fromPolar(uv[1], d1));
    return [u, v];
}

function tension2control(z0, dir0, alpha, beta, dir1, z1) {
    var uv = _tension2control(z0, dir0, alpha, beta, dir1, z1);
    if(uv[0] === undefined) uv[0] = new Vector(NaN, NaN);
    if(uv[1] === undefined) uv[1] = new Vector(NaN, NaN);
    return uv;
}

function tension2controlOut (z0, dir0, alpha, dir1, z1) {
    return tension2control(z0, dir0, alpha, undefined, dir1, z1)[0];
}

function tension2controlIn (z0, dir0, beta, dir1, z1) {
    return tension2control(z0, dir0, undefined, beta, dir1, z1)[1];
}

/**
 * If you need both tension values, this version is more efficient
 * than calling posttension and pretension.
 */
function control2tension(p0, p1, p2, p3) {
    var diffp0p1 = p1['-'](p0)
      , diffp3p2 = p3['-'](p2)
      , dir0 = diffp0p1.angle()
      , dir1 = diffp3p2.angle()
      , alpha = diffp0p1.magnitude()
      , beta = diffp3p2.magnitude()
      ;
    return _magnitude2tension(p0, dir0, alpha, beta, dir1, p3);
}
/**
 * returns the tension for the first on-curve point.
 */
function control2tensionOut(p0, p1, p2, p3) {
    var diffp0p1 = p1['-'](p0)
      , diffp3p2 = p3['-'](p2)
      , dir0 = diffp0p1.angle()
      , dir1 = diffp3p2.magnitude()
      , alpha = diffp0p1.magnitude()
      ;
    return magnitude2tensionOut(p1, dir0, alpha, dir1, p3);
}
/**
 * returns the tension for the second on-curve point
 */
function control2tensionIn(p0, p1, p2, p3) {
    var diffp0p1 = p1['-'](p0)
      , diffp3p2 = p3['-'](p2)
      , dir0 = diffp0p1.angle()
      , dir1 = diffp3p2.magnitude()
      , beta = diffp3p2.magnitude()
      ;
    return magnitude2tensionIn(p1, dir0, beta, dir1, p3);
}