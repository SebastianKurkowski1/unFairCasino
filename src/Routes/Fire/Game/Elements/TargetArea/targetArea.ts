import { FireGameDataInterface } from '../../../../../Assets/Interfaces/FireGameDataInterface';
import TargetAreaClass from '../../../../../Assets/Utilities/Canvas/TargetAreaClass';

export default function targetArea(
  ctx: CanvasRenderingContext2D,
  GameData: FireGameDataInterface,
  startingX: number,
  startingY: number,
  gameWidth: number,
  gameHeight: number,
): TargetAreaClass {
  const TargetArea = new TargetAreaClass(startingX, startingY, gameWidth, gameHeight);
  TargetArea.draw(ctx);
  return TargetArea;
}
