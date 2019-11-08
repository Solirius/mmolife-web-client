import { GameState } from "./GameState";
import { GameInitEvent } from "./GameInitEvent";

export class Game {

  constructor(
    private readonly ctx: CanvasRenderingContext2D,
    private readonly initEvent: GameInitEvent
  ) {}

  public render(state: GameState): void {
    this.ctx.beginPath();

    const cellWidth = this.ctx.canvas.width / this.initEvent.config.width;
    const cellHeight = this.ctx.canvas.height / this.initEvent.config.height;

    this.drawCells(state, cellWidth, cellHeight);
    this.drawBorder();
    this.drawColumns(cellWidth);
    this.drawRows(cellHeight);
  }

  private drawBorder(): void {
    this.ctx.moveTo(0, 0);
    this.ctx.lineWidth = 4;
    this.ctx.lineTo(0, this.ctx.canvas.height);
    this.ctx.lineTo(this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.lineTo(this.ctx.canvas.width, 0);
    this.ctx.lineTo(0, 0);
    this.ctx.stroke();
  }

  private drawColumns(cellWidth: number): void {
    for (let i = 1; i < this.initEvent.config.width; i++) {
      const x = Math.floor(i * cellWidth) + 0.5;
      this.ctx.lineWidth = 1;
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.ctx.canvas.height);
      this.ctx.stroke();
    }
  }

  private drawRows(cellHeight: number): void {
    for (let i = 1; i < this.initEvent.config.height; i++) {
      const y = Math.floor(i * cellHeight) + 0.5;
      this.ctx.lineWidth = 1;
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.ctx.canvas.width, y);
      this.ctx.stroke();
    }
  }

  private drawCells(grid: GameState, cellWidth: number, cellHeight: number): void {
    for (let i = 0; i < this.initEvent.config.width; i++) {
      for (let j = 0; j < this.initEvent.config.height; j++) {
        const x = Math.floor(i * cellWidth) + 0.5;
        const y = Math.floor(j * cellHeight) + 0.5;
        const player = grid[j][i];

        if (player) {
          this.ctx.fillStyle = "#" + this.initEvent.players[player];
          this.ctx.fillRect(x, y, cellWidth, cellHeight);
        }
      }
    }
  }

  public getCells(e: MouseEvent): [number, number] {
    const rect = (e.target as any).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cellWidth = this.ctx.canvas.width / this.initEvent.config.width;
    const cellHeight = this.ctx.canvas.height / this.initEvent.config.height;

    const i = Math.floor(x / cellWidth);
    const j = Math.floor(y / cellHeight);

    return [j, i];
  }
}
