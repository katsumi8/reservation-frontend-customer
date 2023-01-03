// import timeSlotDropdownAll from "../components/Reservation/const/timeSlotDropdownAll";
// import { currentSlot } from "../components/Reservation/const/todaysFirstTimeSlot";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { deselectTable } from "@/contexts/slices/tableSlice";
import { inputDescription } from "@/contexts/slices/descriptionSlice";
import React, { useEffect, useState } from "react";
import { useTableReservationStatusUpdate } from "@/utils/mutation/tableReservationStatusUpdate";
import { dateCreator } from "../components/Seatmap/DisplayReservationInfo/hooks";
import { TimeInput } from "@/types/graphqlTypes";
import { useSelector } from "@/contexts/store";
import { useTimeSlot } from "./useTimeSlot";

export const useHandleReservation = () => {
  const { currentSlot, options: timeSlotDropdownAll } = useTimeSlot();
  const { updateTableReserveStatus } = useTableReservationStatusUpdate();
  const router = useRouter();
  const dispatch = useDispatch();
  const customerInputComment = useSelector(
    (state) => state.description.description
  );
  const customerNumber = useSelector((state) => state.customers.customers);
  const seatsPicked = useSelector((state) => state.tableSelector.table);
  const enteredDate = useSelector((state) => state.timeAndSlot.date);
  const compareEnteredDate = enteredDate.getDate();
  const compareToday = new Date().getDate();
  const [timeSlotDropdown, setTimeSlotDropdown] = useState(timeSlotDropdownAll);
  const reservedDate = dateCreator(enteredDate); // Extract date to string like 2022/08/11
  const timeSlot = useSelector((state) => state.timeAndSlot.timeSlot).replace(
    / /g,
    ""
  );

  console.log(compareEnteredDate);

  useEffect(() => {
    // Decide time slots according to the entered Date
    if (
      compareEnteredDate === compareToday &&
      timeSlotDropdownAll.indexOf(currentSlot) != -1
    ) {
      const filterIndex = timeSlotDropdownAll.indexOf(currentSlot);
      setTimeSlotDropdown(timeSlotDropdownAll.slice(filterIndex));
    } else {
      setTimeSlotDropdown(timeSlotDropdownAll);
    }
  }, [compareEnteredDate]);

  const updateVariable: TimeInput = {
    date: reservedDate,
    timeSlot,
  };

  // if you selected seats before, reset all
  if (seatsPicked) {
    seatsPicked.forEach((id) => dispatch(deselectTable(id)));
  }

  // change the routing path depending on how many guests
  let buttonLabel = "Choose a table";
  if (customerNumber === "more") {
    buttonLabel = "Fill in your info";
  } else {
    buttonLabel = "Choose a table";
  }

  const descriptionDispatcher = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(inputDescription(e.target.value));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (customerNumber === "more") {
      router.push({ pathname: "/your-information" });
    } else {
      updateTableReserveStatus({ variables: { time: updateVariable } });
      router.push({
        pathname: "/seat-select", //URL
      });
    }
  };

  return {
    timeSlotDropdown,
    customerInputComment,
    buttonLabel,
    descriptionDispatcher,
    submitHandler,
  };
};
