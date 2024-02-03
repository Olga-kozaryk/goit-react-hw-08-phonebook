import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { Box, Button, Text } from '@chakra-ui/react';


import { logOut } from '../../redux/auth/operations';
import useAuth from '../../redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false)


  const handleClick = () =>{
    setIsLoading(true)
    dispatch(logOut()).unwrap().finally(() => setIsLoading(false))};

  return (
    <>
    <Box>
      <Text>Hi,{user.name}</Text>
      <Text>Email:{user.email}</Text>
    </Box>

      <Button 
      type='button'
      colorScheme='purple'>
      onClick={handleClick}
      disabled={isLoading}
      isLoading={isLoading}
        Log Out
        </Button>
    </>
  )
}

