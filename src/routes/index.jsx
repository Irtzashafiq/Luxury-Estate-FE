import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Layout from "../layout";
import DefaultLayout from "../layout/DefaultLayout";
import Agencies from "../pages/Agencies/agencies";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage";
import Properties from "../pages/Properties/properties";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import UserContext from "../context/UserContext/userContext";
import { useContext, useEffect } from "react";
import AgencyProfile from "../pages/Profile/agencyProfile";

const AppRoute = () => {
  const contxtUser = useContext(UserContext);
  useEffect(() => {
    console.log(contxtUser.userExist);
  }, [contxtUser]);

  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Layout />
            </DefaultLayout>
          }
        />
        <Route path="register" element={<SignUp />} />
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Layout />
            </DefaultLayout>
          }
        />

        <Route
          path="/about"
          element={
            <DefaultLayout>
              <About />
            </DefaultLayout>
          }
        />
        <Route
          path="/properties"
          element={
            <DefaultLayout>
              <Properties />
            </DefaultLayout>
          }
        />
        <Route
          path="/agencies"
          element={
            <DefaultLayout>
              <Agencies />
            </DefaultLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <DefaultLayout>
              <AgencyProfile />
            </DefaultLayout>
          }
        />

        <Route
          path="contact"
          element={
            <DefaultLayout>
              <Contact />
            </DefaultLayout>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRoute;
