import React from "react";
import Tab from './Tab';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="tabs">
      <Tab>
        <NavLink 
          to="/" exact={true}
          style={({ isActive }) => ({ 
            background: isActive ? '#5131a9' : 'none',
            color: isActive ? '#eee' : 'none'
          })}
        >
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink
          to="/about"
          style={({ isActive }) => ({ 
            background: isActive ? '#5131a9' : 'none',
            color: isActive ? '#eee' : 'none'
          })}
        >
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink
          to="/features"
          style={({ isActive }) => ({ 
            background: isActive ? '#5131a9' : 'none',
            color: isActive ? '#eee' : 'none'
          })}
        >
          Features
        </NavLink>
      </Tab>
    </div>
  )
}