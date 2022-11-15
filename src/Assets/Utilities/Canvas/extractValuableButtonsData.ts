import GameButtonClass from './GameButtonClass';

function getActiveButtonsNameAndStage(buttonsArray: GameButtonClass[]) {
  const activeButtonsArray: { name: string, stage: number }[] = [];
  const filteredArray = buttonsArray.filter((button) => button.active);
  console.log(filteredArray);
  filteredArray.forEach((button) => {
    activeButtonsArray.push({
      name: button.name,
      stage: button.stage,
    });
  });
  return activeButtonsArray;
}

export default function extractValuableButtonsData(buttonsState: GameButtonClass[]) {
  return getActiveButtonsNameAndStage(buttonsState);
}
