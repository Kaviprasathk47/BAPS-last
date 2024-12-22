import { Routes, Route } from 'react-router-dom';
import Login from './screens/login';
import GooglePage from './screens/googleLogin';
import HomePage from './screens/home';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/glogin" element={<GooglePage/>} />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
  );
}

export default App;
