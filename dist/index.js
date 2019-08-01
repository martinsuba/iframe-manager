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
/******/ 	return __webpack_require__(__webpack_require__.s = "./IframeManager.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Iframe.ts":
/*!*******************!*\
  !*** ./Iframe.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_x8iowjhbe=function(){var path="/Users/martinsuba/dev/learn/iframe-manager/source/Iframe.ts",hash="8bd6fc55f6828e0a9f21d2a0f8d81748b384874c",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/martinsuba/dev/learn/iframe-manager/source/Iframe.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:16},end:{line:3,column:36}},"2":{start:{line:4,column:28},end:{line:26,column:3}},"3":{start:{line:6,column:8},end:{line:6,column:31}},"4":{start:{line:7,column:8},end:{line:7,column:45}},"5":{start:{line:9,column:4},end:{line:17,column:6}},"6":{start:{line:10,column:8},end:{line:12,column:9}},"7":{start:{line:11,column:12},end:{line:11,column:90}},"8":{start:{line:13,column:8},end:{line:15,column:9}},"9":{start:{line:14,column:12},end:{line:14,column:65}},"10":{start:{line:16,column:8},end:{line:16,column:72}},"11":{start:{line:18,column:4},end:{line:24,column:6}},"12":{start:{line:19,column:8},end:{line:21,column:9}},"13":{start:{line:20,column:12},end:{line:20,column:65}},"14":{start:{line:22,column:8},end:{line:22,column:58}},"15":{start:{line:23,column:8},end:{line:23,column:34}},"16":{start:{line:25,column:4},end:{line:25,column:18}},"17":{start:{line:27,column:0},end:{line:27,column:25}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:28},end:{line:4,column:29}},loc:{start:{line:4,column:40},end:{line:26,column:1}},line:4},"1":{name:"Iframe",decl:{start:{line:5,column:13},end:{line:5,column:19}},loc:{start:{line:5,column:45},end:{line:8,column:5}},line:5},"2":{name:"(anonymous_2)",decl:{start:{line:9,column:29},end:{line:9,column:30}},loc:{start:{line:9,column:46},end:{line:17,column:5}},line:9},"3":{name:"(anonymous_3)",decl:{start:{line:18,column:31},end:{line:18,column:32}},loc:{start:{line:18,column:43},end:{line:24,column:5}},line:18}},branchMap:{"0":{loc:{start:{line:10,column:8},end:{line:12,column:9}},type:"if",locations:[{start:{line:10,column:8},end:{line:12,column:9}},{start:{line:10,column:8},end:{line:12,column:9}}],line:10},"1":{loc:{start:{line:10,column:12},end:{line:10,column:73}},type:"binary-expr",locations:[{start:{line:10,column:12},end:{line:10,column:18}},{start:{line:10,column:23},end:{line:10,column:48}},{start:{line:10,column:52},end:{line:10,column:72}}],line:10},"2":{loc:{start:{line:13,column:8},end:{line:15,column:9}},type:"if",locations:[{start:{line:13,column:8},end:{line:15,column:9}},{start:{line:13,column:8},end:{line:15,column:9}}],line:13},"3":{loc:{start:{line:19,column:8},end:{line:21,column:9}},type:"if",locations:[{start:{line:19,column:8},end:{line:21,column:9}},{start:{line:19,column:8},end:{line:21,column:9}}],line:19}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},f:{"0":0,"1":0,"2":0,"3":0},b:{"0":[0,0],"1":[0,0,0],"2":[0,0],"3":[0,0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_x8iowjhbe.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var helpers_1=(cov_x8iowjhbe.s[1]++,__webpack_require__(/*! ./helpers */ "./helpers.ts"));var Iframe=(cov_x8iowjhbe.s[2]++,function(){cov_x8iowjhbe.f[0]++;function Iframe(element,deleteFromList){cov_x8iowjhbe.f[1]++;cov_x8iowjhbe.s[3]++;this.element=element;cov_x8iowjhbe.s[4]++;this.deleteFromList=deleteFromList;}cov_x8iowjhbe.s[5]++;Iframe.prototype.style=function(style){cov_x8iowjhbe.f[2]++;cov_x8iowjhbe.s[6]++;if((cov_x8iowjhbe.b[1][0]++,!style)&&((cov_x8iowjhbe.b[1][1]++,typeof style!=='object')||(cov_x8iowjhbe.b[1][2]++,Array.isArray(style)))){cov_x8iowjhbe.b[0][0]++;cov_x8iowjhbe.s[7]++;throw new Error("Style is expected to be an object, but got "+typeof style);}else{cov_x8iowjhbe.b[0][1]++;}cov_x8iowjhbe.s[8]++;if(!document.body.contains(this.element)){cov_x8iowjhbe.b[2][0]++;cov_x8iowjhbe.s[9]++;throw new Error('Iframe element is not in the dom.');}else{cov_x8iowjhbe.b[2][1]++;}cov_x8iowjhbe.s[10]++;this.element.setAttribute('style',helpers_1.parseStyle(style));};cov_x8iowjhbe.s[11]++;Iframe.prototype.destroy=function(){cov_x8iowjhbe.f[3]++;cov_x8iowjhbe.s[12]++;if(!document.body.contains(this.element)){cov_x8iowjhbe.b[3][0]++;cov_x8iowjhbe.s[13]++;throw new Error('Iframe element is not in the dom.');}else{cov_x8iowjhbe.b[3][1]++;}cov_x8iowjhbe.s[14]++;this.element.parentNode.removeChild(this.element);cov_x8iowjhbe.s[15]++;this.deleteFromList(this);};cov_x8iowjhbe.s[16]++;return Iframe;}());cov_x8iowjhbe.s[17]++;exports.default=Iframe;

