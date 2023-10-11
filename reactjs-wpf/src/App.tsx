import React, { ReactElement, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildWindow, { IChildWindowRef } from './ChildWindow';
import { Window } from './Window';
import { TextBlock, VerticalAlignment } from './TextBlock';


function App() {
  const bn = useRef(null)
  const cw = useRef<IChildWindowRef>(null);
  return (
    // <Window>
    //   <TextBlock text='hellow world!' VerticalAlignment={VerticalAlignment.Stretch}/>
    // </Window>

    <div className='grid bg-red-400 h-screen w-screen'>
      <div className=' overflow-y-auto'>
        <div className=' w-50 h-96 bg-blue-400'>123</div>
      </div>
      {/* <p className='self-center justify-self-center'>hellow world!</p> */}
    </div>
  );
}

export default App;
