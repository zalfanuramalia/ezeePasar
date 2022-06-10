import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/page1.png"
          alt="First slide" width="100" height="auto"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/page2.png"
          alt="Second slide" width="100" height="auto"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/page3.png"
          alt="Third slide" width="100" height="auto"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/page4.png"
          alt="Third slide" width="100" height="auto"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/page5.png"
          alt="Third slide" width="100" height="auto"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel