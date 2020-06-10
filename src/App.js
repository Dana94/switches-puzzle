import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import { changeGameStatus } from './store/actions/game';
import Switches from './components/Switches/Switches';
import Welcome from './components/Messages/Welcome/Welcome';

function App(props) {

  let content = <Welcome />;
  if (!props.gameSolved && props.gameHasStarted) {
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
    gameHasStarted: state.gameReducer.gameStarted,
    gameSolved: !state.switchesReducer.switches.find(item => item.isOn === false)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeGame: () => dispatch(changeGameStatus())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
