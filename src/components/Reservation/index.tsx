import React from "react";
import ReserveForm from "./presenter";
import CardDisplay from "../../uiParts/CardDisplay";
import AllHeader from "../../uiParts/AllHeader";
import { TitleProp } from "@/types/propTypes";

export default function Reservation({ title }: TitleProp) {
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
