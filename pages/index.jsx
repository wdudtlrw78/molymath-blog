import React from 'react';
import PropTypes from 'prop-types';
import { PageSeo } from '../components/SEO';
import { SiteConfig } from '../config';

import PostCard from '../components/PostCard';

import DetailNavMenu from '../components/DetailNavMenu';
import { getAllPosts } from '../lib/data';
import AppLayout from '../components/AppLayout';

export default function Home({ posts }) {
  return (
    <>
      <PageSeo title={'Home'} description={SiteConfig.subtitle} url={SiteConfig.url} />
      <AppLayout>
        <DetailNavMenu posts={posts} />
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
