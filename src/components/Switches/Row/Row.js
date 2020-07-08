import React from 'react';

import "./Row.css";
import Switch from './Switch/Switch';

const Row = props => {
    return (
        <div className="Row">
            {
                props.row.map((sw, index) => {
                    return <Switch x={props.x} y={index} key={index} id={sw.id} />
                })
            }
        </div>
    )
}

export default Row;
