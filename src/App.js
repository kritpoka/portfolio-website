import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleExample from './components/header';
import './data/hobbyData';
import UncontrolledExample from './components/tabs';

function App() {
  return (
    <div className="App">
      <CollapsibleExample />
      <div className='app-grid'>
        <UncontrolledExample/>
      </div>
    </div>
  );
}

export default App;
