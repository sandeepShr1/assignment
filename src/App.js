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
import Alert from './container/Alert';

import { CartProvider } from 'react-use-cart';

function App() {
  const [progress, setProgress] = useState(0);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  return (
    <BrowserRouter>
      <Navbar />
      <Alert alert={alert} />
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <CartProvider >
        <Routes>
          <Route exact path="/" element={<Products setProgress={setProgress} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About setProgress={setProgress} showAlert={showAlert} />} />
          <Route exact path="/cart" element={<Cart setProgress={setProgress} showAlert={showAlert} />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
