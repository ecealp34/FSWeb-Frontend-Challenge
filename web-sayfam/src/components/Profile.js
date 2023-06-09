import React from "react";
import { data } from "../data";
import '../App.css';


function Profile() {
 
  return (
    <div className="profile">
      <h2>{data.english.profileTitle}</h2>
        <div className="profil">
            <div className="info">
                <h4>{data.english.profileTitle}</h4>
                <p>{data.english.birthday}</p>
                <p>{data.english.residence}</p>
                <p>{data.english.education}</p>
                <p style={{marginTop: "4rem"}}>{data.english.preferredRole}</p>
            </div> 
            <div className="info2">
                <p>06.09.1997</p>
                <p>İstanbul</p>
                <p>ITU, Material Engineering<br/> Bachelor, 2021</p>
                <p style={{marginTop: "1.8rem"}}>Frontend, UI </p>
            </div> 
            <div className="about">
                <h4>{data.english.aboutMe}</h4>
                <p>{data.english.aboutText}</p>
                <p style={{marginBottom: "50px"}}>{data.english.aboutText}</p>
            </div>       
        </div>
        <div className="cizgi">
    </div>
    </div>
  );
}

export default Profile;