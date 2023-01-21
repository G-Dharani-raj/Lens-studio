import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "./lens.png";

const CartNav = () => {
  return (
    <Box>
      <Box w="80%" margin={"auto"} paddingTop="15px" paddingBottom={"15px"}>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Image src={Logo} size="120px" h="50px" />
          </Box>
          <Flex justifyContent={"center"} alignItems="center" gap={2}>
            <Image
              src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/Shield.svg"
              h={"20px"}
            />
            <Text>100% safe and Secure</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default CartNav;
