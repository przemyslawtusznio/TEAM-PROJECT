import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { Typography, Button} from '@mui/material'
import { Link } from "react-router-dom";


const LoginPage = () => {
  
  return ( <>
    
    <LoginForm/>

    <Typography variant = 'h5' sx={{fontWeight: '80', textAlign: 'center'}}> Dont't You have an account yet? Register now.</Typography>

    
    <Link to='/Register' style={{textDecoration: 'none'}}>
    <Button variant = 'contained' sx={{mx: 'auto', display: 'block', my: '1rem'}}>Register</Button>
    </Link>
    </>
  )
};

export default LoginPage;
