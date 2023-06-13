import React, { useState } from 'react';
import Switcher from './components/Switcher';
import Header from './components/Header';
import Info from './components/Info';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import useDarkMode from './hooks/darkMode';
import axios from "axios"
import {LanguageProvider} from "./components/Switcher"


function App() {

   const{ darkMode } = useDarkMode();
 
  return (
    <div className={darkMode ? "dark-mode" : "App"}>
        <div className="body">
        <Switcher  />
        <Header/>
        <Info/>
        <Skills/>
        <Profile/>
        <Projects/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;