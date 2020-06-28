import React from 'react';

import './Button.css';

const Button = props => {
    return (
        <button className={props.class} onClick={props.click}>{props.text}</button>
    )
}

export default Button;
