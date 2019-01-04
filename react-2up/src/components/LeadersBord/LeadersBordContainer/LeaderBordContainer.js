import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import LeaderBordBlank from '../LeadersBordBlank/LeaderBordBlank';
import PaginationButtons from '../Paginations/PaginationButtons';
import rank1 from '../../../assets/images/rank1.png';
import rank2 from '../../../assets/images/rank2.png';
import rank3 from '../../../assets/images/rank3.png';
import PageColumnContainer from '../../common/PageColumnContainer';
import PageHeader from '../../common/PageHeader';
import PageHeaderTitle from '../../common/PageHeaderTitle';

const LeaderBordContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 21px 28px 21px 28px;
`;

class LeaderBordContainer extends Component {
    render () {
        return (
            <PageColumnContainer>
                <PageHeader color={false}>
                    <PageHeaderTitle>Лидеры</PageHeaderTitle>
                </PageHeader>
                <LeaderBordContent>
                    <LeaderBordBlank name={this.props.name} score={this.props.score} picture={rank1}/>
                    <LeaderBordBlank name="Иван Петров" score="8801" picture={rank2}/>
                    <LeaderBordBlank name="Иван Иванов" score="8701" picture={rank3}/>
                    <LeaderBordBlank name="Петр Петров" score="8601" picture=""/>
                    <LeaderBordBlank name="Петр Петров" score="8501" picture=""/>
                </LeaderBordContent>
                <PaginationButtons/>
            </PageColumnContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        score: state.score,
        picture: state.picture
    };
};

export default connect(mapStateToProps)(LeaderBordContainer);