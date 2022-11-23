import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardLoop from './cardLoop';

function TabsDisplay() {
    return (
        <Tabs
            defaultActiveKey="trend"
            id="uncontrolled-tab-example"
            className="mb-3"
            variant='pills'
            unmountOnExit="true"
            fill
        >
            <Tab eventKey="trend" title="All">
                <CardLoop />
            </Tab>
        </Tabs>
    );
}

export default TabsDisplay;