import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="browser">
          <Header />

          <div className="viewport">
            <AppRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
