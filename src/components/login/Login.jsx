import { Box, Typography, Alert } from '@mui/material';
import Inputfield from '../Button/Inputfield/Inputfield';
import Logins from '../Button/LoginButton/Login';
import { useNavigate } from 'react-router-dom';
import { SigninStyle } from './Logistyle';
import { useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { alertMessage } = location.state || {};

    const handleForgotpass = () => {
        navigate('/glogin');
    };

    const handlelogon = () => {
        navigate('/glogin');
    };

    return (
        <Box sx={SigninStyle.Signinpage}>
            <Box sx={SigninStyle.Signin}>
                {alertMessage && (
                    <Box sx={SigninStyle.alert}>
                        <Alert severity="success" sx={SigninStyle.msg}>
                            {alertMessage}
                            <Box sx={SigninStyle.closeBox}>
                                <CloseIcon sx={SigninStyle.alertclose} />
                            </Box>
                        </Alert>
                    </Box>
                )}

                <Box sx={SigninStyle.welcomebox}>
                    <Typography sx={SigninStyle.name} variant='h6'>B A P S</Typography>
                    <Typography sx={SigninStyle.welcome} variant='h6'>Welcome!</Typography>
                </Box>

                <Box sx={SigninStyle.signincontentbox}>
                    <Typography sx={SigninStyle.Signincontent} variant='body2'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, quia!
                    </Typography>
                </Box>

                <Box sx={SigninStyle.Emailfield}>
                    <Typography sx={SigninStyle.signinemail} variant='body2'>
                        Email<span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Inputfield type="email" placeholder="Enter your email" />
                </Box>

                <Box sx={SigninStyle.Passwordfield}>
                    <Typography sx={SigninStyle.signinPassword} variant="body2">
                        Password<span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Inputfield type="password" placeholder="Enter your password" />
                </Box>

                <Box sx={SigninStyle.forgotpasswordbox}>
                    <Typography 
                        sx={SigninStyle.Forgot} 
                        onClick={handleForgotpass} 
                        variant='body2'
                        style={{ cursor: 'pointer' }} 
                    >
                        Forgot Password?
                    </Typography>
                </Box>

                <Box sx={SigninStyle.Loginbbox}>
                    <Logins text="Log In" onClick={handlelogon} />
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
