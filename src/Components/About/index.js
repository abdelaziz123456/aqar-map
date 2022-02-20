import rect from '../../images/Rectangle.png'
import Discover from '../Discover';
import ContactUs from '../ContactUs/index'
import { Trans, useTranslation } from 'react-i18next';

import './index.scss'
function About(){
    let [t,i18n]=useTranslation();

    return(
        <div className={`about ${i18n.language==='ar' ? 'rtl' : 'ltr'}` }>
            <div className={`content-header` }>
                <div className="left pe-3 py-5">
                    <p >
                        <Trans>Aqar Map is</Trans>
                    </p>
                    <div className="h1 ">
                        <Trans>The real estate marketplace</Trans>
                    
                    </div>
                    <p>
                    <Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans>
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
                        <h4><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans></h4>

                        <small ><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans> </small>
                    </div>
                </div>
                <div className="row"> 
                    <div className=" col-12 col-md-4 my-2">
                    <small ><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans> </small>

                    </div>
                    <div className=" col-12 col-md-4 my-2">
                    <small ><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans> </small>

                    </div>
                    <div className=" col-12 col-md-4 my-2">
                    <small ><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans><Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans> </small>

                    </div>
                </div>
            </div>


            <Discover/>

            <ContactUs/>









        </div>
    )
}

export default About;