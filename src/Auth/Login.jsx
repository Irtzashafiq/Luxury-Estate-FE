import React, { useContext, useEffect, useState } from "react";
import Button1 from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/UserContext/userContext";

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
    await axios
      .post("http://localhost:3000/users/login", inputData)
      .then((val) => {
        window.alert(val.data.message);
        localStorage.setItem("userId", val.data.userId);
        contxtUser.setUpdateState(!contxtUser.updateState);
        if (val.data.userId !== undefined) {
          navigate("/");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className=" auth">
      <div className="logMain p-8 bg-gray-200 rounded-md flex flex-col justify-between items-center">
        <div className="flex w-full bg-gray-200 rounded-md">
          <Button1 btn="bg-orange-300  h-full w-full" title="Login" />
          <Button1
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
              value={inputData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col my-2">
            {" "}
            <strong>Password</strong>
            <input
              type="password"
              placeholder="Type here"
              className="px-3 rounded-md py-2 w-96 outline-none"
              value={inputData.password}
              name="password"
              onChange={handleChange}
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
        <Button1
          btn="bg-orange-300 hover:bg-orange-400 mt-4 "
          click={loginUser}
          title="Login"
        />
      </div>
    </div>
  );
};

export default Login;
