import { Box, Button, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../FireBase/firebase'
// * Initial State;
const initialState = { "email": "", "password": "" }

const AdminLoginCard = () => {

     const toast = useToast();
     const [AdminDetails, setAdminDetails] = useState(initialState);
     console.log('AdminDetails: ', AdminDetails);

     // * Add new Product into firebase Database;
     const AdminUser = async () => {
          try {
               const adminRef = collection(db, 'AdminDetails');
               await addDoc(adminRef, AdminDetails)

               // * Optional;
               toast({ title: "Welcome to Admin Panel", status: 'success', isClosable: true, position: 'top-right', })
               setAdminDetails(initialState)
          } catch (error) {
               console.log('error: ', error);
          }
     }

     // * to upadate state with product-details
     const HandleChange = (e) => {
        setAdminDetails(prev => ({ ...prev, [e.target.name]: e.target.value }))
     }

     return (
          <Box>
               <Box w='60%' m='auto' mt='10' border={'2px'} borderRadius='10px' p='5'>
                    
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