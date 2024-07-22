import { Button, IconButton } from "@mui/material";
import React, { useContext, useEffect } from "react";
import CallIcon from "@mui/icons-material/Call";
import { DeleteOutline } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import UserContext from "../../context/UserContext/userContext";
import AgencyContext from "../../context/agencyContext/agencyContext";
const PropertyCard = ({ property, handleDelete }) => {
  const contxtUser = useContext(UserContext);
  const contxtAgency = useContext(AgencyContext);

  // useEffect(() => {
  //   console.log(

  //   );
  // }, [contxtAgency]);

  if (property === undefined) return null;
  return (
    <div className="w-[350px] mb-10  border-2 rounded-lg relative">
      <img
        className="h-[300px] w-full object-cover object-center rounded-md"
        src={`http://localhost:3000/${property.image}`}
        alt="No image found"
      />
      <h2 className=" text-black text-2xl font-semibold text-center mt-4">
        {property.title}
      </h2>
      <div className="px-8 pt-4 text-black">
        <pre>Price: {property.price}/-</pre>
        <pre>Bedrooms: {property.bedrooms}</pre>
        <pre>Size: {property.size} Marla</pre>
        <pre>Location: {property.location}</pre>

        <div className="my-2">
          <IconButton>
            <FavoriteIcon className="" />
          </IconButton>
          <IconButton>
            <CallIcon className="" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteOutline className="" />
          </IconButton>
        </div>
        <div className="mb-4">
          <Button className="">Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
