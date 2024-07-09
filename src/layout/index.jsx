import "./layout.css";
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
      S{/* <Outlet /> */}
    </div>
  );
};

export default Layout;
