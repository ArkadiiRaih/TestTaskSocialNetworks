import React, { useRef, useEffect } from "react";
import Media from "./Media";
import Icon from "./Icon";

function getFontSize(text) {
  if (!text) return { fontSize: "40px", br: 0 };
  const length = text.length;
  let fontSize = 0;
  let br = 0;
  if (length < 120) {
    fontSize = 80;
    br = 15;
  } else if (length < 128) {
    fontSize = 75;
    br = 15;
  } else if (length < 136) {
    fontSize = 70;
    br = 17;
  } else if (length < 152) {
    fontSize = 65;
    br = 19;
  } else {
    fontSize = 60;
    br = 20;
  }

  fontSize = window.innerWidth < 1921 ? `${fontSize / 2}px` : `${fontSize}px`;
  return { fontSize, br };
}

function getLines(text, br) {
  if (!text) return [];
  const words = text.split(" ");
  let res = "";
  let len = 0;
  let lines = [];

  for (let i = 0; i < words.length - 1; i++) {
    let word = words[i];
    len += word.length;
    if (len + words[i + 1].length < br) {
      res += word + " ";
    } else {
      res += word;
      lines.push(res);
      res = "";
      len = 0;
    }
    if (lines.length == 8) {
      lines[7] = lines[7].trimEnd().concat("...");
      break;
    }
    if (i == words.length - 2) {
      res += words[i + 1];
      lines.push(res);
    }
  }
  return lines;
}

function Slide({ id, img, video, text, author, network }) {
  const withMedia = img || video;
  const { fontSize, br } = getFontSize(text);
  const lines = getLines(text, br);
  console.log(lines);

  return (
    <div className="carousel--item" style={{ position: "relative" }}>
      <div className={`slide ${withMedia ? "slide-media" : "slide-open"}`}>
        <Media img={img} video={video} id={id} />
        <div className="slide--content">
          <p className="slide--text" style={{ fontSize: fontSize }}>
            {lines.map((line) => (
              <>
                {line}
                <br />
              </>
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
