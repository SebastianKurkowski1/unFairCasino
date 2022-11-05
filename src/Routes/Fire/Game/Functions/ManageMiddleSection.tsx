export default function ManageMiddleSection(ctx: CanvasRenderingContext2D, yStartingPosition: number, canvasWidth: number, stateOfGame: string) {
    ctx.font = canvasWidth / 40 + 'px serif';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('Choose your level of risk and reward', canvasWidth / 2, yStartingPosition);
}