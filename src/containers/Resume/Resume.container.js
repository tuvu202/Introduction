import React, { useEffect } from 'react';

import Swiper from 'swiper';
import { SwiperContainer, Container, General, ExperienceSection } from './styled';

const Resume = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        effect: 'flip',
        grabCursor: true,
        speed: 1000,
    });
  }, []);

  return (
    <Container>
      <General>
        <h2>SUMMARY</h2>
        <p>
          Having experience in UI/UX developing web applications using HTML, CSS, ReactJS, Redux, etc. I'm a fast and keen
          learner with a good attention to details and excellent troubleshooting skills. I'm also a good team player
          who has a proven ability to work analytically.
        </p>

        <h2>WORK EXPERIENCE</h2>
      </General>
      <SwiperContainer className="swiper-container">
        <div className="swiper-wrapper">
          <div class="swiper-slide">
            <ExperienceSection>
              <h3>
                Software Engineer<br/>
                <small className="company">VinID Joint Stock</small>
              </h3>
              <span>Nov 2019 - Now</span>
            </ExperienceSection>

            <ul className="responsibilities">
              <li>Implemented the customized portlets for Liferay Portal and portlets according to the demand and requirements.</li>
              <li>Implemented drill down report both in tabular and chart format using Jasper report.</li>
              <li>Worked on bug fixing and major and minor defects. Also planning to re-write the complete application in couple of weeks.</li>
              <li>Implemented enhancements that significantly improved web functionality, security and speed.</li>
              <li>Experienced with UI development tools frameworks like AJAX, CSS3, HTML5, JQuery.</li>
              <li>Experienced in using source control management tools like SVN.</li>
            </ul>
          </div>

          <div class="swiper-slide">
            <ExperienceSection>
              <h3>
                Front-end Developer<br/>
                <small className="company">Spider Ltd</small>
              </h3>
              <span>Jan 2018 - Nov 2019</span>
            </ExperienceSection>

            <ul className="responsibilities">
              <li>Developed and maintained the front end of the application using ReactJS and HTML5, CSS/SCSS.</li>
              <li>Created reusable ReactJS components, managed application state with Redux and persisted certain parts of the state to device via redux-persist.</li>
              <li>Applied middleware such as redux-promise and redux-thunk to retrieve data from Back-end and to also perform RESTFUL services.</li>
              <li>Utilized React-Router to create Dynamic Routing.</li>
              <li>Worked on cross-browser compatibility and provided multi browsers support such as Firefox, Safari and Chrome.</li>
              <li>Implemented Google Analytics to track user's behaviours.</li>
              <li>Boosted code coverage to more than 90% by writing unit tests in Jest and Enzyme to save development efforts.</li>
              <li>Used Git as version control system.</li>
              <li>Used JIRA as an agile project management tool to track all the work being tackled in each sprint.</li>
              <li>Involved in daily SCRUM meetings to keep track of the ongoing project status and blockers..</li>
              <li>Analyzed business requirements, participated in technical design, development and testing of various modules assigned.</li>
            </ul>
          </div>


          <div class="swiper-slide">
            <ExperienceSection>
              <h3>
                Web Developer<br/>
                <small className="company">Smart World Ltd</small>
              </h3>
              <span>April 2017 - July 2017</span>
            </ExperienceSection>

            <ul className="responsibilities">
              <li>Implemented the customized portlets for Liferay Portal and portlets according to the demand and requirements.</li>
              <li>Implemented drill down report both in tabular and chart format using Jasper report.</li>
              <li>Worked on bug fixing and major and minor defects. Also planning to re-write the complete application in couple of weeks.</li>
              <li>Implemented enhancements that significantly improved web functionality, security and speed.</li>
              <li>Experienced with UI development tools frameworks like AJAX, CSS3, HTML5, JQuery.</li>
              <li>Experienced in using source control management tools like SVN.</li>
            </ul>
          </div>

        </div>
        <div className="swiper-pagination"></div>
      </SwiperContainer>
    </Container>
  )
}

export default Resume;
