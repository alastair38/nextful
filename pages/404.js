import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, []);
  return (
    <div className="grid place-items-center w-full">
      <Head>
        <title>404 - No content</title>
        <meta
          name="description"
          content="This is the 404 page. There is no content at this URL."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-3xl font-black">Ain't found nothing</h2>
      <p className="p-4">
        You're being redirected to the{' '}
        <Link href="/">
          <a> home page</a>
        </Link>
        .
      </p>
    </div>
  );
}
