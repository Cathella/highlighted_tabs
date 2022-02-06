import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Tab from './components/Tab';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Tab><a>Home</a></Tab>
            <Tab><a>About</a></Tab>
            <Tab><a>Features</a></Tab>
          </div>

          <div className="viewport">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/" exact={true} element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
