import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper row mb-2">
          <Fade left duration={1000} delay={600} distance="30px">
            <div
              className="col-4 mr-5"
              style={{
                flexShrink: 0,
                width: '200px',
                color: '#007bff',
                textTransform: 'uppercase',
                textAlign: 'right',
                letterSpacing: '2px',
              }}
            >
              <h1 className="font-weight-bold">Skills</h1>
            </div>
          </Fade>

          <div className="col-8 row" style={{ fontSize: '1.5rem' }}>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <Fade top duration={1000} delay={600} distance="30px">
                <h3 className="text-left text-uppercase font-weight-bold">LANGUAGES</h3>
              </Fade>
              <Fade right duration={1000} delay={600} distance="30px">
                <ul className="list-unstyled mb-2 text-left">
                  <li className="mb-2 font-weight-light text-capitalize">JavaScript (ES6)</li>
                  <li className="mb-2 font-weight-light text-capitalize">Ruby</li>
                  <li className="mb-2 font-weight-light text-capitalize">Python</li>
                  <li className="mb-2 font-weight-light text-capitalize">HTML</li>
                  <li className="mb-2 font-weight-light text-capitalize">CSS/Sass</li>
                  <li className="mb-5 font-weight-light text-capitalize">SQL</li>
                </ul>
              </Fade>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <Fade top duration={1000} delay={600} distance="30px">
                <h3 className="text-left text-uppercase font-weight-bold">FRAMEWORKS</h3>
              </Fade>
              <Fade right duration={1000} delay={600} distance="30px">
                <ul className="list-unstyled mb-2 text-left">
                  <li className="mb-2 font-weight-light text-capitalize">React</li>
                  <li className="mb-2 font-weight-light text-capitalize">Flask</li>
                  <li className="mb-2 font-weight-light text-capitalize">Rails</li>
                  <li className="mb-2 font-weight-light text-capitalize">Bootstrap</li>
                  <li className="mb-5 font-weight-light text-capitalize">Gatsby</li>
                </ul>
              </Fade>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <Fade top duration={1000} delay={600} distance="30px">
                <h3 className="text-left text-uppercase font-weight-bold">TOOLS</h3>
              </Fade>
              <Fade right duration={1000} delay={600} distance="30px">
                <ul className="list-unstyled mb-2 text-left">
                  <li className="mb-2 font-weight-light text-capitalize">Bash</li>
                  <li className="mb-2 font-weight-light text-capitalize">Git, Github & GitLab</li>
                  <li className="mb-2 font-weight-light text-capitalize">Docker</li>
                  <li className="mb-2 font-weight-light text-capitalize">Postman</li>
                  <li className="mb-2 font-weight-light text-capitalize">MongoDB</li>
                  <li className="mb-2 font-weight-light text-capitalize">Jira Confluence</li>
                  <li className="mb-5 font-weight-light text-capitalize">windows remote desktop</li>
                </ul>
              </Fade>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
