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
    <div className="flex items-center justify-between bg-teal-500 p-6">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-white">Logo</div>
        <div className="ml-6 flex">
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
