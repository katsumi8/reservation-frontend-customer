import React from "react";
import { Tabs } from "@mantine/core";
import { ToolsKitchen2, Sun } from "tabler-icons-react";
import TableGrid from "./TableGrid";
import { useFetchTableData } from "@/utils/query/fetchTableData";

const SeatMap = () => {
  const { seatmap, error, loading } = useFetchTableData();

  // apiのでーたがエラーの時は、非表示にする
  // loadingがTrueの時は、ローディング画面を出す
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Reservation list Error! {error.message}</p>;

  return (
    <>
      <Tabs>
        <Tabs.Tab label="Layout" icon={<ToolsKitchen2 size={14} />}>
          <TableGrid tableData={seatmap} />
        </Tabs.Tab>
        {/* <Tabs.Tab label="Terrace" icon={<Sun size={14} />}>
          <TableGrid tableData={tableDataTerrace} />
        </Tabs.Tab> */}
      </Tabs>
    </>
  );
};

export default SeatMap;
