import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react';

const Inputfield = ({ type, placeholder, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      type={type === 'password' && !showPassword ? 'password' : 'text'}
      placeholder={placeholder}
      {...props}
      sx={{
        width: '365px',
        border: 'none',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: '2px solid #EBEBEB',
          },
          '&:hover fieldset': {
            border: '2px solid #EBEBEB',
          },
          '&.Mui-focused fieldset': {
            border: '2px solid #EBEBEB',
          },
        },
      }}
      InputProps={{
        sx: {
          height: '40px',
          padding: '0 10px',
        },
        endAdornment: type === 'password' ? (
          <InputAdornment position="end">
               <IconButton
              onClick={handleTogglePassword}
              edge="end"
              aria-label="toggle password visibility"
              sx={{
                color: '#6e6e6e',
                outline:'none',
                border:'none',
                marginRight:'5%',
                height:'5px',
                width:'5px', // Icon color
                '&:hover': {
                  color: '#4b4b4b',
                  outline:'none',
                  border:'none' // Hover color
                },
                '&:focus': {
                  color: '#4b4b4b',
                  outline:'none',
                  border:'none' // Focus color

                  // Additional styles for focus state can be added here
                }
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
    />
  );
};

export default Inputfield;
