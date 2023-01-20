
import { Image } from '@chakra-ui/image'
import { Box, Heading, HStack, Stack, Text} from '@chakra-ui/layout'
import React, { useState } from 'react'
import "./checkout.css";
import {TbCircle1, TbCircle2, TbCircle3} from "react-icons/tb"
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { PinInput, PinInputField } from '@chakra-ui/pin-input';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Card, CardBody, CardFooter, CardHeader, Radio, RadioGroup, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import ShippingTotal from './ShippingTotal';
import { InfoIcon } from '@chakra-ui/icons';
const Shippings = () => {
    
    const [value,setValue] = useState("1");
    const toast = useToast();
    let navigate = useNavigate();

    const handleclick = ()=>{
      toast({
        title: `Address Entered Successfully`,
        status: 'success',
        isClosable: true,
      })
      navigate("/payment")
    }
  return (
    <div>
        <Box bg='#e00000' w='100%' p={0.5} color='white'>
            <Text letterSpacing="1px" fontFamily="sans-serif" textAlign="center">Power can be submitted within 7 days of placing order. No additional charge for higher power</Text>
        </Box>
        <Box bg='#363636' w='100%' p={2} color='white' display="flex" justifyContent="center" alignItems="center">
            <Box w="12%">
            <Image src="https://static.lenskart.com/media/desktop/img/checkout_Logo.png" w="100%"/>
            </Box>
        </Box>

        <div style={{display:"flex",height:"auto",width:"85%",margin:"auto"}}>
            <div style={{flex:"7"}}>
                <div id="clip">
                    <span><TbCircle1 fontSize="25px"/> Registration & Login</span><span style={{color:"#363636", backgroundColor:"rgb(242, 245, 248)"}}><TbCircle2 fontSize="25px"/> Shipping Address</span><span><TbCircle3 fontSize="25px"/> Payment & Discount</span>
                </div>
                <div style={{width:"95%",margin:"auto",marginTop:"30px"}}>
                    <Box bg="#329c92" padding="7px">
                      <Text color="white" fontSize="20px">Shipping Address</Text>
                    </Box>

                    <Box mt="30px" borderWidth="1px" borderColor="#959595" borderRadius="10px" mb="30px">
                      <Card  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" variant = {"outline"}>
                      {/* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */}
                        
                        <CardBody>
                        <Box display="flex" justifyContent="space-between" >
                          <Input htmlSize={34} width='auto' placeholder='First Name*' borderWidth="3px" size="lg"/>
                          <Input htmlSize={34} width='auto' placeholder='Last Name*' borderWidth="3px" size="lg"/>
                        </Box>
                        <Box mt="30px">
                          <hr/>
                        </Box>
                        <Box mt="30px" display={"flex"}>
                          <Text color="#9dafbb" fontWeight="bold" mb="20px" ml="10px">Gender*</Text>
                          <RadioGroup onChange={setValue} value={value} ml="10px">
                            <Stack direction='row'>
                              <Radio value='1'>Male</Radio>
                              <Radio value='2'>Female</Radio>
                            </Stack>
                          </RadioGroup>
                        </Box>
                        <Box mt="10px">
                          <hr/>
                        </Box>
                        <Text color="#9dafbb" fontWeight="bold" mt="25px" ml="10px">Address*</Text>
                        <Box display="flex" justifyContent="space-between" mt="10px">
                          <Input htmlSize={34} width='auto' placeholder='Address Line 1*' borderWidth="3px" size="lg"/>
                          <Input htmlSize={34} width='auto' placeholder='Address Line 2*' borderWidth="3px" size="lg"/>
                        </Box>
                        <Box display="flex" justifyContent="space-between" mt="10px">
                          <Input htmlSize={34} width='auto' placeholder='Zip/Postal Code*' borderWidth="3px" size="lg"/>
                          <Input htmlSize={34} width='auto' placeholder='City/District*' borderWidth="3px" size="lg"/>
                        </Box>
                        <Box display="flex" justifyContent="space-between" mt="10px">
                          <Input htmlSize={34} width='auto' placeholder='Country*' borderWidth="3px" size="lg"/>
                          <Input htmlSize={34} width='auto' placeholder='State*' borderWidth="3px" size="lg"/>
                        </Box>
                        </CardBody>
                        <Box w="95%" m="auto" padding={"20px"} border="1px dotted #9dafbb" mt="30px">
                          <Text><InfoIcon/> Power will be taken after checkout. No additional charges for high powers.</Text>
                        </Box>
                        <CardFooter display={"flex"} justifyContent="center" alignItems={"center"}>
                          <Button id="conti" padding="10px 30px" bg={"#00bbc6"} color="white" fontSize={"25px"} onClick={handleclick}>CONTINUE</Button>
                        </CardFooter>
                      </Card>
                    </Box>
                </div>
                
            </div>
            <div style={{flex:"3"}}>
                    <div style={{borderWidth: "1px", borderColor: "rgb(160,160,255)",marginTop:"5px",height:"auto"}}>
                    <Box display="flex" p={1} justifyContent="space-between" color="white" bg='#363636' >
                        <Text>SHOPPING CART</Text>
                        <Text>ITEM PRICE</Text>
                    </Box>
                    <ShippingTotal/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Shippings