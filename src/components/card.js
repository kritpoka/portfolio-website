import Card from 'react-bootstrap/Card';
import AppShowModals from './modal';

function GridCard() {
  return (
    <Card border='light'>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </Card.Text>
        <AppShowModals />
      </Card.Body>
    </Card>
  );
}

export default GridCard;