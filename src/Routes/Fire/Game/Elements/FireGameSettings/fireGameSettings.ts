import React from 'react';
import fireGameButton from '../FireGameButton/fireGameButton';
import GameButtonClass from '../../../../../Assets/Utilities/Canvas/GameButtonClass';
import extractValuableButtonsData from '../../../../../Assets/Utilities/Canvas/extractValuableButtonsData';

export default function fireGameSettings(
  ctx: CanvasRenderingContext2D,
  startingX: number,
  startingY: number,
  gameWidth: number,
  gameHeight: number,
  gameState: string,
  currentEvent: React.MouseEvent | undefined,
  buttonsState: GameButtonClass[],
) {
  const activeButtonsNameAndStage = extractValuableButtonsData(buttonsState);
  const gameButtonsObjects = [];
  let mouseOver = false;
  let y = startingY;
  let x = startingX;
  y += 50;
  // create  risk buttons
  gameButtonsObjects.push(fireGameButton({
    ctx,
    startingX: x,
    startingY: y,
    gameWidth,
    gameHeight,
    buttonText: 'Low',
    textColor: 'white',
    gameState,
    backgroundColor: '#140f5d',
    currentEvent,
    necessaryButtonData: activeButtonsNameAndStage,
    stage: 1,
    action: 'low',
  }));
  x += gameButtonsObjects[0].width + 20;
  gameButtonsObjects.push(fireGameButton({
    ctx,
    startingX: x,
    startingY: y,
    gameWidth,
    gameHeight,
    buttonText: 'Moderate',
    textColor: 'white',
    gameState,
    backgroundColor: '#140f5d',
    currentEvent,
    necessaryButtonData: activeButtonsNameAndStage,
    stage: 1,
    action: 'medium',
  }));
  x += gameButtonsObjects[1].width + 20;
  gameButtonsObjects.push(fireGameButton({
    ctx,
    startingX: x,
    startingY: y,
    gameWidth,
    gameHeight,
    buttonText: 'HIGH',
    textColor: 'white',
    gameState,
    backgroundColor: '#140f5d',
    currentEvent,
    necessaryButtonData: activeButtonsNameAndStage,
    stage: 1,
    action: 'high',
  }));
  x += gameButtonsObjects[2].width;
  // create stake section
  y += 100;
  gameButtonsObjects.push(fireGameButton({
    ctx,
    startingX,
    startingY: y,
    gameWidth,
    gameHeight,
    buttonText: '-',
    textColor: 'white',
    gameState,
    backgroundColor: '#140f5d',
    currentEvent,
    necessaryButtonData: activeButtonsNameAndStage,
    stage: 2,
    action: '-',
  }));

  x -= gameButtonsObjects[3].width + 7;
  gameButtonsObjects.push(fireGameButton({
    ctx,
    startingX: x,
    startingY: y,
    gameWidth,
    gameHeight,
    buttonText: '+',
    textColor: 'white',
    gameState,
    backgroundColor: '#140f5d',
    currentEvent,
    necessaryButtonData: activeButtonsNameAndStage,
    stage: 2,
    action: '+',
  }));
  y += gameButtonsObjects[4].height / 2;
  x += gameButtonsObjects[4].width;
  const currentCenterX = (x - startingX) / 2 + startingX;
  ctx.font = `${gameWidth / 40}px serif`;
  ctx.fillStyle = '#3129a8';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.fillText('990.00 zł', currentCenterX, y);
  ctx.font = `${gameWidth / 60}px serif`;
  const textLength = ctx.measureText('Bet');
  y += 50;
  gameButtonsObjects.push(fireGameButton({
    ctx,
    startingX: currentCenterX - textLength.width,
    startingY: y,
    gameWidth,
    gameHeight,
    buttonText: 'Bet',
    textColor: 'white',
    gameState,
    backgroundColor: '#140f5d',
    currentEvent,
    necessaryButtonData: activeButtonsNameAndStage,
    stage: 3,
    action: 'start',
  }));

  gameButtonsObjects.forEach((button) => {
    if (button.buttonState === 'mouseOver') mouseOver = true;
  });

  return { mouseOver, gameButtonsObjects };
}
