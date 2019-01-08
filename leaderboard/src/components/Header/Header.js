import React from 'react';
import './Header.scss';

const header = (props) => {
    return (
        <div className={`Header Header_color_${props.color}`}>
            { props.title }
        </div>
    )
}

export default header;