import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Style";
import { Projects } from "./components/Projects";
import  Cardtable  from "./components/Comunity";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Skills />
      <Cardtable />
      <Footer />
    </div>
  );
}

export default App;
