module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/learn/[moduleId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/module-detail/module-content.js":
/*!****************************************************!*\
  !*** ./components/module-detail/module-content.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/mali/Desktop/Projects/Marvin Liyanage Portfolio/curyte01/components/module-detail/module-content.js\";\n\nfunction ModuleContent(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModuleContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZHVsZS1kZXRhaWwvbW9kdWxlLWNvbnRlbnQuanM/NTBiOSJdLCJuYW1lcyI6WyJNb2R1bGVDb250ZW50IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsc0JBQ0U7QUFBQSxjQUNHQSxLQUFLLENBQUNDO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNGLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tb2R1bGUtZGV0YWlsL21vZHVsZS1jb250ZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTW9kdWxlQ29udGVudChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlQ29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/module-detail/module-content.js\n");

/***/ }),

/***/ "./components/module-detail/module-logistics.js":
/*!******************************************************!*\
  !*** ./components/module-detail/module-logistics.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_module_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/module-data */ \"./lib/module-data.js\");\n\nvar _jsxFileName = \"/Users/mali/Desktop/Projects/Marvin Liyanage Portfolio/curyte01/components/module-detail/module-logistics.js\";\n\n\n\nfunction ModuleLogistics() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const moduleId = router.query.moduleId;\n  const module = Object(_lib_module_data__WEBPACK_IMPORTED_MODULE_2__[\"getModuleById\"])(moduleId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: \"\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"focus-within:\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: module.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModuleLogistics);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZHVsZS1kZXRhaWwvbW9kdWxlLWxvZ2lzdGljcy5qcz9lOWE0Il0sIm5hbWVzIjpbIk1vZHVsZUxvZ2lzdGljcyIsInJvdXRlciIsInVzZVJvdXRlciIsIm1vZHVsZUlkIiwicXVlcnkiLCJtb2R1bGUiLCJnZXRNb2R1bGVCeUlkIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxlQUFULEdBQTJCO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFRSxRQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRCxRQUE5QjtBQUNBLFFBQU1FLE1BQU0sR0FBR0Msc0VBQWEsQ0FBQ0gsUUFBRCxDQUE1QjtBQUVGLHNCQUNFO0FBQVMsYUFBUyxFQUFDLEVBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDZCQUNNO0FBQUEsa0JBQU9FLE1BQU0sQ0FBQ0U7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSSxlQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7QUFFY1AsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZHVsZS1kZXRhaWwvbW9kdWxlLWxvZ2lzdGljcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGdldE1vZHVsZUJ5SWQgfSBmcm9tICcuLi8uLi9saWIvbW9kdWxlLWRhdGEnXG5cbmZ1bmN0aW9uIE1vZHVsZUxvZ2lzdGljcygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBtb2R1bGVJZCA9IHJvdXRlci5xdWVyeS5tb2R1bGVJZDtcbiAgICBjb25zdCBtb2R1bGUgPSBnZXRNb2R1bGVCeUlkKG1vZHVsZUlkKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb2N1cy13aXRoaW46Jz5cbiAgICAgICAgICAgIDxzcGFuPnttb2R1bGUuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPScnPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHVsZUxvZ2lzdGljcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/module-detail/module-logistics.js\n");

/***/ }),

/***/ "./components/module-detail/module-summary.js":
/*!****************************************************!*\
  !*** ./components/module-detail/module-summary.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_module_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/module-data */ \"./lib/module-data.js\");\n\nvar _jsxFileName = \"/Users/mali/Desktop/Projects/Marvin Liyanage Portfolio/curyte01/components/module-detail/module-summary.js\";\n\n\n\nfunction ModuleSummary(props) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const moduleId = router.query.moduleId;\n  const module = Object(_lib_module_data__WEBPACK_IMPORTED_MODULE_2__[\"getModuleById\"])(moduleId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: module.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: '/' + module.image\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModuleSummary);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZHVsZS1kZXRhaWwvbW9kdWxlLXN1bW1hcnkuanM/ODE5YiJdLCJuYW1lcyI6WyJNb2R1bGVTdW1tYXJ5IiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtb2R1bGVJZCIsInF1ZXJ5IiwibW9kdWxlIiwiZ2V0TW9kdWxlQnlJZCIsInRpdGxlIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUMxQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUQsUUFBOUI7QUFDQSxRQUFNRSxNQUFNLEdBQUdDLHNFQUFhLENBQUNILFFBQUQsQ0FBNUI7QUFFRixzQkFDRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0E7QUFBQSxnQkFBS0UsTUFBTSxDQUFDRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBO0FBQUssU0FBRyxFQUFFLE1BQU1GLE1BQU0sQ0FBQ0c7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0FBRWNULDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tb2R1bGUtZGV0YWlsL21vZHVsZS1zdW1tYXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0TW9kdWxlQnlJZCB9IGZyb20gJy4uLy4uL2xpYi9tb2R1bGUtZGF0YSdcblxuZnVuY3Rpb24gTW9kdWxlU3VtbWFyeShwcm9wcykge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IG1vZHVsZUlkID0gcm91dGVyLnF1ZXJ5Lm1vZHVsZUlkO1xuICAgIGNvbnN0IG1vZHVsZSA9IGdldE1vZHVsZUJ5SWQobW9kdWxlSWQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9Jyc+XG4gICAgPGgxPnttb2R1bGUudGl0bGV9PC9oMT5cbiAgICA8aW1nIHNyYz17Jy8nICsgbW9kdWxlLmltYWdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVTdW1tYXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/module-detail/module-summary.js\n");

