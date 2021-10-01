import { createClient } from 'contentful';
import PublicationsCard from '../components/PublicationsCard';
import Head from 'next/head';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'publication' });

  return {
    props: {
      publications: res.items,
    },
  };
}

export default function Publications({ publications }) {
  return (
    <div className="recipe-list grid grid-cols-2 gap-6 w-4/5 mx-auto">
      <Head>
        <title>NextFul App</title>
        <meta name="description" content="Welcome to the NextFul App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {publications.map((publication) => (
        <PublicationsCard key={publication.sys.id} publication={publication} />
      ))}
    </div>
  );
}
