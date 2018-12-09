import React, { Component } from 'react';
import styled from 'styled-components';
import LeaderBordBlank from '../LeadersBordBlank/LeaderBordBlank';
import PaginationButtons from '../Paginations/PaginationButtons';
import rank1 from '../../../assets/images/rank1.png';
import rank2 from '../../../assets/images/rank2.png';
import rank3 from '../../../assets/images/rank3.png';

const LeaderContainer = styled.div`
    flex-basis: 40%;
    background-color: #ffffff;
    max-width: 532px;
    min-width: 350px;
`;

const PageHeader = styled.div`
    text-align: left;
    padding: 20px 34px 24px 34px;
    background-color: #847AD1;
`;

const PageHeaderTitle = styled.p`
    color: white;
    font-size: 22px;
`;

const LeaderBordContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 21px 28px 21px 28px;
`;

class LeaderBordContainer extends Component {
    render () {
        return (
            <LeaderContainer>
                <PageHeader>
                    <PageHeaderTitle>Лидеры</PageHeaderTitle>
                </PageHeader>
                <LeaderBordContent>
                    <LeaderBordBlank name="Петр Иванов" score="8901 очков" picture={rank1}/>
                    <LeaderBordBlank name="Иван Петров" score="8801 очков" picture={rank2}/>
                    <LeaderBordBlank name="Иван Иванов" score="8701 очков" picture={rank3}/>
                    <LeaderBordBlank name="Петр Петров" score="8601 очков" picture=""/>
                    <LeaderBordBlank name="Петр Петров" score="8501 очков" picture=""/>
                </LeaderBordContent>
                <PaginationButtons/>
            </LeaderContainer>
        )
    }
}

export default LeaderBordContainer