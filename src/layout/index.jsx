import "./layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeadphones,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Components/Button/Button";
const Layout = () => {
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
          <button className="selectedButton bg-orange-400 hover:bg-orange-300">
            Buy
          </button>
          <button className="unselectedButton hover:bg-gray-200">Rent</button>
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
          <Button
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
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default Layout;
