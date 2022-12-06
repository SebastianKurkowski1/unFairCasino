import { createSlice, PayloadAction } from '@reduxjs/toolkit';

function changeRiskAndStateOfGame(action: string, state: { risk: string, stage: string }) {
  if (action === 'low' || action === 'medium' || action === 'high') {
    return {
      ...state,
      risk: action,
    };
  }
  if (action === 'start' && state.risk !== '') {
    return {
      ...state,
      stage: 'bet',
    };
  }
  return state;
}

const initialState = {
  risk: '',
  stage: 'initial',
};
const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    changeGameState:
        (state, action: PayloadAction<string>) => changeRiskAndStateOfGame(action.payload, state),
  },

});

export const { changeGameState } = gameStateSlice.actions;

export default gameStateSlice.reducer;
