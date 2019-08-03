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

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ./helpers */ "./helpers.ts");
var Iframe = /** @class */ (function () {
    function Iframe(element, deleteFromList) {
        this.element = element;
        this.deleteFromList = deleteFromList;
    }
    Iframe.prototype.style = function (style) {
        if (!style || typeof style !== 'object' || Array.isArray(style)) {
            throw new Error("Style is expected to be an object, but got " + typeof style);
        }
        if (!document.body.contains(this.element)) {
            throw new Error('Iframe element is not in the dom.');
        }
        this.element.setAttribute('style', helpers_1.parseStyle(style));
    };
    Iframe.prototype.destroy = function () {
        if (!document.body.contains(this.element)) {
            throw new Error('Iframe element is not in the dom.');
        }
        this.element.parentNode.removeChild(this.element);
        this.deleteFromList(this);
    };
    return Iframe;
}());
exports.default = Iframe;


/***/ }),

/***/ "./IframeManager.ts":
/*!**************************!*\
  !*** ./IframeManager.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Iframe_1 = __importDefault(__webpack_require__(/*! ./Iframe */ "./Iframe.ts"));
var helpers_1 = __webpack_require__(/*! ./helpers */ "./helpers.ts");
var IframeManager = /** @class */ (function () {
    function IframeManager() {
        this.iframes = new Set();
    }
    IframeManager.prototype.createElement = function (_a) {
        var source = _a.source, style = _a.style, _b = _a.attributes, attributes = _b === void 0 ? {} : _b;
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', source);
        iframe.setAttribute('style', helpers_1.parseStyle(style));
        for (var attr in attributes) {
            if ({}.hasOwnProperty.call(attributes, attr)) {
                iframe.setAttribute(attr, attributes[attr]);
            }
        }
        return iframe;
    };
    IframeManager.prototype.deleteFromList = function (iframe) {
        this.iframes.delete(iframe);
    };
    IframeManager.prototype.inject = function (_a) {
        var source = _a.source, style = _a.style, attributes = _a.attributes, target = _a.target;
        if (!source || typeof source !== 'string') {
            throw new Error("Source property is expected to be a string, but got " + typeof source);
        }
        if (style && (typeof style !== 'object' || Array.isArray(style))) {
            throw new Error("Style property is expected to be an object, but got " + typeof style);
        }
        if (attributes && (typeof attributes !== 'object' || Array.isArray(attributes))) {
            throw new Error("Attributes property is expected to be an object, but got " + typeof attributes);
        }
        if (target && typeof target !== 'string') {
            throw new Error("Target property is expected to be a string, but got " + typeof target);
        }
        var iframeElement = this.createElement({ source: source, style: style, attributes: attributes });
        var targetElement = target ? document.querySelector(target) : document.body;
        if (targetElement == null) {
            throw new Error('Cannot find target element in the DOM.');
        }
        targetElement.appendChild(iframeElement);
        var iframe = new Iframe_1.default(iframeElement, this.deleteFromList.bind(this));
        this.iframes.add(iframe);
        return iframe;
    };
    return IframeManager;
}());
exports.default = IframeManager;


/***/ }),

