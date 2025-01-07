import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/login';
import GooglePage from './screens/googleLogin';
import HomePage from './screens/home';
import LeaveFormPage from './screens/leaveForm'
import LeaveInfo from './screens/leaveInfo';
import lightTheme from './themes/lightTheme'
import Fees from './screens/fees'
import HomeWork from './screens/homework'
import LeaderBoard from './screens/leaderBoard'




function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/glogin" element={<GooglePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/leave" element={<LeaveFormPage />} />
        <Route path="/leave/info" element={<LeaveInfo />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/homework" element={<HomeWork />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
