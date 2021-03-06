import { createClient } from 'contentful';
import PublicationsCard from '../../components/PublicationsCard';
import Head from 'next/head';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'publications' });

  return {
    props: {
      publications: res.items,
    },
    revalidate: 10,
  };
}

export default function AllPublications({ publications }) {
  return (
    <div className="recipe-list grid md:grid-cols-2 gap-6 md:w-4/5 mx-auto mb-10">
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
