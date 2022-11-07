import GameButtonClass from '../../../../../Assets/Utilities/Canvas/GameButtonClass';
import { defaultGameButtonInterface } from '../../../../../Assets/Interfaces/CanvasButtonInterface';

export default function fireGameButton(params: defaultGameButtonInterface) {
  const { ctx } = params;
  ctx.font = `${params.gameWidth / 60}px serif`;
  const text = ctx.measureText(params.buttonText);
  const buttonHeight = params.gameWidth / 50 + 10;
  const buttonWidth = text.width + params.gameWidth / 40;
  const radius = 10;
  ctx.fillStyle = params.backgroundColor;
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#241ca2';
  const fireGameButtonObject = new GameButtonClass(
    ctx,
    params.startingX,
    params.startingY,
    buttonWidth,
    buttonHeight,
    radius,
    params.buttonText,
    params.textColor,
    params.gameWidth,
  );

  if (fireGameButtonObject.mouseOver(params.mouseCoordinates.x, params.mouseCoordinates.y)) {
    ctx.fillStyle = '#221ba4';
    ctx.strokeStyle = '#241ca2';
    fireGameButtonObject.createRoundedPath(ctx);
    ctx.fill();
    ctx.stroke();
    fireGameButtonObject.writeText(
      ctx,
      params.gameWidth,
      'white',
    );
    fireGameButtonObject.buttonState = 'mouseOver';
  }

  return fireGameButtonObject;
}
