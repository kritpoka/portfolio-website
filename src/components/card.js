import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AppShowModals from './modal';

function GridCard() {
  return (
    <Row className="g-4">
        <Col>
          <Card border='light'>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <AppShowModals/>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default GridCard;