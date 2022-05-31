import logo from './logo.svg';
import './App.css';
import Footer from './components/Shared/Footer';
import Home from './components/Shared/Home';
import SectionTwo from './components/Sections/SectionTwo';

function App() {
  return (
    <div className="App">
      <Home/> <br />
      <SectionTwo/> <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
