import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { SiteConfig } from '../config';

const About = () => {
  return (
    <>
      <Head>
        <title>{`About - ${SiteConfig.title}`}</title>
        <meta name="description" content={`About - ${SiteConfig.title}`} />
        <meta property="og:title" content={`About - ${SiteConfig.title}`} />
        <meta property="og:image" content="/molymath.png" />
        <meta property="og:url" content={`https://molymath.kr/about`} />
        <meta property="og:type" content="blog" />
      </Head>
      <AppLayout>
        <div style={{ fontSize: '24px' }}>준비 중입니다!!</div>
        {/* <h3>Intro</h3>
        <div>
          <p>
            블로그 이름은 몰리매스(MolyMath)라고 지었습니다.{' '}
            <span style={{ color: '#e96900' }}>
              폴리매스(PolyMath)와 저의 이름 Mo와 합성 형태로
            </span>
            <br />
            <div style={{ margin: '24px 0' }}>
              <strong>
                &quot;폴리매스는 박식가, 여러 주제에 대해 광범위하게 알고 있는 사람.
                <br /> 서로 연관이 없어 보이는 다양한 영역에서 출중한 재능을 발휘하며 방대하고
                종합적인 사고와 방법론을 지닌 사람&quot; <br />
                -폴리매스 책 본문에서-
              </strong>
            </div>
            을 의미합니다. 배움의 시대, 개발 이외에도 UX/UI, 책 서평 등 다양한 분야에서 학습하는
            것을 블로그에 포스팅할 계획입니다.
          </p>
        </div>
        <h3 style={{ fontSize: '18px' }}>모영식(MolyMath)</h3>
        <ul style={{ fontSize: '14px' }}>
          <li>1995.08.26</li>
          <li>Email | wdudtlrw78@gmail.com</li>
          <li>
            <span style={{ marginRight: '4px' }}>Github |</span>
            <Link href="https://github.com/wdudtlrw78">
              <a target="_blank" rel="noreferrer noopener" style={{ color: '#e96900' }}>
                https://github.com/wdudtlrw78
              </a>
            </Link>
          </li>
          <li>
            <span style={{ marginRight: '4px' }}>Blog |</span>
            <Link href="https://blog.naver.com/wdudtlrw">
              <a target="_blank" rel="noreferrer noopener" style={{ color: '#e96900' }}>
                https://blog.naver.com/wdudtlrw
              </a>
            </Link>
          </li>
        </ul>
        <h3>기술 스택</h3>
        <ul style={{ fontSize: '14px' }}>
          <span style={{ display: 'inline-block', fontSize: '18px', marginBottom: '16px' }}>
            Frontend
          </span>
          <li>HTML, CSS</li>
          <li>JavaScript, ES2015+</li>
          <li>SPA(React)</li>
          <span style={{ display: 'inline-block', fontSize: '18px', margin: '24px 0 16px 0' }}>
            Backend
          </span>
          <li>NodeJS, Express</li>
          <li>Git, Github</li>
          <span style={{ display: 'inline-block', fontSize: '18px', margin: '24px 0 16px 0' }}>
            Collaboration
          </span>
          <li>Figma</li>
          <li>Slack</li>
        </ul> */}
      </AppLayout>
    </>
  );
};

export default About;
