import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/router';
import SectionContainer from './SectionContainer';
import MobileNav from './MobileNav';

const AppLayout = ({ children }) => {
  const router = useRouter();

  const today = new Date();

  const onUpper = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SectionContainer>
        {/* HEADER */}
        <header className="w-screen bg-white fixed top-0 left-0 z-50 shadow">
          <div className="flex justify-between items-center mx-auto px-4 max-w-4xl h-16">
            <div>
              <Link exact href="/" prefetch={false}>
                <a>
                  <h1 className="text-logo text-main text-2xl font-bold">Molymath</h1>
                </a>
              </Link>
            </div>

            <ul className="hidden md:flex">
              <li className="p-4 text-small font-light hover:text-main cursor-pointer transition-colors">
                <Link href="/about" prefetch={false}>
                  <a className={router.pathname === '/about' ? 'active' : null}>About</a>
                </Link>
              </li>
              <li className="p-4 text-small font-light hover:text-main cursor-pointer transition-colors">
                <Link href="/portfolio" prefetch={false}>
                  <a className={router.pathname === '/portfolio' ? 'active' : null}>Portfolio</a>
                </Link>
              </li>
              <li className="pt-4 pl-4 pb-4 text-small font-light hover:text-main cursor-pointer transition-colors">
                <Link href="/books" prefetch={false}>
                  <a className={router.pathname === '/books' ? 'active' : null}>Books</a>
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
          <div className="font-light text-small">© {today.getFullYear()} | by molymath</div>
          <div className="opacity-60">
            <Link href="mailto:wdudtlrw78@gmail.com" prefetch={false}>
              <a className="px-2 hover:text-main">
                <FontAwesomeIcon className="instagram" icon={faEnvelope} size="lg" />
              </a>
            </Link>
            <Link href="https://github.com/wdudtlrw78" prefetch={false}>
              <a className="px-2 hover:text-main" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon className="github" icon={faGithub} size="lg" />
              </a>
            </Link>

            <Link href="https://www.instagram.com/mosik_2" prefetch={false}>
              <a
                className="px-2 hover:text-main"
                target="_blank"
                rel="noreferrer noopener"
                tel="github"
              >
                <FontAwesomeIcon className="instagram" icon={faInstagram} size="lg" />
              </a>
            </Link>
          </div>
        </footer>

        <div
          onClick={onUpper}
          className="hidden lg:block lg:fixed lg:bottom-14 lg:right-24 text-logo text-main cursor-pointer p-3 z-40 shadow rounded-half"
        >
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faArrowUp} size="2x" />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
