import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import './data/hobbyData';
import Tabs from './components/tabs';
import HeaderAndFooter from './components/headerFooter';
import Carousels from './components/carousels';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-grid'>
        <HeaderAndFooter/>
      </div>
      <div className='app-content'>
      <Tabs/>
      </div>
    </div>
  );
}

export default App;
