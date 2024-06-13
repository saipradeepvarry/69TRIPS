import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './index.css';
import delhi from './TripImages/Delhi.jpeg';
import hyderabad from './TripImages/Hyderabad.jpeg';
import chennai from './TripImages/chennai.jpeg';
import buddha from './TripImages/buddha.jpeg';
import ladakh from './TripImages/ladakh.jpeg';
import coast from './TripImages/coast.jpeg';
import port from './TripImages/port.jpeg';
import himalayan from './TripImages/himalayan.jpeg';
import eastern from './TripImages/eastern.jpeg';

const duration = {
  TwoDays: [
    { img: delhi, title: '48 Hours in Delhi' },
    { img: hyderabad, title: '48 Hours in Hyderabad' },
    { img: chennai, title: '48 Hours in Chennai' },
  ],
  RoadTrips: [
    { img: coast, title: 'A Trip Along the Coast' },
    { img: port, title: 'A Ride to the Port' },
    { img: ladakh, title: 'A Ride to Leh Ladakh' },
  ],
  PanIndia: [
    { img: himalayan, title: 'Himalayan Odyssey' },
    { img: buddha, title: "Buddha's Footsteps" },
    { img: eastern, title: 'Eastern Vignetts' },
  ],
};

let tripTypes = Object.keys(duration);

export const PopularTrips = () => {
  const [place, setPlaces] = useState(duration.RoadTrips);
  const [backgroundColor, setBackgroundColor] = useState('whitesmoke');

  function handleChangeColor() {
    const newBg = backgroundColor === 'whitesmoke' ? 'whitesmoke' : 'whitesmoke';
    setBackgroundColor(newBg);
  }

  function clickEventListener(tripType) {
    let userInput = duration[tripType];
    setPlaces(userInput);
    handleChangeColor();
  }

  const buttonAnimation = useSpring({
    to: { transform: 'scale(1)' },
    from: { transform: 'scale(0.8)' },
    reset: true,
  });

  const listAnimation = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(20px)' },
    reset: true,
  });

  return (
    <div className="popular-trips">
      <h1 style={{ textAlign: 'center', margin: '2%' }}>Popular Trips</h1>
      <div className="main-container" style={{ backgroundColor }}>
        <div className="main">
          <div className="btn">
            {tripTypes.map((tripType, key) => (
              <div className="btn-children" key={key}>
                <animated.button
                  style={buttonAnimation}
                  onClick={() => clickEventListener(tripType)}
                >
                  {tripType}
                </animated.button>
              </div>
            ))}
          </div>
          <div className="list-item-container">
            <div className="list-item">
              {place.map((tripType, key) => (
                <animated.div className="list" key={key} style={listAnimation}>
                  <img src={tripType.img} alt="place" height="300px" width="300px" />
                  <h3>{tripType.title}</h3>
                </animated.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};