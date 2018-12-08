import React from 'react';
import './LeaderCard.css';


const leaderCard = (props) => {
    return (
        <div className='LeaderCard__container'>
            <div className='LeaderCard'>
                <p className='Leader-name'>{ props.name }</p>
                <p className='Leader-score'>{ props.score }</p>
            </div>
            <div className='LeaderCard__image'>
                <img src={props.img} alt='cup'/>
            </div>
        </div>
    )
}

export default leaderCard;