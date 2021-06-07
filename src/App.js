import React from 'react'
import './App.css';
import {links} from './links';
// import Iframe from 'react-iframe'




const handleSubmit = e => {
  e.preventDefault();
  console.log('Commencing...')
  let i = 0
  while (i < 134) {
    task(i);
    i++;
  }
  function task(i) {
    setTimeout(function() {
     window.open(links[i]);
    }, 1000 * i);
  }
}


function App() {
 

  return (
    <div className="App">
      <header className="App-header">

        <p>
          Click the button to commence leveling
       </p>

        <button onClick={handleSubmit}>Attack</button>
     
      </header>
    </div>
  );
}

export default App;
