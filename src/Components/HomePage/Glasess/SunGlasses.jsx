import { Card } from "react-bootstrap";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import HomeGlassCard from "../HomeGlassCard";

class SunGlasses extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/i/Silver-Black-Full-Rim-Square-John-Jacobs-JJ-Tints-JJ-S13146-C1-Polarized-Sunglasses_john-jacobs-jj-e13146-c1-sunglasses_img_223918_02_2022.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/i/Gold-Blue-Full-Rim-Hexagon-John-Jacobs-JJ-Tints-JJ-S12472-C3-Sunglasses_john-jacobs-jj-s12472-c3-sunglasses_sunglasses_g_1962_1_118_02_2022.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/i/Black-Tortoise-Green-Full-Rim-Rectangle-John-Jacobs-JJ-Tints-JJ-S11089-C1-Sunglasses_john-jacobs-jj-s11089-c1-sunglasses_G_144418_02_2022.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/i/Silver-Grey-Mirror-Full-Rim-Square-John-Jacobs-JJ-Tints-JJ-S12503-C4-Polarized-Sunglasses_john-jacobs-full-rim-aviator-jj-s12503-c4-sunglasses_sunglasses_sunglasses_g_1797_1_118_02_2022.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/i/Brown-Green-Full-Rim-Round-John-Jacobs-JJ-Tints-JJ-S12432-C3-Polarized-Sunglasses_john-jacobs-jj-s12432-c3-sunglasses_sunglasses_g_6612_118_02_2022.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-s12472-c2-sunglasses_sunglasses_g_1972_1_1.jpg",
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
      <Box marginTop={"25px"} border="0px">
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

export default SunGlasses;
