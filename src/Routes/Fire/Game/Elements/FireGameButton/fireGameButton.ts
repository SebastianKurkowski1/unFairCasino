import GameButtonClass from '../../../../../Assets/Utilities/Canvas/GameButtonClass';
import { DefaultGameButtonInterface } from '../../../../../Assets/Interfaces/CanvasButtonInterface';

export default function fireGameButton(params: DefaultGameButtonInterface) {
  const { ctx } = params;
  ctx.font = `${params.gameWidth / 60}px serif`;
  const text = ctx.measureText(params.buttonText);
  const buttonHeight = params.gameWidth / 50 + 10;
  const buttonWidth = text.width + params.gameWidth / 40;
  const radius = 10;
  ctx.textBaseline = 'alphabetic';
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
    params.stage,
    params.action,
  );
  if (params.currentEvent === undefined) return fireGameButtonObject;
  if (fireGameButtonObject.mouseOver(params.currentEvent)) {
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
  if (fireGameButtonObject.clicked(params.currentEvent)) {
    ctx.fillStyle = '#221ba4';
    ctx.strokeStyle = '#241ca2';
    fireGameButtonObject.createRoundedPath(ctx);
    ctx.fill();
    ctx.stroke();
    fireGameButtonObject.writeText(
      ctx,
      params.gameWidth,
      '#ffd000',
    );
  }

  if (fireGameButtonObject.checkIfActive(params.necessaryButtonData)) {
    ctx.fillStyle = '#221ba4';
    ctx.strokeStyle = '#241ca2';
    fireGameButtonObject.createRoundedPath(ctx);
    ctx.fill();
    ctx.stroke();
    fireGameButtonObject.writeText(
      ctx,
      params.gameWidth,
      '#ffd000',
    );
  }

  return fireGameButtonObject;
}
