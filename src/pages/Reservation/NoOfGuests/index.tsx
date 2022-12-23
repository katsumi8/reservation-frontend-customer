import React from "react";
import { NativeSelect } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useSelector } from "../../../../contexts/store";
import {
  selectNumber,
  moreNumber,
} from "../../../../contexts/slices/pplNumberSlice";

const NoOfGuests = ({}) => {
  const ppl_arry = ["1", "2", "3", "4", "more"];
  const customerNumber = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();

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

export default NoOfGuests;
