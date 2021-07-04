import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far);

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        height: 100%;
        font-size: 16px;
        font-family: Noto Sans KR, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      & p {
        margin: 20px 0;
        line-height: 1.75;
      }

      & pre {
        margin: 20px 0;
      }

      .menu-button {
        color: #e96900;
      }
      tr {
        border-top: 1px solid #c6cbd1;
        background: #fff;
      }

      th,
      td {
        padding: 6px 13px;
        border: 1px solid #dfe2e5;
      }

      table tr:nth-of-type(1) {
        background: #f6f8fa;
      }

      blockquote {
        color: #666;
        margin: 0;
        padding-left: 1em;
        border-left: 0.5em #eee solid;
      }

      em {
        color: #e96900;
        font-size: 0.875em;
        background-color: #f8f8f8;
        padding: 3px 5px;
        border-radius: 2px;
        white-space: nowrap;
      }
    `}
  />
);

const MolyMath = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>MolyMath</title>
      </Head>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
};

MolyMath.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MolyMath;
