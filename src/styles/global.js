import styled, { createGlobalStyle } from 'styled-components';
import { SwiperStyle } from './swiper';

const background = {
  primary: '#037fff',
  secondary: '#A5D6D9',
};

const typo = {
  primary: '#ffffff',
  secondary: '#f2f2f2',
}

const Theme = styled.div`
  position: relative;
  min-height: 100vh;
  z-index: 1;
  @media only screen and (max-width: 1899px) and (min-width: 1200px) {
    padding-left: 300px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-size: 18px;
    line-height: 1.8rem;
    font-family: 'Nunito Sans', sans-serif;
    color: #505050;
    font-weight: 400;
    background: ${typo.primary};
  }

  ${SwiperStyle}
`;

export { background, typo, Theme, GlobalStyles, ContentWrapper }
