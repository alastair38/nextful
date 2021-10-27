import { createClient } from 'contentful';
import Head from 'next/head';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Skeleton from '../components/Skeleton';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'pages' });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths: paths, // const paths returns an array of objects which can be used as the paths object returned from the function
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // destructure the params property (line 17) to give access to the current slug
  const { items } = await client.getEntries({
    // destructure items from the res(ponse)
    content_type: 'pages',
    'fields.slug': params.slug, // only get the entry with the field.slug property matches the current params.slug
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      page: items[0], // get the first element from the items array and set it to the page prop
    },
    revalidate: 10,
  };
}

export default function PageDetails({ page }) {
  if (!page) return <Skeleton />;
  // destructure the page prop as it is passed to the PageDetails function
  // console.log(page);
  const { featuredImage, title, excerpt, description } = page.fields;
  return (
    <div className="max-w-prose mx-auto">
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="grid md:grid-cols-2 items-center overflow-hidden">
        <h2 className="text-5xl font-bold">{title}</h2>
        <div className="featured relative w-full ">
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            width={featuredImage.fields.file.details.image.width}
            objectFit="instrinsic"
            height={featuredImage.fields.file.details.image.height}
            alt={featuredImage.fields.description}
          />
        </div>
      </header>
      <div className="mx-auto py-8 prose">
        {documentToReactComponents(description)}
      </div>
    </div>
  );
}
