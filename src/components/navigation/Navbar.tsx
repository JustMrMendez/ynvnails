import { Link } from "react-router-dom";
function Navbar() {
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
    <div className="shadow-purple-900-200/40 sticky z-50 flex w-full items-center justify-between bg-gradient-to-tr from-purple-500 to-pink-600 py-2 px-6 shadow-sm">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-white">Logo</div>
        <div className="ml-6 hidden  md:flex">
          {linksList.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="ml-6 text-lg font-semibold text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="ml-6 text-lg font-semibold text-white">Login</div>
        <div className="ml-6 text-lg font-semibold text-white">Register</div>
      </div>
    </div>
  );
}

export default Navbar;
