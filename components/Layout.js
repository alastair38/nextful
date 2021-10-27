import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children, props }) {
  const router = useRouter();
  const path = router.asPath.slice(1);
  const { settings, navItems } = props;

  return (
    <div className="bg-gradient-to-b from-gray-100 to-green-100 w-full flex flex-col content-center justify-between">
      <header className="md:flex items-center justify-between px-4 sticky top-0 bg-gray-100 z-50">
        <Link href="/">
          <a className="flex flex-col justify-center items-center p-4">
            <h1 className="text-3xl ">
              <span className="text-purple-900 font-black">Next</span>Ful
            </h1>
          </a>
        </Link>
        <nav>
          <ul className="flex flex-wrap gap-4">
            {
              props.navItems?.map((navItem) => {
                const base =
                  navItem.fields.menuItem?.sys?.contentType.sys.id !== 'pages'
                    ? `/${navItem.fields.menuItem?.sys?.contentType.sys.id}/`
                    : '/';
                return (
                  <li
                    data-test={
                      navItem.fields.root
                        ? `root - ${navItem.fields.root}`
                        : `${base}${navItem.fields.menuItem?.fields?.slug}`
                    }
                    key={navItem.sys.id}
                  >
                    <Link
                      href={
                        navItem.fields.root
                          ? `/${navItem.fields.root}`
                          : `${base}${navItem.fields.menuItem?.fields?.slug}`
                      }
                    >
                      <a
                        className={
                          path === navItem.fields.menuItem?.fields?.slug ||
                          path === navItem.fields.root
                            ? `ring-4 ring-green-300 hover:ring-green-200 focus:ring-green-200 transition-colors px-4 rounded-full shadow-sm inline-flex items-center`
                            : `ring-4 ring-gray-200 hover:ring-green-200 focus:ring-green-200 transition-colors px-4 rounded-full shadow-sm inline-flex items-center`
                        }
                      >
                        {navItem.fields.title}
                      </a>
                    </Link>
                  </li>
                );
              })

              /* {props?.map((navItem) => {
            return !navItem.fields.root ? (
              <li
                className={
                  path === navItem.fields.menuItem?.fields?.slug
                    ? `bg-yellow-500`
                    : `bg-purple-500`
                }
                data-test={
                  navItem.fields.menuItem?.sys?.contentType.sys.id
                    ? `${navItem.fields.menuItem?.sys?.contentType.sys.id}`
                    : `bg-purple-500`
                }
                key={navItem.sys.id}
              >
                <Link href={`/${navItem.fields.menuItem?.fields?.slug}`}>
                  <a className="bg-red-200 ring-4 ring-red-100 hover:bg-red-100 focus:bg-red-100 transition-colors px-6 rounded-full shadow-sm inline-flex items-center">
                    {navItem.fields.menuItem?.sys?.contentType.sys.id}
                  </a>
                </Link>
              </li>
            ) : (
              <li
                className={
                  path === navItem.fields.root
                    ? `bg-yellow-500`
                    : `bg-purple-500`
                }
                key={navItem.sys.id}
              >
                <Link
                  href={
                    navItem.fields.root && navItem.fields.menuItem?.fields?.slug
                      ? `/${navItem.fields.root}/${navItem.fields.menuItem?.fields?.slug}`
                      : `/${navItem.fields.root}`
                  }
                >
                  <a className="bg-red-200 ring-4 ring-red-100 hover:bg-red-100 focus:bg-red-100 transition-colors px-6 rounded-full shadow-sm inline-flex items-center">
                    {`X ${navItem.fields.title}`}
                  </a>
                </Link>
              </li>
            );
          })} */
            }
          </ul>
        </nav>
      </header>

      <div className="pt-4 mx-auto items-center">{children}</div>

      <footer className="flex items-center p-4 justify-center">
        <p>
          Copyright 2021
          <span className="text-purple-900 font-black ml-2">
            {settings[0].fields.name}
          </span>
          <span className="ml-2">{settings[0].fields.twitterHandle}</span>
        </p>
      </footer>
    </div>
  );
}
