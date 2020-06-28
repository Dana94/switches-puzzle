import React from 'react';
import { connect } from 'react-redux';

import { changeGameStatus } from '../../../store/actions/game';
import { reset, setLevel } from '../../../store/actions/switches';

import classes from './Welcome.module.css';
import Button from '../../Button/Button';

const Welcome = props => {

    const startGame = () => {
        props.onChangeGame(true);
        props.resetGame();
    }

    return (
        <div>
            <div className={classes.Container}>
                <h1>Switches Puzzle</h1>
                <p>Turn all the switches on so their color is green.</p>

                <p>Choose a level:</p>

                <Button click={() => props.onSetLevel(1)} class="Level1" text="Level 1" />
                <Button click={() => props.onSetLevel(2)} class="Level2" text="Level 2" />
                <Button click={() => props.onSetLevel(3)} class="Level3" text="Level 3" />

                <Button click={startGame} class="Start" text="Start"/>
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
