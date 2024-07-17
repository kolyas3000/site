import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Login from './components/Login';
import MainPage from './components/MainPage';
import Register from './components/Register';
import Header from './components/Header';
import { AuthProvider } from './context/Auth';

function App() {
  
    return (
    <Router>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
