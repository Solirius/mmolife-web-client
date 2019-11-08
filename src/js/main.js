var packet = {
    players: {
        "Bob": "ff00cc",
        "Jose": "00ffee"
    },
    grid: [
        ["Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null],
        [null, null, null, "Jose", null, null],
    ]
};
var Game = /** @class */ (function () {
    function Game(canvasEl, grid) {
        this.canvasEl = canvasEl;
        this.grid = grid;
    }
    Game.prototype.render = function () {
        // todo does this need to happen every tick
        // todo fps counter
        var ctx = this.canvasEl.getContext("2d");
        this.grid.render(ctx);
    };
    Game.prototype.init = function () {
        this.canvasEl.width = window.innerWidth - 50;
        this.canvasEl.height = window.innerHeight - 20;
    };
    return Game;
}());
var Grid = /** @class */ (function () {
    function Grid(width, height) {
        this.width = width;
        this.height = height;
    }
    Grid.prototype.render = function (ctx) {
        var cellWidth = ctx.canvas.width / this.width;
        for (var i = 0; i < this.width; i++) {
            var x = i * cellWidth;
            ctx.moveTo(Math.floor(x), 0);
            ctx.lineTo(Math.floor(x), ctx.canvas.height);
            ctx.stroke();
        }
        var cellHeight = ctx.canvas.height / this.height;
        for (var i = 0; i < this.height; i++) {
            var y = i * cellHeight;
            ctx.moveTo(0, Math.floor(y));
            ctx.lineTo(ctx.canvas.width, Math.floor(y));
            ctx.stroke();
        }
    };
    return Grid;
}());
var game = new Game(document.getElementById("game"), new Grid(40, 20));
game.init();
requestAnimationFrame(game.render.bind(game));
