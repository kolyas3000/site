import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const tokens = localStorage.getItem('tokens');
    const isAuthenticated = tokens !== null; 
  
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

export default PrivateRoute;