import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function FirCaraousal() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/Dec22/5-Jan/1920x530(play-now)%20(1).gif"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/Dec22/15-Dec/1920x520_UPTO60_F1.gif"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/Dec22/new-collection/desktop.gif"
          alt="Third slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
          alt="Third slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/Nov22/LK-Airflex-desktop-banner.gif"
          alt="Third slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif"
          alt="Third slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
          alt="Third slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/Nov22/mens-edit/desktop.jpg"
          alt="Third slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/Jan23/23jan/hooper/hooper-web.jpg"
          alt="Third slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/Nov22/trans1.gif"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
