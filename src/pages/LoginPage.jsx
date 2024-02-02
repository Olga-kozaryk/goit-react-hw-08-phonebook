import { Link, useNavigate } from 'react-router-dom'
import { LoginForm } from '../components/LoginForm/LoginForm'

export const LoginPage = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Log in</h1>
      <LoginForm/>
      <Link onClick={() => {
      navigate('/register')}}>Don't have an account? Sign Up</Link>
    </div>
  )
}
