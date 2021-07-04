import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import getAllPosts from '../lib/data';
import DetailNavMenu from '../components/DetailNavMenu';

export const ListSectionTitle = styled.h1`
  margin-bottom: 56px;
  padding-bottom: 36px;
  font-size: 48px;
  text-align: center;
  color: #777;
  border-bottom: 1px solid #c0c0c0;

  @media (max-width: 380px) {
    font-size: 36px;
  }
`;

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>MolyMath</title>
      </Head>
      <AppLayout>
        <p style={{ color: '#e96900', textAlign: 'center', fontSize: '16px', fontWeight: '500' }}>Tag</p>
        <DetailNavMenu posts={posts} />
        <ListSectionTitle>All</ListSectionTitle>
        {posts.map((post) => (
          <PostCard key={post.title} post={post} {...post} />
        ))}
      </AppLayout>
    </>
  );
}

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
