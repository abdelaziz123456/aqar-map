
import InputFiled from '../InputFiled';
import './index.scss'
function Sell (props){
  const  onSubmitHandler=(e)=>{
        e.preventDefault()
    }
    return (
        <form className="sell my-5" onSubmit={onSubmitHandler}>
            <h3>Main Details</h3>

            <div className="row d-flex justify-conent-center my-4">
                <div className="col-12 col-md-6 col-lg-3">
                <label  className='form-label  my-2'>
                        Apartment Type
                    </label>
                    
                <select class="form-select my-2" aria-label="Default select example" name='type' required>
                
                <option value="1">Flat</option>
                <option value="2">Villa</option>
                <option value="3">Chalet</option>
                <option value="4">Town House</option>
                </select>
                </div>
                
                <div className="col-12 col-md-6 col-lg-3">
                <label  className='form-label  my-2'>
                Governorate
                    </label>
                <select class="form-select my-2 form-control" aria-label="Default select example" name='governorate' required>
                
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
                    
                <select class="form-select my-2" aria-label="Default select example" name='type' required>
                
                <option value="sell">Sell</option>
                <option value="rent">Rent</option>
                
                </select>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                <label  className='form-label  my-2'>
                        Payment Method
                    </label>
                    
                <select class="form-select my-2" aria-label="Default select example" name='type' required>
                
                <option value="sell">Cash</option>
                <option value="rent">Installments</option>
                <option value="rent">Both Available</option>
                
                </select>
                </div>
                
                
            </div>

            <h3>Property Details</h3>

            <div className="row">
            <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                <InputFiled label={'Rooms Num'} type='number' id='roomNum'></InputFiled>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                <InputFiled label={'Baths Num'} type='number' id='bathNum'></InputFiled>
                
                </div>

                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                <InputFiled label={'Built Year'} type='number' id='year'></InputFiled>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">

                </div>

                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                <InputFiled label={'View '} type='text' id='View'></InputFiled>
                </div>

                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                <InputFiled label={'Area In M2 '} type='number' id='area'></InputFiled>
                </div>

                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                <InputFiled label={'Price '} type='number' id='price'></InputFiled>
                </div>

                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                
                </div>
                <div className="row my-4">

                <div className="col-12 col-md-6 ">
                <label for="address" class="form-label">Address In Details </label>
                <textarea class="form-control" id="address" style={{"height": "100px"}}  required></textarea>
                </div>

                <div className="col-12 col-md-6 ">
                <label for="description" class="form-label">Description </label>
                <textarea class="form-control" id="description" required style={{"height": "100px"}} ></textarea>
                </div>
                </div>


            </div>
            <div className="d-flex justify-content-center my-5">
            <button className="btn " type='submit'>
                Confirm Ad
            </button>
            </div>
            
            
        </form>
    )
}


export default Sell;