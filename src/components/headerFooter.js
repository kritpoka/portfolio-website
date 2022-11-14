import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousels from './carousels';

function HeaderAndFooter() {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special content</Card.Title>
        <Card.Text>
        special content that made for you.
        </Card.Text>
        <Carousels/>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooter;