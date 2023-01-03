import React from "react";
import TimeSlot from "./TimeSlot";
import { DatePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { Calendar } from "tabler-icons-react";
import { DateAndTimePickPresenterProps } from "@/types/propTypes";

const DateAndTimePickPresenter = ({
  selectedDate,
  onChangeHandler,
  startOfCalender,
  timeSlotDropdownList,
}: DateAndTimePickPresenterProps) => {
  return (
    <>
      <DatePicker
        label="Pick a Date and Time"
        placeholder="Pick a date"
        value={selectedDate}
        onChange={onChangeHandler}
        minDate={startOfCalender}
        maxDate={dayjs(new Date()).add(6, "months").toDate()}
        excludeDate={(date) => date.getDay() === 1}
        icon={<Calendar size={16} />}
        style={{ display: "inline-block", marginRight: "10px" }}
        required
        clearable={false}
      />
      <TimeSlot timeSlotDropdownList={timeSlotDropdownList} />
    </>
  );
};

export default DateAndTimePickPresenter;
