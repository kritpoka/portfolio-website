import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AppShowModals from './modal';

function GridCard(props) {
  const {thumbnail} = props;
  return (
    <Row className="g-4">
        <Col>
          <Card border='light'>
            <Card.Img variant="top" src={thumbnail} />
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