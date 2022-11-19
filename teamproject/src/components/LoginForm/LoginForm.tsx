import React from 'react'
import {Card, Typography, TextField, Button} from '@mui/material'
import { useForm } from 'react-hook-form'
import { LoginFormData } from '../helpers/Interfaces'
import { signInWithEmailAndPassword, } from 'firebase/auth'
import { auth } from '../../helpers/firebaseConfig'



const LoginForm = () => {

    const {register, handleSubmit} = useForm<LoginFormData>()

    const SubmitHandler = (data: LoginFormData) => {

        signInWithEmailAndPassword(auth, data.email, data.password)
        .then(() => console.log("Login succesfull"))
    }
    
    return (   

        <Card sx= {{mb: '1rem'}}>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit(SubmitHandler)}>
                
                <Typography sx={{textAlign: 'center', fontSize:'1,5rem', my: '.8rem'}} >
                Log In</Typography>

                <TextField variant = 'outlined' type = 'email' placeholder = 'email' sx ={{display: 'block', mx: 'auto', my:'.8rem'}} {...register('email', {required: true})}></TextField>

                <TextField variant = 'outlined' type = 'password' placeholder = 'password' sx ={{display: 'block', mx: 'auto', my:'.8rem'}} {...register('password', {required: true})}></TextField>

                <Button type = 'submit' variant = "outlined" sx={{mx: 'auto', my: '0.8rem'}}> Log In</Button>

            </form>
        </Card>

    )
}

export default LoginForm