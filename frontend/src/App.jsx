import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import { AuthProvider } from './context/Auth';
import TodoList from './components/TodoList';

function App() {
  
    return (
      <Router>
        <AuthProvider>
          <Header/>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<TodoList />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </Router>
  )
}

export default App
