import styled, { createGlobalStyle, keyframes } from 'styled-components';

const background = {
  primary: '#037fff',
  secondary: '#A5D6D9',
};

const typo = {
  primary: '#ffffff',
  secondary: '#f2f2f2',
}

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Theme = styled.div`
  position: relative;
  min-height: 100vh;
  z-index: 1;
  @media only screen and (max-width: 1599px) and (min-width: 1200px) {
    padding-left: 260px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background: linear-gradient(-45deg, #FBFDFF, #F9FDFE, #D4DAD8, #F9FAEF);
	background-size: 400% 400%;
	animation: ${gradient} 10s ease infinite;
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
`;

export { background, typo, Theme, GlobalStyles, ContentWrapper }
