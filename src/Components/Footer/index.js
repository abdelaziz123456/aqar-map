import { Facebook, Instagram, LinkedIn, YouTube } from '@material-ui/icons'
import  './index.scss';
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <div className='footer d-flex
        justify-content-between flex-wrap my-2 py-3'>
            <div>
                <Link to="/aqar-map" className="main-logo">
                <span>Aqar</span>-Map
                </Link>
                <p>The real estate marketplace</p>
                <div className='d-flex justify-content-between icons mb-5'>
                     <a href='https://www.instagram.com/aqarmap/' className='icon'><Instagram /></a> 
                    <a href='https://www.facebook.com/aqarmapcom' className='icon'><Facebook /> </a> 
                   <a href='https://www.youtube.com/c/aqarmapcom' className='icon'> <YouTube /></a> 
                </div>
            </div>
            <div>
                <Link exact to="/aqar-map" style={{'text-decoration':'none'}} >
                <p className="header">
                    AqarMap
                </p>
                </Link>
                
                <p className="line">
                    
                </p>
                <p>
                <Link className='text-decoration-none text-secondary'exact to="/about">About</Link>

                </p>
                <p>
                <Link className='text-decoration-none text-secondary' exact to="/contact-us">Contact Us</Link>

                </p>
                
                <p>
                <Link className='text-decoration-none text-secondary' exact to="/privacy">Privacy</Link>

                </p>
                
            </div>
            <div>
            
                <Link to="/sell" style={{'text-decoration':'none'}} >
                <p className="header">
                    Sell
                </p>
                </Link>
                <p className="line">

                </p>
                <p >
                    Apartments
                </p>
                <p >
                    Houses
                </p>
                <p >
                    Offices
                </p>
                <p >
                    Lands
                </p>
            </div>
            <div>
            <Link to="/buy" style={{'text-decoration':'none'}} >
                <p className="header">
                    Buy
                </p>
                </Link>
                <p className="line">
                    
                </p>
                <p >
                    Apartments
                </p>
                <p >
                    Houses
                </p>
                <p >
                    Offices
                </p>
                <p >
                    Lands
                </p>
            </div>
            <div>
            <p className="header">
                    Customers
                </p>
                <p className="line">
                    
                </p>
                <p >
                    For home sellers
                </p>
                <p >
                    For real estate agents
                </p>
            </div>
        </div>
    )
}

export default Footer