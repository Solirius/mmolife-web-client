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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst packet = {\n    players: {\n        \"Bob\": \"ff00cc\",\n        \"Jose\": \"00ffee\",\n    },\n    grid: [\n        [\"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null],\n        [\"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null],\n        [\"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null],\n        [\"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null],\n        [\"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null],\n        [\"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null],\n        [\"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null],\n        [\"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null],\n        [null, null, \"Jose\", null, null, null, \"Bob\", null, null, null, null, null, null, null, null, \"Jose\", null, null, null, null, null, \"Jose\", null, null],\n    ]\n};\nclass Game {\n    constructor(canvasEl, grid, width, height) {\n        this.canvasEl = canvasEl;\n        this.grid = grid;\n        this.width = width;\n        this.height = height;\n        this.ctx = this.canvasEl.getContext(\"2d\");\n    }\n    init() {\n        this.canvasEl.width = this.width;\n        this.canvasEl.height = this.height;\n    }\n    render(state) {\n        this.grid.render(this.ctx, state);\n    }\n}\nclass Grid {\n    constructor(width, height) {\n        this.width = width;\n        this.height = height;\n    }\n    render(ctx, state) {\n        this.drawBorder(ctx);\n        const cellWidth = ctx.canvas.width / this.width;\n        const cellHeight = ctx.canvas.height / this.height;\n        this.drawCells(ctx, state, cellWidth, cellHeight);\n        this.drawColumns(ctx, cellWidth);\n        this.drawRows(ctx, cellHeight);\n    }\n    drawBorder(ctx) {\n        ctx.moveTo(0, 0);\n        ctx.lineWidth = 4;\n        ctx.lineTo(0, ctx.canvas.height);\n        ctx.lineTo(ctx.canvas.width, ctx.canvas.height);\n        ctx.lineTo(ctx.canvas.width, 0);\n        ctx.lineTo(0, 0);\n        ctx.stroke();\n        ctx.lineWidth = 1;\n    }\n    drawColumns(ctx, cellWidth) {\n        for (let i = 1; i < this.width; i++) {\n            const x = i * cellWidth;\n            ctx.moveTo(x, 0);\n            ctx.lineTo(x, ctx.canvas.height);\n            ctx.stroke();\n        }\n    }\n    drawRows(ctx, cellHeight) {\n        for (let i = 1; i < this.height; i++) {\n            const y = i * cellHeight;\n            ctx.moveTo(0, y);\n            ctx.lineTo(ctx.canvas.width, y);\n            ctx.stroke();\n        }\n    }\n    drawCells(ctx, state, cellWidth, cellHeight) {\n        for (let i = 0; i < this.width; i++) {\n            for (let j = 0; j < this.height; j++) {\n                const x = i * cellWidth;\n                const y = j * cellHeight;\n                const player = state.grid[j][i];\n                if (player) {\n                    ctx.fillStyle = \"#\" + state.players[player];\n                    ctx.fillRect(x, y, cellWidth, cellHeight);\n                }\n            }\n        }\n    }\n}\nconst game = new Game(document.getElementById(\"game\"), new Grid(packet.grid.length, packet.grid[0].length), window.innerWidth * 0.7, window.innerHeight * 0.7);\ngame.init();\nconst ws = new WebSocket(\"ws://localhost:8081\");\nws.onopen = () => {\n    ws.send(\"New web client connected\");\n};\nws.onmessage = (event) => {\n    const state = JSON.parse(event.data);\n    requestAnimationFrame(() => game.render(state));\n};\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });