import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="p-16 w-full flex flex-col h-screen content-center justify-between">
      <header>
        <Link href="/">
          <a className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">NextFul</h1>
          </a>
        </Link>
      </header>

      <div className="container py-16 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {children}
      </div>

      <footer className="flex items-center justify-center">
        <p>Copyright 2021 NextFul</p>
      </footer>
    </div>
  );
}
