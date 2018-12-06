import React from 'react';
import './ParticipantCard.css';

const participantCard = (props) => {
    return (
        <div className='participantCard'>
            <div className='participantCard__title'>{ props.title }</div>
            <input className='participantCard__name' type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default participantCard;