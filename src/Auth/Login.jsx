import React, { useContext, useEffect, useState } from "react";
import Button1 from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/UserContext/userContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const contxtUser = useContext(UserContext);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const loginUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        inputData
      );
      toast.success(response.data.message);
      localStorage.setItem("userId", response.data.userId);
      contxtUser.setUpdateState(!contxtUser.updateState);
      if (response.data.userId !== undefined) {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to login.");
      console.log(error);
    }
  };
  const loginAgency = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/agency/login",
        inputData
      );
      toast.success(response.data.message);
      localStorage.setItem("userId", response.data.agencyId);
      contxtUser.setUpdateState(!contxtUser.updateState);
      if (response.data.agencyId !== undefined) {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to login.");
      console.log(error);
    }
  };

  return (
    <div className=" auth">
      <div className="logMain p-8 bg-slate-100 rounded-md flex flex-col justify-between items-center ">
        <div className="flex w-full bg-slate-200 rounded-md">
          <Button1 btn="bg-orange-300  h-full w-full" title="Login" />
          <Button1
            click={() => navigate("/register")}
            btn="shadow-none h-full w-full"
            title="Register"
          />
        </div>{" "}
        <div className="flex flex-col ">
          <div className="flex flex-col w-[80vh] my-2">
            {" "}
            <strong>Email</strong>
            <input
              type="text"
              placeholder="Type here"
              className="px-3 rounded-md py-2  outline-none"
              value={inputData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col my-2 w-[80vh]">
            {" "}
            <strong>Password</strong>
            <input
              type="password"
              placeholder="Type here"
              className="px-3 rounded-md py-2  outline-none"
              value={inputData.password}
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end ">
            <small>
              Don't have an account?{" "}
              <strong
                className=" cursor-pointer text-blue-600 hover:text-blue-700 mt-4"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </strong>
            </small>
          </div>
        </div>
        <div className="flex gap-2">
          <Button1
            btn="bg-orange-300 hover:bg-orange-400 mt-4 "
            click={loginUser}
            title="Login User"
          />
          <Button1
            btn="bg-orange-300 hover:bg-orange-400 mt-4 "
            click={loginAgency}
            title="Login Agency"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
