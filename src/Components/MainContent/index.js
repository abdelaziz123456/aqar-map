import './index.scss'

import cairo from '../../images/cairo.jpg'
import giza from '../../images/Giza.jpg'
import alex from '../../images/alex.jpg'
import alameen from '../../images/3alameen.jpg'
import aswan from '../../images/aswan.jpg';
import dahab from '../../images/dahab.jpg';
import sharm from '../../images/sharm.jpg';

import Slider from '../Slider/index'
import Discover from '../Discover';
import { Trans, useTranslation } from 'react-i18next';

function MainContent(){
    let [t,i18n]=useTranslation();
    return(
        <div className='main-content'>



            <div className={`content-header ${i18n.language==='ar' ? 'rtl' : 'ltr'}` }>
                <div className="left pe-3 py-5 ">
                    <p  className='fw-bold'>
                    <Trans>Aqar Map is</Trans>     
                    </p>
                    <div className="h1 ">
                        <Trans>The real estate marketplace</Trans> 
                    </div>
                    <p className='ps-2' >
                    <Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans>
                    
                    </p>
                </div>
                <div className="right">
                   
                </div>
            </div>







            <div className="cities-section my-5 w-100 ">
                
                <p className='line'></p>
                <h4 className='mb-5 fw-bold'><Trans>Explore our neighbourhoods</Trans> </h4>
                <div  className='w-100'>


                    <div className="row w-100">
                        <div className="col-12  col-sm-4   position-relative my-2">
                            <img className='img-fluid' src={cairo} alt="cairo" />

                            <div className="floated">
                                <h6 className='text-bolder'>
                                   <Trans>Cairo</Trans> 
                                </h6>
                                <p><Trans>Egypt</Trans> </p>
                            </div>
                        </div>
                        <div className="col-12  col-sm-4 position-relative my-2">
                        <img className='img-fluid' src={giza}  alt="giza" />
                        <div className="floated">
                                <h6 className='text-bolder'>
                                <Trans>Giza</Trans>  
                                </h6>
                                <p><Trans>Egypt</Trans> </p>
                            </div>
                        
                        </div>
                        <div className="col-12  col-sm-4 position-relative my-2">
                        <img className='img-fluid' src={alex} alt="alex" />
                        <div className="floated">
                                <h6 className='text-bolder'>
                                <Trans>Alex</Trans> 
                                </h6>
                                <p><Trans>Egypt</Trans></p>
                            </div>
                        </div>
                    </div>


                    <div className="row w-100 ">
                        <div className="col-12  col-sm-4 position-relative my-2">

                        <img className='img-fluid' src={aswan} alt="aswan" />
                        <div className="floated">
                                <h6 className='text-bolder'>
                                <Trans>Luxur</Trans>  
                                </h6>
                                <p><Trans>Egypt</Trans></p>
                            </div>
                        
                            

                        </div>
                        <div className="col-12  col-sm-8 position-relative my-2">

                        <img className='img-fluid w-100 ' src={dahab} alt="dahab" />
                        <div className="floated">
                                <h6 className='text-bolder'>
                                <Trans>Dahab</Trans>   
                                </h6>
                                <p><Trans>Egypt</Trans></p>
                            </div>

                        </div>
                        
                    </div>


                    <div className="row w-100">
                        <div className="col-12  col-sm-8 position-relative my-2">
                        <img className='img-fluid w-100 ' src={sharm} alt="sharm" />
                        <div className="floated">
                                <h6 className='text-bolder'>
                                <Trans>Sharm</Trans>  
                                </h6>
                                <p><Trans>Egypt</Trans></p>
                            </div>
                        </div>
                        <div className="col-12  col-sm-4 position-relative my-2">
                            <img className='img-fluid w-100 ' src={alameen} alt="alameen" />
                            <div className="floated">
                                <h6 className='text-bolder'>
                                <Trans>Alamen</Trans>   
                                </h6>
                                <p><Trans>Egypt</Trans></p>
                            </div>
                            </div>
                        
                    </div>
                </div>
                
            </div>


           <Discover/>
        <div className="my-5">
        <Slider />

        </div>

       
            










        </div>
    )
}

export default MainContent