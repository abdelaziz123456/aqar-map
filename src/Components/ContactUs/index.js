import FormContainer from "../FormContainer" 
import InputFiled from "../InputFiled";
import contact from '../../images/contact.png'
function ContactUs(){

    return(
        <div className='contact-us d-flex justify-content-between my-5'>

            <div className="left">
            <h3>Need Help?</h3>
            <p>Phone</p>
            <p className="fw-bold">
                +201158793928
            </p>
            <p>Email</p>
            <p className="fw-bold">
                abdelazizmohamed12121@gmail.com
            </p>
            <p>Address</p>
            <p className="fw-bold">
                Shoubra Elkhema, Cairo,Egypt
            </p>
            </div>
            <div className='p-5'>
                <img src={contact}  className="img-fluid" />
            </div>
            <FormContainer header={'Send email'}>
               <InputFiled label={'Name'} id={'name'} placeHolder={'enter your name'} type={'text'}/>

               <InputFiled label={'Email'} id={'email'} placeHolder={'enter your email'} type={'email'}/>
               <label htmlFor='message' className='my-2'>message</label>
               <textarea className='form-control' id='message' placeholder='enter your message'></textarea>
               <div className="d-flex my-3">
               <input type="checkbox" name="policy" id="policy"  className='mt-2 me-3'/>
               <label htmlFor="policy">I agree privacy policy</label>

               </div>

               <button className="btn  form-button">
                   Send Message
               </button>

               

            </FormContainer>

        </div>
    )
}

export default ContactUs