import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AppShowModals from './modal';
import thumbnailModal from '../data/thumbnailItem';

function CardLoop() {
  return (
    <Row xs={1} md={3} className="g-4">
      {thumbnailModal.map(( {thumbnail, title, text}) => (
        <Col>
          <Card border='light'>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {text}
              </Card.Text>
              <AppShowModals/>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardLoop;