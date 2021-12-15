import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import About from "./components/About";
import Navbar from './components/navbar/Navbar'
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from "react";
import Products from "./components/products/Products";
import Cart from "./components/products/Cart";

function App() {
  const [progress, setProgress] = useState(0)


  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/" element={<Products setProgress={setProgress} />} />
        <Route exact path="/about" element={<About setProgress={setProgress} />} />
        <Route exact path="/cart" element={<Cart setProgress={setProgress} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
