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
            iframe.setAttribute(attr, attributes[attr]);
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
        if (attributes && typeof attributes !== 'object' || Array.isArray(attributes)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9JZnJhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vSWZyYW1lTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEscUVBQXVDO0FBRXZDO0lBSUUsZ0JBQVksT0FBb0IsRUFBRSxjQUF3QjtRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0JB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QUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFYRCxnQ0FXQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vSWZyYW1lTWFuYWdlci50c1wiKTtcbiIsImltcG9ydCB7IHBhcnNlU3R5bGUgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZnJhbWUge1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBkZWxldGVGcm9tTGlzdDogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRlbGV0ZUZyb21MaXN0OiBGdW5jdGlvbikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5kZWxldGVGcm9tTGlzdCA9IGRlbGV0ZUZyb21MaXN0O1xuICB9XG5cbiAgc3R5bGUoc3R5bGU6IG9iamVjdCk6IHZvaWQge1xuICAgIGlmICghc3R5bGUgfHwgdHlwZW9mIHN0eWxlICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHN0eWxlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdHlsZSBpcyBleHBlY3RlZCB0byBiZSBhbiBvYmplY3QsIGJ1dCBnb3QgJHt0eXBlb2Ygc3R5bGV9YCk7XG4gICAgfVxuICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lmcmFtZSBlbGVtZW50IGlzIG5vdCBpbiB0aGUgZG9tLicpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgcGFyc2VTdHlsZShzdHlsZSkpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5lbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJZnJhbWUgZWxlbWVudCBpcyBub3QgaW4gdGhlIGRvbS4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMuZGVsZXRlRnJvbUxpc3QodGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCBJZnJhbWUgZnJvbSAnLi9JZnJhbWUnO1xuaW1wb3J0IHsgcGFyc2VTdHlsZSB9IGZyb20gJy4vaGVscGVycyc7XG5cbmludGVyZmFjZSBTZXR0aW5ncyB7XG4gIHNvdXJjZTogc3RyaW5nO1xuICBzdHlsZT86IG9iamVjdDtcbiAgYXR0cmlidXRlcz86IG9iamVjdDtcbiAgdGFyZ2V0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZnJhbWVNYW5hZ2VyIHtcbiAgaWZyYW1lczogU2V0PElmcmFtZT47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pZnJhbWVzID0gbmV3IFNldCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KHsgc291cmNlLCBzdHlsZSwgYXR0cmlidXRlcyA9IHt9IH06IHsgc291cmNlOiBzdHJpbmcsIHN0eWxlPzogb2JqZWN0LCBhdHRyaWJ1dGVzPzogb2JqZWN0IH0pOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsIHBhcnNlU3R5bGUoc3R5bGUpKTtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cmlidXRlcykge1xuICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIGlmcmFtZTtcbiAgfVxuXG4gIGRlbGV0ZUZyb21MaXN0KGlmcmFtZTogSWZyYW1lKTogdm9pZCB7XG4gICAgdGhpcy5pZnJhbWVzLmRlbGV0ZShpZnJhbWUpO1xuICB9XG5cbiAgaW5qZWN0KHsgc291cmNlLCBzdHlsZSwgYXR0cmlidXRlcywgdGFyZ2V0IH06IFNldHRpbmdzKTogSWZyYW1lIHtcbiAgICBpZiAoIXNvdXJjZSB8fCB0eXBlb2Ygc291cmNlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTb3VyY2UgcHJvcGVydHkgaXMgZXhwZWN0ZWQgdG8gYmUgYSBzdHJpbmcsIGJ1dCBnb3QgJHt0eXBlb2Ygc291cmNlfWApO1xuICAgIH1cbiAgICBpZiAoc3R5bGUgJiYgKHR5cGVvZiBzdHlsZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShzdHlsZSkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0eWxlIHByb3BlcnR5IGlzIGV4cGVjdGVkIHRvIGJlIGFuIG9iamVjdCwgYnV0IGdvdCAke3R5cGVvZiBzdHlsZX1gKTtcbiAgICB9XG4gICAgaWYgKGF0dHJpYnV0ZXMgJiYgdHlwZW9mIGF0dHJpYnV0ZXMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoYXR0cmlidXRlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlcyBwcm9wZXJ0eSBpcyBleHBlY3RlZCB0byBiZSBhbiBvYmplY3QsIGJ1dCBnb3QgJHt0eXBlb2YgYXR0cmlidXRlc31gKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUYXJnZXQgcHJvcGVydHkgaXMgZXhwZWN0ZWQgdG8gYmUgYSBzdHJpbmcsIGJ1dCBnb3QgJHt0eXBlb2YgdGFyZ2V0fWApO1xuICAgIH1cblxuICAgIGNvbnN0IGlmcmFtZUVsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBzb3VyY2UsIHN0eWxlLCBhdHRyaWJ1dGVzIH0pO1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSB0YXJnZXQgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiBkb2N1bWVudC5ib2R5O1xuXG4gICAgaWYgKHRhcmdldEVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCB0YXJnZXQgZWxlbWVudCBpbiB0aGUgRE9NLicpO1xuICAgIH1cblxuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoaWZyYW1lRWxlbWVudCk7XG4gICAgY29uc3QgaWZyYW1lID0gbmV3IElmcmFtZShpZnJhbWVFbGVtZW50LCB0aGlzLmRlbGV0ZUZyb21MaXN0LmJpbmQodGhpcykpO1xuICAgIHRoaXMuaWZyYW1lcy5hZGQoaWZyYW1lKTtcbiAgICByZXR1cm4gaWZyYW1lO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcGFyc2VTdHlsZShzdHlsZTogT2JqZWN0KTogc3RyaW5nIHtcbiAgZnVuY3Rpb24gY2FtZWxUb0tlYmFiKHN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbYS16MC05XXwoPz1bQS1aXSkpKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgaWYgKCFzdHlsZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IHJ1bGUgPSBPYmplY3Qua2V5cyhzdHlsZSkubWFwKHByb3BlcnR5ID0+IGAke2NhbWVsVG9LZWJhYihwcm9wZXJ0eSl9OiAke3N0eWxlW3Byb3BlcnR5XX07YCk7XG4gIHJldHVybiBydWxlLmpvaW4oJ1xcbicpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==