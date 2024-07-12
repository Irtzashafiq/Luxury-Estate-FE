import React from "react";
import "./profile.css";
import pp from "../../asset/pp.png";
import Button1 from "../../Components/Button/Button";
const Profile = () => {
  return (
    <div className="maindiv flex justify-start items-center rounded-xl flex-col pt-16  ">
      <div className="ppcontainer mx-auto ">
        <img src={pp} className="pp" alt="no image found" />
      </div>
      <div className="grid lg:grid-cols-2 gap-x-8 ">
        <div className="flex flex-col my-2">
          <strong>Agency Name</strong>
          <input
            className=" border-2 rounded-lg py-1 px-3 w-[28vw] "
            name="username"
            placeholder="type here"
            type="text"
          />
        </div>
        <div className="flex flex-col my-2">
          <strong>Contact Info</strong>
          <input
            className=" border-2 rounded-lg py-1 px-3 w-[28vw] "
            name="username"
            placeholder="type here"
            type="number"
          />
        </div>
        <div className="flex flex-col my-2">
          <strong>Email</strong>
          <input
            className=" border-2 rounded-lg py-1 px-3 w-[28vw] "
            name="username"
            placeholder="type here"
            type="email"
          />
        </div>
        <div className="flex flex-col my-2 ">
          <strong>Password</strong>
          <input
            className=" border-2 rounded-lg py-1 px-3 w-[28vw] "
            name="username"
            placeholder="type here"
            type="password"
          />
        </div>
        <div className="flex flex-col my-2 ">
          <strong>Attachment</strong>
          <input
            className=" border-2 rounded-lg py-1 px-3 w-[28vw]"
            name="username"
            placeholder="type here"
            type="text"
          />
        </div>
        <div></div>
        <div className="flex flex-col mt-4 ">
          <strong>Description</strong>
          <input
            className=" border-2 rounded-lg p-4 w-[28vw] "
            name="username"
            placeholder="type here"
            type="text"
          />
        </div>
      </div>

      <Button1 btn="bg-orange-300 hover:bg-orange-400 mt-4 " title="Update" />
    </div>
  );
};

export default Profile;
