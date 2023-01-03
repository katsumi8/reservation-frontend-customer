import { useSelector } from "@/contexts/store";
import { useDispatch } from "react-redux";
import { deselectTable, selectTable } from "@/contexts/slices/tableSlice";
import { tableInputState,Table } from "@/types/hooksTypes";


export const useTableGrid = () => {
  const dispatch = useDispatch();
  const tableIds = useSelector((state) => state.tableSelector.table);
  const cusNumber = Number(useSelector((state) => state.customers.customers));

  const selectHandler = (
    tableData: Table[], // tables fetched from DB
    { isReserved, id }: tableInputState // table info that is on a cell
  ) => {
    if (isReserved) return;
    // already selected before
    else if (tableIds.indexOf(id) >= 0) {
      dispatch(deselectTable(id));
    } else if (tableIds.length === 1) {
      const selectedTableCapability = tableData.find(
        (table) => Number(table.id) === tableIds[0]
      )?.capability;
      const clickedTableCapability = tableData.find(
        (table) => Number(table.id) === id
      )?.capability;
      if (cusNumber === 1 || cusNumber === 2) {
        return;
      }
      if (selectedTableCapability && clickedTableCapability) {
        // capabilityが2のやつを選んでいる場合
        if (
          Number(selectedTableCapability) <= 2 &&
          Number(clickedTableCapability) <= 2
        ) {
          dispatch(selectTable(id));
        } else {
          return;
        }
      }
    } else if (tableIds.length > 1) {
      return;
    } else {
      dispatch(selectTable(id));
    }
  };

  const getColor = ({ isReserved, id }: tableInputState) => {
    if (tableIds.indexOf(id) >= 0) {
      return "#99d98c";
    } else if (isReserved) {
      return "#6c757d";
    } else {
      return "#caf0f8";
    }
  };

  const doubleIdChecker = (
    tableName: string,
    index: number,
    tableData: Table[] // tables fetched from DB
  ) => {
    const numberOfSameTableId = tableData.filter(
      (table) => table.tableName === tableName
    );
    if (numberOfSameTableId.length > 1) {
      const firstIndex = tableData.findIndex(
        (table) => table.tableName === tableName
      );
      if (index === firstIndex) return tableName;
      else return "";
    } else {
      return tableName;
    }
  };

  return { getColor, selectHandler, doubleIdChecker };
};
