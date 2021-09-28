// import React, { Component } from 'react'
// import { Formik, Field, ErrorMessage} from "formik"
// import * as Yup from "yup"
// import {Button} from 'react-bootstrap'
// import Home from '../Home';
//  class Signup extends Component {

//     constructor(props){
//         super(props)
//         this.state={
//           signupError:'',
//           goHome:false,
//           UserData:[]
//         }
//       }
//       handleSubmit = async (values) => {
//           try{
//           const Userdata = {
//             name: values.name,
//             email: values.email,
//             password: Number(values.password),
//             passwordConfirm: Number(values.confirmpassword),
//           };
//           // eslint-disable-next-line
//          let newUser = await axios.post(
//             `http://localhost:8070/signup-user`,
//             Userdata
//           )
//           let check =  await axios.get('http://localhost:8070/check-user')
//           console.log(check);
//           this.setState({
//               goHome:true,
//               UserData:newUser.data
//           })
//           // console.log(newUser.data.data.user);

//         } catch(err){
//             let errvalidate
//             console.log(err.response.data.message);
//             if(err.response.data.message==="users validation failed: passwordConfirm: the password is different"){
//                errvalidate = "the password is different"
//             }
//             else if(err.response.data.message==="users validation failed: password: Path `password` (`123456`) is shorter than the minimum allowed length (8)."){
//               errvalidate ="shorter than the minimum allowed length (8)"
//             }
//             else{
//                errvalidate = err.response.data.message
//             }
//             this.setState({
//               signupError:errvalidate

//             })

//           }

//         };

// form=(props)=>{
//     return  <form onSubmit={props.handleSubmit} >
//          <label htmlFor=""> password</label>
//         <Field name = "password"/>
//         <br/>
//         <ErrorMessage name="password" />
//         <br/>
//         <hr/>
//         <label htmlFor=""> name</label>
//         <Field name = "name" />
//         <br/>
//         <ErrorMessage name="name" />
//         <br/>
//         <hr/>
//         <label htmlFor=""> confirm password</label>
//         <Field name = "confirmpassword"/>
//         <br/>
//         <ErrorMessage name="confirm" />
//         <br/>
//         <hr/>
//         <label htmlFor=""> email</label>
//         <Field name="email" type="email" />
//         <br/>
//         <ErrorMessage name="email" />
//         <br/>
//         <hr/>
//         {!this.state.goHome&&
//         <Button type="submit"  variant="dark" >sign up  </Button>}
//         {this.state.goHome&&
//         <Button type="submit"  variant="dark"  href='/'>go home  </Button>}
//     </form>

// }
// schema = () => {
//     const schema = Yup.object().shape({
//       password: Yup.string().required(),
//       name: Yup.string().required(),
//       email: Yup.string().required(),
//       confirmpassword: Yup.string().required(),
//     })
//     return schema;
// }

//     render() {
//         return (
//             <div>
//             <div>
//                  <Formik
//           initialValues={{
//               password : 123456789,
//               name:'yaseen',
//               confirmpassword:123456789,
//               email:'test1@test.com'
//           }}
//           onSubmit={this.handleSubmit}
//           render={this.form}
//           validationSchema={this.schema()}
//           />
//           </div>

//           <div>
//         <h1>{this.state.signupError}</h1>
//       </div>
//       {this.state.goHome&&
//       <Home UserData={this.state.UserData}/>}
//             </div>
//         )
//     }
// }

// export default Signup
import axios from "axios";
import * as React from "react";
import { Component } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupError: "",
      
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    try {
      const Userdata = {
        name: data.get("username"),
        email: data.get("email"),
        password: data.get("password"),
        passwordConfirm: data.get("confirmpassword"),
      };
      // eslint-disable-next-line
      let newUser = await axios.post(
        `http://localhost:8070/signup-user`,
        Userdata
      );
      // let check = await axios.get("http://localhost:8070/check-user");
      // console.log(check.data);

      // console.log(newUser.data.data.user);
      this.setState({
        signupError: 'correct access',
      });
      console.log(this.state.signdata)
    } catch (err) {
      let errvalidate;
      console.log(err.response.data.message);
      if (
        err.response.data.message ===
        "users validation failed: passwordConfirm: the password is different"
      ) {
        errvalidate = "the password is different";
      } else if (
        err.response.data.message ===
        "users validation failed: email: please valid email, password: Path `password` (`c`) is shorter than the minimum allowed length (8)."
      ) {
        errvalidate = "shorter than the minimum allowed length (8)";
      } else {
        errvalidate = err.response.data.message;
      }
      console.log(errvalidate);
      this.setState({
        signupError: errvalidate,
      });
    }
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={this.handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="username"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmpassword"
                    label="Password"
                    type="password"
                    id="confirmpassword"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <p>{this.state.signupError}</p>
                </Grid>
                
                 
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    );
  }
}
export default Signup;
