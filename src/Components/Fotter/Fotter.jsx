import {
  Box,
  Flex,
  Heading,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Center,
  Button,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Link,
  Image,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Fotter = () => {
  return (
    <Box bgColor="#030c42" color="whiteAlpha.800" padding={"25px"}>
      <Box width="90%" margin="auto">
        <Heading>Buy The Best Eyewear From Lenskart</Heading>
        <Text>
          Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It Has
          Revolutionised The Eyewear Industry In The Country With Its
          Omni-Channel Approach. From An Ever-Growing Number Of Offline Stores
          Across Major Cities In The Country To Innovative Integration Of
          Technology While Purchasing Online, Lenskart Caters To Every Customer
          With Several Deals And Offers.
        </Text>
        <Text>
          A One-Stop Online Solution For Purchasing Eyewear And Its Accessories,
          Lenskart Delivers Them Right At Your Doorstep With Convenient Methods
          Of Payment. Sunglasses As Well As Eyeglasses Are Available For Men And
          Women In A Diverse Array Of Styles And Trendy Colours. If You Want To
          Try Out Contact Lenses, Pick The Ones Of Your Choice From The
          Extensive Variety Of Coloured Contact Lenses From Our Online Store.
        </Text>
        <Flex justifyContent={"space-between"} marginTop="30px">
          <Popover>
            <PopoverTrigger>
              <Text width="30%" borderBottom={"1px solid black"}>
                SUNGLASSES
              </Text>
            </PopoverTrigger>
            <PopoverContent color="black">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody fontSize="12px">
                Sunglasses help protect the eyes from the damaging UV rays of
                the sun and, today, they have become an essential fashion
                accessory too. The classic styles of shades never go out of
                fashion as they are reiterated with each passing trend to suit
                one’s contemporary style sensibility. and Vincent Chase, on the
                other hand, have plenty of sunglasses for women as well in
                various elegant colours and chic styles. These Shades Are
                Available In Plenty Of Colours On The Frames And Lenses That
                Would Go With Any Modern Outfit Effortlessly. Brands Such As
                Carrera And Calvin Klein, Among Several Others Have Excellent
                Variations Of The Classic Aviator-Shaped And Wayfarer-Shaped
                Goggles With Sporty And Suave Lens Colours. Sunglasses For Men
                Are Available From The Best Brands Such As Hugo Boss, Oakley And
                John Jacobs, Among Others, And Are Ideal For Various Occasions.
                Popular Sunglasses Brands- Ray Ban Sunglasses, Oakley
                Sunglasses, Carrera Sunglasses, IDEE Sunglasses
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Text width="30%" borderBottom={"1px solid black"}>
                EYEGLASSES
              </Text>
            </PopoverTrigger>
            <PopoverContent color="black">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody fontSize="12px">
                Lenskart has a wide range of styles that are highly fashionable.
                You can try out the full-rimmed and half-rimmed eyeglasses that
                come with various frame and temple materials such as acetate,
                stainless steel, TR-90, and metal, among others. . Spectacles
                With Tortoise Shell Frames Have A Vintage Appeal And You Can
                Easily Choose From The Various Styles Available At Lenskart. Top
                Brand Eyeglasses- Ray-Ban Eyeglasses, Carrera Eyeglasses,
                Oakley, Men Eyeglasses, Women Eyeglasses, John Jacob Eyeglasses
                Best Styles In Eyeglasses- Full Rim Eyeglasses, Half Rim
                Eyeglasses, Rimless Eyeglasses, Cat Eye Eyeglasses, Aviator
                Shapes Eyeglasses, Wayfarer Shapes Eyeglasses
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Text width="30%" borderBottom={"1px solid black"}>
                CONTACT LENSES
              </Text>
            </PopoverTrigger>
            <PopoverContent color="black">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody fontSize="12px">
                Lenskart has various types of contact lenses. Brands such as
                Aqualens, Bausch & Lomb, Johnson & Johnson, Acuvue, Alcon, and
                Purevision, among others have yearly, monthly, 2-weekly, and
                daily disposable contact lenses. Specially designed toric
                contact lenses are also available from these brands. To Clean
                Your Contacts, You Can Get The Best Contact Lens Solutions From
                Our Online Store, Which Are Easy To Use And Effective In Keeping
                Your Eyes Healthy. Popular Contact Lenses Brands- Bausch & Lomb
                Contact Lenses, Ciba Vision Contact Lenses, Johnson & Johnson
                Contact Lenses Contact Lenses By Type- Monthly Disposable, Daily
                Disposable, Toric Contact Lenses Lenses Directory
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Flex justifyContent={"space-between"} marginTop="20px">
          <Box marginTop={"30px"}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
              <Stack align={"flex-start"}>
                <ListHeader>Services</ListHeader>
                <Link href={"#"}>Store Locator</Link>
                <Link href={"#"}>Enter My Power</Link>
                <Link href={"#"}>Buying Guide</Link>
                <Link href={"#"}>Frame Size</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>About Us</ListHeader>
                <Link href={"#"}>We Are Hiring</Link>
                <Link href={"#"}>Refer & Earn</Link>
                <Link href={"#"}>About Us</Link>
                <Link href={"#"}>Lenskart Coupons</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Help</ListHeader>
                <Link href={"#"}>FAQ's</Link>
              </Stack>
            </SimpleGrid>
          </Box>
          <Box margin={"auto 10px"}>
            <Flex marginLeft={"50px"}>
              <Image src="https://static.lenskart.com/media/desktop/img/play-store.svg" />
              <Image src="https://static.lenskart.com/media/desktop/img/app-store.svg" />
            </Flex>
            <Center>
              <Text marginTop={"15px"}>Download Lenskart App to buy</Text>
            </Center>
            <Text>Eyeglasses, Sunglasses and Contact Lenses</Text>
          </Box>
        </Flex>
        <Divider marginTop={"30px"} />
        <Box>
          <Flex justifyContent={"space-between"} marginTop={"30px"}>
            <Flex gap={2}>
              <Text>T & C</Text>
              <Text>Privacy</Text>
              <Text>Disclamer</Text>
            </Flex>
            <Flex gap={3}>
              <Text>FOLLOW US AT</Text>
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Fotter;
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
