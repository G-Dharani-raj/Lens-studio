import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  
  InputRightElement,
  Stack,
  Button,
  
  Text,
  useColorModeValue,
  Link,
  
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db, provider } from "../FireBase/firebase";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function SignupCard() {
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [displayFirstNameSignUp, setdisplayFirstNameSignUp] = useState("");
  const [displayLastNameSignUp, setdisplayLastNameSignUp] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [gender, setgender] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const signInWithGoogle = async () => {
    try {
      const usrCredential = await signInWithPopup(auth, provider);
      const user = usrCredential.user;
      const name = user.displayName;
      const email = user.email;
      const profilePic = user.photoURL;
      console.log("profilePic: ", profilePic);
      console.log("name: ", name);
      console.log("email: ", email);

      const UserCollectionRef = doc(db, "users", user.uid);
      await setDoc(UserCollectionRef, { email, name, googleAuth: true });
    } catch (e) {
      console.log(e);
    }
  };

  const SignUpFunc = async () => {
    try {
      const email = emailSignUp;
      const password = passwordSignUp;
      const displayFirstName = displayFirstNameSignUp;
      const displayLastName = displayLastNameSignUp;
      const phone = Phonenumber;
      const genderDetails = gender;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        displayFirstName,
        displayLastName,
        phone,
        genderDetails
      );
      const user = userCredential.user;

      // * Storing the details of user inside of our firebase database;
      const UserCollectionRef = doc(db, "users", user.uid);
      await setDoc(UserCollectionRef, {
        email,
        password,
        displayFirstName,
        displayLastName,
        phone,
        genderDetails,
      });

      setEmailSignUp("");
      setPasswordSignUp("");
      setdisplayFirstNameSignUp("");
      setdisplayLastNameSignUp("");
      setgender("");
      setPhonenumber("");
      console.log("user: ", user);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Text fontSize={"lg"} color={"gray.600"}>
            Create An Account
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder="First Name"
                value={displayFirstNameSignUp}
                onChange={(e) => setdisplayFirstNameSignUp(e.target.value)}
              />
            </FormControl>

            <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="last Name"
                value={displayLastNameSignUp}
                onChange={(e) => setdisplayLastNameSignUp(e.target.value)}
              />
            </FormControl>
            <FormControl id="Phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="text"
                placeholder="phone number"
                value={Phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                value={emailSignUp}
                onChange={(e) => setEmailSignUp(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={passwordSignUp}
                  onChange={(e) => setPasswordSignUp(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={2} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={SignUpFunc}
              >
                Sign up
              </Button>
              <br />
              <Button my="2" onClick={signInWithGoogle}>
                Sign In Google
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link  color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
