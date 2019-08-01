(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/uuid/index.js":
/*!*************************************!*\
  !*** ../node_modules/uuid/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "../node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "../node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "../node_modules/uuid/lib/bytesToUuid.js":
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/bytesToUuid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../node_modules/uuid/lib/rng-browser.js":
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/rng-browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../node_modules/uuid/v1.js":
/*!**********************************!*\
  !*** ../node_modules/uuid/v1.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "../node_modules/uuid/v4.js":
/*!**********************************!*\
  !*** ../node_modules/uuid/v4.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2d8kk051wl=function(){var path="/Users/martinsuba/dev/learn/iframe-manager/source/index.ts",hash="82cd93e62d963a722bf7b88933cc2db58c7df30c",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/martinsuba/dev/learn/iframe-manager/source/index.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:13},end:{line:3,column:28}},"2":{start:{line:4,column:35},end:{line:79,column:3}},"3":{start:{line:6,column:8},end:{line:6,column:33}},"4":{start:{line:8,column:4},end:{line:20,column:6}},"5":{start:{line:9,column:8},end:{line:11,column:9}},"6":{start:{line:10,column:12},end:{line:10,column:83}},"7":{start:{line:12,column:21},end:{line:12,column:41}},"8":{start:{line:13,column:8},end:{line:15,column:9}},"9":{start:{line:14,column:12},end:{line:14,column:50}},"10":{start:{line:16,column:8},end:{line:18,column:9}},"11":{start:{line:17,column:12},end:{line:17,column:65}},"12":{start:{line:19,column:8},end:{line:19,column:22}},"13":{start:{line:21,column:4},end:{line:30,column:6}},"14":{start:{line:23,column:12},end:{line:23,column:89}},"15":{start:{line:25,column:8},end:{line:27,column:9}},"16":{start:{line:26,column:12},end:{line:26,column:22}},"17":{start:{line:28,column:19},end:{line:28,column:128}},"18":{start:{line:28,column:64},end:{line:28,column:125}},"19":{start:{line:29,column:8},end:{line:29,column:31}},"20":{start:{line:31,column:4},end:{line:41,column:6}},"21":{start:{line:32,column:21},end:{line:32,column:30}},"22":{start:{line:32,column:37},end:{line:32,column:42}},"23":{start:{line:32,column:52},end:{line:32,column:60}},"24":{start:{line:32,column:67},end:{line:32,column:80}},"25":{start:{line:32,column:95},end:{line:32,column:118}},"26":{start:{line:33,column:21},end:{line:33,column:53}},"27":{start:{line:34,column:8},end:{line:34,column:43}},"28":{start:{line:35,column:8},end:{line:35,column:38}},"29":{start:{line:36,column:8},end:{line:36,column:61}},"30":{start:{line:37,column:8},end:{line:39,column:9}},"31":{start:{line:38,column:12},end:{line:38,column:56}},"32":{start:{line:40,column:8},end:{line:40,column:22}},"33":{start:{line:42,column:4},end:{line:48,column:6}},"34":{start:{line:43,column:8},end:{line:45,column:9}},"35":{start:{line:44,column:12},end:{line:44,column:90}},"36":{start:{line:46,column:21},end:{line:46,column:39}},"37":{start:{line:47,column:8},end:{line:47,column:61}},"38":{start:{line:49,column:4},end:{line:53,column:6}},"39":{start:{line:50,column:21},end:{line:50,column:39}},"40":{start:{line:51,column:8},end:{line:51,column:46}},"41":{start:{line:52,column:8},end:{line:52,column:32}},"42":{start:{line:54,column:4},end:{line:77,column:6}},"43":{start:{line:55,column:21},end:{line:55,column:30}},"44":{start:{line:55,column:40},end:{line:55,column:48}},"45":{start:{line:55,column:63},end:{line:55,column:76}},"46":{start:{line:55,column:87},end:{line:55,column:96}},"47":{start:{line:56,column:8},end:{line:58,column:9}},"48":{start:{line:57,column:12},end:{line:57,column:100}},"49":{start:{line:59,column:8},end:{line:61,column:9}},"50":{start:{line:60,column:12},end:{line:60,column:99}},"51":{start:{line:62,column:8},end:{line:64,column:9}},"52":{start:{line:63,column:12},end:{line:63,column:109}},"53":{start:{line:65,column:8},end:{line:67,column:9}},"54":{start:{line:66,column:12},end:{line:66,column:100}},"55":{start:{line:68,column:17},end:{line:68,column:28}},"56":{start:{line:69,column:21},end:{line:69,column:105}},"57":{start:{line:70,column:28},end:{line:70,column:83}},"58":{start:{line:71,column:8},end:{line:73,column:9}},"59":{start:{line:72,column:12},end:{line:72,column:70}},"60":{start:{line:74,column:8},end:{line:74,column:42}},"61":{start:{line:75,column:8},end:{line:75,column:37}},"62":{start:{line:76,column:8},end:{line:76,column:18}},"63":{start:{line:78,column:4},end:{line:78,column:25}},"64":{start:{line:80,column:0},end:{line:80,column:38}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:35},end:{line:4,column:36}},loc:{start:{line:4,column:47},end:{line:79,column:1}},line:4},"1":{name:"IframeManager",decl:{start:{line:5,column:13},end:{line:5,column:26}},loc:{start:{line:5,column:29},end:{line:7,column:5}},line:5},"2":{name:"(anonymous_2)",decl:{start:{line:8,column:40},end:{line:8,column:41}},loc:{start:{line:8,column:54},end:{line:20,column:5}},line:8},"3":{name:"(anonymous_3)",decl:{start:{line:21,column:41},end:{line:21,column:42}},loc:{start:{line:21,column:58},end:{line:30,column:5}},line:21},"4":{name:"camelToKebab",decl:{start:{line:22,column:17},end:{line:22,column:29}},loc:{start:{line:22,column:38},end:{line:24,column:9}},line:22},"5":{name:"(anonymous_5)",decl:{start:{line:28,column:42},end:{line:28,column:43}},loc:{start:{line:28,column:62},end:{line:28,column:127}},line:28},"6":{name:"(anonymous_6)",decl:{start:{line:31,column:44},end:{line:31,column:45}},loc:{start:{line:31,column:58},end:{line:41,column:5}},line:31},"7":{name:"(anonymous_7)",decl:{start:{line:42,column:36},end:{line:42,column:37}},loc:{start:{line:42,column:57},end:{line:48,column:5}},line:42},"8":{name:"(anonymous_8)",decl:{start:{line:49,column:38},end:{line:49,column:39}},loc:{start:{line:49,column:52},end:{line:53,column:5}},line:49},"9":{name:"(anonymous_9)",decl:{start:{line:54,column:37},end:{line:54,column:38}},loc:{start:{line:54,column:51},end:{line:77,column:5}},line:54}},branchMap:{"0":{loc:{start:{line:9,column:8},end:{line:11,column:9}},type:"if",locations:[{start:{line:9,column:8},end:{line:11,column:9}},{start:{line:9,column:8},end:{line:11,column:9}}],line:9},"1":{loc:{start:{line:9,column:12},end:{line:9,column:41}},type:"binary-expr",locations:[{start:{line:9,column:12},end:{line:9,column:15}},{start:{line:9,column:19},end:{line:9,column:41}}],line:9},"2":{loc:{start:{line:13,column:8},end:{line:15,column:9}},type:"if",locations:[{start:{line:13,column:8},end:{line:15,column:9}},{start:{line:13,column:8},end:{line:15,column:9}}],line:13},"3":{loc:{start:{line:16,column:8},end:{line:18,column:9}},type:"if",locations:[{start:{line:16,column:8},end:{line:18,column:9}},{start:{line:16,column:8},end:{line:18,column:9}}],line:16},"4":{loc:{start:{line:25,column:8},end:{line:27,column:9}},type:"if",locations:[{start:{line:25,column:8},end:{line:27,column:9}},{start:{line:25,column:8},end:{line:27,column:9}}],line:25},"5":{loc:{start:{line:32,column:95},end:{line:32,column:118}},type:"cond-expr",locations:[{start:{line:32,column:111},end:{line:32,column:113}},{start:{line:32,column:116},end:{line:32,column:118}}],line:32},"6":{loc:{start:{line:43,column:8},end:{line:45,column:9}},type:"if",locations:[{start:{line:43,column:8},end:{line:45,column:9}},{start:{line:43,column:8},end:{line:45,column:9}}],line:43},"7":{loc:{start:{line:43,column:12},end:{line:43,column:72}},type:"binary-expr",locations:[{start:{line:43,column:12},end:{line:43,column:17}},{start:{line:43,column:22},end:{line:43,column:47}},{start:{line:43,column:51},end:{line:43,column:71}}],line:43},"8":{loc:{start:{line:56,column:8},end:{line:58,column:9}},type:"if",locations:[{start:{line:56,column:8},end:{line:58,column:9}},{start:{line:56,column:8},end:{line:58,column:9}}],line:56},"9":{loc:{start:{line:56,column:12},end:{line:56,column:49}},type:"binary-expr",locations:[{start:{line:56,column:12},end:{line:56,column:19}},{start:{line:56,column:23},end:{line:56,column:49}}],line:56},"10":{loc:{start:{line:59,column:8},end:{line:61,column:9}},type:"if",locations:[{start:{line:59,column:8},end:{line:61,column:9}},{start:{line:59,column:8},end:{line:61,column:9}}],line:59},"11":{loc:{start:{line:59,column:12},end:{line:59,column:72}},type:"binary-expr",locations:[{start:{line:59,column:12},end:{line:59,column:17}},{start:{line:59,column:22},end:{line:59,column:47}},{start:{line:59,column:51},end:{line:59,column:71}}],line:59},"12":{loc:{start:{line:62,column:8},end:{line:64,column:9}},type:"if",locations:[{start:{line:62,column:8},end:{line:64,column:9}},{start:{line:62,column:8},end:{line:64,column:9}}],line:62},"13":{loc:{start:{line:62,column:12},end:{line:62,column:85}},type:"binary-expr",locations:[{start:{line:62,column:12},end:{line:62,column:22}},{start:{line:62,column:26},end:{line:62,column:56}},{start:{line:62,column:60},end:{line:62,column:85}}],line:62},"14":{loc:{start:{line:65,column:8},end:{line:67,column:9}},type:"if",locations:[{start:{line:65,column:8},end:{line:67,column:9}},{start:{line:65,column:8},end:{line:67,column:9}}],line:65},"15":{loc:{start:{line:65,column:12},end:{line:65,column:48}},type:"binary-expr",locations:[{start:{line:65,column:12},end:{line:65,column:18}},{start:{line:65,column:22},end:{line:65,column:48}}],line:65},"16":{loc:{start:{line:70,column:28},end:{line:70,column:83}},type:"cond-expr",locations:[{start:{line:70,column:37},end:{line:70,column:67}},{start:{line:70,column:70},end:{line:70,column:83}}],line:70},"17":{loc:{start:{line:71,column:8},end:{line:73,column:9}},type:"if",locations:[{start:{line:71,column:8},end:{line:73,column:9}},{start:{line:71,column:8},end:{line:73,column:9}}],line:71}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0,0],"12":[0,0],"13":[0,0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2d8kk051wl.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var uuid_1=(cov_2d8kk051wl.s[1]++,__webpack_require__(/*! uuid */ "../node_modules/uuid/index.js"));var IframeManager=(cov_2d8kk051wl.s[2]++,function(){cov_2d8kk051wl.f[0]++;function IframeManager(){cov_2d8kk051wl.f[1]++;cov_2d8kk051wl.s[3]++;this.iframes=new Map();}cov_2d8kk051wl.s[4]++;IframeManager.prototype.getIframe=function(id){cov_2d8kk051wl.f[2]++;cov_2d8kk051wl.s[5]++;if((cov_2d8kk051wl.b[1][0]++,!id)||(cov_2d8kk051wl.b[1][1]++,typeof id!=='string')){cov_2d8kk051wl.b[0][0]++;cov_2d8kk051wl.s[6]++;throw new Error("ID is expected to be a string, but got "+typeof id);}else{cov_2d8kk051wl.b[0][1]++;}var iframe=(cov_2d8kk051wl.s[7]++,this.iframes.get(id));cov_2d8kk051wl.s[8]++;if(iframe==null){cov_2d8kk051wl.b[2][0]++;cov_2d8kk051wl.s[9]++;throw new Error('Unknown iframe ID.');}else{cov_2d8kk051wl.b[2][1]++;}cov_2d8kk051wl.s[10]++;if(!document.body.contains(iframe)){cov_2d8kk051wl.b[3][0]++;cov_2d8kk051wl.s[11]++;throw new Error('Iframe element is not in the dom.');}else{cov_2d8kk051wl.b[3][1]++;}cov_2d8kk051wl.s[12]++;return iframe;};cov_2d8kk051wl.s[13]++;IframeManager.prototype.parseStyle=function(style){cov_2d8kk051wl.f[3]++;function camelToKebab(string){cov_2d8kk051wl.f[4]++;cov_2d8kk051wl.s[14]++;return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,'$1-$2').toLowerCase();}cov_2d8kk051wl.s[15]++;if(!style){cov_2d8kk051wl.b[4][0]++;cov_2d8kk051wl.s[16]++;return'';}else{cov_2d8kk051wl.b[4][1]++;}var rule=(cov_2d8kk051wl.s[17]++,Object.keys(style).map(function(property){cov_2d8kk051wl.f[5]++;cov_2d8kk051wl.s[18]++;return camelToKebab(property)+": "+style[property]+";";}));cov_2d8kk051wl.s[19]++;return rule.join('\n');};cov_2d8kk051wl.s[20]++;IframeManager.prototype.createElement=function(_a){cov_2d8kk051wl.f[6]++;var source=(cov_2d8kk051wl.s[21]++,_a.source),id=(cov_2d8kk051wl.s[22]++,_a.id),style=(cov_2d8kk051wl.s[23]++,_a.style),_b=(cov_2d8kk051wl.s[24]++,_a.attributes),attributes=(cov_2d8kk051wl.s[25]++,_b===void 0?(cov_2d8kk051wl.b[5][0]++,{}):(cov_2d8kk051wl.b[5][1]++,_b));var iframe=(cov_2d8kk051wl.s[26]++,document.createElement('iframe'));cov_2d8kk051wl.s[27]++;iframe.setAttribute('src',source);cov_2d8kk051wl.s[28]++;iframe.setAttribute('id',id);cov_2d8kk051wl.s[29]++;iframe.setAttribute('style',this.parseStyle(style));cov_2d8kk051wl.s[30]++;for(var attr in attributes){cov_2d8kk051wl.s[31]++;iframe.setAttribute(attr,attributes[attr]);}cov_2d8kk051wl.s[32]++;return iframe;};cov_2d8kk051wl.s[33]++;IframeManager.prototype.style=function(id,style){cov_2d8kk051wl.f[7]++;cov_2d8kk051wl.s[34]++;if((cov_2d8kk051wl.b[7][0]++,style)&&((cov_2d8kk051wl.b[7][1]++,typeof style!=='object')||(cov_2d8kk051wl.b[7][2]++,Array.isArray(style)))){cov_2d8kk051wl.b[6][0]++;cov_2d8kk051wl.s[35]++;throw new Error("Style is expected to be an object, but got "+typeof style);}else{cov_2d8kk051wl.b[6][1]++;}var iframe=(cov_2d8kk051wl.s[36]++,this.getIframe(id));cov_2d8kk051wl.s[37]++;iframe.setAttribute('style',this.parseStyle(style));};cov_2d8kk051wl.s[38]++;IframeManager.prototype.destroy=function(id){cov_2d8kk051wl.f[8]++;var iframe=(cov_2d8kk051wl.s[39]++,this.getIframe(id));cov_2d8kk051wl.s[40]++;iframe.parentNode.removeChild(iframe);cov_2d8kk051wl.s[41]++;this.iframes.delete(id);};cov_2d8kk051wl.s[42]++;IframeManager.prototype.inject=function(_a){cov_2d8kk051wl.f[9]++;var source=(cov_2d8kk051wl.s[43]++,_a.source),style=(cov_2d8kk051wl.s[44]++,_a.style),attributes=(cov_2d8kk051wl.s[45]++,_a.attributes),target=(cov_2d8kk051wl.s[46]++,_a.target);cov_2d8kk051wl.s[47]++;if((cov_2d8kk051wl.b[9][0]++,!source)||(cov_2d8kk051wl.b[9][1]++,typeof source!=='string')){cov_2d8kk051wl.b[8][0]++;cov_2d8kk051wl.s[48]++;throw new Error("Source property is expected to be a string, but got "+typeof source);}else{cov_2d8kk051wl.b[8][1]++;}cov_2d8kk051wl.s[49]++;if((cov_2d8kk051wl.b[11][0]++,style)&&((cov_2d8kk051wl.b[11][1]++,typeof style!=='object')||(cov_2d8kk051wl.b[11][2]++,Array.isArray(style)))){cov_2d8kk051wl.b[10][0]++;cov_2d8kk051wl.s[50]++;throw new Error("Style property is expected to be an object, but got "+typeof style);}else{cov_2d8kk051wl.b[10][1]++;}cov_2d8kk051wl.s[51]++;if((cov_2d8kk051wl.b[13][0]++,attributes)&&(cov_2d8kk051wl.b[13][1]++,typeof attributes!=='object')||(cov_2d8kk051wl.b[13][2]++,Array.isArray(attributes))){cov_2d8kk051wl.b[12][0]++;cov_2d8kk051wl.s[52]++;throw new Error("Attributes property is expected to be an object, but got "+typeof attributes);}else{cov_2d8kk051wl.b[12][1]++;}cov_2d8kk051wl.s[53]++;if((cov_2d8kk051wl.b[15][0]++,target)&&(cov_2d8kk051wl.b[15][1]++,typeof target!=='string')){cov_2d8kk051wl.b[14][0]++;cov_2d8kk051wl.s[54]++;throw new Error("Target property is expected to be a string, but got "+typeof target);}else{cov_2d8kk051wl.b[14][1]++;}var id=(cov_2d8kk051wl.s[55]++,uuid_1.v4());var iframe=(cov_2d8kk051wl.s[56]++,this.createElement({id:id,source:source,style:style,attributes:attributes}));var targetElement=(cov_2d8kk051wl.s[57]++,target?(cov_2d8kk051wl.b[16][0]++,document.querySelector(target)):(cov_2d8kk051wl.b[16][1]++,document.body));cov_2d8kk051wl.s[58]++;if(targetElement==null){cov_2d8kk051wl.b[17][0]++;cov_2d8kk051wl.s[59]++;throw new Error('Cannot find target element in the DOM.');}else{cov_2d8kk051wl.b[17][1]++;}cov_2d8kk051wl.s[60]++;targetElement.appendChild(iframe);cov_2d8kk051wl.s[61]++;this.iframes.set(id,iframe);cov_2d8kk051wl.s[62]++;return id;};cov_2d8kk051wl.s[63]++;return IframeManager;}());cov_2d8kk051wl.s[64]++;exports.default=new IframeManager();

/***/ })

/******/ });
});