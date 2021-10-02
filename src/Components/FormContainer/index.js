
import './index.scss';
function FormContainer(props){
    return(
       <div className="form-container d-flex justify-content-center">
           <div className='d-flex flex-column  justify-content-start'>
           <h4 className='fw-medium'>{props.header}</h4>
           
           {props.children}

           </div>
           
       </div>

    )
}

export default FormContainer;