import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import GameButtonClass from '../GameButtonClass';

function checkForActiveButton(array: GameButtonClass[]) {
  const result = array.filter((button) => button.wasClicked);
  return result.length > 0;
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
        payloadData.forEach((button) => {
          state.push(button);
        });
        return state;
      }
      // if button was not clicked
      if (!checkForActiveButton(payloadData)) {
        state.map((button) => {
          const newButton = button;
          newButton.wasClicked = false;
          return newButton;
        });
        return state;
      }
      return payloadData.map((button) => {
        const newButton = button;
        if (button.wasClicked) {
          newButton.active = true;
        }
        return newButton;
      });
    },
  },
});

export const { changeActiveButtons } = buttonSlice.actions;

export default buttonSlice.reducer;
