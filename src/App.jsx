import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/login';
import GooglePage from './screens/googleLogin';
import HomePage from './screens/home';
import lightTheme from './themes/lightTheme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/glogin" element={<GooglePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
