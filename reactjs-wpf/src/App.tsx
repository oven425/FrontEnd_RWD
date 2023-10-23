import React, { ReactElement, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildWindow, { IChildWindowRef } from './ChildWindow';
import { Window } from './Window';
import { Border, SoildBrush, Thickness, VerticalAlignment } from './Border';
import { writeFile } from 'fs';
import { Colors } from './Color';


function App() {
  const [width, setWidth] = useState(100)
  const bn = useRef(null)
  const cw = useRef<IChildWindowRef>(null);
  const back=useRef<SoildBrush>(new SoildBrush(Colors.Red));


  return (
    // <Window>
    //   <TextBlock text='hellow world!' VerticalAlignment={VerticalAlignment.Stretch}/>
    // </Window>
    
    <div className='grid bg-red-400 h-screen w-screen'>
      {/* <p className='self-center justify-self-center'>hellow world!</p> */}
      {/* <div className=' self-stretch justify-self-stretch bg-green-400'></div> */}
      {/* <div className=' w-10 h-10 self-center justify-self-center bg-green-400'></div> */}
      <Border 
            background={new SoildBrush(Colors.Red)} 
            cornerRadius={new Thickness(2,4,6,8)}  
            borderthickness={new Thickness(2,4,6,8)} 
            verticalAlignment={VerticalAlignment.Center} 
            width={width}/>
      
      <input type='range' max={500} min={0} value={width} onChange={e=>setWidth(parseInt(e.target.value))}></input>
      {width}
    </div>
    
    // <div>
    //   <button onClick={()=>aa()}>write</button>
    // </div>
  );
}

export default App;
