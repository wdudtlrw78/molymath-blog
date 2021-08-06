import '../globalStyled.css';
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far);

const MolyMath = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>molymath</title>
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
