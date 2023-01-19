import { Card } from "react-bootstrap";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import HomeGlassCard from "../HomeGlassCard";

class ComputerGlases extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:blue-transparent-full-rim-rectangle-8-12-yrs-hooper-astra-hooper-c1_kids-glasses_blue-blue-transparent-full-rim-rectangle-8-12-yrs-hooper-astra-hooper-c1_g_8504_25_02_2022_23_03_2022.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:pink-transparent-full-rim-square-8-12-yrs-hooper-astra-hooper-c3_kids-glasses_transparent-pink-transparent-full-rim-square-8-12-yrs-hooper-astra-hooper-c3_g_8543_23_03_2022.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/o/hooper-hp-e10004-c1-eyeglasses_G_5762.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/o/hooper-hp-e10014l-c4-eyeglasses_G_0981.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/o/hooper-hp-e10015l-c1-eyeglasses_G_1044.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:blue-transparent-full-rim-square-8-12-yrs-hooper-astra-hooper-c2_kids-glasses_blue-transparent-full-rim-square-8-12-yrs-hooper-astra-hooper-c2_g_8449_25_02_2022_23_03_2022.jpg",
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

export default ComputerGlases;
