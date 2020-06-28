import React from 'react';
import { connect } from 'react-redux';

import Switch from './Switch/Switch';
import './Switches.css';
import { reset, endGame } from '../../store/actions/switches';

const Switches = props => {
    return (
        <div>
            <p>Turn all the switches on so their color is green.</p>
            <div className="Container">
                {
                    props.switches.map(sw => {
                        return <Switch id={sw.id} key={sw.id} />;
                    })
                }
            </div>
            <button onClick={() => props.onReset()} className="Reset">Reset</button>
            <button onClick={() => props.onEndGame()} className="EndGame">End Game</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        switches: state.switches,
        level: state.level
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onReset: () => dispatch(reset()),
        onEndGame: () => dispatch(endGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Switches);
