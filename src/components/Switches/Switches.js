import React from 'react';
import { connect } from 'react-redux';

import './Switches.css';
import Row from './Row/Row';
import Button from '../Button/Button';
import { reset, endGame } from '../../store/actions/switches';

const Switches = props => {

    return (
        <div>
            <p>Turn all the switches on so their color is green.</p>
            <div className="Container">
                {
                    props.switches.map((row, index) => {
                        return <Row x={index} key={index} row={row} />;
                    })
                }
            </div>
            <Button click={() => props.onReset()} class="Black" text="Reset" />
            <Button click={() => props.onEndGame()} class="Green" text="End Game" />
            <p>Moves: {props.moves}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        switches: state.switches,
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

export default connect(mapStateToProps, mapDispatchToProps)(Switches);
