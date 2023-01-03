import React from "react";
import { TitleProp } from "@/types/propTypes";
import { useFetchTableData } from "@/utils/query/fetchTableData";
import SeatMapPresenter from "./presenter";

const SeatMap = ({ title }: TitleProp) => {
  const { seatmap, error, loading } = useFetchTableData();

  return (
    <SeatMapPresenter
      loading={loading}
      error={error}
      title={title}
      seatmap={seatmap}
    />
  );
};

export default SeatMap;
