import GameData from "../Const/GameData";
import TargetArea from "../Elements/TargetArea/TargetArea";
import {RefObject} from "react";
import DrawDefaultGameTemplate from "../../../../Assets/Functions/DrawDefaultGameTemplate";
import ManageMiddleSection from "./ManageMiddleSection";

export default function ManageFireGame(canvasRef: RefObject<HTMLCanvasElement>): void {
    const gameMargin = GameData.gameSettings.margin;
    if (canvasRef === null) return;
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (canvas === null) return;
    DrawDefaultGameTemplate(canvasRef);
    const ctx = canvas.getContext('2d');
    if (ctx === null) return;
    const canvasHeight = canvas.offsetHeight;
    const canvasWidth = canvas.offsetWidth;
    const gameHeight = canvasHeight - 2 * gameMargin;
    const gameWidth = canvasWidth - 2 * gameMargin;

    // todo draw board
    const freeSpaceInARow = canvasWidth - (canvasWidth * GameData.targetArea.length * 4);
    const lengthOfSingleElement = canvasWidth * GameData.targetArea.length;
    const heightOfSingleElement = gameHeight * GameData.targetArea.height;
    let xStartingPosition = freeSpaceInARow / 2;
    let yStartingPosition = gameMargin;
    for (let i = 0; i < 3; i++){
        for (let k = 0; k < 4; k++) {
            TargetArea(ctx, GameData, xStartingPosition, yStartingPosition, gameWidth, gameHeight);
            xStartingPosition += lengthOfSingleElement;
        }
        yStartingPosition += heightOfSingleElement;
        xStartingPosition = freeSpaceInARow / 2;
    }

    // todo draw middle section

    // todo draw bottom section
}