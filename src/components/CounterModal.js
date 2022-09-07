import Card from "./UI/Card";
import Button from "./UI/Button";
import React,{useContext,useEffect} from "react";
import classes from './CounterModal.module.css'
import CounterContext from "./store/CounterContext";

const CounterModal=() => {
 const counterCtx=useContext(CounterContext)
 const start=() => {
  counterCtx.onStart()
 }
 const stop=() => {
  counterCtx.onStop()
 }
 return (
  //<CounterContext.Consumer>{
  // (counterCtx) => {
  //  return (
  <Card>
   <div className={classes.container}>
    <div className={classes.counter}>
     <h1>{counterCtx.counter}</h1>
    </div>
    <div className={classes.button}>
     <Button type={'submit'} onClick={start}>start</Button>
     <Button type={'submit'} onClick={stop}>stop</Button>
    </div>
   </div>
  </Card>
  //  )
  // }}
  //</CounterContext.Consumer>
 )
}
export default CounterModal