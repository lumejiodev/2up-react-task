import React from 'react';
import './LeaderCard.css';

const leaderCard = (props) => {
    return (
        <div className='LeaderCard'>
            <p className='Leader-name'>{ props.name }</p>
            <p className='Leader-score'>{ props.score }</p>
        </div>
    )
}

export default leaderCard;