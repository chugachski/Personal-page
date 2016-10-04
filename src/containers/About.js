import React, { Component } from 'react';
import '../css/About.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import linkedInUrl from '../assets/linkedIn.png';
import gitHubUrl from '../assets/gitHub.png';
import emailUrl from '../assets/email.png';

class About extends Component {

  render() {
    return(
      <div className="about-background">
        <Nav />
        <div className="pad"></div>
        <div className="about-section">
          <div className="about-content">

            <div className="header">
              <h2>CONTACT</h2>
            </div>

            <div className="info">
              <div className="info-wrapper">
                <div className="block">
                  <img className="logo" src={linkedInUrl} alt="LinkedIn Logo"></img>
                  <a href="https://www.linkedin.com/in/nathansmithcodes" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="block">
                  <img className="logo" src={gitHubUrl} alt="GitHub Logo"></img>
                  <a href="https://github.com/chugachski" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className="block">
                  <img className="logo" src={emailUrl} alt="Email Icon"></img>
                  <a href="mailto:natesmith.copper@gmail.com">natesmith.copper@gmail.com</a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About
