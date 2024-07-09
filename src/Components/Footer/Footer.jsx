import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col  justify-between items-center bg-gray-900 footer ">
      <div className="text-white w-full flex justify-center items-center py-6">
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-twitter"></a>
        <a href="#" className="fa fa-google"></a>
        <a href="#" className="fa fa-instagram"></a>
        <a href="#" className="fa fa-linkedin"></a>
        <a href="#" className="fa fa-youtube"></a>
      </div>
      <div className="flex justify-around w-full px-8 ">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl font-semibold">Luxury Estate</h1>
          <p className="text-white mt-4 w-72">
            A great plateform to buy, sell and rent your properties without any
            commisions.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl font-semibold">Links</h1>
          <div className="flex flex-col mt-4">
            <Link className="text-white text-lg my-1">Home </Link>
            <Link className="text-white text-lg my-1">About </Link>
            <Link className="text-white text-lg my-1">Blogs </Link>
            <Link className="text-white text-lg my-1">Contact </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl font-semibold">CONTACT DETAILS</h1>
          <p className="text-white mt-4 w-72">
            <b>Location:</b> Township Lahore
          </p>{" "}
          <p className="text-white mt-4 w-72">
            <b>Email:</b>{" "}
            <span className="text-blue-700 cursor-pointer">
              irtzashafiq0@gmail.com
            </span>
          </p>{" "}
          <p className="text-white mt-4 w-72">
            <b>Tel:</b> (+92) 310 7298846
          </p>
        </div>
      </div>
      <div className="text-white bg-gray-950 w-full flex justify-center items-center py-6">
        <strong>© Copy 2024 Copyright: LuxuryEstate.com</strong>
      </div>
    </div>
  );
};

export default Footer;
