import { Table } from "@/types/hooksTypes";
import { gql, useQuery } from "@apollo/client";

const GET_TABLES = gql`
  query {
    seatmap {
      id
      tableName
      capability
      isReserved
      isRounded
      isUnReservable
      position
    }
  }
`;

export const useFetchTableData = () => {
  const { data, error, loading } = useQuery(GET_TABLES);

  const seatmap = data ? (data.seatmap as Table[]) : [];

  return { seatmap, error, loading };
};
