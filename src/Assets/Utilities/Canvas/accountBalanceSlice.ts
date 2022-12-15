import { createSlice, PayloadAction } from '@reduxjs/toolkit';

function changeBalance(action: string, amount: number, state: number) {
  if (action === '+') {
    return state + amount;
  }
  if (action === '-') {
    return state - amount;
  }
  return state;
}

const initialState = 100.00;
const accountBalanceSlice = createSlice({
  name: 'accountBalance',
  initialState,
  reducers: {
    accountBalanceReducer:
            (state, action: PayloadAction<string>) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const payloadData: { action: string, amount: number } = JSON.parse(action.payload);
              return changeBalance(payloadData.action, payloadData.amount, state);
            },
  },

});

export const { accountBalanceReducer } = accountBalanceSlice.actions;

export default accountBalanceSlice.reducer;
