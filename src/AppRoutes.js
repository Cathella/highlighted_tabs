import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/" exact={true} element={<Home />} />
    </Routes>
  )
}