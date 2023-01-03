import Head from "next/head";
import React from "react";
import AllHeader from "@/components/Common/AllHeader";
import CardDisplay from "@/components/Common/CardDisplay";
import SeatMap from "./presenter";
import DisplayReservationInfo from "./DisplayReservationInfo";
import ButtonUI from "@/components/Common/ButtonUI";
import { TitleProp } from "@/types/propTypes";

const SeatmapPage = ({ title }: TitleProp) => {
  return (
    <>
      <AllHeader title={title}>
        <CardDisplay>
          <DisplayReservationInfo />
        </CardDisplay>
        <CardDisplay>
          <SeatMap />
        </CardDisplay>
        <ButtonUI
          primaryLabel="Next →"
          secondaryLabel="← Go back"
          buttonType="button"
          pathNames={["/your-information", "/"]}
        />
      </AllHeader>
    </>
  );
};

export default SeatmapPage;
