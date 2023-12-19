// _app.tsx
import Head from 'next/head';
import { AppProps } from 'next/app';
import { metadata } from '../metadata';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={metadata.icons} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        {/* Outros metadados aqui */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
