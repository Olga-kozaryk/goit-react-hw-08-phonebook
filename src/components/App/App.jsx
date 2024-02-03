import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Box, Container } from '@chakra-ui/react';

import { PrivateRoute } from "../Routes/PrivateRoute";
import { PublicRoute } from "../Routes/PublicRoute";
import { fetchCurrentUser } from "../../redux/auth/operations";
import {Layout} from "../../layout/Layout" ;

import {LoginPage} from "../../pages/LoginPage";
import {RegisterPage} from "../../pages/RegisterPage";
import {Phonebook} from "../../pages/Phonebook";

export const App = () => { 
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchCurrentUser());
  },[dispatch]);

  return (
    <Container maxW='1600px' centerContent>
    <Box padding='4' width="100%">

    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Navigate to='/contacts' replace />} />
      <Route path="login" element= {< PublicRoute component={<LoginPage/>} redirectTo="/contacts"/>} />
      <Route path="register" element={< PublicRoute component={<RegisterPage/>} redirectTo="/contacts"/>}/>
      <Route path="contacts" element={ <PrivateRoute component={<Phonebook/>} redirectTo="/login" />}/>
      <Route path="*" element={<LoginPage/>} />
      </Route>
    </Routes>

    </Box>
    </Container>
  )
    };

