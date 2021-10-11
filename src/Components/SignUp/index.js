import FormContainer from "../FormContainer";
import InputFiled from "../InputFiled";
import {Link} from 'react-router-dom';

function SignUp(){
    return(
        <FormContainer header={'CREATE AN ACCOUNT'}>
            <p>type</p>

            <select name="type" className="form-select"  >
                <option value="Provider">Private Owner</option>
                <option value="seller">Freelancer</option>
                <option value="Provider">Compound Developer</option>
                <option value="seller">Exclusive</option>
            </select>
            <InputFiled label={'Email'} placeHolder={'Enter Email'} id={'email3'} type={'email'}/>

            <div className="d-flex ">
            <InputFiled label={'Phone (optional)'} placeHolder={'Enter phone number'} id={'phone'} type={'tel'} className="me-3 "/>

            <InputFiled label={'Name'} placeHolder={'Enter Name'} id={'name'} type={'text'}/>
            </div>


            <div className="d-flex ">
            <InputFiled label={'Password'} placeHolder={'Enter password'} id={'pass3'} type={'password'} className="me-3 "/>

            <InputFiled label={'Confirm Password'} placeHolder={'confirm password'} id={'pass4'} type={'password'}/>
            </div>

            <div className="d-flex mt-3">
            <input type="checkbox" name="" id="agree"  className='mt-2 me-2'/>
            <label htmlFor="agree">I agree to Aqarmap privacy policy and terms of use</label>

            </div>

            <button className="btn form-button my-5">
                Sign Up
            </button>

            <p>Already have an account ? <Link to='/sign-in' className='text-secondary ms-2 '> Sign in</Link></p>
           

        </FormContainer>
    )
}

export default SignUp