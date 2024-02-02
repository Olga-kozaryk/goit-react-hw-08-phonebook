import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserEmail } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail)
  const handleClick = () => dispatch(logOut());

  return (
    <div>
      <h1>{email}</h1>
      <button type='submit' onClick={handleClick}>
        Log Out
        </button>
    </div>
  )
}

