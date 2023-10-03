import React, { ReactElement, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildWindow from './ChildWindow';


function App() {
  const bn = useRef(null)
  const cw = useRef();
  return (
    <div className=' h-screen w-screen bg-red-400'>
      <button ref={bn}></button>
      <ChildWindow ref={cw}/>
    </div>
  );
}

export default App;
