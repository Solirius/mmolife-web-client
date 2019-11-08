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
    function Game(canvasEl) {
        this.canvasEl = canvasEl;
    }
    Game.prototype.render = function () {
        var ctx = this.canvasEl.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        ctx.stroke();
    };
    return Game;
}());
var game = new Game(document.getElementById("game"));
requestAnimationFrame(game.render.bind(game));
