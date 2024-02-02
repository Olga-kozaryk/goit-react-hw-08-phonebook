import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <>
      <Flex gap={6}>
            <ChakraLink as={NavLink} to='/register' _activeLink={{ color: '#81E6D9' }}>
                <Text fontSize='xl'>Register</Text>
            </ChakraLink>

            <ChakraLink as={NavLink} to='/login' _activeLink={{ color: '#81E6D9' }}>
                <Text fontSize='xl'>Login</Text>
            </ChakraLink>
        </Flex>
</>
  )
}

//OK