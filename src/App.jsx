import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Company from "./views/company";
import Kerjsama from "./views/Our_Service/Index";
import Negara from "./views/Our_Service/negara";
import ProfileManager from "./views/company/manager";
import LandingGallery from "./views/Galerry";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile/company" element={<Company />} />
        <Route path="/profile/manager" element={<ProfileManager />} />
        <Route path="/ourservice/kerjasama" element={<Kerjsama />} />
        <Route path="/ourservice/negara" element={<Negara />} />
        <Route path="/galeri" element={<LandingGallery />} />

        {/* Tambahkan rute lainnya jika diperlukan */}
      </Routes>
    </Router>
  );
};

export default App;
