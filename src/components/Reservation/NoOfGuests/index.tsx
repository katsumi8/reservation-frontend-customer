import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "@/contexts/store";
import NoOfGuestsPresenter from "./Presenter";


const NoOfGuests = ({}) => {
  const customerNumber = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();

  return (
    <NoOfGuestsPresenter customerNumber={customerNumber} dispatch={dispatch} />
  );
};

export default NoOfGuests;
