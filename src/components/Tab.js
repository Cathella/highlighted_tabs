import React, { useState } from "react";

export default function Tab({ children }) {
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