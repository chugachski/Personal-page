import React, { Component } from 'react';
import '../css/Arrow.css';

class Arrow extends Component {

  constructor(props) {
    super(props);
    this.state = { isActive: false }
  }

  changeActive() {
    if (this.state.isActive) {
      this.setState({ isActive: false })
    } else {
      this.setState({ isActive: true })
    }
  }

  render() {
    if (this.state.isActive === true) {
    return(
      <div className="arrow-wrapper">
          <div className="scroll"
            onMouseEnter={() => this.changeActive()}
            onMouseLeave={() => this.changeActive()}>
            <p>SCROLL DOWN</p>
          </div>
      </div>
    );
    } else {
      return(
        <div className="arrow-wrapper">
            <div className="arrow"
              onMouseEnter={() => this.changeActive()}
              onMouseLeave={() => this.changeActive()}>
            </div>
        </div>
      );
    }
  }
}

export default Arrow
