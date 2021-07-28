import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { PageSeo } from '../components/SEO';
import { SiteConfig } from '../config';

const Portfolio = () => {
  return (
    <>
      <PageSeo
        title={`Portfolio - ${SiteConfig.title}`}
        description={SiteConfig.subtitle}
        url={`${SiteConfig.url}/portfolio`}
      />
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
