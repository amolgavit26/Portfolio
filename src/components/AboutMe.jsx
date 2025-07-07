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
            I’m an aspiring and passionate software developer with a strong technical foundation built through formal education and hands-on projects. My journey began in mechanical engineering, but my curiosity and drive to build solutions pushed me into the world of software development—where I’ve truly found my purpose. <br></br>
            Currently, I’m pursuing a Post Graduate Diploma in Advanced Computing at C-DAC Mumbai, where I’ve honed my skills in Java, Spring Boot, SQL, ReactJS, Node.js, .NET, and Python. I thrive in full-stack development environments, crafting responsive user interfaces and building scalable backend systems.
          </p>
          <p className="highlighted">
            Beyond coding, I value problem-solving, teamwork, adaptability, and continuous learning. Whether I’m exploring microservice architectures, experimenting with new frameworks, or analyzing data with PowerBI, my focus remains on building impactful, user-friendly solutions. <br></br>
            I’m excited to keep growing, contribute to meaningful projects, and collaborate with passionate teams to create software that makes a difference.
          </p>
        </div>
        <div className="about-right" data-aos="fade-left">
          <h3 className="summary-title">Summary</h3>
          <div className="summary-item">
            <strong>Current Role</strong><br />
            Postgraduate student at C-DAC Mumbai
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
              {['Spring Boot', 'ReactJs', '.net', 'MERN', 'Java', 'JavaScript', 'Python'].map(skill => (
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
