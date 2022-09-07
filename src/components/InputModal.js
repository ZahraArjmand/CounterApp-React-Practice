import Card from "./UI/Card";
import Input from "./UI/Input";
import Button from "./UI/Button";
import classes from './InputModal.module.css'
import React,{useRef,useContext,useState} from "react";
import CounterContext from "./store/CounterContext";


const InputModal=(props) => {

 const inputRef=useRef()

 const counterCtx=useContext(CounterContext)

 const [validCounter,setValidCounter]=useState(true)

 const submitHandler=(event) => {
  event.preventDefault()
  const enteredCounter=inputRef.current.value
  if(typeof +enteredCounter==='number') {
   //console.log(+enteredCounter)
   if(enteredCounter.trim().length===0) {
    inputRef.current.value=""
    setValidCounter(false)
   }
   else {
    counterCtx.onGet(+enteredCounter)
    inputRef.current.value=""
    setValidCounter(true)
   }
  }
 }

 return (

  <Card >
   <form
    className={classes.card}
    onSubmit={submitHandler}>

    <Input
     lable={'number:'}
     input={{
      type: "number",
      placeholder: "Please enter your number",
      id: "counter-input"
     }}
     ref={inputRef}
     onSubmit={submitHandler}
    />

    <Button type={'submit'} > OK</Button>
    {!validCounter&&<p className={classes.inValidP}>Please enter a number!!!</p>}
   </form>

  </Card>
 )
}
export default InputModal