import FormContainer from "../FormContainer";
import InputFiled from "../InputFiled";
import './index.scss'
import {Link} from 'react-router-dom'

function SignIn(){
    return(
        <div className='sign-in'>
            <FormContainer header={'SIGN IN'}>
            <InputFiled id={'email1'} type={'email'} label={'Email'} placeHolder={'enter your email'}/>
            <InputFiled id={'pass1'} type={'password'} label={'Password'} placeHolder={'enter your password'}/>
            <div className="d-flex ">
                <div  className=' me-5'>
                <input type="checkbox" name="" id="checkBox1" className=' me-1 mt-1 ' />
                <label htmlFor="checkBox1" >Remember Me</label>

                </div>
                <div>
                    <Link to='/forget-password' className='text-decoration-none text-secondary '>Forget Password</Link>
                </div>
                
            </div>

            <button className="btn my-3  form-button  ">
                Sign in
            </button>
            
            <p className='mb-0'> Have No Account?</p>

            <Link to='/sign-up' className="btn form-button my-3">
                Create An Account
            </Link>

            

            
                
            </FormContainer>

        </div>
    )
}
export default SignIn;