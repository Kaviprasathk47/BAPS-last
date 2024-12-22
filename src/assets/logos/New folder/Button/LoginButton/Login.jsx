import { Button } from '@mui/material';
import React from 'react';

const Login = ({ text,onClick }) => {
  return (
    <Button onClick={onClick}
      sx={{
        width: '365px',
        backgroundColor: '#49C792',
        borderRadius: '4px',
        color: 'white',
        outline: 'none',
        textTransform:'none',
        '&:focus': {
          outline: 'none', // Remove outline on focus
          boxShadow: 'none', // Also remove any box shadow if applicable
        },
      }}
    >
      {text}
    </Button>
  );
};

export default Login;
