import PageContextProvider from "@/contexts/pageContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
    <Head>
      <title>Portfolio</title>
      <meta name="Portfolio" content="Responsive portfolio coded by UKN76" />
      <link rel="icon" href="/skull.ico"/>
    </Head>
    <PageContextProvider>
      <Component {...pageProps}/>
    </PageContextProvider>
    </>
  );
}

export default MyApp;