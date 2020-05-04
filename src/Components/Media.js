import React, { useEffect, useState } from "react";

const bgs = [
  "./backgrounds/bg1.png",
  "./backgrounds/bg2.png",
  "./backgrounds/bg3.png",
];

function Media({ img, video, id, setWithMedia }) {
  const [usedResource, setUsedResource] = useState(video || img || bgs[id % 3]);

  useEffect(() => {
    if (img) {
      fetch(img, {
        method: "HEAD",
      }).then(
        (res) => {
          if (res.status == 404) {
            setUsedResource(bgs[id % 3]);
            setWithMedia(false);
          }
        },
        (reason) => {
          setUsedResource(bgs[id % 3]);
          setWithMedia(false);
        }
      );
    }
  }, [img, id]);
  if (!video) {
    return (
      <div
        className="slide--background"
        style={{
          background: `url(${usedResource}) center center / cover`,
          // background: `url(./daskdmasfmsaf.png) center center / cover`,
        }}
        onError={() => {
          console.log(123);
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
