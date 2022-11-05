import {useEffect, useRef, useState} from "react";
import ManageFireGame from "./Functions/ManageFireGame";

export default function FireGame(this: any) {
    const [mouseCoordinates, setMouseCoordinates] = useState({x: 0, y: 0});
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        ManageFireGame(canvasRef, mouseCoordinates);
    }, [mouseCoordinates])


    return (
        <canvas onMouseMove={(event) => {
            setMouseCoordinates({
                x: event.nativeEvent.offsetX,
                y: event.nativeEvent.offsetY,
            })
        }} ref={canvasRef} style={{width: '100%', height: '100%'}} id={'fireGame'}></canvas>
    );
}