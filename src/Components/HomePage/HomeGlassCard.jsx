import React from "react";
import {
  Card,
  Stack,
  CardBody,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
const HomeGlassCard = ({ img, name, btn }) => {
  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image src={img} alt={name} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="sm" margin="auto">
              {name}
            </Heading>
            {btn == "neww" ? <Button>EXPLORE</Button> : null}
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomeGlassCard;
