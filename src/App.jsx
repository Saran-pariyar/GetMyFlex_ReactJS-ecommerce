import "./Assets/css/App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Pages/HeroSection";
import Product from "./Pages/Product";
import Cart from "./Components/Cart";
import CartContext from "./Components/Context/CartContext";

function App() {
  // const [cart, setShowCart] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <CartContext.Provider value={cart} set={setShowCart(false)}> */}
        <Navbar />
        <Cart />
        {/* </CartContext.Provider> */}
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
