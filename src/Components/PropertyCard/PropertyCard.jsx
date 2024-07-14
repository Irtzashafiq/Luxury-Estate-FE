import { Button, IconButton } from "@mui/material";
import React from "react";
import p2 from "../../asset/p2.jpg";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
const PropertyCard = () => {
  return (
    <div className="w-[350px] mb-10  border-2 rounded-lg relative">
      <img
        className="h-[300px] w-full object-cover object-center rounded-md"
        src={p2}
        alt="No image found"
      />
      <h2 className=" text-black text-2xl font-semibold text-center mt-4">
        5 Marla Commercial
      </h2>
      <div className="px-8 pt-4 text-black">
        <pre>Price: 5099030 Rs</pre>
        <pre>BeddRooms: 5</pre>
        <pre>size: 5 Marla</pre>
        <pre>location: TownShip</pre>

        <div className="my-2">
          <IconButton>
            <FavoriteIcon className="" />
          </IconButton>
          <IconButton>
            <CallIcon className="" />
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
