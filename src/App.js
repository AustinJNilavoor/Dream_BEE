import About from './About';
import './elements.css';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './footer';
import Products from './products';

function App() {
  return (
    <div className="App">
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
