import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_mdk9vm7',
      'template_t09q005',
      form.current,
      'VssSvaRqWDx19dZKZ'
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert('Something went wrong, please try again!');
      }
    );
  };

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="contact-title">Let's Talk</h2>
            <p className="contact-text">
              I’m interested in freelance opportunities and full-time web development job opportunities.
              However, if you have other requests or questions, don’t hesitate to use the form.
            </p>
            <p className="contact-text">
              You can find more information about me on the following platforms:
            </p>
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
          </Col>
          <Col md={6}>
            <Form ref={form} onSubmit={sendEmail} className="contact-form">
              <Row>
                <Col>
                  <Form.Control 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    className="mb-3" 
                    required 
                  />
                </Col>
                <Col>
                  <Form.Control 
                    type="email" 
                    name="user_email"
                    placeholder="Email" 
                    className="mb-3" 
                    required 
                  />
                </Col>
              </Row>
              <Form.Control 
                type="text" 
                name="title"
                placeholder="Subject (Optional)" 
                className="mb-3" 
              />
              <Form.Control 
                as="textarea" 
                name="message" 
                rows={4} 
                placeholder="Message" 
                className="mb-3" 
                required 
              />
              <Button variant="primary" type="submit">Send message !</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
