
import React from 'react'
import { Spinner } from '@chakra-ui/react'

export default function LoaderSpinner({ top,left ,sz}) {
  return  <Spinner
  mt={top}
  ml={left}
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size={sz}
/>
  
}
