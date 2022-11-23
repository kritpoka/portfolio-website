import Card from 'react-bootstrap/Card';
import Carousels from './carousels';

function HeaderAndFooter() {
  return (
    <Card className="text-center">
      
      <Card.Body>
        <Card.Title>reccomended</Card.Title>
        <Card.Text>
        special content suggest for you.
        </Card.Text>
        <Carousels/>
      </Card.Body>
    </Card>
  );
}

export default HeaderAndFooter;