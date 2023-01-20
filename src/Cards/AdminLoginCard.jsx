import { Box, Button, Heading, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../FireBase/firebase'
import { useNavigate } from 'react-router-dom'
// * Initial State;
const initialState = { "email": "", "password": "" }

const AdminLoginCard = () => {
    const navigate = useNavigate()
     const toast = useToast();
     const [AdminDetails, setAdminDetails] = useState(initialState);
     console.log('AdminDetails: ', AdminDetails);

   
     const AdminUser = async () => {
          try {
               const adminRef = collection(db, 'AdminDetails');
               await addDoc(adminRef, AdminDetails)

               navigate("/admin")
               toast({ title: "Welcome to Admin Panel", status: 'success', isClosable: true, position: 'top-right', })
               setAdminDetails(initialState)
          } catch (error) {
               console.log('error: ', error);
          }
     }

     
     const HandleChange = (e) => {
        setAdminDetails(prev => ({ ...prev, [e.target.name]: e.target.value }))
     }

     return (
          <Box>
               <Box w='60%' m='auto' mt='10' border={'2px'} borderRadius='10px' p='5'>
                    <Heading>Admin Login</Heading>
                    <Box my='4'>
                         <Input placeholder='Email' value={AdminDetails.email} name='email' onChange={HandleChange} border='1px' />
                    </Box>
                    <Box my='4'>
                         <Input placeholder='Password' value={AdminDetails.password} name='password' onChange={HandleChange} border='1px' />
                    </Box>
                    <Button onClick={AdminUser} border='1px'>Login</Button>
               </Box>
          </Box>
     )
}

export default AdminLoginCard