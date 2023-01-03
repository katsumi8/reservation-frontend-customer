import React from "react";
import { NativeSelect } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import { selectNumber, moreNumber } from "@/contexts/slices/pplNumberSlice";
import { ppl_arry } from "@/const/guestNumberOptions";
import { NoOfGuestsPresenterProps } from "@/types/propTypes";

const NoOfGuestsPresenter = ({
  customerNumber,
  dispatch,
}: NoOfGuestsPresenterProps) => {
  return (
    <div>
      <div>
        <NativeSelect
          label="Select the number of guests"
          value={customerNumber}
          onChange={(e) => dispatch(selectNumber(e.target.value))}
          data={ppl_arry}
          required
        />
      </div>
      <div>
        {customerNumber === "more" && (
          <NumberInput
            defaultValue={5}
            placeholder="How many"
            label="How many"
            max={20}
            min={5}
            required
            onChange={(e) => dispatch(moreNumber(e))}
          />
        )}
      </div>
    </div>
  );
};

export default NoOfGuestsPresenter;
