import React from 'react'
import MainPage from './components/MainPage.jsx';
import Chart from './components/dashboard/Popup.jsx'
import SideBar from './SideBar/Sidebar.jsx'
import { Route, Routes } from 'react-router-dom';
import LeaveFormPage from './components/LeaveFolder/LeaveForm.jsx';
import LeaveInfo from './components/LeaveFolder/LeaveInfo.jsx';
import AboutPage from './components/AboutPage.jsx';
document.title = "BAPS";
const App = () => {
  return (
    <div>
      <Routes>

        <Route 
        path='/' element ={<MainPage/>}
        />
          <Route 
        path='/Popup' element ={<Chart/>}
        />
           <Route 
        path='/leave' element ={<LeaveFormPage/>}
        />
        <Route 
        path='/SideBar' element ={<SideBar/>}
        />
          <Route 
        path='/about' element ={<AboutPage/>}
        />
<Route 
        path='/LeaveInfo' element ={<LeaveInfo/>}
        />
      </Routes>


    </div>
  )
}

export default App