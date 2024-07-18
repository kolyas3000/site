import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import { AuthProvider } from './context/Auth';
import TodoList from './components/TodoList';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<TodoList />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
