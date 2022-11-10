import React from 'react';

export interface DefaultGameButtonInterface {
  ctx: CanvasRenderingContext2D,
  startingX: number,
  startingY: number,
  gameWidth: number,
  gameHeight: number,
  buttonText: string,
  textColor: string,
  gameState: string,
  stage: number,
  backgroundColor: string,
  currentEvent: React.MouseEvent | undefined,
  necessaryButtonData: object,
}
