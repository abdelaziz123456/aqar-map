import './index.scss';
import React, { useState,useContext } from 'react';
import AuthContext from '../../store/authContext';

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
import { Equalizer, Forum, MonetizationOn,  ExitToApp} from '@material-ui/icons';
import { Trans, useTranslation } from 'react-i18next';


function Header(props){
  const authCtx=useContext(AuthContext);
  let [t,i18n]=useTranslation();

  let history=useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const navbarToggle = () => setIsOpen(!isOpen);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dropDowntoggle = () => setDropdownOpen(prevState => !prevState);


    const logOut=()=>{
      authCtx.logout()
      history.push("/aqar-map");
    }
  
    return (
      <div className='custom-header mb-3'>
        <Navbar color="white" light expand="md">
          <NavbarBrand className='nav-icon'><Link exact to='/aqar-map'><span>{t('aqar')}</span>-{t('map')}</Link>  </NavbarBrand>
          <NavbarToggler onClick={navbarToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className={`d-flex justify-content-between w-100`} navbar>


            <div className={`d-flex empty `} >

              </div>
              <div className='d-flex '>
                <div className="nav-item">
                  <Link to='/sell' className="nav-link"><Trans>sell</Trans></Link>
                </div>
                <div className="nav-item">
                  <Link to='/buy' className="nav-link"><Trans>Buy</Trans></Link>
                </div>
                <div className="nav-item">
                  <Link to='/rent' className="nav-link"><Trans>Rent</Trans></Link>
                </div>
                <div className="nav-item">
        
                  
                <Dropdown isOpen={dropdownOpen} toggle={dropDowntoggle} >
                <DropdownToggle caret>
                  <Trans>Language</Trans>  
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={()=>{i18n.changeLanguage('ar')}}> <Trans>AR</Trans> </DropdownItem>
                  <DropdownItem onClick={()=>{i18n.changeLanguage('en')}}> <Trans>EN</Trans> </DropdownItem>
                 
                  
                </DropdownMenu>
              </Dropdown>
              
                </div>

              </div>
              <div>
              <div className="nav-item">

               


              {!authCtx.isLoggedIn ?
              

              //  unlogged case 

              
              <Link to='/sign-in' className="nav-link btn  "><Trans>Sign Up / In</Trans> </Link> 

              
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