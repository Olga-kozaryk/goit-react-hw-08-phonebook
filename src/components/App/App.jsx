import { PrivateRoute } from "components/Routes/PrivateRoute";
import { PublicRoute } from "components/Routes/PublicRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCurrentUser } from "../../redux/auth/operations";
import {Layout} from "../../layout/Layout" ;
import {Home} from "../../pages/Home" ;
import {LoginPage} from "../../pages/LoginPage";
import {RegisterPage} from "../../pages/RegisterPage";
import {Phonebook} from "../../pages/Phonebook";

export const App = () => { 
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchCurrentUser());
  },[dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="login" element= {< PublicRoute component={<LoginPage/>} redirectTo="/contacts"/>} />
      <Route path="register" element={< PublicRoute component={<RegisterPage/>} redirectTo="/contacts"/>}/>
      <Route path="contacts" element={ <PrivateRoute component={<Phonebook/>} redirectTo="/login" />}/>
      <Route path="*" element={<Home/>} />
      </Route>
    </Routes>
  )
    };

