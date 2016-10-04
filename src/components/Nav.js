import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component {

  handleScrollHome(x,y) {
    window.scrollTo(x,y);
  }

  handleScrollProjects() {
    let y = window.innerHeight;
    window.scrollTo(0,y);
  }

  handleScrollContact() {
    let y = window.innerHeight * 4;
    window.scrollTo(0,y);
  }

  render() {
    return(
      <div className="fixed">
        <ul>
          <li className='align-left' onClick={() => this.handleScrollHome(0,0)}>HOME</li>
          <li className='align-right' onClick={() => this.handleScrollProjects()}>PROJECTS</li>
          <li className='align-right' onClick={() => this.handleScrollContact()}>CONTACT / HIRE</li>
        </ul>
      </div>
    )
  }
}

export default Nav
