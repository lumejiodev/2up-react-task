import React from 'react';
import AddPersonsForm from '../AddPersonsForm/AddPersonsForm';
import PageColumnContainer from '../../common/PageColumnContainer';
import PageHeader from '../../common/PageHeader';
import PageHeaderTitle from '../../common/PageHeaderTitle';

const addPersonsContainer = () => {
    return (
        <PageColumnContainer>
            <PageHeader color={true}>
                <PageHeaderTitle>Добавить участника</PageHeaderTitle>
            </PageHeader>
            <AddPersonsForm/>
        </PageColumnContainer>
    )
};

export default addPersonsContainer