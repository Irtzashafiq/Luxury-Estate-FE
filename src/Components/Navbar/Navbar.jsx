import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button1 from "../Button/Button";
import UserContext from "../../context/UserContext/userContext";
import AgencyContext from "../../context/agencyContext/agencyContext";

const Navbar = () => {
  const contxtUser = useContext(UserContext);
  const contxtAgency = useContext(AgencyContext);
  const Navigate = useNavigate();
  useEffect(() => {
    console.log(
      contxtAgency.agency.some((val) => val._id === contxtUser.userExist)
    );
    console.log(contxtUser.userExist);
  }, [contxtAgency]);
  return (
    <div className="w-full h-full px-10 py-6 flex justify-between items-center  ">
      <Link to="/" className="font-bold text-2xl">
        Luxury Estate
      </Link>
      <div>
        {contxtUser.userExist !== "" &&
          contxtAgency.agency.some(
            (val) => val._id === contxtUser.userExist
          ) && (
            <NavLink
              to="/myproperties"
              className=" hover:text-orange-300 font-semibold mx-6 "
            >
              My Properties
            </NavLink>
          )}
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

        {contxtUser.userExist !== "" &&
          contxtUser.users.some((val) => val._id === contxtUser.userExist) && (
            <NavLink
              to="/profileUser"
              className="text-gray-600 hover:text-orange-300 font-semibold mx-6"
            >
              Profile
            </NavLink>
          )}
        {contxtUser.userExist !== "" &&
          contxtAgency.agency.some(
            (val) => val._id === contxtUser.userExist
          ) && (
            <NavLink
              to="/profileAgency"
              className="text-gray-600 hover:text-orange-300 font-semibold mx-6"
            >
              Profile
            </NavLink>
          )}
      </div>
      {contxtUser.userExist === "" && (
        <Button1
          click={() => Navigate("/login")}
          btn="bg-orange-300 hover:bg-orange-400  "
          title="Login/Register"
        />
      )}
      {contxtUser.userExist !== "" && (
        <Button1
          click={() => {
            Navigate("/");
            localStorage.removeItem("userId");
            contxtUser.setUserExist("");
          }}
          btn="bg-orange-300 hover:bg-orange-400  "
          title="Logout"
        />
      )}
    </div>
  );
};

export default Navbar;
