import { AppProps } from 'next/app';
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
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
