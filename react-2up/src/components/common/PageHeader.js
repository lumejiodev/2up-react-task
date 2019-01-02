import React from 'react';
import styled from 'styled-components';

const PageHeader = styled.div`
    text-align: left;
    padding: 20px 34px 24px 34px;
    background-color: ${props => props.color ? '#7AD18A' : '#847AD1'}; //почему-то не работает это условие
`;

const pageHeader = (props) => {
    return (
        <PageHeader>
            {props.children}
        </PageHeader>
    )
};
export default pageHeader


