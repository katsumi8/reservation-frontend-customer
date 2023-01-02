import Head from "next/head";
import React from "react";

const title = "Thank you";

function ThankyouPage() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Make a reservation at this cafe" />
      </Head>

    </div>
  );
}

export default ThankyouPage;
