import React from 'react';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';

const Profile = () => {
  return (
    <AppLayout>
      <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: '500' }}>프로필</p>
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
      </ul>
    </AppLayout>
  );
};

export default Profile;
