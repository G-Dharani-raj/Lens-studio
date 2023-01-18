import { Box, Button, Heading, Input } from '@chakra-ui/react';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth,db,provider } from "../FireBase/firebase";

const signInWithGoogle =async () => {
   try{
        const usrCredential =  await signInWithPopup(auth,provider)
        const user= usrCredential.user
        const name = user.displayName
        const email= user.email
        const profilePic= user.photoURL
        console.log("profilePic: ", profilePic);
        console.log("name: ", name);
        console.log("email: ", email);

        const UserCollectionRef = doc(db, "users", user.uid);
        await setDoc(UserCollectionRef, { email,name, googleAuth:true });
   }
   catch(e){
    console.log(e)
   }
  };
  export const logout = async () => {
    try {
      await signOut(auth);
      alert("successfully logout");
    } catch (error) {
      console.log("error: ", error);
    }
  };
const Login = () => {
    const [emailSignIn, setEmailSignIn] = useState("");
    const [passwordSignIn, setPasswordSignIn] = useState("");
    

    const SignIn = async () => {
        try {
          const email = emailSignIn;
          const password = passwordSignIn;
          
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;
          console.log("user: ", user);
    
          setPasswordSignIn("");
          setEmailSignIn("");
          alert("successfully Login");
        } catch (error) {
          console.log("error: ", error);
        }
      };

  return (
    <div>
        <Heading textAlign={"center"}>Sign In</Heading>
      <Box w="30%" m="auto">
        <Input
          type="email"
          placeholder="Email"
          value={emailSignIn}
          my="2"
          onChange={(e) => setEmailSignIn(e.target.value)}
        />
        <br />
        <Input
          type="password"
          placeholder="Password"
          my="2"
          value={passwordSignIn}
          onChange={(e) => setPasswordSignIn(e.target.value)}
        />
        <Button onClick={SignIn}>Sign In</Button>
        <br />
        <Button my="2" onClick={signInWithGoogle}>
          Sign In Google
        </Button>
        
      </Box>
    </div>
  )
}

export default Login