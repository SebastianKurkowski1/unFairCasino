import { useEffect, useRef, useState } from 'react';
import manageFireGame from './Functions/manageFireGame';

export default function FireGame() {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    manageFireGame(canvasRef, mouseCoordinates);
  }, [mouseCoordinates]);

  return (
    <canvas
      onMouseMove={(event) => {
        setMouseCoordinates({
          x: event.nativeEvent.offsetX,
          y: event.nativeEvent.offsetY,
        });
      }}
      ref={canvasRef}
      style={{ width: '100%', height: '100%' }}
      id="fireGame"
    />
  );
}
