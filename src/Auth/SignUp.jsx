import React, { useEffect, useState } from "react";
import Button1 from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const [role, setRole] = useState(false);
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactInfo: "",
  });
  const [image, setImage] = useState(null);
  useEffect(() => {
    setInputData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactInfo: "",
    });
    setImage(null);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();

  const validateForm = () => {
    const { username, email, password, confirmPassword, contactInfo } =
      inputData;
    if (!username || !email || !password || !confirmPassword || !contactInfo) {
      toast.error("All fields are required");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const signupUser = async () => {
    if (!validateForm()) return;

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
          toast.success("User created successfully!");
          console.log("User created successfully!");
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
      })
      .catch((e) => {
        toast.error(e.response?.data?.message || "Failed to create user.");
        console.log(e);
      });
  };
  const signupAgnecy = async () => {
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("username", inputData.username);
    formData.append("email", inputData.email);
    formData.append("password", inputData.password);
    formData.append("contactInfo", inputData.contactInfo);
    formData.append("confirmPassword", inputData.confirmPassword);
    await axios
      .post("http://localhost:3000/agency/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((val) => {
        if (val.data.message === "Agency Created Successfully") {
          toast.success("Agency created successfully!");
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
      })
      .catch((e) => {
        toast.error(e.response?.data?.message || "Failed to create agency.");
        console.log(e);
      });
  };
  return (
    <div className=" auth ">
      <div className=" p-8 w-[100vh] rounded-md flex flex-col justify-between items-center bg-slate-100">
        <div className="flex w-full bg-slate-200 rounded-md">
          <Button1
            click={() => navigate("/login")}
            btn="shadow-none h-full w-full"
            title="Login"
          />
          <Button1 btn="bg-orange-300 h-full w-full" title="Register" />
        </div>
        <div className="flex flex-col w-[80vh]">
          <div className="flex flex-col my-2">
            {" "}
            <strong>User Name</strong>
            <input
              autoComplete="off"
              type="text"
              placeholder="Type here"
              className="px-3 rounded-md py-2 outline-none"
              value={inputData.username}
              onChange={handleChange}
              name="username"
            />
          </div>
          <div className="flex flex-col my-2">
            {" "}
            <strong>Email</strong>
            <input
              autoComplete="off"
              type="text"
              placeholder="Type here"
              className="px-3 rounded-md py-2  outline-none"
              value={inputData.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="flex flex-col my-2">
            {" "}
            <strong>Password</strong>
            <input
              autoComplete="off"
              type="password"
              placeholder="Type here"
              className="px-3 rounded-md py-2  outline-none"
              value={inputData.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="flex flex-col my-2">
            {" "}
            <strong>Confirm Password</strong>
            <input
              autoComplete="off"
              type="password"
              placeholder="Type here"
              className="px-3 rounded-md py-2  outline-none"
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
              className="px-3 rounded-md py-2  outline-none"
              value={inputData.contactInfo}
              onChange={handleChange}
              name="contactInfo"
            />
          </div>
          <div className="flex flex-col my-2">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
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
          <div class="form-check flex items-center">
            <input
              class="form-check-input"
              type="checkbox"
              checked={role}
              onChange={(val) => setRole(val.target.checked)}
              id="role"
            />
            <label class="form-check-label mx-2 mt-2" htmlFor="role">
              Register as an Agency  
            </label>
          </div>

          <div className="flex justify-end ">
            <small>
              Already have an account?{" "}
              <strong
                className=" cursor-pointer text-blue-600 hover:text-blue-700 mt-4"
                onClick={() => navigate("/login")}
              >
                Login
              </strong>
            </small>
          </div>
        </div>

        <Button1
          btn="bg-orange-300 hover:bg-orange-400 mt-4"
          title="Register"
          click={!role ? signupUser : signupAgnecy}
        />
      </div>
    </div>
  );
};

export default SignUp;
