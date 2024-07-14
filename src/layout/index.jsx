import "./layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeadphones,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Button1 from "../Components/Button/Button";
import { useState } from "react";
import PropertyCard from "../Components/PropertyCard/PropertyCard";
const Layout = () => {
  const [btnSearchType, setBtnSearchType] = useState("buy");
  const handleButtonClick = (click) => {
    setBtnSearchType(click);
  };
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
      <h1 className="text-3xl font-semibold mb-10">Feature Property</h1>
      <div className="grid lg:grid-cols-3 gap-x-10 place-items-center">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <PropertyCard key={index} />
          ))}
      </div>

      {/* <Outlet /> */}
    </div>
  );
};

export default Layout;
