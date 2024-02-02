import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react'
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { Navigation } from 'components/Navigation/Navigation';
import { Link } from 'react-router-dom';

export const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
        <Link to={'/'}>Home</Link> 
        {!isLoggedIn ? <Navigation/> : <UserMenu/>}
    </div>
  )
}
//Ok
