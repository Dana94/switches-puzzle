import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Switches from './components/Switches/Switches';
import Welcome from './components/Messages/Welcome/Welcome';
import Finish from './components/Messages/Finish';

function App(props) {

  let content = <Welcome />;
  if (props.gameHasStarted) {
    content = <Switches />
  } else if (props.gameSolved) {
    content = <Finish />;
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    gameHasStarted: state.gameStarted && state.switches.find(row => row.find(sw => sw.isOn === false)),
    gameSolved: state.switches.length > 0 && !state.switches.find(row => row.find(sw => sw.isOn === false))
  }
}

export default connect(mapStateToProps)(App);
