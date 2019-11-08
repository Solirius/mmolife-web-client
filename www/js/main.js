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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Game {\n    constructor(ctx, initEvent) {\n        this.ctx = ctx;\n        this.initEvent = initEvent;\n    }\n    render(state) {\n        this.ctx.beginPath();\n        const cellWidth = this.ctx.canvas.width / this.initEvent.config.width;\n        const cellHeight = this.ctx.canvas.height / this.initEvent.config.height;\n        this.drawCells(state, cellWidth, cellHeight);\n        this.drawBorder();\n        this.drawColumns(cellWidth);\n        this.drawRows(cellHeight);\n    }\n    drawBorder() {\n        this.ctx.moveTo(0, 0);\n        this.ctx.lineWidth = 4;\n        this.ctx.lineTo(0, this.ctx.canvas.height);\n        this.ctx.lineTo(this.ctx.canvas.width, this.ctx.canvas.height);\n        this.ctx.lineTo(this.ctx.canvas.width, 0);\n        this.ctx.lineTo(0, 0);\n        this.ctx.stroke();\n    }\n    drawColumns(cellWidth) {\n        for (let i = 1; i < this.initEvent.config.width; i++) {\n            const x = Math.floor(i * cellWidth) + 0.5;\n            this.ctx.lineWidth = 1;\n            this.ctx.moveTo(x, 0);\n            this.ctx.lineTo(x, this.ctx.canvas.height);\n            this.ctx.stroke();\n        }\n    }\n    drawRows(cellHeight) {\n        for (let i = 1; i < this.initEvent.config.height; i++) {\n            const y = Math.floor(i * cellHeight) + 0.5;\n            this.ctx.lineWidth = 1;\n            this.ctx.moveTo(0, y);\n            this.ctx.lineTo(this.ctx.canvas.width, y);\n            this.ctx.stroke();\n        }\n    }\n    drawCells(grid, cellWidth, cellHeight) {\n        for (let i = 0; i < this.initEvent.config.width; i++) {\n            for (let j = 0; j < this.initEvent.config.height; j++) {\n                const x = Math.floor(i * cellWidth) + 0.5;\n                const y = Math.floor(j * cellHeight) + 0.5;\n                const player = grid[j][i];\n                if (player) {\n                    this.ctx.fillStyle = \"#\" + this.initEvent.players[player];\n                    this.ctx.fillRect(x, y, cellWidth, cellHeight);\n                }\n            }\n        }\n    }\n    getCells(e) {\n        const rect = e.target.getBoundingClientRect();\n        const x = e.clientX - rect.left;\n        const y = e.clientY - rect.top;\n        const cellWidth = this.ctx.canvas.width / this.initEvent.config.width;\n        const cellHeight = this.ctx.canvas.height / this.initEvent.config.height;\n        const i = Math.floor(x / cellWidth);\n        const j = Math.floor(y / cellHeight);\n        return [j, i];\n    }\n}\nexports.Game = Game;\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Game_1 = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\nconst ws = new WebSocket(\"ws://localhost:8081\");\nconst canvasEl = document.getElementById(\"game\");\nconst ctx = canvasEl.getContext(\"2d\");\nws.onopen = () => {\n    //ws.send(\"New web client connected\");\n};\nlet game;\nws.onmessage = (event) => {\n    const state = JSON.parse(event.data);\n    // new game\n    if (state.config) {\n        canvasEl.width = window.innerWidth * 0.7;\n        canvasEl.height = window.innerHeight * 0.7;\n        game = new Game_1.Game(ctx, state);\n    }\n    else {\n        requestAnimationFrame(() => {\n            game && game.render(state);\n        });\n    }\n};\ncanvasEl.addEventListener(\"click\", e => {\n    if (game) {\n        const coords = game.getCells(e);\n        ws.send(JSON.stringify(coords));\n    }\n}, false);\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });