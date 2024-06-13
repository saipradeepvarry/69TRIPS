import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  handleOrderPopup,
}) => {
  return (
    <>
      <div
        className="shadow-lg transition-all duration-500 hover:shadow-xl bg-white dark:bg-slate-950 dark:text-white cursor-pointer transform hover:-translate-y-1"
        onClick={handleOrderPopup}
      >
        <div className="overflow-hidden">
          <img
            src={img}
            alt="okay"
            className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl text-black">{title}</h1>
          <div className="flex items-center gap-2 opacity-70 text-black">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="line-clamp-2 text-black">{description}</p>
          <div className="flex items-center justify-between border-t-2 py-3 mt-3">
            <div className="opacity-70 text-black">
              <p>{type}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">₹{price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
