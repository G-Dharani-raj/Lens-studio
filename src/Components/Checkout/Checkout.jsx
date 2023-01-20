
import { Image } from '@chakra-ui/image'
import { Box, HStack, Text} from '@chakra-ui/layout'
import React, { useState } from 'react'
import "./checkout.css";
import {TbCircle1, TbCircle2, TbCircle3} from "react-icons/tb"
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { PinInput, PinInputField } from '@chakra-ui/pin-input';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Radio, useToast } from '@chakra-ui/react'
import CheckoutTotal from './CheckoutTotal';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const [opts,setopts] = useState(false);
    const [value,setValue] = useState(undefined);
    const toast = useToast();
    let navigate = useNavigate();

    const handleoptinp = ()=>{
        if(value){
            setopts(true);
            
        }
        else {
            toast({
                title: `Enter Mobile Number`,
                status: 'warning',
                isClosable: true,
              })
            setopts(false);
        }
    }
    const handleChange = (e)=>{
        setValue(e.target.value);
    }
    const handleEnteropt=()=>{
        setValue("");
        toast({
            title: `Entered OTP Successful`,
            status: 'success',
            isClosable: true,
          })
          setopts(false);
    }
    const handleNavi = ()=>{
        if(value){
            toast({
                title: `Checkout Done`,
                status: 'success',
                isClosable: true,
              })
            navigate("/shipping");
            
        }
        else {
            toast({
                title: `Enter Mobile Number`,
                status: 'warning',
                isClosable: true,
              })
            setopts(false);
        }
    }
    const handlePayClick = ()=>{
        navigate("/payment");
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
                    <span  style={{color:"#363636", backgroundColor:"rgb(242, 245, 248)"}}><TbCircle1 fontSize="25px"/> Registration & Login</span><span><TbCircle2 fontSize="25px"/> Shipping Address</span><span onClick={handlePayClick}><TbCircle3 fontSize="25px"/> Payment & Discount</span>
                </div>
                <div style={{width:"95%",margin:"auto",marginTop:"50px"}}>
                    <Text fontWeight="bold" fontFamily="sans-serif">MOBILE</Text>
                    <Input placeholder='Enter Mobile Number' size='sm' type="number" htmlSize={6} width='auto' onChange={handleChange} value={value}/>
                    <Button marginLeft="5px" onClick={handleoptinp}>Send OTP</Button>
                    {opts? <div>
                        <Text fontWeight="bold" fontFamily="sans-serif">OTP</Text>
                        <HStack>
                        <PinInput>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                        <Button marginLeft="5px" padding="10px 30px" onClick={handleEnteropt}>Enter</Button>
                        </HStack>
                    </div> : ""}
                    <Text fontWeight="bold" fontFamily="sans-serif" mt="10px">OR</Text>
                    <div style={{marginTop:"10px"}}>
                    <Radio value='2'>Checkout as guest</Radio>
                    
                    <div style={{marginTop:"20px"}}>
                    <Button color="white" bg="orange.400" padding="20px 40px" onClick={handleNavi}>PROCEED</Button>
                    </div>
                    </div>


                    <div style={{display:"flex",width:"100%",margin:"auto",marginTop:"120px"}}>
                            <div style={{flex:"5",paddingLeft:"5px",borderWidth: "1px", borderColor: "rgb(160,160,255)"}}>
                                <Text color="#009997">When can I specify my lens power?</Text>
                                <Text>After you complete the checkout process you'll be able to choose your lens power online. We don't charge for adding power to lens!</Text>
                            </div>
                            <div style={{flex:"5",paddingLeft:"5px",borderWidth: "1px", borderColor: "rgb(160,160,255)"}}>
                                <Text color="#009997">I have a discount coupon/reward points</Text>
                                <Text>Great! You can apply a discount coupon/reward points during step 3 of the checkout process.</Text>
                            </div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",gap:"5px",width:"100%",margin:"auto",marginTop:"20px"}}>
                            <div style={{paddingLeft:"5px",borderWidth: "1px", borderColor: "rgb(160,160,255)",width:"33%"}}>
                                <div  style={{display:"flex"}}>
                                <img src="https://static.lenskart.com/media/desktop/img/ckhkout-img4.png" alt=""/>
                                <Text color="#009997" fontSize="20px">Perfect Fit Promise</Text>
                                </div>
                                
                                <hr />
                                <Text>We know you want to be sure your new glasses fit perfectly. That's why youll have 14 days to trythem, if they aren't right for you simply return them for adjustment, replacement, or a complete refund.</Text>
                            </div>
                            <div style={{paddingLeft:"5px",borderWidth: "1px", borderColor: "rgb(160,160,255)",width:"33%"}}>
                                <div style={{display:"flex"}}>
                                    <img src="https://static.lenskart.com/media/desktop/img/ckhkout-img1.png" alt="" />
                                <Text color="#009997" fontSize="18px">Dr. Ujjwal Sonika, / AIIMS</Text>
                                </div>
                                
                                <hr />
                                <Text>I had seen these stylish products off and on, and finally bought a pair of rimless glasses from their store. I love the quality of the frames and the precision with which my lenses have been made and fitted. They are very professional with what they do. Good work!</Text>
                            </div>
                            <div style={{paddingLeft:"5px",borderWidth: "1px", borderColor: "rgb(160,160,255)",width:"33%"}}>
                                <div style={{display:"flex"}}>
                                    <img src="https://static.lenskart.com/media/desktop/img/ckhkout-img5.png" alt=""/>
                                <Text color="#009997" fontSize="20px">Best Price Guaranteed</Text>
                                </div>
                                
                                <hr />
                                <Text>If you find your chosen products cheaper at any other Indian online retailer, we'll refund the difference. This is why our customers know they always get the best prices in the country.</Text>
                            </div>
                    </div>
                    <Box bg='#363636' w='100%' p={2} mt="20px"><Text color="white" letterSpacing="1px" fontFamily="sans-serif" textAlign="center">ALL YOUR DOUBTS RESOLVED</Text></Box>

                    <div style={{marginTop:"30px",marginBottom:"30px"}}>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem>
                                <h2>
                                <AccordionButton bg="#7d7d7d" borderRadius="5px">
                                    <Box as="span" flex='1' textAlign='left'>
                                    Ques 1. What is Gold Membership?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Ans 1. Gold Membership provides exclusive benefits like Buy One Get One on Eyeglasses for 365 days to its members. Offer can be availed Online or at 400+ Stores across India. You can share membership benefits with your family with no upper limit to number of orders placed. Membership is valid on 1000+ products and it is priced at ₹600 for first 10,000 members.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton bg="#7d7d7d" borderRadius="5px">
                                    <Box as="span" flex='1' textAlign='left'>
                                    Ques 2. I’m not sure about the size and fit of the frames.
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Ans 2. We offer glasses in 3 sizes – small, medium, and large. Click the ‘Frame Size’ link at the bottom of the page to know your size. ~95% of our customers find a medium size frame to be the best fit.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton bg="#7d7d7d" borderRadius="5px">
                                    <Box as="span" flex='1' textAlign='left'>
                                    Ques 3. What if I buy glasses & they don’t fit me? What if the lenses aren’t right ?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Ans 3. You can buy glasses fitted with your prescription or even the frames standalone. We custom-make glasses with single vision, bifocal, or progressive prescriptions across all powers. Our glasses are ~50% cheaper than market average, since we bypass intermediaries – and best of all, we charge the same price, regardless of your power!
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton bg="#7d7d7d" borderRadius="5px">
                                    <Box as="span" flex='1' textAlign='left'>
                                    Ques 4. Will the glasses have my prescription?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Ans 4. You can buy glasses fitted with your prescription or even the frames standalone. We custom-make glasses with single vision, bifocal, or progressive prescriptions across all powers. Our glasses are ~50% cheaper than market average, since we bypass intermediaries – and best of all, we charge the same price, regardless of your power!
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton bg="#7d7d7d" borderRadius="5px">
                                    <Box as="span" flex='1' textAlign='left'>
                                    Ques 5. I have a complex power, can it be made?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Ans 5. We stock all powers – simple and complex. The unique robotic technology used in our lab ensures that the most complex powers are fitted perfectly, ensuring 100% error-free glasses. Our 10 lakh+ customers can vouch for the precision with which we make the eyeglasses!
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton bg="#7d7d7d" borderRadius="5px">
                                    <Box as="span" flex='1' textAlign='left'>
                                    Ques 6. Where do I submit my eye power details?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Ans 6. You can submit your power details after you complete your purchase. We offer multiple options to provide your prescription to us – upload a picture, enter it online, email us (power@lenskart.com) or call us at +91-9999899998
                                </AccordionPanel>
                            </AccordionItem>
                            </Accordion>
                    </div>
                </div>
                
            </div>
            <div style={{flex:"3"}}>
                    <div style={{borderWidth: "1px", borderColor: "rgb(160,160,255)",marginTop:"5px",height:"auto"}}>
                    <Box display="flex" p={1} justifyContent="space-between" color="white" bg='#363636' >
                        <Text>SHOPPING CART</Text>
                        <Text>ITEM</Text>
                    </Box>
                    <CheckoutTotal/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout