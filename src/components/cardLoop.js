import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import thumbnailModal from '../data/thumbnailItem';
import React from 'react';
import AppShowModals from './modal';

function CardLoop() {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-2">
      {thumbnailModal.map(({ thumbnail, title, text }) => (
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