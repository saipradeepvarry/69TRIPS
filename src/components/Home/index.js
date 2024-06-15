// Path: src/Home.js
import React, { useState } from "react";
import Navbar from "../Navbar";
import Video from "../Video";
import Places from "../Places"; // Adjust the path accordingly
import OrderPopup from "../OrderPopup"; // Adjust the path accordingly
import { PopularTrips } from "../PopularTrips";
import MustVisitPlaces from "../MustVisitPlaces";
import ContactBanner from "../ContactBanner";
import MainProgram from "../MainProgram";
import ImmersiveExerience from "../ImmersiveExperience";
import VideoTour from "../VideoTour";
import ExploreAll from "../ExploreAll";
import Testimonials from "../Testimonials";
import ContactUs from "../ContactUs";
import WhyChooseUs from "../WhyChooseUs";
import Footer from "../Footer";

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const handleOrderPopup = (e) => {
    setPopupPosition({ x: e.clientX, y: e.clientY });
    setOrderPopup(true);
  };

  const handleClosePopup = () => {
    setOrderPopup(false);
  };

  return (
    <div>
      <Navbar />
      <Video />
      <Places handleOrderPopup={handleOrderPopup} />
      <PopularTrips />
      <MustVisitPlaces />
      <ContactBanner />
      <MainProgram />
      <ImmersiveExerience />
      <VideoTour />
      <ExploreAll />
      <Testimonials />
      <ContactUs />
      <WhyChooseUs />
      <Footer />
      {/* Add OrderPopup component here */}
      {orderPopup && (
        <OrderPopup
          orderPopup={orderPopup}
          setOrderPopup={handleClosePopup}
          position={{ top: popupPosition.y, left: popupPosition.x }}
        />
      )}
    </div>
  );
};

export default Home;
