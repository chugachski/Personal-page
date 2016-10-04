import React, { Component } from 'react';
import '../css/Projects.css';
import Nav from '../components/Nav';
import Arrow from '../components/Arrow';
import bandsUrl from '../assets/bands.jpg';

class Project2 extends Component {

  render() {
    return(
      <div className="p2-background">
        <Nav />
        <div className="pad"></div>
        <div className="project-content">
          <div className="project-wrapper">
            <h2>PROJECT / BAND PLANNER</h2>
            <img className="project-preview" src={bandsUrl} alt="Band Planner Project"></img>
          </div>
        </div>
        <Arrow />
      </div>
    )
  }
}

export default Project2
