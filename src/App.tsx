import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";
import Services from "./components/sections/Services";

function App() {
    return (
        <>
            <main className="max-w-7xll relative z-30 flex h-full w-full flex-col items-center gap-10 rounded-b-2xl bg-pink-50 pb-24 shadow-lg md:rounded-none">
                <Hero />
                <Services />
                <Products />
            </main>
        </>
    );
}

export default App;
