import React from "react";
import NavVid from "../NavVid";
import BestPlace from "../BestPlace";
import PopularTrips from "../PopularTrips";
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
  return (
    <div>
      <NavVid />
      <BestPlace />
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
    </div>
  );
};

export default Home;
