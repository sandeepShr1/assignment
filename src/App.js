import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from "react";
import Alert from './container/Alert';

import { CartProvider } from 'react-use-cart';
import Products from "./components/Products/Products";
import NotFound from './container/NotFound';
import Checkout from "./components/checkout/Checkout";

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
      <div className="overflow-hidden " id = "grid-container">
        <header>
          <Navbar />
          <Alert alert={alert} />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
        </header>
        <main>
          <CartProvider >
            <Routes>
              <Route exact path="/" element={<Products setProgress={setProgress} showAlert={showAlert} />} />          <Route path='*' element={<NotFound />} />
              <Route exact path="/checkout" element={<Checkout setProgress={setProgress} showAlert={showAlert} />} />          <Route path='*' element={<NotFound />} />
            </Routes>
          </CartProvider>

        </main>
        <footer>ALL RIGHTS IS RESERVED.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
