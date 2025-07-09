import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Customer from "./pages/Customer";
import Sales from "./pages/Sales";
import LandingPage from "./pages/LandingPage";
import BillManagement from "./pages/BillManagement";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bills" element={<BillManagement />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
