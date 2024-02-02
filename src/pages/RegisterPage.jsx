import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Sign In</h1>
      <RegisterForm/>
      <Link onClick={() => {
      navigate('/login')}}>Already registered? Sign In</Link>
    </div>
  )
}
