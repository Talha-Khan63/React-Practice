import React from "react";
// import "../../App.css";

const Student = ({stdName = "Guest ", stdAge = 10, stdStatus =false}) =>{
return(
  <div className="StdDiv">
    <h1>Student Name : {stdName}</h1> 
    <h3>Student Age : {stdAge}</h3> 
    <h5>Student Status : {stdStatus}</h5> 

  </div>
)


};
export default Student