import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./index.css"; // Import the CSS file

const videos = [
  "https://youtu.be/fd41kvB-SLw?si=jVTkyR-O7_uSsVWD",
  "https://youtu.be/9X-BynAGG6k?si=t0vTn_6BvzLVoEwE",
  "https://youtu.be/qGGqSs7CVec?si=t_Or7Acj1l8JRdSm"
];

const VideoTour = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    setPlayingIndex(index);
  };

  const handlePause = () => {
    setPlayingIndex(null);
  };

  return (
    <div className="video-tour">
      <h1 className="video-tour-head">VIDEO TOUR</h1>
      <div className="video-tour-container">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`video-wrapper ${playingIndex === null || playingIndex === index ? "show" : "hide"}`}
          >
            <div className="styled-react-player">
              <ReactPlayer
                url={video}
                width="100%"
                height="100%"
                playing={playingIndex === index}
                onPlay={() => handlePlay(index)}
                onPause={handlePause}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTour;