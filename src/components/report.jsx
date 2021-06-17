import { render } from '@testing-library/react';
import React, { Component } from 'react';

const Report = (props)=>{

    console.log(props);
    return(

      <h1>HEllo</h1>
    );
}

// class Report extends Component{


    
//     render (){
//         console.log(this.props);
//         return (<h1>{this.props.value}Hello</h1>);
//     }
// }


export default Report;