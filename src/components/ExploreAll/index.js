import React from "react";
import "./index.css";
import TravelImg from "../../assets/travelbox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const ExploreAll = () => {
  return (
    <div className="explore-all-container">
      <div className="content-wrapper">
        {/* Image section */}
        <div className="image-section" data-aos="flip-up">
          <img
            src={TravelImg}
            alt="Travel"
            className="travel-image animated-image"
          />
        </div>
        {/* Text content section */}
        <div className="text-section">
          <h1 className="title" data-aos="fade-up">
            Discover the World with 69 Trips
          </h1>
          <p className="description" data-aos="fade-up">
            At 69 Trips, we specialize in creating unforgettable travel
            experiences. From exotic destinations to luxury accommodations,
            we've got you covered.
          </p>
          <div className="icon-grid" data-aos="zoom-in">
            <div className="icon-item">
              <div className="icon-wrapper violet-bg">
                <MdFlight className="icon violet-text" />
              </div>
              <p className="icon-text">Flights</p>
            </div>
            <div className="icon-item">
              <div className="icon-wrapper green-bg">
                <IoIosWifi className="icon green-text" />
              </div>
              <p className="icon-text">Wi-Fi</p>
            </div>
            <div className="icon-item">
              <div className="icon-wrapper orange-bg">
                <MdOutlineLocalHotel className="icon orange-text" />
              </div>
              <p className="icon-text">Hotels</p>
            </div>
            <div className="icon-item">
              <div className="icon-wrapper yellow-bg">
                <IoFastFoodSharp className="icon yellow-text" />
              </div>
              <p className="icon-text">Food & Dining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreAll;