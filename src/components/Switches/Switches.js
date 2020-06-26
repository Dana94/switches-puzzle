import React from 'react';
import { connect } from 'react-redux';

import Switch from './Switch/Switch';
import './Switches.css';
import { reset } from '../../store/actions/switches';

const Switches = props => {
    let printSwitches = [];
    if(props.level === 1) {
        // printSwitches = props.switches.slice(5);
    }

    console.log(printSwitches, props.level);

    return (
        <div>
            <div className="Container">
                {
                    printSwitches.map(sw => {
                        return <Switch id={sw.id} key={sw.id} />;
                    })
                }
            </div>
            <button onClick={() => props.onReset()} className="Reset">Reset</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        switches: state.switchesReducer.switches,
        level: state.switchesReducer.level
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onReset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Switches);
