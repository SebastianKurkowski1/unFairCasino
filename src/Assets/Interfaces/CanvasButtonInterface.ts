export interface defaultGameButtonInterface {
  ctx: CanvasRenderingContext2D,
  startingX: number,
  startingY: number,
  gameWidth: number,
  gameHeight: number,
  buttonText: string,
  textColor: string,
  gameState: string,
  backgroundColor: string,
  mouseCoordinates: { x: number, y: number }
}
