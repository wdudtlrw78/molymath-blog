import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import PostCard from '../components/PostCard';
import DetailNavMenu from '../components/DetailNavMenu';
import { getAllPosts } from '../lib/data';
import AppLayout from '../components/AppLayout';
import { SiteConfig } from '../config';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Molymath</title>
        <meta
          name="description"
          content="웹개발과 책 서평등 학습하고 공유하는 MolyMath 온라인 블로그입니다. 감사합니다."
        />
        <meta property="og:title" content={`${SiteConfig.title}`} />
        <meta
          property="og:description"
          content="웹개발과 책 서평등 학습하고 공유하는 MolyMath 온라인 블로그입니다. 감사합니다."
        />
        <meta property="og:image" content="/molymath.png" />
        <meta property="og:url" content={`${SiteConfig.url}`} />
        <meta property="og:type" content="blog" />
      </Head>
      <AppLayout>
        <DetailNavMenu posts={posts} />
        {posts.map((post) => (
          <PostCard key={post.title} post={post} {...post} />
        ))}
      </AppLayout>
    </>
  );
}

// pre-renderring
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

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};
