import Hero from "./components/sections/Hero";
import Navbar from "./components/navigation/Navbar";
import Products from "./components/sections/Products";
import Services from "./components/sections/Services";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xll relative z-40 flex h-full w-full flex-col items-center gap-5 rounded-b-2xl bg-white pb-24 shadow-lg md:rounded-none">
        <Hero />
        <Services />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
