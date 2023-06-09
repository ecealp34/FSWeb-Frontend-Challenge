import React from "react";
import { data } from "../data";


function Projects() {
   
  return (
    <div className="Projects">
        <h2> Projects </h2>
        <div className="cards">
            <div className="card">
                <div className="project">
                    <img src="redux-watchlist.png" style={{width: "300px", height:"180px"}}/>
                    <h4>Redux Watchlist</h4>
                    <p>{data.english.projectsText}</p>
                    <div className="buttons1">
                        <a className="btn">react</a>
                        <a className="btn">redux</a>
                        <a className="btn">axios</a>
                    </div>
                    <div className="card-links">
                        <a href="https://github.com/ecealp34">Github</a>
                        <a href="https://vercel.com/ecealp34/fsweb-s10g3-redux-watchlist">{data.english.viewSite}</a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="project">
                    <img src="shopping-cart.png" style={{width: "300px", height:"180px"}}/>
                    <h4>Shopping Cart</h4>
                    <p>{data.english.projectsText}</p>
                    <div className="buttons1">
                        <a className="btn">react</a>
                        <a className="btn">redux</a>
                        <a className="btn">axios</a>
                    </div>
                    <div className="card-links">
                        <a href="https://github.com/ecealp34">Github</a>
                        <a href="https://vercel.com/ecealp34/fsweb-s11g1-shopping-cart">{data.english.viewSite}</a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="project">
                    <img src="redux-film.png" style={{width: "300px", height:"180px"}}/>
                    <h4>Redux Watchlist</h4>
                    <p>{data.english.projectsText}</p>
                    <div className="buttons1">
                        <a className="btn">react</a>
                        <a className="btn">redux</a>
                        <a className="btn">axios</a>
                    </div>
                    <div className="card-links">
                        <a href="https://github.com/ecealp34">Github</a>
                        <a href="https://vercel.com/ecealp34/fsweb-s10g2-redux-filmler">{data.english.viewSite}</a>
                    </div>
                </div>
            </div>
         </div>
    </div>
  );
}

export default Projects;