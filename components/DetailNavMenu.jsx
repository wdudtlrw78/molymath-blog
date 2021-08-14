import React from 'react';
import Link from 'next/dist/client/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { navData } from '../lib/navData';

const DetailNavMenu = ({ posts }) => {
  const router = useRouter();
  const { navMenu } = router.query;

  return (
    <div className="mb-8 opacity-80 hover:opacity-100">
      <nav className="w-full grid grid-cols-fill">
        <li className="flex justify-center items-center py-2">
          <Link href="/">
            <a
              className={
                router.pathname === '/'
                  ? 'active flex font-normal text-small'
                  : 'flex font-normal text-small hover:text-main transition-colors'
              }
            >
              All
              <div className="w-20 h-20 ml-2 bg-white rounded-large shadow text-center">
                <div className="text-small text-main">{posts.length}</div>
              </div>
            </a>
          </Link>
        </li>
        {navData.map((menu) => (
          <li key={menu.category} className="flex justify-center items-center py-2">
            <Link href={`/category/${menu.category}`} prefetch={false}>
              <a
                className={
                  navMenu === menu.category
                    ? 'active flex font-normal text-small'
                    : 'flex font-normal text-small hover:text-main transition-colors'
                }
              >
                {menu.category}
                <div className="w-20 h-20 ml-2 bg-white rounded-large shadow text-center">
                  <div className="text-small">
                    {posts.filter((post) => menu.category === post.category).length}
                  </div>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </nav>
    </div>
  );
};

DetailNavMenu.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default DetailNavMenu;
