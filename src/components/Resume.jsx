import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import resumeData from '../data/resume';

function Resume() {
  return (
    <div id="resume" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Resume</h2>
        <Row>
          {resumeData.map((section, idx) => (
            <Col md={6} key={idx}>
              <h5>{section.section}</h5>
              <ListGroup className="mb-3">
                {section.items.map((entry, i) => (
                  <ListGroup.Item key={i}>
                    <strong>{entry.title}</strong><br />
                    <small>{entry.subtitle}</small><br />
                    <em>{entry.date}</em>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
