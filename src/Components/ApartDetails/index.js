import { apartments } from "../../Data";
import apartImg from '../../images/building.png';
import './index.scss';
function ApartDetails(props){
    const apart=apartments.filter(apart=>apart.id==props.match.params.id);
    const apartment=apart[0]
    return(
        apartment ?
        <div className="apart-details">
             <img src={apartImg} alt="apartment-image" className="img-fluid w-100 my-5" />
             
             <div className="row text-dark  px-3">
                 <ul className="col-12 col-md-6">
                 <li><span> Type : {apartment.type}</span></li>
                 <li><span>Finish Type : {apartment.finishType}</span> </li>
                 <li> <span>  Published in {apartment.publishDate}</span></li>
                 <li> <span>Area : {apartment.area} M <sup>2</sup></span></li>
                 <li> <span>Address : {apartment.address}</span></li>
                 <li>  <span>Rooms Number : {apartment.roomNum}</span></li>
                 
                 </ul>
                 <ul className="col-12 col-md-6">
                 <li> <span>Built in : {apartment.yearBuilt}</span></li>
                 <li> <span>View : {apartment.view}</span></li>
                 <li> <span>Price : {apartment.price}</span></li>
                 <li> <span>Price Per Meter : {apartment.pricePerMeter}</span></li>
                 <li> <span>Payment Method : {apartment.paymentMethod}</span></li>
                 <li>  <span>Baths Number : {apartment.bathNum}</span></li>
                 </ul>
                 <ul>
                     <li> <span>
                     Description : {apartment.description} </span>
                     </li>
                 </ul>
                 
                 
                 
             </div>
           
           
        </div> : <div></div>
    )
}




export default ApartDetails