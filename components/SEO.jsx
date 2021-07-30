import { NextSeo, ArticleJsonLd } from 'next-seo';

import { SiteConfig } from '../config';

export const SEO = {
  title: SiteConfig.title,
  description: SiteConfig.subtitle,
  openGraph: {
    type: 'website',
    locale: 'ko-KR',
    url: SiteConfig.url,
    title: SiteConfig.title,
    description: SiteConfig.subtitle,
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: SiteConfig.author.name,
    },
  ],
};

export const PageSeo = ({ title, description, url }) => {
  return (
    <>
      <NextSeo
        title={`${title} – ${SiteConfig.title}`}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [{ alt: title, url: '/molymath.png' }],
        }}
      />
      <meta name="google-site-verification" content="pk9mHtTQUcYfF6rk5vwTMJz8VCoKG4wxFv1Vv8gWwyQ" />
    </>
  );
};

export const BlogSeo = ({ title, summary, date, updatedAt, url, tags, images = [] }) => {
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(updatedAt || date).toISOString();

  const featuredImages = images.map((img) => {
    return {
      url: img,
      alt: title,
    };
  });

  return (
    <>
      <NextSeo
        title={`${title} – ${SiteConfig.title}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            authors: [`${SiteConfig.url}/about`],
            tags,
          },
          url,
          title,
          description: summary,
          images: featuredImages,
        }}
        additionalMetaTags={[
          {
            name: 'twitter:image',
            content: images[0],
          },
        ]}
      />
      <ArticleJsonLd
        authorName={SiteConfig.author.name}
        dateModified={modifiedAt}
        datePublished={publishedAt}
        description={summary}
        images={images}
        publisherName={SiteConfig.author.name}
        title={title}
        url={url}
        publisherLogo={`${SiteConfig.url}/favicon.ico`}
      />
      <meta name="google-site-verification" content="pk9mHtTQUcYfF6rk5vwTMJz8VCoKG4wxFv1Vv8gWwyQ" />
    </>
  );
};
