import React, { useState } from "react";
import Button1 from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactInfo: "",
  });
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const signupUser = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("username", inputData.username);
    formData.append("email", inputData.email);
    formData.append("password", inputData.password);
    formData.append("contactInfo", inputData.contactInfo);
    formData.append("confirmPassword", inputData.confirmPassword);
    await axios
      .post("http://localhost:3000/users/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((val) => {
        if (val.data.message === "User created successfully") {
          setInputData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            contactInfo: "",
          });
          setImage(null);
          navigate("/login");
        }

        console.log(val.data.message);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className=" auth">
      <div className=" p-8 bg-gray-200 rounded-md flex flex-col justify-between items-center">
        <div className="flex w-full bg-gray-200 rounded-md">
          <Button1
            click={() => navigate("/login")}
            btn="shadow-none h-full w-full"
            title="Login"
          />
          <Button1 btn="bg-orange-300 h-full w-full" title="Register" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col my-2">
            {" "}
            <strong>User Name</strong>
            <input
              type="text"
              placeholder="Type here"
              className="px-3 rounded-md py-2  w-96 outline-none"
              value={inputData.username}
              onChange={handleChange}
              name="username"
            />
          </div>
          <div className="flex flex-col my-2">
            {" "}
            <strong>Email</strong>
            <input
              type="text"
              placeholder="Type here"
              className="px-3 rounded-md py-2  w-96 outline-none"
              value={inputData.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="flex flex-col my-2">
            {" "}
            <strong>Password</strong>
            <input
              type="password"
              placeholder="Type here"
              className="px-3 rounded-md py-2  w-96 outline-none"
              value={inputData.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="flex flex-col my-2">
            {" "}
            <strong>Confirm Password</strong>
            <input
              type="password"
              placeholder="Type here"
              className="px-3 rounded-md py-2  w-96 outline-none"
              value={inputData.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
            />
          </div>
          <div className="flex flex-col my-2">
            {" "}
            <strong>Contact Info</strong>
            <input
              type="number"
              placeholder="( +XX ) XXX-XXXXXXX"
              className="px-3 rounded-md py-2  w-96 outline-none"
              value={inputData.contactInfo}
              onChange={handleChange}
              name="contactInfo"
            />
          </div>
          <div className="flex flex-col my-2">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
            >
              Upload file
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="image"
              type="file"
              value={inputData.image}
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="flex justify-end ">
            <small>
              Already have an account?{" "}
              <strong className=" cursor-pointer text-blue-600 hover:text-blue-700 mt-4">
                Login
              </strong>
            </small>
          </div>
        </div>

        <Button1
          btn="bg-orange-300 hover:bg-orange-400 mt-4"
          title="Register"
          click={signupUser}
        />
      </div>
    </div>
  );
};

export default SignUp;
