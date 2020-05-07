import React from 'react';

import { Container, SocialWrapper } from './styled';

const Home = () => (
    <Container>
      <h1>Hi, I am <span>Tu Vu</span></h1>
      <p>I am a Frontend developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
      <SocialWrapper>
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/tuvu202/">
          <i className="fa fa-linkedin"></i>
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/tuvu202?tab=repositories">
          <i className="fa fa-github"></i>
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/tu.vu.202/">
          <i className="fa fa-facebook-f"></i>
        </a>
      </SocialWrapper>
    </Container>
  )

export default Home;
