import Head from 'next/head';
import type {AppProps} from 'next/app';

import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Shop</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="TODO: A awesome description!" />
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
