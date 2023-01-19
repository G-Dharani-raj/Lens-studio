import { Card } from "react-bootstrap";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import HomeGlassCard from "../HomeGlassCard";

class Eyeglasses2 extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/Black-Full-Rim-Rectangle-Lenskart-Air-LA-Flex-VC-E11478-C1-Eyeglasses_vincent-chase-vc-e11478-c1-eyeglasses_g_455009_02_2022.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/Grey-Transparent-Black-Full-Rim-Round-Vincent-Chase-Air-Flex-VC-E11491-C4-Eyeglasses_vincent-chase-vc-e11491-c4-eyeglasses_vincent-chase-vc-e11491-c4-eyeglasses_g_4907_1_2_10_02_2022.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12852-c1-eyeglasses_vincent-chase-vc-e12852-c1-eyeglasses_g_1089_1.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12707-foll-rim-rnd-tr90ss-mtl-c4-eyegasus_g_6272.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e12699-c3-eyegl1ass_g_4746.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/i/fossil-fos-7132-807-eyeglasses_g_7123_10_08_2022.jpg",
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

export default Eyeglasses2;
