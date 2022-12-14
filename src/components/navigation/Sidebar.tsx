interface SidebarProps {
  isOpen: boolean;
}

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
        <h2 className="mt-2 p-4 text-2xl font-bold text-white">Sidebar</h2>
        <ul className="w-full text-gray-400">
          <li className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Item 1
            </a>
          </li>
          <li className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Item 2
            </a>
          </li>
          <li className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Item 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
