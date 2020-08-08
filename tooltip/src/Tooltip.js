import React, { Component } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './index.css';


class Greeting extends Component {
    render(){
        const value = this.props.value;
        return (
            <div className="tippy">
            <h4>You selected {this.props.value}</h4>
            <hr/>
            <br/>
             <Tippy placement={value} content={<span style={{color:'orange'}}> File Size : 50MB</span>}>
                <button>Download</button>
             </Tippy>
            </div>
          );
    }
  
}

export default Greeting;