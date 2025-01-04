import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Added useLocation import
import MainPage from './components/MainPage.jsx';
import Chart from './components/dashboard/Popup.jsx';
import SideBar from './SideBar/Sidebar.jsx';
import LeaveFormPage from './components/LeaveFolder/LeaveForm.jsx';
import LeaveInfo from './components/LeaveFolder/LeaveInfo.jsx';
import AboutPage from './components/AboutPage.jsx';

document.title = "BAPS";

const App = () => {
  const location = useLocation(); // Get the current route

  // List of routes where Sidebar should not be displayed
  const hideSidebarRoutes = ['/'];

  return (
    <div>
      {/* Render SideBar only if the current route is NOT in the hideSidebarRoutes list */}
      {!hideSidebarRoutes.includes(location.pathname) && <SideBar />}
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Popup" element={<Chart />} />
        <Route path="/leave" element={<LeaveFormPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/LeaveInfo" element={<LeaveInfo />} />
      </Routes>
    </div>
  );
};

export default App;
