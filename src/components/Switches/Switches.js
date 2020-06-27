import React from 'react';
import { connect } from 'react-redux';

import Switch from './Switch/Switch';
import './Switches.css';
import { reset } from '../../store/actions/switches';

const Switches = props => {
    return (
        <div>
            <div className="Container">
                {
                    props.switches.map(sw => {
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
