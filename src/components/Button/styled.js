import styled, { keyframes } from 'styled-components';
import { typo } from '../../styles/global';


const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

export const ButtonStyle = styled.button`
  padding: 0 30px;
  background: #000;
  outline: none;
  border: none;
  color: ${typo.primary};
  font-size: 0.77rem;
  text-transform: uppercase;
  font-weight: 300;
  height: 50px;
  width: 220px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  &:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
  }
  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    left: 0;
    top: 0;
  }
  &:active {
    color: #000;
    &:after {
      background: transparent;
    }
  }
  &:hover {
    &:before {
      opacity: 1;
    }
  }
`;

