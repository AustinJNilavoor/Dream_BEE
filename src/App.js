import About from './About';
import './elements.css';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './footer';
import Products from './products';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
function App() {
  return (
    <div className="App">
      <div className="bgimage"></div>
      <header className="App-header">
        <Header/>
      </header>
      <Home />
      <About/>
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
