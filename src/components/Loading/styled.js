import styled, { keyframes } from 'styled-components';

const flyout = keyframes`
  0% {
    top: 19px;
    left: 19px;
  }
  100% {}
`;

const Heart = styled.div`
  position: absolute;
  &:after, &:before {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: #950d0d;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
  &.heart1 {
    top: 0;
    left: 30px;
  }
  &.heart2 {
    left: 60px;
    top: 30px;
  }
  &.heart3 {
    top: 60px;
    left: 30px;
  }
  &.heart4 {
    left: 0;
    top: 30px;
  }
`;


const LoadingStyle = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 75px;
    display: inline-block;
    vertical-align: middle;
    div${Heart} {
      position: absolute;
      animation: ${flyout} 1s ease alternate infinite;
      transform: scale(0.2);
    }
`;

export { LoadingStyle, Heart }
