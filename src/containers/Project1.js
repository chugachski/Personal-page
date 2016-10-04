import React, { Component } from 'react';
import '../css/Projects.css';
import Nav from '../components/Nav';
import Arrow from '../components/Arrow';
import drinksUrl from '../assets/drinks.jpg';

class Project1 extends Component {

  render() {
    return(
      <div className="p1-background">
        <a name="projects"></a>
        <Nav />
        <div className="pad"></div>
        <div className="project-content">
          <div className="project-wrapper">
            <h2>PROJECT / DRINKS ON US</h2>
            <a href="https://intense-castle-31240.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img className="project-preview" src={drinksUrl} alt="Drinks on Us Project"></img>
            </a>
          </div>
        </div>
        <Arrow />
      </div>
    )
  }
}

export default Project1
