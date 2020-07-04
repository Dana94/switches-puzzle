import React from 'react';

import {connect} from 'react-redux';

import Button from '../Button/Button';

const Finish = props => {
    return (
        <div>
            <h1>You solved level {props.level} in {props.moves} moves!</h1>
            <Button class="PlayAgain" text="Play Again" />
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

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Finish);
