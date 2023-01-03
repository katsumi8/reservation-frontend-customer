import React from "react";
import { dropdownTypes } from "@/types/propTypes";
import { useDateSelectCreator } from "../../../hooks/useDateSelectCreator";
import { useStartOfDateFinder } from "@/hooks/useStartOfDateFinder";
import DateAndTimePickPresenter from "./Presenter";

const DateAndTimePick = ({ timeSlotDropdownList }: dropdownTypes) => {
  const { selectedDate, onChangeHandler } = useDateSelectCreator();
  const { startDate } = useStartOfDateFinder();

  return (
    <DateAndTimePickPresenter
      selectedDate={selectedDate}
      onChangeHandler={onChangeHandler}
      startOfCalender={startDate}
      timeSlotDropdownList={timeSlotDropdownList}
    />
  );
};

export default DateAndTimePick;
