(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("d3-to-image", [], factory);
	else if(typeof exports === 'object')
		exports["d3-to-image"] = factory();
	else
		root["d3-to-image"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _svg2Image = __webpack_require__(1);

var _svg2Image2 = _interopRequireDefault(_svg2Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (svg2Image) {
  angular.module('ngD3ToImage', []).directive('d3ToImage', function () {

    var link = function link($scope, element) {
      $scope.export = function () {
        svg2Image({
          svg: element.find('svg').first()[0],
          tryToFix: $scope.tryToFix,
          callback: $scope.callback
        });
      };
    };

    return {
      restrict: 'E',
      link: link,
      scope: {
        export: '=',
        tryToFix: '=',
        callback: '='
      }
    };
  });
})(_svg2Image2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("svg-2-image",[],t):"object"==typeof exports?exports["svg-2-image"]=t():e["svg-2-image"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e){function t(e,t){var n=t.hasChildNodes()?t.children[0]:null,r=document.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=e,t.insertBefore(r,n)}function n(e){for(var t="",n=0;n<document.styleSheets.length;n++){var r=document.styleSheets[n];if(r.cssRules)for(var o=r.cssRules,i=0;i<o.length;i++)t+=o[i].cssText}return t}var r=e.svg.getBoundingClientRect();e.tryToFix&&(e.svg.setAttribute("width",r.width+"px"),e.svg.setAttribute("height",r.height+"px"),e.svg.setAttribute("style",""));var o=function(e){e.setAttribute("xlink","http://www.w3.org/1999/xlink"),t(n(e),e);var r=new XMLSerializer,o=r.serializeToString(e);return o=o.replace(/(\w+)?:?xlink=/g,"xmlns:xlink="),o=o.replace(/NS\d+:href/g,"xlink:href")}(e.svg);!function(e,t,n,r){var o=btoa(unescape(encodeURIComponent(e))),i="data:image/svg+xml;base64,"+o,a=document.createElement("canvas"),l=a.getContext("2d");a.width=t,a.height=n;var s=new Image;s.onload=function(){l.clearRect(0,0,t,n),l.drawImage(s,0,0,t,n),a.toBlob(function(e){r({blob:e,base64:o,base64ForSrc:i})})},s.src=i}(o,r.width,r.height,e.callback)}Object.defineProperty(t,"__esModule",{value:!0}),n(1),t.default=r,e.exports=t.default},function(e,t,n){var r;!function(o){"use strict";var i=o.HTMLCanvasElement&&o.HTMLCanvasElement.prototype,a=o.Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),l=a&&o.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}}(),s=o.BlobBuilder||o.WebKitBlobBuilder||o.MozBlobBuilder||o.MSBlobBuilder,u=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,c=(a||s)&&o.atob&&o.ArrayBuffer&&o.Uint8Array&&function(e){var t,n,r,o,i,c,f,d,b;if(!(t=e.match(u)))throw new Error("invalid data URI");for(n=t[2]?t[1]:"text/plain"+(t[3]||";charset=US-ASCII"),r=!!t[4],o=e.slice(t[0].length),i=r?atob(o):decodeURIComponent(o),c=new ArrayBuffer(i.length),f=new Uint8Array(c),d=0;d<i.length;d+=1)f[d]=i.charCodeAt(d);return a?new Blob([l?f:c],{type:n}):(b=new s,b.append(c),b.getBlob(n))};o.HTMLCanvasElement&&!i.toBlob&&(i.mozGetAsFile?i.toBlob=function(e,t,n){e(n&&i.toDataURL&&c?c(this.toDataURL(t,n)):this.mozGetAsFile("blob",t))}:i.toDataURL&&c&&(i.toBlob=function(e,t,n){e(c(this.toDataURL(t,n)))})),void 0!==(r=function(){return c}.call(t,n,t,e))&&(e.exports=r)}(window)}])});

/***/ })
/******/ ]);
});
//# sourceMappingURL=d3-to-image-ngDirective.js.map