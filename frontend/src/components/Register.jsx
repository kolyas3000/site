import React, { useContext } from 'react';
import AuthContext from '../context/Auth';
import '../styles/Register.css';

const Register = () => {
    const { register } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        register(e);
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="input-field"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input-field"
                    />
                </div>
                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    );
};

export default Register;