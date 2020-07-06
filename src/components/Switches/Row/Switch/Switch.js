import React from 'react';
import { connect } from 'react-redux';

import classes from './Switch.module.css';
import { flipSwitch } from '../../../../store/actions/switches';

const Switch = props => {
    const onKeyHandler = (event) => {
        console.log(event.key)
        if (event.key === 'Enter') {
            props.onToggle(props.id);
        }
        else if (event.key === "ArrowDown") {
            console.log("here")
        }
    }

    let switchValueClasses = [classes.SwitchValue];
    let leverClasses = [classes.Lever];

    const isOn = props.switches[props.x][props.y].isOn;
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
                tabIndex={props.id === 0 ? "0" : "-1"}
                onKeyPress={onKeyHandler}
            >
            </div>
        </div>

    );
};

const mapStateToProps = state => {
    return {
        switches: state.switches
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggle: (id) => dispatch(flipSwitch(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Switch);