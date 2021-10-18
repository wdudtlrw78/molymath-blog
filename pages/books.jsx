import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { getAllPosts } from '../lib/data';
import { SiteConfig } from '../config';

const Books = () => {
  return (
    <>
      <Head>
        <title>{`Books - ${SiteConfig.title}`}</title>
        <meta name="description" content={`Books - ${SiteConfig.title}`} />
        <meta property="og:title" content={`Books - ${SiteConfig.title}`} />
        <meta property="og:image" content="/molymath.png" />
        <meta property="og:url" content={`${SiteConfig.url}/books`} />
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
          <h1 className="text-large dark:text-mainDark">준비 중입니다!!</h1>
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
