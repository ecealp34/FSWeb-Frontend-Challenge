import React from 'react';
import Switcher from './components/Switcher';
import Header from './components/Header';
import Info from './components/Info';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';



function App() {
  
  return (
    <div className={"App"}>
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