import FormContainer from "../FormContainer";
import InputField from "../InputField";
import { Trans, useTranslation } from 'react-i18next';
function EnterPass(){
    let [t,i18n]=useTranslation();

    return(
        <FormContainer header={t('ENTER PASSWORD')}>


        <InputField type={'password'} label={t('Password')} id={'passcon1'} />
        <InputField type={'password'} label={t('Confirm Password')} id={'passcon2'} />
        <div className="btn form-button my-3">
            <Trans>change password</Trans> 
        </div>

        </FormContainer>
    )
}

export default EnterPass;