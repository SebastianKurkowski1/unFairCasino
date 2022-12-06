import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import GameButtonClass from './GameButtonClass';

function increase(stake: number): number {
  if (stake === 1.00) {
    return 2.50;
  } if (stake === 2.50) {
    return 6.25;
  } if (stake === 6.25) {
    return 12.50;
  } if (stake === 12.50) {
    return 50.00;
  } if (stake === 50.00) {
    return 125.00;
  }
  return 125.00;
}

function decrease(stake: number): number {
  if (stake === 125.00) {
    return 50.00;
  } if (stake === 50.00) {
    return 12.50;
  } if (stake === 12.50) {
    return 6.25;
  } if (stake === 6.25) {
    return 2.50;
  } if (stake === 2.50) {
    return 1.00;
  }
  return 1.00;
}

function changeStake(payload: string, state: number) {
  const clickedButton: GameButtonClass = JSON.parse(payload);
  if (clickedButton.action === '+') {
    return increase(state);
  }
  if (clickedButton.action === '-') {
    return decrease(state);
  }
  return state;
}

const initialState = 1.00;
const stakeSlice = createSlice({
  name: 'stake',
  initialState,
  reducers: {
    changeStakeReducer:
        (state, action: PayloadAction<string>) => changeStake(action.payload, state),
  },

});

export const { changeStakeReducer } = stakeSlice.actions;

export default stakeSlice.reducer;