/***/ "./helpers.ts":
/*!********************!*\
  !*** ./helpers.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function parseStyle(style) {
    function camelToKebab(string) {
        return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    }
    if (!style) {
        return '';
    }
    var rule = Object.keys(style).map(function (property) { return camelToKebab(property) + ": " + style[property] + ";"; });
    return rule.join('\n');
}
exports.parseStyle = parseStyle;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9JZnJhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vSWZyYW1lTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEscUVBQXVDO0FBRXZDO0lBSUUsZ0JBQVksT0FBb0IsRUFBRSxjQUF3QjtRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0JB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LFVBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztJQUNsRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsQ0FBQztBQVhELGdDQVdDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9JZnJhbWVNYW5hZ2VyLnRzXCIpO1xuIiwiaW1wb3J0IHsgcGFyc2VTdHlsZSB9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSB7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGRlbGV0ZUZyb21MaXN0OiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZGVsZXRlRnJvbUxpc3Q6IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmRlbGV0ZUZyb21MaXN0ID0gZGVsZXRlRnJvbUxpc3Q7XG4gIH1cblxuICBzdHlsZShzdHlsZTogb2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKCFzdHlsZSB8fCB0eXBlb2Ygc3R5bGUgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0eWxlIGlzIGV4cGVjdGVkIHRvIGJlIGFuIG9iamVjdCwgYnV0IGdvdCAke3R5cGVvZiBzdHlsZX1gKTtcbiAgICB9XG4gICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuZWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSWZyYW1lIGVsZW1lbnQgaXMgbm90IGluIHRoZSBkb20uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBwYXJzZVN0eWxlKHN0eWxlKSk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lmcmFtZSBlbGVtZW50IGlzIG5vdCBpbiB0aGUgZG9tLicpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5kZWxldGVGcm9tTGlzdCh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IElmcmFtZSBmcm9tICcuL0lmcmFtZSc7XG5pbXBvcnQgeyBwYXJzZVN0eWxlIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuaW50ZXJmYWNlIFNldHRpbmdzIHtcbiAgc291cmNlOiBzdHJpbmc7XG4gIHN0eWxlPzogb2JqZWN0O1xuICBhdHRyaWJ1dGVzPzogb2JqZWN0O1xuICB0YXJnZXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZU1hbmFnZXIge1xuICBpZnJhbWVzOiBTZXQ8SWZyYW1lPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlmcmFtZXMgPSBuZXcgU2V0KCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoeyBzb3VyY2UsIHN0eWxlLCBhdHRyaWJ1dGVzID0ge30gfTogeyBzb3VyY2U6IHN0cmluZywgc3R5bGU/OiBvYmplY3QsIGF0dHJpYnV0ZXM/OiBvYmplY3QgfSk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2UpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgcGFyc2VTdHlsZShzdHlsZSkpO1xuICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChhdHRyaWJ1dGVzLCBhdHRyKSkge1xuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWZyYW1lO1xuICB9XG5cbiAgZGVsZXRlRnJvbUxpc3QoaWZyYW1lOiBJZnJhbWUpOiB2b2lkIHtcbiAgICB0aGlzLmlmcmFtZXMuZGVsZXRlKGlmcmFtZSk7XG4gIH1cblxuICBpbmplY3Qoe1xuICAgIHNvdXJjZSwgc3R5bGUsIGF0dHJpYnV0ZXMsIHRhcmdldCxcbiAgfTogU2V0dGluZ3MpOiBJZnJhbWUge1xuICAgIGlmICghc291cmNlIHx8IHR5cGVvZiBzb3VyY2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFNvdXJjZSBwcm9wZXJ0eSBpcyBleHBlY3RlZCB0byBiZSBhIHN0cmluZywgYnV0IGdvdCAke3R5cGVvZiBzb3VyY2V9YCk7XG4gICAgfVxuICAgIGlmIChzdHlsZSAmJiAodHlwZW9mIHN0eWxlICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHN0eWxlKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3R5bGUgcHJvcGVydHkgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gb2JqZWN0LCBidXQgZ290ICR7dHlwZW9mIHN0eWxlfWApO1xuICAgIH1cbiAgICBpZiAoYXR0cmlidXRlcyAmJiAodHlwZW9mIGF0dHJpYnV0ZXMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoYXR0cmlidXRlcykpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZXMgcHJvcGVydHkgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gb2JqZWN0LCBidXQgZ290ICR7dHlwZW9mIGF0dHJpYnV0ZXN9YCk7XG4gICAgfVxuICAgIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGFyZ2V0IHByb3BlcnR5IGlzIGV4cGVjdGVkIHRvIGJlIGEgc3RyaW5nLCBidXQgZ290ICR7dHlwZW9mIHRhcmdldH1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBpZnJhbWVFbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgc291cmNlLCBzdHlsZSwgYXR0cmlidXRlcyB9KTtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0ID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogZG9jdW1lbnQuYm9keTtcblxuICAgIGlmICh0YXJnZXRFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgdGFyZ2V0IGVsZW1lbnQgaW4gdGhlIERPTS4nKTtcbiAgICB9XG5cbiAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGlmcmFtZUVsZW1lbnQpO1xuICAgIGNvbnN0IGlmcmFtZSA9IG5ldyBJZnJhbWUoaWZyYW1lRWxlbWVudCwgdGhpcy5kZWxldGVGcm9tTGlzdC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmlmcmFtZXMuYWRkKGlmcmFtZSk7XG4gICAgcmV0dXJuIGlmcmFtZTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3R5bGUoc3R5bGU6IE9iamVjdCk6IHN0cmluZyB7XG4gIGZ1bmN0aW9uIGNhbWVsVG9LZWJhYihzdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oW2EtejAtOV18KD89W0EtWl0pKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlmICghc3R5bGUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCBydWxlID0gT2JqZWN0LmtleXMoc3R5bGUpLm1hcChwcm9wZXJ0eSA9PiBgJHtjYW1lbFRvS2ViYWIocHJvcGVydHkpfTogJHtzdHlsZVtwcm9wZXJ0eV19O2ApO1xuICByZXR1cm4gcnVsZS5qb2luKCdcXG4nKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=