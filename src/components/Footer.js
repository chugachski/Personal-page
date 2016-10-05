import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {

  render() {
    return(
      <div className="footer">
        <span><p>&copy; 2016 NATHAN A SMITH</p></span>
        <span className="split"><p>/</p></span>
        <span className=""><p>BASED IN DENVER, CO</p></span>
        <span className="split"><p>/</p></span>
        <span><p>BUILT WITH REACT</p></span>
      </div>
    )
  }
}

export default Footer
