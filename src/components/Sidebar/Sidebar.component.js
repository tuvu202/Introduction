import React, { memo, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import isEmpty from 'lodash/isEmpty';

import { SidebarContainer, HeaderAvatar, ToggleButton, HeaderWrapper, ListMenu, SidebarFooter } from './styled';
import avatar from '../../assets/avatar.jpg';

const Sidebar = () => {
  const categories = [ 'home', 'resume', 'portfolios', 'contact'];
  const [currentCategory, setCurrentCategory] = useState(window.location.pathname.split('/')[1]);
  const [isShow, showSidebar] = useState(false);

  const handleClick = (category) => {
    setCurrentCategory(category);
  }

  const toggleSidebar = () => {
    showSidebar(!isShow);
  }

  return (
    <SidebarContainer className={isShow && 'is-visible'}>
      <ToggleButton onClick={toggleSidebar}>
        <i className={`fa fa-${isShow ? 'times' : 'bars'}`}></i>
      </ToggleButton>

      <HeaderWrapper>
        <HeaderAvatar>
          <a href="/"><img alt="brandimage" src={avatar}/></a>
        </HeaderAvatar>
        <ListMenu>
          { !isEmpty(categories) && categories.map((item) => (
              <li key={item} onClick={() => handleClick(item)}>
                <a aria-current="page" className={currentCategory === item ? 'active' : ''} href={`/${item.toLocaleLowerCase()}`}><span>{item}</span></a>
              </li>
            ))
          }
        </ListMenu>

        <SidebarFooter>{'© 2020 '}
          <strong>
            <a rel="noopener noreferrer" target="_blank" href="https://nuclearthemes.com">NuclearThemes</a>
          </strong>
        </SidebarFooter>
      </HeaderWrapper>
    </SidebarContainer>
  )
}

export default memo(Sidebar);
