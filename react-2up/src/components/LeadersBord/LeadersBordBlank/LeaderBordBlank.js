import React from 'react';
import styled from 'styled-components';

const PersonBlank = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 103px;
    box-sizing: border-box;
    border: 2px solid #EFEEF8;
    padding: 18px 27px 17px 32px;
    margin-bottom: 12px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const PersonBlankPlayerInfo = styled.div``;
const PersonBlankPlayerName = styled.p`
    display: block;
    font-size: 21px;
    color: #777D91;
    margin-bottom: 5px;
`;

const PersonBlankPlayerScore = styled.p`
    display: block;
    font-size: 18px;
    color: #C1C5D4;
`;

const leaderBordBlank = (props) => {
    return (
        <PersonBlank>
            <PersonBlankPlayerInfo>
                <PersonBlankPlayerName>{props.name}</PersonBlankPlayerName>
                <PersonBlankPlayerScore>{props.score}</PersonBlankPlayerScore>
            </PersonBlankPlayerInfo>
            <img src={props.picture} />

        </ PersonBlank>
    )
};

export default leaderBordBlank