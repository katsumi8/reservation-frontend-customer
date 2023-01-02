import Head from "next/head";
import React from "react";
import AllHeader from "@/uiParts/AllHeader";

const ThankyouPage = () => {
  const title = "Thank you";

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Thank you" />
      </Head>
      <>
        <AllHeader title={title}>Thank you</AllHeader>
      </>
    </React.Fragment>
  );
};

export default ThankyouPage;
