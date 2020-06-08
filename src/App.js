import React from 'react';
import './App.css';

import Switch from './components/Switch';

function App() {

  return (
    <div className="App">
      <div className="Container">
        <Switch id="0" />
        <Switch id="1" />
        <Switch id="2" />
        <Switch id="3" />
        <Switch id="4" />
      </div>
    </div>
  );
}

export default App;
