import { useEffect, useState } from "react";
import { data } from "../data";
import '../App.css';
import useDarkMode from "../hooks/darkMode";


function Switcher() {

    const[darkMode, sliderDarkMode] = useDarkMode()

    let currentLanguage = 'english'

    const [language, setLanguage] = useState(currentLanguage)
  
    const changeLanguage = event => setLanguage(event.target.value) 
   
    const switchLanguage = () => {

      if(language === "english") {
      setLanguage("turkish")
   
       } else {
        setLanguage("english")
       
        }

         };
     useEffect(() => {
             currentLanguage = language || 'english';
           }, [language]);

         
    return (
   
     <div className="switcher">
        <div style={{display: "flex", flexDirection: "row", gap: "10px", marginRight: "8em"}}>
          <label className="theme-switch">
            <input type="checkbox" id="toggle-switch" onChange={() =>sliderDarkMode()} />
            <span className="slider round" > </span>
            
        </label> 
        </div>

        <div className="mode" style={{marginTop: "26px", marginRight: "14px"}}>
            <p style={{fontFamily: "Inter", fontStyle: "Bold", fontWeight: "700", fontSize: "15px", lineHeight: "18px", color: "#777777", marginTop: "1.5em"}}> {darkMode ? 'LIGHT' : 'DARK'} MODE</p>
       </div>
        <div style={{marginTop: "2.6em", marginRight: "24px"}}> | </div>
        <div className="switchLanguage" onClick={switchLanguage} >
            {language === "english" ? (<p style={{color: "rgba(71, 49, 211, 1)", fontFamily: "Inter", fontWeight: "700", fontStyle: "Bold", fontSize: "15px", lineHeight: "18px"}}>TÜRKÇE<span style={{color: "rgba(119, 119, 119, 1)"}}>'YE GEÇ</span></p>) : (<p style={{color: "rgba(71, 49, 211, 1)", fontFamily: "Inter", fontWeight: "700", fontStyle: "Bold", fontSize: "15px", lineHeight: "18px"}}>ENGLISH</p>)}
        
        </div>
    </div>
)}
export default Switcher;
