import {useEffect, useRef} from "react";

export default function FireGame() {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (canvas === null) return;
        const context = canvas.getContext('2d');
        if (context === null) return;
        context.fillStyle = '#000000';
        context.fillRect(0, 0, 20, 100);



    }, [])


    return (
        <canvas width={'400px'} height={'400px'} ref={canvasRef} id={'fireGame'}></canvas>
    );
}