import React from 'react';
import Link from 'next/link';

export default function NotFoundPag() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div style={{ textAlign: 'center' }}>
        <div>
          <h1>
            404 Error <span style={{ fontWeight: '400' }}>Page Not Found</span>
          </h1>
        </div>
        <div>
          <p>Sorry we couldn&apos;t find this page.</p>
          <p>But don&apos;t worry, you can find plenty of other things on my blog 👀</p>
          <Link href="/">
            <div
              style={{
                display: 'inline-block',
                marginTop: '16px',
                padding: '8px 16px',
                backgroundColor: '#e96900',
                borderRadius: '8px',
                cursor: 'pointer',
                boxSizing: 'border-box',
              }}
            >
              <a style={{ color: '#fff' }}>Back to blog</a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
