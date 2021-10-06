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