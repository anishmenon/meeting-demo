import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@livekit/components-styles';
import '@livekit/components-styles/prefabs';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Paskaitos - Demo"
        titleTemplate="%s"
        defaultTitle="Paskaitos - Demo"
        ></DefaultSeo>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
