import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import AuthContext from "../context/Auth";
import '../styles/Header.css';

const Header = () => {
    let { logout, user } = useContext(AuthContext);
    return (
        <header className="header">
            <Link to="/" className="header-link">Home</Link>
            <span> | </span>
            {user ? (
                <Link to="/login" onClick={logout} className="header-link">Logout</Link>
            ) : (
                <Link to="/login" className="header-link">Login</Link>
            )}
            <span> | </span>
            <Link to="/register" onClick={logout} className="header-link">Register</Link>
        </header>
    );
}

export default Header;