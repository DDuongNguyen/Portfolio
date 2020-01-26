import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <div className="project-wrapper mt-5 mb-5 row no-gutters" style={{ fontSize: '1.5rem' }}>
          <div
            className="col-lg-4 col-xl-4 col-12 "
            style={{
              flexShrink: 0,
              width: '200px',
              // color: '#007bff',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            <Fade top duration={1000} delay={600} distance="30px">
              <h1 className="font-weight-bolder text-xl-right text-lg-right mb-5">Other Projects</h1>
            </Fade>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 mb-5 row ml-3">
            <div className="col-12 row mb-5">
              <div className="col-12 row">
                <div className="col-12 text-left text-capitalize font-weight-bold">
                  <Fade top duration={1000} delay={600} distance="30px">
                    <a
                      href="https://github.com/DDuongNguyen/Image-Classification-API"
                      target="_blank"
                      className="arrow-move text-white"
                    >
                      Image Classification API{' '}
                      <FaArrowRight
                        style={{ color: '#white', transition: 'ease-in-out 0.25s' }}
                        className="arrow ml-2 pb-1"
                      />
                    </a>
                  </Fade>
                </div>
              </div>
              <div className="col-12 text-left text-capitalize font-weight-lighter">
                <p className="text-white-50">
                  <Fade bottom duration={1000} delay={600} distance="30px">
                    small flask API that classify what the uploaded image is using machine learning
                  </Fade>
                </p>
              </div>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="col-12 text-left">
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Python
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    MongoDB
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Docker
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    TensorFlow
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Bcrypt
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Flask
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Numpy
                  </button>
                </div>
              </Fade>
            </div>

            <div className="col-12 row mb-5">
              <div className="col-12 row">
                <div className="col-12 text-left text-capitalize font-weight-bold">
                  <Fade top duration={1000} delay={600} distance="30px">
                    <a
                      href="https://github.com/DDuongNguyen/plagiarism-check-API"
                      target="_blank"
                      className="arrow-move text-white"
                    >
                      plagiarism Check API
                      <FaArrowRight
                        style={{ color: '#white', transition: 'ease-in-out 0.25s' }}
                        className="arrow ml-2 pb-1"
                      />
                    </a>
                  </Fade>
                </div>
              </div>
              <div className="col-12 text-left text-capitalize font-weight-lighter">
                <p className="text-white-50">
                  <Fade bottom duration={1000} delay={600} distance="30px">
                    small flask API that can check how similar two input texts are
                  </Fade>
                </p>
              </div>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="col-12 text-left">
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Python
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Flask
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Bcrypt
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Docker
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    MongoDB
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Spacy
                  </button>
                </div>
              </Fade>
            </div>

            <div className="col-12 row mb-5">
              <div className="col-12 row">
                <div className="col-12 text-left text-capitalize font-weight-bold">
                  <Fade top duration={1000} delay={600} distance="30px">
                    <a
                      className="arrow-move text-white"
                      href="https://github.com/DDuongNguyen/Purple-Rain"
                      target="_blank"
                    >
                      Purple Rain{' '}
                      <FaArrowRight
                        style={{ color: '#white', transition: 'ease-in-out 0.25s' }}
                        className="arrow ml-2 pb-1"
                      />
                    </a>
                  </Fade>
                </div>
              </div>
              <div className="col-12 text-left text-capitalize font-weight-lighter">
                <p className="text-white-50">
                  <Fade bottom duration={1000} delay={600} distance="30">
                    a fun animation of purple rain in tribute of Prince
                  </Fade>
                </p>
              </div>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="col-12 text-left">
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    HTML
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Javascript
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    p5.js
                  </button>
                </div>
              </Fade>
            </div>

            <div className="col-12 row mb-5">
              <div className="col-12 row">
                <div className="col-12 text-left text-capitalize font-weight-bold">
                  <Fade top duration={1000} delay={600} distance="30px">
                    <a
                      className="text-white arrow-move"
                      href="https://github.com/DDuongNguyen/neighbor-front-end"
                      target="_blank"
                    >
                      The NeighborHood{' '}
                      <FaArrowRight
                        style={{ color: '#white', transition: 'ease-in-out 0.25s' }}
                        className="arrow ml-2 pb-1"
                      />
                    </a>
                  </Fade>
                </div>
              </div>
              <div className="col-12 text-left text-capitalize font-weight-lighter">
                <p className="text-white-50">
                  <Fade bottom duration={1000} delay={600} distance="30px">
                    A React on Rails application that allows users to interact with each other
                    through events with SMS and Google Map
                  </Fade>
                </p>
              </div>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="col-12 text-left">
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    React
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Redux
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Rails
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Google Map API
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Twilio API
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Active Storage
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    JWT
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Postgresql
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Bcrypt
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Geocode API
                  </button>
                </div>
              </Fade>
            </div>

            <div className="col-12 row mb-5">
              <div className="col-12 row">
                <div className="col-12 text-left text-capitalize font-weight-bold">
                  <Fade top duration={1000} delay={600} distance="30px">
                    <a
                      href="https://github.com/DDuongNguyen/Project-3-fin-calc-frontend"
                      target="_blank"
                      className="arrow-move text-white"
                    >
                      The Financial Catculator{' '}
                      <FaArrowRight
                        style={{ color: '#white', transition: 'ease-in-out 0.25s' }}
                        className="arrow ml-2 pb-1"
                      />
                    </a>
                  </Fade>
                </div>
              </div>
              <div className="col-12 text-left text-capitalize font-weight-lighter">
                <p className="text-white-50">
                  <Fade bottom duration={1000} delay={600} distance="30px">
                    A Javascript on rails application that calculates whether you will be able to
                    retire using a cat as helper
                  </Fade>
                </p>
              </div>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="col-12 text-left">
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    HTML
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Javascript
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    style={{ color: 'white', borderColor: 'white' }}
                    className="btn active buton btn-lg btn-outline-* mr-1 text-capitalize"
                  >
                    Ruby on Rails
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

// <Container>
//   <Title title="Contact" />
//   <Fade bottom duration={1000} delay={800} distance="30px">
//     <div className="contact-wrapper">
//       <p className="contact-wrapper__text">
//         {cta || 'Would you like to work with me? Awesome!'}
//       </p>
// //       <a
// <div className='col-12 text-left'>
//   <button type='button' style={{color:'white', borderColor:'white'}} className='btn active btn-lg btn-outline-* mr-1 text-capitalize'>css</button>
//   <button type='button' style={{color:'white', borderColor:'white'}} className='btn active btn-lg btn-outline-* mr-1 text-capitalize'>html</button>
//   <button type='button' style={{color:'white', borderColor:'white'}} className='btn active btn-lg btn-outline-* mr-1 text-capitalize'>js</button>
// </div>
//         target="_blank"
//         rel="noopener noreferrer"
//         className="cta-btn cta-btn--resume"
//         href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
//       >
//         {btn || "Let's Talk"}
//       </a>
//     </div>
//   </Fade>
// </Container>
