import React from 'react';

function HeaderH2(props) {
    return (
    <h2 className={props.classes}>
        {props.text}
    </h2>
    );
}

export default HeaderH2;