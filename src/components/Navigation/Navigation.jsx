import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <>
      <Flex gap={6}>
            <ChakraLink as={NavLink} to='/register' _activeLink={{ color: '#B794F4' }}>
                <Text fontSize='xxl'>Register</Text>
            </ChakraLink>

            <ChakraLink as={NavLink} to='/login' _activeLink={{ color: '#B794F4' }}>
                <Text fontSize='xxl'>Login</Text>
            </ChakraLink>
        </Flex>
</>
  )
}

//OK