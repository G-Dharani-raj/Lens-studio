import {
  Flex,
  Box,
  FormControl,
  useToast  ,
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
import "./card.css";
export default function SignupCard() {
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [displayFirstNameSignUp, setdisplayFirstNameSignUp] = useState("");
  const [displayLastNameSignUp, setdisplayLastNameSignUp] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [gender, setgender] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast()
  const showMsg = (msg, msgType) => {
    return toast({
         title: msg,
         position: 'top', variant: 'left-accent',
         status: msgType, isClosable: true,
    })
}
  const signInWithGoogle = async () => {
    try {
      const usrCredential = await signInWithPopup(auth, provider);
      const user = usrCredential.user;
      console.log(user);
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
        
      });

      setEmailSignUp("");
      setPasswordSignUp("");
      setdisplayFirstNameSignUp("");
      setdisplayLastNameSignUp("");
      
      setPhonenumber("");
      console.log("user: ", user);
    } catch (error)  {
      // console.log(error)
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        showMsg("Email already exist.", 'error')
   } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
        showMsg("Please fill correct Email Id", 'error')
   } 
    }
  };

  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={2} px={2}>
      {/* <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={2}
      > */}
        <Stack spacing={3}>
          {/* <FormControl id="firstName" isRequired>
              
              <Input
                type="text"
                placeholder="First Name"
                value={displayFirstNameSignUp}
                onChange={(e) => setdisplayFirstNameSignUp(e.target.value)}
              />
            </FormControl> */}
          <div class="inputbox">
            <input
              required="required"
              type="text"
              value={displayFirstNameSignUp}
              onChange={(e) => setdisplayFirstNameSignUp(e.target.value)}
            />
            <span>First Name</span>
            <i></i>
          </div>
          
            {/* <Input
              type="text"
              placeholder="last Name"
              value={displayLastNameSignUp}
              onChange={(e) => setdisplayLastNameSignUp(e.target.value)}
            /> */}
            <div class="inputbox">
            <input
              required="required"
              type="text"
              value={displayLastNameSignUp}
              onChange={(e) => setdisplayLastNameSignUp(e.target.value)}
            />
            <span>Last Name</span>
            <i></i>
          </div>
          
          {/* <FormControl id="Phone" isRequired>
            <Input
              type="text"
              placeholder="phone number"
              value={Phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </FormControl> */}
          <div class="inputbox">
            <input
              required="required"
              type="text"
              value={Phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
            <span>Phone number</span>
            <i></i>
          </div>
          {/* <FormControl id="email" isRequired>
            <Input
              type="email"
              placeholder="Email"
              value={emailSignUp}
              onChange={(e) => setEmailSignUp(e.target.value)}
            />
          </FormControl> */}
           <div class="inputbox">
            <input
              required="required"
              type="text"
              value={emailSignUp}
              onChange={(e) => setEmailSignUp(e.target.value)}
            />
            <span>Email</span>
            <i></i>
          </div>
          <FormControl id="password" isRequired>
            <InputGroup>
              {/* <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={passwordSignUp}
                onChange={(e) => setPasswordSignUp(e.target.value)}
              /> */}
              <div class="inputbox">
            <input
              required="required"
              type={showPassword ? "text" : "password"}
              value={passwordSignUp}
              onChange={(e) => setPasswordSignUp(e.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>
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
            {/* <Button
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
            </Button> */}
            <button onClick={SignUpFunc} class="btn">
            Sign up
</button>
            
            <button my="2" class="btn" onClick={signInWithGoogle}>
              Sign In Google
            </button>
          </Stack>
        </Stack>
      {/* </Box> */}
    </Stack>
  );
}
