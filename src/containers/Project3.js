import React, { Component } from 'react';
import '../css/Projects.css';
import Nav from '../components/Nav';
import Arrow from '../components/Arrow';
import gorillaUrl from '../assets/gorilla.png';
import gorillaUrl2 from '../assets/gorilla2.png';

class Project3 extends Component {

  render() {
    return(
      <div className="p3-background">
        <Nav />
        <div className="pad"></div>
          <div className="project-content">
            <div className="project-wrapper">
              <h2>PROJECT / DRINKS ON US</h2>
              <img className="double" src={gorillaUrl} alt="Gorilla Bus Project"></img>
              <img className="double" src={gorillaUrl2} alt="Gorilla Bus Project 2"></img>
            </div>
          </div>
        <Arrow />
      </div>
    )
  }
}

export default Project3
