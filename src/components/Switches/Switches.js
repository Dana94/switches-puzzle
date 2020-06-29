import React from 'react';
import { connect } from 'react-redux';

import Switch from './Switch/Switch';
import './Switches.css';
import { reset, endGame } from '../../store/actions/switches';
import Button from '../Button/Button';

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
            <Button click={() => props.onReset()} class="Reset" text="Reset" />
            <Button click={() => props.onEndGame()} class="EndGame" text="End Game" />
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
