import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeadphones,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import PropertyCard from "../../Components/PropertyCard/PropertyCard";
import Button1 from "../../Components/Button/Button";
const Home = () => {
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
    <div>
      <div className="flex justify-center items-center mb-20 gap-20 mt-20 ">
        <div className=" flex flex-col justify-center items-center text-center w-96 ">
          <div className="FAIcons">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <h1 className="text-2xl">Evaluate Property</h1>
          <p>
            If the distribution of letters and words is random, the reader will
            not be distracted from making.
          </p>
          <Button1
            btn="bg-orange-300 hover:bg-orange-400 mt-4 "
            title="Find a Home"
          />
        </div>
        <div className=" flex flex-col justify-center items-center text-center w-96">
          <div className="FAIcons">
            <FontAwesomeIcon icon={faHeadphones} />
          </div>
          <h1 className="text-2xl">Meeting with Agent</h1>
          <p>
            If the distribution of letters and words is random, the reader will
            not be distracted from making.
          </p>
          <Button1
            btn="bg-orange-300 hover:bg-orange-400 mt-4 "
            title="Find a Home"
          />
        </div>
        <div className=" flex flex-col justify-center items-center text-center w-96">
          <div className="FAIcons">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <h1 className="text-2xl">Close the Deal</h1>
          <p>
            If the distribution of letters and words is random, the reader will
            not be distracted from making.
          </p>
          <Button1
            btn="bg-orange-300 hover:bg-orange-400 mt-4 "
            title="Find a Home"
          />
        </div>
      </div>
      <h1 className=" flex justify-center text-3xl font-semibold mb-10">
        Feature Property
      </h1>
      <div className="grid lg:grid-cols-3 gap-x-10 place-items-center">
        {properties.length > 0 &&
          properties.slice(0, 3).map((val) => <PropertyCard property={val} />)}
      </div>
    </div>
    
  );
};

export default Home;
