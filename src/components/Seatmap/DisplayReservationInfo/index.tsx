import { useSelector } from "@/contexts/store";
import { useReservationInfoTable } from "../../../hooks/useReservationInfoTable";
import DisplayReservationInfoPresenter from "./Presenter";

const DisplayReservationInfo = () => {
  const customers = useSelector((state) => state.customers.customers);
  const moreCustomers = useSelector((state) => state.customers.moreCustomers);
  const date = useSelector((state) => state.timeAndSlot.date);
  const time = useSelector((state) => state.timeAndSlot.timeSlot);
  const description = useSelector((state) => state.description.description);
  const { dateCreator, enteredGuestFix } = useReservationInfoTable();
  const reservedDate = dateCreator(date);
  const enteredGuests = enteredGuestFix(customers, moreCustomers);

  return (
    <DisplayReservationInfoPresenter
      description={description}
      enteredGuests={enteredGuests}
      reservedDate={reservedDate}
      time={time}
    />
  );
};

export default DisplayReservationInfo;
