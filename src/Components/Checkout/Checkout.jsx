
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
        // setValue("");
        toast({
            title: `Entered OTP Successful`,
            status: 'success',
            isClosable: true,
          })
          setopts(false);
        //   navigate("/shipping");
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
            <Box w="12%" cursor={"pointer"}>
            <Image src="data:image/png;base64,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EIEWCWBeRr/miXrUeYR0XAREQAQ6TECKusMXQNWLgAiIQB4BKeo8QjouAiIgAh0mIEXd4Qug6kVABEQgj4AUdR4hHRcBERCBDhMo5PWR1cYxY8aYvn37Zh3WfhFoO4GBAweakSNHtr1eVSgCVRJQj7pKuipbBERABDwQkKL2AFFFiIAIiECVBKSoq6SrskVABETAAwEpag8QVYQIiIAIVElAirpKuipbBERABDwQkKL2AFFFiIAIiECVBKSoq6SrskVABETAAwEpag8QVYQIiIAIVElAirpKuipbBERABDwQkKL2AFFFiIAIiECVBKSoq6SrskVABETAAwEpag8QVYQIiIAIVElAirpKuipbBERABDwQkKL2AFFFiIAIiECVBKSoq6SrskVABETAAwEpag8QVYQIiIAIVElAirpKuipbBERABDwQkKL2AFFFiIAIiECVBKSoq6SrskVABETAAwEpag8QVYQIiIAIVElAirpKuipbBERABDwQkKL2AFFFiIAIiECVBKSoq6SrskVABETAA4EuD2V0vIhpp53WzDzzzGE7/vjjD/Paa695bVO8/GYK/uyzz8znn3+em3WRRRYx4447bpju7bffNj///HNunmSCKaaYwswxxxzh7r/++su88sorySSFtueZZx4zcOBAs+CCC5qppprKTDzxxOaHH34wX375pXn22WfN448/br799ttCZfXWRL/88ot54IEHwvN95513wvP//fffzZRTTmm4J5ZYYgmzwgormPnmm895ilz7jz/+2JmmlYNLLbWU6dOnT1gEbXbd/3POOaeZeuqpM6t74403zOjRo1OPTzrppKnn+vTTT6emT9s5/vjjm2mmmSZsA7+blTfffNP89NNPqdknmGACs/DCC6cec+3kf8r1fvHFF83XX39tvvrqK/P333+b6aabLrze888/v1ljjTXMrLPO6iqmmmNBhtx6662BrTH8DB8+PDWVVQSNNFHaTnzvueeejfa9++673tsUL79RUYkfBx98cKE2ff/9941Sb7zxxkJ5krw33HDDRhmffPJJ6TLWX3/94KmnnmqUkfXDPhCDK6+8MrAPhdJ1JNvsc9s+XLKaXHj/N998E+y6667BJJNMUujcll122SDrP0Klp5xySqFymuVgHx6Nc3vuueecdV199dWNtGk/ll9++cz8gwYNSssSdHV1ZeZx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" w="100%"/>
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