import logo from './logo.svg';
import './App.css';
import Footer from './components/Shared/Footer';
import Home from './components/Shared/Home';
import SectionTwo from './components/Sections/SectionTwo';
import SectionOne from './components/Sections/SectionOne';
import Content from './components/Sections/Content';

function App() {
  return (
    <div className="App">
      <Home/> <br />
      <Content/> <br />
      <SectionOne/> <br />
      <SectionTwo/> <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
