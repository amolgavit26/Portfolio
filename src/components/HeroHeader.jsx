import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import '../styles/HeroHeader.css';
import ProfileImg from '../assets/Photo.png';

function HeroHeader() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Use loadFull if you install '@tsparticles/full'
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  return (
    <section id="home" className="hero" data-aos="fade-up">
      


      
      {/* {engineReady && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            background: { color: 'transparent' },
            particles: {
              number: { value: 30 },
              color: { value: '#00ffe7' },
              size: { value: 2 },
              move: { enable: true, speed: 0.6 },
              opacity: { value: 0.3 },
            },
          }}
        />
      )} */}




      
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="hero-left">
            <h1 data-aos="fade-right">
              Hi,<br />
              I'm <span className="highlight-y">A</span>mol Gavit,<br />
              Software Engineer
            </h1>

            <TypeAnimation
              sequence={[
                'Full-stack Developer',
                2000,
                'Software Tester',
                2000,
                'Dev-Ops',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="p"
              className="subheading"
            />

            <div className="hero-contact-box">
              <p className="contact-label">Contact Me</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/amolgavit26/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/amolgavit26" target="_blank" rel="noreferrer">
                  <SiX />
                </a>
                <a href="https://github.com/amolgavit26" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/amolgavit26/" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>

          <Col md={5} className="hero-right" data-aos="zoom-in">
            <img src={ProfileImg} alt="Profile" className="profile-img" />
          </Col>
        </Row>
      </Container>

      <div className="scroll-down">
        <span></span>
      </div>
    </section>
  );
}

export default HeroHeader;
