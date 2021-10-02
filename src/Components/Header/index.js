import './index.scss';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className='custom-header mb-3'>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/" className='nav-icon'><span>Aqar</span>-Map</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='d-flex justify-content-between w-100' navbar>


            <div className='d-flex empty'>

              </div>
              <div className='d-flex '>
                <div className="nav-item">
                  <a href='#' className="nav-link">Sell</a>
                </div>
                <div className="nav-item">
                  <a href='#' className="nav-link">Buy</a>
                </div>
                <div className="nav-item">
                  <a href='#' className="nav-link">Rent</a>
                </div>

              </div>
              <div>
              <div className="nav-item">
                  <Link to='/sign-in' className="nav-link btn ">Sign Up / In</Link>
                </div>

              </div>
              
            

            
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
}


export default Header