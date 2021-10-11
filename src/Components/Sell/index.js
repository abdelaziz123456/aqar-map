
import InputFiled from '../InputFiled';
import './index.scss'
function Sell (props){
    return (
        <div className="sell">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                <InputFiled label={'Apartment Type'}></InputFiled>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                    <label  className='form-label  my-2'>
                        Apartment Section
                    </label>
                    <select class="form-select  my-2 form-control" aria-label="Default select example"  name='type'>
                <option selected>Baths Num</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">More than 3</option>
                </select>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                <InputFiled label={'Governorate'}></InputFiled>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                <InputFiled></InputFiled>
                </div>
            </div>
            
        </div>
    )
}


export default Sell;