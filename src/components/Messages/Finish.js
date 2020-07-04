import React from 'react';
import {connect} from 'react-redux';

import Button from '../Button/Button';
import { reset, endGame } from '../../store/actions/switches';

const Finish = props => {
    return (
        <div>
            <h1>You solved level {props.level} in {props.moves} moves!</h1>
            <p>What do you want to do next?</p>
            <Button class="Black" click={() => props.onEndGame()} text="Try Another Level" />
            <Button class="Red" click={() => props.onReset()} text="Play Again" />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        level: state.level,
        moves: state.moves
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onReset: () => dispatch(reset()),
        onEndGame: () => dispatch(endGame())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Finish);
