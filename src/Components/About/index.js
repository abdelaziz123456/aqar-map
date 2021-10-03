import rect from '../../images/Rectangle.png'
import Discover from '../Discover';
import ContactUs from '../ContactUs/index'

import './index.scss'
function About(){
    return(
        <div className="about">
            <div className="content-header">
                <div className="left pe-3 py-5">
                    <p >
                        Aqar Map is
                    </p>
                    <div className="h1 ">
                        The real estate marketplace
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                </div>
                <div className="right">
                   
                </div>
            </div>

            <div className="about-details d-flex flex-column my-5 ">
                <div className="row ">
                    <div className="col-12 col-md-4 my-3">
                        <img src={rect} alt="" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center my-3">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>

                        <small >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit </small>
                    </div>
                </div>
                <div className="row"> 
                    <div className=" col-12 col-md-4 my-2">
                    <small >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit </small>

                    </div>
                    <div className=" col-12 col-md-4 my-2">
                    <small >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit </small>

                    </div>
                    <div className=" col-12 col-md-4 my-2">
                    <small >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit </small>

                    </div>
                </div>
            </div>


            <Discover/>

            <ContactUs/>









        </div>
    )
}

export default About;