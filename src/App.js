import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import Switch from './components/Switch';
import {reset} from './store/actions/switches';

function App(props) {

  return (
    <div className="App">
      <div className="Container">
        <Switch id={0} />
        <Switch id={1} />
        <Switch id={2} />
        <Switch id={3} />
        <Switch id={4} />
      </div>
      <button onClick={() => props.onReset()} className="Reset">Reset</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onReset: () => dispatch(reset())
  }
}

export default connect(null, mapDispatchToProps)(App);
