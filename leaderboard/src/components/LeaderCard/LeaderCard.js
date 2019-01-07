import React from 'react';
import './LeaderCard.css';


const leaderCard = (props) => {
    return (
        <div className='Leader-card__container'>
            <div className='Leader-card'>
                <p className='Leader-name'>{ props.name }</p>
                <p className='Leader-score'>{ props.score }</p>
            </div>
            <div className='Leader-card__image'>
                <img src={props.img} alt='cup'/>
            </div>
        </div>
    )
}

export default leaderCard;