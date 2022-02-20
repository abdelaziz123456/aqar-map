import FormContainer from "../FormContainer" 
import InputField from "../InputField";
import contact from '../../images/contact.png';
import { Trans, useTranslation } from 'react-i18next';
function ContactUs(){
    let [t,i18n]=useTranslation();
    return(
        <div className={`contact-us d-flex justify-content-between my-5 ${i18n.language==='ar' ? 'rtl fw-bolder' : 'ltr'}`}>

            <div className="left">
            <h3><Trans>Need Help?</Trans> </h3>
            <p><Trans>Phone</Trans> </p>
            <p className="fw-bold">
                +201158793928
            </p>
            <p><Trans>Email</Trans> </p>
            <p className="fw-bold">
                abdelazizmohamed12121@gmail.com
            </p>
            <p><Trans>Address</Trans> </p>
            <p className="fw-bold">
                <Trans>Shoubra , Cairo,Egypt</Trans>
            </p>
            </div>
            <div className='p-5'>
                <img src={contact}  className="img-fluid" />
            </div>
            <FormContainer header={t('Send email')}>
               <InputField label={t('Name')} id={'name'}  type={'text'}/>

               <InputField label={t('Email')} id={'email'}  type={'email'}/>
               <label htmlFor='message' className='my-2'>{t('message')}</label>
               <textarea className='form-control' id='message' ></textarea>
               <div className="d-flex my-3">
               <input type="checkbox" name="policy" id="policy"  className='mt-2 me-3'/>
               <label htmlFor="policy"><Trans>I agree privacy policy</Trans> </label>

               </div>

               <button className="btn  form-button">
                   <Trans>Send Message</Trans> 
               </button>

               

            </FormContainer>

        </div>
    )
}

export default ContactUs