/***/ }),

/***/ "./lib/module-data.js":
/*!****************************!*\
  !*** ./lib/module-data.js ***!
  \****************************/
/*! exports provided: getFeaturedModules, getAllModules, getFilteredModules, getModuleById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeaturedModules\", function() { return getFeaturedModules; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllModules\", function() { return getAllModules; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilteredModules\", function() { return getFilteredModules; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getModuleById\", function() { return getModuleById; });\nconst MODULES = [{\n  id: 'e2',\n  title: 'Biology 2',\n  role: 'by Marvin Liyanage',\n  description: \"The Study Of Living Things\",\n  content: \"content content content content content content content content content content content content content content content\",\n  date: 'Published August 2021',\n  image: 'images/biology.jpeg',\n  tags: 'intermediate',\n  isFeatured: true\n}, {\n  id: 'e3',\n  title: 'Chemistry 2',\n  role: 'by Marvin Liyanage',\n  description: \"The study of matter, its properties, and its interactions.\",\n  content: \"content content content content content content content content content content content content content content content\",\n  date: 'Published August 2021',\n  image: 'images/chemistry.jpeg',\n  tags: 'intermediate',\n  isFeatured: true\n}, {\n  id: 'e4',\n  title: 'Physics 2',\n  role: 'by Marvin Liyanage',\n  description: \"The study of the natural laws of the universe.\",\n  content: \"content content content content content content content content content content content content content content content\",\n  date: 'Published August 2021',\n  image: 'images/physics.jpeg',\n  tags: 'physics',\n  isFeatured: true\n}];\nfunction getFeaturedModules() {\n  return MODULES.filter(modules => modules.isFeatured);\n}\nfunction getAllModules() {\n  return MODULES;\n}\nfunction getFilteredModules(dateFilter) {\n  const {\n    year,\n    month\n  } = dateFilter;\n  let filteredModules = MODULES.filter(card => {\n    const moduleDate = new Date(project.date);\n    return moduleDate.getFullYear() === year && moduleDate.getMonth() === month - 1;\n  });\n  return filteredProjects;\n}\nfunction getModuleById(id) {\n  return MODULES.find(module => module.id === id);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9kdWxlLWRhdGEuanM/YWU3NCJdLCJuYW1lcyI6WyJNT0RVTEVTIiwiaWQiLCJ0aXRsZSIsInJvbGUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJkYXRlIiwiaW1hZ2UiLCJ0YWdzIiwiaXNGZWF0dXJlZCIsImdldEZlYXR1cmVkTW9kdWxlcyIsImZpbHRlciIsIm1vZHVsZXMiLCJnZXRBbGxNb2R1bGVzIiwiZ2V0RmlsdGVyZWRNb2R1bGVzIiwiZGF0ZUZpbHRlciIsInllYXIiLCJtb250aCIsImZpbHRlcmVkTW9kdWxlcyIsImNhcmQiLCJtb2R1bGVEYXRlIiwiRGF0ZSIsInByb2plY3QiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZmlsdGVyZWRQcm9qZWN0cyIsImdldE1vZHVsZUJ5SWQiLCJmaW5kIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTUEsT0FBTyxHQUFHLENBRVo7QUFDQUMsSUFBRSxFQUFFLElBREo7QUFFQUMsT0FBSyxFQUFFLFdBRlA7QUFHQUMsTUFBSSxFQUFFLG9CQUhOO0FBSUFDLGFBQVcsRUFDVCw0QkFMRjtBQU1BQyxTQUFPLEVBQ0wseUhBUEY7QUFRQUMsTUFBSSxFQUFFLHVCQVJOO0FBU0FDLE9BQUssRUFBRSxxQkFUUDtBQVVBQyxNQUFJLEVBQUUsY0FWTjtBQVdBQyxZQUFVLEVBQUU7QUFYWixDQUZZLEVBZWQ7QUFDRVIsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGFBRlQ7QUFHRUMsTUFBSSxFQUFFLG9CQUhSO0FBSUVDLGFBQVcsRUFDVCw0REFMSjtBQU1FQyxTQUFPLEVBQ0wseUhBUEo7QUFRRUMsTUFBSSxFQUFFLHVCQVJSO0FBU0VDLE9BQUssRUFBRSx1QkFUVDtBQVVFQyxNQUFJLEVBQUUsY0FWUjtBQVdFQyxZQUFVLEVBQUU7QUFYZCxDQWZjLEVBNEJkO0FBQ0VSLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxXQUZUO0FBR0VDLE1BQUksRUFBRSxvQkFIUjtBQUlFQyxhQUFXLEVBQ1QsZ0RBTEo7QUFNRUMsU0FBTyxFQUNMLHlIQVBKO0FBUUVDLE1BQUksRUFBRSx1QkFSUjtBQVNFQyxPQUFLLEVBQUUscUJBVFQ7QUFVRUMsTUFBSSxFQUFFLFNBVlI7QUFXRUMsWUFBVSxFQUFFO0FBWGQsQ0E1QmMsQ0FBaEI7QUEyQ08sU0FBU0Msa0JBQVQsR0FBOEI7QUFDbkMsU0FBT1YsT0FBTyxDQUFDVyxNQUFSLENBQWdCQyxPQUFELElBQWFBLE9BQU8sQ0FBQ0gsVUFBcEMsQ0FBUDtBQUNEO0FBRU0sU0FBU0ksYUFBVCxHQUF5QjtBQUM5QixTQUFPYixPQUFQO0FBQ0Q7QUFFTSxTQUFTYyxrQkFBVCxDQUE0QkMsVUFBNUIsRUFBd0M7QUFDN0MsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBa0JGLFVBQXhCO0FBRUEsTUFBSUcsZUFBZSxHQUFHbEIsT0FBTyxDQUFDVyxNQUFSLENBQWdCUSxJQUFELElBQVU7QUFDN0MsVUFBTUMsVUFBVSxHQUFHLElBQUlDLElBQUosQ0FBU0MsT0FBTyxDQUFDaEIsSUFBakIsQ0FBbkI7QUFDQSxXQUFPYyxVQUFVLENBQUNHLFdBQVgsT0FBNkJQLElBQTdCLElBQXFDSSxVQUFVLENBQUNJLFFBQVgsT0FBMEJQLEtBQUssR0FBRyxDQUE5RTtBQUNELEdBSHFCLENBQXRCO0FBS0EsU0FBT1EsZ0JBQVA7QUFDRDtBQUVNLFNBQVNDLGFBQVQsQ0FBdUJ6QixFQUF2QixFQUEyQjtBQUNoQyxTQUFPRCxPQUFPLENBQUMyQixJQUFSLENBQWNDLE1BQUQsSUFBWUEsTUFBTSxDQUFDM0IsRUFBUCxLQUFjQSxFQUF2QyxDQUFQO0FBQ0QiLCJmaWxlIjoiLi9saWIvbW9kdWxlLWRhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNT0RVTEVTID0gW1xuXG4gICAge1xuICAgIGlkOiAnZTInLFxuICAgIHRpdGxlOiAnQmlvbG9neSAyJyxcbiAgICByb2xlOiAnYnkgTWFydmluIExpeWFuYWdlJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhlIFN0dWR5IE9mIExpdmluZyBUaGluZ3NcIixcbiAgICBjb250ZW50OlxuICAgICAgXCJjb250ZW50IGNvbnRlbnQgY29udGVudCBjb250ZW50IGNvbnRlbnQgY29udGVudCBjb250ZW50IGNvbnRlbnQgY29udGVudCBjb250ZW50IGNvbnRlbnQgY29udGVudCBjb250ZW50IGNvbnRlbnQgY29udGVudFwiLFxuICAgIGRhdGU6ICdQdWJsaXNoZWQgQXVndXN0IDIwMjEnLFxuICAgIGltYWdlOiAnaW1hZ2VzL2Jpb2xvZ3kuanBlZycsXG4gICAgdGFnczogJ2ludGVybWVkaWF0ZScsXG4gICAgaXNGZWF0dXJlZDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZTMnLFxuICAgIHRpdGxlOiAnQ2hlbWlzdHJ5IDInLFxuICAgIHJvbGU6ICdieSBNYXJ2aW4gTGl5YW5hZ2UnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGUgc3R1ZHkgb2YgbWF0dGVyLCBpdHMgcHJvcGVydGllcywgYW5kIGl0cyBpbnRlcmFjdGlvbnMuXCIsXG4gICAgY29udGVudDpcbiAgICAgIFwiY29udGVudCBjb250ZW50IGNvbnRlbnQgY29udGVudCBjb250ZW50IGNvbnRlbnQgY29udGVudCBjb250ZW50IGNvbnRlbnQgY29udGVudCBjb250ZW50IGNvbnRlbnQgY29udGVudCBjb250ZW50IGNvbnRlbnRcIixcbiAgICBkYXRlOiAnUHVibGlzaGVkIEF1Z3VzdCAyMDIxJyxcbiAgICBpbWFnZTogJ2ltYWdlcy9jaGVtaXN0cnkuanBlZycsXG4gICAgdGFnczogJ2ludGVybWVkaWF0ZScsXG4gICAgaXNGZWF0dXJlZDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZTQnLFxuICAgIHRpdGxlOiAnUGh5c2ljcyAyJyxcbiAgICByb2xlOiAnYnkgTWFydmluIExpeWFuYWdlJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhlIHN0dWR5IG9mIHRoZSBuYXR1cmFsIGxhd3Mgb2YgdGhlIHVuaXZlcnNlLlwiLFxuICAgIGNvbnRlbnQ6XG4gICAgICBcImNvbnRlbnQgY29udGVudCBjb250ZW50IGNvbnRlbnQgY29udGVudCBjb250ZW50IGNvbnRlbnQgY29udGVudCBjb250ZW50IGNvbnRlbnQgY29udGVudCBjb250ZW50IGNvbnRlbnQgY29udGVudCBjb250ZW50XCIsXG4gICAgZGF0ZTogJ1B1Ymxpc2hlZCBBdWd1c3QgMjAyMScsXG4gICAgaW1hZ2U6ICdpbWFnZXMvcGh5c2ljcy5qcGVnJyxcbiAgICB0YWdzOiAncGh5c2ljcycsXG4gICAgaXNGZWF0dXJlZDogdHJ1ZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGZWF0dXJlZE1vZHVsZXMoKSB7XG4gIHJldHVybiBNT0RVTEVTLmZpbHRlcigobW9kdWxlcykgPT4gbW9kdWxlcy5pc0ZlYXR1cmVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbE1vZHVsZXMoKSB7XG4gIHJldHVybiBNT0RVTEVTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyZWRNb2R1bGVzKGRhdGVGaWx0ZXIpIHtcbiAgY29uc3QgeyB5ZWFyLCBtb250aCB9ID0gZGF0ZUZpbHRlcjtcblxuICBsZXQgZmlsdGVyZWRNb2R1bGVzID0gTU9EVUxFUy5maWx0ZXIoKGNhcmQpID0+IHtcbiAgICBjb25zdCBtb2R1bGVEYXRlID0gbmV3IERhdGUocHJvamVjdC5kYXRlKTtcbiAgICByZXR1cm4gbW9kdWxlRGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmIG1vZHVsZURhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGggLSAxO1xuICB9KTtcblxuICByZXR1cm4gZmlsdGVyZWRQcm9qZWN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZHVsZUJ5SWQoaWQpIHtcbiAgcmV0dXJuIE1PRFVMRVMuZmluZCgobW9kdWxlKSA9PiBtb2R1bGUuaWQgPT09IGlkKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/module-data.js\n");

/***/ }),

