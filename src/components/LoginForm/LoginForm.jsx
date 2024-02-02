import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleChange =({target: {name, value}}) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logIn({email, password}));
        setEmail('');
        setPassword('');
    };

  return (
    <div>
        <form onSubmit={handleSubmit} autoComplete="off">
            <label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}/>
            </label>

            <label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    />
            </label>
            <button type="submit">Log In</button>
        </form>
    </div>
  )
}
