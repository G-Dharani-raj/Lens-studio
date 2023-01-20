import { Box, Button, Heading, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../FireBase/firebase";
import { Link, useNavigate } from "react-router-dom";
import "./card.css";
// * Initial State;
const initialState = { email: "", password: "" };

const AdminLoginCard = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [AdminDetails, setAdminDetails] = useState(initialState);
  console.log("AdminDetails: ", AdminDetails);

  const AdminUser = async () => {
    try {
      const adminRef = collection(db, "AdminDetails");
      await addDoc(adminRef, AdminDetails);

      navigate("/admin");
      toast({
        title: "Welcome to Admin Panel",
        status: "success",
        isClosable: true,
        position: "top-right",
      });
      setAdminDetails(initialState);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const HandleChange = (e) => {
    setAdminDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box>
      <Box
        w="30%"
        m="auto"
        mt="100"
        border={"2px solid #B3E5FC"}
        borderRadius="10px"
        p="5"
      >
        <Heading color={"#607D8B"}>Admin Login</Heading>
        <Box my="4">
          <div class="inputbox">
            <input
              required="required"
              type="text"
              name="email"
              value={AdminDetails.email}
              onChange={HandleChange}
            />
            <span>Email</span>
            <i></i>
          </div>
        </Box>
        <Box my="4">
          <div class="inputbox">
            <input
              required="required"
              type="text"
              name="password"
              value={AdminDetails.password}
              onChange={HandleChange}
            />
            <span>Password</span>
            <i></i>
          </div>
        </Box>
        <button class="btn" style={{width:"100%"}} onClick={AdminUser}>
          Login
        </button>
      </Box>
      <button className="goback"> <Link to={"/"}>
      <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span>Back</span>
      </Link>
  
</button>
    </Box>
    
  );
};

export default AdminLoginCard;
