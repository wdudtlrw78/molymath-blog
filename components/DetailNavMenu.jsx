import React from 'react';
import Link from 'next/dist/client/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import navData from '../lib/navData';

const DetailNavMenu = ({ posts }) => {
  const router = useRouter();
  const { navMenu } = router.query;

  return (
    <nav>
      <li>
        <Link href="/" prefetch={false}>
          <a className={router.pathname === '/' ? 'active' : undefined}>
            All
            <div>
              <div>{posts.length}</div>
            </div>
          </a>
        </Link>
      </li>
      {navData.map((menu) => (
        <li key={menu.category}>
          <Link href={`/category/${menu.category}`} prefetch={false}>
            <a className={navMenu === menu.category ? 'active' : undefined}>
              {menu.category}
              <div>
                <div>{posts.filter((post) => menu.category === post.category).length}</div>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </nav>
  );
};

DetailNavMenu.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default DetailNavMenu;
