import React, { useEffect, useState } from 'react';

const AutoplayCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    'https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2364512887.jpg',
    'https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2433357767.jpg',
    'https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2433357767.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up the interval when the component is unmounted
  }, [images.length]);

  return (
    <div className="carousel w-full h-[350px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item w-full  ${currentIndex === index ? 'block' : 'hidden'}`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
      ))}
    </div>
  );
};

export default AutoplayCarousel;