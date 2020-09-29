import React, { Component } from 'react';
import ReturnToolTip from './ReturnToolTip';



class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      showToolTip: false
    };
  }

  handleonMouseEnter = () => {
    this.setState({
      showToolTip: true,
    });
  };

  handleonMouseLeave = () => {
      this.setState({
        showToolTip: false,
      });
  }

  render() {
    const {position} = this.props;
    const { showToolTip } = this.state;

 
      return (
        <div className='tippy'>
          <h4>
            You selected <span>{position}</span>
          </h4>
          <hr />
          <br />

          <button
            style={{ borderRadius: "8px" }}
            onMouseEnter={this.handleonMouseEnter}
            onMouseLeave={this.handleonMouseLeave}>
            Download
          </button>

          {showToolTip ? <ReturnToolTip position={position} /> : <p></p>}
        </div>
      );
  }
}


export default Greeting;