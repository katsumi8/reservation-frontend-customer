import Head from "next/head";
import React from "react";

const title = "Complete your reservation";

function YourInformation() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Make a reservation at this cafe" />
      </Head>

    </div>
  );
}

export default YourInformation;
