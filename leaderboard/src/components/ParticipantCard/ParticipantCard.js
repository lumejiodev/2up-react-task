import React from 'react';
import './ParticipantCard.css';

const participantCard = (props) => {
    return (
        <div className='participant-card'>
            <div className='participant-card__title'>{ props.title }</div>
            <input className='participant-card__name' type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default participantCard;