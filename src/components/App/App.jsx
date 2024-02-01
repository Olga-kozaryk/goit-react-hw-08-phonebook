import { PrivateRoute } from "components/Routes/PrivateRoute";
import { PublicRoute } from "components/Routes/PublicRoute";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCurrentUser } from "../../redux/auth/operations";

const  Layout = lazy(() => import ("../../layout/Layout")) ;
const  Home = lazy(() => import("../../pages/Home")) ;
const  LoginPage = lazy(() => import("../../pages/LoginPage")) ;
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));
const  Phonebook = lazy(() => import("../../pages/Phonebook")) ;

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

