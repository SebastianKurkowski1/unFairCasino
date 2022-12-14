import GameData from '../../../Routes/Fire/Game/Const/GameData';

export default class TargetAreaClass {
  public x1: number;

  public x2: number;

  public y1: number;

  public y2: number;

  constructor(x: number, y: number, gameWidth: number, gameHeight: number) {
    this.x1 = x;
    this.x2 = this.x1 + GameData.targetArea.length * gameWidth;
    this.y1 = y;
    this.y2 = this.y1 + GameData.targetArea.height * gameHeight;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    //  setting styles for targetArea
    ctx.strokeStyle = GameData.targetArea.strokeStyle;
    ctx.lineWidth = GameData.targetArea.lineWidth;
    //  starting position
    ctx.moveTo(this.x1, this.y1);
    //  drawing target
    ctx.lineTo(this.x2, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.lineTo(this.x1, this.y2);
    ctx.lineTo(this.x1, this.y1);
    ctx.strokeStyle = '#241ca2';
    ctx.stroke();
  }
}
