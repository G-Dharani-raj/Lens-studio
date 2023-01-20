import { Td } from "@chakra-ui/react";
import React from "react";

const SingleUser = ({userid,id,displayFirstName,displayLastName,phone,email}) => {
  return (
    <>
      <Td>{userid}</Td>
      <Td>{id}</Td>
      <Td>{displayFirstName}</Td>
      <Td>{displayLastName}</Td>
      <Td>{phone}</Td>
      <Td>{email}</Td>
    </>
  );
};

export default SingleUser;
