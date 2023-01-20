import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CartCard from "./CartCard";
import CartNav from "./CartNav";

const Cart = () => {
  return (
    <Box>
      <CartNav />
      <Flex w="80%" m="auto" justifyContent={"space-between"}>
        <CartCard />
      </Flex>
    </Box>
  );
};

export default Cart;
