import styled  from 'styled-components';

const SwiperContainer = styled.div`
  width: 100%;
  height: calc(100% - 200px);
  .swiper-slide {
    overflow: auto;
  }
  .swiper-pagination-bullet-active {
    background: #699FA1;
  }
  .responsibilities {
    margin: 0;
    padding: 12px 30px 10px 22px;
    height: calc(100% - 140px);
    overflow: auto;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 5% 6% 5% 5%;
`;

const General = styled.div`
  text-align: left;
  h2 {
    position: relative;
    padding-bottom: 15px;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px #c6d0d0;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: auto;
      bottom: 0;
      height: 5px;
      border-radius: 100px;
      width: 100px;
      background: #A5D6D9;
    }
    &:after {
      width: 35px;
      background: #699FA1;
      content: "";
      position: absolute;
      left: 0;
      top: auto;
      bottom: 0;
      height: 5px;
      border-radius: 100px;
    }
  }
`;

const ExperienceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #699FA1;
  h3 {
    margin: 0;
    .company {
      font-weight: 600;
      color: #505050;
    }
  }
`;

export { SwiperContainer, Container, General, ExperienceSection }
