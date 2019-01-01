import React from 'react';
import styled from 'styled-components';

const PageHeaderTitle = styled.p`
    color: white;
    font-size: 22px;
    white-space: nowrap;
`;

const pageHeaderTitle = (props) => {
    return  (
        <PageHeaderTitle>{props.children}</PageHeaderTitle>
    )

};

export default pageHeaderTitle


