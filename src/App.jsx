import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import MenuPage from "./Pages/MenuPage";
import { CartProvider } from "./contexts/CartContext";


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/MenuPage" element={<MenuPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;