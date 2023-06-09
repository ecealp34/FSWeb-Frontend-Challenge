import React from "react";
import { data } from "../data";
import '../App.css';


function Skills() {
   
  return (
    <div className="abilities">
        <h2>{data.english.skillsTitle}</h2>
        <div className="Skills">
            <div className="flex-box">
                <h4>Java Script</h4>
                <p>{data.english.skillsText}</p>
            </div> 
            <div className="flex-box">
                <h4>React.Js</h4>
                <p>{data.english.skillsText}</p>
            </div> 
            <div className="flex-box">
                <h4>Node.Js</h4>
                <p>{data.english.skillsText}</p>
            </div>
        </div>
       <div className="cizgi">
    </div>
    </div>
  )};


export default Skills;