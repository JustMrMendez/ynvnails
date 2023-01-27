interface SidebarProps {
    isOpen: boolean;
}
import { Link } from "react-router-dom";
import imageUrl from "/src/logo2.png";

const Sidebar = ({ isOpen }: SidebarProps) => {
    return (
        <div className="z-auto">
            {/* if isOpen */}
            <div
                className={`${
                    isOpen ? "opacity-50" : "pointer-events-none opacity-0"
                } fixed right-0 top-0 z-40 h-screen w-screen bg-gray-900 transition-opacity duration-300 lg:hidden`}
            ></div>
            <div
                className={`fixed left-full top-0 z-50 flex h-screen w-64 transform flex-col items-center bg-gray-900 transition duration-300 ease-in-out ${
                    isOpen ? "-translate-x-full" : ""
                }`}
            >
                <Link to="/" className="mt-2 py-4 text-2xl ">
                    <img
                        src={imageUrl}
                        alt=""
                        className="top-0 h-10 object-cover grayscale"
                    />
                </Link>
                <ul className="w-full text-gray-400">
                    <li className="py-2">
                        <a
                            href="/"
                            className="block px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                            Home
                        </a>
                    </li>
                    <li className="py-2">
                        <a
                            href="/Products"
                            className="block px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                            Products
                        </a>
                    </li>
                    <li className="py-2">
                        <a
                            href="/about"
                            className="block px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
