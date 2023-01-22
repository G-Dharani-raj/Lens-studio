import {
	Box,
	Button,
	Heading,
	Image,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContextProvider";
import UseAuth from "../CustomHook/UseAuth";

import { auth, db, provider } from "../FireBase/firebase";
import "./card.css";
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
		localStorage.setItem("isAuth", true);
	} catch (e) {
		console.log(e);
	}
};
// export const logout = async () => {
//   try {
//     await signOut(auth);
//     localStorage.removeItem('isAuth')
//                   alert("Successfully logout")
//   } catch (error) {
//     console.log("error: ", error);
//   }
// };
const Login = () => {
	const { login } = useAuth();
	const [emailSignIn, setEmailSignIn] = useState("");
	const [passwordSignIn, setPasswordSignIn] = useState("");
	const { userDetails } = UseAuth();
	const HandleSubmit = (e) => {
		e.preventDefault();

		// * requesting to server for the login
		login({ emailSignIn, passwordSignIn });
		setEmailSignIn("");
		setPasswordSignIn("");
	};

	// const SignIn = async () => {
	//     try {
	//       const email = emailSignIn;
	//       const password = passwordSignIn;

	//       const userCredential = await signInWithEmailAndPassword(
	//         auth,
	//         email,
	//         password
	//       );
	//       const user = userCredential.user;
	//       console.log("user: ", user);

	//       setPasswordSignIn("");
	//       setEmailSignIn("");
	//       alert("successfully Login");
	//     } catch (error) {
	//       console.log("error: ", error);
	//     }
	//   };

	return (
		<Stack spacing={4} mx={"auto"} maxW={"lg"} py={2} px={2}>
			<Image
				src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
				alt="img"
			/>

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
			<button class="btn" onClick={HandleSubmit}>
				Sign In
			</button>

			<button class="btn" onClick={signInWithGoogle}>
				Sign In Google
			</button>
			{userDetails?.isAdmin ? (
				<Text>
					<Link to="/admin">Admin Panel</Link>
				</Text>
			) : (
				""
			)}
		</Stack>
	);
};

export default Login;
