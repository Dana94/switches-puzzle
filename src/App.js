import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Switches from './components/Switches/Switches';
import Welcome from './components/Messages/Welcome/Welcome';

function App(props) {

  let content = <Welcome />;
  if (props.gameHasStarted) {
    content = <Switches />
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    gameHasStarted: state.gameStarted,
    gameSolved: !state.switches.find(item => item.isOn === false)
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
