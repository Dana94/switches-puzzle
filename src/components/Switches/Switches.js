import React from 'react';
import { connect } from 'react-redux';

import './Switches.css';
import Row from './Row/Row';
import Button from '../Button/Button';
import { reset, endGame, setFocus } from '../../store/actions/switches';

const Switches = props => {

    const onResetHandler = () => {
        props.onReset();
        props.onSetFocus({ x: null, y: null });
    }

    return (
        <div>
            <p className="Instructions">Turn all the switches on so their color is green.</p>
            <div>
                <Button click={onResetHandler} class="Black" text="Reset" />
                <Button click={() => props.onEndGame()} class="Green" text="End Game" />
                <p className="Moves">Moves: {props.moves}</p>
            </div>
            <div>
                {
                    props.switches.map((row, index) => {
                        return <Row x={index} key={index} row={row} />;
                    })
                }
            </div>


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
        onEndGame: () => dispatch(endGame()),
        onSetFocus: (coords) => dispatch(setFocus(coords))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Switches);
