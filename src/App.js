import InputModal from './components/InputModal';
import CounterModal from './components/CounterModal';
import './App.css';
import React from 'react';
import Backdrop from './components/UI/Backdrop';


function App() {


  return (

    <React.Fragment>
      <Backdrop></Backdrop>
      <InputModal />
      <CounterModal></CounterModal>
    </React.Fragment>

  );
}

export default App;
