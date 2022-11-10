import { configureStore } from '@reduxjs/toolkit';
import buttonSlice from './Assets/Utilities/Canvas/FireGame/buttonsSlice';

export const store = configureStore({
  reducer: {
    buttons: buttonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
