import React from "react";
import classes from './Input.module.css'
const Input=React.forwardRef((props,ref) => {
 return (
  <div onSubmit={props.onSubmit}>
   <label htmlFor={props.input.id} className={classes.label}>{props.lable}</label>
   <input className={classes.input} id={props.input.id} type={props.input.type} placeholder={props.input.placeholder} ref={ref}></input>
  </div>

 )
})
export default Input