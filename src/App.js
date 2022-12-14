import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import './data/hobbyData';
import Tabs from './components/tabs';
import HeaderAndFooter from './components/headerFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Row>
      <Col>
        <div className="App">
          <Header />
          <div className='app-grid'>
            <HeaderAndFooter />
          </div>
          <div className='app-content'>
            <Tabs />
          </div>
        </div>
      </Col>
      <Col>test</Col>
    </Row>

  );
}

export default App;
