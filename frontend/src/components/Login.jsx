import React, { useContext } from 'react';
import AuthContext from '../context/Auth';

const Login = () => {

    const { login } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        login(e);
    };

    return (
        <div>
            <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
        </form>
        </div>
    );
};

export default Login;
