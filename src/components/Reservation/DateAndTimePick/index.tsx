import React from "react";
import { dropdownTypes } from "@/types/propTypes";
import { useDateSelectCreator } from "../../../hooks/useDateSelectCreator";
import { startOfDateFinder } from "@/const/initialDate";
import DateAndTimePickPresenter from "./Presenter";

const DateAndTimePick = ({ timeSlotDropdownList }: dropdownTypes) => {
  const { selectedDate, onChangeHandler } = useDateSelectCreator();
  const startOfCalender = startOfDateFinder();

  return (
    <DateAndTimePickPresenter
      selectedDate={selectedDate}
      onChangeHandler={onChangeHandler}
      startOfCalender={startOfCalender}
      timeSlotDropdownList={timeSlotDropdownList}
    />
  );
};

export default DateAndTimePick;
