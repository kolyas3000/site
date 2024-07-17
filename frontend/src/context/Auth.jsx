import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    let navigate = useNavigate();
    let [tokens, setTokens] = useState(localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null);
    let [user, setUser] = useState(() => localStorage.getItem('tokens') ? jwtDecode(localStorage.getItem('tokens')) : null);

    
    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
          'Content-Type': 'application/json',
        },
      });


    let login = async (e) => {
        try{
            let response = await api.post('token/', {
                username: e.target.username.value,
                password: e.target.password.value
            });

            let data = response.data;
            if (response.status === 200){
                console.log("log successful");
                setTokens(data);
                localStorage.setItem('tokens', JSON.stringify(data));
                navigate('/');
            }
        }catch (error){
            console.log(error);
        }
    }

    let register = async (e) => {
        try{
            let response = await api.post('register/', {
                username: e.target.username.value,
                password: e.target.password.value
            });
            if (response.status === 201){
                navigate('/login');
            }
        }catch (error){
            console.log(error);
            alert("Try again");
        }
    }

    let logout = async() => {
        setTokens(null);
        localStorage.removeItem('tokens');
        navigate('/login');
    }

    let refreshToken = async () => {
        if (!tokens) return;
        try {
            let response = await api.post('token/refresh/', {
                refresh : tokens.refresh,
            });
            let data = response.data;
            if (response.status === 200){
                console.log("updating token...");
                setTokens(data);
                setUser(jwtDecode(data.access));
                localStorage.setItem('tokens', JSON.stringify(data));
            }else logout();
        }catch(error){
            logout();
        }
    }

    let contextData ={
        login : login, 
        register : register,
        logout : logout,
        tokens : tokens,
        user : user,

    }

    useEffect(() => {
        if (tokens) {
            const interval = setInterval(() => {
                if (tokens && tokens.refresh) {
                    refreshToken();
                }
            }, 1000 * 60 * 4 ); 

            return () => clearInterval(interval);
        }
    }, [tokens, refreshToken]); 
    


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}