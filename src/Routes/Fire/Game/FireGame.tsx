import React, {
  Dispatch, SetStateAction, useEffect, useRef, useState,
} from 'react';
import manageFireGame from './Functions/manageFireGame';
import { changeActiveButtons } from '../../../Assets/Utilities/Canvas/FireGame/buttonsSlice';
import { RootState } from '../../../store';
import GameButtonClass from '../../../Assets/Utilities/Canvas/GameButtonClass';
import { changeGameState } from '../../../Assets/Utilities/Canvas/gameStateSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';

function getClickedButton(buttonsState: GameButtonClass[]): GameButtonClass | null {
  const filteredButton = buttonsState.filter((button) => button.wasClicked);
  if (filteredButton.length > 0) {
    return filteredButton[0];
  }
  return null;
}

interface Props {
  setShowAlert: Dispatch<SetStateAction<boolean>>,
}

export default function FireGame({ setShowAlert }: Props) {
  const [currentEvent, setEvent] = useState<React.MouseEvent | undefined>(undefined);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonsState = useAppSelector((state: RootState) => state.buttons);
  const gameState = useAppSelector((state: RootState) => state.gameState);
  const stakeState = useAppSelector((state: RootState) => state.stake);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const gameButtons = manageFireGame(canvasRef, currentEvent, buttonsState, gameState);
    if (typeof gameButtons === 'boolean') return;
    dispatch(changeActiveButtons(JSON.stringify(gameButtons)));
    const clickedButton = getClickedButton(buttonsState);
    if (clickedButton === null) return;
    dispatch(changeGameState(clickedButton.action));
    if (clickedButton.action === 'start') {
      if (gameState.risk === '') {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }
    }

    // eslint-disable-next-line
  }, [currentEvent]);

  return (
    <canvas
      onClick={(event) => {
        setEvent(event);
      }}
      onMouseMove={(event) => {
        setEvent(event);
      }}
      ref={canvasRef}
      style={{ width: '100%', height: '100%' }}
      id="fireGame"
    />
  );
}
