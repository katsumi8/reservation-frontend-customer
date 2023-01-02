import { createSlice } from "@reduxjs/toolkit";

export const pplNumberSlice = createSlice({
  name: "customers",
  initialState: {
    customers: "2",
    moreCustomers: "5",
  },

  reducers: {
    selectNumber: (state, action) => {
      state.customers = action.payload;
    },
    moreNumber: (state, action) => {
      let inputNumber: number = action.payload;
      state.moreCustomers = inputNumber.toString();
    },
  },
});

export const { selectNumber, moreNumber } = pplNumberSlice.actions;
export default pplNumberSlice.reducer;
