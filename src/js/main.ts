
const packet = {
  players: {
    "Bob": "ff00cc",
    "Jose": "00ffee",
  },
  grid: [
    ["Bob", null, null, null, null, null],
    [null, null, "Jose", null, null, null],
    [null, null, null, "Jose", null, null],
  ]
};


class Game {

  constructor(
    public readonly canvasEl: HTMLCanvasElement
  ) {}

  public render() {
    const ctx = this.canvasEl.getContext("2d")!;
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  }

}

const game = new Game(document.getElementById("game") as HTMLCanvasElement);

requestAnimationFrame(game.render.bind(game));