import { Td } from "@chakra-ui/react";
import React from "react";

const SingleUser = ({userid,id,displayFirstNameSignUp,displayLastNameSignUp,Phonenumber,email}) => {
  return (
    <>
      <Td>{userid}</Td>
      <Td>{id}</Td>
      <Td>{displayFirstNameSignUp}</Td>
      <Td>{displayLastNameSignUp}</Td>
      <Td>{Phonenumber}</Td>
      <Td>{email}</Td>
    </>
  );
};

export default SingleUser;
