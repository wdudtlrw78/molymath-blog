import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import SectionContainer from './SectionContainer';
import MobileNav from './MobileNav';

const AppLayout = ({ children }) => {
  const router = useRouter();
  const today = new Date();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const onToggleDarkAndLight = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  const onUpper = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (!mounted) return null;

  return (
    <>
      <SectionContainer>
        {/* HEADER */}
        <header className="w-screen bg-white fixed top-0 left-0 z-50 shadow dark:bg-dark-bg dark:shadow-dark">
          <div className="flex justify-between items-center mx-auto px-4 max-w-4xl h-16">
            <div>
              <Link exact href="/">
                <a>
                  <h1 className="text-logo text-main text-2xl font-bold dark:text-sub">Molymath</h1>
                </a>
              </Link>
            </div>

            <ul className="hidden md:flex ">
              <li className="p-4 text-small font-light hover:text-main cursor-pointer transition-colors dark:text-subDark dark:hover:text-sub">
                <Link href="https://www.notion.so/mong88/f1e9afc15a204947837d3e776a239834">
                  <a target="_blank" rel="noreferrer noopener">
                    Resume
                  </a>
                </Link>
              </li>
              <li className="p-4 text-small font-light hover:text-main cursor-pointer transition-colors dark:text-subDark dark:hover:text-sub">
                <Link href="/books">
                  <a className={router.pathname === '/books' ? 'active dark:text-sub' : null}>
                    Books
                  </a>
                </Link>
              </li>
              <li className="pt-4 pl-4 pb-4 text-small font-light hover:text-main cursor-pointer transition-colors dark:text-subDark dark:hover:text-sub">
                <Link href="https://github.com/wdudtlrw78/molymath-blog/issues/1">
                  <a target="_blank" rel="noreferrer noopener">
                    ????????? ????????????
                  </a>
                </Link>
              </li>
            </ul>
            <MobileNav />
          </div>
        </header>

        {/* MAIN */}
        <main className="pt-24">
          <div className="p-12 shadow-lg relative">{children}</div>
        </main>

        {/* FOOTER */}
        <footer className="flex justify-between items-center mx-auto max-w-4xl my-4 h-16 px-4">
          <div className="font-light text-small dark:text-subDark">
            ?? {today.getFullYear()} | by molymath
          </div>
          <div className="opacity-60 dark:text-subDark ">
            <Link href="mailto:wdudtlrw78@gmail.com">
              <a className="px-2 hover:text-sub">
                <FontAwesomeIcon className="instagram" icon={faEnvelope} size="lg" />
              </a>
            </Link>
            <Link href="https://github.com/wdudtlrw78">
              <a className="px-2 hover:text-sub" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon className="github" icon={faGithub} size="lg" />
              </a>
            </Link>

            <Link href="https://www.instagram.com/mosik_2">
              <a
                className="px-2 hover:text-sub"
                target="_blank"
                rel="noreferrer noopener"
                tel="github"
              >
                <FontAwesomeIcon className="instagram" icon={faInstagram} size="lg" />
              </a>
            </Link>
          </div>
        </footer>

        {/* DARKMODE BUTTON  */}
        <button
          type="button"
          ariar-label="Toggle Dark Mode"
          onClick={onToggleDarkAndLight}
          className="w-14 h-14 block fixed bg-white bottom-8 right-24 text-logo text-main cursor-pointer p-3 z-40 shadow rounded-half dark:bg-dark-bg dark:shadow-dark dark:text-sub"
        >
          <div className="w-full h-full flex justify-center items-center">
            {theme === 'dark' ? (
              <FontAwesomeIcon icon={faSun} size="UNSET" />
            ) : (
              <FontAwesomeIcon icon={faMoon} size="UNSET" />
            )}
          </div>
        </button>

        {/* UPPER BUTTON */}
        <button
          type="button"
          onClick={onUpper}
          className="w-14 h-14 block fixed bg-white bottom-8 right-8 text-logo text-main cursor-pointer p-3 z-40 shadow rounded-half dark:bg-dark-bg dark:shadow-dark dark:text-sub"
        >
          <div className="w-full h-full flex justify-center items-center">
            <FontAwesomeIcon icon={faArrowUp} size="lg" />
          </div>
        </button>
      </SectionContainer>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