/***/ }),

/***/ "./IframeManager.ts":
/*!**************************!*\
  !*** ./IframeManager.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2amgoan4e8=function(){var path="/Users/martinsuba/dev/learn/iframe-manager/source/IframeManager.ts",hash="0b3f5a2126812645a3d04676e0ab90c048d19631",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/martinsuba/dev/learn/iframe-manager/source/IframeManager.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:15},end:{line:3,column:34}},"2":{start:{line:4,column:16},end:{line:4,column:36}},"3":{start:{line:5,column:35},end:{line:47,column:3}},"4":{start:{line:7,column:8},end:{line:7,column:33}},"5":{start:{line:9,column:4},end:{line:18,column:6}},"6":{start:{line:10,column:21},end:{line:10,column:30}},"7":{start:{line:10,column:40},end:{line:10,column:48}},"8":{start:{line:10,column:55},end:{line:10,column:68}},"9":{start:{line:10,column:83},end:{line:10,column:106}},"10":{start:{line:11,column:21},end:{line:11,column:53}},"11":{start:{line:12,column:8},end:{line:12,column:43}},"12":{start:{line:13,column:8},end:{line:13,column:66}},"13":{start:{line:14,column:8},end:{line:16,column:9}},"14":{start:{line:15,column:12},end:{line:15,column:56}},"15":{start:{line:17,column:8},end:{line:17,column:22}},"16":{start:{line:19,column:4},end:{line:21,column:6}},"17":{start:{line:20,column:8},end:{line:20,column:36}},"18":{start:{line:22,column:4},end:{line:45,column:6}},"19":{start:{line:23,column:21},end:{line:23,column:30}},"20":{start:{line:23,column:40},end:{line:23,column:48}},"21":{start:{line:23,column:63},end:{line:23,column:76}},"22":{start:{line:23,column:87},end:{line:23,column:96}},"23":{start:{line:24,column:8},end:{line:26,column:9}},"24":{start:{line:25,column:12},end:{line:25,column:100}},"25":{start:{line:27,column:8},end:{line:29,column:9}},"26":{start:{line:28,column:12},end:{line:28,column:99}},"27":{start:{line:30,column:8},end:{line:32,column:9}},"28":{start:{line:31,column:12},end:{line:31,column:109}},"29":{start:{line:33,column:8},end:{line:35,column:9}},"30":{start:{line:34,column:12},end:{line:34,column:100}},"31":{start:{line:36,column:28},end:{line:36,column:104}},"32":{start:{line:37,column:28},end:{line:37,column:83}},"33":{start:{line:38,column:8},end:{line:40,column:9}},"34":{start:{line:39,column:12},end:{line:39,column:70}},"35":{start:{line:41,column:8},end:{line:41,column:49}},"36":{start:{line:42,column:21},end:{line:42,column:88}},"37":{start:{line:43,column:8},end:{line:43,column:33}},"38":{start:{line:44,column:8},end:{line:44,column:22}},"39":{start:{line:46,column:4},end:{line:46,column:25}},"40":{start:{line:48,column:0},end:{line:48,column:32}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:5,column:35},end:{line:5,column:36}},loc:{start:{line:5,column:47},end:{line:47,column:1}},line:5},"1":{name:"IframeManager",decl:{start:{line:6,column:13},end:{line:6,column:26}},loc:{start:{line:6,column:29},end:{line:8,column:5}},line:6},"2":{name:"(anonymous_2)",decl:{start:{line:9,column:44},end:{line:9,column:45}},loc:{start:{line:9,column:58},end:{line:18,column:5}},line:9},"3":{name:"(anonymous_3)",decl:{start:{line:19,column:45},end:{line:19,column:46}},loc:{start:{line:19,column:63},end:{line:21,column:5}},line:19},"4":{name:"(anonymous_4)",decl:{start:{line:22,column:37},end:{line:22,column:38}},loc:{start:{line:22,column:51},end:{line:45,column:5}},line:22}},branchMap:{"0":{loc:{start:{line:10,column:83},end:{line:10,column:106}},type:"cond-expr",locations:[{start:{line:10,column:99},end:{line:10,column:101}},{start:{line:10,column:104},end:{line:10,column:106}}],line:10},"1":{loc:{start:{line:24,column:8},end:{line:26,column:9}},type:"if",locations:[{start:{line:24,column:8},end:{line:26,column:9}},{start:{line:24,column:8},end:{line:26,column:9}}],line:24},"2":{loc:{start:{line:24,column:12},end:{line:24,column:49}},type:"binary-expr",locations:[{start:{line:24,column:12},end:{line:24,column:19}},{start:{line:24,column:23},end:{line:24,column:49}}],line:24},"3":{loc:{start:{line:27,column:8},end:{line:29,column:9}},type:"if",locations:[{start:{line:27,column:8},end:{line:29,column:9}},{start:{line:27,column:8},end:{line:29,column:9}}],line:27},"4":{loc:{start:{line:27,column:12},end:{line:27,column:72}},type:"binary-expr",locations:[{start:{line:27,column:12},end:{line:27,column:17}},{start:{line:27,column:22},end:{line:27,column:47}},{start:{line:27,column:51},end:{line:27,column:71}}],line:27},"5":{loc:{start:{line:30,column:8},end:{line:32,column:9}},type:"if",locations:[{start:{line:30,column:8},end:{line:32,column:9}},{start:{line:30,column:8},end:{line:32,column:9}}],line:30},"6":{loc:{start:{line:30,column:12},end:{line:30,column:85}},type:"binary-expr",locations:[{start:{line:30,column:12},end:{line:30,column:22}},{start:{line:30,column:26},end:{line:30,column:56}},{start:{line:30,column:60},end:{line:30,column:85}}],line:30},"7":{loc:{start:{line:33,column:8},end:{line:35,column:9}},type:"if",locations:[{start:{line:33,column:8},end:{line:35,column:9}},{start:{line:33,column:8},end:{line:35,column:9}}],line:33},"8":{loc:{start:{line:33,column:12},end:{line:33,column:48}},type:"binary-expr",locations:[{start:{line:33,column:12},end:{line:33,column:18}},{start:{line:33,column:22},end:{line:33,column:48}}],line:33},"9":{loc:{start:{line:37,column:28},end:{line:37,column:83}},type:"cond-expr",locations:[{start:{line:37,column:37},end:{line:37,column:67}},{start:{line:37,column:70},end:{line:37,column:83}}],line:37},"10":{loc:{start:{line:38,column:8},end:{line:40,column:9}},type:"if",locations:[{start:{line:38,column:8},end:{line:40,column:9}},{start:{line:38,column:8},end:{line:40,column:9}}],line:38}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0,0],"5":[0,0],"6":[0,0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2amgoan4e8.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Iframe_1=(cov_2amgoan4e8.s[1]++,__webpack_require__(/*! ./Iframe */ "./Iframe.ts"));var helpers_1=(cov_2amgoan4e8.s[2]++,__webpack_require__(/*! ./helpers */ "./helpers.ts"));var IframeManager=(cov_2amgoan4e8.s[3]++,function(){cov_2amgoan4e8.f[0]++;function IframeManager(){cov_2amgoan4e8.f[1]++;cov_2amgoan4e8.s[4]++;this.iframes=new Set();}cov_2amgoan4e8.s[5]++;IframeManager.prototype.createElement=function(_a){cov_2amgoan4e8.f[2]++;var source=(cov_2amgoan4e8.s[6]++,_a.source),style=(cov_2amgoan4e8.s[7]++,_a.style),_b=(cov_2amgoan4e8.s[8]++,_a.attributes),attributes=(cov_2amgoan4e8.s[9]++,_b===void 0?(cov_2amgoan4e8.b[0][0]++,{}):(cov_2amgoan4e8.b[0][1]++,_b));var iframe=(cov_2amgoan4e8.s[10]++,document.createElement('iframe'));cov_2amgoan4e8.s[11]++;iframe.setAttribute('src',source);cov_2amgoan4e8.s[12]++;iframe.setAttribute('style',helpers_1.parseStyle(style));cov_2amgoan4e8.s[13]++;for(var attr in attributes){cov_2amgoan4e8.s[14]++;iframe.setAttribute(attr,attributes[attr]);}cov_2amgoan4e8.s[15]++;return iframe;};cov_2amgoan4e8.s[16]++;IframeManager.prototype.deleteFromList=function(iframe){cov_2amgoan4e8.f[3]++;cov_2amgoan4e8.s[17]++;this.iframes.delete(iframe);};cov_2amgoan4e8.s[18]++;IframeManager.prototype.inject=function(_a){cov_2amgoan4e8.f[4]++;var source=(cov_2amgoan4e8.s[19]++,_a.source),style=(cov_2amgoan4e8.s[20]++,_a.style),attributes=(cov_2amgoan4e8.s[21]++,_a.attributes),target=(cov_2amgoan4e8.s[22]++,_a.target);cov_2amgoan4e8.s[23]++;if((cov_2amgoan4e8.b[2][0]++,!source)||(cov_2amgoan4e8.b[2][1]++,typeof source!=='string')){cov_2amgoan4e8.b[1][0]++;cov_2amgoan4e8.s[24]++;throw new Error("Source property is expected to be a string, but got "+typeof source);}else{cov_2amgoan4e8.b[1][1]++;}cov_2amgoan4e8.s[25]++;if((cov_2amgoan4e8.b[4][0]++,style)&&((cov_2amgoan4e8.b[4][1]++,typeof style!=='object')||(cov_2amgoan4e8.b[4][2]++,Array.isArray(style)))){cov_2amgoan4e8.b[3][0]++;cov_2amgoan4e8.s[26]++;throw new Error("Style property is expected to be an object, but got "+typeof style);}else{cov_2amgoan4e8.b[3][1]++;}cov_2amgoan4e8.s[27]++;if((cov_2amgoan4e8.b[6][0]++,attributes)&&(cov_2amgoan4e8.b[6][1]++,typeof attributes!=='object')||(cov_2amgoan4e8.b[6][2]++,Array.isArray(attributes))){cov_2amgoan4e8.b[5][0]++;cov_2amgoan4e8.s[28]++;throw new Error("Attributes property is expected to be an object, but got "+typeof attributes);}else{cov_2amgoan4e8.b[5][1]++;}cov_2amgoan4e8.s[29]++;if((cov_2amgoan4e8.b[8][0]++,target)&&(cov_2amgoan4e8.b[8][1]++,typeof target!=='string')){cov_2amgoan4e8.b[7][0]++;cov_2amgoan4e8.s[30]++;throw new Error("Target property is expected to be a string, but got "+typeof target);}else{cov_2amgoan4e8.b[7][1]++;}var iframeElement=(cov_2amgoan4e8.s[31]++,this.createElement({source:source,style:style,attributes:attributes}));var targetElement=(cov_2amgoan4e8.s[32]++,target?(cov_2amgoan4e8.b[9][0]++,document.querySelector(target)):(cov_2amgoan4e8.b[9][1]++,document.body));cov_2amgoan4e8.s[33]++;if(targetElement==null){cov_2amgoan4e8.b[10][0]++;cov_2amgoan4e8.s[34]++;throw new Error('Cannot find target element in the DOM.');}else{cov_2amgoan4e8.b[10][1]++;}cov_2amgoan4e8.s[35]++;targetElement.appendChild(iframeElement);var iframe=(cov_2amgoan4e8.s[36]++,new Iframe_1.default(iframeElement,this.deleteFromList.bind(this)));cov_2amgoan4e8.s[37]++;this.iframes.add(iframe);cov_2amgoan4e8.s[38]++;return iframe;};cov_2amgoan4e8.s[39]++;return IframeManager;}());cov_2amgoan4e8.s[40]++;exports.default=IframeManager;

