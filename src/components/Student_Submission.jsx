import React, { Component } from 'react';
import axios from 'axios';
import { Button, Container, TextField } from '@material-ui/core';
import DataGridDemo from './data';
import SimpleMenu from './menu';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class Student_Submission extends Component {

  

  state = {
    tags: ['Assignments', 'Courses', 'Help'],
    targetUrl: 'http://localhost:5000/getsubmission/',
    value: [],
    view: false,
    divStyle: {
      height: "500px"
    },
    mainView: false,
    course:[],
    


  };

  onChange=(e)=> {
    this.setState({ [e.target.name]: e.target.value });

  }

  onChangeFile(e) {
    this.setState({ [e.target.name]: e.target.files[0] });


  }



  async componentWillMount() {

    axios({
      method: 'get',
      url: 'http://localhost:5000/studentSubmission',
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(response => this.setState({ data: response.data }))
      .catch(errors => console.log(errors))    

  }


  async componentDidMount()
  {
    console.log(this.state.course);
  }
 handleSubmit=async (e)=> {
    e.preventDefault();


    const args = {
      phone: this.state.name,
      email: this.state.type,

      // same for other inputs .. 
    };

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    let formData = new FormData();
    //formData.append('tar', this.state.tar);

    formData.append('name', this.state.name);
    formData.append('test_case', this.state.testCase);
    formData.append('course', this.state.course_id);
    formData.append('deadline', this.state.deadline);



    axios({
      method: 'post',
      url: 'http://localhost:5000/assessments_register',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(response => console.log(response))
      .catch(errors => console.log(errors))

    // axios({
    //     method: 'put',
    //     url: 'http://localhost:5000/getsubmission/1',
    //     tar:this.state.tar,
    //     make:this.state.make,
    //     name:this.state.name,
    //     course:this.state.course,
    //     deadline:this.state.deadline,
    //     config: { headers: { 'Content-Type': 'multipart/form-data' } }
    // }).then(response => console.log(response))
    // .catch(errors => console.log(errors))
  }

  setView=()=> {
    this.state.view == true ? this.setState({ view: false }) : this.setState({ view: true });
    this.componentWillMount();

  }

  setMainView=()=> {
    this.state.mainView == true ? this.setState({ mainView: false }) : this.setState({ mainView: true });


  }





  render() {

    let c = "btn btn-primary";

    if (this.state.mainView) {
      return (
        <React.Fragment>
          <SimpleMenu show={this.state.mainView} changeShow={this.setMainView} className="col-md-12" />
          <Container >

            <div className="row justify-content-center">
              <p className="display-4 mx-auto">Add Assignment</p>
            </div>
            <div className="shadow p-3 mb-5 bg-white rounded col-md-8 mx-auto">
              <form method="post" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <TextField className="form-control" id="standard-basic" label="Enter Name" onChange={e => this.onChange(e)} name="name" />
                </div>
                <div className="form-group my-3">
                <InputLabel id="demo-controlled-open-select-label">Choose Course</InputLabel>
                <Select
                label="Choose Course"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          className="col-md-4"
          // open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
          // value={age}
          name="course_id"
           onChange={e =>this.onChange(e)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {this.state.course.map((obj) => 
           <MenuItem key={obj[0]}  value={obj[0]}>{obj[1]}</MenuItem>
          )}
         
        
        </Select>
                      </div>


                <div className="form-group">
                  <TextField
                    id="datetime-local"
                    label="DeadLine"
                    type="datetime-local"
                    //defaultValue="2017-05-24T10:30"
                    className="form-control"
                    name="deadline"
                    onChange={e => this.onChange(e)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className="row">
                  <div className="form-group files col">
                    <label>Upload Test Case </label>
                    <input type="file" ref={(ref) => { this.uploadInput = ref; }} name="testCase" className="form-control" onChange={e => this.onChangeFile(e)} multiple=""></input>
                  </div>
                  {/* <div className="form-group files col">
                    <label>Upload Tar File Here </label>
                    <input type="file" name="tar" className="form-control" onChange={e => this.onChangeFile(e)} multiple=""></input>
                  </div> */}
                </div>
                <div className="form-group justify-content-center ">

                  <input type="submit" name="submit" className=" btn btn-outline-dark form-control col-md-4" multiple=""></input>
                </div>
              </form>

            </div>


          </Container>
        </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment >
          <SimpleMenu show={this.state.mainView} changeShow={this.setMainView} className="col-md-12" />
          <div style={this.state.divStyle} className="mx-auto w-100">
            <DataGridDemo view={this.state.view} setView={this.setView} allRecords={this.state.data} className="col-md-8"></DataGridDemo>
          </div>
        </React.Fragment>
      );
    }
  }

}


export default Student_Submission;