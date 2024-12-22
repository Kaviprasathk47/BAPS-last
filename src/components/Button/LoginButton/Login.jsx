  import { Button } from '@mui/material';
  import React from 'react';

  const Login = ({ text,onClick }) => {
    return (
      <Button onClick={onClick}
        sx={{
          width: '365px',
          backgroundColor: '#0c67a3',
          borderRadius: '4px',
          color: 'white',
          outline: 'none',
          textTransform:'none',
          '&:focus': {
            outline: 'none', 
            boxShadow: 'none',
          },
        }}
      >
        {text}
      </Button>
    );
  };

  export default Login;
