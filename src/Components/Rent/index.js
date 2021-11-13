import SearchBar from "../SearchBar";
import React from 'react'

import { useSelector,useDispatch } from "react-redux";

import './index.scss';
import { Modal,ModalBody } from 'reactstrap';


import Apart from "../Apart";
import { clear_property } from "../../Actions";
import { Link } from "react-router-dom";
function Rent(){
  const dispatch = useDispatch()

    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);

    const handleDelete=()=>{
        console.log('all clear');
        dispatch(clear_property());
        toggle()
    }
    const aparts=useSelector(state=>state)
    const apartForSale=useSelector(state=>state.filter(apart=>apart.apartFor=='rent'))
    return(

        <div className='rent'>
            <SearchBar/>

            {
                aparts.length ? 
           
           
            <>
            <div className='unit d-flex flex-wrap'>
                {apartForSale.map((apart)=>
               <Apart apart={apart} />
                )}
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn my-4" onClick={toggle}>
                    Clear All
                </button>
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
                Are you Sure you wanna clear All Apartments ?
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

        </> 
        :
        <div className='text-center my-4 fw-bold fs-3'>
            there aren't Apartments to show
            <div className="d-felx-justify-content-center">
                    <Link to="/sell" className="btn ">
                     Add One
                    </Link>

                    </div>
        </div>

}
        </div>
    )
}

export default Rent