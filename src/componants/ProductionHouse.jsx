import React from "react";
import disneyp from "../assets/images/disney.png";
import marvelp from "../assets/images/marvel.png";
import nationalGp from "../assets/images/nationalG.png";
import pixarp from "../assets/images/pixar.png";
import starwarp from "../assets/images/starwar.png";

import disneyv from "../assets/videos/disney.mp4";
import marvelv from "../assets/videos/marvel.mp4";
import nationalGv from "../assets/videos/national-geographic.mp4";
import pixarv from "../assets/videos/pixar.mp4";
import starwarv from "../assets/videos/star-wars.mp4";

function ProductionHouse() {
  const ProductionHouseList = [
    {
      id: 1,
      image: disneyp,
      video: disneyv,
    },

    {
      id: 2,
      image: marvelp,
      video: marvelv,
    },

    {
      id: 3,
      image: nationalGp,
      video: nationalGv,
    },

    {
      id: 4,
      image: pixarp,
      video: pixarv,
    },

    {
      id: 5,
      image: starwarp,
      video: starwarv,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {ProductionHouseList.map((items) => (
        <div className="border-[3px] border-grey-600 rounded-lg hover:scale-110 transition-all  duration-300 ease-in-out curson-pointer relative shadow-xl shadow-gray-700">
          <video src={items.video} autoPlay loop playsInline muted className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-80 " 
          ></video>
          <img src={items.image} className="w-full z-[1]"></img>
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
