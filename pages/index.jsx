import React from 'react';
import PropTypes from 'prop-types';
import { PageSeo } from '../components/SEO';
import { SiteConfig } from '../config';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import getAllPosts from '../lib/data';
import DetailNavMenu from '../components/DetailNavMenu';

export default function Home({ posts }) {
  return (
    <>
      <PageSeo title={'Home'} description={SiteConfig.subtitle} url={SiteConfig.url} />
      <AppLayout>
        <p
          style={{
            color: '#e96900',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          Tag
        </p>
        <DetailNavMenu posts={posts} />
        {posts.map((post) => (
          <PostCard key={post.title} post={post} {...post} />
        ))}
      </AppLayout>
    </>
  );
}

export const getStaticProps = async () => {
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
};

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};
