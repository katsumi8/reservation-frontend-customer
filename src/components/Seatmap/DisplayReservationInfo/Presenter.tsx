import { DisplayReservationInfoPresenterProps } from "@/types/propTypes";
import {
  table,
  columns,
  rows,
  lastRow,
} from "../../../const/reservationInfoStyles";

const DisplayReservationInfoPresenter = ({
  description,
  enteredGuests,
  reservedDate,
  time,
}: DisplayReservationInfoPresenterProps) => {
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

export default DisplayReservationInfoPresenter;
