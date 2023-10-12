import React, { ReactElement, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildWindow, { IChildWindowRef } from './ChildWindow';
import { Window } from './Window';
import { Border, SoildBrush } from './Border';


function App() {
  const bn = useRef(null)
  const cw = useRef<IChildWindowRef>(null);
  const back=useRef<SoildBrush>(new SoildBrush());
  return (
    // <Window>
    //   <TextBlock text='hellow world!' VerticalAlignment={VerticalAlignment.Stretch}/>
    // </Window>
    
    <div className='grid bg-red-400 h-screen w-screen'>
      {/* <p className='self-center justify-self-center'>hellow world!</p> */}
      {/* <div className=' self-stretch justify-self-stretch bg-green-400'></div> */}
      {/* <div className=' w-10 h-10 self-center justify-self-center bg-green-400'></div> */}
      <Border background={back.current}/>
    </div>
  );
}

export default App;
