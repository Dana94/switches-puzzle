import React from 'react';
import { connect } from 'react-redux';

import classes from './Switch.module.css';
import { flipSwitch } from '../../../store/actions/switches';

const Switch = props => {
    const onKeyHandler = (event) => {
        if (event.key === 'Enter') {
            props.onToggle(props.id);
        }
    }

    let switchValueClasses = [classes.SwitchValue];
    let leverClasses = [classes.Lever];

    const isOn = props.switches.find(s => s.id === props.id).isOn;
    if (isOn) {
        switchValueClasses.push(classes.on);
        leverClasses.push(classes.on);
    } else {
        switchValueClasses.push(classes.off);
        leverClasses.push(classes.off);
    }
    return (
        <div className={classes.Switch}>
            <div className={switchValueClasses.join(' ')}>
            </div>
            <div
                className={leverClasses.join(' ')}
                onClick={() => props.onToggle(props.id)}
                tabIndex="0"
                onKeyPress={onKeyHandler}
            >
            </div>
        </div>

    );
};

const mapStateToProps = state => {
    return {
        switches: state.switchesReducer.switches
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggle: (id) => dispatch(flipSwitch(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Switch);