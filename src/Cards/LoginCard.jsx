import { Box, Button, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { auth,db,provider } from "../FireBase/firebase";
import "./card.css";
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
    <Stack spacing={4} mx={"auto"} maxW={"lg"} py={2} px={2}>
        
      
        
        <div class="inputbox">
            <input
              required="required"
              type="text"
              value={emailSignIn}
              onChange={(e) => setEmailSignIn(e.target.value)}
            />
            <span>Email</span>
            <i></i>
          </div>
        <br />
        <div class="inputbox">
            <input
              required="required"
              type="text"
              value={passwordSignIn}
              onChange={(e) => setPasswordSignIn(e.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>
        {/* <Input
          type="password"
          placeholder="Password"
          my="2"
          value={passwordSignIn}
          onChange={(e) => setPasswordSignIn(e.target.value)}
        /> */}
        <br />
        <button class="btn" onClick={SignIn}>Sign In</button>
       
        <button class="btn"  onClick={signInWithGoogle}>
          Sign In Google
        </button>
        <Text>
        Are you a Admin ?
          <Link to="/adminlogin">Login</Link>
          </Text>
          
    </Stack>
  )
}

export default Login