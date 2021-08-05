import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import AppLayout from '../../components/AppLayout';
import { getAllPosts } from '../../lib/data';
import { BlogSeo } from '../../components/SEO';
import { SiteConfig } from '../../config';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export default function Blog({ slug, title, content, category, date }) {
  const MDXRemoteContent = MDXRemote(content);
  return (
    <>
      <BlogSeo
        title={title}
        summary={content}
        date={date}
        url={`${SiteConfig.url}/category/${slug}`}
      />
      <Head>
        <meta property="og:title" content={`${title} - ${SiteConfig.title}`} />
        <meta property="og:description" content={content} />
        <meta property="og:image" content="/molymath.png" />
        <meta property="og:url" content={`https://molymath.kr/post/${slug}`} />
        <meta property="og:type" content="blog" />
      </Head>
      <AppLayout>
        <div style={{ marginBottom: '32px', cursor: 'unset' }}>
          <div style={{ marginBottom: '10px' }}>
            <div>{title}</div>
          </div>
          <div>
            <div>{dayjs(date).format('M월.DD.YYYY')}</div>
            <div>
              <span>{category}</span>
            </div>
          </div>
        </div>
        <div className="prose">{MDXRemoteContent}</div>
      </AppLayout>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content, slug } = allPosts.find((item) => item.slug === params.slug);

  const mdxSource = await serialize(content);

  return {
    props: {
      ...data,
      date: data.date,
      content: mdxSource,
      slug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

Blog.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
