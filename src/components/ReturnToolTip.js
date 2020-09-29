import React, { Component } from 'react';

class ReturnToolTip extends Component {
    render() {
        const {position} = this.props;
        console.log(position);
        if (position === "top") {
          return (
            <div className='toolTip' style={{ bottom: "30px" , left: "18px"}}>
              File Size : 50MB
            </div>
          );
        } else if (position === "left") {
          return (
            <div className='toolTip' style={{ right: "130px" , top: "10px"}}>
              File Size : 50MB
            </div>
          );
        } else if (position === "bottom") {
          return (
            <div className='toolTip' style={{ top: "55px", left: "18px" }}>
              File Size : 50MB
            </div>
          );
        } else {
          return (
            <div className='toolTip' style={{ left: "160px", top: "10px" }}>
              File Size : 50MB
            </div>
          );
        }
    }
}

export default ReturnToolTip;