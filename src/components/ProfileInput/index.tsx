import Head from "next/head";
import React from "react";
import AllHeader from "@/uiParts/AllHeader";
import CardDisplay from "@/uiParts/CardDisplay";
import DisplayReservationInfo from "../Seatmap/DisplayReservationInfo";
import BasicProfileInfo from "./presenter";
import { TitleProp } from "@/types/propTypes";

const ProfileInfo = ({ title }: TitleProp) => {
  return (
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
  );
};

export default ProfileInfo;
