import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./views/ProductPage";
import Faq from "./views/Faq";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import Booking from "./views/booking";
import { AuthProvider } from "./context/AuthProvider";
import AuthPage from "./views/auth";
import ProductsPage from "./views/ProductsPage";
import ManicurePage from "./views/ManicurePage";
import PedicurePage from "./views/PedicurePage";

ReactDOM.render(
    <AuthProvider>
        <Router>
            <div className="min-w-screen grid place-items-center">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/Products" element={<ProductsPage />} />
                <Route path="/Manicures" element={<ManicurePage />} />
                <Route path="/Pedicures" element={<PedicurePage />} />
            </Routes>
            <Footer />
        </Router>
    </AuthProvider>,
    document.getElementById("root")
);
