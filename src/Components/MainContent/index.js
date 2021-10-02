import './index.scss'

import cairo from '../../images/cairo.jpg'
import giza from '../../images/Giza.jpg'
import alex from '../../images/alex.jpg'
import alameen from '../../images/3alameen.jpg'
import aswan from '../../images/aswan.jpg';
import dahab from '../../images/dahab.jpg';
import sharm from '../../images/sharm.jpg';

import Slider from '../Slider/index'

function MainContent(){
    return(
        <div className='main-content'>



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







            <div className="cities-section my-5 w-100 ">
                
                <p className='line'></p>
                <h4 className='mb-5'>Explore our neighbourhoods</h4>
                <div  className='w-100'>


                    <div className="row w-100">
                        <div className="col-12  col-sm-4   position-relative my-2">
                            <img className='img-fluid' src={cairo} alt="cairo" />

                            <div className="floated">
                                <h6 className='text-bolder'>
                                    Cairo
                                </h6>
                                <p>Egypt</p>
                            </div>
                        </div>
                        <div className="col-12  col-sm-4 position-relative my-2">
                        <img className='img-fluid' src={giza}  alt="giza" />
                        <div className="floated">
                                <h6 className='text-bolder'>
                                    Giza
                                </h6>
                                <p>Egypt</p>
                            </div>
                        
                        </div>
                        <div className="col-12  col-sm-4 position-relative my-2">
                        <img className='img-fluid' src={alex} alt="alex" />
                        <div className="floated">
                                <h6 className='text-bolder'>
                                   Alex
                                </h6>
                                <p>Egypt</p>
                            </div>
                        </div>
                    </div>


                    <div className="row w-100 ">
                        <div className="col-12  col-sm-4 position-relative my-2">

                        <img className='img-fluid' src={aswan} alt="aswan" />
                        <div className="floated">
                                <h6 className='text-bolder'>
                                    Luxur
                                </h6>
                                <p>Egypt</p>
                            </div>
                        
                            

                        </div>
                        <div className="col-12  col-sm-8 position-relative my-2">

                        <img className='img-fluid w-100 ' src={dahab} alt="dahab" />
                        <div className="floated">
                                <h6 className='text-bolder'>
                                    Dahab
                                </h6>
                                <p>Egypt</p>
                            </div>

                        </div>
                        
                    </div>


                    <div className="row w-100">
                        <div className="col-12  col-sm-8 position-relative my-2">
                        <img className='img-fluid w-100 ' src={sharm} alt="sharm" />
                        <div className="floated">
                                <h6 className='text-bolder'>
                                    Sharm
                                </h6>
                                <p>Egypt</p>
                            </div>
                        </div>
                        <div className="col-12  col-sm-4 position-relative my-2">
                            <img className='img-fluid w-100 ' src={alameen} alt="alameen" />
                            <div className="floated">
                                <h6 className='text-bolder'>
                                    Alamen
                                </h6>
                                <p>Egypt</p>
                            </div>
                            </div>
                        
                    </div>
                </div>
                
            </div>


            <div className="discover-section my-5">
                <div className="header my-5">

                <p className='line'></p>
                <h4>Discover RealEstate trends in market</h4>
                <p >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                </p>

                </div>
                <div className="row">
                    <div className="col-12  col-md-3">

                        <p className='number'>01.</p>
                        <div className="fw-bold mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                        <p>Adipiscing elit</p>

                    </div>
                    <div className="col-12  col-md-3">
                    
                    <p className='number'>02.</p>
                        <div className="fw-bold mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                        <p>Adipiscing elit</p>

                    </div>
                    <div className="col-12  col-md-3">
                        <p className='number'>03.</p>
                        <div className="fw-bold mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                        <p>Adipiscing elit</p>

                    </div>
                    <div className="col-12  col-md-3">
                    <p className='number'>04.</p>
                        <div className="fw-bold mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                        <p>Adipiscing elit</p>
                        
                    </div>
                </div>
            
            </div>
        <div className="my-5">
        <Slider />

        </div>

       
            










        </div>
    )
}

export default MainContent