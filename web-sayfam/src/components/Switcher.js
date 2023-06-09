import { useEffect, useState } from "react";
import { data } from "../data";
import '../App.css';


function Switcher() {

        
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

     if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
         }
    }

    function switchTheme(e) {
         if (e.target.checked) {
             document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
       else {        document.documentElement.setAttribute('data-theme', 'light');
           localStorage.setItem('theme', 'light');
        }    
     }

  toggleSwitch.addEventListener('change', switchTheme, false);

    const [language, setLanguage] = useState("english")
  
    const switchLanguage = () => {

       if(language === "english") {
        setLanguage("turkish")
   
       } else {
        setLanguage("english")
       
       }

        };
         
    
    return (
   
     <div className="switcher">
        <div style={{display: "flex", flexDirection: "row", gap: "10px", marginRight: "8em"}}>
          <label className="theme-switch">
            <input type="checkbox" id="toggle-switch"  />
            <span className="slider round"> </span>
        </label> 
        </div>

        <div style={{marginTop: "26px", marginRight: "14px"}}>
            <p style={{fontFamily: "Inter", fontStyle: "Bold", fontSize: "15px", lineHeight: "18px", color: "#777777", marginTop: "1.5em"}}>DARK MODE</p>
       </div>
        <div style={{marginTop: "2.6em", marginRight: "24px"}}> | </div>
        <div className="switchLanguage" onClick={switchLanguage}>
            {language === "english" ? (<p style={{color: "rgba(71, 49, 211, 1)", fontFamily: "Inter", fontWeight: "700px", fontStyle: "Bold", fontSize: "15px", lineHeight: "18px"}}>TÜRKÇE<span style={{color: "rgba(119, 119, 119, 1)"}}>'YE GEÇ</span></p>) : (<p style={{color: "rgba(71, 49, 211, 1)", fontFamily: "Inter", fontWeight: "700px", fontStyle: "Bold", fontSize: "15px", lineHeight: "18px"}}>ENGLISH</p>)}
        </div>
        
    </div>
)}
export default Switcher;
