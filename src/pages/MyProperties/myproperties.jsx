import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../../Components/PropertyCard/PropertyCard";
import Button1 from "../../Components/Button/Button";
import AgencyContext from "../../context/agencyContext/agencyContext";
import UserContext from "../../context/UserContext/userContext";
const MyProperties = () => {
  const [properties, setProperties] = useState([]);
  const getProperty = async () => {
    const contxtAgency = useContext(AgencyContext);
  const contxtUser = useContext(UserContext);
    
    await axios
      .get("http://localhost:3000/property/getAllProperty")
      .then((val) => {
        setProperties(val.data);
        console.log(properties);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getProperty();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-[25vh]">
      <div className="flex justify-end items-center w-full">
        <Button1
          btn="bg-orange-300 hover:bg-orange-400  "
          title="+ Add Property"
        />
      </div>
      <h1 className=" text-4xl font-bold my-10">My Properties</h1>
      <div className="grid grid-cols-3 gap-x-16">
        {properties.length > 0 &&
          properties.filter(val=>val.agency_id===contxtUser.userExist).map((val) => <PropertyCard property={val} />)}
      </div>
    </div>
  );
};

export default MyProperties;
