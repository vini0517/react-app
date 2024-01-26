//import React from "react";
import "../css/PropsComponent.css"
function PropsComponent(props){
    //const styleAttrrs = {
      //  "color":"Yellow",
      // "backgroundColor":"Brown"
    //}

    return(
        <div>     
            <h1>Hello, {props.name} <br></br> This is {props.course} class</h1>
        </div>
    )
}

export default PropsComponent;
//style = {{"color":"Yellow","backgroundColor":"Brown"}}>