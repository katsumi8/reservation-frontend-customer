import { useSelector } from "contexts/store";
import { table, columns, rows, lastRow } from "./style";
import { dateCreator, enteredGuestFix } from "./hooks";

const DisplayReservationInfo = () => {
  const customers = useSelector((state) => state.customers.customers);
  const moreCustomers = useSelector((state) => state.customers.moreCustomers);
  const date = useSelector((state) => state.timeAndSlot.date);
  const time = useSelector((state) => state.timeAndSlot.timeSlot);
  const description = useSelector((state) => state.description.description);
  const reservedDate = dateCreator(date);
  const enteredGuests = enteredGuestFix(customers, moreCustomers);

  return (
    <div>
      <table style={table}>
        <tbody>
          <tr>
            <th style={columns}>Guest</th>
            <th style={columns}>Date</th>
            <th style={columns}>Time</th>
            {description && <th style={columns}>Description</th>}
          </tr>
          <tr style={lastRow}>
            <td style={rows}>{enteredGuests}</td>
            <td style={rows}>{reservedDate}</td>
            <td style={rows}>{time}</td>
            {description && <td style={rows}>{description}</td>}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayReservationInfo;
