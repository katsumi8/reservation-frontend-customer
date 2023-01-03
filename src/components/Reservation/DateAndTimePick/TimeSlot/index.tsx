import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "@/contexts/store";
import { selectTimeSlot } from "@/contexts/slices/dateAndTimeSlice";
import { dropdownTypes } from "@/types/propTypes";
import TimeSlotPresenter from "./Presenter";

const TimeSlot = ({ timeSlotDropdownList }: dropdownTypes) => {
  const timeSlot = useSelector((state) => state.timeAndSlot.timeSlot);
  const dispatch = useDispatch();

  if (!timeSlot) {
    dispatch(selectTimeSlot(timeSlotDropdownList[0]));
  }

  return (
    <TimeSlotPresenter
      timeSlot={timeSlot}
      dispatch={dispatch}
      timeSlotDropdownList={timeSlotDropdownList}
    />
  );
};

export default TimeSlot;
