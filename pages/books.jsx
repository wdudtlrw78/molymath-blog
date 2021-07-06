import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import getAllPosts from '../lib/data';

const Books = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Profile | MolyMath</title>
        <meta name="description" content="MolyMath Blog" />
        <meta property="og:title" content="Profile | MolyMath" />
        <meta property="og:description" content="MolyMath is Profile" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content={`https://molymath.vercel.app/profile`} />
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
