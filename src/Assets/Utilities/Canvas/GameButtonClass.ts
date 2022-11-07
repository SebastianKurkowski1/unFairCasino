export default class GameButtonClass {
  public x1: number;

  public y1: number;

  public x2: number;

  public y2: number;

  public height: number;

  public width: number;

  public radius: number;

  public text: string;

  public buttonState: string;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    text: string,
    textColor: string,
    gameWidth: number,
  ) {
    this.x1 = x;
    this.y1 = y;
    this.x2 = this.x1 + width;
    this.y2 = this.y1 + height;
    this.height = height;
    this.width = width;
    this.radius = radius;
    this.text = text;
    this.createRoundedPath(ctx);
    ctx.stroke();
    ctx.fill();
    this.writeText(ctx, gameWidth, textColor);
    this.buttonState = 'initial';
  }

  createRoundedPath(
    ctx: CanvasRenderingContext2D,
  ): void {
    const x = this.x1;
    const y = this.y1;
    const { width } = this;
    const { height } = this;
    const { radius } = this;
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
  }

  writeText(
    ctx: CanvasRenderingContext2D,
    gameWidth: number,
    textColor: string,
  ) {
    const x = this.x1;
    const y = this.y1;
    const { height } = this;
    const { text } = this;
    ctx.fillStyle = textColor;
    ctx.textAlign = 'start';
    ctx.fillText(text, x + (0.5 * gameWidth) / 40, y + 0.7 * height);
  }

  mouseOver(x: number, y: number): boolean {
    return x >= this.x1 && x <= this.x2 && y >= this.y1 && y <= this.y2;
  }
}
