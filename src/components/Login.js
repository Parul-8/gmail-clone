import React from 'react'

import { auth, provider } from "./firebase";
import { useDispatch } from 'react-redux';
import { signin } from "../features/userSlice";
import logo from '../Pmail_Logo.png';
// import { signInWithPopup } from "firebase/auth";

import '../css/login.css';

function Login() {

    const dispatch = useDispatch();
    const login = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(signin({
                displayName: user.DisplayName,
                photoURL: user.photoURL,
                email: user.email,
            })).catch(error => alert(error))
        })
    }
    return (
        <div className='login__wrapper'>
            <div className="login">
                <img src={logo} alt="logo" />

                <button className='gmail__login' onClick={login}>Login With Gmail</button>
            </div>
        </div>
    )
}

export default Login