import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from "react";
import Alert from './container/Alert';

import { CartProvider } from 'react-use-cart';
import ProductListing from "./components/ProductListing";
import NotFound from './container/NotFound';

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
          <Route exact path="/" element={<ProductListing setProgress={setProgress} showAlert={showAlert} />} />          <Route path='*' element={<NotFound />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
