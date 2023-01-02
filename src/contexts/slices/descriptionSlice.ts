import { createSlice } from "@reduxjs/toolkit";

export const descriptionSlice = createSlice({
  name: "description",
  initialState: {
    description: "",
  },

  reducers: {
    inputDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { inputDescription } = descriptionSlice.actions;
export default descriptionSlice.reducer;
