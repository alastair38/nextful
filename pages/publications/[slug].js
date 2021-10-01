import { createClient } from 'contentful';
import Head from 'next/head';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'publication' });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths: paths, // const paths returns an array of objects which can be used as the paths object returned from the function
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // destructure the params property (line 13) to give access to the current slug
  const { items } = await client.getEntries({
    // destructure items from the res(ponse)
    content_type: 'publication',
    'fields.slug': params.slug, // only get the entry with the field.slug property matches the current params.slug
  });
  return {
    props: {
      publication: items[0], // get the first element from the items array and set it to the publication prop
    },
    revalidate: 10,
  };
}

export default function PublicationDetails({ publication }) {
  // destructure the publication prop as it is passed to the PublicationDetails function
  console.log(publication);
  const { featuredImage, title, excerpt, description } = publication.fields;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="grid grid-cols-2 items-center bg-gray-100">
        <h2 className="text-4xl font-bold p-4">{publication.fields.title}</h2>
        <div className="featured relative h-80 w-full overflow-hidden">
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            width={featuredImage.fields.file.details.image.width}
            objectFit="cover"
            height={featuredImage.fields.file.details.image.height}
            alt={featuredImage.fields.description}
          />
        </div>
      </header>
      <div className="mx-auto py-16 prose">
        {documentToReactComponents(description)}
      </div>
    </div>
  );
}
