import React from "react";
import "./App.css";
import Login from "./page/Login/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { isAuthenticated } from "./utils/auth";

function App() {
  return (
    <main className="min-h-screen bg-yellow-50">
      <Routes>
        <Route
          index
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
