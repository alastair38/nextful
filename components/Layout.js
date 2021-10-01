import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="p-16 w-full flex flex-col h-screen content-center justify-between">
      <header>
        <Link href="/">
          <a className="flex flex-col justify-center items-center">
            <h1 className="text-5xl ">
              <span className="text-purple-900 font-black">Next</span>Ful
            </h1>
          </a>
        </Link>
      </header>

      <div className="container pt-16 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {children}
      </div>

      <footer className="flex items-center p-4 justify-center">
        <p>
          Copyright 2021{' '}
          <span className="text-purple-900 font-black">Next</span>Ful
        </p>
      </footer>
    </div>
  );
}
