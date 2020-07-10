import React from 'react';

import './Button.css';

const Button = props => {
    return (
        <button
            className={props.class}
            onClick={props.click}
            aria-label={props.text}
        >{props.text}</button>
    )
}

export default Button;
