import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Tooltip from './Tooltip';


function App() {
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  return (
    <div className="App container">
      
      <DropdownButton
      alignRight
      title="Dropdown"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="right">Right</Dropdown.Item>
              <Dropdown.Item eventKey="left">Left</Dropdown.Item>
              <Dropdown.Item eventKey="top">Top</Dropdown.Item>
              <Dropdown.Item eventKey="bottom">Bottom</Dropdown.Item>
      </DropdownButton>
      <hr></hr>
      
      <Tooltip value = {value} />
    </div>
  );
}

export default App;
