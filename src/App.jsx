import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Settings from "./pages/Settings";
import ContentAnalyze from "./pages/ContentAnalyze";
import SaahayakAI from "./pages/SaahayakAI";
import ScheduleManager from "./pages/ScheduleManager";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/saahayak-ai" element={<SaahayakAI />} />
        <Route path="/schedule" element={<ScheduleManager />} />
        <Route path="/content-analyze" element={<ContentAnalyze />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
