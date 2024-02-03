import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { Header } from '../components/Header/Header'


export const Layout = () => {
  return (
    <>
    <Box padding='5' width="100%">
      <Header/>
    </Box>
    
      <Box padding='5' width="100%">
        <Suspense fallback={
        <Flex 
        justifyContent='center' 
        width="100%">

          <Spinner />

          </Flex>}>

          <Outlet/>

        </Suspense>
      </Box>
    </>
  )
}

//Ok