import { Container } from 'react-bootstrap';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-3">
      <Container className="text-center">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Container>
    </footer>
  );
}

export default Footer;
