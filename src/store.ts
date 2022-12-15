import { configureStore } from '@reduxjs/toolkit';
import buttonSlice from './Assets/Utilities/Canvas/FireGame/buttonsSlice';
import gameStakeSlice from './Assets/Utilities/Canvas/gameStakeSlice';
import gameStateSlice from './Assets/Utilities/Canvas/gameStateSlice';
import accountBalanceSlice from './Assets/Utilities/Canvas/accountBalanceSlice';

export const store = configureStore({
  reducer: {
    buttons: buttonSlice,
    stake: gameStakeSlice,
    gameState: gameStateSlice,
    accountBalance: accountBalanceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
