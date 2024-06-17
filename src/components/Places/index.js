// Path: src/Places.js
import React from "react";
import './index.css';
import PlaceCard from "./PlaceCard";
import OrderPopup from "../OrderPopup"; // Adjust the path accordingly
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const Places = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [popupPosition, setPopupPosition] = React.useState({ x: 0, y: 0 });

  const handleOrderPopup = (e) => {
    setPopupPosition({ x: e.clientX, y: e.clientY });
    setOrderPopup(true);
  };

  const handleClosePopup = () => {
    setOrderPopup(false);
  };

  return (
    <div>
      <section data-aos="fade-up" className="container" id="recommend">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit in India
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img1}
            title="Backwaters of Kerala"
            location="Kerala, India"
            description="Explore the serene backwaters and lush greenery of Kerala on a traditional boat ride."
            price={2700}
            type="Nature and Culture"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img2}
            title="Taj Mahal"
            location="Agra, India"
            description="Visit the iconic Taj Mahal, an ivory-white marble mausoleum on the south bank of the Yamuna river."
            price={2500}
            type="Cultural Heritage"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img3}
            title="Andaman Beaches"
            location="Andaman and Nicobar Islands, India"
            description="Discover the pristine beaches and vibrant marine life of the Andaman Islands."
            price={3200}
            type="Beach Adventure"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img4}
            title="Goa Nightlife"
            location="Goa, India"
            description="Experience the sun-kissed beaches and vibrant nightlife of Goa."
            price={3500}
            type="Beach Party"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img5}
            title="Ladakh Landscapes"
            location="Ladakh, India"
            description="Embark on an adventure to Ladakh and experience its breathtaking landscapes and rich culture."
            price={4000}
            type="Mountain Adventure"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img={Img6}
            title="Jaipur Palaces"
            location="Jaipur, India"
            description="Explore the royal palaces and vibrant history of Jaipur, the Pink City."
            price={3200}
            type="Cultural Heritage"
          />
           <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img="https://res.cloudinary.com/djlhr4ycg/image/upload/v1718637286/OIP_2_ahhlj2.jpg"
            title="Mysore Palace"
            location="Mysore, Karnataka"
            description="Visit the grand Mysore Palace, a historical royal residence known for its architecture and cultural significance."
            price={3100}
            type="Royal Heritage"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img="https://res.cloudinary.com/djlhr4ycg/image/upload/v1718637287/1560622581_1560622568625_ka7joa.jpg"
            title="Shimla Hills"
            location="Shimla, Himachal Pradesh"
            description="Enjoy the scenic beauty and colonial charm of Shimla amidst the Himalayan foothills."
            price={3000}
            type="Hill Station Retreat"
          />
          <PlaceCard
            handleOrderPopup={handleOrderPopup}
            img="https://res.cloudinary.com/djlhr4ycg/image/upload/v1718637288/R_d42kkr.jpg"
            title="Hampi Temples"
            location="Hampi, Karnataka"
            description="Explore the ancient ruins and majestic temples of Hampi, Karnataka."
            price={2800}
            type="Historical and Cultural"
          />
        </div>
      </section>
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

export default Places;
