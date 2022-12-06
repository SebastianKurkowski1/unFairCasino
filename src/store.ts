import { configureStore } from '@reduxjs/toolkit';
import buttonSlice from './Assets/Utilities/Canvas/FireGame/buttonsSlice';
import gameStakeSlice from './Assets/Utilities/Canvas/gameStakeSlice';
import gameStateSlice from './Assets/Utilities/Canvas/gameStateSlice';

export const store = configureStore({
  reducer: {
    buttons: buttonSlice,
    stake: gameStakeSlice,
    gameState: gameStateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
