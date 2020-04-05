import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3.4rem;
    font-weight: 700;
    span {
      color: #699FA1;
    }
  }
  > p {
    margin: 0 0 20px 0;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  transition: all .4s ease-out;
  width: 45%;
  a {
    i {
      font-size: 2rem;
      border: 2px solid #6b6b6b;;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      padding: 8px;
      color: #6b6b6b;
    }
    .fa-facebook-f:hover {
      color: #fff;
      background-color: rgb(45, 136, 255);
      border-color: #fff;
    }
    .fa-linkedin:hover {
      color: #fff;
      background-color: #2d76b0;
      border-color: #fff;
    }
    .fa-github:hover {
      color: #fff;
      background-color: #000;
      border-color: #fff;
    }
  }
`;

export { Container, SocialWrapper }
