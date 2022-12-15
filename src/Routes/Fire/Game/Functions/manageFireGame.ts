import React, { RefObject } from 'react';
import GameData from '../Const/GameData';
import targetArea from '../Elements/TargetArea/targetArea';
import drawDefaultGameTemplate from '../../../../Assets/Functions/drawDefaultGameTemplate';
import manageMiddleSection from './manageMiddleSection';
import fireGameSettings from '../Elements/FireGameSettings/fireGameSettings';
import GameButtonClass from '../../../../Assets/Utilities/Canvas/GameButtonClass';
import { GameStateInterface } from '../../../../Assets/Interfaces/GameStateInterface';

export default function manageFireGame(
  canvasRef: RefObject<HTMLCanvasElement>,
  currentEvent: React.MouseEvent | undefined,
  buttonsState: GameButtonClass[],
  gameState: GameStateInterface,
  accountBalance: number,
  stake: number,
): GameButtonClass[] | boolean {
  // setting canvas margin, fixing width and height

  const gameMargin = GameData.gameSettings.margin;
  if (canvasRef === null) return false;
  const canvas: HTMLCanvasElement | null = canvasRef.current;
  if (canvas === null) return false;
  const ctx = canvas.getContext('2d');
  if (ctx === null) return false;
  const canvasHeight = canvas.offsetHeight;
  const canvasWidth = canvas.offsetWidth;
  const gameHeight = canvasHeight - 2 * gameMargin;
  const gameWidth = canvasWidth - 2 * gameMargin;
  // clear canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawDefaultGameTemplate(canvasRef);

  // todo draw board
  const freeSpaceInARow = canvasWidth - (canvasWidth * GameData.targetArea.length * 4);
  const lengthOfSingleElement = canvasWidth * GameData.targetArea.length;
  const heightOfSingleElement = gameHeight * GameData.targetArea.height;
  let xStartingPosition = freeSpaceInARow / 2;
  let yStartingPosition = gameMargin;
  const targetsArray = [];
  for (let i = 0; i < 3; i += 1) {
    for (let k = 0; k < 4; k += 1) {
      targetsArray.push(
        targetArea(ctx, GameData, xStartingPosition, yStartingPosition, gameWidth, gameHeight),
      );
      xStartingPosition += lengthOfSingleElement;
    }
    yStartingPosition += heightOfSingleElement;
    xStartingPosition = freeSpaceInARow / 2;
  }

  // todo draw middle section
  yStartingPosition += 60;
  manageMiddleSection(ctx, yStartingPosition, canvasWidth, 'initial');
  // todo draw bottom section

  const fireGameSettingsData = fireGameSettings(
    ctx,
    xStartingPosition,
    yStartingPosition,
    canvasWidth,
    canvasHeight,
    'initial',
    currentEvent,
    buttonsState,
    stake,
  );
  ctx.font = `${gameWidth / 30}px serif`;
  ctx.fillStyle = '#3129a8';
  ctx.textBaseline = 'top';
  ctx.fillText(`${accountBalance.toFixed(2)}zł`, 20, gameHeight - 20);
  if (fireGameSettingsData.mouseOver) {
    document.body.style.cursor = 'pointer';
  } else document.body.style.cursor = 'default';

  return fireGameSettingsData.gameButtonsObjects;
}
