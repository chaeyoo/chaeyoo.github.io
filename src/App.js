import React from 'react';
import './index.css';
import Header from './components/resume/Header';
import PersonalInfo from './components/resume/PersonalInfo';
import Introduction from './components/resume/Introduction';
import Experience from './components/resume/Experience';
import Projects from './components/resume/Projects';
import Education from './components/resume/Education';
import SideProject from './components/resume/SideProjects';

const App = () => {
  return (
    <div className="resume">
      <Header />
      <PersonalInfo />
      <Introduction />
      <Experience />
      <Projects />
      <SideProject />
      <Education />
    </div>
  );
};




export default App;