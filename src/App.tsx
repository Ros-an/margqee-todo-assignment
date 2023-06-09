import Login from "./page/Login/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <main className="min-h-screen bg-yellow-50">
      <ToastContainer
        autoClose={2500}
      />
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