/***/ }),

/***/ "./helpers.ts":
/*!********************!*\
  !*** ./helpers.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_14ypat3p1m=function(){var path="/Users/martinsuba/dev/learn/iframe-manager/source/helpers.ts",hash="952285f0fea086eacf965189fddabaa984b25808",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/martinsuba/dev/learn/iframe-manager/source/helpers.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:5,column:8},end:{line:5,column:85}},"2":{start:{line:7,column:4},end:{line:9,column:5}},"3":{start:{line:8,column:8},end:{line:8,column:18}},"4":{start:{line:10,column:15},end:{line:10,column:124}},"5":{start:{line:10,column:60},end:{line:10,column:121}},"6":{start:{line:11,column:4},end:{line:11,column:27}},"7":{start:{line:13,column:0},end:{line:13,column:32}}},fnMap:{"0":{name:"parseStyle",decl:{start:{line:3,column:9},end:{line:3,column:19}},loc:{start:{line:3,column:27},end:{line:12,column:1}},line:3},"1":{name:"camelToKebab",decl:{start:{line:4,column:13},end:{line:4,column:25}},loc:{start:{line:4,column:34},end:{line:6,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:10,column:38},end:{line:10,column:39}},loc:{start:{line:10,column:58},end:{line:10,column:123}},line:10}},branchMap:{"0":{loc:{start:{line:7,column:4},end:{line:9,column:5}},type:"if",locations:[{start:{line:7,column:4},end:{line:9,column:5}},{start:{line:7,column:4},end:{line:9,column:5}}],line:7}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},f:{"0":0,"1":0,"2":0},b:{"0":[0,0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_14ypat3p1m.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});function parseStyle(style){cov_14ypat3p1m.f[0]++;function camelToKebab(string){cov_14ypat3p1m.f[1]++;cov_14ypat3p1m.s[1]++;return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,'$1-$2').toLowerCase();}cov_14ypat3p1m.s[2]++;if(!style){cov_14ypat3p1m.b[0][0]++;cov_14ypat3p1m.s[3]++;return'';}else{cov_14ypat3p1m.b[0][1]++;}var rule=(cov_14ypat3p1m.s[4]++,Object.keys(style).map(function(property){cov_14ypat3p1m.f[2]++;cov_14ypat3p1m.s[5]++;return camelToKebab(property)+": "+style[property]+";";}));cov_14ypat3p1m.s[6]++;return rule.join('\n');}cov_14ypat3p1m.s[7]++;exports.parseStyle=parseStyle;

/***/ })

/******/ });
});