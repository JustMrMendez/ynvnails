import Hero from "./components/sections/Hero";
import Navbar from "./components/navigation/Navbar";
import Products from "./components/sections/Products";
import Services from "./components/sections/Services";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <main className="max-w-7xll relative z-30 flex h-full w-full flex-col items-center gap-10 rounded-b-2xl bg-white pt-2 pb-24 shadow-lg md:rounded-none">
        <Hero />
        <Services />
        <Products />
      </main>
    </>
  );
}

export default App;
