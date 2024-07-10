import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Layout from "../layout";
import DefaultLayout from "../layout/DefaultLayout";
import Agencies from "../pages/Agencies/agencies";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage";
import Properties from "../pages/Properties/properties";

const AppRoute = () => {
  return (
    <>
      <Routes>
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
