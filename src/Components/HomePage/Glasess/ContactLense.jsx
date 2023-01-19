import { Card } from "react-bootstrap";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import HomeGlassCard from "../HomeGlassCard";

class ContctLense extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-24-h-nt-daily-dis-toric-20lens_g_3984.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-24-h-nxt-monly-dis-con-3lens_g_1202.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-10h-montly-3lns-contact-lens_g_1197.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-dly-dspoble-cntct-lense-10-lenses_aqualens-dly-dspoble-cntct-lense-10-lenses_g_1173-10.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-dly-dspoble-cntct-lense-30-lenses_lenses_untitled-1.jpg",
        },
        {
          img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-24-h-contact-lens-30-lens-box-contact-lens_lens_untitled-1_1_2.jpg",
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

export default ContctLense;
