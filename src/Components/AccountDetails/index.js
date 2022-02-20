import React from 'react';
import './index.scss';
import profile from '../../images/profile.jpg'
import { Trans, useTranslation } from 'react-i18next';
export default function AccountDetails() {
    let [t,i18n]=useTranslation();
    return (
        <div className={`account-details ${i18n.language==='ar' ? 'rtl' : 'ltr'}`}>
            <h2 className='fw-bold mb-5'>My Profile</h2>
            <div className="row">


                <div className="col-12 col-sm-6 col-md-3 my-2">
                    <h6 className='fw-bold'>Photo profile</h6>
                    <img src={profile} alt="profile" className="img-fluid mt-2" />

                    <div className="form-group my-3">
                        <input type="file" className="form-control-file" />
                    </div>


                </div>


                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column my-2">
                <h6 className='fw-bold'>Profile details</h6>
                
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control' id='name' />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" className='form-control' id='phone' />
                </div>


                <div className="form-group">
                    <label htmlFor="facebook">Facebook(optional)</label>
                    <input type="text" className='form-control' id='facebook' />
                </div>

                <div className="form-check my-3">
                    
                    <input type="checkbox" className='form-check-input' id='check' />

                    <label htmlFor="check">send data for Email</label>
                </div>

                <button className="btn ">
                    Save changes
                </button>

                </div>


                <div className="col-12 col-sm-6 col-md-3  d-flex flex-column my-2 ">
                    
                <h6 className='fw-bold text-white'>Profile details</h6>
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' id='email' />
                </div>


                <div className="form-group ">
                    <label htmlFor="ssn">SSN  (optional)</label>
                    <input type="text" className='form-control' id='ssn' />
                </div>



                </div>





                <div className="col-12 col-sm-6 col-md-3  d-flex flex-column my-2">
                <h6 className='fw-bold '>Change password</h6>

                <div className="form-group">
                    <label htmlFor="pass1">Old password </label>
                    <input type="password" className='form-control' id='pass1' />
                </div>

                <div className="form-group">
                    <label htmlFor="pass2">New password </label>
                    <input type="password" className='form-control' id='pass2' />
                </div>

                <div className="form-group">
                    <label htmlFor="pass3">Confirm password </label>
                    <input type="password" className='form-control' id='pass3' />
                </div>

                <button className="btn mt-5 ">
                     change password
                </button>



                </div>
            </div>
        </div>
    )
}
