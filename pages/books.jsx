import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import getAllPosts from '../client/lib/data';
import { PageSeo } from '../components/SEO';
import { SiteConfig } from '../config';

const Books = () => {
  return (
    <>
      <PageSeo
        title={`Books - ${SiteConfig.title}`}
        description={SiteConfig.subtitle}
        url={`${SiteConfig.url}/books`}
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

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date,
        content,
        slug,
      })),
    },
  };
}

export default Books;
