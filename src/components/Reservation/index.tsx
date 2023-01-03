import React from "react";
import { TitleProp } from "@/types/propTypes";
import { useHandleReservation } from "../../hooks/useHandleReservation";
import ReservationPresenter from "./presenter";

export default function Reservation({ title }: TitleProp) {
  const {
    timeSlotDropdown,
    customerInputComment,
    buttonLabel,
    descriptionDispatcher,
    submitHandler,
  } = useHandleReservation();

  return (
    <ReservationPresenter
      title={title}
      timeSlotDropdown={timeSlotDropdown}
      customerInputComment={customerInputComment}
      buttonLabel={buttonLabel}
      descriptionDispatcher={descriptionDispatcher}
      submitHandler={submitHandler}
    />
  );
}
