
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
    private readonly canvasEl: HTMLCanvasElement,
    private readonly grid: Grid,
  ) {}

  public render(): void {
    // todo does this need to happen every tick
    // todo fps counter
    const ctx: CanvasRenderingContext2D = this.canvasEl.getContext("2d")!;

    this.grid.render(ctx);
  }

  public init(): void {
    this.canvasEl.width = window.innerWidth - 50;
    this.canvasEl.height = window.innerHeight - 20;
  }

}

class Grid {
  constructor(
    private readonly width: number,
    private readonly height: number
  ) {}

  public render(ctx: CanvasRenderingContext2D): void {
    const cellWidth = ctx.canvas.width / this.width;

    for (let i = 0; i < this.width; i++) {
      const x = i * cellWidth;
      ctx.moveTo(Math.floor(x), 0);
      ctx.lineTo(Math.floor(x), ctx.canvas.height);
      ctx.stroke();
    }

    const cellHeight = ctx.canvas.height / this.height;

    for (let i = 0; i < this.height; i++) {
      const y = i * cellHeight;
      ctx.moveTo(0, Math.floor(y));
      ctx.lineTo(ctx.canvas.width, Math.floor(y));
      ctx.stroke();
    }

  }
}

const game = new Game(
  document.getElementById("game") as HTMLCanvasElement,
  new Grid(40, 20)
);

game.init();

requestAnimationFrame(game.render.bind(game));