import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./views/product";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:productId" element={<Product />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
