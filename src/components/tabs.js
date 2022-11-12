import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GridCard from './card';
import Carousels from './carousels';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardLoop from './cardLoop';

function TabsDisplay() {
    const picOne = "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";
    const picTwo = "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    const picThree = "https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80";

    const modalPicOne = "https://cdn.pixabay.com/photo/2022/10/23/22/45/highway-7542272_960_720.jpg";
    const modalPicTwo = "https://cdn.pixabay.com/photo/2022/07/13/16/25/cat-7319589_960_720.jpg";
    const modalPicThree = "https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_960_720.jpg";
    return (
        <Tabs
            defaultActiveKey="All"
            id="uncontrolled-tab-example"
            className="mb-3"
            variant='pills'
            unmountOnExit="true"
        >
            <Tab eventKey="All" title="All">
                <Container fluid="true">
                    <Row >
                        <Col md>
                            <GridCard thumbnail={picOne} thumbnailModal={modalPicOne} />
                        </Col>
                        <Col md>
                            <GridCard thumbnail={picTwo} thumbnailModal={modalPicTwo} />
                        </Col>
                        <Col md>
                            <GridCard thumbnail={picThree} thumbnailModal={modalPicThree} />
                        </Col>
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Carousels />
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <CardLoop />
            </Tab>
        </Tabs>
    );
}

export default TabsDisplay;