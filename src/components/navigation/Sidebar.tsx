import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../db";

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
    const { user } = useContext(AuthContext);

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
                <h2 className="mt-2 p-4 text-2xl font-bold text-white">
                    YNV Nails
                </h2>
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
                <div className="flex w-full justify-between">
                    {user ? (
                        <button
                            className="block  px-4 py-2 text-left  text-gray-400 hover:bg-gray-800 hover:text-white"
                            onClick={() => signOut(auth)}
                        >
                            Log Out
                        </button>
                    ) : (
                        <a
                            href="/auth"
                            className="block px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                            Log In
                        </a>
                    )}
                    {!user ? (
                        <a
                            href="/auth/"
                            className=" block px-4 py-2 text-left text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                            Sign Up
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

//  "Logout" : "Login"
