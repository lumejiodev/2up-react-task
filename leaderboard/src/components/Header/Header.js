import React from 'react';
import './Header.css';

const header = (props) => {
    return (
        <div className={`Header Header_color_${props.color}`}>
            { props.title }
        </div>
    )
}

export default header;