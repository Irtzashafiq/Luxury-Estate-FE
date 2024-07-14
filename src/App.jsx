import { useContext, useEffect, useState } from "react";
import AppRoute from "./routes";
import UserContext from "./context/UserContext/userContext";

function App() {
  const contxtUser = useContext(UserContext);
  useEffect(() => {
    var user = localStorage.getItem("userId");
    contxtUser.setUserExist(user);
  }, [contxtUser.updateState]);

  return (
    <>
      <AppRoute />
    </>
  );
}

export default App;
