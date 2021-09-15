import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ApolloProvider } from '@apollo/client';

import { useApolloClient } from '@providers/apollo';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default function AdminApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApolloClient(pageProps);

  return (
    <>
      <Head>
        <title>PICKK 카탈로그</title>
        <meta name="author" content="PICKK 카탈로그" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
