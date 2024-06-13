import React from 'react';
import './index.css';
import VideoPlay from "../../assets/videos/nature-video.mp4";
const Video = () => {
  return (
    <div className="home-page">
      <video src={VideoPlay} muted loop autoPlay></video>
      <div className="overlay"></div>
      <div className="text">
        <h3>Never Stop From </h3>
        <h4>Exploring The World</h4>
        <a href="https://stupendous-entremet-122a1e.netlify.app/destinations">
          Explore
        </a>
      </div>
    </div>
  );
};

export default Video;