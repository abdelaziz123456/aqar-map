import FormContainer from "../FormContainer";
import InputField from "../InputField";
import './index.scss'
import {Link} from 'react-router-dom'

function SignIn(props){
    const signHandler=(e)=>{
        e.preventDefault();
        props.setIsLogged(true)
        
    }
    return(
        
        
            <form className='sign-in' onSubmit={signHandler}>

{ !props.isLogged ? <>
            <FormContainer header={'SIGN IN'}>

               <InputField id={'email1'} type={'email'} label={'Email'} placeHolder={'enter your email'} required/>
            <InputField id={'pass1'} type={'password'} label={'Password'} placeHolder={'enter your password'} required/>
            <div className="d-flex ">
                <div  className=' me-5'>
                <input type="checkbox" name="" id="checkBox1" className=' me-1 mt-1 ' />
                <label htmlFor="checkBox1" >Remember Me</label>

                </div>
                <div>
                    <Link to='/forget-password' className='text-decoration-none text-secondary '>Forget Password</Link>
                </div>
                
            </div>

            <button className="btn my-3  form-button  " type='submit'>
                Sign in
            </button>
            
            <p className='mb-0'> Have No Account?</p>

            <Link to='/sign-up' className="btn form-button my-3">
                Create An Account
            </Link>

            

            
               
            
            </FormContainer>
            </> :<FormContainer >
                <h4 className='form-button p-2'>Logged in Successfully</h4>
                <Link to="/account-details" className='text-decoration-none text-secondary my-2'>
                <h6>Complete your Information &gt;	&gt;	</h6>
                </Link>
            </FormContainer>  }
        </form> 
        
    )
}
export default SignIn;