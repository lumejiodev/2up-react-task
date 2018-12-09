import React from 'react';
import styled from 'styled-components';
import AddPersonsContainer from "../components/AddPersons/AddPersonsContainer/AddPersonsContainer";
import LeaderBordContainer from '../components/LeadersBord/LeadersBordContainer/LeaderBordContainer';
import Dashboard from '../components/Dashboard/Dashboard';
const PageContainer = styled.div`
    max-width: 1392px;
    display: flex;
    justify-content: space-between;
`;

const pagecontainer = () => {
    return (
        <PageContainer>
            <Dashboard/>
            <AddPersonsContainer/>
            <LeaderBordContainer/>
        </PageContainer>
    )
};

export default pagecontainer