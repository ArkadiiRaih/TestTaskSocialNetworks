import React, { useState, useEffect, useRef } from "react";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Advertise from "./Components/Advertise";
import { slidesQueue, initialSlides1, initialSlides2 } from "./devData";

function App() {
  const slidesStore = useRef(null);
  const [slidesCount, setSlidesCount] = useState(0);
  const [slides1, setSlides1] = useState([{ id: -10 }, ...initialSlides1]);
  const [slides2, setSlides2] = useState([{ id: -1 }, ...initialSlides2]);
  const wallRef = useRef(null);

  useEffect(() => {
    slidesStore.current = slidesQueue;
    let isFirst = true;

    const interval = setInterval(() => {
      const newSlide = slidesStore.current.shift();
      if (newSlide == undefined) return clearInterval(interval);
      if (isFirst) {
        setSlides1((slides) => [...slides.slice(1), newSlide]);
      } else {
        setSlides2((slides) => [...slides.slice(1), newSlide]);
      }
      isFirst = !isFirst;
      setSlidesCount((count) => count + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slidesCount !== 0 && slidesCount % 4 === 0) {
      setTimeout(() => {
        wallRef.current.classList.remove("wall-advertise");
      }, 8000);
      wallRef.current.classList.add("wall-advertise");
    }
  }, [slidesCount]);

  return (
    <div className="App">
      <div ref={wallRef} className="wall">
        <Carousel slides={slides1} />
        <Advertise />
        <Carousel slides={slides2} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
