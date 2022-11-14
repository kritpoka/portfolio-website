import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousels from './carousels';
import CardLoop from './cardLoop';

function TabsDisplay() {
    return (
        <Tabs
            defaultActiveKey="trend"
            id="uncontrolled-tab-example"
            className="mb-3"
            variant='pills'
            unmountOnExit="true"
        >
            <Tab eventKey="trend" title="trend">
                <CardLoop />
            </Tab>
            <Tab eventKey="animal" title="animal">
                <Carousels />
            </Tab>
            <Tab eventKey="flower" title="flower">
                <Carousels />
            </Tab>
            <Tab eventKey="picture" title="picture">
                <Carousels />
            </Tab>
            <Tab eventKey="draw" title="draw">
                <Carousels />
            </Tab>
            <Tab eventKey="contact" title="More">
                
            </Tab>
        </Tabs>
    );
}

export default TabsDisplay;