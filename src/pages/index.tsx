import Head from "next/head";

const title = "Create your reservation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Make a reservation at this cafe" />
      </Head>

    </div>
  );
}
