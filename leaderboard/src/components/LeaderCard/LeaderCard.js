import React from 'react';
import 'components/LeaderCard/LeaderCard.scss';
import TrophyCup from 'components/TrophyCup/TrophyCup';


const leaderCard = (props) => {
    return (
        <div className='Leader-card__container'>

            <div className='Leader-card'>
                <p className='Leader-name'>{ props.name }</p>
                <p className='Leader-score'>{ props.score} очков</p>
            </div>

            {props.img ? <TrophyCup img={props.img} imgColor={props.imgColor} /> : null}
            
        </div>
    )
}

export default leaderCard;