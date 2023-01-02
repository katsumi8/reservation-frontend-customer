import Head from "next/head";
import React from "react";
import AllHeader from "@/uiParts/AllHeader";
import CardDisplay from "@/uiParts/CardDisplay";
import SeatMap from "./presenter";
import DisplayReservationInfo from "./DisplayReservationInfo";
import ButtonUI from "@/uiParts/ButtonUI";

const SeatmapPage = () => {
  const title = "Choose your table";

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Choose your table" />
      </Head>
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
    </React.Fragment>
  );
};

export default SeatmapPage;
