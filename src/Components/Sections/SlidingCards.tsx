/// <reference types="node" />

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import "./SlidingCards.scss";
import DateFormatter from "../Functions/DateFormatter";
import Template_Page from "../../Pages/_Templates/Template_Page";

interface Props {
  cards: Template_Page[];
}

const parameters = {
  slidingTime: 5000,
  sliderGap: 24,
};

const Section_SlidingCards: React.FC<Props> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const numberOfSlides = cards.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const updateSlider = (index: number) => {
    const slides = document.querySelector(".slides") as HTMLDivElement;
    if (slides) {
      slides.style.transform = `translateX(calc(-${index * 100}% - ${
        parameters.sliderGap * index
      }px`;
    }
  };

  const moveToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfSlides);
  };

  const startSlideShow = () => {
    intervalRef.current = setInterval(moveToNextSlide, parameters.slidingTime);
  };

  const resetSlideShow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startSlideShow();
  };

  useEffect(() => {
    updateSlider(currentIndex);
    startSlideShow();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section className="sliding-cards">
      <div className="slider">
        <div
          className="slides"
          style={{ columnGap: `${parameters.sliderGap}px` }}
        >
          {cards.map((item: Template_Page, i: number) => (
            <a key={`${item}${i}`} className={`slide`} href={`/${item.info.key}`}>
              <div className="cover">
                <img src={item.info.cover} alt="" />
              </div>
              <div className="info">
                <div className="title">{item.info.title}</div>
                <div className="brief">{item.info.brief}</div>
                <div className="latest-update">
                  <DateFormatter
                    date={item.info.latest_update}
                    language={"zh"}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="navigation">
        <div className="container">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => {
                setCurrentIndex(index);
                resetSlideShow();
              }}
            >
              <div className="bg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_SlidingCards;
