import "./Assets/css/App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Pages/HeroSection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes></Routes>
      </BrowserRouter>
      <HeroSection />
    </div>
  );
}

export default App;
