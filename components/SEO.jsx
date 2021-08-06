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
        dateModified={modifiedAt}
        datePublished={publishedAt}
        description={summary}
        images={images}
        title={title}
        url={url}
        publisherLogo={`${SiteConfig.url}/favicon.ico`}
      />
    </>
  );
};
