import React from "react";
import { NativeSelect } from "@mantine/core";
import { selectTimeSlot } from "@/contexts/slices/dateAndTimeSlice";
import { TimeSlotPresenterProps } from "@/types/propTypes";

const TimeSlotPresenter = ({
  timeSlot,
  dispatch,
  timeSlotDropdownList,
}: TimeSlotPresenterProps) => {
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

export default TimeSlotPresenter;
