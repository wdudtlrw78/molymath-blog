import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { SiteConfig } from '../../../config';
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
      <Head>
        <title>{`${navMenu} - ${SiteConfig.title}`}</title>
        <meta name="description" content={`${navMenu} - ${SiteConfig.title}`} />
        <meta property="og:title" content={navMenu} />
        <meta property="og:image" content="/molymath.png" />
        <meta property="og:url" content={`${SiteConfig.url}/category/${navMenu}`} />
        <meta property="og:type" content="blog" />
      </Head>

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

export default IsCategory;
