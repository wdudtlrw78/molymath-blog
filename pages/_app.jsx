import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { DefaultSeo } from 'next-seo';

import { SiteConfig } from '../config';
import { SEO } from '../components/SEO';
import Script from 'next/script';

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

      em {
        color: #e96900;
        font-size: 0.875em;
        background-color: #f8f8f8;
        padding: 3px 5px;
        border-radius: 2px;
      }

      & a {
        margin: 20px 0;
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
    `}
  />
);

const MolyMath = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      {globalStyles}
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${SiteConfig.googleAnalyticsId}`}
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${SiteConfig.googleAnalyticsId}', {
            page_path: window.location.pathname,
            `,
            }}
          />
        </>
      )}
    </>
  );
};

MolyMath.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MolyMath;
