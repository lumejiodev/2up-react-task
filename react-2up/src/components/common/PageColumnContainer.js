import React from 'react';
import styled from 'styled-components';

const PageColumnContainer = styled.div`
    flex-basis: 40%;
    background-color: #ffffff;
    max-width: 532px;
    min-width: 350px;
`;

const pageColumnContainer = (props) => {
    return (
        <PageColumnContainer>
            {props.children}
        </PageColumnContainer>
    )
};

export  default pageColumnContainer


