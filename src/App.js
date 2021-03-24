import React from "react";
import Navbar from "./components/Navbar";
//import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from "./components/pages/Courses";
import Products from "./components/pages/Products";
//import SignUp from "./components/pages/SignUp";
import Assessments from "./components/assessments";
import DataGridDemo from "./components/data";
import DataData from "./components/Sdatadata";
import Assessments_Submission from "./components/assessments_submission";
import Start from "./components/start";
import Top from "./components/top";
import SignUp from "./components/register";
import { NavigateBefore } from "@material-ui/icons";
import Nav from "./components/nav";
import SubmitCourses from "./components/AddCourses";
import AddCourses from "./components/AddCourses";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route handle={{ App }}>
            <Route path="/" exact component={Start}></Route>
            <Route path="/student">
              <Navbar></Navbar>
              <Home></Home>
            </Route>
            <Route path="/addCourse">
              <Navbar />
              <AddCourses />
            </Route>
            <Route path="/courses">
              <Navbar></Navbar>
              <Courses></Courses>
            </Route>
            <Route path="/products">
              <Navbar></Navbar>
              <Products></Products>
            </Route>
            {/* <Route path="/student/sign-up" component={SignUp}>
            <Navbar></Navbar>
            <SignUp></SignUp>
          </Route> */}
            <Route path="/assessments">
              <Navbar></Navbar>
              <Assessments></Assessments>
            </Route>
            <Route path="/submissions" component={Top}>
              <Nav></Nav>
              <Top></Top>
            </Route>
            <Route path="/register">
              <Nav />
              <SignUp />
            </Route>
            <Route
              path="/assessments_submission/:id/:name/:date"
              component={Navbar}
            />
            <Route
              path="/assessments_submission/:id/:name/:date"
              component={Assessments_Submission}
            />
          </Route>
          {/* <Route path='/assessments_submission' render={(props) => <Assessments_Submission{...props} />} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
