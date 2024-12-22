import { Box, Typography } from '@mui/material'
import React from 'react'
import './Googlebutton.css'
const GoogleButton = ({icon,text}) => {
  return (
    <Box className='googlebutton' >
        <Box className='googleicon'>
            {icon}
        </Box>
       <Typography style={{color:'#353448',fontWeight:'500'}}className='googletext' variant='body2'  >{text}</Typography> 
      
    </Box>
  )
}

export default GoogleButton
