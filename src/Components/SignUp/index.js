import FormContainer from "../FormContainer";
import InputField from "../InputField";
import {Link} from 'react-router-dom';
import { useRef, useState } from "react";
import axios from 'axios'

function SignUp(){


    const emailRef=useRef();
    const passRef=useRef();
    const passConfirmRef=useRef();


   const [resultClass,setClass]=useState('');
    const [resultMessage,setMessage]=useState('');


    
    
    const handleSubmit=(e)=>{
       
        e.preventDefault();
        if(passRef.current.value===passConfirmRef.current.value){

            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhe1Vrq0zQ1eo_pAHxPlR_G7gysW7wHkk'
            ,
            {
                email:emailRef.current.value,
                password:passRef.current.value,
                returnSecureToken:true   
            }
            ).then(res=>{
                if(res.ok){
                    setClass('alert alert-success');
                    setMessage('sign up succeded');
                }else{

                }
            })
            
           

        }else{
            alert('passwrods arn\'t the same')
        }
       
    }

    return(
        <form onSubmit={handleSubmit}>
        <FormContainer header={'CREATE AN ACCOUNT'}>
            <p>type</p>

            <select name="type" className="form-select"  >
                <option value="Provider">Private Owner</option>
                <option value="seller">Freelancer</option>
                <option value="Provider">Compound Developer</option>
                <option value="seller">Exclusive</option>
            </select>
            <InputField label={'Email'} placeHolder={'Enter Email'} id={'email3'} type={'email'} ref={emailRef}/>

            <div className="d-flex ">
            <InputField label={'Phone '} placeHolder={'Enter phone number'} id={'phone'} type={'tel'} className="me-3 "/>

            <InputField label={'Name'} placeHolder={'Enter Name'} id={'name'} type={'text'}/>
            </div>


            <div className="d-flex ">
            <InputField label={'Password'} placeHolder={'Enter password'} id={'pass3'} type={'password'} className="me-3 " ref={passRef}/>

            <InputField label={'Confirm Password'} placeHolder={'confirm password'} id={'pass4'} type={'password'} ref={passConfirmRef}/>
            </div>

            <div className="d-flex mt-3">
            <input type="checkbox" name="" id="agree"  className='mt-2 me-2'/>
            <label htmlFor="agree">I agree to Aqarmap privacy policy and terms of use</label>

            </div>

            <button className="btn form-button my-5" type='submit'>
                Sign Up
            </button>

            <div className={resultClass}>
                {resultMessage}
            </div>

            <p>Already have an account ? <Link to='/sign-in' className='text-secondary ms-2 '> Sign in</Link></p>
           

        </FormContainer>
        </form>
    )
}

export default SignUp