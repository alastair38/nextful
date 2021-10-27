import { createClient } from 'contentful';
import Image from 'next/image';
import Head from 'next/head';
import Skeleton from '../components/Skeleton';
import Hero from '../components/Hero';
import Callout from '../components/Callout';
import FeaturedPublications from '../components/FeaturedPublications';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'homePage', include: 4 });

  return {
    props: {
      page: res.items[0],
    },
    revalidate: 10,
  };
}

export default function Home({ page }) {
  let { title, blocks } = page.fields;
  const content =
    blocks?.length > 0 &&
    blocks.map(
      (el, i) => {
        let elem = null;
        switch (el.fields.type) {
          case 'Hero':
            elem = <Hero key={i} {...el} />;
            break;
          case 'Callout':
            elem = <Callout key={i} {...el} />;
            break;
          case 'Featured Publications':
            elem = <FeaturedPublications key={i} {...el} />;
            break;
          // case 'mainContent':
          //   elem = <Skeleton key={i} />;
          //   break;
        }
        return elem;
      }

      // <li key={`${el.key}`} className="my-2 mr-4">
      //   {el.heading} / {el._type}
      // </li>
    );

  return (
    <div className="w-full grid mx-auto mb-10">
      <Head>
        <title>NextFul App</title>
        <meta name="description" content="Welcome to the NextFul App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="sr-only">{title}</h1>

      {/* <Image
        src={`https:${hero?.fields.file.url}`}
        width={hero?.fields.file.details.image.width}
        objectFit="cover"
        height={hero?.fields.file.details.image.height}
        alt={hero?.fields.description}
      /> */}

      {content}
    </div>
  );
}
