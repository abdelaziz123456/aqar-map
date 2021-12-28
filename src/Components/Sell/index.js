
import { useRef } from 'react';

import InputField from '../InputField';
import FormContainer from '../FormContainer';
import { Link } from 'react-router-dom';
import { add_property } from '../../Actions';
import {useSelector,useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import './index.scss'

function Sell (props){
let history=useHistory()
    let apartments=useSelector(state=>state);
    

    

    const typeRef=useRef();
    const governRef=useRef();
    const forRef=useRef();
    const PayRef=useRef();
    const roomRef=useRef();
    const bathRef=useRef();
    const yearRef=useRef();
    const viewRef=useRef();
    const areaRef=useRef();
    const priceRef=useRef();
    const addressRef=useRef();
    const descRef=useRef();

    const dispatch = useDispatch()


  const  onSubmitHandler=(e)=>{
        e.preventDefault();
        dispatch(add_property(
            {
                id:apartments.length+1,
                type:typeRef.current.value,
                governorate:governRef.current.value,
                area:Number(areaRef.current.value),
                roomNum:Number(roomRef.current.value),
                bathNum:Number(bathRef.current.value),
                apartFor:forRef.current.value,
                description:descRef.current.value,
                address:addressRef.current.value,
                price:Number(priceRef.current.value),
                paymentMethod:PayRef.current.value,
                yearBuilt:Number(yearRef.current.value),
                view:viewRef.current.value
            } 

        ));
        if(forRef.current.value==='sale'){
            history.push('/buy')
        }else{
            history.push('/rent')
        }
     
       
       
        
        
        
        
    }
    return (
            <div className='sell my-5 d-flex justify-content-center align-items-center'>
           {
              props.isLogged ?

              <form  onSubmit={onSubmitHandler}>

            <h3>Main Details</h3>

            <div className="row d-flex justify-conent-center my-4">
                <div className="col-12 col-md-6 col-lg-3">
                <label  className='form-label  my-2'>
                        Apartment Type
                    </label>
                    
                <select class="form-select my-2" aria-label="Default select example" name='type' ref={typeRef} required>
                
                <option value="flat">Flat</option>
                <option value="villa">Villa</option>
                <option value="chalet">Chalet</option>
                <option value="town house">Town House</option>
                </select>
                </div>
                
                <div className="col-12 col-md-6 col-lg-3">
                <label  className='form-label  my-2'>
                Governorate
                    </label>
                <select class="form-select my-2 form-control" aria-label="Default select example" name='governorate' ref={governRef} required>
                
                <option value="Cairo">Cairo</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Aswan">Aswan</option>
                <option value="Asyut">Asyut</option>
                
                <option value="Beheira">Beheira</option>
                <option value="Beni Suef">Beni Suef</option>
                <option value="Dakahlia">Dakahlia</option>
                <option value="Damietta">Damietta</option>
                <option value="Faiyum">Faiyum</option>
                <option value="Gharbia">Gharbia</option>
                <option value="Giza">Giza</option>
                <option value="Ismailia">Ismailia</option>
                
                <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                <option value="Luxor ">Luxor </option>
                <option value="Matruh">Matruh</option>
                <option value="Minya">Minya</option>

                <option value="Monufia">Monufia</option>
                <option value="New Valley">New Valley</option>
                <option value="North Sinai">North Sinai</option>
                <option value="Port Said ">Port Said </option>
                <option value="Qalyubia">Qalyubia</option>
                <option value="Qena">Qena</option>
                <option value="Red Sea">Red Sea</option>
                <option value="Sharqia">Sharqia</option>
                <option value="Sohag">Sohag</option>
                <option value="South">South</option>
                <option value="Suez">Suez</option>

               
                </select>
                </div>


                <div className="col-12 col-md-6 col-lg-3">
                <label  className='form-label  my-2'>
                        Apartment For
                    </label>
                    
                <select class="form-select my-2" aria-label="Default select example" name='type' ref={forRef} required>
                
                <option value="sale">Sell</option>
                <option value="rent">Rent</option>
                
                </select>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                <label  className='form-label  my-2'>
                        Payment Method
                    </label>
                    
                <select class="form-select my-2" aria-label="Default select example" name='type' ref={PayRef} required>
                
                <option value="Cash">Cash</option>
                
                <option value="Cash or Installments">Cash or Installments</option>
                
                </select>
                </div>
                
                
            </div>

            <h3>Property Details</h3>

            <div className="row">
            <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                <InputField label={'Rooms Num'} type='number' id='roomNum' ref={roomRef}></InputField>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                <InputField label={'Baths Num'} type='number' id='bathNum' ref={bathRef}></InputField>
                
                </div>

                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                <InputField label={'Built Year'} type='number' id='year' ref={yearRef}></InputField>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">

                </div>

                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                <InputField label={'View '} type='text' id='View' ref={viewRef}></InputField>
                </div>

                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                <InputField label={'Area In M2 '} type='number' id='area' ref={areaRef}></InputField>
                </div>

                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                <InputField label={'Price '} type='number' id='price' ref={priceRef}></InputField>
                </div>

                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                
                </div>
                <div className="row my-4">

                <div className="col-12 col-md-6 ">
                <label for="address" class="form-label">Address In Details </label>
                <textarea class="form-control" id="address" style={{"height": "100px"}}  required ref={addressRef}></textarea>
                </div>

                <div className="col-12 col-md-6 ">
                <label for="description" class="form-label">Description </label>
                <textarea class="form-control" id="description" required style={{"height": "100px"}} ref={descRef} ></textarea>
                </div>
                </div>


            </div>
            <div className="d-flex justify-content-center my-5">
            <button className="btn " type='submit'>
                Confirm Ad
            </button>
            </div>
             </form> 

            : 
            <FormContainer >
                <h4 className='form-button p-2'>you should Sign in</h4>
                <Link to="/sign-in" className='text-decoration-none text-secondary my-2'>
                <h6>Sign in from here &gt;	&gt;	</h6>
                </Link>
            </FormContainer>
        }
            
       
            </div>
    
    )
}


export default Sell;




