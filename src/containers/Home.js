import React, { Component } from 'react';
import '../css/Home.css';
import Nav from '../components/Nav';
import HomeContent from '../components/HomeContent';
import Arrow from '../components/Arrow';

class Home extends Component {

  render() {
    return(
      <div className="home-background">
        <a name="home"></a>
        <Nav />
        <div className="pad"></div>
        <HomeContent />
        <Arrow />
      </div>
    )
  }
}

export default Home


// var multi = 0;
// handleSnap() {
//   let y = (window.innerHeight / 3) + (window.innerHeight * multi);
//   let scroll = window.innerHeight + (window.innerHeight * multi);
//   console.log('sy:', window.scrollY);
//   console.log('y:', y);
//   if (window.scrollY >= y) {
//     multi += 1;
//     scrollTo(0,scroll)
//   }
// }
