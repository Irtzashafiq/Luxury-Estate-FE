import React, { useEffect, useState } from "react";
import axios from "axios";
import CityContext from "./cityContext";

const CityContextState = (props) => {
  const url = "http://localhost:3000";
  const [city, setCity] = useState([]);
  const [updateState, setUpdateState] = useState(false);

  const getCity = async () => {
    await axios
      .get(url + "/city/getCity")
      .then((val) => setCity(val.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getCity();
  }, []);

  return (
    <CityContext.Provider
      value={{
        city,
        setCity,
        updateState,
        setUpdateState,
      }}
    >
      {props.children}
    </CityContext.Provider>
  );
};

export default CityContextState;
