import React from 'react';

const Register = () => {

    return (
        <div>
            <h3>I am register</h3>
            <form>
                <input type="text" placeholder="Your name"></input>
                <br></br>
                <input type="email" placeholder="Your Email"></input>
                <br></br>
                <input type="password" placeholder="Your Password"></input>
                <br />
                <input type="submit" value="Register"></input>
            </form>
        </div>
    );
};

export default Register;