import React, { Component } from 'react';
import Home from './Home';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import About from './About';

class Page extends Component {

  render() {
    return(
      <div className="page">
        <Home />
        <Project1 />
        <Project2 />
        <Project3 />
        <About />
      </div>
    )
  }
}

export default Page
