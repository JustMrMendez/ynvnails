import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const linksList = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Products",
            path: "/products",
        },
        {
            name: "About",
            path: "/about",
        },
    ];

    return (
        <>
            <div className="fixed top-2 z-50 my-2 w-[95%] md:w-full">
                <nav className=" flex w-full max-w-6xl items-center justify-between rounded-lg bg-gradient-to-tr from-purple-500/60 to-pink-600/60 py-2 px-6 shadow-sm shadow-purple-900/40 backdrop-blur-sm lg:mx-auto">
                    <Link to="/" className="text-2xl font-bold text-white">
                        Logo
                    </Link>
                    <div className="ml-6 hidden  lg:flex">
                        {linksList.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="ml-6 text-lg font-semibold text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
            <button
                className={`fixed top-7 right-7 z-[51] flex h-6 w-8 transform cursor-pointer flex-col  justify-between transition  duration-300 ease-in-out md:right-8 lg:hidden ${
                    isOpen ? "translate-y-1 scale-95" : ""
                }`}
                onClick={toggle}
            >
                <div
                    className={`h-[3px] w-full rounded bg-white transition-all duration-300 ${
                        isOpen ? "translate-y-3 rotate-45  " : ""
                    }`}
                ></div>
                <div
                    className={`h-[3px] w-full rounded bg-white transition-all duration-300 ${
                        isOpen ? " -rotate-45 " : ""
                    }`}
                ></div>
                <div
                    className={`rounded transition-all duration-300 ${
                        isOpen
                            ? "h-[2px] w-52 translate-y-5 -translate-x-44 bg-white/50"
                            : "h-[3px] w-full bg-white"
                    }`}
                ></div>
            </button>
            <Sidebar isOpen={isOpen} />
        </>
    );
}

export default Navbar;
