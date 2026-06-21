import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/AboutMe.css';

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left" data-aos="fade-right">
          <h2 className="about-title">Little About Me</h2>
          <p>
            I am an Associate Operations Engineer at Morningstar with a strong foundation in software development, cloud technologies, and IT operations. My professional journey began with a background in Mechanical Engineering, but my passion for technology and problem-solving led me to pursue a career in the software and cloud domain.
          </p>
          <p>
            I completed my Post Graduate Diploma in Advanced Computing (PG-DAC) from C-DAC Mumbai, where I developed expertise in Java, Spring Boot, SQL, ReactJS, Node.js, .NET, and Python. This technical foundation enables me to understand both application development and the infrastructure that powers modern software systems.
          </p>
          <p className="highlighted">
            In my current role, I work with cloud platforms, automation tools, system monitoring, deployment processes, and infrastructure operations. I am also AWS Certified Cloud Practitioner, demonstrating my commitment to cloud computing and continuous professional growth. I enjoy learning new technologies, optimizing processes, and contributing to reliable, scalable, and efficient systems.
          </p>

          <p className="achievement">
            Published a research article in the International Research Journal of Engineering and Technology titled
            <span className="paperName"> "Analysis of Newly Designed Airfoil for Micro-Capacity Wind Turbine Using QBlade Software for Different Parameters."</span>
          </p>

          <div className="buttonWrapper">
            <button className="checkPaper">
              <a
                href="https://www.irjet.net/archives/V10/i12/IRJET-V10I1250.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check This Article
              </a>
            </button>

            <button className="downloadResume">
              <a
                href="https://drive.google.com/file/d/13XqYRiDp50YV1Gnfsd6LNXIT8TeLHWuC/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download My Resume
              </a>
            </button>
          </div>



        </div>
        <div className="about-right" data-aos="fade-left">
          <h3 className="summary-title">Summary</h3>
          <div className="summary-item">
            <strong>Current Role</strong><br />
            Associate Operation Engineer at Morningstar
          </div>
          <div className="summary-item">
            <strong>Education</strong><br />
            Post Graduate Diploma in Advanced Computing <br></br>
            BE Mechanical Engineering<br></br>
            Diploma Automobile Engineering
          </div>
          <div className="summary-item">
            <strong>Lives In</strong><br />
            Roha-Raigad, Maharashtra, India
          </div>
          <div className="summary-item">
            <strong>Skills</strong><br />
            <div className="skills">
              {['Herness', 'AWS', 'MERN', 'Java', 'NewRelic', 'Python'].map(skill => (
                <span key={skill} className="skill-badge" data-aos="zoom-in">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
