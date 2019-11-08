import { Game } from "./Game";

const ws = new WebSocket("ws://localhost:8081");
const canvasEl = document.getElementById("game") as HTMLCanvasElement;
const ctx = canvasEl.getContext("2d")!;

ws.onopen = () => {
  ws.send("New web client connected");
};

let game: Game;

ws.onmessage = (event: any) => {
  const state = JSON.parse(event.data);

  // new game
  if (state.config) {
    canvasEl.width = window.innerWidth * 0.7;
    canvasEl.height = window.innerHeight * 0.7;

    game = new Game(ctx, state);
  }
  else {
    requestAnimationFrame(() => {
      game && game.render(state)
    });
  }
};
