import "./Login.css";
import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
// import { Container, Row, Col } from 'reactstrap'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useUserAuth } from '../../../contexts/userAuth.context'
import { async } from "@firebase/util";
import { Login } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import {Alert } from '@mui/material'
import { GoogleLoginButton } from 'react-social-login-buttons'

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError] = useState("")
  const navigate = useNavigate()
  
  const {logIn, singInWithGoogle} = useUserAuth()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await logIn(email,password)
      navigate("/home")
      
    }
    catch(err){
      setError(err.message)
    }

  };

  const handleGoogleSingIn = async (event) => {
    event.preventDefault();
    try{
      await singInWithGoogle()
      navigate("/home")
      
    }
    catch(err){
      setError(err.message)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            {error && <Alert severity="error">{error}</Alert>}

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <GoogleLoginButton onClick={handleGoogleSingIn}/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/singup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}





// export default function LoginFunc (props) {
//   let [authMode, setAuthMode] = useState("signin")
//   const [password, setPassword] = useState()
//   const email = useRef("")

//   const changeAuthMode = () => {
//     setAuthMode(authMode === "signin" ? "signup" : "signin")
//   }

//   const handleChange = (e)=>{

//   }

//   const handleSubmit = ()=>{
//     console.log(email.current.value);


//   }


// return(
//   <div className="d-flex ">
//     <img className="w-100 mt-5" src="https://img.freepik.com/free-photo/3d-aesthetics-with-shapes-vaporwave-style_23-2148981118.jpg?w=900&t=st=1666480866~exp=1666481466~hmac=7071991ea9b3ed618a5fa5296d5e7ed2d5f6a7552a063c12e18e1d160ec070e5" alt="" />
//   {authMode == "signin"?   <div className="Auth-form-container login">
//         <form className="Auth-form" onSubmit={handleSubmit}>
//           <div className="Auth-form-content">
//             <h3 className="Auth-form-title">Sign In</h3>
//             <div className="text-center">
//               Not registered yet?{" "}
//               <span className="link-primary" onClick={changeAuthMode}>
//                 Sign Up
//               </span>
//             </div>
//             <div className="form-group mt-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control mt-1"
//                 placeholder="Enter email"
//                 name="email"
//                 ref={email}
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mt-1"
//                 placeholder="Enter password"
//                 name="password"
//               />
//             </div>
//             <div className="d-grid gap-2 mt-3">
//               <button type="submit" className="btn btn-primary submit_btn">
//               <Link to="/home">Submit</Link>
//               </button>
//             </div>

//           </div>
//         </form>
//       </div>
//     :
//     <div className="Auth-form-container">
//       <form className="Auth-form mt-5">
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">Sign In</h3>
//           <div className="text-center">
//             Already registered?{" "}
//             <span className="link-primary" onClick={changeAuthMode}>
//               Sign In
//             </span>
//           </div>
//           <div className="form-group mt-3">
//             <label>Full Name</label>
//             <input
//               type="text"
//               className="form-control mt-1"
//               placeholder="Full Name"
//               name="fullName"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control mt-1"
//               placeholder="Email Address"
//             />
//           </div>
//           <div className="form-group mt-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mt-1"
//                 placeholder="Enter password again"
//               />
//             </div>
//           <div className="form-group mt-3">
//               <label>Confirm Password</label>
//               <input
//                 type="password"
//                 className="form-control mt-1"
//                 placeholder="Enter password again"
//               />
//             </div>
//           <div className="d-grid gap-2 mt-3">
//             <button type="submit" className="btn btn-primary submit_btn">
//               <Link to="/home">Submit</Link>
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
// }
//   </div>)
// }