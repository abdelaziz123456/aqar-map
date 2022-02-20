import React from 'react'
import './index.scss';
import apartImg from '../../images/building.png'
import { BathtubOutlined, CropSquareSharp, Delete, HotelOutlined, Room } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Modal,ModalBody } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { delete_property } from '../../Actions';
import { Trans, useTranslation } from 'react-i18next';

export default function Apart(props) {
    let apart=props.apart;
    const dispatch=useDispatch()

    const [modal, setModal] = React.useState(false);
    const handleDelete=()=>{
        console.log(`${apart.id} deleted` );
        dispatch(delete_property(apart.id))
        toggle()
    }
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);
    let [t,i18n]=useTranslation();

    return (
        <div className='apart col-12 col-md-6 col-lg-3 my-2 '>
        <img src={apartImg} alt="" className="img-fluid w-100" />
        <div className="details p-2 d-flex flex-column justify-content-around">

        
        <div className="d-flex justify-content-between ">
            <h4 >{apart.type}</h4>
            <p className='price fw-bold'>{ (apart.apartFor==='sale') ? apart.price :  `${apart.price} / Month`}</p>
        </div>

        <small ><Room/>{apart.address}</small>

        
        <div className='desc-icons my-3 d-flex justify-content-around align-items-center'>
            <p><CropSquareSharp />  {apart.area} M <sup>2</sup></p>
            <p><BathtubOutlined />  {apart.bathNum}</p>
            <p><HotelOutlined />  {apart.roomNum} </p>
        </div>

        <div className="d-flex justify-content-around">

            <button className="btn" onClick={toggle}>
                <Delete/>
            </button>
        <Link to={'/apart-details/'+apart.id} className="btn  ">
             Details 
        </Link>
        </div>

        <div className="delete-modal">
        <Modal isOpen={modal} toggle={toggle} centered={true}  style={{maxWidth: '1200px', width: '50%'}}>
          
          <ModalBody >
            <div className='d-flex justify-content-end  '>
              <button className="btn" onClick={toggle} >
                 <h5 >X</h5> 
              </button>
            </div>
            <div className='text-center fw-bold my-4 pb-4'>
                Are you Sure you wanna delete this Apartment ?
            </div>

            <div className="d-flex justify-content-between my-4">

            <button className="btn" onClick={toggle}>
                Cancel
            </button>


            <button className="btn" onClick={handleDelete} style={{color:'white',backgroundColor:'#00B4A2'}}>
                Confirm Delete
            </button>
            
            </div>

           
          </ModalBody>


         

          
        </Modal>
        </div>
        
       

        
        
        </div>

       

        

    </div>
    )
}
