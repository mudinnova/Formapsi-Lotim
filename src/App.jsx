import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Company from "./views/company";
import Manager from "./views/company/manager";
import Kerjsama from "./views/Our_Service/Index";
import Negara from "./views/Our_Service/negara";
import GalerryProfile from "./views/Galerry";
import Polandia from "./views/Our_Service/polandia";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile/company" element={<Company />} />
        <Route path="/profile/manager" element={<Manager />} />
        <Route path="/ourservice/kerjasama" element={<Kerjsama />} />
        <Route path="/ourservice/negara" element={<Negara />} />
        <Route path="/galeri" element={<GalerryProfile />} />
        <Route path="/ourservice/negara/polandia" element={<Polandia />} />

        {/* Tambahkan rute lainnya jika diperlukan */}
      </Routes>
    </Router>
  );
};

export default App;
