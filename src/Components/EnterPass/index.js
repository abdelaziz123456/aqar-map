import FormContainer from "../FormContainer";
import InputField from "../InputField";

function EnterPass(){
    return(
        <FormContainer header={'ENTER PASSWORD'}>


        <InputField type={'password'} label={'Password'} id={'passcon1'} placeHolder={'enter password'}/>
        <InputField type={'password'} label={'Confirm Password'} id={'passcon2'} placeHolder={'Confirm password'}/>
        <div className="btn form-button my-3">
            change password
        </div>

        </FormContainer>
    )
}

export default EnterPass;