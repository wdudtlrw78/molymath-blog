import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 1600px;
  height: 1400px;
  margin: 0px auto;

  @media (min-width: 1340px) {
    max-width: calc(1356px);
  }

  @media (min-width: 820px) {
    max-width: calc(1100px);
  }

  @media (min-width: 320px) {
    margin: 0px auto;
  }
`;

export const Header = styled.header`
  width: 100%;
  max-width: 100%;
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 1px 4px 0 0 rgb(0 0 0 / 8%);

  & a {
    color: #212121;
    text-decoration: none;
  }

  @media (min-width: 820px) {
    height: 64px;
  }

  z-index: 999;
`;

export const BackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0px;
  z-index: 50;
`;

export const Container = styled.div`
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1340px) {
    max-width: calc(1356px);
  }

  @media (min-width: 820px) {
    max-width: calc(1100px);
    flex-direction: row;
  }

  @media (min-width: 320px) {
    margin: 0px auto;
  }
`;

export const ToggleMenuButton = styled.button`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 820px) {
    display: none;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px 10px 0;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 820px) {
    height: 64px;
  }
  @media (max-width: 820px) {
    padding: 10px 16px 10px 0;
  }
`;

export const HeaderLeftColumn = styled.div`
  user-select: none;
  margin-left: 16px;
  width: 48px;

  & a {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  @media (min-width: 820px) {
    width: 64px;
    margin-left: 32px;
    text-align: center;
  }
`;

export const NavContainer = styled.nav`
  user-select: none;
  position: fixed;
  top: 0;
  width: 180px;
  padding-left: 16px;
  background: #fff;
  height: 100vh;
  z-index: 100;
  overflow: auto;

  & a {
    color: #212121;
    text-decoration: none;
  }

  @media (max-width: 820px) {
    right: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  & a:hover {
    color: #e96900;
  }
`;

export const Menus = styled.ul`
  padding: 0;
  margin-top: 88px;
  position: relative;

  @media (min-width: 820px) {
    margin-top: 108px;
  }

  & a {
    color: #212121;
    text-decoration: none;
  }

  & li {
    font-weight: 300;
    margin-bottom: 24px;
    list-style: none;
  }

  & li:first-of-type a {
    font-size: 18px;
    font-weight: 500;
    color: #e96900;
  }
`;

export const MainContainer = styled.main`
  margin-top: 104px;
  margin-left: 204px;

  @media (max-width: 820px) {
    margin-top: 88px;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  padding: 60px 0;

  & a {
    color: #212121;
    text-decoration: none;
  }

  @media (min-width: 820px) {
    margin-left: 180px;
  }
`;

export const SNS = styled.div`
  margin-left: 16px;
  margin-bottom: 16px;
  & a {
    color: #666;
    margin-right: 16px;
    font-size: 18px;
  }

  & a:hover {
    color: #e96900;
  }
`;

export const UpBig = styled.div`
  width: 38px;
  height: 38px;
  position: fixed;
  right: 45px;
  bottom: 45px;
  z-index: 9;

  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;

  .main {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    box-sizing: border-box;
    width: 38px;
    height: 38px;
    padding: 2px;
    background-color: #e96900;
    border: 2px solid #34495e;
    border-radius: 20px;
    box-shadow: 1px 4px 0 0 rgb(0 0 0 / 8%);
  }

  .arrow-up {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    color: #fff;
    font-size: 20px;
    background-size: contain;
  }
`;
