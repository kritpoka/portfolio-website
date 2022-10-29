import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleExample from './components/header';
import GridExample from './components/card';
import './data/hobbyData'
import hobbyData from './data/hobbyData';
import Example from './components/offCanvas';

function App() {
  const hobbyImageElements = hobbyData.map((image, index) => {
    return <GridExample key={index} tattoo={image}/>;
  });
  return (
    <div className="App">
      <CollapsibleExample />
      <div className='app-grid'>
        <GridExample/>
        <Example/>
      </div>
    </div>
  );
}

export default App;
