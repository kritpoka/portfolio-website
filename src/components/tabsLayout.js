import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function LeftTabsExample() {
    const Sonnet = "Mine eye and heart are at a mortal war, How to divide the conquest of thy sight; Mine eye my heart thy picture's sight would bar, My heart mine eye the freedom of that right. My heart doth plead that thou in him dost lie,-- A closet never pierc'd with crystal eyes-- But the defendant doth that plea deny, And says in him thy fair appearance lies. To side this title is impannelled A quest of thoughts, all tenants to the heart";
    const Sonnets = "Full many a glorious morning have I seen Flatter the mountain tops with sovereign eye, Kissing with golden face the meadows green, Gilding pale streams with heavenly alchemy; Anon permit the basest clouds to ride With ugly rack on his celestial face, And from the forlorn world his visage hide, Stealing unseen to west with this disgrace: Even so my sun one early morn did shine, With all triumphant splendour on my brow;";
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            {Sonnet}
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              {Sonnets}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;