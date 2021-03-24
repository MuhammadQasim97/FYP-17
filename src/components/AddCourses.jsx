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

export default function AddCourses() {
  const classes = useStyles();

//  const [type, setValue] = React.useState('female');
  //const [Course_ID, setName] = React.useState('NULL');
  const [courseName, setCourseName] = React.useState('NULL');
  const [Semester, setSemester] = React.useState('NULL');
  const [teacherName, setTeacherName] = React.useState('NULL');
  //const [Semester, setName] = React.useState('NULL');
  const[startDate,setStartDate]=React.useState('NULL');
  const[endDate,setEndDate]=React.useState('NULL');
  const [sever, setSever] = React.useState('success');
  const [text, setText] = React.useState('Course Created Successfully');
  



  const [open, setOpen] = React.useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);


      let formData = new FormData();
      formData.append('courseName',courseName );
      formData.append('semester', Semester);
      formData.append('teacher',teacherName);
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);


      axios({
        method: 'post',
        url: 'http://localhost:5000/add_course',
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      }).then(response => console.log(response))
        .catch(errors => console.log(errors))


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
        <div className={classes.paper} >
        
          <Typography component="h1" variant="h5">
            Create Course
        </Typography>
          <form className={classes.form} method="post" action="#" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField

                  onChange={(event) => setCourseName(event.target.value)}
                  autoComplete="fname"
                  name="courseName"
                  variant="outlined"
                  required
                  fullWidth
                  id="Course_ID"
                  label="Enter Course Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(event) => setTeacherName(event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="Teacher_Name"
                  label="Teacher Name"
                  name="teacherName"
                  autoComplete="lname"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  onChange={(event) => setSemester(event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="semester"
                  label="Semester"
                  type="Semester"
                  id="Semester"
                  autoComplete="current-Semester"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  onChange={(event) => setSemester(event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="Semester"
                  label="Confirm Semester"
                  type="Semester"
                  id="Semester"
                  autoComplete="current-Semester"
                />
              </Grid> */}
              <Grid item xs={12}>
              <label>Start Date</label>
                <TextField
                  onChange={(event) => setStartDate(event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="Start_Date"
                  type="Date"
                  id="date"
                />
              </Grid>
              <Grid item xs={12}>
                <label>End Date</label>
                <TextField
                  onChange={(event) => setEndDate(event.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="end_Date"
                  type="Date"
                  id="date"
                />
              </Grid>
              
              {/* <Grid item xs={12}>
                <FormControl component="fieldset">

                  <RadioGroup aria-label="gender" name="gender1" value={type}>
                    <FormControlLabel value="teacher" control={<Radio />} label="Teacher" onChange={handleChange} />
                    <FormControlLabel value="student" control={<Radio />} label="Student" onChange={handleChange} />
                  </RadioGroup>
                </FormControl>
              </Grid> */}
            </Grid>
            <Button
              onClick={handleSubmit}
              type="submit"
              value="Create Course"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
          </Button>
            {/* <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}