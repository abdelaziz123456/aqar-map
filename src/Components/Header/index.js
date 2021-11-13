import './index.scss';
import React, { useState } from 'react';
import profile from '../../images/profile.jpg'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem 
 
} from 'reactstrap';
import { Link ,useHistory} from 'react-router-dom';
import { Equalizer, Forum, MonetizationOn, PersonPin, RecordVoiceOverRounded , ExitToApp} from '@material-ui/icons';


function Header(props){

  let history=useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const navbarToggle = () => setIsOpen(!isOpen);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dropDowntoggle = () => setDropdownOpen(prevState => !prevState);


    const logOut=()=>{
      props.setIsLogged(false);
      history.push("/aqar-map");
    }
  
    return (
      <div className='custom-header mb-3'>
        <Navbar color="white" light expand="md">
          <NavbarBrand className='nav-icon'><Link exact to='/aqar-map'><span>Aqar</span>-Map</Link>  </NavbarBrand>
          <NavbarToggler onClick={navbarToggle} />
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

               


              {!props.isLogged ?
              

              //  unlogged case 

              
              <Link to='/sign-in' className="nav-link btn  ">Sign Up / In</Link> 

              
              :

              //  logged case
              <div >
                
                <Link to="/account-details"  >
                <img className='rounded-circle' width="50" height='40' src={profile}></img> 
              </Link> 

              <button className='ms-1 btn btn-sm' onClick={logOut}>
                <ExitToApp/>
              </button>

              </div>
               }  

               

             
                </div>

              </div>
              
            

            
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
}


export default Header