import Head from "next/head";
import React from "react";
import ReserveForm from "./presenter";
import CardDisplay from "../../uiParts/CardDisplay";
import AllHeader from "../../uiParts/AllHeader";


export default function Reservation({ title }: { title: string }) {
  return (
    <div>
      <AllHeader title={title}>
        <CardDisplay>
          <ReserveForm />
        </CardDisplay>
      </AllHeader>
    </div>
  );
}
