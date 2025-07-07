import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger button */}
      <div className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        <Nav.Link
          href="#home"
          className="text-white text-center py-3"
          style={{ textDecoration: 'none', fontSize: '1.25rem', fontWeight: 'bold' }}
        >
          Portfolio
        </Nav.Link>
        <Nav className="flex-column text-center">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link
            href="https://drive.google.com/file/d/13XqYRiDp50YV1Gnfsd6LNXIT8TeLHWuC/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
}

export default Sidebar;
