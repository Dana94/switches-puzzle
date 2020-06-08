import React, { useState } from 'react';

import classes from './Switch.module.css';

const Switch = props => {
    const [isOn, setIsOn] = useState(false);

    const toggleHandler = () => {
        setIsOn(!isOn);
    }

    let classList = [classes.Switch];
    if (isOn) {
        classList.push(classes.on);
    } else {
        classList.push(classes.off);
    }
    return (
        <div className={classList.join(' ')} onClick={toggleHandler}>{props.id}</div>
    );
};

export default Switch;
