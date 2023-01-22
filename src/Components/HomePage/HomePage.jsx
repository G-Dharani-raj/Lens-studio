import {
  Box,
  Flex,
  Heading,
  Image,
  Divider,
  Stack,
  Text,
  SimpleGrid,
  Grid,
  Center,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import Fotter from "../Fotter/Fotter";
import Navbar from "../Navbar/Navbar";
import ProductSlider from "./ExploreProduct";
import FirCaraousal from "./firHomeCaraousal";
import ColorContactLense from "./Glasess/ColorContactLense";
import ComputerGlases from "./Glasess/ComputerLense";
import ContctLense from "./Glasess/ContactLense";
import Eyeglasses from "./Glasess/EyeGlass";
import Eyeglasses2 from "./Glasess/EyeGlasses2";
import Eyeglasses3 from "./Glasess/EyeGlasses3";
import PowerGlasess from "./Glasess/PowerGlass";
import SunGlasses from "./Glasess/SunGlasses";
import HomeGlassCard from "./HomeGlassCard";
import Videos from "./videoes";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const redirect = useNavigate();
  return (
    <Box width={"100%"} margin="0px" padding={"0px"}>
      <Navbar />
      <SimpleGrid columns={[3, 3, 3, 6]} gap={"20px"} margin="15px">
        {flined.map((el) => (
          <div
            onClick={() => redirect("/products")}
            style={{ maxHeight: "fit-content", maxWidth: "fit-content" }}
          >
            <HomeGlassCard {...el} />
          </div>
        ))}
      </SimpleGrid>
      <FirCaraousal />
      <Image
        src={
          "https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
        }
        alt="nmae"
        marginTop={"25px"}
        marginBottom={"40px"}
      />
      <Box>
        <Center>
          <Text fontSize={{ md: "15px", sm: "20px", lg: "30px" }}>
            WEAR THE TREND{" "}
          </Text>
        </Center>
      </Box>
      <Divider width={"90%"} margin="auto" />
      <Box marginTop={"25px"} w="96%" m="auto">
        <ProductSlider />
      </Box>
      <Box>
        <Center>
          <Text
            fontSize={{ md: "15px", sm: "20px", lg: "30px" }}
            marginTop={"25px"}
          >
            As Seen on Shark Tank
          </Text>
        </Center>
        <Divider width={"90%"} margin="auto" />
        <Image
          marginTop={"25px"}
          src={
            "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
          }
        />
      </Box>
      <Box>
        <Center>
          <Text
            fontSize={{ md: "15px", sm: "20px", lg: "30px" }}
            marginTop={"25px"}
          >
            Trending Sunglasses
          </Text>
        </Center>
        <Divider width={"90%"} margin="auto" />
        <Image
          marginTop={"25px"}
          src={
            "https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
          }
        />
      </Box>
      <Box>
        <Center>
          <Text
            fontSize={{ md: "15px", sm: "20px", lg: "30px" }}
            marginTop={"25px"}
          >
            As Seen On Kiara
          </Text>
        </Center>
        <Divider width={"90%"} margin="auto" />
        <Image
          marginTop={"25px"}
          src={
            "https://static1.lenskart.com/media/desktop/img/Nov22/23-Nov/Hompage-banner4.jpg"
          }
        />
      </Box>
      <Box>
        <Center>
          <Text
            fontSize={{ md: "15px", sm: "20px", lg: "30px" }}
            marginTop={"25px"}
          >
            Aquacolor - Glam Up With Color Lenses
          </Text>
        </Center>
        <Divider width={"90%"} margin="auto" />
        <Image
          marginTop={"25px"}
          src={
            "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
          }
        />
      </Box>
      <Box width="85%" margin={"auto"}>
        <Center>
          <Text
            fontSize={{ md: "15px", sm: "20px", lg: "30px" }}
            marginTop={"25px"}
          >
            FIND THE PERFECT FIT
          </Text>
        </Center>
        <Divider width={"90%"} margin="auto" />
        <Grid
          marginTop={"25px"}
          h="auto"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={2}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg" />
          </GridItem>
          <GridItem colSpan={1}>
            <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg" />
          </GridItem>
          <GridItem colSpan={1}>
            <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg" />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg" />
          </GridItem>

          <GridItem colSpan={1} rowSpan={1}>
            <Image src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg" />
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Center>
          <Text
            fontSize={{ md: "15px", sm: "20px", lg: "30px" }}
            marginTop={"25px"}
          >
            INTRODUCING OJOS Wear - SUBSCRIBE & SAVE
          </Text>
        </Center>
        <Divider width={"90%"} margin="auto" />
        <Image
          marginTop={"25px"}
          width="80%"
          margin="25px auto"
          src={
            "https://static1.lenskart.com/media/desktop/img/May22/ojos-web.jpg"
          }
        />
      </Box>
      <Box>
        <Center>
          <Text
            fontSize={{ md: "15px", sm: "20px", lg: "30px" }}
            marginTop={"25px"}
          >
            CONTACT LENSES & MORE
          </Text>
        </Center>
        <Divider width={"90%"} margin="auto" />
        <Grid
          h="auto"
          width="80%"
          margin="25px auto"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg="tomato">
            <Image src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg" />
          </GridItem>
          <GridItem rowSpan={2} colSpan={1} bg="tomato">
            <Image src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg" />
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Center>
          <Text
            fontSize={{ md: "15px", sm: "20px", lg: "30px" }}
            marginTop={"25px"}
          >
            INTRODUCING OJOS Wear - SUBSCRIBE & SAVE
          </Text>
        </Center>
        <Divider width={"90%"} margin="auto" />
        <Grid
          h="auto"
          width="90%"
          margin="25px auto"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/call1800.jpg" />
          </GridItem>
          <GridItem rowSpan={2} colSpan={1}>
            <Image src="https://static1.lenskart.com/media/desktop/img/Nov21/whatsapp.jpg" />
          </GridItem>
          <GridItem rowSpan={2} colSpan={1}>
            <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/hto.jpg" />
          </GridItem>
          <GridItem rowSpan={2} colSpan={1}>
            <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/stores.jpg" />
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Center>
          <Text
            fontSize={{ md: "15px", sm: "20px", lg: "30px" }}
            marginTop={"25px"}
          >
            OUR BRANDS
          </Text>
        </Center>
        <Divider width={"90%"} margin="auto" />
        <Image
          marginTop={"25px"}
          src={
            "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
          }
        />
      </Box>
      <Box width="80%" margin={"auto"}>
        <Flex justifyContent={"space-between"}>
          <Text
            fontSize={{ md: "10px", sm: "15px", lg: "20px" }}
            marginTop={"25px"}
          >
            EYEGLASSES
          </Text>
          <Text
            fontSize={{ md: "8px", sm: "10px", lg: "15px" }}
            marginTop={"25px"}
            color="#439c92"
          >
            View Ranges
          </Text>
        </Flex>
        <Divider width={"100%"} margin="auto" />
        <Eyeglasses />
      </Box>
      <Box width="80%" margin={"auto"}>
        <Flex justifyContent={"space-between"}>
          <Text
            fontSize={{ md: "10px", sm: "15px", lg: "20px" }}
            marginTop={"25px"}
          >
            SUNGLASSES
          </Text>
          <Text
            fontSize={{ md: "8px", sm: "10px", lg: "15px" }}
            marginTop={"25px"}
            color="#439c92"
          >
            View Ranges
          </Text>
        </Flex>
        <Divider width={"100%"} margin="auto" />
        <SunGlasses />
      </Box>
      <Box marginTop={"25px"}>
        <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg" />
      </Box>
      <Box width="80%" margin={"auto"}>
        <Flex justifyContent={"space-between"}>
          <Text
            fontSize={{ md: "10px", sm: "15px", lg: "20px" }}
            marginTop={"25px"}
          >
            EYEGLASSES
          </Text>
          <Text
            fontSize={{ md: "8px", sm: "10px", lg: "15px" }}
            marginTop={"25px"}
            color="#439c92"
          >
            View Ranges
          </Text>
        </Flex>
        <Divider width={"100%"} margin="auto" />
        <Eyeglasses2 />
      </Box>
      <Box marginTop={"25px"}>
        <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-Readers-Banner.jpg" />
      </Box>
      <Box width="80%" margin={"auto"}>
        <Flex justifyContent={"space-between"}>
          <Text
            fontSize={{ md: "10px", sm: "15px", lg: "20px" }}
            marginTop={"25px"}
          >
            EYEGLASSES
          </Text>
          <Text
            fontSize={{ md: "8px", sm: "10px", lg: "15px" }}
            marginTop={"25px"}
            color="#439c92"
          >
            View Ranges
          </Text>
        </Flex>
        <Divider width={"100%"} margin="auto" />
        <Eyeglasses3 />
      </Box>
      <Box marginTop={"25px"}>
        <Image src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg" />
      </Box>
      <Box width="80%" margin={"auto"}>
        <Flex justifyContent={"space-between"}>
          <Text
            fontSize={{ md: "10px", sm: "15px", lg: "20px" }}
            marginTop={"25px"}
          >
            WITH POWER COMPUTER BLU LENSES
          </Text>
          <Text
            fontSize={{ md: "8px", sm: "10px", lg: "15px" }}
            marginTop={"25px"}
            color="#439c92"
          >
            View Ranges
          </Text>
        </Flex>
        <Divider width={"100%"} margin="auto" />
        <PowerGlasess />
        <Flex justifyContent={"space-between"}>
          <Text
            fontSize={{ md: "10px", sm: "15px", lg: "20px" }}
            marginTop={"25px"}
          >
            WITH ZERO POWER COMPUTER BLU LENSES
          </Text>
          <Text
            fontSize={{ md: "8px", sm: "10px", lg: "15px" }}
            marginTop={"25px"}
            color="#439c92"
          >
            View Ranges
          </Text>
        </Flex>
        <Divider width={"100%"} margin="auto" />
        <ComputerGlases />
      </Box>
      <Box marginTop={"25px"}>
        <Image src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg" />
      </Box>
      <Box width="80%" margin={"auto"}>
        <Flex justifyContent={"space-between"}>
          <Text
            fontSize={{ md: "10px", sm: "15px", lg: "20px" }}
            marginTop={"25px"}
          >
            CONTACT LENSES
          </Text>
          <Text
            fontSize={{ md: "8px", sm: "10px", lg: "15px" }}
            marginTop={"25px"}
            color="#439c92"
          >
            View Ranges
          </Text>
        </Flex>
        <Divider width={"100%"} margin="auto" />
        <ContctLense />
        <Flex justifyContent={"space-between"}>
          <Text
            fontSize={{ md: "10px", sm: "15px", lg: "20px" }}
            marginTop={"25px"}
          >
            COLOR CONTACT LENSES
          </Text>
          <Text
            fontSize={{ md: "8px", sm: "10px", lg: "15px" }}
            marginTop={"25px"}
            color="#439c92"
          >
            View Ranges
          </Text>
        </Flex>
        <Divider width={"100%"} margin="auto" />
        <ColorContactLense />
      </Box>
      <Box marginTop={"25px"}>
        <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/whatsapp.png" />
      </Box>
      <Box>
        <Videos />
      </Box>
      <Fotter />
    </Box>
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
