import React from "react";
import { data } from "../data";
import '../App.css';


function Footer() {
  return (
    <div className="Footer">  
  
        <h2>{data.english.footerText}</h2>
            <div className="contact">
              <p>
                <span>👉</span>
                <a className="email" href="mailto:ecekalpelli@gmail.com">ecekalpelli@gmail.com </a>
                </p>
                <div className="contact-info">
                    <a
                      className="personalBlog"
                      href="https://github.com/ecealp34"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    Personal Blog
                    </a>  
                    <a
                      className="github"
                      href="https://github.com/ecealp34"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    Github
                    </a>
                    <a
                      className="linkedin"
                      href="https://www.linkedin.com/in/ece-k%C3%BC%C3%A7%C3%BCkalpelli"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin
                    </a>
                </div>
            </div>
    </div>
  );
}

export default Footer;
