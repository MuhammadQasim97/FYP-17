import { render } from '@testing-library/react';
import React, { Component,useEffect,useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
const Report = (props)=>{
  let location = useLocation();
  let [score,setScore]=useState(0);
  let [loc,lineOfCode]=useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(location.state);
    let id=location.state;


        
        axios({
          method: "get",
          url: "http://localhost:5000/getReport/" + id,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then((response) => {
            if (response.status == 200) {
            }
            console.log(response.data.data[0]);
            setScore(response.data.data[0][11]);
            lineOfCode(response.data.data[0][9]);

          })
          .catch((errors) => console.log(errors));
        
  });

  // componentWillMount = (event, params)=> {
  //   //props.setView();
  //   console.log(props);
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     alert("YEAH");
  //   } else {
  //     let id = params.getValue("id");
  //     axios({
  //       method: "get",
  //       url: "http://localhost:5000/getsubmission/" + id,
  //       config: { headers: { "Content-Type": "multipart/form-data" } },
  //     })
  //       .then((response) => {
  //         if (response.status == 200) {
  //         }
  //         console.log(response.status);
  //       })
  //       .catch((errors) => console.log(errors));
  //   }
  // }


    
    return(

      <div>
            <h1>Score is {score}</h1>
            <h1>Line of Codes are {loc}</h1>
      </div>
    );
}



export default Report;