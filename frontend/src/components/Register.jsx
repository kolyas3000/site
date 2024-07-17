import React, { useContext } from 'react';
import AuthContext from '../context/Auth';

const Register = () => {


    return (
        <div>
            <h2>Register</h2>
        <form >
            <div>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                />
            </div>
            <button type="submit">Register</button>
        </form>
        </div>
    );
};

export default Register;
