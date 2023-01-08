import meter1 from "../assets/img/bedroom.png";
import meter2 from "../assets/img/bathroom.png";
import meter3 from "../assets/img/livingroom.png";
import meter4 from "../assets/img/kitchenroom.png";
import meter5 from "../assets/img/diningroom.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}




export const Skills = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>สไตล์การแต่งบ้าน</h2>
              <p>ใครกำลังหาทำบ้านใหม่อยู่หรืออยากจะเปลี่ยนสไตล์ห้อง แต่ไม่รู้ว่าบ้านแบบนี้ต้องบอกช่างว่าอะไร วันนี้ VEEDII สไตล์การแต่งบ้านของแต่ละห้องมานำเสนอ ใครชอบงานสไตล์ไหน โทนสีแบบไหน บอกช่างพร้อมแนบรูปไปได้เลยยย</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item" onClick={() => setModalShow(true)}>
                  <img src={meter1} alt="img" />
                  <Button variant="primary" onClick={() => setModalShow(true)} >
                    ห้องนอน
                  </Button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>

                <div className="item">
                  <img src={meter2} alt="img" onClick={() => setModalShow(true)} />
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    ห้องน้ำ / ห้องอาบน้ำ
                  </Button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>

                <div className="item">
                  <img src={meter3} alt="img" onClick={() => setModalShow(true)} />
                  <>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                      ห้องนั่งเล่น / ห้องรับแขก
                    </Button>

                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </>
                </div>

                <div className="item">
                  <img src={meter4} alt="img" onClick={() => setModalShow(true)} />
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    ห้องครัว
                  </Button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>

                <div className="item">
                  <img src={meter5} alt="img" onClick={() => setModalShow(true)} />
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    ห้องรับประทานอาหาร
                  </Button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  )
}
