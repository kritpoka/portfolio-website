import { useState,} from "react";
import { Col, Row,} from "react-bootstrap";

export const Newsletter = () => {
  const [char, setChar] = useState('');


  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>send a comment<br></br> & criticism</h3>
            </Col>
            <Col md={6} xl={7}>
              <form>
                <div className="new-email-bx">
                  <input value={char} type="" onChange={(e) => setChar(e.target.value)} placeholder="message" />
                  <button type="submit">send</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
