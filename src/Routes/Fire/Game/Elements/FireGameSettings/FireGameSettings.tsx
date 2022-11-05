import FireGameButton from "../FireGameButton/FireGameButton";

export default function FireGameSettings(ctx: CanvasRenderingContext2D,
                                         startingX: number,
                                         startingY: number,
                                         gameWidth: number,
                                         gameHeight: number,
                                         gameState: string,
                                         mouseCoordinates: { x: number, y: number }) {
    const gameButtons = [];
    let mouseOver: boolean = false;
    //create level of risk buttons
    gameButtons.push(FireGameButton(ctx, startingX, startingY + 50, gameWidth, gameHeight, 'Low', 'white', gameState, '#140f5d', mouseCoordinates));
    startingX += gameButtons[0].width + 20;
    gameButtons.push(FireGameButton(ctx, startingX, startingY + 50, gameWidth, gameHeight, 'Moderate', 'white', gameState, '#140f5d', mouseCoordinates));
    startingX += gameButtons[1].width + 20;
    gameButtons.push(FireGameButton(ctx, startingX, startingY + 50, gameWidth, gameHeight, 'HIGH', 'white', gameState, '#140f5d', mouseCoordinates));

    gameButtons.forEach((button) => {
        if (button.buttonState === 'mouseOver') mouseOver = true;
    })

    return mouseOver;
}
