import FormContainer from "../FormContainer";
import InputFiled from "../InputFiled";

function EnterPass(){
    return(
        <FormContainer header={'ENTER PASSWORD'}>


        <InputFiled type={'password'} label={'Password'} id={'passcon1'} placeHolder={'enter password'}/>
        <InputFiled type={'password'} label={'Confirm Password'} id={'passcon2'} placeHolder={'Confirm password'}/>
        <div className="btn form-button">
            change password
        </div>

        </FormContainer>
    )
}

export default EnterPass;