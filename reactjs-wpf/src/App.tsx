import React, { ReactElement, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildWindow, { IChildWindowRef } from './ChildWindow';
import { Window } from './Window';
import { Border, SoildBrush, VerticalAlignment } from './Border';
import { writeFile } from 'fs';


function App() {
  const [width, setWidth] = useState(100)
  const bn = useRef(null)
  const cw = useRef<IChildWindowRef>(null);
  const back=useRef<SoildBrush>(new SoildBrush(0,0,255));


  return (
    // <Window>
    //   <TextBlock text='hellow world!' VerticalAlignment={VerticalAlignment.Stretch}/>
    // </Window>
    
    <div className='grid bg-red-400 h-screen w-screen'>
      {/* <p className='self-center justify-self-center'>hellow world!</p> */}
      {/* <div className=' self-stretch justify-self-stretch bg-green-400'></div> */}
      {/* <div className=' w-10 h-10 self-center justify-self-center bg-green-400'></div> */}
      <Border background={new SoildBrush(255,0,0)} VerticalAlignment={VerticalAlignment.Center} width={width}/>
      
      <input type='range' max={500} min={0} value={width} onChange={e=>setWidth(parseInt(e.target.value))}></input>
      {width}
    </div>
    
    // <div>
    //   <button onClick={()=>aa()}>write</button>
    // </div>
  );
}

export default App;
