import React from "react";
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


//function for assesment and api call
function Assessments() {

    let [Data, setData] = useState();
    let [flag, setFlag] = useState(false);
  
    axios({
      method: "get",
      url: "http://127.0.0.1:5000/getassessments/1",
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then((response) => {setData(response.data.data);setFlag(true)})
      .catch((errors) => console.log(errors));
      
      //Console log file
  console.log(Data);
      if(flag)
          {
            return (
             
              
                <div>
      <h1 className="heading_Style" > List of assignments of current Course </h1>
  
      { Data.map((val) => (
       
        <Cards
          id={val[0]}
          name={val[1]}
          datetime={val[2]}
        />
  
      ))}
      </div>
    );
            }
            else{
                return(
              <h1>Loading Data....</h1>
              );
            }
  }
  export default Assessments;

/*
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 1 };
    }

    toggleCategories() {
        const categories = []
            if (this.state.activeTab === 1) {
                for (let data of database) {
                    categories.push (
                        <div className='projects-grid'>
                            <Card shadow={4} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle style={{height: '250px', background: data.image }}></CardTitle>
                                <CardText>
                                    {data.name}
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                            </Card>
                        </div>
                    )
                }
            }
    }
}
export default component;
*/
