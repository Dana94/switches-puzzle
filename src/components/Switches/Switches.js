import React from 'react';
import { connect } from 'react-redux';

import './Switches.css';
import Switch from './Switch/Switch';
import Button from '../Button/Button';
import { reset, endGame } from '../../store/actions/switches';

const Switches = props => {

    let containerClasses = ["Container"];

    if(props.level === 3) {
        containerClasses.push("Level3");
    }
    return (
        <div>
            <p>Turn all the switches on so their color is green.</p>
            <div className={containerClasses.join(" ")}>
                {
                    props.switches.map(sw => {
                        // if(sw.id )
                        return <Switch id={sw.id} key={sw.id} />;
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
