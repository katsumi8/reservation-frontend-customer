import { createSlice } from "@reduxjs/toolkit";
import { startOfDateFinder } from "const/initialDate";

const initialDate = startOfDateFinder();

export const dateAndTimeSlice = createSlice({
  name: "dateAndTime",
  initialState: {
    date: initialDate,
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
