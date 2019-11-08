var packet = {
    players: {
        "Bob": "ff00cc",
        "Jose": "00ffee"
    },
    grid: [
        ["Bob", null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null],
        ["Bob", null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null],
        ["Bob", null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null],
        ["Bob", null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null],
        ["Bob", null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null],
        ["Bob", null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null],
        ["Bob", null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null],
        ["Bob", null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, "Jose", null, null, null, "Bob", null, null, null, null, null],
        [null, null, "Jose", null, null, null, "Bob", null, null, null, null, null, null, null, null, "Jose", null, null, null, null, null, "Jose", null, null],
    ]
};
var Game = /** @class */ (function () {
    function Game(canvasEl, grid, width, height) {
        this.canvasEl = canvasEl;
        this.grid = grid;
        this.width = width;
        this.height = height;
        this.ctx = this.canvasEl.getContext("2d");
    }
    Game.prototype.init = function () {
        this.canvasEl.width = this.width;
        this.canvasEl.height = this.height;
    };
    Game.prototype.render = function (state) {
        this.grid.render(this.ctx, state);
    };
    return Game;
}());
var Grid = /** @class */ (function () {
    function Grid(width, height) {
        this.width = width;
        this.height = height;
    }
    Grid.prototype.render = function (ctx, state) {
        this.drawBorder(ctx);
        var cellWidth = ctx.canvas.width / this.width;
        var cellHeight = ctx.canvas.height / this.height;
        this.drawColumns(ctx, cellWidth);
        this.drawRows(ctx, cellHeight);
        this.drawCells(ctx, state, cellWidth, cellHeight);
    };
    Grid.prototype.drawBorder = function (ctx) {
        ctx.moveTo(0, 0);
        ctx.lineWidth = 4;
        ctx.lineTo(0, ctx.canvas.height);
        ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
        ctx.lineTo(ctx.canvas.width, 0);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.lineWidth = 1;
    };
    Grid.prototype.drawColumns = function (ctx, cellWidth) {
        for (var i = 1; i < this.width; i++) {
            var x = i * cellWidth;
            ctx.moveTo(x, 0);
            ctx.lineTo(x, ctx.canvas.height);
            ctx.stroke();
        }
    };
    Grid.prototype.drawRows = function (ctx, cellHeight) {
        for (var i = 1; i < this.height; i++) {
            var y = i * cellHeight;
            ctx.moveTo(0, y);
            ctx.lineTo(ctx.canvas.width, y);
            ctx.stroke();
        }
    };
    Grid.prototype.drawCells = function (ctx, state, cellWidth, cellHeight) {
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                var x = i * cellWidth;
                var y = j * cellHeight;
                var player = state.grid[j][i];
                if (player) {
                    ctx.fillStyle = "#" + state.players[player];
                    ctx.fillRect(x, y, cellWidth, cellHeight);
                }
            }
        }
    };
    return Grid;
}());
var game = new Game(document.getElementById("game"), new Grid(packet.grid.length, packet.grid[0].length), window.innerWidth * 0.7, window.innerHeight * 0.7);
game.init();
requestAnimationFrame(game.render.bind(game, packet));
