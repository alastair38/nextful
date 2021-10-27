import '../styles/global.css';
import Link from 'next/link';
import { createClient } from 'contentful';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as ga from '../lib/ga';

// import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';

MyApp.getInitialProps = async function () {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'mainNavigation' });
  const settings = await client.getEntries({ content_type: 'siteSettings' });

  return {
    props: {
      navItems: res.items,
      settings: settings.items,
    },
  };
};

function MyApp({ Component, pageProps, props }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout props={props}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
