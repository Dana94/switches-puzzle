import React from 'react';
import { connect } from 'react-redux';

import Switch from './Switch/Switch';
import './Switches.css';
import { reset } from '../../store/actions/switches';

const Switches = props => {

    return (
        <div>
            <div className="Container">
                <Switch id={0} />
                <Switch id={1} />
                <Switch id={2} />
                <Switch id={3} />
                <Switch id={4} />
            </div>
            <button onClick={() => props.onReset()} className="Reset">Reset</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onReset: () => dispatch(reset())
    }
}

export default connect(null, mapDispatchToProps)(Switches);
