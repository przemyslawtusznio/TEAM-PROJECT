<<<<<<< HEAD
import React from 'react'
import {Card, Typography, TextField, Button} from '@mui/material'
import { useForm } from 'react-hook-form'
import { LoginFormData } from '../helpers/Interfaces'
import { signInWithEmailAndPassword, } from 'firebase/auth'
import { auth } from '../../helpers/firebaseConfig'


=======
import React from "react";
import { Card, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { LoginFormData } from "../../helpers/interfaces";
>>>>>>> 4177e607f2d24e9a044cdf46f029c7113f4884ff

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const SubmitHandler = (data: LoginFormData) => {};

  return (
    <Card sx={{ mb: "1rem" }}>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(SubmitHandler)}
      >
        <Typography
          sx={{ textAlign: "center", fontSize: "1,5rem", my: ".8rem" }}
        >
          Log In
        </Typography>

<<<<<<< HEAD
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then(() => console.log("Login succesfull"))
    }
    
    return (   
=======
        <TextField
          variant="outlined"
          type="email"
          placeholder="email"
          sx={{ display: "block", mx: "auto", my: ".8rem" }}
          {...register("email", { required: true })}
        ></TextField>
>>>>>>> 4177e607f2d24e9a044cdf46f029c7113f4884ff

        <TextField
          variant="outlined"
          type="password"
          placeholder="password"
          sx={{ display: "block", mx: "auto", my: ".8rem" }}
          {...register("password", { required: true })}
        ></TextField>

        <Button
          type="submit"
          variant="outlined"
          sx={{ mx: "auto", my: "0.8rem" }}
        >
          {" "}
          Log In
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
