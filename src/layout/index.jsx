import "./layout.css";
import asset from "../asset/p1.jpg";
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
          <Button
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
          <Button
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
          <Button
            btn="bg-orange-300 hover:bg-orange-400 mt-4 "
            title="Find a Home"
          />
        </div>
      </div>
      <h1 className="text-3xl font-semibold mb-10">Feature Property</h1>
      <div className="flex flex-justify-center gap-5">
        <div className=" h-96 w-72 mb-10  border-2 rounded-lg relative">
          <img
            class=" h-1/2 w-full mb-10 object-cover rounded-md"
            src={asset}
            alt="No image found"
          />
          <h2 className=" flex items-center justify-center text-black text-2xl font-semibold ">
            5 Marla Commercial{" "}
          </h2>
          <p className="text-black pl-4 pt-3">
            <pre>Price: 5099030 Rs</pre>
            <pre>BeddRooms: 5</pre>
            <pre>size: 5 Marla</pre>
            <pre>location: TownShip</pre>
          </p>
        </div>
        <div className=" h-96 w-72 mb-10  border-2 rounded-lg relative">
          <img
            class=" h-1/2 w-full mb-10 object-cover rounded-md"
            src={asset}
            alt="No image found"
          />
          <h2 className=" flex items-center justify-center text-black text-2xl font-semibold ">
            5 Marla Commercial{" "}
          </h2>
          <p className="text-black pl-4 pt-3">
            <pre>Price: 5099030 Rs</pre>
            <pre>BeddRooms: 5</pre>
            <pre>size: 5 Marla</pre>
            <pre>location: TownShip</pre>
          </p>
        </div>
        <div className=" h-96 w-72 mb-10  border-2 rounded-lg relative">
          <img
            class=" h-1/2 w-full mb-10 object-cover rounded-md"
            src={asset}
            alt="No image found"
          />
          <h2 className=" flex items-center justify-center text-black text-2xl font-semibold ">
            5 Marla Commercial{" "}
          </h2>
          <p className="text-black pl-4 pt-3">
            <pre>Price: 5099030 Rs</pre>
            <pre>BeddRooms: 5</pre>
            <pre>size: 5 Marla</pre>
            <pre>location: TownShip</pre>
          </p>
        </div>
        <div className=" h-96 w-72 mb-10  border-2 rounded-lg relative">
          <img
            class=" h-1/2 w-full mb-10 object-cover rounded-md"
            src={asset}
            alt="No image found"
          />
          <h2 className=" flex items-center justify-center text-black text-2xl font-semibold ">
            5 Marla Commercial{" "}
          </h2>
          <p className="text-black pl-4 pt-3">
            <pre>Price: 5099030 Rs</pre>
            <pre>BeddRooms: 5</pre>
            <pre>size: 5 Marla</pre>
            <pre>location: TownShip</pre>
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-semibold mb-10">Properties For Buy</h1>
      <div className="flex flex-justify-center gap-5">
        <div className=" h-96 w-72 mb-10  border-2 rounded-lg relative">
          <img
            class=" h-1/2 w-full mb-10 object-cover rounded-md"
            src={asset}
            alt="No image found"
          />
          <h2 className=" flex items-center justify-center text-black text-2xl font-semibold ">
            5 Marla Commercial{" "}
          </h2>
          <p className="text-black pl-4 pt-3">
            <pre>Price: 5099030 Rs</pre>
            <pre>BeddRooms: 5</pre>
            <pre>size: 5 Marla</pre>
            <pre>location: TownShip</pre>
          </p>
        </div>
        <div className=" h-96 w-72 mb-10  border-2 rounded-lg relative">
          <img
            class=" h-1/2 w-full mb-10 object-cover rounded-md"
            src={asset}
            alt="No image found"
          />
          <h2 className=" flex items-center justify-center text-black text-2xl font-semibold ">
            5 Marla Commercial{" "}
          </h2>
          <p className="text-black pl-4 pt-3">
            <pre>Price: 5099030 Rs</pre>
            <pre>BeddRooms: 5</pre>
            <pre>size: 5 Marla</pre>
            <pre>location: TownShip</pre>
          </p>
        </div>
        <div className=" h-96 w-72 mb-10  border-2 rounded-lg relative">
          <img
            class=" h-1/2 w-full mb-10 object-cover rounded-md"
            src={asset}
            alt="No image found"
          />
          <h2 className=" flex items-center justify-center text-black text-2xl font-semibold ">
            5 Marla Commercial{" "}
          </h2>
          <p className="text-black pl-4 pt-3">
            <pre>Price: 5099030 Rs</pre>
            <pre>BeddRooms: 5</pre>
            <pre>size: 5 Marla</pre>
            <pre>location: TownShip</pre>
          </p>
        </div>
        <div className=" h-96 w-72 mb-10  border-2 rounded-lg relative">
          <img
            class=" h-1/2 w-full mb-10 object-cover rounded-md"
            src={asset}
            alt="No image found"
          />
          <h2 className=" flex items-center justify-center text-black text-2xl font-semibold ">
            5 Marla Commercial{" "}
          </h2>
          <p className="text-black pl-4 pt-3">
            <pre>Price: 5099030 Rs</pre>
            <pre>BeddRooms: 5</pre>
            <pre>size: 5 Marla</pre>
            <pre>location: TownShip</pre>
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-semibold mb-10">Properties For Sale</h1>
      <div className="flex flex-justify-center gap-5">
        <div className=" h-96 w-72 mb-10  border-2 rounded-lg relative">
          <img
            class=" h-1/2 w-full mb-10 object-cover rounded-md"
            src={asset}
            alt="No image found"
          />
          <h2 className=" flex items-center justify-center text-black text-2xl font-semibold ">
            5 Marla Commercial{" "}
          </h2>
          <p className="text-black pl-4 pt-3">
            <pre>Price: 5099030 Rs</pre>
            <pre>BeddRooms: 5</pre>
            <pre>size: 5 Marla</pre>
            <pre>location: TownShip</pre>
          </p>
        </div>
        <div className=" h-96 w-72 mb-10  border-2 rounded-lg relative">
          <img
            class=" h-1/2 w-full mb-10 object-cover rounded-md"
            src={asset}
            alt="No image found"
          />
          <h2 className=" flex items-center justify-center text-black text-2xl font-semibold ">
            5 Marla Commercial{" "}
          </h2>
          <p className="text-black pl-4 pt-3">
            <pre>Price: 5099030 Rs</pre>
            <pre>BeddRooms: 5</pre>
            <pre>size: 5 Marla</pre>
            <pre>location: TownShip</pre>
          </p>
        </div>
        <div className=" h-96 w-72 mb-10  border-2 rounded-lg relative">
          <img
            class=" h-1/2 w-full mb-10 object-cover rounded-md"
            src={asset}
            alt="No image found"
          />
          <h2 className=" flex items-center justify-center text-black text-2xl font-semibold ">
            5 Marla Commercial{" "}
          </h2>
          <p className="text-black pl-4 pt-3">
            <pre>Price: 5099030 Rs</pre>
            <pre>BeddRooms: 5</pre>
            <pre>size: 5 Marla</pre>
            <pre>location: TownShip</pre>
          </p>
        </div>
        <div className=" h-96 w-72 mb-10  border-2 rounded-lg relative">
          <img
            class=" h-1/2 w-full mb-10 object-cover rounded-md"
            src={asset}
            alt="No image found"
          />
          <h2 className=" flex items-center justify-center text-black text-2xl font-semibold ">
            5 Marla Commercial{" "}
          </h2>
          <p className="text-black pl-4 pt-3">
            <pre>Price: 5099030 Rs</pre>
            <pre>BeddRooms: 5</pre>
            <pre>size: 5 Marla</pre>
            <pre>location: TownShip</pre>
          </p>
        </div>
      </div>

      {/* <Outlet /> */}
    </div>
  );
};

export default Layout;
