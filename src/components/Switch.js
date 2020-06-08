import React from 'react';
import { connect } from 'react-redux';

import classes from './Switch.module.css';
import { flipSwitch } from '../store/actions/switches';

const Switch = props => {
    // const [isOn, setIsOn] = useState(false);

    // const toggleHandler = () => {
    //     setIsOn(!isOn);
    // }

    let classList = [classes.Switch];
    const isOn = props.switches.find(s => s.id === props.id).isOn;
    if (isOn) {
        classList.push(classes.on);
    } else {
        classList.push(classes.off);
    }
    return (
        <div className={classList.join(' ')} onClick={() => props.onToggle(props.id)}>{props.id}</div>
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
