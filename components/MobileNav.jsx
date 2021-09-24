import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function MobileNav() {
  const router = useRouter();
  const [NavShow, setNavShow] = useState(false);

  const onToggleNav = useCallback(() => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  }, []);

  return (
    <>
      <button type="button" onClick={onToggleNav} className="flex md:hidden">
        <FontAwesomeIcon icon={faBars} className="cursor-pointer text-large text-sub" />
      </button>

      {NavShow && (
        <>
          <aside className="fixed top-0 right-0 w-72 bg-white h-screen z-75 pt-24 px-6 pb-10">
            <button
              type="button"
              className="absolute top-6 right-6 text-large hover:text-sub transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} onClick={onToggleNav} />
            </button>

            <ul>
              <li className="p-4 text-small font-light hover:text-main cursor-pointer transition-colors">
                <Link href="https://www.notion.so/mong88/f1e9afc15a204947837d3e776a239834">
                  <a a target="_blank" rel="noreferrer noopener" onClick={onToggleNav}>
                    Resume
                  </a>
                </Link>
              </li>
              <li className="p-4 text-small font-light hover:text-main cursor-pointer transition-colors">
                <Link href="/books">
                  <a
                    className={router.pathname === '/books' ? 'active' : null}
                    onClick={onToggleNav}
                  >
                    Books
                  </a>
                </Link>
              </li>
              <li className="pt-4 pl-4 pb-4 text-small font-light hover:text-main cursor-pointer transition-colors">
                <Link href="https://github.com/wdudtlrw78/molymath-blog/issues/1">
                  <a target="_blank" rel="noreferrer noopener" onClick={onToggleNav}>
                    블로그 건의하기
                  </a>
                </Link>
              </li>
            </ul>
          </aside>
          <div
            onClick={onToggleNav}
            className="fixed top-0 left-0 bg-black w-full h-screen opacity-80 z-50 cursor-pointer"
          ></div>
        </>
      )}
    </>
  );
}

export default MobileNav;
