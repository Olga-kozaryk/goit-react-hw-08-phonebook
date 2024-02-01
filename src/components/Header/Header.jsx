import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react'
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

export const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
        <h1>Phonebook</h1>
        {isLoggedIn && <UserMenu/>}
    </div>
  )
}
