import React from "react";
import { data } from "../data";
import '../App.css';

function Info() {
  
  return (
   
    <div className="information">
       <div className="information-name">
          <div className="line"> </div>
              <span>H.Ece Küçükalpelli</span>
          </div>
       <div className="info-contents">
       <div className="information-content">
          <h1>{data.english.informationTitle}</h1>
          <p>{data.english.informationText}</p>
          <div className="buttons">
          <a className="button" href="mailto:ecekalpelli@gmail.com">{data.english.headerButtons}</a>
          <div className="icon2">
          <a className="button1" href="https://github.com/ecealp34">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25.21" viewBox="0 0 1024 1024"><g transform="translate(1024 0) scale(-1 1)"><path fill="#3730a3" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z"/></g></svg>
           Github</a></div>
           <div className="icon2">
          <a className="button1" href="https://www.linkedin.com/in/ece-k%C3%BC%C3%A7%C3%BCkalpelli">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25.21" viewBox="0 0 24 24"><path fill="#3730a3" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"/></svg>
            Linkedin </a></div>
          </div>
          </div>
          <div>
         <img src="info-foto.png" style={{width: "476px", height: "375px", borderRadius: "18px", boxShadow: "0px 18px 88px -4px rgba(24, 39, 75, 0.14)"}}/>
      </div>
    
      </div>
        </div>
 
  );
}

export default Info;