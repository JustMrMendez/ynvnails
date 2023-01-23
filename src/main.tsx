import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./views/product";
import Faq from "./views/Faq";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import Booking from "./views/bookin";
import { AuthProvider } from "./context/AuthProvider";
import AuthPage from "./views/auth";
import ProductPage from "./views/ProductPage";

ReactDOM.render(
    <AuthProvider>
        <Router>
            <div className="min-w-screen grid place-items-center">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/Products" element={<ProductPage />} />
            </Routes>
            <Footer />
        </Router>
    </AuthProvider>,
    document.getElementById("root")
);
