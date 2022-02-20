import { Facebook, Instagram, LinkedIn, YouTube } from '@material-ui/icons'
import  './index.scss';
import {Link} from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next';

function Footer(){
    let [t,i18n]=useTranslation();
    return(
        <div className='footer d-flex
        justify-content-between flex-wrap my-2 py-3'>
            <div>
                <Link to="/aqar-map" className="main-logo">
                <span>{<Trans>aqar</Trans>}</span>-{<Trans>map</Trans> }
                </Link>
                <p><Trans>The real estate marketplace</Trans></p>
                <div className='d-flex justify-content-between icons mb-5'>
                     <a href='https://www.instagram.com/aqarmap/' className='icon'><Instagram /></a> 
                    <a href='https://www.facebook.com/aqarmapcom' className='icon'><Facebook /> </a> 
                   <a href='https://www.youtube.com/c/aqarmapcom' className='icon'> <YouTube /></a> 
                </div>
            </div>
            <div>
                <Link exact to="/aqar-map" style={{'text-decoration':'none'}} >
                <p className="header">
                   <Trans>AqarMap</Trans> 
                </p>
                </Link>
                
                <p className="line">
                    
                </p>
                <p>
                <Link className='text-decoration-none text-secondary'exact to="/about"><Trans>About</Trans> </Link>

                </p>
                <p>
                <Link className='text-decoration-none text-secondary' exact to="/contact-us"><Trans> Contact Us</Trans></Link>

                </p>
                
                <p>
                <Link className='text-decoration-none text-secondary' exact to="/privacy"><Trans>Privacy</Trans> </Link>

                </p>
                
            </div>
            <div>
            
                <Link to="/sell" style={{'text-decoration':'none'}} >
                <p className="header">
                    <Trans>sell</Trans>      
                </p>
                </Link>
                <p className="line">

                </p>
                <p >
                <Trans>Apartments</Trans>
                </p>
                <p >
                   <Trans>Houses</Trans> 
                </p>
                <p >
                   <Trans>Offices</Trans> 
                </p>
                <p >
                   <Trans>Lands</Trans> 
                </p>
            </div>
            <div>
            <Link to="/buy" style={{'text-decoration':'none'}} >
                <p className="header">
                  <Trans>Buy</Trans>  
                </p>
                </Link>
                <p className="line">
                    
                </p>
                <p >
                <Trans>Apartments</Trans>
                </p>
                <p >
                <Trans>Houses</Trans> 
                </p>
                <p >
                <Trans>Offices</Trans> 

                </p>
                <p >
                <Trans>Lands</Trans> 

                </p>
            </div>
            <div>
            <p className="header">
                   <Trans>Customers</Trans> 
                </p>
                <p className="line">
                    
                </p>
                <p >
                   <Trans>For home sellers</Trans> 
                </p>
                <p >
                    <Trans>For real estate agents</Trans> 
                </p>
            </div>
        </div>
    )
}

export default Footer