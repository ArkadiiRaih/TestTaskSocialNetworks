import React from "react";

const bgs = [
  "./backgrounds/bg1.png",
  "./backgrounds/bg2.png",
  "./backgrounds/bg3.png",
];

function Media({ img, video, id }) {
  if (!video) {
    return (
      <div
        className="slide--background"
        style={{
          background: `url(${img || bgs[id % 3]}) center center / cover`,
        }}
        onError={(error) => {
          console.log(error);
        }}
      ></div>
    );
  }
  return (
    <video className="slide--background" autoPlay playsInline muted loop>
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default Media;
