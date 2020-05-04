import React, { useRef, useEffect, useState } from "react";
import Media from "./Media";
import Icon from "./Icon";
import { getLines, getFontSize } from "../utils";

function Slide({ id, img, video, text, author, network }) {
  const [withMedia, setWithMedia] = useState(img || video);
  const { fontSize, br } = getFontSize(text);
  const lines = getLines(text, br);

  return (
    <div className="carousel--item" style={{ position: "relative" }}>
      <div className={`slide ${withMedia ? "slide-media" : "slide-open"}`}>
        <Media setWithMedia={setWithMedia} img={img} video={video} id={id} />
        <div className="slide--content">
          <p className="slide--text" style={{ fontSize: fontSize }}>
            {lines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <p className="slide--author">
            {network && (
              <span className="slide--icon">
                <Icon iconType={network} size="s" />
              </span>
            )}
            <span>{author || "Ivan Ivanov"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Slide);
