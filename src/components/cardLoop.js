//core
import thumbnailModal from '../data/thumbnailItem';
import React from 'react';

// card
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//modal
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AccordionCollape from './accordion';
import { Image } from 'react-bootstrap';

//modal function
function ModalsPopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Name heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>section</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore and dolore magna aliqua
        </p>
        <Image fluid="true" rounded="true" src="" />
        <AccordionCollape />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

//card function
function CardLoop() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <Row xs={1} sm={2} md={3} lg={4} className="g-3">
      {thumbnailModal.map(({ thumbnail, title, text }) => (
        <Col>
        <Image src={thumbnail} onClick={() => setModalShow(true)} rounded="true" fluid="true" />
        </Col>
      ))}
      </Row>
      
      <ModalsPopup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default CardLoop;