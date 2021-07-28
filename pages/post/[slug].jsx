import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import gfm from 'remark-gfm';
import AppLayout from '../../components/AppLayout';
import getAllPosts from '../../lib/data';
import {
  AarticleContainer,
  CategoryBox,
  Date,
  DateAndCategoryContainer,
  Meta,
  Title,
} from '../../components/PostCard/styles';
import { BlogSeo } from '../../components/SEO';
import { SiteConfig } from '../../config';

export default function Blog({ slug, title, content, category, date }) {
  const source = content.replace(/\r\n/gi, '\n &nbsp;');

  return (
    <>
      <BlogSeo
        title={title}
        summary={content}
        date={date}
        url={`${SiteConfig.url}/category/${slug}`}
      />
      <AppLayout>
        <Meta style={{ marginBottom: '32px', cursor: 'unset' }}>
          <AarticleContainer style={{ marginBottom: '10px' }}>
            <Title>{title}</Title>
          </AarticleContainer>
          <DateAndCategoryContainer>
            <Date>{dayjs(date).format('M월.DD.YYYY')}</Date>
            <CategoryBox>
              <span>{category}</span>
            </CategoryBox>
          </DateAndCategoryContainer>
        </Meta>
        <ReactMarkdown
          components={{
            source,
            a: (props) => {
              if (props.href.match('http')) {
                return (
                  <a href={props.href} target="_blank" rel="noreferrer noopener">
                    {props.children}
                  </a>
                );
              }
              return <a href={props.href}>{props.children}</a>;
            },
            p: (paragraph) => {
              const { node } = paragraph;
              if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, '');
                const isPriority = image.properties.alt?.toLowerCase().includes('{priority}');
                const metaWidth = image.properties.alt.match(/{([^}]+)x/);
                const metaHeight = image.properties.alt.match(/x([^}]+)}/);
                const width = metaWidth ? metaWidth[1] : '1600';
                const height = metaHeight ? metaHeight[1] : '1000';
                return (
                  <div className="image">
                    <Image
                      src={image.properties.src}
                      width={width}
                      height={height}
                      className="postImg"
                      alt={alt}
                      priority={isPriority}
                    />
                  </div>
                );
              }
              // Return default child if it's not an image
              return <p>{paragraph.children}</p>;
            },
            code({ className, children }) {
              const language = className.replace('language-', '');
              return (
                <SyntaxHighlighter
                  style={materialDark}
                  language={language}
                  children={children[0]}
                />
              );
            },
          }}
          remarkPlugins={[gfm]}
        >
          {content}
        </ReactMarkdown>
      </AppLayout>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content, slug } = allPosts.find((item) => item.slug === params.slug);

  return {
    props: {
      ...data,
      date: data.date,
      content,
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
    fallback: 'blocking',
  };
}

Blog.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
