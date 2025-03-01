
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reservation, ReservationStatus } from '../Types/Reservation';  
export const reservationSlice = createSlice({
  name: 'reservations',
  initialState: [] as Reservation[],  
  reducers: {
    addReservation: (state, action: PayloadAction<Reservation>) => {
      state.push(action.payload);
    },
    updateReservationStatus: (state, action: PayloadAction<{ id: string; status: ReservationStatus }>) => {  
      const { id, status } = action.payload;
      const reservation = state.find((res) => res.id === id);
      if (reservation) {
        reservation.status = status;  
      }
    },
  },
});

export const { addReservation, updateReservationStatus } = reservationSlice.actions;

export default reservationSlice.reducer;
