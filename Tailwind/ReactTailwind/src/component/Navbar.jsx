import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="h-16 w-full shadow-md bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white flex items-center justify-between px-6 fixed top-0 z-[999] ">
      <div className="text-2xl font-bold flex items-center  ">
        <div className="bg-gray-700  flex items-center justify-center rounded-full mr-2 ">
          <img src="/public/image/hamrobazar.png" alt="" height={"10px"} />
        </div>
      </div>
      <ul className="hidden sm:flex gap-8 text-lg ">
        <NavLink to={"/home"}>
          <li className="hover:text-blue-400 cursor-pointer">Product</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li className="hover:text-blue-400 cursor-pointer">Cart</li>
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="hover:text-blue-400 cursor-pointer">User</li>
        </NavLink>
      </ul>
      <div className="hidden sm:flex gap-4">
        <NavLink to={"/login"}>
          <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
            Login
          </button>
        </NavLink>
      </div>

      <div
        className="sm:hidden flex flex-col gap-1 cursor-pointer"
        onClick={toggleMobileMenu}
      >
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center py-6 sm:hidden z-10">
          <ul className="flex flex-col gap-6 text-lg">
            <NavLink
              to={"/home"}
              className="hover:text-blue-400 cursor-pointer"
            >
              Product
            </NavLink>
            <Link to={"/about"} className="hover:text-blue-400 cursor-pointer">
              Cart
            </Link>
            <NavLink
              to={"/contact"}
              className="hover:text-blue-400 cursor-pointer"
            >
              User
            </NavLink>
          </ul>
          <NavLink to={"/login"}>
            <button className="bg-blue-600 px-6 py-2 mt-4 rounded-md hover:bg-blue-700">
              Login
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
