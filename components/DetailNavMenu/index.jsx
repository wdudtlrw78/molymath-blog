import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/dist/client/link';
import styled from '@emotion/styled';
import PropTypes, { func } from 'prop-types';
import navData from '../../lib/navData';
import { useRouter } from 'next/router';

export const NavContainer = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  list-style: none;
  margin-bottom: 56px;

  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 20px;
  }

  .active {
    font-weight: 500;
    color: #e96900;
  }

  & a {
    display: flex;
    color: #212121;
    text-decoration: none;
  }
`;

export const CountBox = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px 4px 0 0 rgb(0 0 0 / 8%);
  text-align: center;
`;

export const Count = styled.span`
  font-size: 13px;
  color: #e96900;
`;

const DetailNavMenu = ({ posts }) => {
  const router = useRouter();
  const { navMenu } = router.query;

  return (
    <NavContainer>
      <li>
        <Link href="/" prefetch={false}>
          <a className={router.pathname === '/' && 'active'}>
            All
            <CountBox>
              <Count>{posts.length}</Count>
            </CountBox>
          </a>
        </Link>
      </li>
      {navData.map((menu) => (
        <li key={menu.category}>
          <Link href={`/category/${menu.category}`} prefetch={false}>
            <a className={navMenu === menu.category && 'active'}>
              {menu.category}
              <CountBox>
                <Count>
                  {
                    posts.filter((post) => menu.category === post.category)
                      .length
                  }
                </Count>
              </CountBox>
            </a>
          </Link>
        </li>
      ))}
    </NavContainer>
  );
};

DetailNavMenu.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default DetailNavMenu;
