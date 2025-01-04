import { Box, Typography } from '@mui/material'
import React from 'react'
import './Googlebutton.css'
import { useNavigate } from 'react-router-dom';
const GoogleButton = ({icon,text}) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/home')
  }

  return (
    <Box className='googlebutton' onClick={handleLogin}>
        <Box className='googleicon'>
            {icon}
        </Box>
       <Typography style={{color:'#353448',fontWeight:'500'}}className='googletext' variant='body2'  >{text}</Typography> 
      
    </Box>
  )
}

export default GoogleButton
