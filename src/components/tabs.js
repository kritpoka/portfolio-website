import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousels from './carousels';
import CardLoop from './cardLoop';

function TabsDisplay() {
    return (
        <Tabs
            defaultActiveKey="All"
            id="uncontrolled-tab-example"
            className="mb-3"
            variant='pills'
            unmountOnExit="true"
        >
            <Tab eventKey="All" title="All">
                <CardLoop />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Carousels />
            </Tab>
            <Tab eventKey="contact" title="Contact">
                
            </Tab>
        </Tabs>
    );
}

export default TabsDisplay;