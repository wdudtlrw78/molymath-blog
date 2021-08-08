import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import AppLayout from '../../components/AppLayout';
import { getAllPosts } from '../../lib/data';
import { SiteConfig } from '../../config';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export default function Blog({ slug, title, content, category, date, corver_image }) {
  const MDXRemoteContent = MDXRemote(content);
  return (
    <>
      <Head>
        <title>{`${title} - ${SiteConfig.title}`}</title>
        <meta name="description" content={content} />
        <meta property="og:title" content={`${title} - ${SiteConfig.title}`} />
        <meta property="og:description" content={content} />
        <meta property="og:image" content={corver_image} />
        <meta property="og:url" content={`${SiteConfig.url}/post/${slug}`} />
        <meta property="og:type" content="blog" />
      </Head>
      <AppLayout>
        <section className="mt-minus48 mr-minus48 ml-minus48 ">
          <Image
            src={corver_image}
            alt="#"
            width={864}
            height={288}
            objectFit="contain"
            className="mt-minus48"
          />
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center mt-2 opacity-80">
              <div>{dayjs(date).format('M월.DD.YYYY')}</div>
              <div className="flex justify-center items-center w-106 h-6 ml-2 shadow rounded-small">
                <span>{category}</span>
              </div>
            </div>
            <div className="my-6 px-4 text-center">
              <div className="text-title font-bold text-article">{title}</div>
            </div>
            <div className="flex justify-center items-center mb-8 opacity-80">
              <div className="w-1.5 h-1.5 rounded-half bg-current text-article"></div>
              <div className="w-1.5 h-1.5 rounded-half bg-current mx-2 text-article "></div>
              <div className="w-1.5 h-1.5 rounded-half bg-current text-article"></div>
            </div>
          </div>
        </section>
        <div className="prose max-w-none mb-minus16 p-4 mx-minus48 lg:p-7 lg:mx-0">
          {MDXRemoteContent}
          <div className="flex justify-center items-center mt-12 opacity-80">
            <div className="w-1.5 h-1.5 rounded-half bg-current text-article"></div>
            <div className="w-1.5 h-1.5 rounded-half bg-current mx-2 text-article"></div>
            <div className="w-1.5 h-1.5 rounded-half bg-current text-article"></div>
          </div>
          <span className="flex justify-center items-center text-logo text-article mt-4">
            읽어주셔서 감사합니다!!
          </span>
        </div>
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
  corver_image: PropTypes.string.isRequired,
};
