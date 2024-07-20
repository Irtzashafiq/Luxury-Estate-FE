import React, { useEffect, useState } from "react";
import axios from "axios";
import AgencyContext from "./agencyContext";

const AgencyContextState = (props) => {
  const url = "http://localhost:3000";
  const [agency, setagency] = useState([]);
  const [updateState, setUpdateState] = useState(false);

  const getagency = async () => {
    await axios
      .get(url + "/agency/getAllAgencies")
      .then((val) => setagency(val.data.response))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getagency();
  }, []);

  return (
    <AgencyContext.Provider
      value={{
        agency,
        setagency,
        updateState,
        setUpdateState,
      }}
    >
      {props.children}
    </AgencyContext.Provider>
  );
};

export default AgencyContextState;
