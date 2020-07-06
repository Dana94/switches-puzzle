import React from 'react';

import Switch from './Switch/Switch';

const Row = props => {
    // console.log(props.switch);
    return (
        <div>
            {
                props.row.map((sw, index) => {
                    return <Switch x={props.x} y={index} key={index} />
                })
            }
        </div>
    )
}

export default Row;
