import SearchBar from "../SearchBar";
import {apartForSale} from '../../Data/index'
import apartImg from '../../images/building.png'
import './index.scss'
import { Room } from "@material-ui/icons";
function Buy(){
    return(
        <div className='buy'>
            <SearchBar/>
            <div className='unit d-flex flex-wrap'>
                {apartForSale.map((apart)=>
                <div className='apart col-12 col-md-6 col-lg-3 my-2 '>
                    <img src={apartImg} alt="" className="img-fluid" />
                    <div className="details p-2">

                    
                    <div className="d-flex justify-content-between ">
                        <h4 >{apart.type}</h4>
                        <p className='price fw-bold'>{apart.price}</p>
                    </div>
                    <small ><Room/>{apart.address}</small>
                    </div>

                </div>
                )}
            </div>
        </div>
    )
}

export default Buy