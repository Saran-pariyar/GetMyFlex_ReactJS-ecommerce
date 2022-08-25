import { useState } from "react";
import "./Assets/css/App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Pages/HeroSection";
import Product from "./Pages/Product";
import Cart from "./Components/Cart";

function App() {
  const [cart, setShowCart] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={cart} setShowCart={setShowCart} />
        <Cart cart={cart} setShowCart={setShowCart} />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          {/* <Route path="/home" element={<HeroSection />} /> */}

          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
