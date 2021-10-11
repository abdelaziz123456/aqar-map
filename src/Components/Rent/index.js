import SearchBar from "../SearchBar";
import {apartments} from '../../Data/index'
import apartImg from '../../images/building.png'
import './index.scss'
import { ArrowForwardSharp, ArrowRightAltSharp, BathtubOutlined, CropSquareSharp, HotelOutlined, Room } from "@material-ui/icons";
import { Link } from "react-router-dom";
function Rent(){
    const apartForSale=apartments.filter(apart=>apart.apartFor=='rent')
    return(
        <div className='rent'>
            <SearchBar/>
            <div className='unit d-flex flex-wrap'>
                {apartForSale.map((apart)=>
                <div className='apart col-12 col-md-6 col-lg-3 my-2 '>
                    <img src={apartImg} alt="" className="img-fluid w-100" />
                    <div className="details p-2 d-flex flex-column justify-content-around">

                    
                    <div className="d-flex justify-content-between ">
                        <h4 >{apart.type}</h4>
                        <p className='price fw-bold'>{apart.price}</p>
                    </div>

                    <small ><Room/>{apart.address}</small>

                    
                    <div className='desc-icons my-3 d-flex justify-content-around align-items-center'>
                        <p><CropSquareSharp />  {apart.area} M <sup>2</sup></p>
                        <p><BathtubOutlined />  {apart.bathNum}</p>
                        <p><HotelOutlined />  {apart.roomNum} </p>
                    </div>

                    <div className="d-flex justify-content-center">
                    <Link to={'/apart-details/'+apart.id} className="btn  ">
                         Details 
                    </Link>
                    </div>
                    
                   

                    
                    
                    </div>

                    

                </div>
                )}
            </div>
        </div>
    )
}

export default Rent