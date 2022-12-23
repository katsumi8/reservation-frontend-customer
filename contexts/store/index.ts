import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import pplNumberSliceReducer from "../slices/pplNumberSlice";
import descriptionSliceReducer from "../slices/descriptionSlice";
import dateAndTimeSliceReducer from "../slices/dateAndTimeSlice";
import tableSliceReducer from "../slices/tableSlice";

export const store = configureStore({
  reducer: {
    customers: pplNumberSliceReducer,
    description: descriptionSliceReducer,
    timeAndSlot: dateAndTimeSliceReducer,
    tableSelector: tableSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
