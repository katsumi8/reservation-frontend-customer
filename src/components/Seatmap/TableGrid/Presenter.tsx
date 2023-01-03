import { useTableGrid } from "../../../hooks/useTableGrid";
import { propTableType, TableGridPresenterProps } from "@/types/propTypes";
import { containerStyle } from "../../../const/tableGridStyle";

const TableGridPresenter = ({
  tableData,
  getColor,
  selectHandler,
  doubleIdChecker,
}: TableGridPresenterProps) => {
  return (
    <div style={containerStyle}>
      {tableData.map(
        ({ id, tableName, position, isReserved, isRounded }, index) => (
          <div
            key={id}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              gridArea: position,
              backgroundColor: getColor({
                isReserved,
                tableName,
                id: Number(id),
              }),
              borderRadius: isRounded ? "50%" : "",
              cursor: isReserved ? "not-allowed" : "",
            }}
            onClick={() =>
              selectHandler(tableData, {
                tableName,
                isReserved,
                id: Number(id),
              })
            }
          >
            {doubleIdChecker(tableName, index, tableData)}
          </div>
        )
      )}
    </div>
  );
};

export default TableGridPresenter;
