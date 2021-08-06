import React from 'react';
import PropTypes from 'prop-types';

import { SiteConfig } from '../../../config';
import { PageSeo } from '../../../components/SEO';
import { useRouter } from 'next/router';
import AppLayout from '../../../components/AppLayout';
import { getAllPosts } from '../../../lib/data';
import PostCard from '../../../components/PostCard';
import DetailNavMenu from '../../../components/DetailNavMenu';

const IsCategory = ({ posts }) => {
  const router = useRouter();
  const { navMenu } = router.query;
  return (
    <>
      <PageSeo
        title={navMenu}
        description={SiteConfig.subtitle}
        url={`${SiteConfig.url}/category/${navMenu}`}
      />

      <AppLayout>
        <DetailNavMenu posts={posts} />
        {posts.map(
          (post) =>
            navMenu === post.category && <PostCard key={post.title} post={post} {...post} />,
        )}
      </AppLayout>
    </>
  );
};

export default IsCategory;

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

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        navMenu: post.data.category,
      },
    })),
    fallback: false,
  };
}

IsCategory.propTypes = {
  posts: PropTypes.array.isRequired,
};
