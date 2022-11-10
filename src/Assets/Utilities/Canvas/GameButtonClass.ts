import React from 'react';

export default class GameButtonClass {
  public name: string;

  public x1: number;

  public y1: number;

  public x2: number;

  public y2: number;

  public height: number;

  public width: number;

  public radius: number;

  public text: string;

  public buttonState: string;

  public wasClicked: boolean;

  public active: boolean;

  public stage: number;

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
    stage: number,

  ) {
    this.name = Math.round(x).toString() + Math.round(y).toString();
    this.x1 = Math.round(x);
    this.y1 = Math.round(y);
    this.x2 = this.x1 + Math.round(width);
    this.y2 = this.y1 + Math.round(height);
    this.height = Math.round(height);
    this.width = Math.round(width);
    this.radius = radius;
    this.text = text;
    this.createRoundedPath(ctx);
    ctx.stroke();
    ctx.fill();
    this.writeText(ctx, gameWidth, textColor);
    this.buttonState = 'initial';
    this.wasClicked = false;
    this.active = false;
    this.stage = stage;
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

  mouseOver(currentEvent: React.MouseEvent | undefined): boolean {
    if (currentEvent === undefined) return false;
    return currentEvent.nativeEvent.offsetX >= this.x1
        && currentEvent.nativeEvent.offsetX <= this.x2
        && currentEvent.nativeEvent.offsetY >= this.y1
        && currentEvent.nativeEvent.offsetY <= this.y2;
  }

  clicked(currentEvent: React.MouseEvent | undefined): boolean {
    if (currentEvent === undefined) return false;
    if (currentEvent.nativeEvent.offsetX >= this.x1
        && currentEvent.nativeEvent.offsetX <= this.x2
        && currentEvent.nativeEvent.offsetY >= this.y1
        && currentEvent.nativeEvent.offsetY <= this.y2
        && currentEvent.type === 'click') {
      this.wasClicked = true;
      return true;
    }
    return false;
  }

  checkIfActive(nameAndStage: object): boolean {
    console.log(nameAndStage);
    // @ts-ignore
    const filtered = nameAndStage.filter(
      (element) => (element.stage === this.stage && element.name === this.name),
    );
    return (filtered.length > 0);
  }
}
