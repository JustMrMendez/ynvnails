import Hero from "./components/sections/Hero";
import Navbar from "./components/navigation/Navbar";
import Products from "./components/sections/Products";
import Services from "./components/sections/Services";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="max-w-7xll flex h-full w-full flex-col items-center gap-5">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
