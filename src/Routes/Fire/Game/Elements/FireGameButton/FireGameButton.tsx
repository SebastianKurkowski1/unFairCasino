export default function FireGameButton(ctx: CanvasRenderingContext2D,
                                       startingX: number,
                                       startingY: number,
                                       gameWidth: number,
                                       gameHeight: number,
                                       buttonText: string,
                                       textColor: string,
                                       gameState: string,
                                       backgroundColor: string,
                                       mouseCoordinates: { x: number, y: number }) {
    ctx.font = gameWidth / 60 + 'px serif';
    const text = ctx.measureText(buttonText);
    const buttonHeight = gameWidth / 50 + 10;
    const buttonWidth = text.width + gameWidth / 40;
    const radius = 10;
    ctx.fillStyle = backgroundColor;
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#241ca2'
    const FireGameButton = new FireGameButtonObject(ctx, startingX, startingY, buttonWidth, buttonHeight, radius, buttonText, textColor, gameWidth);

    if (FireGameButton.mouseOver(mouseCoordinates.x, mouseCoordinates.y)) {
        ctx.fillStyle = '#221ba4';
        ctx.strokeStyle = '#241ca2';
        FireGameButton.createRoundedPath(ctx, startingX, startingY, buttonWidth, buttonHeight, radius);
        ctx.fill();
        ctx.stroke();
        FireGameButton.writeText(ctx, startingX, startingY, buttonHeight, gameWidth, buttonText, 'white');
        FireGameButton.buttonState = 'mouseOver';
    }

    return FireGameButton;
}


class FireGameButtonObject {
    public x1: number;
    public y1: number;
    public x2: number;
    public y2: number;
    public height: number;
    public width: number;
    public radius: number;
    public text: string;
    public buttonState: string;

    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number, text: string, textColor: string, gameWidth: number) {
        this.x1 = x;
        this.y1 = y;
        this.x2 = this.x1 + width;
        this.y2 = this.y1 + height;
        this.height = height;
        this.width = width;
        this.radius = radius;
        this.text = text;
        this.createRoundedPath(ctx, this.x1, this.y1, this.width, this.height, this.radius)
        ctx.stroke();
        ctx.fill();
        this.writeText(ctx, this.x1, this.y1, this.height, gameWidth, this.text, textColor)
        this.buttonState = 'initial';
    }

    createRoundedPath(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number): void {
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.arcTo(x, y + height, x + radius, y + height, radius);
        ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
        ctx.arcTo(x + width, y, x + width - radius, y, radius);
        ctx.arcTo(x, y, x, y + radius, radius);
    }

    writeText(ctx: CanvasRenderingContext2D, x: number, y: number, height: number, gameWidth: number, text: string, textColor: string) {
        ctx.fillStyle = textColor;
        ctx.textAlign = 'start';
        ctx.fillText(text, x + 0.5 * gameWidth / 40, y + 0.7 * height);
    }

    mouseOver(x: number, y: number): boolean {
        return x >= this.x1 && x <= this.x2 && y >= this.y1 && y <= this.y2;
    }

}
