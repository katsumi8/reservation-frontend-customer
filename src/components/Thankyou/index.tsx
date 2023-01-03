import Head from "next/head";
import React from "react";
import AllHeader from "@/components/Common/AllHeader";
import { TitleProp } from "@/types/propTypes";

const Thankyou = ({ title }: TitleProp) => {
  return (
    <>
      <AllHeader title={title}>Thank you</AllHeader>
    </>
  );
};

export default Thankyou;
