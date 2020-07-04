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
    // condense?
    gameHasStarted: state.gameStarted && state.switches.find(item => item.isOn === false),
    gameSolved: state.switches.length > 0 && !state.switches.find(item => item.isOn === false)
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
