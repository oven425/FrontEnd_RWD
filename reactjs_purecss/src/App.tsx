import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form className="pure-form pure-form-aligned">
    <fieldset>
        <div className="pure-control-group">
            <label htmlFor="aligned-name">Username</label>
            <input type="text" id="aligned-name" placeholder="Username" />
            <span className="pure-form-message-inline">This is a required field.</span>
        </div>
        <div className="pure-control-group">
            <label htmlFor="aligned-password">Password</label>
            <input type="password" id="aligned-password" placeholder="Password" />
        </div>
        <div className="pure-control-group">
            <label htmlFor="aligned-email">Email Address</label>
            <input type="email" id="aligned-email" placeholder="Email Address" />
        </div>
        <div className="pure-control-group">
            <label htmlFor="aligned-foo">Supercalifragilistic Label</label>
            <input type="text" id="aligned-foo" placeholder="Enter something here..." />
        </div>
        <div className="pure-controls">
            <label htmlFor="aligned-cb" className="pure-checkbox">
                <input type="checkbox" id="aligned-cb" /> I&#x27;ve read the terms and conditions
            </label>
            <button type="submit" className="pure-button pure-button-primary">Submit</button>
        </div>
    </fieldset>
</form>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
