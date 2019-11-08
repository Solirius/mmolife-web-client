
interface GameState {
  players: Record<PlayerId, HexColor>,
  grid: Cell[][]
}

type HexColor = string;
type PlayerId = string;
type Cell = PlayerId | null;

const packet: GameState = {
  players: {
    "Bob": "ff00cc",
    "Jose": "00ffee",
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


class Game {

  private readonly ctx: CanvasRenderingContext2D;

  constructor(
    private readonly canvasEl: HTMLCanvasElement,
    private readonly grid: Grid,
    private readonly width: number,
    private readonly height: number
  ) {
    this.ctx = this.canvasEl.getContext("2d")!;
  }

  public init(): void {
    this.canvasEl.width = this.width;
    this.canvasEl.height = this.height;
  }

  public render(state: GameState): void {
    this.grid.render(this.ctx, state);
  }

}

class Grid {
  constructor(
    private readonly width: number,
    private readonly height: number
  ) {}

  public render(ctx: CanvasRenderingContext2D, state: GameState): void {
    this.drawBorder(ctx);

    const cellWidth = ctx.canvas.width / this.width;
    const cellHeight = ctx.canvas.height / this.height;

    this.drawCells(ctx, state, cellWidth, cellHeight);
    this.drawColumns(ctx, cellWidth);
    this.drawRows(ctx, cellHeight);
  }

  private drawBorder(ctx: CanvasRenderingContext2D): void {
    ctx.moveTo(0, 0);
    ctx.lineWidth = 4;
    ctx.lineTo(0, ctx.canvas.height);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
    ctx.lineTo(ctx.canvas.width, 0);
    ctx.lineTo(0, 0);
    ctx.stroke();
    ctx.lineWidth = 1;
  }

  private drawColumns(ctx: CanvasRenderingContext2D, cellWidth: number): void {
    for (let i = 1; i < this.width; i++) {
      const x = i * cellWidth;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, ctx.canvas.height);
      ctx.stroke();
    }
  }

  private drawRows(ctx: CanvasRenderingContext2D, cellHeight: number): void {
    for (let i = 1; i < this.height; i++) {
      const y = i * cellHeight;
      ctx.moveTo(0, y);
      ctx.lineTo(ctx.canvas.width, y);
      ctx.stroke();
    }
  }

  private drawCells(ctx: CanvasRenderingContext2D, state: GameState, cellWidth: number, cellHeight: number): void {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        const x = i * cellWidth;
        const y = j * cellHeight;
        const player = state.grid[j][i];

        if (player) {
          ctx.fillStyle = "#" + state.players[player];
          ctx.fillRect(x, y, cellWidth, cellHeight);
        }
      }
    }
  }
}

const game = new Game(
  document.getElementById("game") as HTMLCanvasElement,
  new Grid(packet.grid.length, packet.grid[0].length),
  window.innerWidth * 0.7,
  window.innerHeight * 0.7
);

game.init();

const ws = new WebSocket("ws://localhost:8081");

ws.onopen = () => {
  ws.send("New web client connected");
};

ws.onmessage = (event: any) => {
  const state = JSON.parse(event.data);
  requestAnimationFrame(() => game.render(state));
};
