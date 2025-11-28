import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Movies from "./Pages/Movie";
import Navbar from "./Component/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
