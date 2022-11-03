import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GridCard from './card'

function TabsDisplay() {
    return (
        <Tabs
            defaultActiveKey="All"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="All" title="All">
                <GridCard/>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn. With mine own weakness, being best acquainted, Upon thy part I can set down a story Of faults conceal'd, wherein I am attainted; That thou in losing me shalt win much glory: And I by this will be a gainer too; For bending all my loving thoughts on thee,
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn. With mine own weakness, being best acquainted, Upon thy part I can set down a story Of faults conceal'd, wherein I am attainted; That thou in losing me shalt win much glory: And I by this will be a gainer too; For bending all my loving thoughts on thee,
            </Tab>
        </Tabs>
    );
}

export default TabsDisplay;