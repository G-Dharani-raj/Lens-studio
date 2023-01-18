import { Card } from "react-bootstrap";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import HomeGlassCard from "./HomeGlassCard";

class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png",
          name: "Cat-Eye",
        },
        {
          img: "https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg",
          name: "Cat-Eye",
        },
        {
          img: "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg",
          name: "Clubmaster",
        },
        {
          img: "https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg",
          name: "Transparent",
        },
        {
          img: "https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg",
          name: "Blend Edit",
        },
        {
          img: "https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg",
          name: "Air Clip On",
        },
        {
          img: "https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg",
          name: "Air Flex",
        },
        {
          img: "https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg",
          name: "Retro Aviator",
        },
        {
          img: "https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg",
          name: "Blend Edit",
        },
        {
          img: "https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg",
          name: "Air Clip On",
        },
      ],
    };
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                <HomeGlassCard img={slide.img} name={slide.name} btn="neww" />
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
