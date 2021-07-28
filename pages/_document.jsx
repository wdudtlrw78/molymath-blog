import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta property="og:type" content="blog" />
          <meta property="og:locale" content="ko_KR" />

          <meta name="maspplication-TileColor" content="#e96900" />
          <meta name="application-name" content="molymath" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="molymath blog" />
          <meta name="description" content="molymath blog" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-TileColor" content="#e96900" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="msapplication-TileImage" content="/images/logo.png" />
          <meta name="theme-color" content="#e96900" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
