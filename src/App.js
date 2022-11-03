import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import './data/hobbyData';
import Tabs from './components/tabs';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-grid'>
        <Tabs/>
      </div>
    </div>
  );
}

export default App;
