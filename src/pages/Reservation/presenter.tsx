import React from "react";
import DateAndTimePick from "./DateAndTimePick";
import NoOfGuests from "./NoOfGuests";
import { Textarea } from "@mantine/core";
import { useHandleReservation } from "./hooks";
import ButtonUI from "@/uiParts/ButtonUI";

const ReserveForm = () => {
  const {
    timeSlotDropdown,
    customerInputComment,
    buttonLabel,
    descriptionDispatcher,
    submitHandler,
  } = useHandleReservation();

  

  return (
    <form onSubmit={submitHandler}>
      <h1>Reservation Form</h1>
      <div>
        <NoOfGuests />
      </div>
      <br />
      <div>
        <DateAndTimePick timeSlotDropdownList={timeSlotDropdown} />
      </div>
      <br />
      <div>
        <Textarea
          label="Your comment"
          placeholder="Bei guten Wetter gerne draussen :)"
          value={customerInputComment}
          onChange={descriptionDispatcher}
          autosize
        />
      </div>
      <br />
      <div style={{ textAlign: "right" }}>
        <ButtonUI buttonType="submit" primaryLabel={buttonLabel} />
      </div>
    </form>
  );
};

export default ReserveForm;
