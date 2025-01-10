import React from "react";
import { Routes, Route } from "react-router-dom";
import DoctorPortal from "./DoctorPortal";
import PatientPortal from "./PatientPortal";
import VideoCall from "./VideoCall";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to the Video Call App</h1>} />
      <Route path="/doctor/:doctorId" element={<DoctorPortal />} />
      <Route path="/patient/:patientName" element={<PatientPortal />} />
      <Route path="/call/:room" element={<VideoCall />} />
    </Routes>
  );
}

export default App;
