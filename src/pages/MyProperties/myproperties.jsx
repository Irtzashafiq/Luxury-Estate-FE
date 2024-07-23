import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../../Components/PropertyCard/PropertyCard";
import Button1 from "../../Components/Button/Button";
import UserContext from "../../context/UserContext/userContext";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

import CityContext from "../../context/cityContext/cityContext";

const MyProperties = () => {
  //#region states

  const contxtCity = useContext(CityContext);
  const contxtUser = useContext(UserContext);
  const [properties, setProperties] = useState([]);
  const [updateState, setUpdateState] = useState(-1);
  const [propertyModal, setPropertyModal] = useState(false);
  const [image, setImage] = useState(null);
  const [updatefunc, setUpdatefunc] = useState(false);

  const [inputData, setInputData] = useState({
    title: "",
    location: "",
    price: "",
    size: "",
    bedrooms: "",
    bathrooms: "",
    buyOrRent: "",
    cityId: "",
    propertyType: "",
    phone: "",
    description: "",
  });

  //#endregion
  //#region functions
  const getProperty = async () => {
    await axios
      .get("http://localhost:3000/property/getAllProperty")
      .then((val) => {
        setProperties(val.data);
        console.log(properties);
      })
      .catch((e) => console.log(e));
  };
  const deleteProperty = async (id) => {
    const isConfirm = window.confirm("Are You Sure?");
    if (isConfirm) {
      await axios
        .delete("http://localhost:3000/property/deleteProperty:?id=" + id)
        .then((val) => {
          if (val.data.message === "deleted Successfully") {
            toast.success("Deleted Successfully", {
              position: "bottom-right",
            });

            setUpdatefunc(!updatefunc);
            console.log(val.data);
          } else {
            toast.error("property not found!", {
              position: "bottom-right",
            });
          }
        })
        .catch((e) => console.log(e));
    } else {
      toast.error("Something Went Wrong!", {
        position: "bottom-right",
      });
    }
  };
  const handleEdit = (val) => {
    setUpdateState(val._id);
    setPropertyModal(true);
    setInputData({
      title: val.title,
      location: val.location,
      price: val.price,
      size: val.size,
      bedrooms: val.bedrooms,
      bathrooms: val.bathrooms,
      buyOrRent: val.buyOrRent,
      cityId: val.cityId,
      propertyType: val.propertyType,
      phone: val.phone,
      description: val.description,
    });
    setImage(val.image);
  };
  const handleUpdateProperty = async () => {
    const {
      title,
      location,
      price,
      size,
      bedrooms,
      buyOrRent,
      cityId,
      propertyType,
      bathrooms,
      phone,
      description,
    } = inputData;
    const formData = new FormData();
    // formData.append("_id", updateState);
    formData.append("title", title);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("size", size);
    formData.append("bedrooms", bedrooms);
    formData.append("bathrooms", bathrooms);
    formData.append("buyOrRent", buyOrRent);
    formData.append("propertyType", propertyType);
    formData.append("phone", phone);
    formData.append("description", description);
    formData.append("agency_id", contxtUser.userExist);
    formData.append("cityId", cityId);
    formData.append("image", image);

    await axios
      .put(
        "http://localhost:3000/property/updateProperty:?id=" + updateState,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((val) => {
        setUpdatefunc(!updatefunc);
        setPropertyModal(false);
        setUpdateState(-1);
        toast.success("Updated Successfully", {
          position: "bottom-right",
        });

        console.log(val.data);
      })
      .catch((e) => console.log(e));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handlePostProperty = async () => {
    const {
      title,
      location,
      price,
      size,
      bedrooms,
      buyOrRent,
      propertyType,
      bathrooms,
      phone,
      cityId,
      description,
    } = inputData;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("size", size);
    formData.append("bedrooms", bedrooms);
    formData.append("bathrooms", bathrooms);
    formData.append("buyOrRent", buyOrRent);
    formData.append("propertyType", propertyType);
    formData.append("phone", phone);
    formData.append("image", image);
    formData.append("cityId", cityId);
    formData.append("description", description);
    formData.append("agency_id", contxtUser.userExist);

    await axios
      .post("http://localhost:3000/property/addproperty", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((val) => {
        console.log(val);
        setPropertyModal(false);
        setInputData({
          title: "",
          location: "",
          price: "",
          size: "",
          bedrooms: "",
          buyOrRent: "",
        });
        setUpdatefunc(!updatefunc);
      })
      .catch((e) => console.warn(e));
  };

  //#endregion
  useEffect(() => {
    getProperty();
  }, [updatefunc]);
  return (
    <div className="flex flex-col justify-center items-center mt-[25vh]">
      <div className="flex justify-end items-center w-full">
        <Button1
          click={() => setPropertyModal(true)}
          btn="bg-orange-300 hover:bg-orange-400  "
          title="+ Add Property"
        />
      </div>
      <h1 className=" text-4xl font-bold my-10">My Properties</h1>
      <div className="grid grid-cols-3 gap-x-16">
        {properties.length > 0 &&
          properties
            .filter((val) => val.agency_id === contxtUser.userExist)
            .map((val) => (
              <PropertyCard
                property={val}
                handleDelete={() => deleteProperty(val._id)}
                handleEdit={() => handleEdit(val)}
              />
            ))}
      </div>
      <Modal
        size="lg"
        show={propertyModal}
        onHide={() => {
          setPropertyModal(false);
          setUpdateState(-1);
          setInputData({
            title: "",
            location: "",
            price: "",
            size: "",
            bedrooms: "",
            bathrooms: "",
            buyOrRent: "",
            cityId: "",
            propertyType: "",
            phone: "",
            description: "",
          });
        }}
      >
        <Modal.Header className="bg-light" closeButton>
          <Modal.Title>
            {updateState === -1 ? "Add Property" : "Update Property"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="my-2 col-md-6">
              <strong>Title</strong>
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Type here"
                value={inputData.title}
                onChange={handleChange}
              />
            </div>
            <div className="my-2 col-md-6">
              <strong>Property Type</strong>
              <select
                className="form-select"
                name="propertyType"
                value={inputData.propertyType}
                onChange={handleChange}
              >
                <option>Select an option</option>
                <option value="house">House</option>
                <option value="flat">Flat</option>
                <option value="banglo">Banglo</option>
                <option value="room">Room</option>
                <option value="residencial plot">Residencial Plot</option>
                <option value="commercial plot">Commercial Plot</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="my-2 col-md-6">
              <strong>City</strong>
              <select
                name="cityId"
                id="cityId"
                value={inputData.cityId}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Select an option">Select an option</option>
                {contxtCity.city.map((val, i) => (
                  <option key={val._id} value={val._id}>
                    {val.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-2 col-md-6">
              <strong>Location</strong>
              <input
                type="text"
                className="form-control"
                name="location"
                placeholder="Type here"
                value={inputData.location}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="my-2 col-md-6">
              <strong>Phone</strong>
              <input
                type="number"
                className="form-control"
                name="phone"
                placeholder="(XXX) XXX XXXXXXX"
                value={inputData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="my-2 col-md-6">
              <strong>Size in Marla</strong>
              <input
                min="0"
                type="number"
                className="form-control"
                name="size"
                placeholder="0"
                value={inputData.size}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="my-2 col-md-6">
              <strong>Bedrooms</strong>
              <input
                type="Number"
                className="form-control"
                name="bedrooms"
                placeholder="0"
                value={inputData.bedrooms}
                onChange={handleChange}
              />
            </div>
            <div className="my-2 col-md-6">
              <strong>Bathrooms</strong>
              <input
                type="Number"
                className="form-control"
                name="bathrooms"
                placeholder="0"
                value={inputData.bathrooms}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="my-2 col-md-6">
              <strong>Purpose</strong>
              <select
                type="text"
                className="form-select"
                name="buyOrRent"
                value={inputData.buyOrRent}
                onChange={handleChange}
              >
                <option>Select a option</option>
                <option value="buy">buy</option>
                <option value="rent">Rent</option>
              </select>
            </div>
            <div className="my-2 col-md-6">
              <strong>Price</strong>
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="Rs"
                value={inputData.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="my-2">
            <strong>Image</strong>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="my-2">
            <strong>Description</strong>
            <textarea
              name="description"
              accept=".jpeg, .png, .jpg"
              className="form-control"
              onChange={handleChange}
              value={inputData.description}
              placeholder="Enter description"
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <Button1
            btn="text-orange-300 border-1 hover:text-black border-orange-300 hover:bg-orange-400 mt-4 "
            click={() => {
              setPropertyModal(false);
              setUpdateState(-1);
              setInputData({
                title: "",
                location: "",
                price: "",
                size: "",
                bedrooms: "",
                bathrooms: "",
                buyOrRent: "",
                cityId: "",
                propertyType: "",
                phone: "",
                description: "",
              });
            }}
            title="Cancel"
          />
          {updateState === -1 ? (
            <Button1
              btn="bg-orange-300 hover:bg-orange-400 mt-4 "
              click={handlePostProperty}
              title="Save"
            />
          ) : (
            <Button1
              btn="bg-orange-300 hover:bg-orange-400 mt-4 "
              click={handleUpdateProperty}
              title="Update"
            />
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyProperties;
