import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { Signupstyle } from './googleLoginStyle';
import GoogleButton from '../Button/GoogleButton/GoogleButton';
import Google from '../../assets/logos/Google';
import Outlook from '../../assets/logos/Outlook';
import TextFielder from '../Button/Inputfield/Inputfield';
import Login from '../Button/LoginButton/Login';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/home');
  };

  const handleLogin = () => {
    navigate('/Signin');
  };

  return (
    <Box sx={Signupstyle.Signuppage}>
        <Box sx={Signupstyle.Signup}>
        <Box sx={Signupstyle.Signupheader}>
          Sign up
        </Box>
        <Box sx={Signupstyle.signupcontent}>
          You're just a few details away to set up a culture of feedback and thriving environment
        </Box>
        <Box sx={Signupstyle.Googlebutton}>
          <GoogleButton icon={<Google />} text="Sign in with Google" />
        </Box>
        <Box sx={Signupstyle.Outlook}>
          <GoogleButton icon={<Outlook />} text="Sign up with Outlook" />
        </Box>
        <Box sx={Signupstyle.or}>
          <Divider sx={Signupstyle.line} />
          <Typography sx={Signupstyle.Text}>or</Typography>
          <Divider sx={Signupstyle.line} />
        </Box>
        <Box sx={Signupstyle.workingemail}>
          <Typography sx={Signupstyle.workemail} variant="caption">
            Work email<span style={{ color: 'red' }}>*</span>
          </Typography>
          <TextFielder type="text" placeholder="enter the name" />
        </Box>
        <Box sx={Signupstyle.Loginbutton}>
          <Login text="Sign up" onClick={handleSignup} />
        </Box>
        <Box>
          <Typography sx={Signupstyle.Haveaccount} variant="body2">
            Already Have an Account?
            <span style={{ textDecoration: 'underline', marginLeft: '5px' }} onClick={handleLogin}>
              <a href="#" style={{ color: '#353448', fontWeight: 'bold' }}>Log in</a>
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
    
  );
};

export default Signup;
