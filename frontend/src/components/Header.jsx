import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import AuthContext from "../context/Auth";


const Header = () => {
    let { logout, user } = useContext(AuthContext);
    return (
        <header>
            <Link to="/">Home</Link>
            <span> | </span>
            {user ? (
                <Link to="/login" onClick={logout}>Logout</Link>
            ) : (
                <Link to="/login">Login</Link>
            )}
            <span> | </span>
            <Link to="/register" onClick={logout} >Register</Link>
        </header>
    );
}

export default Header;