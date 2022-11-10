import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import manageFireGame from './Functions/manageFireGame';
import { changeActiveButtons } from '../../../Assets/Utilities/Canvas/FireGame/buttonsSlice';
import { RootState } from '../../../store';

export default function FireGame() {
  const [currentEvent, setEvent] = useState<React.MouseEvent | undefined>(undefined);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonsState = useSelector((state: RootState) => state.buttons);
  const dispatch = useDispatch();
  useEffect(() => {
    const gameButtons = manageFireGame(canvasRef, currentEvent, buttonsState);
    if (typeof gameButtons === 'boolean') return;
    dispatch(changeActiveButtons(JSON.stringify(gameButtons)));
  }, [currentEvent, dispatch]);
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
