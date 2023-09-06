import './elements.css';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './footer';
import Products from './products';
function App() {
  return (
    <div className="App">
      <div className="bgimage"></div>
      <header className="App-header">
        <Header/>
      </header>
      <Home />
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
