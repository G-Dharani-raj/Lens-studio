import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import ProductSlider from "./ExploreProduct";
import FirCaraousal from "./firHomeCaraousal";
import HomeGlassCard from "./HomeGlassCard";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Flex gap={"20px"} margin="15px">
        {flined.map((el) => (
          <HomeGlassCard {...el} />
        ))}
      </Flex>
      <FirCaraousal />
      <Image
        src={
          "https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
        }
        alt="nmae"
        marginTop={"40px"}
        marginBottom={"40px"}
      />
      <div display="flex" justify>
        <h1>WEAR THE TREND </h1>
        <p>Our Hottest collections</p>
      </div>
      <div>
        <ProductSlider />
      </div>
      <div>
        <h1>SHARK TANK</h1>
        <Image
          src={
            "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
          }
        />
      </div>
      <div>
        <h1>SHARK TANK</h1>
        <Image
          src={
            "https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
          }
        />
      </div>
      <div>
        <h1>SHARK TANK</h1>
        <Image
          src={
            "https://static1.lenskart.com/media/desktop/img/Nov22/23-Nov/Hompage-banner4.jpg"
          }
        />
      </div>{" "}
      <div>
        <h1>SHARK TANK</h1>
        <Image
          src={
            "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
          }
        />
      </div>
    </div>
  );
};

export default HomePage;
let flined = [
  {
    img: "https://static1.lenskart.com/media/desktop/img/Apr22/a2.png",
    name: "Eyeglasses",
  },
  {
    img: "https://static1.lenskart.com/media/desktop/img/Apr22/b2.png",
    name: "Sunglasses",
  },
  {
    img: "https://static1.lenskart.com/media/desktop/img/Apr22/d2.png",
    name: "Computer Glasses",
  },
  {
    img: "https://static1.lenskart.com/media/desktop/img/Apr22/d.png",
    name: "Contact Lenses",
  },
  {
    img: "https://static1.lenskart.com/media/desktop/img/Apr22/e2.png",
    name: "Power Sunglasses",
  },
  {
    img: "https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg",
    name: "Progressive Lenses",
  },
];
