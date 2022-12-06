import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import GameButtonClass from '../GameButtonClass';

function getClickedButton(array: GameButtonClass[]): GameButtonClass | null {
  const result = array.filter((button) => button.wasClicked);
  if (result.length > 0) {
    return result[0];
  } return null;
}

const initialState: GameButtonClass[] = [];
const buttonSlice = createSlice({
  name: 'buttons',
  initialState,
  reducers: {
    changeActiveButtons: (state, action: PayloadAction<string>) => {
      // @todo secure data
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const payloadData: GameButtonClass[] = JSON.parse(action.payload);
      if (state.length === 0) {
        return payloadData;
      }
      // if button was not clicked
      const clickedButton = getClickedButton(payloadData);
      if (clickedButton === null) {
        return state.map((button) => {
          const newButton = { ...button };
          newButton.wasClicked = false;
          return newButton;
        });
      }
      return state.map((button) => {
        const newButton = { ...button };
        if (button.name === clickedButton.name) {
          newButton.wasClicked = true;
          newButton.active = true;
          return newButton;
        }
        if (button.stage === clickedButton.stage) {
          newButton.active = false;
          newButton.wasClicked = false;
          return newButton;
        }
        newButton.wasClicked = false;
        return newButton;
      });
    },
  },
});

export const { changeActiveButtons } = buttonSlice.actions;

export default buttonSlice.reducer;
