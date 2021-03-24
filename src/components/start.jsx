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
 import { createBrowserHistory } from 'history';

 const history = createBrowserHistory();

 function Copyright() {
   return (
     <Typography variant="body2" color="textSecondary" align="center">
       {'Copyright © '}
       <Link color="inherit" href="https://material-ui.com/">
         Your Website
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

 export default function Login(props) {
   const classes = useStyles();

   const [type, setValue] = React.useState('female');
   const [email, setEmail] = React.useState('NULL');
   const [password, setPassword] = React.useState('NULL');




   const [open, setOpen] = React.useState(false);
   const [done, setDone] = React.useState(false);
   const [user, setUser] = React.useState([]);

   const handleChange = (event) => {
     setValue(event.target.value);
   };

   const handleSubmit = (event) => {
     event.preventDefault();
     setOpen(true);
    
       let formData = new FormData();
      
       formData.append('email', email);
       formData.append('password', password);


       axios({
         method: 'post',
         url: 'http://localhost:5000/user_login',
         data: formData,
         config: { headers: { 'Content-Type': 'multipart/form-data' } }
       }) .then((response) => {
        if (response.status == 200) {
          setUser(response.data.data[0][4]);
          if(response.data.data[0][4]==0)
          {
          props.history.push('student')
          }
          else{
            props.history.push('submissions')
          }
        }
       
      })
         .catch(errors => console.log(errors))

     }



   return (

    

     <div className="">
       <div className="p-4">
         <Collapse in={open}>
           <Alert
            //  severity={sever}
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
             {/* {text} */}
           </Alert>
         </Collapse>

       </div>
       <Container ClassName="bg-success shadow-lg p-1" component="main" maxWidth="xs">


         <CssBaseline />
         <div className={classes.paper} >
           <Avatar className={classes.avatar}>
             <LockOutlinedIcon />
           </Avatar>
           <Typography component="h1" variant="h5">
             Log In
         </Typography>
           <form className={classes.form} method="post" action="#" onSubmit={handleSubmit} noValidate>
             <Grid container spacing={2}>

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
             </Grid>
             <Button
               onClick={handleSubmit}
               type="submit"
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit}
             >
               Log In
           </Button>
             <Grid container justify="flex-end">
               <Grid item>
                 <Link href="/register" variant="body2">
                   Do not have an account? Sign up
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









  // class Start extends Component {
  //   state = {};
  //   render() {
  //     return (
  //       <React.Fragment>
  //         <div
  //           style={{ height: "400px" }}
  //           className="d-flex  align-items-center justify-content-center"
  //         >
  //          <Button
  //             href="/student"
  //             size="large"
  //             className="m-4"
  //             variant="contained"
  //             color="secondary"
  //           >
  //             Student
  //           </Button>
  //           <Button
  //             href="/submissions"
  //             size="large"
  //             className="m-4"
  //             variant="contained"
  //             color="primary"
  //           >
  //             Teacher
  //           </Button>
  //           <Button
  //             href="/register"
  //             size="large"
  //             className="m-4"
  //             variant="contained"
  //           > 
  //             Register
  //           </Button>
  //         </div>
  //         <div className="row justify-content-center shadow pb-3 m-4 ">
  //           <p className="display-4 ">Automated Learning and Evaluation System</p>
  //         </div>
  //       </React.Fragment>
  //     );
  //   }
  // }

  // export default Start;
