import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button1 from "../Button/Button";

const Navbar = () => {
  return (
    <div className="w-full h-full px-10 py-6 flex justify-between items-center  ">
      <Link to="/" className="font-bold text-2xl">
        Luxury Estate
      </Link>
      <div>
        <NavLink
          to="/properties"
          className=" hover:text-orange-300 font-semibold mx-6 "
        >
          Properties
        </NavLink>
        <NavLink
          to="/agencies"
          className="text-gray-600 hover:text-orange-300 font-semibold mx-6"
        >
          Agencies
        </NavLink>
        <NavLink
          to="/about"
          className="text-gray-600 hover:text-orange-300 font-semibold mx-6"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="text-gray-600 hover:text-orange-300 font-semibold mx-6"
        >
          Contact
        </NavLink>
      </div>
      <Button1
        btn="bg-orange-300 hover:bg-orange-400  "
        title="Login/Register"
      />
    </div>
  );
};

export default Navbar;
