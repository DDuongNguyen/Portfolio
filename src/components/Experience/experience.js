import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import { githubButtons } from '../../mock/data';

const Experience = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <section id="experience" className="mb-5">
      <Container>
        <div className="project-wrapper mt-5 mb-5 row" style={{ fontSize: '1.1rem' }}>
          <div
            className="col-12 col-lg-4 col-xl-4"
            style={{
              flexShrink: 0,
              width: '200px',
              // color: '#007bff',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            <Fade top duration={1000} delay={600} distance="30px">
              <h1 className="font-weight-bolder text-xl-right text-lg-right mb-5">Experience</h1>
            </Fade>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 mb-5 row pr-sm-0 pr-md-0">
            <div className="col-12 row mb-5">
              <div className="col-12 row">
                <div className="col-6 text-left text-capitalize font-weight-bold">
                  <Fade top duration={1000} delay={600} distance="30px">
                    <h3>DMSpro</h3>
                  </Fade>
                </div>
                <Fade right duration={1000} delay={600} distance="30px">
                  <div
                    className="col-6 text-right text-capitalize pl-0 pr-0"
                    style={{ fontFamily: 'Inconsolata,monospace' }}
                  >
                    nov - feb 2020
                  </div>
                </Fade>
              </div>
              <div className="col-12 text-left text-capitalize font-weight-lighter">
                <p className="text-white-50">
                  <Fade bottom duration={1000} delay={600} distance="30px">
                    software engineer
                  </Fade>
                </p>
              </div>
            </div>

            <div className="col-12 row mb-5">
              <div className="col-12 row">
                <div className="col-6 text-left text-capitalize font-weight-bold">
                  <Fade top duration={1000} delay={600} distance="30px">
                    <h3>NY Edge</h3>
                  </Fade>
                </div>
                <Fade right duration={1000} delay={600} distance="30px">
                  <div
                    className="col-6 text-right text-capitalize pl-0 pr-0"
                    style={{ fontFamily: 'Inconsolata,monospace' }}
                  >
                    oct - jan 2019
                  </div>
                </Fade>
              </div>
              <div className="col-12 text-left text-capitalize font-weight-lighter">
                <p className="text-white-50">
                  <Fade bottom duration={1000} delay={600} distance="30px">
                    Student Counselor
                  </Fade>
                </p>
              </div>
            </div>

            <div className="col-12 row mb-5">
              <div className="col-12 row">
                <div className="col-6 text-left text-capitalize font-weight-bold">
                  <Fade top duration={1000} delay={600} distance="30px">
                    <h3>Synchrony Financial</h3>
                  </Fade>
                </div>
                <Fade right duration={1000} delay={600} distance="30px">
                  <div
                    className="col-6 text-right text-capitalize pl-0 pr-0"
                    style={{ fontFamily: 'Inconsolata,monospace' }}
                  >
                    mar - may 2019
                  </div>
                </Fade>
              </div>
              <div className="col-12 text-left text-capitalize font-weight-lighter">
                <p className="text-white-50">
                  <Fade bottom duration={1000} delay={600} distance="30px">
                    Marketing Consultant
                  </Fade>
                </p>
              </div>
            </div>

            <div className="col-12 row mb-5">
              <div className="col-12 row">
                <div className="col-6 text-left text-capitalize font-weight-bold">
                  <Fade top duration={1000} delay={600} distance="30px">
                    <h3>Special Citizens Futures Unlimited</h3>
                  </Fade>
                </div>
                <Fade right duration={1000} delay={600} distance="30px">
                  <div
                    className="col-6 text-right text-capitalize pl-0 pr-0"
                    style={{ fontFamily: 'Inconsolata,monospace' }}
                  >
                    jan - mar 2019
                  </div>
                </Fade>
              </div>
              <div className="col-12 text-left text-capitalize font-weight-lighter">
                <p className="text-white-50">
                  <Fade bottom duration={1000} delay={600} distance="30px">
                    Marketing Consultant
                  </Fade>
                </p>
              </div>
            </div>

            <div className="col-12 row mb-5">
              <div className="col-12 row">
                <div className="col-6 text-left text-capitalize font-weight-bold">
                  <Fade top duration={1000} delay={600} distance="30px">
                    <h3>Grant Thornton</h3>
                  </Fade>
                </div>
                <Fade right duration={1000} delay={600} distance="30px">
                  <div
                    className="col-6 text-right text-capitalize pl-0 pr-0"
                    style={{ fontFamily: 'Inconsolata,monospace' }}
                  >
                    oct - dec 2018
                  </div>
                </Fade>
              </div>
              <div className="col-12 text-left text-capitalize font-weight-lighter">
                <p className="text-white-50">
                  <Fade bottom duration={1000} delay={600} distance="30px">
                    M&A Consultant
                  </Fade>
                </p>
              </div>
            </div>

            <div className="col-12 row mb-2">
              <div className="col-12 row">
                <div className="col-6 text-left text-capitalize font-weight-bold">
                  <Fade top duration={1000} delay={600} distance="30px">
                    <h3>Broadridge</h3>
                  </Fade>
                </div>
                <Fade right duration={1000} delay={600} distance="30px">
                  <div
                    className="col-6 text-right text-capitalize pl-0 pr-0"
                    style={{ fontFamily: 'Inconsolata,monospace' }}
                  >
                    aug - oct 2018
                  </div>
                </Fade>
              </div>
              <div className="col-12 text-left text-capitalize font-weight-lighter">
                <p className="text-white-50">
                  <Fade bottom duration={1000} delay={600} distance="30px">
                    M&A Consultant
                  </Fade>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Fade bottom duration={1000} delay={600} distance="30px">
          <div className="text-center my-auto mx-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume mb-5"
              href="/resume"
            >
              View My Resume
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Experience;
