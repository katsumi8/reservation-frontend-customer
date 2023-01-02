import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "@/contexts/store";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";


const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL as string,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </MantineProvider>
    </>
  );
}
