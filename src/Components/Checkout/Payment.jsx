
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
import { InfoIcon } from '@chakra-ui/icons';
import PaymentTotal from './PaymentTotal';
const Payment = () => {
    
    
    const toast = useToast();
    let navigate = useNavigate();

    const handleRegClick = ()=>{
        navigate("/checkout");
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
                    <span onClick={handleRegClick}><TbCircle1 fontSize="25px"/> Registration & Login</span><span><TbCircle2 fontSize="25px"/> Shipping Address</span><span style={{color:"#363636", backgroundColor:"rgb(242, 245, 248)"}}><TbCircle3 fontSize="25px"/> Payment & Discount</span>
                </div>
                <div style={{width:"95%",margin:"auto",marginTop:"30px"}}>
                    <Box bg="#329c92" padding="7px">
                      <Text color="white" fontSize="20px">PAYMENT OPTIONS</Text>
                    </Box>

                    <Box mt="30px" borderWidth="1px" borderColor="#959595" borderRadius="10px" mb="30px">
                      <div id="twoSection">
                        <div className='onesec'>

                        </div>
                        <div className='twosec'>

                        </div>
                      </div>
                    </Box>
                </div>
                
            </div>
            <div style={{flex:"3"}}>
                    <div style={{borderWidth: "1px", borderColor: "rgb(160,160,255)",marginTop:"5px",height:"auto"}}>
                    <Box display="flex" p={1} justifyContent="space-between" color="white" bg='#363636' >
                        <Text>SHOPPING CART</Text>
                        <Text>ITEM PRICE</Text>
                    </Box>
                    <PaymentTotal/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Payment;