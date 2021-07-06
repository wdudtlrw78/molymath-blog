import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio | MolyMath</title>
        <meta name="description" content="MolyMath Portfolio" />
        <meta property="og:title" content="Portfolio | MolyMath" />
        <meta property="og:description" content="MolyMath is Portfolio" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content={`https://molymath.vercel.app/portfolio`} />
        <meta property="og:type" content="blog" />
      </Head>
      <AppLayout>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <div style={{ fontSize: '24px' }}>준비 중입니다!!</div>
        </div>
      </AppLayout>
    </>
  );
};

export default Portfolio;
