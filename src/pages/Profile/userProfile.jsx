import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import Button1 from "../../Components/Button/Button";
import UserContext from "../../context/UserContext/userContext";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
const UserProfile = () => {
  const contxtUser = useContext(UserContext);
  const [selImage, setSelImage] = useState(null);
  const [userMain, setuserMain] = useState(null);
  const [image, setImage] = useState(null);
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    contactInfo: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };
  const getUser = async () => {
    await axios
      .get("http://localhost:3000/users/getuser/:?id=" + contxtUser.userExist)
      .then((val) => {
        setuserMain(val.data.response);
        var { username, email, contactInfo, image } = val.data.response;
        setInputData({
          username,
          email,
          contactInfo,
        });
        setImage(image);
      })
      .catch((val) => console.log(val.data));
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const updateUser = async () => {
    const formData = new FormData();
    // if (selImage !== null) {
    //   formData.append("image", image);
    // }
    formData.append("username", inputData.username);
    formData.append("email", inputData.email);
    formData.append("contactInfo", inputData.contactInfo);
    await axios
      .post(
        "http://localhost:3000/users/updateuser/:?id=" + contxtUser.userExist,
        inputData
      )
      .then((val) => console.log(val.data))
      .catch((e) => console.log(e));
  };
  return (
    userMain !== null && (
      <div className="maindiv flex justify-start items-center rounded-xl flex-col pt-16  ">
        <div className="ppcontainer relative mx-auto">
          <img
            src={
              selImage === null ? "http://localhost:3000/" + image : selImage
            }
            className="pp"
            alt="no image found"
          />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="upload-image-button"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="upload-image-button">
            <IconButton
              style={{
                position: "absolute",
                right: "10px",
                bottom: "10px",
                backgroundColor: "black",
                zIndex: "10",
              }}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <EditIcon />
            </IconButton>
          </label>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-8 ">
          <div className="flex flex-col my-2">
            <strong>User Name</strong>
            <input
              className=" border-2 rounded-lg py-1 px-3 w-[28vw] "
              name="username"
              placeholder="type here"
              type="text"
              value={inputData.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col my-2">
            <strong>Contact Info</strong>
            <input
              className=" border-2 rounded-lg py-1 px-3 w-[28vw] "
              name="contactInfo"
              placeholder="type here"
              value={inputData.contactInfo}
              onChange={handleChange}
              type="number"
            />
          </div>
          <div className="flex flex-col my-2">
            <strong>Email</strong>
            <input
              className=" border-2 rounded-lg py-1 px-3 w-[28vw] "
              name="email"
              placeholder="type here"
              value={inputData.email}
              onChange={handleChange}
              type="email"
            />
          </div>
          {/* <div className="flex flex-col my-2 ">
            <strong>Password</strong>
            <input
              className=" border-2 rounded-lg py-1 px-3 w-[28vw] "
              name="username"
              placeholder="type here"
              type="password"
            />
          </div> */}
          {/* <div className="flex flex-col my-2 ">
            <strong>Attachment</strong>
            <input
              className=" border-2 rounded-lg py-1 px-3 w-[28vw]"
              name="username"
              placeholder="type here"
              type="text"
            />
          </div> */}
          <div></div>
          <div className="flex flex-col mt-4 ">
            <strong>Description</strong>
            <input
              className=" border-2 rounded-lg p-4 w-[28vw] "
              name="username"
              placeholder="type here"
              value={inputData.description}
              type="text"
            />
          </div>
        </div>

        <Button1
          click={updateUser}
          btn="bg-orange-300 hover:bg-orange-400 mt-8 "
          title="Update"
        />
      </div>
    )
  );
};

export default UserProfile;
