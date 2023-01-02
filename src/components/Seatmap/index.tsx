import Head from "next/head";
import React from "react";
import AllHeader from "@/uiParts/AllHeader";
import CardDisplay from "@/uiParts/CardDisplay";
import SeatMap from "./presenter";
import DisplayReservationInfo from "./DisplayReservationInfo";
import ButtonUI from "@/uiParts/ButtonUI";
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
          pathNames={["/ProfileInput", "/Reservation"]}
        />
      </AllHeader>
    </>
  );
};

export default SeatmapPage;
