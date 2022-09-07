import React,{useState,useEffect} from "react";

const CounterContext=React.createContext(
 {
  counter: 0,
  onGet: (data) => {},
  onStop: () => {},
  onStart: () => {},
  state: false
 }
)

export const CounterContextProvider=props => {
 console.log(5)
 const [counterr,setCounter]=useState(0)
 const [counterContollerState,setCounterCotrollerState]=useState()

 const saveInputHandler=data => {
  if(data!==0) {
   setCounter(data)
  }
 }


 const startCounterHandler=() => {
  setCounterCotrollerState(true)
  console.log(counterContollerState)
 }

 const stopCounterHandler=() => {
  setCounterCotrollerState(false)
 }

 useEffect(() => {
  const s=setInterval(() => {
   if(counterr>0&&counterContollerState)
    setCounter(c => c-1)

  },1000)
  return () => clearInterval(s)
 },[counterr,counterContollerState])



 return (
  <CounterContext.Provider value={{
   state: counterContollerState,
   counter: counterr,
   onGet: saveInputHandler,
   onStart: startCounterHandler,
   onStop: stopCounterHandler,
  }}>
   {props.children}
  </CounterContext.Provider>
 )
}
export default CounterContext