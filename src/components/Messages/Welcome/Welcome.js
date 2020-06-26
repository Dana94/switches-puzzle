import React from 'react';
import { connect } from 'react-redux';

import { changeGameStatus } from '../../../store/actions/game';
import { reset, setLevel } from '../../../store/actions/switches';

import classes from './Welcome.module.css';

const Welcome = props => {

    const startGame = () => {
        props.onChangeGame(true);
        props.resetGame();
    }

    return (
        <div>
            <div className={classes.Container}>
                <h1>Switches Puzzle</h1>
                <p>Choose a level:</p>
                <button onClick={() => props.onSetLevel(1)}>Level 1</button>
                <button onClick={() => props.onSetLevel(2)}>Level 2</button>
                <button onClick={() => props.onSetLevel(3)}>Level 3</button>

                <p>Turn all the switches on so their color is green.</p>
                <button onClick={startGame}>Start</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSetLevel: (level) => dispatch(setLevel(level)),
        onChangeGame: (status) => dispatch(changeGameStatus(status)),
        resetGame: () => dispatch(reset())
    }
}

export default connect(null, mapDispatchToProps)(Welcome);
