import {RefObject} from "react";

export default function DrawDefaultGameTemplate(canvasRef: RefObject<HTMLCanvasElement> ): void {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (canvas === null || canvas.parentElement === null) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const canvasHeight = canvas.offsetHeight;
    const canvasWidth = canvas.offsetWidth;
    const ctx = canvas.getContext('2d');
    if (ctx === null) return;
    const gameHeight: number = canvasHeight;
    const gameWidth: number = canvasWidth;
    const gradient = ctx.createLinearGradient(canvasWidth / 2, 0, canvasWidth / 2, canvasHeight);
    gradient.addColorStop(0, 'rgb(1,7,17)');
    gradient.addColorStop(0.2, 'rgb(13,29,65)');
    gradient.addColorStop(0.6, 'rgb(4,20,58)');
    gradient.addColorStop(0.9, 'rgb(1,7,28)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}