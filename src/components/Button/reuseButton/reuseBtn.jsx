import { Button } from '@mui/material';
import React from 'react';

const ReuseBtn = ({ text, onClick, bg , width }) => {
    return (
      <Button
        onClick={onClick}
        sx={{
          width: width,
          backgroundColor: bg,
          borderRadius: '4px',
          color: 'white',
          outline: 'none',
          textTransform: 'none',
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
  

export default ReuseBtn;
