import React, { useRef } from 'react';
import { connect } from 'react-redux';

import classes from './Switch.module.css';
import { flipSwitch, setFocus } from '../../../../store/actions/switches';

const Switch = props => {
    const onKeyHandler = (event) => {
        if (event.key === 'Enter') {
            props.onToggle(props.id, { x: props.x, y: props.y });
        }
        else if (event.key === "ArrowDown") {
            props.onSetFocus({ x: props.x + 1, y: props.y });
        }
        else if (event.key === "ArrowUp") {
            props.onSetFocus({ x: props.x - 1, y: props.y });
        }
        else if (event.key === "ArrowLeft") {
            props.onSetFocus({ x: props.x, y: props.y - 1 });
        }
        else if (event.key === "ArrowRight") {
            props.onSetFocus({ x: props.x, y: props.y + 1 });
        }
    }

    const switchRef = useRef();

    if (props.focus.x === props.x && props.focus.y === props.y && !!switchRef.current) {
        switchRef.current.focus();
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
                onClick={() => props.onToggle(props.id, { x: props.x, y: props.y })}
                tabIndex={props.id === 0 ? "0" : "-1"}
                onKeyDown={onKeyHandler}
                ref={switchRef}
            >
            </div>
        </div>

    );
};

const mapStateToProps = state => {
    return {
        switches: state.switches,
        focus: state.focus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggle: (id, coords) => dispatch(flipSwitch(id, coords)),
        onSetFocus: (coords) => dispatch(setFocus(coords))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Switch);
