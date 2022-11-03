import {useEffect, useRef, useState} from "react";
import ManageFireGame from "./Functions/ManageFireGame";

export default function FireGame(this: any) {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        ManageFireGame(canvasRef);
    }, [])


    return (
        <canvas ref={canvasRef} style={{width: '100%', height: '100%'}} id={'fireGame'}></canvas>
    );
}