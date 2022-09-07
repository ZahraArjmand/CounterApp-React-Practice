import React,{useContext} from "react";
import ReactDOM from "react-dom"
import classes from "./Backdrop.module.css"
import CounterContext from "../store/CounterContext";
const BackdropElement=() => {
 return (<div className={classes.backdrop}>
 </div>)
}

const Backdrop=() => {
 const counterCtx=useContext(CounterContext)
 return (
  <React.Fragment>
   {counterCtx.state&&counterCtx.counter!==0&&ReactDOM.createPortal(<BackdropElement></BackdropElement>,document.getElementById("backdrop"))}
  </React.Fragment>)
}
export default Backdrop