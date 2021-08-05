import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/router';
import SectionContainer from './SectionContainer';

const AppLayout = ({ children }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const router = useRouter();

  const today = new Date();

  const toggleNavMenu = useCallback(() => {
    setShowNavMenu((prev) => !prev);
    setShowBackground((prev) => !prev);
  }, []);

  const onUpper = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SectionContainer>
        <header className="flex">
          <div>
            <div show={showNavMenu} onClick={toggleNavMenu}>
              <FontAwesomeIcon className="menu-button" icon={faBars} size="2x" />
            </div>
            <div>
              <Link exact href="/" prefetch={false}>
                <a>
                  <h1 className="text-s text-main font-bold">MolyMath</h1>
                </a>
              </Link>
            </div>
          </div>
        </header>
        {showNavMenu && (
          <>
            <nav show={showNavMenu}>
              <ul>
                <li>
                  <Link href="/" prefetch={false}>
                    <a>MolyMath</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about" prefetch={false}>
                    <a className={router.pathname === '/about' ? 'active' : undefined}>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" prefetch={false}>
                    <a className={router.pathname === '/portfolio' ? 'active' : undefined}>
                      Portfolio
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/books" prefetch={false}>
                    <a className={router.pathname === '/books' ? 'active' : undefined}>Books</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
        {showBackground && <div show={showBackground} onClick={toggleNavMenu} />}

        <main>{children}</main>

        <footer>
          <div>
            <Link href="mailto:wdudtlrw78@gmail.com" prefetch={false}>
              <a>
                <FontAwesomeIcon className="instagram" icon={faEnvelope} size="lg" />
              </a>
            </Link>
            <Link href="https://github.com/wdudtlrw78" prefetch={false}>
              <a target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon className="github" icon={faGithub} size="lg" />
              </a>
            </Link>

            <Link href="https://www.instagram.com/mosik_2" prefetch={false}>
              <a target="_blank" rel="noreferrer noopener" tel="github">
                <FontAwesomeIcon className="instagram" icon={faInstagram} size="lg" />
              </a>
            </Link>
          </div>
          © {today.getFullYear()} | by molymath
        </footer>

        <div onClick={onUpper}>
          <div className="main">
            <FontAwesomeIcon className="arrow-up" icon={faArrowUp} size="2x" />
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
