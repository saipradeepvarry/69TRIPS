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
  const handleContactUs = (e) => {
    e.stopPropagation(); // Prevent triggering handleOrderPopup
    const message = `Hello, I am interested in ${title}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/+919032302468?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="shadow-lg transition-all duration-500 hover:shadow-xl bg-white dark:bg-slate-950 dark:text-white cursor-pointer transform hover:-translate-y-1"
      onClick={(e) => handleOrderPopup(e, title)}
    >
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
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
        <div className="flex justify-center mt-4">
          <button
            onClick={handleContactUs}
            className="contact-us-btn mr-4"
          >
            Contact Us
          </button>
          <button
            onClick={(e) => handleOrderPopup(e, title)}
            className="book-now-btn"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
