import React from 'react';
import './App.css';
import Login from './page/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './page/Dashboard/Dashboard';

function App() {
  return (
    <main className="min-h-screen bg-yellow-50">
      <Routes>
        <Route path='/'>
          <Route index element={<Dashboard />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
