import React from 'react';
import './index.scss';
import profile from '../../images/profile.jpg'
import { Trans, useTranslation } from 'react-i18next';
export default function AccountDetails() {
    let [t,i18n]=useTranslation();
    return (
        <div className={`account-details ${i18n.language==='ar' ? 'rtl' : 'ltr'}`}>
            <h2 className='fw-bold mb-5'><Trans>My Profile</Trans> </h2>
            <div className="row">


                <div className="col-12 col-sm-6 col-md-3 my-2">
                    <h6 className='fw-bold'><Trans></Trans> </h6>
                    <img src={profile} alt="profile" className="img-fluid mt-2" />

                    <div className="form-group my-3">
                        <input type="file" className="form-control-file" placeholder="Your label here."/>
                    </div>


                </div>


                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column my-2">
                <h6 className='fw-bold'><Trans>Profile details</Trans> </h6>
                
                <div className="form-group">
                    <label htmlFor="name"><Trans>Name</Trans> </label>
                    <input type="text" className='form-control' id='name' />
                </div>

                <div className="form-group">
                    <label htmlFor="phone"><Trans>Phone Number</Trans> </label>
                    <input type="tel" className='form-control' id='phone' />
                </div>


                <div className="form-group">
                    <label htmlFor="facebook"><Trans>Facebook(optional)</Trans> </label>
                    <input type="text" className='form-control' id='facebook' />
                </div>

                <div className="form-check my-3">
                    
                    <input type="checkbox" className='form-check-input' id='check' />

                    <label htmlFor="check"><Trans>send data for Email</Trans> </label>
                </div>

                <button className="btn ">
                  <Trans>Save changes</Trans>  
                </button>

                </div>


                <div className="col-12 col-sm-6 col-md-3  d-flex flex-column my-2 ">
                    
                <h6 className='fw-bold text-white'><Trans>Profile details</Trans> </h6>
                
                <div className="form-group">
                    <label htmlFor="email"><Trans>Email</Trans> </label>
                    <input type="email" className='form-control' id='email' />
                </div>


                <div className="form-group ">
                    <label htmlFor="ssn"><Trans>SSN  (optional)</Trans> </label>
                    <input type="text" className='form-control' id='ssn' />
                </div>



                </div>





                <div className="col-12 col-sm-6 col-md-3  d-flex flex-column my-2">
                <h6 className='fw-bold '><Trans>change password</Trans> </h6>

                <div className="form-group">
                    <label htmlFor="pass1"><Trans>Old password</Trans>  </label>
                    <input type="password" className='form-control' id='pass1' />
                </div>

                <div className="form-group">
                    <label htmlFor="pass2"><Trans>New password</Trans>  </label>
                    <input type="password" className='form-control' id='pass2' />
                </div>

                <div className="form-group">
                    <label htmlFor="pass3"><Trans>Confirm Password</Trans>  </label>
                    <input type="password" className='form-control' id='pass3' />
                </div>

                <button className="btn mt-5 ">
                <Trans>change password</Trans>
                </button>



                </div>
            </div>
        </div>
    )
}
