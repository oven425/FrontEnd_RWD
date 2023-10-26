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
  const back = useRef<SoildBrush>(new SoildBrush(Colors.Red));


  return (
    // <Window>
    //   <TextBlock text='hellow world!' VerticalAlignment={VerticalAlignment.Stretch}/>
    // </Window>

    // <div className='grid bg-red-400 h-screen w-screen'>
    //   {/* <p className='self-center justify-self-center'>hellow world!</p> */}
    //   {/* <div className=' self-stretch justify-self-stretch bg-green-400'></div> */}
    //   {/* <div className=' w-10 h-10 self-center justify-self-center bg-green-400'></div> */}




    // </div>

    // <Window>
    //   <Border
    //       background={new SoildBrush(Colors.Green)}
    //       cornerRadius={new Thickness(2, 4, 6, 8)}
    //       borderthickness={new Thickness(2, 4, 6, 8)}
    //       verticalAlignment={VerticalAlignment.Stretch}
    //       height={90}
    //       width={90} 

    //       />
    // </Window>

    // //canvas
    // <div className='bg-red-700 h-screen w-screen relative '>
    //   <div className=' absolute left-10 top-10 bg-green-400 w-10 h-10'></div>
    //   <div className=' absolute left-30 top-30 bg-green-400 w-10 h-10'></div>
    // </div>

    <Window>
      <div className=' grid bg-red-100 w-full h-full'>
        <div className='bg-green-600 w-10 h-10 justify-self-center self-center row-start-1 col-start-1'></div>
        <div className='bg-blue-600 w-10 h-10 justify-self-center self-center row-start-1 col-start-1'></div>
      </div>
    </Window>
    //ContentControl

  );
}

export default App;
