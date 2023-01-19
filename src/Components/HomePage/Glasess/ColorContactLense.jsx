import { Card } from "react-bootstrap";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import HomeGlassCard from "../HomeGlassCard";

class ColorContactLense extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aquacolor-honey-brown-monthly-color-(2-lenses/box)_2rolloverx_21.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aquacolor-pine-green-monthly-color-(2-lenses/box)_2rolloverx_26.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aquacolor-olive-green-monthly-color-(2-lenses/box)_2rolloverx_24.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aquacolor-cosmo-violet-monthly-color-(2-lenses/box)_2rolloverx_5.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aquacolor-cosmo-violet-monthly-color-(2-lenses/box)_2rolloverx_5.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aquacolor-cosmo-violet-monthly-color-(2-lenses/box)_2rolloverx_5.jpg",
        },
      ],
    };
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
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
      <Box marginTop={"25px"}>
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                <HomeGlassCard img={slide.img} />
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
              </div>
            );
          })}
        </Slider>
      </Box>
    );
  }
}

export default ColorContactLense;
