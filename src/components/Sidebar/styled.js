import styled from 'styled-components';
import { background, typo } from '../../styles/global';

const ToggleButton = styled.button`
  position: absolute;
  left: 100%;
  top: 20px;
  padding: 0;
  height: 50px;
  width: 50px;
  text-align: center;
  font-size: 1.6rem;
  background: ${background.secondary};
  justify-content: center;
  align-items: center;
  border: none;
  border: 1px solid #699FA1;
  color: ${typo.secondary};
  display: none;
  outline: none;
  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    display: flex;
  }
  @media only screen and (max-width: 991px) and (min-width: 768px) {
      display: flex;
  }
  @media only screen and (max-width: 767px) {
    display: flex;
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(0);
  height: 100vh;
  width: 300px;
  background: ${background.secondary};
  border-right: 1px solid #699FA1;
  z-index: 5;
  transition: all .4s ease-out;
  &.is-visible {
    transform: translateX(0);
  }
  @media only screen and (max-width: 1599px) and (min-width: 1200px) {
    width: 260px;
  }
  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    width: 260px;
    transform: translateX(-100%);
  }
  @media only screen and (max-width: 991px) and (min-width: 768px) {
    width: 250px;
    transform: translateX(-100%);
  }
  @media only screen and (max-width: 767px) {
    width: 250px;
    transform: translateX(-100%);
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  overflow-y: auto;
`;

const HeaderAvatar = styled.div`
  padding: 20px 0;
  display: block;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #699FA1;
  > a {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 7px solid #8ebfc1;
    overflow: hidden;
    display: inline-block;
    img {
      max-width: 100%;
    }
  }
`;

const ListMenu = styled.ul`
  width: 100%;
  padding: 15px 5px;
  margin-bottom: 1rem;
  li {
    list-style: none;
    text-align: center;
    display: block;
    &:not(:last-child) {
      margin-bottom: 1px;
    }
    a {
      text-transform: uppercase;
      font-size: .94rem;
      letter-spacing: 1px;
      display: block;
      padding: 5px 0;
      color: ${typo.secondary};
      font-weight: 600;
      position: relative;
      overflow: hidden;
      z-index: 1;
      text-decoration: none;
      background-color: transparent;
      &.active {
        color: #fff;
        &:before {
          background: #699FA1;
          width: 100%;
          visibility: visible;
        }
      }
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 100%;
        height: 100%;
        width: 0;
        background: rgba(105, 159, 161,.2);
        visibility: hidden;
        z-index: -1;
      }
      &:hover {
        color: #fff;
        &:before {
          width: 100%;
          visibility: visible;
        }
      }
      @media only screen and (max-width: 767px) {
        padding: 7px 0;
      }
    }
    a, a:before {
      transition: all .4s ease-out;
    }
  }
`;

const SidebarFooter = styled.p`
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 15px 0;
  color: ${typo.secondary};
  border-top: 1px solid #699FA1;
  a {
    color: ${typo.secondary};
    transition: all .4s ease-out;
  }
`;

export { SidebarContainer, HeaderAvatar, ToggleButton, HeaderWrapper, ListMenu, SidebarFooter }
