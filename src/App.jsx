import { useState } from "react";
import "./Assets/css/App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Pages/HeroSection";
import ProductItem from "./Pages/ProductItem";
import Cart from "./Components/Cart";

function App() {
  const [cart, setShowCart] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={cart} setShowCart={setShowCart} />
        <Cart cart={cart} setShowCart={setShowCart} />
        <Routes>
          <Route exact path="/" element={<HeroSection />} />
          <Route exact path="/home" element={<HeroSection />} />
          <Route
            exact
            path="/GetMyFlex_ReactJS-ecommerce"
            element={<HeroSection />}
          />
          <Route
            exact
            path="/product_item/smartphones"
            element={<ProductItem category="smartphones" />}
          />
          <Route
            exact
            path="/product_item/laptops"
            element={<ProductItem category="laptops" />}
          />
          <Route
            exact
            path="/product_item/sunglasses"
            element={<ProductItem category="sunglasses" />}
          />

          {/* <Route exact path="/product" element={<Product />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
