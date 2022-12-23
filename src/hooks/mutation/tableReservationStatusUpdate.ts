import { gql, useMutation } from "@apollo/client";

const UPDATE_TABLE_ISRESERVED_STATUS = gql`
  mutation ($time: TimeInput) {
    tableReservationStatusUpdate(time: $time) {
      userErrors {
        message
      }
      table {
        tableName
      }
    }
  }
`;

export const useTableReservationStatusUpdate = () => {
  const [updateTableReserveStatus, { data, loading }] = useMutation(
    UPDATE_TABLE_ISRESERVED_STATUS
  );

  return { updateTableReserveStatus };
};
