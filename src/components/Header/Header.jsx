import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react'

import useAuth from '../../redux/auth/authSelectors';
import { Navigation } from 'components/Navigation/Navigation';
import { Flex, Text } from '@chakra-ui/react';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Flex 
      borderRadius='md'
      boxShadow='purple' 
      p={4} 
      justifyContent='space-between' 
      alignItems='center'>
        
        <Text fontSize='xxl'>PHONEBOOK</Text> 
        {!isLoggedIn ? <Navigation/> : <UserMenu/>}
    </Flex>
  )
}
//Ok
