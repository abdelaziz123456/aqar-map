import './index.scss';
import {forwardRef} from 'react';

function InputField(props,ref){
    return(
    <div className={ `cust-input my-1 ${props.className}`}>
    <label for={props.id} class="form-label my-2">{props.label}</label>
    {props.req ? <small style={{color:'red'}}>*</small> : ''}
    <input type={props.type} class="form-control my-2" id={props.id} placeHolder={props.placeHolder} required={props.req} ref={ref}/>
    
  </div>
    )
}

export default forwardRef(InputField);