/***/ "./pages/learn/[moduleId].js":
/*!***********************************!*\
  !*** ./pages/learn/[moduleId].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_module_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/module-data */ \"./lib/module-data.js\");\n/* harmony import */ var _components_module_detail_module_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/module-detail/module-summary */ \"./components/module-detail/module-summary.js\");\n/* harmony import */ var _components_module_detail_module_logistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/module-detail/module-logistics */ \"./components/module-detail/module-logistics.js\");\n/* harmony import */ var _components_module_detail_module_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/module-detail/module-content */ \"./components/module-detail/module-content.js\");\n\nvar _jsxFileName = \"/Users/mali/Desktop/Projects/Marvin Liyanage Portfolio/curyte01/pages/learn/[moduleId].js\";\n\n\n\n\n\n\n\n\nfunction ModuleDetailPage(props) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const moduleId = router.query.moduleId;\n  const module = Object(_lib_module_data__WEBPACK_IMPORTED_MODULE_3__[\"getModuleById\"])(moduleId);\n\n  if (!module) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"No Module Found\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_module_detail_module_summary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: module.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 20\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_module_detail_module_logistics__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_module_detail_module_content__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: module.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_module_detail_module_content__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: module.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_module_detail_module_content__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: module.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_module_detail_module_content__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: module.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModuleDetailPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sZWFybi9bbW9kdWxlSWRdLmpzPzg2NDIiXSwibmFtZXMiOlsiTW9kdWxlRGV0YWlsUGFnZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwibW9kdWxlSWQiLCJxdWVyeSIsIm1vZHVsZSIsImdldE1vZHVsZUJ5SWQiLCJ0aXRsZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDN0IsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFELFFBQTlCO0FBQ0EsUUFBTUUsTUFBTSxHQUFHQyxzRUFBYSxDQUFDSCxRQUFELENBQTVCOztBQUVBLE1BQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1Qsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIOztBQUVELHNCQUNJLHFFQUFDLDhDQUFEO0FBQUEsaUNBQVcscUVBQUMsZ0ZBQUQ7QUFBZSxXQUFLLEVBQUVBLE1BQU0sQ0FBQ0U7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFYLGVBQ0kscUVBQUMsa0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsZ0ZBQUQ7QUFBQSw2QkFDQTtBQUFBLGtCQUFJRixNQUFNLENBQUNHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUtJLHFFQUFDLGdGQUFEO0FBQUEsNkJBQ0E7QUFBQSxrQkFBSUgsTUFBTSxDQUFDRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFRSSxxRUFBQyxnRkFBRDtBQUFBLDZCQUNBO0FBQUEsa0JBQUlILE1BQU0sQ0FBQ0c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKLGVBV0kscUVBQUMsZ0ZBQUQ7QUFBQSw2QkFDQTtBQUFBLGtCQUFJSCxNQUFNLENBQUNHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSDs7QUFFY1QsK0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9sZWFybi9bbW9kdWxlSWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHsgZ2V0TW9kdWxlQnlJZCB9IGZyb20gJy4uLy4uL2xpYi9tb2R1bGUtZGF0YSdcbmltcG9ydCBNb2R1bGVTdW1tYXJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kdWxlLWRldGFpbC9tb2R1bGUtc3VtbWFyeSc7XG5pbXBvcnQgTW9kdWxlTG9naXN0aWNzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kdWxlLWRldGFpbC9tb2R1bGUtbG9naXN0aWNzJztcbmltcG9ydCBNb2R1bGVDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kdWxlLWRldGFpbC9tb2R1bGUtY29udGVudCc7XG5cbmZ1bmN0aW9uIE1vZHVsZURldGFpbFBhZ2UocHJvcHMpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IG1vZHVsZUlkID0gcm91dGVyLnF1ZXJ5Lm1vZHVsZUlkO1xuICAgIGNvbnN0IG1vZHVsZSA9IGdldE1vZHVsZUJ5SWQobW9kdWxlSWQpO1xuXG4gICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIDxwPk5vIE1vZHVsZSBGb3VuZDwvcD5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+IDxNb2R1bGVTdW1tYXJ5IHRpdGxlPXttb2R1bGUudGl0bGV9IC8+XG4gICAgICAgICAgICA8TW9kdWxlTG9naXN0aWNzIC8+XG4gICAgICAgICAgICA8TW9kdWxlQ29udGVudD5cbiAgICAgICAgICAgIDxwPnttb2R1bGUuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L01vZHVsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8TW9kdWxlQ29udGVudD5cbiAgICAgICAgICAgIDxwPnttb2R1bGUuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L01vZHVsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8TW9kdWxlQ29udGVudD5cbiAgICAgICAgICAgIDxwPnttb2R1bGUuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L01vZHVsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8TW9kdWxlQ29udGVudD5cbiAgICAgICAgICAgIDxwPnttb2R1bGUuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L01vZHVsZUNvbnRlbnQ+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVEZXRhaWxQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/learn/[moduleId].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });