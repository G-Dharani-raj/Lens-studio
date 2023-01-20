import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CartCard = () => {
  return (
    <Box>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Flex justifyContent={"center"} alignItems="center">
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/purple-full-rim-round-lenskart-air-classic-la-e15018-c2-eyeglasses_g_8647_09_09_2022.jpg"
            alt="Caffe Latte"
          />
        </Flex>
        <Stack padding={"30px"}>
          <Flex gap={6}>
            <Text w="350px">
              FREE product Purple Full Rim Round Lenskart Air Classic La
              E15018-C2 Eyeglasses
            </Text>
            <Text>1999</Text>
          </Flex>{" "}
          <Flex gap={6}>
            <Text w="350px">Hydrophobic Anti-Glare</Text>
            <Text>501</Text>
          </Flex>
          <Flex gap={6}>
            <Text w="350px">You Can Upload Prescription After Payment</Text>
          </Flex>
          <Divider borderBottom={"1px dashed"} />
          <Flex gap={6}>
            <Text w="350px">Final Price</Text>
            <Text>1999</Text>
          </Flex>
          <Divider borderBottom={"1px dashed"} />
          <Box>
            <Button>Remove</Button>
            <Button>1</Button>
            <Button>Repeate</Button>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default CartCard;
