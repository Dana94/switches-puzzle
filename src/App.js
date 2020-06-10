import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import Welcome from './components/Messages/Welcome/Welcome';
import Switch from './components/Switch/Switch';
import { reset } from './store/actions/switches';

function App(props) {

  let content = <Welcome />;
  if (props.gameHasStarted) {
    content = (
      <div>
        <div className="Container">
          <Switch id={0} />
          <Switch id={1} />
          <Switch id={2} />
          <Switch id={3} />
          <Switch id={4} />
        </div>
        <button onClick={() => props.onReset()} className="Reset">Reset</button>
      </div>
    )
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    gameHasStarted: state.gameReducer.gameStarted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReset: () => dispatch(reset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
