import './index.scss'

function InputFiled(props){
    return(
    <div className={ `cust-input my-1 ${props.className}`}>
    <label for={props.id} class="form-label my-2">{props.label}</label>
    <input type={props.type} class="form-control my-2" id={props.id} placeHolder={props.placeHolder} required/>
    
  </div>
    )
}

export default InputFiled