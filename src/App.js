import React, { useState, useEffect, useRef } from "react";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Advertise from "./Components/Advertise";
import { slidesQueue } from "./devData";

const initialSlides1 = [
  {
    id: 0,
    text: "По главной yлице пройду — и солнце светит. Обнял всех вас!",
    author: "Иван Иванов",
    network: "vk",
    img: "./images/photo1.png",
    video: "",
  },
  {
    id: 2,
    text:
      "Этим кибернетическим сообщением в сети «Инстаграмм» я передаю привет в дождливую и холодную Москву из солнечной и летней Сибири. Держитесь, друзья фыов фыв тф  фытвоф втфтвфтв фытв флоывт",
    author: "Иван Иванов",
    network: "fb",
    img: "",
    video: "",
  },
  {
    id: 4,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dignissimos et laboriosam doloremque beatae animi labore! Voluptatibus esse ullam veritatis maiores voluptate dignissimos recusandae minima quaerat, doloribus est, excepturi quo.",
    author: "Иван Иванов",
    network: "inst",
    img: "./images/photo2.png",
    video: "",
  },
  {
    id: 6,
    text: "По главной yлице пройду — и солнце светит. Обнял всех вас!",
    author: "Иван Иванов",
    network: "twitter",
    img: "",
    video: "",
  },
  {
    id: 8,
    text: "По главной yлице пройду — и солнце светит. Обнял всех вас!",
    author: "Иван Иванов",
    network: "vk",
    img: "",
    video: "",
  },
  {
    id: 10,
    text: "Что отражаем, то и порождаем. Я металлический",
    author: "Иван Иванов",
    network: "vk",
    img: "",
    video: "",
  },
];

const initialSlides2 = [
  {
    id: 1,
    text: "По главной yлице пройду — и солнце светит. Обнял всех вас!",
    author: "Иван Иванов",
    network: "fb",
    img: "",
    video: "",
  },
  {
    id: 3,
    text: "По главной yлице пройду — и солнце светит. Обнял всех вас!",
    author: "Иван Иванов",
    network: "vk",
    img: "./images/photo3.png",
    video: "",
  },
  {
    id: 5,
    text:
      "Правильный чай: шен-пуэр с лимоном из гайвани. Тепла и уюта в в вашу жизнь!",
    author: "Иван Иванов",
    network: "twitter",
    img: "",
    video: "",
  },
  {
    id: 7,
    text: "По главной yлице пройду — и солнце светит. Обнял всех вас!",
    author: "Иван Иванов",
    network: "vk",
    img: "",
    video: "",
  },
  {
    id: 9,
    text: "По главной yлице пройду — и солнце светит. Обнял всех вас!",
    author: "Иван Иванов",
    network: "inst",
    img: "./images/photo4.png",
    video: "",
  },
  {
    id: 11,
    text: "По главной yлице пройду — и солнце светит. Обнял всех вас!",
    author: "Иван Иванов",
    network: "vk",
    img: "",
    video: "",
  },
];

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
