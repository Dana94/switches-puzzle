import React from 'react';
import { connect } from 'react-redux';

import {changeGameStatus} from '../../../store/actions/game';
import './Welcome.module.css';

const Welcome = props => {
    return (
        <div>
            <h1>Switches Puzzle</h1>
            <p>Turn all the switches on so their color is green.</p>
            <button onClick={() => props.onChangeGame()}>Start</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeGame: () => dispatch(changeGameStatus())
    }
}

export default connect(null, mapDispatchToProps)(Welcome);
