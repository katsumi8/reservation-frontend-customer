import React from "react";
import { Tabs } from "@mantine/core";
import { ToolsKitchen2, Sun } from "tabler-icons-react";
import TableGrid from "./TableGrid";
import AllHeader from "../Common/AllHeader";
import ButtonUI from "../Common/ButtonUI";
import CardDisplay from "../Common/CardDisplay";
import DisplayReservationInfo from "./DisplayReservationInfo";
import { SeatMapPresenterProps } from "@/types/propTypes";

const SeatMapPresenter = ({
  loading,
  error,
  title,
  seatmap,
}: SeatMapPresenterProps) => {
  // apiのでーたがエラーの時は、非表示にする
  // loadingがTrueの時は、ローディング画面を出す
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Reservation list Error! {error.message}</p>;

  return (
    <AllHeader title={title}>
      <CardDisplay>
        <DisplayReservationInfo />
      </CardDisplay>
      <CardDisplay>
        <Tabs>
          <Tabs.Tab label="Layout" icon={<ToolsKitchen2 size={14} />}>
            <TableGrid tableData={seatmap} />
          </Tabs.Tab>
          {/* <Tabs.Tab label="Terrace" icon={<Sun size={14} />}>
          <TableGrid tableData={tableDataTerrace} />
        </Tabs.Tab> */}
        </Tabs>
      </CardDisplay>
      <ButtonUI
        primaryLabel="Next →"
        secondaryLabel="← Go back"
        buttonType="button"
        pathNames={["/your-information", "/"]}
      />
    </AllHeader>
  );
};

export default SeatMapPresenter;
