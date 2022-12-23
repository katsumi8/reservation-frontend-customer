import Head from "next/head";
import React from "react";
import AllHeader from "@/uiParts/AllHeader";
import CardDisplay from "@/uiParts/CardDisplay";
import DisplayReservationInfo from "../Seatmap/DisplayReservationInfo";
import BasicProfileInfo from "./presenter";

const NewMeetupPage = () => {
  const title = "Complete your reservation";

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Put your profile information." />
      </Head>
      <>
        <AllHeader title={title}>
          <div>Reservation info</div>
          <CardDisplay>
            <DisplayReservationInfo />
          </CardDisplay>
          <div>Your info</div>
          <CardDisplay>
            <BasicProfileInfo />
          </CardDisplay>
        </AllHeader>
      </>
    </React.Fragment>
  );
};

export default NewMeetupPage;
