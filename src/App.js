import React, { useState } from 'react';
import './App.css';

function Tab({ children }) {
  const [ highlighted, setHighlighted ] = useState({ left: 0, opacity: 0 });

  function moveHighlight(e) {
    // update highlight style
    setHighlighted({
      left: e.nativeEvent.layerX-150,
    })
  }

  function hideHighlight(e) {
    setHighlighted({
      opacity: 0,
      left: e.nativeEvent.layerX-150,
    })
  }

  return (
    <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
      <div className="highlight" style={highlighted} />
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab><a>Home</a></Tab>
          <Tab><a>About</a></Tab>
          <Tab><a>Features</a></Tab>
        </div>

        <div className="viewport">Pages go Here</div>
      </div>
    </div>
  );
}

export default App;
