import React, { useState } from 'react';
import './styles.css'; // Asumsikan Anda telah membuat file styles.css
import { ImageCarouselProps } from './types'; // Impor interface yang telah kita definisikan

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

	console.log(images)

  return (
    <div className="carousel">
      <button onClick={goToPrev} className="prev">&#10094;</button>
      <img src={images[activeIndex].src} alt={images[activeIndex].alt || 'Carousel Image'} className="active-image"/>
      <button onClick={goToNext} className="next">&#10095;</button>
    </div>
  );
};

export default ImageCarousel;
