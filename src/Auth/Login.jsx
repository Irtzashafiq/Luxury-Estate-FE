import React from "react";
import Button from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="logMain p-8 bg-gray-200 rounded-md flex flex-col justify-between items-center">
      <div className="flex w-full bg-gray-200 rounded-md">
        <Button btn="bg-orange-300  h-full w-full" title="Login" />
        <Button
          click={() => navigate("/register")}
          btn="shadow-none h-full w-full"
          title="Register"
        />
      </div>{" "}
      <div className="flex flex-col">
        <div className="flex flex-col  my-2">
          {" "}
          <strong>Email</strong>
          <input
            type="text"
            placeholder="Type here"
            className="px-3 rounded-md py-2 w-96 outline-none"
          />
        </div>
        <div className="flex flex-col my-2">
          {" "}
          <strong>Password</strong>
          <input
            type="password"
            placeholder="Type here"
            className="px-3 rounded-md py-2 w-96 outline-none"
          />
        </div>

        <div className="flex justify-end ">
          <small>
            Don't have an account?{" "}
            <strong className=" cursor-pointer text-blue-600 hover:text-blue-700 mt-4">
              Sign Up
            </strong>
          </small>
        </div>
      </div>
      <Button btn="bg-orange-300 hover:bg-orange-400 mt-4 " title="Login" />
    </div>
  );
};

export default Login;
