import React from "react";
import { NativeSelect } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useSelector } from "../../../../../contexts/store";
import { selectTimeSlot } from "../../../../../contexts/slices/dateAndTimeSlice";
import { dropdownTypes } from "types/propTypes";

const TimeSlot = ({ timeSlotDropdownList }: dropdownTypes) => {
  const timeSlot = useSelector((state) => state.timeAndSlot.timeSlot);
  const dispatch = useDispatch();

  if (!timeSlot) {
    dispatch(selectTimeSlot(timeSlotDropdownList[0]));
  }

  return (
    <NativeSelect
      value={timeSlot}
      onChange={(e) => {
        dispatch(selectTimeSlot(e.target.value));
      }}
      data={timeSlotDropdownList}
      style={{ display: "inline-block" }}
      required
    />
  );
};

export default TimeSlot;
