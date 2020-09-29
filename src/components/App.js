import React,{useState} from 'react';
// importing rect-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

// importing Tooltip component
import Tooltip from './Tooltip';


function App() {
  const [position, setPosition] = useState("");
  const handleSelect=(e)=>{
    console.log(e);
    setPosition(e);
  }
  return (
    <div className='App'>

      <div className='App__github'>
        <a href='https://github.com/rks107/Tooltip'>
          <img
            src='https://www.flaticon.com/svg/static/icons/svg/1051/1051377.svg'
            alt='GithubImage'
            height='50px'
          />
        </a>
      </div>

      <p className="App__toolTip">Select Tool-Tip Position From Below Dropdown:</p>

      <DropdownButton
        alignRight
        title='Dropdown'
        id='dropdown-menu-align-right'
        onSelect={handleSelect}>
        <Dropdown.Item eventKey='right'>Right</Dropdown.Item>
        <Dropdown.Item eventKey='left'>Left</Dropdown.Item>
        <Dropdown.Item eventKey='top'>Top</Dropdown.Item>
        <Dropdown.Item eventKey='bottom'>Bottom</Dropdown.Item>
      </DropdownButton>

      <Tooltip position={position} />
      
    </div>
  );
}

export default App;
