/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', () => {\n  $w('.main').append('<h1></h1>');\n  $w('h1').html('Studio Ghibli Search');\n  $w('h1').attr('style', 'color: #570202');\n  $w('.main').append('<section class=\"main-container\"></section>');\n  $w('.main').append('<button class=\"remove\">Remove Info</button>');\n  $w('.remove').on('click', () => location.reload());\n  $w('body').attr('style', 'background: url(\"https://awol.junkee.com/wp-content/uploads/2017/06/Screen-Shot-2017-06-02-at-11.52.28-AM-1.png\"); max-width: 99vw');\n\n  const categories = ['films', 'people', 'vehicles'];\n  for (let i = 0; i < categories.length; i++) {\n    $w('.main-container')\n      .append(`<button class=\"button ${categories[i]}\">${categories[i]}</button>`);\n  }\n\n  $w(`.films`).on('click', () => {\n    $w.ajax({\n      type: 'GET',\n      url: `https://ghibliapi.herokuapp.com/films`,\n      success: (response) => successHandler(response),\n    });\n  });\n\n  $w(`.people`).on('click', () => {\n    $w.ajax({\n      type: 'GET',\n      url: `https://ghibliapi.herokuapp.com/people`,\n      success: (response) => successHandler(response),\n    });\n  });\n\n  $w(`.vehicles`).on('click', () => {\n    $w.ajax({\n      type: 'GET',\n      url: `https://ghibliapi.herokuapp.com/vehicles`,\n      success: (response) => successHandler(response),\n    });\n  });\n});\n\nfunction successHandler(response) {\n  console.log('alive!');\n  \n  const json = JSON.parse(response);\n  \n  $w(`.main-container`).append(`<section class=\"info-dump\"></section>`);\n  $w('.info-dump').attr(\"style\", \"display: flex; flex-wrap: wrap; justify-content: space-evenly;\");\n  const infoDump = $w('.info-dump');\n  json.forEach((item) => {\n    for (const prop in item) {\n      if (prop === \"name\" || prop === \"title\") {\n        infoDump.append(`<div class=\"info ${prop}\">${item[prop]}</div>`);\n      }\n    }\n  });\n  $w('.info').attr(\"style\", \"width: 250px; padding: 20px; font-size: 25px\");\n}\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });