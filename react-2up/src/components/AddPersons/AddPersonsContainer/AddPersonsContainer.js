import React from 'react';
import styled from 'styled-components';
import AddPersonsForm from '../AddPersonsForm/AddPersonsForm';
const AddPersonsContainer = styled.div`
    flex-basis: 40%;
    background-color: #ffffff;
    max-width: 532px;
    min-width: 350px;
`;

const PageHeader = styled.div`
    text-align: left;
    padding: 20px 34px 24px 34px;
    background-color: #7AD18A;
`;

const PageHeaderTitle = styled.p`
    color: white;
    font-size: 22px;
    white-space: nowrap;
`;


const addPersonsContainer = () => {
    return (
        <AddPersonsContainer>
            <PageHeader>
                <PageHeaderTitle>Добавить участника</PageHeaderTitle>
            </PageHeader>
            <AddPersonsForm/>
        </AddPersonsContainer>
    )
};

export default addPersonsContainer