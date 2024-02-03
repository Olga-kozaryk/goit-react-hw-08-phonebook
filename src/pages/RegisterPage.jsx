import {Flex, Text } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const RegisterPage = () => { 
  return (
    <Flex 
    maxWidth='100%' 
    flexDirection='column' 
    alignItems='center'
    >

      <Text fontSize='6xl' as='b'>Register</Text>
      <RegisterForm/>
      <Text fontSize='2xl' as='b'>Already registered? Login</Text>

    </Flex>
  )
}
