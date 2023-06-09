import React from "react";
import { data } from "../data";
import '../App.css';



function Header() {
  return (
    <div className="header"> 
    <div className="header-section">
    <div className="logo">
          <a>E</a>
        </div>
        <div style={{display: "flex", flexDirection: "row", gap: "25px", marginRight: "150px"}}>
            <a href="#skills" className="skillsLink"> {data.english.headerSkills}</a>
            <a className="projects">{data.english.headerProjects} </a>
        <div className="hireMe">
            <a className="hireMeText">
                {data.english.headerButtons}
            </a>
        </div></div>
        </div>
    </div>
  );
}

export default Header;
