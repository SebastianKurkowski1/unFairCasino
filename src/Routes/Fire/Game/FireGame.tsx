import React, {
  Dispatch, SetStateAction, useEffect, useRef, useState,
} from 'react';
import manageFireGame from './Functions/manageFireGame';
import { changeActiveButtons } from '../../../Assets/Utilities/Canvas/FireGame/buttonsSlice';
import { changeStakeReducer } from '../../../Assets/Utilities/Canvas/gameStakeSlice';
import { RootState } from '../../../store';
import GameButtonClass from '../../../Assets/Utilities/Canvas/GameButtonClass';
import { changeGameState } from '../../../Assets/Utilities/Canvas/gameStateSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { accountBalanceReducer } from '../../../Assets/Utilities/Canvas/accountBalanceSlice';

function getClickedButton(gameButtons: GameButtonClass[]): GameButtonClass | null {
  const filteredButton = gameButtons.filter((button) => button.wasClicked);
  if (filteredButton.length > 0) {
    return filteredButton[0];
  }
  return null;
}

interface Props {
  setAlertMessage: Dispatch<SetStateAction<string>>,
}

export default function FireGame({ setAlertMessage }: Props) {
  const [currentEvent, setEvent] = useState<React.MouseEvent | undefined>(undefined);
  const [gameButtons, setGameButtons] = useState<boolean | GameButtonClass[]>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonsState = useAppSelector((state: RootState) => state.buttons);
  const gameState = useAppSelector((state: RootState) => state.gameState);
  const stakeState = useAppSelector((state: RootState) => state.stake);
  const accountBalanceState = useAppSelector((state: RootState) => state.accountBalance);
  const dispatch = useAppDispatch();

  // initial render
  useEffect(() => {
    setGameButtons(manageFireGame(
      canvasRef,
      currentEvent,
      buttonsState,
      gameState,
      accountBalanceState,
      stakeState,
    ));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    manageFireGame(
      canvasRef,
      currentEvent,
      buttonsState,
      gameState,
      accountBalanceState,
      stakeState,
    );
    // eslint-disable-next-line
  }, [stakeState, accountBalanceState]);

  useEffect(() => {
    // todo make game rerender after detecting click
    if (typeof gameButtons === 'boolean') return;
    dispatch(changeActiveButtons(JSON.stringify(gameButtons)));
    const actualButtons = manageFireGame(
      canvasRef,
      currentEvent,
      buttonsState,
      gameState,
      accountBalanceState,
      stakeState,
    );
    let clickedButton = null;
    if (currentEvent?.type === 'click' && typeof actualButtons !== 'boolean') {
      clickedButton = getClickedButton(actualButtons);
      setGameButtons(actualButtons);
    }
    if (clickedButton === null) return;
    dispatch(changeGameState(clickedButton.action));
    dispatch(changeStakeReducer(clickedButton.action));
    if (clickedButton.action === 'start') {
      if (gameState.risk === '') {
        setAlertMessage('You have to choose difficulty level before going further');
        return;
      }
      if (accountBalanceState < stakeState) {
        setAlertMessage('You do not have enough money to cover your bet');
        return;
      }
      setAlertMessage('');
      dispatch(accountBalanceReducer(JSON.stringify({ action: '-', amount: stakeState })));
    }
    // eslint-disable-next-line
  }, [currentEvent]);

  return (
    <canvas
      onMouseMove={(event) => {
        setEvent(event);
      }}
      onClickCapture={(event) => {
        setEvent(event);
      }}
      ref={canvasRef}
      style={{ width: '100%', height: '100%' }}
      id="fireGame"
    />
  );
}
