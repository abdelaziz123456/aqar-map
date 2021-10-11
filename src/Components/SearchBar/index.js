import { Search } from '@material-ui/icons';
import './index.scss';
function SearchBar(){
  const  submitHandler=(e)=>{
        e.preventDefault()
    }
    return(
        <form className='search-bar my-4' onSubmit={submitHandler}>
            <div className="d-flex justify-content-between">

            
            <div className="row ">
                <div className="col-12 col-sm-6 col-md">
                <input type="text" className="form-control" placeholder='Keyword' />
                </div>


                <div className="col-12 col-sm-6 col-md">
                <select class="form-select" aria-label="Default select example" name='governorate'>
                <option selected>Governorate</option>
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
                <div className="col-12 col-sm-6 col-md">
                <select class="form-select" aria-label="Default select example" name='type'>
                <option selected>property type</option>
                <option value="1">Flat</option>
                <option value="2">Villa</option>
                <option value="3">Chalet</option>
                <option value="4">Town House</option>
                </select>
                </div>
                <div className="col-12 col-sm-6 col-md">
                <select class="form-select" aria-label="Default select example" name='rooms'>
                <option selected>Rooms Num</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="4">More than 4</option>
                </select>
                </div>
                <div className="col-12 col-sm-6 col-md">
                <select class="form-select" aria-label="Default select example" name='baths'>
                <option selected>Baths Num</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">More than 3</option>
                </select>
                </div>
                <div className="col-12 col-sm-6 col-md">
                <input type="number" className="form-control" placeholder='Min Price' />
                </div>
                <div className="col-12 col-sm-6 col-md">
                <input type="number" className="form-control" 
                placeholder='Max Price'/>
                </div>
            </div>
            <div>
                <button className="btn ms-3" type='submit'>
                    Search
                </button>
            </div>
            </div>
            
            
            
        </form>
    )
}

export default SearchBar;