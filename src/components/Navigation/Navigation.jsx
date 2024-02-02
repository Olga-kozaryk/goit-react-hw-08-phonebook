import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav>
    <ul>
        <li>
            <NavLink to={'/login'}>Log In</NavLink> 
        </li>
        <li>
            <NavLink to={'/register'}>Sign In</NavLink>
        </li>
    </ul>
</nav>
  )
}

//OK