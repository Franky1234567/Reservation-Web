import { configureStore } from '@reduxjs/toolkit';
import { reservationSlice } from './reservationSlice';  

const store = configureStore({
  reducer: {
    reservations: reservationSlice.reducer,  
  },
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;  

export default store;