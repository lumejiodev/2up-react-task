import React from 'react';
import './TrophyCup.css';

const TrophyCup = (props) => {
    return (
        <div className='Leader-card__image'>
            <img src={props.img} alt='cup'/>
        </div>
    )
}

export default TrophyCup;