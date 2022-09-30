import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='login-section'>
            <h1>i am login</h1>
            <button>Google Sign In</button>
            <form>
                <input type="text" placeholder="Your name"></input>
                <br></br>
                <input type="email" placeholder="Your Email"></input>
                <br></br>
                <input type="password" placeholder="Your Password"></input>
                <br />
                <input type="submit" value="Log in"></input>
            </form>
        </div>
    );
};

export default Login;