import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Start extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          style={{ height: "400px" }}
          className="d-flex  align-items-center justify-content-center"
        >
          <Button
            href="/student"
            size="large"
            className="m-4"
            variant="contained"
            color="secondary"
          >
            Student
          </Button>
          <Button
            href="/submissions"
            size="large"
            className="m-4"
            variant="contained"
            color="primary"
          >
            Teacher
          </Button>
          <Button
            href="/register"
            size="large"
            className="m-4"
            variant="contained"
          >
            Register
          </Button>
        </div>
        <div className="row justify-content-center shadow pb-3 m-4 ">
          <p className="display-4 ">Automated Learning and Evaluation System</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Start;
