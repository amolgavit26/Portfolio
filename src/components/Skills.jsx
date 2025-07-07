import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Skills.css';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaDatabase
} from 'react-icons/fa';
import {
  SiBootstrap, SiSpringboot, SiOracle,
  SiNodedotjs, SiExpress, SiDotnet, SiMysql, SiMongodb
} from 'react-icons/si';

function Skills() {
  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <Container>
        <h2 className="section-title">Skills & Experience</h2>

        <p className="intro-text">
          I am a passionate full-stack software engineer with hands-on experience in developing responsive, high-performance web applications using modern technologies like Java, Spring Boot, ReactJS, Express, and Node.
        </p>

        <p className="intro-text">
          I’ve contributed to and built several impactful applications, including:
        </p>

        {/* Skill icon boxes */}
        <Row className="mt-5">
          <Col md={4}>
            <div className="skill-box">
              <h5 className="skill-title">Front-End</h5>
              <div className="icons">
                <FaHtml5 title="HTML" />
                <FaCss3Alt title="CSS3" />
                <FaJsSquare title="JavaScript" />
                <FaReact title="ReactJS" />
                <SiBootstrap title="Bootstrap" />
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="skill-box">
              <h5 className="skill-title">Back-End</h5>
              <div className="icons">
                <FaJava title="Java" />
                <SiSpringboot title="Spring Boot" />
                <SiExpress title="Express" />
                <SiNodedotjs title="Node.js" />
                <SiDotnet title=".NET" />
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="skill-box">
              <h5 className="skill-title">Database</h5>
              <div className="icons">
                <SiOracle title="Oracle SQL" />
                <SiMysql title="MySQL" />
                <SiMongodb title="MongoDB" />
                <FaDatabase title="MS SQL Server" />
              </div>
            </div>
          </Col>
        </Row>

        {/* Skill bars */}
        <div className="skill-bars mt-5">
          <Row>
            <Col md={6}>
              <div className="bar-item">
                <span className="bar-title">Java</span>
                <span className="bar-percent">65%</span>
                <div className="bar">
                  <div className="bar-fill" style={{ '--bar-width': '65%' }}></div>
                </div>
              </div>
              <div className="bar-item">
                <span className="bar-title">C#</span>
                <span className="bar-percent">70%</span>
                <div className="bar">
                  <div className="bar-fill" style={{ '--bar-width': '70%' }}></div>
                </div>
              </div>
              <div className="bar-item">
                <span className="bar-title">Python</span>
                <span className="bar-percent">60%</span>
                <div className="bar">
                  <div className="bar-fill" style={{ '--bar-width': '60%' }}></div>
                </div>
              </div>
              <div className="bar-item">
                <span className="bar-title">HTML/CSS</span>
                <span className="bar-percent">80%</span>
                <div className="bar">
                  <div className="bar-fill" style={{ '--bar-width': '80%' }}></div>
                </div>
              </div>



            </Col>
            <Col md={6}>
              <div className="bar-item">
                <span className="bar-title">MySQL</span>
                <span className="bar-percent">80%</span>
                <div className="bar">
                  <div className="bar-fill" style={{ '--bar-width': '80%' }}></div>
                </div>
              </div>
              <div className="bar-item">
                <span className="bar-title">SpringBoot</span>
                <span className="bar-percent">70%</span>
                <div className="bar">
                  <div className="bar-fill" style={{ '--bar-width': '70%' }}></div>
                </div>
              </div>
              <div className="bar-item">
                <span className="bar-title">JavaScript</span>
                <span className="bar-percent">75%</span>
                <div className="bar">
                  <div className="bar-fill" style={{ '--bar-width': '75%' }}></div>
                </div>
              </div>
              <div className="bar-item">
                <span className="bar-title">React</span>
                <span className="bar-percent">80%</span>
                <div className="bar">
                  <div className="bar-fill" style={{ '--bar-width': '80%' }}></div>
                </div>
              </div>


            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
