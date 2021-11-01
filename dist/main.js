/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

eval("\n\nconst alphabet = [\n  \"a\",\n  \"b\",\n  \"c\",\n  \"d\",\n  \"e\",\n  \"f\",\n  \"g\",\n  \"h\",\n  \"i\",\n  \"j\",\n  \"k\",\n  \"l\",\n  \"m\",\n  \"n\",\n  \"o\",\n  \"p\",\n  \"q\",\n  \"r\",\n  \"s\",\n  \"t\",\n  \"u\",\n  \"v\",\n  \"w\",\n  \"x\",\n  \"y\",\n  \"z\",\n];\n\nfunction capitalize(string) {\n  if (typeof string === \"string\" && !/\\d/.test(string[0])) {\n    const stringLower = string.toLowerCase();\n    return stringLower[0].toUpperCase() + stringLower.slice(1);\n  } else {\n    throw new Error(\"error\");\n  }\n}\n\nfunction reverseString(string) {\n  if (!string) return \"\";\n  if (typeof string === \"number\") throw new Error(\"error\");\n  const arr = string.split(\"\");\n  arr.reverse();\n  return arr.join(\"\");\n}\n\n// export default class Calculator {\n//   add(a, b) {\n//     return a + b;\n//   }\n\n//   subtract(a, b) {\n//     return a - b;\n//   }\n\n//   multiply(a, b) {\n//     return a * b;\n//   }\n\n//   divide(a, b) {\n//     if (b === 0) throw new Error(\"div by 0 not allowed\");\n//     return a / b;\n//   }\n// }\n\n// const calc = new Calculator();\n\nconst caesarCipher = function (string, key) {\n  const cipher = [];\n  for (let i = 0; i < string.length; i++) {\n    let index = alphabet.indexOf(string[i]);\n    cipher.push(alphabet[(index + key) % 26]);\n  }\n  return cipher.join(\"\");\n};\nconsole.log(caesarCipher(\"hello\", 5));\n\n// export { Calculator };\nmodule.exports = capitalize;\nmodule.exports = reverseString;\n// module.exports = calc;\nmodule.exports = caesarCipher;\n\n\n//# sourceURL=webpack://testing-practice/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;