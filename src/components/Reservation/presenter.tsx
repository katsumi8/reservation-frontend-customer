import React from "react";
import DateAndTimePick from "./DateAndTimePick";
import NoOfGuests from "./NoOfGuests";
import { Textarea } from "@mantine/core";
import ButtonUI from "@/components/Common/ButtonUI";
import AllHeader from "@/components/Common/AllHeader";
import CardDisplay from "@/components/Common/CardDisplay";
import type { ReservationPresenterProps } from "@/types/propTypes";


const ReservationPresenter = ({
  title,
  timeSlotDropdown,
  customerInputComment,
  buttonLabel,
  descriptionDispatcher,
  submitHandler,
}: ReservationPresenterProps) => {
  return (
    <div>
      <AllHeader title={title}>
        <CardDisplay>
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
        </CardDisplay>
      </AllHeader>
    </div>
  );
};

export default ReservationPresenter;
