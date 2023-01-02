import { useTableGrid } from "./hooks";
import { propTableType } from "types/propTypes";
import { containerStyle } from "./style";

const TableGrid = ({ tableData }: propTableType) => {
  const { getColor, selectHandler, doubleIdChecker } = useTableGrid();

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

export default TableGrid;
