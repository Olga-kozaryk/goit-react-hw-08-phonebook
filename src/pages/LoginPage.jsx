import { LoginForm } from '../components/LoginForm/LoginForm'
import { Flex, Text } from '@chakra-ui/react';

export const LoginPage = () => {
  return (
    <Flex 
    maxWidth='100%' 
    flexDirection='column' 
    alignItems='center'
    >
    <Text fontSize='6xl' as='b'>Login</Text>
    <LoginForm/>
      <Text fontSize='2xl' as='b'>Don't have an account? Register</Text>
    </Flex>
    
  )
}
