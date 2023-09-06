import './elements.css';
import React, { useState } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './footer';
import Products from './products';
function App() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <div className="App">
      <div className="bgimage"></div>
      <header className="App-header">
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
      </header>
      <Home />
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
