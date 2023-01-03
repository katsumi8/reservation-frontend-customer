import { useTableGrid } from "../../../hooks/useTableGrid";
import { propTableType } from "@/types/propTypes";
import { containerStyle } from "../../../const/tableGridStyle";
import TableGridPresenter from "./Presenter";

const TableGrid = ({ tableData }: propTableType) => {
  const { getColor, selectHandler, doubleIdChecker } = useTableGrid();

  return (
    <TableGridPresenter
      tableData={tableData}
      getColor={getColor}
      selectHandler={selectHandler}
      doubleIdChecker={doubleIdChecker}
    />
  );
};

export default TableGrid;
