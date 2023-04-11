import React, { useState, useEffect, useCallback } from 'react';
import image1 from '../image/image1.jpg';
import image2 from '../image/image2.avif';
import image3 from '../image/image3.png';

const images = [
  { src: image1, alt: 'Image1' },
  { src: image2, alt: 'Image2' },
  { src: image3, alt: 'Image3' },
];

const slideDuration = 3000;

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideTimer, setSlideTimer] = useState(null);

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
  }, [images.length]);

  const resetTimer = useCallback(() => {
    clearInterval(slideTimer);
    setSlideTimer(setInterval(() => {
      nextSlide();
    }, slideDuration));
  }, [nextSlide, slideTimer]);

  const startSlideShow = useCallback(() => {
    setSlideTimer(setInterval(() => {
      nextSlide();
    }, slideDuration));
  }, [nextSlide]);

  const stopSlideShow = useCallback(() => {
    clearInterval(slideTimer);
    setSlideTimer(null);
  }, [slideTimer]);

  useEffect(() => {
    startSlideShow();
    return () => {
      clearInterval(slideTimer);
    };
  }, [slideTimer, startSlideShow]);

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ opacity: index === currentImageIndex ? 1 : 0, pointerEvents: index === currentImageIndex ? 'auto' : 'none' }}
          />
        ))}
      </div>
      <button className="carousel-button" id="previous" onClick={() => {
        nextSlide();
        resetTimer();
      }} onMouseEnter={() => stopSlideShow()} onMouseLeave={() => startSlideShow()}>&#8249;</button>
      <button className="carousel-button" id="next" onClick={() => {
        nextSlide();
        resetTimer();
      }} onMouseEnter={() => stopSlideShow()} onMouseLeave={() => startSlideShow()}>&#8250;</button>
    </div>
  );
}

export default Carousel;
