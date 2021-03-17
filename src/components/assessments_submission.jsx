import React, { Component } from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import axios from "axios";
import Cards from "./Cards";
import Button from "@material-ui/core/Button";
//import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions";
import { FilterCenterFocusOutlined } from "@material-ui/icons";
import { render } from "@testing-library/react";
import Sdata from "./Sdata";
import "./Cards.css";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import post from "axios";
import ImgMediaCard from "./submission";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, TextField } from "@material-ui/core";
import "./upload.css";

class Assessments_Submission extends Component {
  constructor(props) {
    super(props);
    this.state.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    props: [],
  };

  onChange(e) {
    //alert(e.target.files[0]);
    this.setState({ [e.target.name]: e.target.files[0] });

    // let reader = new FileReader();
    // reader.readAsDataURL(files[0]);

    // reader.onload = (e) => {
    //   console.warn("img data", e.target.result);

    //   const url = 'http://localhost:5000/assessmentSubmission';
    //   const formData = { file: e.target.result };
    //   return post(url.formData).then((response) =>
    //     console.warn("result", response)
    //   );
    // };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.state.solution.name;
    let extension = name.split(".").pop();
    if (extension == "c" || extension == "cpp") {
      let formData = new FormData();
      formData.append("solution", this.state.solution);
      formData.append("assessment_id", this.state.props.match.params.id);

      axios({
        method: "post",
        url: "http://localhost:5000/submitSolution",
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      })
        .then((response) => console.log(response))
        .catch((errors) => console.log(errors));
    } else {
      alert("Choose the correct file");
    }
  };

  render() {
    console.log(this.state.props);
    return (
      <div className="" onSubmit={this.onFormSubmit}>
        <div class="row justify-content-center">
          <h1 className="heading_Style"> Submission </h1>
        </div>
        <div className="row m-4 mx-auto justify-content-center">
          <div className="col-md-4  ">
            <ImgMediaCard
              id={this.props.match.params.id}
              name={this.props.match.params.name}
              date={this.props.match.params.date}
            ></ImgMediaCard>
          </div>
          <div className="col-md-6">
            <React.Fragment>
              <div className="row justify-content-center"></div>
              <div className="shadow p-3 mb-5 bg-white rounded col-md-8 ">
                <form
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={this.handleSubmit}
                >
                  <div className="row">
                    <div className="form-group files col">
                      <label>Upload Tar File Here </label>
                      <input
                        type="file"
                        name="solution"
                        className="form-control"
                        onChange={(e) => this.onChange(e)}
                        multiple=""
                      ></input>
                    </div>
                  </div>
                  <div className="form-group justify-content-center ">
                    <input
                      type="submit"
                      name="submit"
                      className=" btn btn-outline-dark form-control col-md-4"
                      multiple=""
                    ></input>
                  </div>
                </form>
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: "",
  //       password: "",
  //     };
  //   }

  //   valid(item, type) {
  //     let itemValue = item.target.value;
  //     switch (type) {
  //       case "name": {
  //         if (itemValue.length < 4) {
  //           item.target.style.color = "red";
  //           this.setState({ name: itemValue });
  //         } else {
  //           item.target.style.color = "";
  //           this.setState({ name: itemValue });
  //         }
  //       }
  //       case "password": {
  //         if (itemValue.length < 8) {
  //             item.target.style.color = "red";
  //             this.setState({ password: itemValue });
  //           } else {
  //             item.target.style.color = "";
  //             this.setState({ password: itemValue });
  //           }
  //       }
  //     }
  //   }

  //   submit() {
  //     let obj = {};
  //     obj.name = this.state.name;
  //     obj.password = this.state.password;

  //     console.warn("submit data", obj);
  //   }

  //   render() {
  //     return (
  //       <div>
  //         <h1 className="heading_Style">
  //           Submit the solution of assignment here
  //         </h1>

  //         <input
  //           type="text"
  //           placeholder="Enter Name"
  //           onChange={(item) => this.valid(item, "name")}
  //         />
  //         <br />
  //         <input
  //           type="password"
  //           placeholder="Enter password"
  //           onChange={(item) => this.valid(item, "password")}
  //         />
  //         <br />
  //         <button onClick={() => this.submit()}>Submit</button>
  //       </div>
  //     );
  //   }
}
export default Assessments_Submission;
