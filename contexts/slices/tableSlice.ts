import { createSlice } from "@reduxjs/toolkit";

export type TableState = {
  table: number[];
};

const initialState: TableState = {
  table: [],
};

export const tableSlice = createSlice({
  name: "tables",
  initialState,

  reducers: {
    selectTable: (state, action) => {
      state.table.push(action.payload);
    },
    deselectTable: (state, action) => {
      state.table = state.table.filter((tableId) => tableId !== action.payload);
    },
  },
});

export const { selectTable, deselectTable } = tableSlice.actions;
export default tableSlice.reducer;
