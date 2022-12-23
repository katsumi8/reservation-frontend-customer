import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "../../contexts/store";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/%E3%81%A7%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%92%E8%B5%B7%E5%8B%95%E4%B8%AD%E3%83%BB%E3%83%BB%E3%83%BB",
  cache: new InMemoryCache(),
});

export default function App(props) {
  const { Component, pageProps } = props;

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
