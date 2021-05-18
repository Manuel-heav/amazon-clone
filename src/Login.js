import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase'
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(email, password)
    const login = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // Logged in, redirecting
            history.push('/');
        })
        .catch(err => alert(err.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // Create a user and logged in, redirecting
            history.push('/');
        })
        .catch(err => console.log(err.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>    
                    <button type="submit" className="login__signInButton" onClick={login}>Sign In</button>
                </form>
                <p>By Signing-In you agree to Amazon's Conditions of use and sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>
                <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
