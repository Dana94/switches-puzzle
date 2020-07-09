import React from 'react';
import { connect } from 'react-redux';

import { reset, setLevel } from '../../../store/actions/switches';

import './Welcome.module.css';
import Button from '../../Button/Button';

const Welcome = props => {

    return (
        <div>
            <h1>Switches Puzzle</h1>
            <h2>Choose a Level:</h2>
            <div>
                <Button click={() => props.onSetLevel(1)} class="Green" text="Level 1" />
                <Button click={() => props.onSetLevel(2)} class="Red" text="Level 2" />
                <Button click={() => props.onSetLevel(3)} class="Black" text="Level 3" />
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSetLevel: (level) => dispatch(setLevel(level)),
        resetGame: () => dispatch(reset())
    }
}

export default connect(null, mapDispatchToProps)(Welcome);
