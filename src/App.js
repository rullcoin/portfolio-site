import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Carousel from './components/Carousel';
import Projets from './components/Projets';

function App() {

  return (
    <div className="main-container flex-center">
    <Intro />
    <About />
    <Projets />
    </div>
  );
}

export default App;
