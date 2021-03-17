import React from 'react';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import '../../App.css';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          AutoGrade     
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  
  
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function SignUp() {
    const classes = useStyles();
  
    const [type, setValue] = React.useState('female');
    const [firstName, setName] = React.useState('NULL');
    const [email, setEmail] = React.useState('NULL');
    const [password, setPassword] = React.useState('NULL');
    const [lastName, setLastName] = React.useState('NULL');
    const [confirmPassword, setConfirmPassword] = React.useState('NULL');
    const [sever, setSever] = React.useState('success');
    const [text, setText] = React.useState('Well done!...');
  
    
  
    const [open, setOpen] = React.useState(true);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const handleSubmit = (event)=>
    {
      event.preventDefault();
      setOpen(true);
      if(password==confirmPassword)
      {
  
        let formData = new FormData();
        formData.append('firstname',firstName);
        formData.append('lastname',lastName);
        formData.append('email',email);
        formData.append('password',password);
  
  
  axios({
    method: 'post',
    url: 'http://localhost:5000/user_register',
    data: formData,
    config: { headers: { 'Content-Type': 'multipart/form-data' } }
  }).then(response => console.log(response))
  .catch(errors => console.log(errors))
        
      }
      else{
        setSever("error");
        setText("Passwords do not Match");
      }
     
    }
  
  
    return (
  
  
      
      <div className="">
        <div className="p-4">
        <Collapse in={open}>
          <Alert
          severity={sever}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
           {text}
          </Alert>
        </Collapse>
        
      </div>
      <Container ClassName="bg-success shadow-lg p-1" component="main" maxWidth="xs">
  
      
        <CssBaseline />
        <div className={classes.paper } >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} method="post" action="#" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
  
                onChange={(event) => setName(event.target.value)}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 onChange={(event) => setLastName(event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onChange={(event) => setEmail(event.target.value)}
                  variant="outlined"
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
                 onChange={(event) => setPassword(event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onChange={(event) => setConfirmPassword(event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="Confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl component="fieldset">
        
        <RadioGroup aria-label="gender" name="gender1" value={type}>
          <FormControlLabel value="teacher" control={<Radio />} label="Teacher" onChange={handleChange}/>
          <FormControlLabel value="student" control={<Radio />} label="Student" onChange={handleChange}/>
        </RadioGroup>
      </FormControl>
              </Grid>
            </Grid>
            <Button
            onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      </div>
    );
  }