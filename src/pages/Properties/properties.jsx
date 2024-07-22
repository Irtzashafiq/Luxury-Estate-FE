import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../../Components/PropertyCard/PropertyCard";
const Properties = () => {
  const [properties, setProperties] = useState([]);
  const getProperty = async () => {
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
      <h1 className=" text-4xl font-bold my-10">All Properties</h1>
      <div className="grid grid-cols-3 gap-x-16">
        {properties.length > 0 &&
          properties.map((val) => <PropertyCard property={val} />)}
      </div>
    </div>
  );
};

export default Properties;
