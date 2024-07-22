import "./layout.css";
import Button1 from "../Components/Button/Button";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
const Layout = () => {
  const [btnSearchType, setBtnSearchType] = useState("buy");
  const handleButtonClick = (click) => {
    setBtnSearchType(click);
  };
  const location = useLocation();

  return (
    <div className="homePageMainContainer flex flex-col justify-center items-center">
      <div className="backgroundFilter"></div>
      <div className="contentContainer ">
        <h1 className="h1TagPicCard">
          We will help you find your{" "}
          <span className="text-orange-400">Wonderful</span> home
        </h1>
        <p className="pTagPicCard">
          A great platform to buy, sell and rent your properties without any
          agent or commissions.
        </p>
      </div>
      {location.pathname === "/" && (
        <div className="mainTotalSearchbar ">
          <div className="typeSearchBar">
            <Button1
              title="Buy"
              btn={
                btnSearchType === "buy"
                  ? `selectedButton hover:bg-orange-300`
                  : `unselectedButton hover:bg-gray-200`
              }
              click={() => handleButtonClick("buy")}
            >
              Buy
            </Button1>
            <Button1
              title="Rent"
              btn={
                btnSearchType === "rent"
                  ? `selectedButton hover:bg-orange-300`
                  : `unselectedButton hover:bg-gray-200`
              }
              click={() => handleButtonClick("rent")}
            >
              Rent
            </Button1>
          </div>
          <div className="searchBarContainer">
            <div className="seacrhBarContent">
              <div className="flex flex-col">
                <strong>Select City:</strong>
                <select name="houses" id="houses" className="selectTagMain">
                  <option value="Select an option">Select an option</option>
                </select>
              </div>
              <div className="flex flex-col">
                <strong>Select Property:</strong>
                <input
                  placeholder="Enter name"
                  name="dropdownSearch"
                  id="dropdownSearch"
                  className="selectTagMain"
                />
              </div>
              <div className="flex flex-col">
                <strong>Min Price:</strong>
                <input
                  type="number"
                  placeholder="Enter max price"
                  name="minPrice"
                  id="minPrice"
                  className="selectTagMain"
                />
              </div>
              <div className="flex flex-col">
                <strong>Max Price:</strong>
                <input
                  type="number"
                  placeholder="Enter max price"
                  name="maxPrice"
                  id="maxPrice"
                  className="selectTagMain"
                />
              </div>
            </div>
            <Button1
              btn="bg-orange-300 hover:bg-orange-400 btnSrch "
              title="Search "
            />
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default Layout;
