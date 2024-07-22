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
import UserProfile from "../pages/Profile/userProfile";
import AgencyProfile from "../pages/Profile/agencyProfile";
import MyProperties from "../pages/MyProperties/myproperties";
import Home from "../pages/Home/Home";

const AppRoute = () => {
  // const contxtUser = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Layout />
            </DefaultLayout>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/myproperties" element={<MyProperties />} />
        </Route>

        <Route
          path="/about"
          element={
            <DefaultLayout>
              <About />
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
          path="/profileUser"
          element={
            <DefaultLayout>
              <UserProfile />
            </DefaultLayout>
          }
        />
        <Route
          path="/profileAgency"
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
