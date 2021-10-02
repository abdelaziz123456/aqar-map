import { Facebook, Instagram, LinkedIn } from '@material-ui/icons'
import  './index.scss'

function Footer(){
    return(
        <div className='footer d-flex
        justify-content-between flex-wrap my-2 py-3'>
            <div>
                <a href="#" className="main-logo">
                <span>Aqar</span>-Map
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className='d-flex justify-content-between icons mb-5'>
                    <Instagram className='icon'/>
                    <Facebook className='icon'/>
                    <LinkedIn className='icon'/>
                </div>
            </div>
            <div>
                <p className="header">
                    DigitalEState
                </p>
                <p >
                    About
                </p>
                <p >
                    Contact us
                </p>
            </div>
            <div>
            <p className="header">
                    Buy
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
                    Rent
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