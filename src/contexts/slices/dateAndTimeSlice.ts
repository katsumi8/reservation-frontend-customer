import { createSlice } from "@reduxjs/toolkit";

export const dateAndTimeSlice = createSlice({
  name: "dateAndTime",
  initialState: {
    date: new Date(),
    timeSlot: "",
  },

  reducers: {
    selectDate: (state, action) => {
      state.date = action.payload;
    },
    selectTimeSlot: (state, action) => {
      state.timeSlot = action.payload;
    },
  },
});

export const { selectDate, selectTimeSlot } = dateAndTimeSlice.actions;
export default dateAndTimeSlice.reducer;
