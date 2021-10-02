import FormContainer from "../FormContainer";
import InputFiled from "../InputFiled";
import {Link} from 'react-router-dom'

function ForgetPassword(){
    return(
        <FormContainer header={'FORGOT PASSWORD'}>
            <p>
            Enter the email address associated with your account and we will email you a link to reset your password.
            </p>
            <InputFiled label={'Email'} type={'email'} id={'email1'} placeHolder={'Email'}/>

            <Link to='enter-password' className="btn form-button">
                Send Reset Link
            </Link>

        </FormContainer>
    )
}

export default ForgetPassword