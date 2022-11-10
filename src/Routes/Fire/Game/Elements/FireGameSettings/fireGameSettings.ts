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
  // create level of risk buttons
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
  }));

  gameButtonsObjects.forEach((button) => {
    if (button.buttonState === 'mouseOver') mouseOver = true;
  });

  return { mouseOver, gameButtonsObjects };
}
