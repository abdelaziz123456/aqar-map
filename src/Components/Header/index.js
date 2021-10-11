import './index.scss';
import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem 
 
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Equalizer, Forum, MonetizationOn, PersonPin, RecordVoiceOverRounded } from '@material-ui/icons';
function Header(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dropDowntoggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
      <div className='custom-header mb-3'>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/aqar-map" className='nav-icon'><span>Aqar</span>-Map</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='d-flex justify-content-between w-100' navbar>


            <div className='d-flex empty'>

              </div>
              <div className='d-flex '>
                <div className="nav-item">
                  <Link to='/sell' className="nav-link">Sell</Link>
                </div>
                <div className="nav-item">
                  <Link to='/buy' className="nav-link">Buy</Link>
                </div>
                <div className="nav-item">
                  <Link to='/rent' className="nav-link">Rent</Link>
                </div>
                <div className="nav-item">
        
                  
                <Dropdown isOpen={dropdownOpen} toggle={dropDowntoggle} >
                <DropdownToggle caret>
                  Other Services
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem ><Equalizer color="action"/> Valuations</DropdownItem>
                  <DropdownItem><MonetizationOn color="action"/> Price Guide</DropdownItem>
                  <DropdownItem > <Forum color="action"/> Ask The Neighbors</DropdownItem>
                  <DropdownItem ><PersonPin color="action"/> Top Agents</DropdownItem>
                  
                  <DropdownItem><RecordVoiceOverRounded color="action"/> Advice & Tips</DropdownItem>
                  
                </DropdownMenu>
              </Dropdown>
              
                </div>

              </div>
              <div>
              <div className="nav-item">
                  <Link to='/sign-in' className="nav-link btn  ">Sign Up / In</Link>
                </div>

              </div>
              
            

            
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
}


export default Header