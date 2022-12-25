import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./views/product";
import Faq from "./views/Faq";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Sidebar from "./components/navigation/Sidebar";

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("root")
);
