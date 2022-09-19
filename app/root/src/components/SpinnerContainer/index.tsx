import * as React from 'react';
import { Box, Spinner } from '@chakra-ui/react'

export interface SpinnerContainerProps {
  children: React.ReactNode;
  loading?: boolean
}

const SpinnerContainer: React.FC<SpinnerContainerProps> = (props) => {
  return (
    <Box w="full" h="100%" position="relative" >
      {props.loading ? <Spinner
        position="absolute"
        left="50%"
        top="50%" 
        translateX="50%"
        translateY="50%"
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      /> : props.children}
    </Box>
  )
}

export default SpinnerContainer