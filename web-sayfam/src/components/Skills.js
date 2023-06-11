import React, { useEffect, useState } from "react";
import { data } from "../data";
import '../App.css';
import axios from "axios"
import { skillsData } from "./skillsData";

function Skills() {
   
   const [skills, setSkills] =useState([])

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
      )}

export default Skills;

/*2.yol */
// function Skills() {
   
//     const [skills, setSkills] =useState()
 
//     function fetchSkills() {
//      axios
//     .post("https://reqres.in/api/skills") 
//     .then((response) => {
//        console.log(response)
//        setSkills(response.data)
      
//     }) 
//     .catch((error) => {
//      console.log(error)
//     })}
 
//     useEffect(() => {
//      fetchSkills();
//     }, [])
//      {skills.map((skill) => {
//    return (
//      <div className="abilities">
//          <h2>{data.english.skillsTitle}</h2>
 
//          <div className="Skills"key={skill.id}>
         
//              <div className="flex-box">
//                  <h4>{skill.title}</h4>
//                  <p>{data.english.skillsText}</p>
//              </div> 
//              <div className="flex-box">
//                  <h4>React.Js</h4>
//                  <p>{data.english.skillsText}</p>
//              </div> 
//              <div className="flex-box">
//                  <h4>Node.Js</h4>
//                  <p>{data.english.skillsText}</p>
//              </div>
//          </div>
//         <div className="cizgi">
//      </div>
//      </div>
//   )})}}
 
 
//  export default Skills;