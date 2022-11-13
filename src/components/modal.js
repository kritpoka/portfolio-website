import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import AccordionCollape from './accordion';
import { Image } from 'react-bootstrap';

function ModalsPopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
            <Image fluid="true" rounded="true" src=""/>
        <AccordionCollape/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AppShowModals() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="secondary"  onClick={() => setModalShow(true)} >
        More Details
      </Button>

      <ModalsPopup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AppShowModals;