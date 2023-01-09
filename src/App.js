import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Carousel from './components/Carousel';

function App() {

  return (
    <div className="main-container flex-center">
    <Intro />
    <About />
    </div>
  );
}

export default App;
