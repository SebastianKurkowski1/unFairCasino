import fireGameButton from '../FireGameButton/fireGameButton';

export default function fireGameSettings(
  ctx: CanvasRenderingContext2D,
  startingX: number,
  startingY: number,
  gameWidth: number,
  gameHeight: number,
  gameState: string,
  mouseCoordinates: { x: number, y: number },
) {
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
    mouseCoordinates,
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
    mouseCoordinates,
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
    mouseCoordinates,
  }));

  gameButtonsObjects.forEach((button) => {
    if (button.buttonState === 'mouseOver') mouseOver = true;
  });

  return mouseOver;
}
