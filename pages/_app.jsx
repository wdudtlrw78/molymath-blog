import '../globalStyled.css';
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { SiteConfig } from '../config';

library.add(fab, far);

const MolyMath = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Molymath</title>
        <meta
          name="description"
          content="웹개발과 책 서평등 학습하고 공유하는 MolyMath 온라인 블로그입니다. 감사합니다."
        />
        <meta name="description" content={`${SiteConfig.title}`} />
        <meta
          property="og:title"
          content="웹개발과 책 서평등 학습하고 공유하는 MolyMath 온라인 블로그입니다. 감사합니다."
        />
        <meta property="og:image" content="/molymath.png" />
        <meta property="og:url" content={`${SiteConfig.url}`} />
        <meta property="og:type" content="blog" />
      </Head>
      <Component {...pageProps} />
      {/* {process.env.NODE_ENV === 'production' && (
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
      )} */}
    </>
  );
};

MolyMath.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MolyMath;
